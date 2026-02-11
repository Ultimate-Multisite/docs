---
title: 获取报酬
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# 付款 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

Ultimate Multisite 有一个内置的会员和计费系统。为了让我们的计费系统正常工作，我们已集成了电子商务中最常用的支付网关。Ultimate Multisite 的默认支付网关是 _Stripe_、_PayPal_ 和 Manual Payment。您还可以通过安装各自的插件使用 _WooCommerce_、_GoCardless_ 和 _Payfast_ 接收付款。

## 基本设置

您可以在 Ultimate Multisite 计费设置中配置这些支付网关。您可以通过 **Ultimate Multisite > Settings > Payments** 找到它。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-42sl37Fn5G.png)

在设置支付网关之前，请先查看您可以配置的基本支付设置：

**强制自动续费** **w:** 这将确保支付将在每个计费周期结束时自动续费，具体取决于用户选择的计费频率。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Og3iJwLdmn.png)

**允许无付款试用** **method:** 启用此选项后，您的客户在注册过程中无需添加任何财务信息。只有在试用期结束后才需要。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aA5Olqe9M9.png)

**支付确认后发送发票**: 这给您一个选项，决定是否在付款后发送发票。请注意，用户可以在其子站点仪表盘中查看其付款历史。此选项不适用于手动支付网关。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RGupao7GvW.png)

**发票编号方案**: 在此，您可以选择使用付款参考代码或顺序编号方案。如果您选择为发票使用付款参考代码，则无需配置任何内容。如果您选择使用顺序编号方案，则需要配置 **下一个发票编号**（此编号将用作系统生成的下一个发票的发票编号。每创建一张新发票，它会递增 1。您可以更改并保存它，以将发票顺序编号重置为特定值）以及 **发票编号前缀**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mP0949Eawa.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oD5LaLaw7t.png)

## 在哪里找到支付网关

您可以在同一页面（**Ultimate Multisite > Settings > Payments**）设置支付网关。在 **active payment gateways** 下方，您将看到：_Stripe_、_Stripe Checkout_、_PayPal_ 和 _Manual_。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-g9RMYx84r5.png)

我们为每个支付网关都有专门的文章，指导您完成设置步骤，您可以在下面的链接中找到。

**设置 Stripe 网关**

**设置 PayPal 网关**

**设置手动支付**

现在，如果您想使用 _WooCommerce_、_GoCardless_ 或 _Payfast_ 作为支付网关，您需要 **安装并配置它们的插件**。

### 如何安装 WooCommerce 插件

我们了解到 _Stripe_ 和 _PayPal_ 在某些国家不可用，限制或阻碍 Ultimate Multisite 用户有效使用我们的插件。因此，我们创建了一个插件来集成 _WooCommerce_，这是一款非常流行的电子商务插件。全球的开发者为其创建了插件，以集成不同的支付网关。我们利用这一点来扩展您可以在 Ultimate Multisite 计费系统中使用的支付网关。

_**重要提示：** Ultimate Multisite：WooCommerce 集成至少需要在您的主站点激活 WooCommerce。_

首先，请前往插件页面。您可以通过 **Ultimate Multisite > Settings** 找到它。您应该会看到 **Add-ons** 表格。点击 **Check our Add-ons**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WtOkJNuCsj.png)

点击 **Check our Add-ons** 后，您将被重定向到插件页面。在这里，您可以找到所有 Ultimate Multisite 插件。点击 **Ultimate Multisite: WooCommerce Integration** 插件。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

会弹出一个窗口显示插件详情。只需点击 **Install Now**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fGaxHyPtsv.png)

安装完成后，您将被重定向到插件页面。在这里，只需点击 **Network Activate**，WooCommerce 插件将在您的网络上激活。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TM2lYtgyM7.png)

激活后，如果您的网站仍未安装并激活 WooCommerce 插件，您将收到提醒。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-VwIGoJhzqc.png)

要了解更多关于 WooCommerce 集成插件的信息，请 **点击此处**。

### 如何安装 GoCardless 插件

安装 _GoCardless_ 插件的步骤与安装 _WooCommerce_ 插件几乎相同。请前往插件页面并选择 **Ultimate Multisite: GoCardless Gateway** 插件。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

插件窗口将弹出。点击 **Install Now**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YIpPgP4VVo.png)

安装完成后，您将被重定向到插件页面。在这里，只需点击 **Network Activate**，_GoCardless_ 插件将在您的网络上激活。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FGurJpzaF0.png)

要了解如何开始使用 _GoCardless_ 网关，请 **阅读本文**。

### 如何安装 Payfast 插件

前往插件页面并选择 **Ultimate Multisite: Payfast Gateway** 插件。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

插件窗口将弹出。点击 **Install Now**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1jpCakOHNy.png)

安装完成后，您将被重定向到插件页面。在这里，只需点击 **Network Activate**，_Payfast_ 插件将在您的网络上激活。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-49OQHBwPxk.png)
