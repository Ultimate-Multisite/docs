---
title: Ultimate AI Connector 兼容端点更新日志
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector 兼容端点更新日志 {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## Version 2.0.0 — 发布于 2026-04-24 {#version-200--released-on-2026-04-24}

* **新增：** 多提供商支持 — 配置多个 AI 端点，并实现跨提供商的请求路由和自动回退机制。
* **修复：** 改进了多提供商 SDK 集成，确保了正确的提供商 ID、注册 URL 和每个提供商的 HTTP 过滤器作用域。
* **修复：** 新的提供商卡片现在添加后会自动展开；插件更新时增加了脚本缓存清除机制。
* **修复：** 为 `eval()` 提供了动态提供商类命名空间，并为新添加的提供商实现了自动展开功能。
* **修复：** 使用了稳定的 Card/CardBody/CardHeader/CardDivider 组件（不再是实验性组件），以确保与 WordPress 6.9+ 的兼容性。
* **修复：** 将未定义的 DragHandle 替换为 Unicode 握柄图标，用于提供商的拖拽排序。
* **修复：** 移除了在每次页面加载时触发的阻塞式 HTTP 请求。
* **改进：** GitHub Actions 工作流已升级到 Node.js 24。

## Version 1.0.0 — 初次发布 {#version-100--initial-release}
