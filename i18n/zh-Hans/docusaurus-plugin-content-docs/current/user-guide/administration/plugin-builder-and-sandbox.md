---
title: 插件构建器与沙箱
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 引入了 **Plugin Builder & Sandbox System**，该系统允许 AI 助手在安全、隔离的沙盒环境中为您的网络生成、激活和管理 WordPress 插件。

## Overview

Plugin Builder 使 AI 助手能够根据自然语言请求编写自定义 WordPress 插件。生成的插件会在影响实际网站功能之前，先经过验证、存储并在沙盒层中激活。

使用场景包括：

- 无需开发人员参与，生成轻量级的实用工具插件。
- 为需要 WordPress hooks 或自定义文章类型的特性进行原型设计。
- 为批量操作创建短期自动化脚本。

## Generating a Plugin via AI

要生成一个插件，请打开 Gratis AI Agent 的聊天界面，并描述您的需求。例如：

> "Create a plugin that adds a custom admin notice on the dashboard."

AI 将会：

1. 使用结构化代码生成的方式，生成插件的 PHP 代码。
2. 对输出进行验证，检查语法错误和不安全的模式。
3. 将生成的插件保存到沙盒存储区。
4. 返回一个确认信息，其中包含插件的 slug 和一个 **Activate in Sandbox** 按钮。

您可以在激活之前，通过在同一对话线程中进行后续追问来完善结果。

## Sandbox Activation

在沙盒中激活一个生成的插件，与在实际网络中激活它是不同的。沙盒会：

- 在一个隔离的 WordPress 环境（wp-env）中运行该插件。
- 捕获任何 PHP 错误、警告或 hook 冲突。
- 将激活结果报告回聊天界面。

要将插件在沙盒中激活，请点击 AI 聊天回复中的 **Activate in Sandbox** 按钮，或使用斜杠命令：

```
/activate-plugin <plugin-slug>
```

系统会显示一条状态消息，确认激活是否成功或失败。如果失败，错误日志将显示在聊天线程中。

## Managing Generated Plugins

生成的插件列在 **Gratis AI Agent → Plugin Builder → Manage Plugins**。从这个界面，您可以：

| Action | Description |
|---|---|
| **View source** | 查看完整的插件 PHP 代码。 |
| **Re-activate in sandbox** | 重新运行沙盒激活检查。 |
| **Install on network** | 将插件部署到实际网络（需要手动确认）。 |
| **Update** | 通过 AI 提供新版本，替换现有代码。 |
| **Delete** | 从沙盒存储区移除插件。会先将其从所有站点禁用。 |

:::warning
**Install on network** 会将生成的插件部署到您的实际 WordPress multisite。在继续之前，请仔细审查插件代码。Gratis AI Agent 在完成实际安装前会提示您确认。
:::

## Installing a Generated Plugin on the Network

当您对一个沙盒插件感到满意时，可以将其安装到实际网络：

1. 导航到 **Gratis AI Agent → Plugin Builder → Manage Plugins**。
2. 点击您想要部署的插件旁边的 **Install on Network**。
3. 确认对话框。插件将被安装到 `wp-content/plugins/` 并网络激活。

或者，您可以在聊天界面使用斜杠命令：

```
/install-plugin <plugin-slug>
```

## Plugin Updates

要更新一个生成的插件，请在新的对话中向 AI 助手描述更改：

> "Update the dashboard-notice plugin to only show the notice to administrators."

AI 会生成一个新版本，该版本会与当前版本一起出现在沙盒中。您需要审查差异（diff），并在应用更新之前确认。

## HookScanner Integration

Plugin Builder 使用集成的 **HookScanner** 来分析每个生成插件注册的 hooks 和 filters。HookScanner 的输出会显示在聊天回复中，包括：

- 注册的 Action hooks（`add_action` 调用）。
- 注册的 Filter hooks（`add_filter` 调用）。
- 在插件依赖中找到的任何 hooks（会跳过 `vendor/` 和 `node_modules/` 目录）。

这帮助您在激活插件之前了解其行为。

## Security Considerations

- 生成的插件与手动安装的插件分开存储，在您明确将其安装到网络之前，无法通过标准的 WordPress 插件管理界面访问。
- 沙盒使用路径验证来防止在写入插件文件时发生目录遍历。
- 包含危险函数调用（例如 `eval`、`exec`、`system`）的插件在验证过程中会被标记，并且不会被激活。
