---
title: 设置手动支付
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# 设置手动支付 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

手动支付是一种方式，您可以在 **Stripe** 或 **PayPal** 对您的用户不可用时提供其他支付方式。它可以是电汇、银行转账或任何其他当地可用的支付方式。

## 如何启用手动支付

设置手动支付非常简单。您只需在支付网关下启用它，并提供详细的说明，告诉用户如何发送付款。

首先，进入 **Ultimate Multisite > Settings > Payments**。在 **Payment Gateways** 下，开启 **Manual**。您将看到一个 **Payment Instructions** 框出现。

在此框中添加客户完成付款所需的信息，例如您的银行账户详情和电子邮件，以便客户向您发送付款确认。

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

设置完成后，只需点击 **Save Settings**，即可完成。当用户注册到您的网络时，他们会看到一条消息，告知他们将收到完成购买的说明。

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

他们还会在您的 **Thank You** 页面收到一条包含付款说明的消息。

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## 确认手动支付

要确认手动支付，请在左侧栏的 **Payments** 菜单中操作。您可以在此查看网络中所有支付及其详细信息，包括 **status**。手动支付始终处于 **Pending** 状态，直到您手动更改。

![Payments list showing pending manual payment](/img/admin/payments-list.png)

点击 **reference code** 进入支付页面。在此页面中，您可以查看待处理支付的所有细节，例如参考 ID、产品、时间戳等。

![Payment details page with reference code and products](/img/admin/payments-list.png)

在右侧栏中，您可以更改支付状态。将其改为 **Completed** 并 **toggling the Activate Membership** 选项，将启用客户的网站并激活其会员资格。

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
