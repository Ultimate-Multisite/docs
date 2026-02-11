---
title: Webhooks
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Webhooks（v2）初探

_**注意：此功能或文章面向高级用户。**_

**webhook** 是一种让像 Ultimate Multisite 这样的应用或软件向其他应用提供实时信息的方式。Webhook 在事件发生时立即将数据或负载传递给其他应用，意味着你 **立即获得数据。**

如果你需要在每次事件触发时将 Ultimate Multisite 的某些数据集成或传递到另一个 CRM 或系统，这将非常有用。例如，每当创建新用户账户时，你需要将用户的姓名和电子邮件地址发送到邮件列表。

## 如何创建 webhook

要创建 webhook，请进入你的网络管理员仪表盘。点击 **Ultimate Multisite > Webhooks > Add New Webhook.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7cBdC7uhfX.png)

创建新 webhook 时，你会被要求填写诸如 **名称, URL,** 和 **事件** 等信息。你可以为你的 webhook 使用任何你想要的名称。最重要的字段是 URL 和事件。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7MmyV3wafK.png)

URL 是 Ultimate Multisite 将发送 **负载或数据** 的 **端点或目标**。这就是将接收数据的应用程序。

Zapier 是用户最常用来简化与第三方应用集成的解决方案。没有像 Zapier 这样的平台，你需要手动创建自定义函数来捕获并处理数据。参阅本文关于 **how to use Ultimate Multisite webhook with Zapier.**

在本文中，我们将探讨 webhook 的基本工作原理以及 Ultimate Multisite 中可用的事件。我们将使用一个名为 [requestbin.com](https://requestbin.com/) 的第三方网站。该网站允许我们创建一个 endpoint 并捕获负载，而无需任何编码。_**免责声明：它仅会向我们展示数据已被接收。**_ 不会对负载进行任何处理或操作。

访问 [requestbin.com](https://requestbin.com/) 并点击 Create Request Bin。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J0e5FzS04g.png)

点击该按钮后，如果你已有账号会提示你登录，若没有则需要注册。若已有账号，系统会直接跳转到仪表盘。在仪表盘上，你会立即看到可用于创建 Ultimate Multisite webhook 的 endpoint 或 URL。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M40kPMGsji.png)

复制该 URL 并返回 Ultimate Multisite。在 URL 字段中粘贴 endpoint，并从下拉菜单中选择一个事件。在此示例中，我们将选择 **付款已收到**。

每当用户完成付款时，该事件就会触发。所有可用事件、其描述和负载均列在页面底部。点击 **添加新 Webhook** 按钮保存 webhook。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1NwqQP4bP0.png)

我们现在可以向 endpoint 发送测试事件，以查看我们创建的 webhook 是否正常工作。可以通过点击已创建 webhook 下的 **发送测试事件** 来完成。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zTDhrG4wlP.png)

这会弹出一个确认窗口，表示测试成功。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9jP9r7yRT9.png)

现在如果返回 _Requestbin_ 网站，我们会看到负载已被接收，并包含一些测试数据。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RZke5xnrAg.png)

这就是 webhook 与 endpoint 工作的基本原理。如果你想创建自定义 endpoint，需要编写自定义函数来处理从 Ultimate Multisite 接收的数据。
