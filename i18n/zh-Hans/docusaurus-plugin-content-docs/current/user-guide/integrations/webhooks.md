---
title: 网络钩子
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks 初探 (v2)

_**注意：请注意，此功能或文章面向高级用户。**_

**webhook** 是一种让 Ultimate Multisite 这样的应用或软件向其他应用提供实时信息的方式。webhook 会在事件发生时将数据或 payload 传递给其他应用，这意味着你可以**立即获取数据。**

如果你需要在每次触发事件时，将某些数据从 Ultimate Multisite 集成或传递到另一个 CRM 或系统，这会很有帮助。例如，每次创建新用户 Account 时，你需要将用户的姓名和电子邮件地址发送到邮件列表。

## 如何创建 webhook {#how-to-create-a-webhook}

要创建 webhook，请前往你的网络管理 Dashboard。点击 **Ultimate Multisite > Webhooks > 添加新的 Webhook。**

![带有添加新的 Webhook 按钮的空 Webhooks 列表页面](/img/admin/webhooks-list-empty.png)

然后你可以编辑 webhook 配置：

![带有名称、事件和 URL 字段的添加新的 Webhook 表单](/img/admin/webhook-add-modal.png)

创建新的 webhook 时，系统会要求你提供 **名称、URL** 和 **事件** 等信息。你可以为你的 webhook 使用任何想要的名称。最重要的字段是 URL 和事件。

![显示 URL 字段和 payload 预览的 Webhook 编辑界面](/img/admin/webhook-url-field.png)

URL 是 Ultimate Multisite 将发送 **payload 或数据** 的**端点或目标地址**。这是接收数据的应用。

Zapier 是用户最常用的解决方案，可让与第三方应用的集成更轻松。如果没有像 Zapier 这样的平台，你将需要手动创建自定义函数来捕获并处理数据。请参阅这篇关于**如何将 Ultimate Multisite webhook 与 Zapier 一起使用**的文章。

在本文中，我们将了解 webhook 如何工作的基本概念，以及 Ultimate Multisite 中可用的事件。我们将使用一个名为 [requestbin.com](https://requestbin.com/) 的第三方站点。该站点允许我们创建端点并捕获 payload，而无需编写任何代码。_**免责声明：它所做的一切只是向我们显示数据已被接收。**_ 不会对 payload 进行任何处理或执行任何操作。

前往 [requestbin.com](https://requestbin.com/) 并点击 Create Request Bin。

点击该按钮后，如果你已有账户，它会要求你登录；否则注册。如果你已经有账户，它会直接带你进入他们的 Dashboard。在他们的 Dashboard 上，你会立即看到可用于创建 Ultimate Multisite webhook 的端点或 URL。

继续复制该 URL，然后返回 Ultimate Multisite。将端点放入 URL 字段，并从下拉菜单中选择一个事件。在此示例中，我们将选择 **Payment Received**。

每当用户付款时都会触发此事件。页面底部列出了所有可用事件、它们的描述和 payload。点击 **添加新的 Webhook** 按钮以保存 webhook。

![选择了 Payment Received 的 Webhook 事件下拉菜单](/img/admin/webhook-event-picker.png)

现在我们可以向端点发送一个测试事件，以查看我们创建的 webhook 是否正常工作。我们可以通过点击所创建 webhook 下方的 **发送测试事件** 来完成此操作。

![显示一个已配置 webhook 和发送测试操作的 Webhooks 列表](/img/admin/webhooks-list-populated.png)

这会显示一个确认窗口，说明测试已成功。

![发送测试 payload 后的 Webhook 测试事件结果](/img/admin/webhook-test-result.png)

现在如果我们回到 _Requestbin_ 站点，就会看到包含一些测试数据的 payload 已被接收。

这就是 webhook 和端点如何工作的基本原理。如果你要创建自定义端点，则需要创建自定义函数来处理你从 Ultimate Multisite 接收到的数据。
