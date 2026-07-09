---
title: Gratis AI Agent 设置
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent 设置

Gratis AI Agent 中的 **设置 → 高级** 屏幕为后端集成提供管理员级配置。本页面说明反馈转发、搜索提供商密钥、托管 Superdav 服务设置、Google Calendar 控制、TextBee SMS 设置，以及全网络功能标志。

## 访问设置

1. 在 WordPress 管理后台，前往 **Gratis AI Agent → 设置**。
2. 点击 **高级** 选项卡。

## 反馈 endpoint 配置

每当用户通过点踩按钮、自动提示横幅或 `/report-issue` 命令提交反馈时，反馈 endpoint 都会接收来自 AI agent 的 POST 请求。

| 字段 | 描述 |
|---|---|
| **反馈 Endpoint URL** | 以带有 JSON 正文的 HTTP POST 请求形式接收反馈提交的 URL。 |
| **Feedback API Key** | 在每个反馈请求的 `Authorization` header 中发送的 bearer token。如果你的 endpoint 不需要身份验证，请留空。 |

### 预期的 JSON 负载

你的反馈 endpoint 必须接受至少包含以下字段的 JSON 正文：

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

根据对话上下文，负载中可能会出现其他字段。

### `triage_category` 值

AI 分诊层会在转发负载之前，为 `triage_category` 分配以下值之一：

| 值 | 含义 |
|---|---|
| `factual_error` | 助手提供了不正确的事实信息。 |
| `unhelpful_answer` | 回复在技术上是正确的，但没有帮助。 |
| `inappropriate_content` | 回复包含不应展示给用户的内容。 |
| `other` | 反馈不匹配已知类别。 |

### 身份验证

如果你的 endpoint 需要身份验证，请将 **Feedback API Key** 字段设置为你的 bearer token。agent 会发送：

```
Authorization: Bearer <your-api-key>
```

如果 **Feedback API Key** 字段为空，则不会发送 `Authorization` header。

### 禁用反馈收集

将 **反馈 Endpoint URL** 和 **Feedback API Key** 字段都留空。点踩按钮和反馈 UI 仍会对用户可见，但提交内容不会转发到任何外部服务。

## Brave Search API Key

同样在 **高级** 选项卡上，**Brave Search API Key** 字段会启用 [互联网搜索](../configuration/internet-search) 能力。

| 字段 | 描述 |
|---|---|
| **Brave Search API Key** | 你来自 Brave Search 开发者 Dashboard 的 API 密钥。启用 AI 助手中的互联网搜索需要此密钥。 |

字段标签包含一个可点击链接，指向 Brave Search API 注册页面。留空可禁用互联网搜索。

有关此功能的最终用户文档，请参阅 [互联网搜索](../configuration/internet-search)。

## 托管 Superdav 服务

Superdav AI Agent v1.18.0 为受支持的站点添加了托管 Superdav 服务 endpoint 和自动连接预配。当你的站点应连接到托管提供商而不是手动配置的服务 endpoint 时，请使用这些控制项。

| 字段 | 描述 |
|---|---|
| **托管 Superdav 服务** | 为受支持的站点启用托管 Superdav 服务连接。 |
| **预配连接** | 启动自动 endpoint 和凭据预配。请在确认站点应使用托管提供商后使用此项。 |
| **服务 Endpoint / 连接状态** | 预配后显示当前 endpoint 或连接状态。 |

预配后，保存设置并验证连接状态，然后再依赖托管服务工作流。如果预配失败，请查看显示的重试指导，并确认站点有权限使用托管提供商。

## Google Calendar 配置

启用 Superdav AI Agent v1.18.0 日历功能后，agent 可以读取已配置的日历和活动详情。日历工具以读取为主，适用于具备日程感知能力的提醒、参会者跟进和联系人匹配。

| 字段 | 描述 |
|---|---|
| **Google Calendar 凭据** | 存储读取日历数据所需的凭据或 token 连接。 |
| **日历选择** | 限制 agent 可以检查哪些已配置日历。 |
| **日历连接状态** | 确认当前凭据是否可以读取日历和活动。 |

