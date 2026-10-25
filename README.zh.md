---
description: "面向 Web 配置档案的可选 VIP 梦幻主题与界面效果。"
kind: "package-bundle"
---

# @deepseek-ai/dsh-theme

[English](README.md) | 中文

## 概述

这是 Web 客户端的可选配置档案插件，包含完整的「主题与壁纸」功能：六款可选主题、壁纸预览、配色、VIP 金色界面强调、玻璃表面、授权显示字体和光影效果。资源及主题选择保存在配置档案中，DSH 应用升级后仍会保留。

## 使用本包

打开 **设置 → 插件 → 更多 → 官方**，找到 **VIP 金耀**，为 Web 配置档案安装并启用。也可以通过 `dsh plugin --profile web add E:\home\dsh-theme` 安装本地副本。

「主题与壁纸」页面包含 VIP 金耀、海盐蓝、竹青、珊瑚粉、薰衣草紫和午夜靛蓝。选择任意卡片会把主题 id 保存到 `ui-theme` 设置，重启后仍会选中该主题。新配置档案使用默认系统配色时，启用插件会默认选择 VIP 金耀。在「插件」中停用本插件会移除六张壁纸卡和主题资源；核心浅色、深色及系统配色仍可使用。旧设置中的 `official-vip-dream` 会迁移为 VIP 金耀。

浏览器插件通过 `ctx.theme` 注册六款可选主题，并使用可卸载的 effect 安装 VIP 样式。壁纸图片和授权字体都属于插件包，因此不依赖应用安装目录，也不需要联网下载。

## 支持版本

本插件面向 DSH `0.2.1-rc.3` 及后续 `0.2.x` 版本，这些版本的 `dsh-client-ui-theme` 导出外部主题元数据字段。超出该范围的 DSH 版本需要使用兼容版本的插件。

## 许可

壁纸美术资源均包含在包内。GuruQiuWan 显示字体及 Apache-2.0 许可声明也随包提供，详见 `font-license.txt` 和 `LICENSE-2.0.txt`。

## 相关文档

- [主题扩展 API](../../client/ui-theme/README.zh.md#registering-a-theme)
- [VIP 金耀详情](docs/DETAIL.zh.md)
