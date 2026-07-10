---
title: 注册流程
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# 注册流程 (v2) {#the-registration-flow-v2}

_**重要说明：本文适用于 Ultimate Multisite 版本 2.x。**_

用户可以通过不同方式注册到你的网络。他们可以使用你的注册表单，或使用指向预先选择的套餐的可分享链接。这里我们将向你展示，你的客户如何通过可用路径注册到你的网络，以及他们注册到你的网络后会发生什么。

## 使用注册表单： {#using-the-registration-form}

这是标准注册流程。你创建一个带有**结账表单**的注册页面，这将是你的客户前往注册到你的网络并订阅套餐的地方。你可以拥有多个注册页面，如果你愿意，每个页面都可以使用不同的注册表单。

默认注册页面是 [_**yourdomain.com/register**_](http://yourdomain.com/register)，但你可以随时在 **Ultimate Multisite > 设置 > 登录与注册 > 默认注册页面** 中更改它。

用户进入你的注册页面后（通常是点击**登录**或**立即购买**按钮），他们会在那里看到你的注册表单。

![注册页面上显示的注册表单](/img/frontend/registration-form.png)

下面是结账表单在前端显示时的示例：

![前端结账注册表单](/img/config/checkout-frontend-registration.png)

他们需要做的只是填写所有必填字段——电子邮件、用户名、密码等——并为套餐付款；如果他们注册的是免费套餐，或注册的是带试用期且无需付款信息的付费套餐，则确认他们的电子邮件地址。

在“谢谢”页面上，他们会看到一条消息，告知他们是否需要确认电子邮件地址，或者他们的网站是否已经激活并可以开始使用。

![注册后的谢谢页面](/img/frontend/registration-thank-you.png)

如果需要确认电子邮件地址，他们需要前往自己的电子邮件收件箱并点击验证链接。如果他们的电子邮件地址未被验证，他们的网站将不会被激活。

如果他们注册的是付费套餐，或者你的网络不强制要求电子邮件验证，他们的网站将在结账后立即被激活，并会显示一个登录到其 Dashboard 的链接。

![网站已激活，并显示登录到 Dashboard 的链接](/img/frontend/site-activated.png)

## 使用可分享链接： {#using-a-shareable-link}

使用可分享链接注册的流程基本上与注册表单相同，唯一的区别是，使用可分享链接时，你的客户可以在结账表单中预先选择一个产品或网站模板（请参阅通过 URL 参数预先选择产品和模板一节），或者可能添加一个优惠券代码（请参阅使用 URL 参数一节）。

注册流程将相同：他们需要填写姓名、用户名、电子邮件地址、网站名称和标题等……但套餐或网站模板会已经为他们预先选择好。

### 使用手动付款注册： {#registering-using-manual-payments}

如果你不想使用 PayPal、Stripe 或 Ultimate Multisite 及其附加组件集成提供的任何其他支付网关，你可以为客户使用手动付款。这样，在他们注册到你的网络后，你可以生成一张发票，让他们在你偏好的支付处理器上付款。

注册流程将与上面完全相同，但在注册页面上，你的客户会看到一条消息，说明他们将收到一封包含完成付款进一步说明的电子邮件。

![注册期间的手动付款消息](/img/frontend/registration-manual-notice.png)

注册完成后，他们会看到你设置的付款说明（也会通过电子邮件收到）。

![注册后显示的付款说明](/img/frontend/registration-payment-instructions.png)

在开启 **手动**付款选项后，可以在 **Ultimate Multisite > 设置 > 付款** 中更改付款说明：

![带有付款说明字段的手动付款开关](/img/config/manual-gateway-settings.png)

在你的客户完成手动付款并向你发送确认后，你需要**手动确认付款**，以激活客户会员资格和网站。

要执行此操作，请前往 **Ultimate Multisite > 付款** 并找到客户付款。它应该仍然显示为**待处理**状态。

![包含待处理手动付款的付款列表](/img/admin/payments-list.png)

点击付款编号，你将能够把其状态更改为**已完成**。

![付款详情页面](/img/admin/payment-edit.png)

![将付款状态更改为已完成](/img/admin/payment-status-completed.png)

将其状态更改为**已完成**后，你应该会看到一条**激活会员资格**消息。将此选项切换为**开启**，以激活与该客户关联的会员资格和网站。然后，点击**保存付款**。

![激活会员资格开关和保存付款按钮](/img/admin/payment-activate-membership.png)

你的客户现在应该能够访问 Dashboard 以及他们订阅的所有功能。
