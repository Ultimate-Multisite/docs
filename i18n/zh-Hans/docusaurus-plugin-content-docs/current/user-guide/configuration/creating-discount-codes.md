---
title: 创建折扣码
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# 创建折扣码 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

使用 Ultimate Multisite，您可以创建折扣码，为客户的订阅提供折扣。创建折扣码非常简单！

## 创建和编辑折扣码

要创建或编辑折扣码，请转到 **Ultimate Multisite > Discount Codes**。

![](/img/config/discount-codes-list.png)

在此，您将看到已创建的折扣码列表。

您可以点击 **Add Discount Code** 创建新优惠券，或者将鼠标悬停在已有折扣码上并点击 **Edit** 进行编辑。

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

您将被重定向到创建或编辑优惠券码的页面。在此示例中，我们将创建一个新的折扣码。

![Discount code edit page](/img/config/discount-codes-list.png)

让我们来看看此页面上可用的设置：

**输入折扣码:** 这只是折扣码的名称。它不是客户在结账表单中需要使用的代码。

**描述:** 在此，您可以简要描述此优惠券的用途。

![Discount code name and description fields](/img/config/discount-codes-list.png)

**优惠码:** 这里是您定义客户在结账时需要输入的代码。

![Coupon code field](/img/config/discount-codes-list.png)

**折扣:** 在此，您可以为折扣码设置 **百分比** 或 **固定金额**。

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**应用于续费:** 如果此选项关闭，折扣码仅适用于 **首次付款**。所有其他付款将不享受折扣。如果此选项开启，折扣码将对所有后续付款有效。

**设置费折扣:** 如果此选项关闭，优惠码将 **不对订单的设置费提供任何折扣**。如果此选项开启，您可以设置此优惠码将应用于计划设置费的折扣（百分比或固定金额）。

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**激活:** 手动激活或停用此优惠码。

![Active toggle for discount code](/img/config/discount-codes-list.png)

在 **Advanced Options** 下，我们有以下设置：

**使用限制:**

  * **已使用次数:** 在此，您可以查看折扣码已被使用的次数。

  * **最大使用次数:** 这将限制用户可以使用此折扣码的次数。例如，如果您在此处设置为 10，则优惠券只能使用 10 次。超过此限制后，折扣码将无法再使用。

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)

**开始和到期日期:** 在此，您将有选项为您的优惠券添加开始日期和/或到期日期。

![Start and expiration date fields](/img/config/discount-codes-list.png)

**限制产品:** 如果您开启 **Select products**，所有产品将显示给您。您将有选项手动选择（通过开启或关闭）哪些产品可以接受此优惠码。此处关闭的产品如果客户尝试使用此优惠码将不会显示任何变化。

![Limit products selection toggles](/img/config/discount-codes-list.png)

设置完所有这些选项后，点击 **保存折扣码** 以保存您的优惠券，完成！

![Save Discount Code button](/img/config/discount-codes-list.png)

优惠券现在已在您的列表中，您可以点击 **编辑或删除** 它。

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### 使用 URL 参数

如果您想自定义定价表或为您的网站创建一个漂亮的优惠码页面，并希望在结账表单中自动应用折扣码，您可以通过 URL 参数实现。

首先，您需要获取计划的可共享链接。为此，请转到 **Ultimate Multisite > Products** 并选择一个计划。

点击 **Click to Copy Shareable Link** 按钮。它会给您此特定计划的可共享链接。在我们的例子中，给出的可共享链接是 [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_。

![Product page with shareable link button](/img/config/products-list.png)

要将折扣码应用于此特定计划，只需在 URL 中添加参数 **?discount_code=XXX**。其中 **XXX** 是优惠码。

在此示例中，我们将把优惠码 **50OFF** 应用于此特定产品。

此特定计划并应用 50OFF 折扣码后的 URL 如下：[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_。

###
