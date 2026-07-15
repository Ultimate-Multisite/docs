---
title: 收款
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# 收款 (v2)

_**重要说明：本文适用于 Ultimate Multisite 2.x 版本。**_

Ultimate Multisite 内置会员资格和计费系统。为了让我们的计费系统正常运行，我们集成了电子商务中最常用的支付网关。Ultimate Multisite 中的默认支付网关是 _Stripe_、_PayPal_ 和手动付款。你也可以通过安装相应的附加组件，使用 _WooCommerce_、_GoCardless_ 和 _Payfast_ 来收款。

## 基本设置 {#basic-settings}

你可以在 Ultimate Multisite 支付设置下配置这些支付网关中的任意一个。你可以通过进入 **Ultimate Multisite 菜单 > Settings > Payments** 找到它。

![Ultimate Multisite 中显示 Payments 面板的 Payments 设置页面](/img/config/payments-settings-page.png)

在设置支付网关之前，请先查看你可以配置的基本支付设置：

**强制自动续** **订：** 这将确保付款会根据用户选择的计费频率，在每个计费周期结束时自动重复发生。

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 会在保存已启用自动续订的周期性会员资格之前，检查当前启用的网关是否具有可重复使用的续订凭据。续订凭据可以是网关订阅、计费协议、已保存的保险库令牌，或等效的可重复使用支付方式。如果网关报告不存在可用凭据，Ultimate Multisite 会保存该会员资格，但关闭自动续订，并记录缺少凭据的状态，以便管理员或支持流程可以在续订日期之前要求客户重新授权付款。

这可以防止会员资格在网关只能收取一次性付款时看起来像是会自动续订。网关附加组件应确认周期性结账会存储可重复使用的凭据，尤其是在网关同时支持一次性扣款和保险库/订阅支付模式时。

**允许试用期无需支付** **方式：** 启用此选项后，你的客户在注册过程中无需添加任何财务信息。只有在试用期到期后才会要求提供。

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**付款确认时发送发票：** 这让你可以选择是否在付款后发送发票。请注意，用户可以在其子站点 Dashboard 下访问自己的付款历史记录。此选项不适用于手动网关。

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**发票编号方案：** 在这里，你可以选择付款参考代码或顺序编号方案。如果你选择为发票使用付款参考代码，则无需配置任何内容。如果你选择使用顺序编号方案，则需要配置**下一个发票编号**（此编号将用作系统生成的下一张发票的发票编号。每次创建新发票时，它都会递增一。你可以更改并保存它，以将发票顺序编号重置为特定值）以及**发票编号前缀。**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## 在哪里找到网关： {#where-to-find-the-gateways}

你可以在同一页面（**Ultimate Multisite > Settings > Payments**）设置支付网关。在 **active payment gateways** 正下方，你将能够看到：_Stripe_、_Stripe_ _Checkout_、_PayPal_ 和 _Manual_。

![列出 Stripe、Stripe Checkout、PayPal 和 Manual 的 Active Payment Gateways 部分](/img/config/payments-active-gateways.png)

我们为每个支付网关都准备了一篇专门的文章，将指导你完成设置步骤，你可以在下面的链接中找到它们。

你可以查看和编辑付款详情：

![付款编辑界面](/img/admin/payment-edit.png)

以下是付款编辑页面的完整视图：

![付款编辑完整界面](/img/admin/payment-edit-full.png)

以下也是支付网关设置的完整视图：

![支付网关设置完整页面](/img/config/settings-payments-gateways-full.png)

**设置 Stripe 网关**

**设置 PayPal 网关**** **

**设置手动付款**

现在，如果你想使用 _WooCommerce_、_GoCardless_ 或 _Payfast_ 作为你的支付网关，则需要**安装并配置它们的附加组件**。

### 如何安装 WooCommerce 附加组件： {#how-to-install-the-woocommerce-add-on}

我们理解 _Stripe_ 和 _PayPal_ 在某些国家/地区不可用，这会限制或阻碍 Ultimate Multisite 用户有效使用我们的插件。因此，我们创建了一个附加组件来集成 _WooCommerce_，这是一个非常流行的电子商务插件。世界各地的开发者创建了附加组件，用于将不同的支付网关集成到其中。我们利用这一点来扩展你可以与 Ultimate Multisite 计费系统一起使用的支付网关。

_**重要：** Ultimate Multisite: WooCommerce Integration 要求 WooCommerce 至少在你的主站点上启用。_

首先，请前往附加组件页面。你可以通过进入 **Ultimate Multisite > Settings** 找到它。你应该会看到 **Add-ons** 表。点击 **Check our Add-ons**。

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

点击 **Check our Add-ons** 后，你将被重定向到附加组件页面。在这里你可以找到所有 Ultimate Multisite 附加组件。点击 **Ultimate Multisite: WooCommerce Integration** 附加组件。

![列出 Ultimate Multisite 附加组件（包括 WooCommerce Integration）的附加组件页面](/img/addons/addons-page.png)

会弹出一个包含 add-on 详细信息的窗口。只需点击 **立即安装**。

<!-- 截图不可用：Ultimate Multisite WooCommerce Integration add-on 详情对话框，带有立即安装按钮 -->

安装完成后，你将被重定向到 plugin 页面。在这里，只需点击 **网络启用**，WooCommerce add-on 就会在你的网络上启用。

<!-- 截图不可用：Plugins 页面，显示 WooCommerce Integration add-on 的网络启用链接 -->

启用后，如果你的网站上仍未安装并启用 WooCommerce plugin，你将收到提醒。

<!-- 截图不可用：管理员通知，提醒管理员安装并启用 WooCommerce plugin -->

要阅读更多关于 WooCommerce Integration add-on 的信息，**请点击这里**。

### 如何安装 GoCardless add-on： {#how-to-install-the-gocardless-add-on}

安装 _GoCardless_ add-on 的步骤与 _WooCommerce_ add-on 基本相同。请前往 add-ons 页面并选择 **Ultimate Multisite: GoCardless Gateway** add-on。

<!-- 截图不可用：Add-ons 页面，突出显示 Ultimate Multisite GoCardless Gateway add-on -->

add-on 窗口会弹出。点击 **立即安装**。

<!-- 截图不可用：Ultimate Multisite GoCardless Gateway add-on 详情对话框，带有立即安装按钮 -->

安装完成后，你将被重定向到 plugin 页面。在这里，只需点击 **网络启用**，_GoCardless_ add-on 就会在你的网络上启用。

<!-- 截图不可用：Plugins 页面，显示 GoCardless Gateway add-on 的网络启用链接 -->

要了解如何开始使用 _GoCardless_ gateway，**请阅读这篇文章**。

### 如何安装 Payfast add-on： {#how-to-install-the-payfast-add-on}

前往 add-ons 页面并选择 **Ultimate Multisite: Payfast Gateway** add-on。

<!-- 截图不可用：Add-ons 页面，突出显示 Ultimate Multisite Payfast Gateway add-on -->

add-on 窗口会弹出。点击 **立即安装。**

<!-- 截图不可用：Ultimate Multisite Payfast Gateway add-on 详情对话框，带有立即安装按钮 -->

安装完成后，你将被重定向到 plugin 页面。在这里，只需点击 **网络启用**，_Payfast_ add-on 就会在你的网络上启用。

<!-- 截图不可用：Plugins 页面，显示 Payfast Gateway add-on 的网络启用链接 -->
