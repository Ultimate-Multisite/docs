---
title: 设置 Stripe
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# 设置 Stripe 网关 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

您可以在我们的支付设置页面激活多达四种支付方式：Stripe、Stripe Checkout、PayPal 和 Manual。在本文中，我们将了解如何与 **Stripe** 集成。

## 启用 Stripe

要在您的网络上启用 Stripe 作为可用支付网关，请转到 **Ultimate Multisite > Settings > Payments** 并在“Active Payment Gateways”部分勾选 **Stripe** 或 **Stripe Checkout** 旁边的切换开关。

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe 与 Stripe Checkout 对比：

**Stripe：** 该方法将在结账时显示一个输入信用卡号码的空间。

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout：** 该方法将在结账时将客户重定向到 Stripe Checkout 页面。

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

获取您的 Stripe API 密钥

一旦 Stripe 被启用为支付网关，您需要填写 **Stripe Publishable Key** 和 **Stripe Secret Key** 字段。您可以通过登录 Stripe 账户获取这些信息。

_**注意：** 您可以激活 **Sandbox mode** 来测试支付方式是否正常工作。_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

在您的 Stripe 仪表盘中，点击右上角的 **Developers**，然后在左侧菜单中选择 **API Keys**。

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

您可以使用 **Test Data**（以测试集成是否在您的生产站点上正常工作）或不使用。要更改此设置，请切换 **Viewing test data** 开关。

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

复制 **Publishable key** 和 **Secret key**（来自 **Token** 列）的值，并粘贴到 Ultimate Multisite Stripe Gateway 字段中。然后点击 **Save Changes**。

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## 设置 Stripe Webhook

Stripe 发送 webhook 事件，任何在 **您的 Stripe 账户** 上发生的事件都会通知 Ultimate Multisite。

点击 **Developers**，然后在左侧菜单中选择 **Webhooks** 项。随后在右侧点击 **Add endpoint**。

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

您需要一个 **Endpoint URL**。Ultimate Multisite 会自动生成该 URL，您可以在 **Ultimate Multisite Stripe Gateway** 部分的 **Webhook Listener URL** 字段下方找到。section_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**复制** 端点 URL 并 **粘贴** 到 Stripe 的 **Endpoint URL** 字段。

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

接下来选择一个 **Event**。在此选项下，您只需勾选 **Select all events** 框并点击 **Add events**。然后点击 **Add Endpoint** 保存更改。

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

就这样，您的 Stripe 支付集成完成！
