---
title: 设置参考
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# 设置参考

本页跟踪会影响日常管理以及 Ultimate Multisite 中近期行为变更的设置。

## 其他选项

**其他选项**区域显示在 **Ultimate Multisite > Settings > Login & Registration** 下。

| 设置 | 描述 |
|---|---|
| **启用 Jumper** | 在管理区域显示 Jumper 快速导航工具。可用它直接跳转到 Ultimate Multisite 页面、网络对象和受支持的管理目标。如果你不希望显示此快捷入口，可将其禁用。 |

## 错误报告和遥测

之前的错误报告选择加入设置已从设置页面移除。匿名遥测已禁用，并且没有可启用它的 UI 开关。

如果你维护设置页面的内部运行手册或截图，请移除对旧错误报告选择加入字段的引用，以免管理员寻找已不存在的设置。

## 导入/导出设置

**导入/导出**设置标签页说明其控制哪些设置，并直接链接到 **Ultimate Multisite > Site Export**，用于站点和网络归档。使用该设置标签页进行导入/导出配置；使用 **Tools > Export & Import** 执行单站点导出/导入工作流；当你需要完整的 Network Export 归档时，请使用 Site Export 工具。

## Domain Seller HostAfrica 余额警告

当 Domain Seller addon 连接到 HostAfrica 时，如果经销商 Account 余额过低，无法可靠处理域名注册或续费，网络管理员现在会看到可关闭的余额不足警告。

请将此通知视为运营警告：在接受更多付费域名注册之前，为 HostAfrica 经销商余额充值，然后返回 Domain Seller 设置或域名监控页面，以确认注册和续费可以正常继续。

## AI provider connector 设置

AI provider connector 设置现在仅公开受支持的 OAuth Account 池：

| Provider | 设置流程 |
|---|---|
| **Anthropic Max** | 使用 OAuth 按钮连接一个或多个 Anthropic Max Account。当沙盒浏览器无法自动完成重定向时，请使用手动 OAuth 后备方式。 |
| **OpenAI ChatGPT/Codex** | 通过相同的 OAuth 池工作流连接 ChatGPT Account。连接 Account 后，connector 支持的操作可以使用 ChatGPT Codex 工具调用。 |
| **Google AI Pro** | 通过 OAuth 连接 Google AI Pro Account；如果 Account 列表没有立即更新，请刷新 connector。 |

Cursor Pro 不再是受支持的 provider。请移除提到 Cursor Pro 设置字段或 connector 路径的旧内部截图、运行手册或入门步骤。

添加或移除 provider Account 时，请为要刷新或删除的 Account 输入有效的电子邮件地址，并在测试由 connector 支持的操作之前保存 provider 设置。