将日历凭据限制在 agent 所需的日历范围内。如果状态显示 token 已过期，请重新连接或轮换凭据。

## TextBee SMS 通知

Superdav AI Agent v1.18.0 添加了 TextBee 作为已配置通知工作流的 SMS 提供商。对于敏感消息或面向用户的消息，SMS 通知应与人工批准关卡配合使用。

| 字段 | 描述 |
|---|---|
| **TextBee API 密钥** | 对发送到 TextBee SMS 提供商的请求进行身份验证。 |
| **TextBee 设备 / 发送方** | 在提供商要求时，选择用于外发消息的 TextBee 发送方或设备。 |
| **已启用 SMS 通知** | 允许已批准的工作流发送短信通知。保持禁用可防止发送 SMS。 |

仅向管理员拥有的号码发送测试消息，然后在启用计划提醒或面向参会者的提醒之前，确认批准关卡的行为。

## 功能标志

同样在 v1.9.0 中引入的 **设置 → 功能标志** 选项卡为可选功能提供切换开关。每个标志在全网络范围内要么启用，要么禁用；目前没有按站点覆盖的设置。

### 访问功能标志

1. 在 WordPress 管理后台，前往 **Gratis AI Agent → 设置**。
2. 点击 **功能标志** 选项卡。

### 访问控制标志

| 标志 | 默认值 | 描述 |
|---|---|---|
| **限制为管理员** | 关闭 | 启用后，只有具有 `administrator` 角色的用户才能打开 AI Agent 聊天面板。所有其他角色将改为看到“请联系您的管理员”消息。 |
| **限制为网络管理员** | 关闭 | 在 multisite 网络上启用后，只有 Super Admins 可以使用该 agent。单个站点管理员会被阻止。如果两者都启用，则优先于“限制为管理员”。 |
| **允许订阅者访问** | 关闭 | 启用后，具有 `subscriber` 角色的用户可以使用聊天界面，但仅限于只读能力（不能创建文章或更改设置）。 |
| **对非会员禁用** | 关闭 | 与 Ultimate Multisite 会员资格状态集成。启用后，对于没有有效会员资格的站点，聊天会被隐藏。 |

### 品牌标志

| 标志 | 默认值 | 描述 |
|---|---|---|
| **隐藏“Powered by Gratis AI Agent”页脚** | 关闭 | 移除聊天小组件底部显示的品牌归属行。建议用于白标部署。 |
| **自定义 Agent 名称** | *(空白)* | 用您自己的产品名称替换聊天标题和管理员菜单中的默认“Gratis AI Agent”标签。留空则使用默认值。 |
| **隐藏 Agent 选择器** | 关闭 | 启用后，用户无法在五个内置 agent 之间切换。当前 agent 将固定为在 Settings → General 中配置为默认的那个。 |
| **使用站点图标作为聊天头像** | 关闭 | 将聊天小组件标题中的默认 AI 图标替换为 WordPress 站点图标（在 Appearance → Customize → Site Identity 下设置）。 |

### 自动化安全标志

Superdav AI Agent v1.18.0 引入人工审批关卡和提醒记录，以实现更安全的自动化运行。根据安装的软件包，这些控制项可能出现在功能标志或高级自动化设置中。

| 标志 | 默认值 | 描述 |
|---|---|---|
| **需要人工审批** | 建议开启 | 暂停敏感自动化，直到授权用户审核并确认拟议操作。 |
| **提醒去重** | 开启 | 记录已发送的提醒，使重试或计划运行不会发送重复通知。 |
| **启用日历工具** | 配置前关闭 | 允许 agent 读取已配置的 Google 日历和事件。 |
| **启用 SMS 通知** | 配置前关闭 | 在保存凭据后，允许已批准的工作流发送 TextBee SMS 通知。 |

### 应用更改

切换任何标志后，点击 **保存设置**。更改会立即生效——无需刷新缓存或重新激活插件。
