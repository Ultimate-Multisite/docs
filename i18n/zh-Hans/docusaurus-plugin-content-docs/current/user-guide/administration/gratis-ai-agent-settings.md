---
title: 免费 AI Agent 设置
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent 设置

Gratis AI Agent 的 **设置 → 高级** 界面提供了 v1.5.0 版本引入的后端集成管理配置。本页面记录了 **反馈端点** 的字段及其预期格式。

## 访问设置

1. 在 WordPress 管理后台，前往 **Gratis AI Agent → 设置**。
2. 点击 **高级** 选项卡。

## 反馈端点配置

当用户通过点赞/点踩按钮、自动提示横幅或 `/report-issue` 命令提交反馈时，反馈端点会接收来自 AI agent 的 POST 请求。

| 字段 | 描述 |
|---|---|
| **Feedback Endpoint URL** | 接收反馈提交的 URL，这些提交是以带有 JSON body 的 HTTP POST 请求形式到达的。 |
| **Feedback API Key** | 一个发送在每个反馈请求 `Authorization` header 中的 bearer token。如果您的端点不需要身份验证，请留空。 |

### 预期的 JSON Payload

您的反馈端点必须接受至少包含以下字段的 JSON body：

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "关于定价的答案是错误的。",
  "triage_category": "factual_error"
}
```

根据对话上下文，Payload 中可能包含其他字段。

### `triage_category` 值

AI 筛选层（triage layer）在转发 Payload 之前，会为 `triage_category` 分配以下值之一：

| 值 | 含义 |
|---|---|
| `factual_error` | 助手提供了不准确的事实信息。 |
| `unhelpful_answer` | 回复在技术上是正确的，但没有帮助。 |
| `inappropriate_content` | 回复包含不应向用户展示的内容。 |
| `other` | 反馈不属于任何已知类别。 |

### 身份验证

如果您的端点需要身份验证，请将 **Feedback API Key** 字段设置为您的 bearer token。agent 发送的格式如下：

```
Authorization: Bearer <your-api-key>
```

如果 **Feedback API Key** 字段为空，则不会发送 `Authorization` header。

### 禁用反馈收集

请将 **Feedback Endpoint URL** 和 **Feedback API Key** 字段都留空。点赞/点踩按钮和反馈 UI 仍然对用户可见，但提交内容不会转发到任何外部服务。

## Brave Search API Key

在 **高级** 选项卡中，**Brave Search API Key** 字段启用了 [Internet Search](../configuration/internet-search) 功能。

| 字段 | 描述 |
|---|---|
| **Brave Search API Key** | 您从 Brave Search developer dashboard 获取的 API key。启用 AI 助手网络搜索功能所必需。 |

该字段标签包含一个可点击的链接，指向 Brave Search API 注册页面。如果留空，则禁用网络搜索。

有关此功能的最终用户文档，请参阅 [Internet Search](../configuration/internet-search)。

## 功能开关 (Feature Flags)

功能开关也是在 v1.9.0 中引入的，**设置 → 功能开关** 选项卡提供了可选功能的切换开关。每个开关要么在整个网络中启用，要么禁用；目前没有按站点覆盖的选项。

### 访问功能开关

1. 在 WordPress 管理后台，前往 **Gratis AI Agent → 设置**。
2. 点击 **功能开关** 选项卡。

### 访问控制开关

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | 启用后，只有具有 `administrator` 角色的用户才能打开 AI Agent 聊天面板。其他所有角色将看到“联系您的管理员”消息。 |
| **Restrict to Network Admins** | Off | 在多站点网络上启用后，只有超级管理员（Super Admins）可以使用 agent。单个站点管理员将被阻止。如果两者都启用，此设置具有更高的优先级。 |
| **Allow Subscriber Access** | Off | 启用后，具有 `subscriber` 角色的用户可以使用聊天界面，但功能仅限于只读（不能创建文章或更改设置）。 |
| **Disable for Non-Members** | Off | 与 Ultimate Multisite 的会员状态集成。启用后，对于没有活跃会员资格的站点，聊天功能将被隐藏。 |

### 品牌化开关

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | 移除聊天小部件底部显示的品牌署名行。推荐用于白标部署。 |
| **Custom Agent Name** | *(blank)* | 用您自己的产品名称替换聊天标题和管理菜单中默认的“Gratis AI Agent”标签。留空则使用默认名称。 |
| **Hide Agent Picker** | Off | 启用后，用户无法在五个内置 agent 之间切换。当前 agent 将固定为在 Settings → General 中配置的默认值。 |
| **Use Site Icon as Chat Avatar** | Off | 用 WordPress 站点图标（在外观 → 自定义 → 站点身份设置）替换聊天小部件标题中的默认 AI 图标。 |

### 应用更改

切换任何开关后，请点击 **保存设置**。更改会立即生效——无需清除缓存或重新激活插件。
