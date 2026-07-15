---
title: 设置 PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# 设置 PayPal Gateway (v2)

_**重要说明：本文适用于 Ultimate Multisite 版本 2.x。**_

你可以在我们的支付设置页面上启用最多四种支付方式：Stripe、Stripe Checkout、PayPal 和手动。在本文中，我们将了解如何与 **PayPal** 集成。

与 Stripe 一样，PayPal 广泛用于在线支付，尤其是在 WordPress 网站上。本文将指导你如何将 PayPal 用作网络上可用的支付方式。

请注意，你需要拥有一个 **PayPal Business account** 才能获取此集成所需的 API 凭据。

## 在你的网络上启用 PayPal {#enabling-paypal-on-your-network}

要将 PayPal 启用为你的网络上可用的支付方式，请前往 **Ultimate Multisite > Settings > Payments** 选项卡，并勾选 PayPal 旁边的复选框。

![在启用的支付网关中启用 PayPal](/img/config/settings-payment-gateways.png)

## 使用引导式设置向导 {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 在支付网关设置中新增了引导式 PayPal 设置向导。启用 PayPal 后，请使用 **Ultimate Multisite > Settings > Payments** 中的向导选择你希望如何连接该网关，并在保存前确认仍需要哪些凭据。

该向导支持两种设置路径：

* **手动输入凭据**：当你已经拥有 PayPal API 凭据、你的 Account 无法使用 OAuth 设置，或你更希望自己从 PayPal 复制凭据时，请使用此路径。在 PayPal 字段中输入 API Username、API Password 和 API Signature，然后保存支付设置。
* **OAuth 连接门控**：仅当 OAuth 选项可用且已为你的安装启用时，才使用此路径。向导会在功能标志后显示 OAuth 流程，因此没有该标志的网络将继续使用手动输入凭据字段。

如果你在向导中看不到 OAuth 选项，请完成下面的手动输入凭据流程。该网关使用与以往 Ultimate Multisite 2.x 版本相同的 PayPal Business API 凭据。

## 获取 PayPal API 凭据 {#getting-the-paypal-api-credentials}

一旦 PayPal 被启用为支付网关，你需要填写 PayPal API **Username**、PayPal API **Password** 和 PayPal API **Signature** 字段。

你可以通过登录你的 PayPal [Live](https://www.paypal.com/home) 或 [Sandbox](https://www.sandbox.paypal.com/home) Account 获取这些凭据。

（请记住，你可以使用 **sandbox mode** 测试支付并查看该网关是否已正确设置。只需打开相应部分的开关。）

![PayPal API 凭据字段和 sandbox mode 开关](/img/config/settings-payment-gateways.png)

要为你的 PayPal Account 请求 API Signature 或 Certificate 凭据：

  1. 前往你的 [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)。

  2. 在 **API access** 部分，点击 **Update**。
![包含 API access 部分的 PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. 在 **NVP/SOAP API integration (Classic)** 下，点击 **Manage API credentials**。
![PayPal NVP/SOAP API integration 的 Manage API credentials](/img/config/settings-payment-gateways.png)

     * 如果你已经生成了 API Signature 或 Certificate，你将被重定向到一个可以找到凭据的页面。

     * _**注意：** 如果系统提示你验证你的 PayPal Account，请按照屏幕上的说明操作。_

  4. 选择以下选项中的_一个_，然后点击 **Agree and Submit**。

     * **Request API Signature** – 选择用于 API Signature 身份验证。

     * **Request API Certificate** – 选择用于 API Certificate 身份验证。

  5. PayPal 会按如下方式生成你的 API 凭据：
![PayPal 生成的 API 凭据](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** 包含 API Username、API Password 和 Signature，且不会过期。为增强安全性，这些值默认隐藏。点击 **Show/Hide** 可切换显示和隐藏。完成后，点击 **Done**。

     * **API Certificate credentials** 包含 API Username、API Password 和 Certificate，并会在三年后自动过期。点击 **Download Certificate** 将 API Certificate 保存到你的桌面。

就这样，你的 PayPal 支付集成已完成！

如果你对 PayPal 设置有任何问题，可以参考 PayPal 的 [Help Center](https://www.paypal.com/br/smarthelp/home)。
