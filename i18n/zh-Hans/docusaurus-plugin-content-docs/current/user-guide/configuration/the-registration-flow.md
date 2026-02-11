---
title: 注册流程
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# 注册流程 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

用户可以通过不同方式在您的网络中注册。他们可以使用您的注册表单或共享链接来预选计划。本文将向您展示客户如何使用可用路径在您的网络中注册，以及他们注册后会发生什么。

## 使用注册表单：

这是标准的注册流程。您创建一个带有 **结账表单** 的注册页面，客户将在此页面注册到您的网络并订阅计划。如果需要，您可以拥有多个注册页面，每个页面使用不同的注册表单。

默认的注册页面是 [_**yourdomain.com/register**_](http://yourdomain.com/register)，但您可以随时在 **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** 中更改它。

当用户到达您的注册页面（通常点击 **Sign in** 或 **Buy now** 按钮）时，他们会在此看到您的注册表单。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hDcy7S8pBK.png)

他们只需填写所有必填字段——电子邮件、用户名、密码等……——并支付计划费用，或者在注册免费计划或带试用期的付费计划且不提供支付信息时确认其电子邮件地址。

在“Thank you”页面上，他们会看到一条消息，告知他们是否需要确认电子邮件地址，或者他们的网站是否已激活并可以开始使用。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FnXxCLt0YW.png)

如果需要确认电子邮件地址，他们需要前往邮箱并点击验证链接。如果电子邮件地址未被验证，他们的网站将不会激活。

如果他们已在付费计划中注册，或在您的网络中不强制要求电子邮件验证，他们的网站将在结账后立即激活，并会显示一个链接，供他们登录仪表盘。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DJwvUqQnQU.png)

## 使用可共享链接：

使用可共享链接注册的流程基本与注册表单相同，唯一的区别是通过可共享链接，您的客户可以在结账表单中预先选择产品或网站模板（参见“通过 URL 参数预选产品和模板”章节）或添加优惠码（参见“使用 URL 参数”章节）。

注册流程相同：他们需要填写姓名、用户名、电子邮件地址、网站名称和标题等……但计划或站点模板已为他们预先选择。

### 使用手动支付注册：

如果您不想使用 PayPal、Stripe 或 Ultimate Multisite 或其插件提供的任何其他支付网关，您可以为客户使用手动支付。这样，您可以在他们在网络中注册后生成发票，让他们在您首选的支付处理器上付款。

注册流程与上述完全相同，但在注册页面上，您的客户会看到一条消息，说明他们将收到一封电子邮件，其中包含完成付款的进一步说明。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iSli6MoFGw.png)

完成注册后，他们将看到您设置的付款说明（并且也会在电子邮件中收到）。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hX0GPWYfEA.png)

在 **Ultimate Multisite > Settings > Payments** 中开启 **Manual** 支付选项后，您可以更改付款说明：

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RpPGDd0BZo.png)

在客户完成手动支付并向您发送确认后，您需要 **手动确认付款** 以激活客户会员资格和网站。

为此，请转到 **Ultimate Multisite > Payments** 并找到客户付款。它仍应显示 **Pending** 状态。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-2rW0tFemEP.png)

点击付款编号，您可以将其状态更改为 **Completed**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KiRQKw3wGg.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-NPFNchZrUa.png)

将状态更改为 **Completed** 后，您应该会看到 **Activate membership** 消息。将此选项 **on** 开启，以激活与该客户关联的会员资格和网站。然后，点击 **Save Payment**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e3R91KmnUV.png)

您的客户现在应该能够访问仪表盘以及他们订阅的所有功能。
