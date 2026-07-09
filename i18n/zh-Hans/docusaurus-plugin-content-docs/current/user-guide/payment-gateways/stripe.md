---
title: 设置 Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# 设置 Stripe Gateway (v2)

_**重要提示：本文适用于 Ultimate Multisite 版本 2.x。**_

你可以在我们的付款设置页面启用最多四种付款方式：Stripe、Stripe Checkout、PayPal 和手动。在本文中，我们将了解如何与 **Stripe** 集成。

## 启用 Stripe

要在你的网络上启用 Stripe 作为可用的支付网关，请前往 **Ultimate Multisite > Settings > Payments**，并在 Active Payment Gateways 部分勾选 **Stripe** 或 **Stripe Checkout** 旁边的切换开关。

![在活动支付网关中启用 Stripe](/img/config/settings-payment-gateways.png)

### Stripe 与 Stripe Checkout：

**Stripe：** 此方法会在结账期间显示一个用于输入信用卡号的区域。

![结账期间的 Stripe 内嵌信用卡字段](/img/config/settings-payment-gateways.png)

**Stripe Checkout：** 此方法会在结账期间将客户重定向到 Stripe Checkout 页面。

![结账期间的 Stripe Checkout 重定向页面](/img/config/settings-payment-gateways.png)

获取你的 Stripe API 密钥

启用 Stripe 作为支付网关后，你需要填写 **Stripe Publishable Key** 和 **Stripe Secret Key** 字段。你可以通过登录你的 Stripe 账户来获取这些信息。

_**注意：** 你可以启用 **Sandbox mode** 来测试付款方式是否正常工作。_

![Stripe API 密钥字段和沙盒模式切换开关](/img/config/settings-payment-gateways.png)

在你的 Stripe dashboard 中，点击右上角的 **Developers**，然后点击左侧菜单中的 **API Keys**。

![Stripe dashboard 中带有 API Keys 的 Developers 部分](/img/config/settings-payment-gateways.png)

你可以选择使用 **Test Data**（用于测试集成在你的生产站点上是否正常工作），也可以不使用。要更改此设置，请切换 **Viewing test data** 开关。

![Stripe Viewing test data 切换开关](/img/config/settings-payment-gateways.png)

从 **Token** 列复制 **Publishable key** 和 **Secret key** 的值，并将其粘贴到 Ultimate Multisite Stripe Gateway 字段中。然后点击 **Save Changes**。

![Stripe 可发布密钥和秘密密钥值](/img/config/settings-payment-gateways.png)

![在 Ultimate Multisite 设置中粘贴 Stripe 密钥](/img/config/settings-payment-gateways.png)

## 设置 Stripe Webhook

每当 **你的 stripe 账户** 上发生事件时，Stripe 都会发送 webhook 事件来通知 Ultimate Multisite。

点击 **Developers**，然后在左侧菜单中选择 **Webhooks** 项。然后在右侧点击 **Add endpoint** *。*

![带有 Add endpoint 按钮的 Stripe Webhooks 页面](/img/config/settings-payment-gateways.png)

你需要一个 **Endpoint URL** *。* Ultimate Multisite 会自动生成 endpoint URL，你可以在 **Ultimate Multisite Stripe Gateway** 部分的 **Webhook Listener URL** 字段正下方找到它_。_

![Stripe gateway 设置中的 Webhook Listener URL 字段](/img/config/settings-payment-gateways.png)

**复制** endpoint URL，并将其**粘贴**到 Stripe 的 **Endpoint URL** 字段中。

![在 Stripe webhook 设置中粘贴 endpoint URL](/img/config/settings-payment-gateways.png)

接下来是选择一个 **Event** *。* 在此选项下，你只需勾选 **Select all events** 复选框，然后点击 **Add events**。之后点击 **Add Endpoint** 以保存更改。

![选择所有事件并添加 Stripe endpoint](/img/config/settings-payment-gateways.png)

就是这样，你的 Stripe 付款集成已完成！
