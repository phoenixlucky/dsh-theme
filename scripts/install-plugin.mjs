#!/usr/bin/env node
/**
 * Install or update this bundle in a DSH profile.
 *
 * `dsh plugin remove` rewrites package.json and pnpm-lock.yaml but can leave a `link:` junction in
 * the profile's node_modules. A later registry install of the same name then fails inside pnpm's
 * importPackage step, which follows that junction into the linked working copy and needs a
 * cross-drive symbolic link the account may not be allowed to create (EPERM on Windows).
 *
 * This script clears such a leftover link first — only the reparse point, never the linked working
 * copy — and then hands the install to `dsh plugin add`, so the dependency record and the bundle
 * selection stay in Harness's hands.
 */
import { spawnSync } from 'node:child_process'
import { lstat, readlink, unlink } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join, resolve } from 'node:path'

const PACKAGE = '@tinyforge/dsh-theme'

const usage = () => {
  process.stderr.write(`usage: node scripts/install-plugin.mjs --profile <name> [options]

  --profile <name>   DSH profile to install into (required)
  --version <ver>    registry version to install; defaults to the latest published one
  --local <dir>      install the working copy at <dir> instead of the registry build
  --home <dir>       DSH home holding profiles/; defaults to $DSH_HOME or ~/.dsh
  --dsh <path>       dsh executable; defaults to "dsh" from PATH
  --dry-run          report what would change, then exit without installing
`)
}

const fail = (message) => {
  process.stderr.write(`install-plugin: ${message}\n`)
  process.exit(1)
}

const parseArgs = (argv) => {
  const options = {}
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index]
    if (flag === '--dry-run') { options.dryRun = true; continue }
    if (flag === '--help' || flag === '-h') { usage(); process.exit(0) }
    if (!['--profile', '--version', '--local', '--home', '--dsh'].includes(flag)) fail(`unexpected argument ${JSON.stringify(flag)}`)
    const value = argv[index + 1]
    if (value === undefined || value.startsWith('--')) fail(`${flag} needs a value`)
    options[flag.slice(2)] = value
    index += 1
  }
  if (options.profile === undefined) { usage(); fail('--profile is required') }
  if (options.local !== undefined && options.version !== undefined) fail('pass either --version or --local, not both')
  return options
}

/** Quote one argument for the Windows command line the shell will parse. */
const quote = (value) => (/[\s"&|<>^]/.test(value) ? `"${value.replaceAll('"', '\\"')}"` : value)

const options = parseArgs(process.argv.slice(2))
const home = resolve(options.home ?? process.env.DSH_HOME ?? join(homedir(), '.dsh'))
const profileDir = join(home, 'profiles', options.profile)
const entry = join(profileDir, 'node_modules', ...PACKAGE.split('/'))

let leftover
try {
  leftover = await lstat(entry)
}
catch (error) {
  if (error.code !== 'ENOENT') fail(`cannot inspect ${entry}: ${String(error)}`)
}

if (leftover?.isSymbolicLink() === true) {
  const target = await readlink(entry).catch(() => '(unreadable)')
  if (options.dryRun) process.stdout.write(`install-plugin: would remove leftover link ${entry} -> ${target}\n`)
  else {
    await unlink(entry)
    process.stdout.write(`install-plugin: removed leftover link ${entry} -> ${target}\n`)
  }
}

const spec = options.local === undefined ? `${PACKAGE}@${options.version ?? 'latest'}` : resolve(options.local)
const command = [options.dsh ?? 'dsh', 'plugin', '--profile', options.profile, 'add', spec].map(quote).join(' ')

if (options.dryRun) {
  process.stdout.write(`install-plugin: would run ${command}\n`)
  process.exit(0)
}

process.stdout.write(`install-plugin: ${command}\n`)
const result = spawnSync(command, { stdio: 'inherit', shell: true })
if (result.error !== undefined) fail(String(result.error))
if (result.status !== 0) process.exit(result.status ?? 1)
process.stdout.write(`install-plugin: ${spec} is in ${profileDir}; quit DeepSeek Harness and start it again to load it\n`)
