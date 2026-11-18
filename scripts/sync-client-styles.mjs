import { readFile, writeFile } from 'node:fs/promises';

const stylesheetPath = new URL('../src/client/styles.css', import.meta.url);
const bundlePath = new URL('../lib/client.js', import.meta.url);
const stylesheet = (await readFile(stylesheetPath, 'utf8')).trim();

if (!stylesheet.includes('__VIP_HERO_ASSET__')) {
  throw new Error('Missing stylesheet placeholder: __VIP_HERO_ASSET__');
}

const bundle = await readFile(bundlePath, 'utf8');
const marker = '\t\tvar styles_css_default = ';
const start = bundle.indexOf(marker);
const end = bundle.indexOf('\n\t\t//#endregion', start);

if (start < 0 || end < 0 || bundle.indexOf(marker, start + marker.length) >= 0) {
  throw new Error('Expected exactly one embedded VIP stylesheet in lib/client.js');
}

const embeddedStylesheet = [
  `\t\tvar styles_css_default = ${JSON.stringify(stylesheet)}`,
  '\t\t\t.replaceAll("__VIP_HERO_ASSET__", require.asset("plugins/@tinyforge/dsh-theme/assets/hero-orbit-4e09640dbc7b.webp"));'
].join('\n');

await writeFile(bundlePath, `${bundle.slice(0, start)}${embeddedStylesheet}${bundle.slice(end)}`);
console.log('Updated lib/client.js stylesheet from src/client/styles.css');
