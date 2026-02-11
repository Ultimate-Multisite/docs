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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe 与 Stripe Checkout 对比：

**Stripe：** 该方法将在结账时显示一个输入信用卡号码的空间。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout：** 该方法将在结账时将客户重定向到 Stripe Checkout 页面。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

获取您的 Stripe API 密钥

一旦 Stripe 被启用为支付网关，您需要填写 **Stripe Publishable Key** 和 **Stripe Secret Key** 字段。您可以通过登录 Stripe 账户获取这些信息。

_**注意：** 您可以激活 **Sandbox mode** 来测试支付方式是否正常工作。_

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

在您的 Stripe 仪表盘中，点击右上角的 **Developers**，然后在左侧菜单中选择 **API Keys**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

您可以使用 **Test Data**（以测试集成是否在您的生产站点上正常工作）或不使用。要更改此设置，请切换 **Viewing test data** 开关。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

复制 **Publishable key** 和 **Secret key**（来自 **Token** 列）的值，并粘贴到 Ultimate Multisite Stripe Gateway 字段中。然后点击 **Save Changes**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## 设置 Stripe Webhook

Stripe 发送 webhook 事件，任何在 **您的 Stripe 账户** 上发生的事件都会通知 Ultimate Multisite。

点击 **Developers**，然后在左侧菜单中选择 **Webhooks** 项。随后在右侧点击 **Add endpoint**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

您需要一个 **Endpoint URL**。Ultimate Multisite 会自动生成该 URL，您可以在 **Ultimate Multisite Stripe Gateway** 部分的 **Webhook Listener URL** 字段下方找到。section_._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**复制** 端点 URL 并 **粘贴** 到 Stripe 的 **Endpoint URL** 字段。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

接下来选择一个 **Event**。在此选项下，您只需勾选 **Select all events** 框并点击 **Add events**。然后点击 **Add Endpoint** 保存更改。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

就这样，您的 Stripe 支付集成完成！
