---
title: Zapier 集成
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# 集成 Ultimate Multisite 与 Zapier

在其中一篇文章中，我们讨论了 [Webhooks](webhooks.md) 并说明了它们如何用于与第三方应用集成。

使用 Webhooks 有点复杂，因为它需要高级的编码知识和捕获负载。使用 **Zapier** 是一种让你绕过这一难题的方法。

Zapier 与 5000+ 个应用集成，使不同应用之间的通信更容易。

你可以创建 **Triggers**，当你网络上发生事件时（例如创建账户并触发 account_create 事件）就会触发，或者在你的网络上生成 **Actions**，以响应外部事件（例如在你的 Ultimate Multisite 网络中创建一个新的账户会员）。

这之所以可行，是因为 **Ultimate Multisite Zapier's triggers** 和 **操作** 由 [REST API](https://developer.ultimatemultisite.com/api/docs/) 提供支持。

## 如何开始

首先，在 Zapier 应用列表中搜索 Ultimate Multisite。或者，你可以点击 [此链接](https://zapier.com/apps/wp-ultimo/integrations)。

进入你的仪表盘，点击左侧边栏的 **+** **Create Zap** 按钮来设置一个新的 Zap。

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

你将被重定向到 Zap 创建页面。

在搜索框中输入 "wp ultimo"。点击选择 **Beta** 版本选项。

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

选择我们的应用后，选择可用事件：**New Ultimate Multisite Event**。

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

现在我们需要授予 Zapier 访问 **你的网络** 的权限。点击 **Sign in** 将打开一个新窗口，要求提供 **API 凭证**。

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

进入你的网络管理员面板，导航到 **Ultimate Multisite > Settings** > **API & Webhooks**，并查找 API 设置 部分。

选择 **启用 API** 选项，因为此连接需要它才能工作。

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

使用 **复制到剪贴板** 图标复制 API Key 和 API Secret 字段的值，并将其粘贴到集成屏幕上。

在 URL 字段中，输入你网络的完整 URL，包括协议（HTTP 或 HTTPS）。

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

点击 **是的，继续** 按钮进入下一步。如果一切顺利，你应该会看到新的已连接账户！点击 **继续** 创建新的触发器。

## 如何创建新的触发器

现在你的账户已连接，你可以看到可用事件。让我们为本教程选择 **payment_received** 事件。

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

选择事件后，点击 **继续**，将出现一个 **测试步骤**。

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

在此阶段，Zapier 将测试你的 Zap 是否能 **获取该事件的特定负载**。在同类型的后续事件中，将发送具有相同结构的信息。

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

在我们的教程中，测试 **成功完成** 并返回了负载示例信息。此示例信息在创建操作时将对我们有所帮助。你的触发器现在已创建完毕，准备连接到其他应用。

## 如何创建操作

操作使用来自其他触发器的信息，在你的网络中创建新的条目。

在 **创建操作步骤** 中，你将选择 Ultimate Multisite **Beta** 以及 **在 Ultimate Multisite 创建项目** 选项。

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

在下一步中，你可以像在 **如何开始** 中那样创建身份验证，或者选择已创建的身份验证。在本教程中，我们将选择之前创建的相同身份验证。

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### 设置操作

这是 **操作的主要步骤**，这里的流程略有不同。你首先需要选择 **Item**。Item 是你网络的 **信息模型**，例如 **客户, 支付, 站点, 电子邮件** 等。

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

选择项目后，表单将 **重新排列以显示所需和可选字段**，以适应所选项目。

例如，选择项目 **客户** 时，表单字段将显示创建网络中新客户所需的所有信息。

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

填写所有标记为 **必填** 的字段并点击 **继续** 后，最后一个屏幕将显示已填写的字段以及未填写的字段。

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

一旦测试完成且成功，你的操作就已配置完毕。还需要在网络中检查该项目是否已通过测试创建。
