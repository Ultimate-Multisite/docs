---
title: Zapier 集成
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# 将 Ultimate Multisite 与 Zapier 集成

在其中一篇文章中，我们讨论了 [Webhook](webhooks.md)，以及它们如何用于与第三方应用程序集成。

使用 webhook 有点复杂，因为它需要高级的编码知识以及捕获 payload 的能力。使用 **Zapier** 是一种可以绕过这些复杂性的方式。

Zapier 集成了超过 5000+ 个应用程序，这使不同应用程序之间的通信更加容易。

你可以创建 **触发器**，当你的网络上发生事件时触发（例如，创建了一个 Account 并触发 account_create 事件），也可以在你的网络上生成响应外部事件的 **操作**（例如，在你的 Ultimate Multisite 网络中创建新的 Account 会员资格）。

这是可行的，因为 **Ultimate Multisite Zapier 的触发器** 和操作由 [REST API](https://developer.ultimatemultisite.com/api/docs/) 提供支持。

## 如何开始 {#how-to-start}

首先，在 Zapier 应用列表中搜索 Ultimate Multisite。或者，你可以点击[此链接](https://zapier.com/apps/wp-ultimo/integrations)。

前往你的 Dashboard，然后点击左侧边栏中的 **+** **创建 Zap** 按钮来设置新的 Zap。

![带有创建 Zap 按钮的 Zapier Dashboard](/img/admin/webhooks-list.png)

你将被重定向到 Zap 创建页面。

在搜索框中输入“wp ultimo”。点击选择 **Beta** 版本选项。

![在 Zapier 应用列表中搜索 WP Ultimo](/img/admin/webhooks-list.png)

选择我们的应用后，选择可用事件：**新的 Ultimate Multisite 事件**。

![选择新的 Ultimate Multisite 事件触发器](/img/admin/webhooks-list.png)

现在我们需要授予 Zapier 访问**你的网络**的权限。点击 **登录** 会打开一个新窗口，要求输入 **API 凭据**。

![Zapier 登录提示输入 API 凭据](/img/admin/webhooks-list.png)

前往你的网络管理面板，并导航到 **Ultimate Multisite > 设置** > **API 和 Webhook**，然后查找 API 设置部分。

选择 **启用 API** 选项，因为此连接需要它才能工作。

![包含 API 设置和启用 API 选项的 API 和 Webhook 设置](/img/admin/settings-api-webhooks.png)

在 API Key 和 API Secret 字段上使用 **复制到剪贴板** 图标，并将这些值粘贴到集成界面中。

在 URL 字段中，填入你的网络完整 URL，包括协议（HTTP 或 HTTPS）。

![包含 API Key、Secret 和 URL 字段的 Zapier 集成界面](/img/admin/webhooks-list.png)

点击 **是，继续** 按钮进入下一步。如果一切正常，你应该会看到新连接的 Account！点击 **继续** 创建新的触发器。

## 如何创建新的触发器 {#how-to-create-a-new-trigger}

现在你的 Account 已连接，你可以看到可用事件。让我们在本教程中选择 **payment_received** 事件。

![在 Zapier 触发器中选择 payment_received 事件](/img/admin/webhooks-list.png)

选择事件并点击 **继续** 后，会出现一个 **测试步骤**。

![触发器的 Zapier 测试步骤](/img/admin/webhooks-list.png)

在此阶段，Zapier 将测试你的 Zap 是否可以**获取该事件的特定 payload**。未来相同类型的事件中，将发送具有相同结构的信息。

![Zapier 触发器测试成功完成并显示 payload](/img/admin/webhooks-list.png)

在我们的教程中，测试已**成功完成**并返回了 payload 示例信息。此示例信息将在创建操作时为我们提供指导。你的触发器现在已创建，并准备好连接到其他应用程序。

## 如何创建操作 {#how-to-create-actions}

操作使用来自其他触发器的信息，在你的网络中创建新条目。

在**创建操作步骤**中，你将选择 Ultimate Multisite **Beta** 以及 **在 Ultimate Multisite 上创建条目** 选项。

![使用在 Ultimate Multisite 上创建条目来创建操作](/img/admin/webhooks-list.png)

在下一步中，你将创建身份验证，就像我们在**如何开始**中所做的那样，或者选择一个已创建的身份验证。在本教程中，我们将选择之前创建的同一个身份验证。

![为 Zapier 操作选择身份验证](/img/admin/webhooks-list.png)

### 设置操作 {#setting-up-the-action}

这是**操作的主要步骤**，这里的内容有些不同。你将选择的第一项信息是**条目**。条目是你网络的**信息模型**，例如**客户、付款、站点、电子邮件**等。

![为 Zapier 操作选择条目类型](/img/admin/webhooks-list.png)

选择某个条目时，表单将**重新排列，以显示所选条目的必填字段和可选字段**。

例如，选择条目**客户**时，表单字段将显示在网络中创建新客户所需填写的所有内容。

![Zapier 操作设置中的客户条目字段](/img/admin/webhooks-list.png)

填写所有标记为**必填**的字段并点击继续后，最后一个界面将显示你已填写的字段以及未填写的字段。

![显示已填写和未填写字段的 Zapier 操作测试](/img/admin/webhooks-list.png)

一旦你的测试完成并成功，你的操作就已配置完成。同时也很重要的是，在你的网络中检查该条目是否已通过你的操作测试创建。
