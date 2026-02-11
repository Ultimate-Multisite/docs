---
title: 设置 PayPal
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# 设置 PayPal 网关 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

您可以在我们的支付设置页面激活多达四种支付方式：Stripe、Stripe Checkout、PayPal 和 Manual。在本文中，我们将了解如何与 **PayPal** 集成。

与 Stripe 类似，PayPal 在在线支付中被广泛使用，尤其是在 WordPress 网站上。本文将指导您如何在网络中使用 PayPal 作为可用的支付方式。

请注意，您需要拥有一个 **PayPal Business 账户**，以获取此集成所需的 API 凭证。

## 在您的网络中启用 PayPal

要在您的网络中将 PayPal 设为可用支付方式，请转到 **Ultimate Multisite > Settings > Payments** 选项卡，并勾选 PayPal 旁边的复选框。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FhlfHHJLPl.png)

## 获取 PayPal API 凭证

一旦 PayPal 被启用为支付网关，您需要填写 PayPal API **Username**、PayPal API **Password** 和 PayPal API **Signature** 字段。

您可以通过登录您的 PayPal [Live](https://www.paypal.com/home) 或 [Sandbox](https://www.sandbox.paypal.com/home) 账户获取。

(请记住，您可以使用 **sandbox 模式** 来测试支付并查看网关是否正确设置。只需切换相应的部分即可。)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PgTatIgsIm.png)

要为您的 PayPal 账户请求 API Signature 或 Certificate 凭证：

1. 转到您的 [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)。
2. 在 **API access** 部分，点击 **Update**。  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Dx72ARoKzx.png)
3. 在 **NVP/SOAP API integration (Classic)** 下，点击 **Manage API credentials**。  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mUoIzsfpMq.png)

   * 如果您已经生成了 API Signature 或 Certificate，您将被重定向到一个页面，在那里可以找到您的凭证。
   * _**注意：** 如果提示您验证 PayPal 账户，请按屏幕上的说明操作。_

4. 选择以下选项之一，然后点击 **Agree and Submit**。

   * **Request API Signature** – 选择用于 API Signature 认证。
   * **Request API Certificate** – 选择用于 API Certificate 认证。

5. PayPal 按如下方式生成您的 API 凭证：  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-utEMaS5roo.png)

   * **API Signature 凭证** 包含 API Username、API Password 和 Signature，且不失效。这些值默认隐藏以增强安全性。点击 **Show/Hide** 开关它们。完成后，点击 **Done**。
   * **API Certificate 凭证** 包含 API Username、API Password 和 Certificate，且在三年后自动失效。点击 **Download Certificate** 将 API Certificate 保存到桌面。

就这样，您的 PayPal 支付集成完成！

如果您对 PayPal 设置有任何疑问，可以参考 PayPal 的 [Help Center](https://www.paypal.com/br/smarthelp/home).
