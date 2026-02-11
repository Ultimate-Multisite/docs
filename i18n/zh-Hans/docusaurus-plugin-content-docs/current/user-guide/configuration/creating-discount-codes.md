---
title: 创建折扣码
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# 创建折扣码 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

使用 Ultimate Multisite，您可以创建折扣码，为客户的订阅提供折扣。创建过程非常简单！

## 创建和编辑折扣码

要创建或编辑折扣码，请转到 **Ultimate Multisite > Discount Codes**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-G2iYAraljI.png)

您将在此看到已创建的折扣码列表。

您可以点击 **Add Discount** **Code** 创建新优惠券，或将鼠标悬停在已有优惠券上并点击 **Edit** 进行编辑。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-nl6H0I06Jl.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3puhU5xCFF.png)

您将被重定向到创建或编辑优惠券码的页面。在此示例中，我们将创建一个新的。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9dup6xM4Cx.png)

让我们来看看此处可用的设置：

**Enter Discount Code:** 这只是折扣码的名称。并非客户在结账表单中需要使用的代码。

**Description:** 在此，您可以简要描述此优惠券的用途。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-V97PvPqtmK.png)

**Coupon code:** 在此处定义客户在结账时需要输入的代码。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-En58UdF3b7.png)

**Discount:** 您可以为折扣码设置 **百分比** 或 **固定金额** 的折扣。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-96cicxcs7f.png)

**Apply to renewals:** 若此选项关闭，折扣码仅适用于 **首次付款**。其余付款将不享受折扣。若开启，则折扣码将适用于所有后续付款。

**Setup fee discount:** 若此选项关闭，优惠券将 **不对订单的设置费提供折扣**。若开启，您可以设置此优惠券对计划设置费的折扣（百分比或固定金额）。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zDYmcgHcoq.png)

**Active:** 手动激活或停用此优惠券。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rwNFfGobBB.png)

在 **Advanced Options** 下，我们有以下设置：

**Limit uses:**

  * **Uses:** 在此可查看折扣码已被使用的次数。

  * **Max uses:** 限制用户可使用折扣码的次数。例如，如果此处设为 10，则优惠券只能使用 10 次。超过此限制后，折扣码将无法再使用。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zx4xudymt2.png)

**Start & expiration dates:** 您可以为优惠券添加开始日期和/或到期日期。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AyTJkzxz9W.png)

**Limit products:** 若开启 **Select products**，将显示所有产品。您可以手动选择（开启或关闭）哪些产品可接受此优惠码。此处关闭的产品在客户尝试使用优惠码时将不受影响。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OHK9Bgsaq7.png)

设置完所有选项后，点击 **Save Discount Code** 保存优惠券，即完成！

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wAAoviDov8.png)

优惠券现在已出现在列表中，您可以点击 **edit or delete** 进行编辑或删除。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ySn575AxqX.png)

### 

### 使用 URL 参数：

如果您想自定义价格表或为网站创建一个漂亮的优惠码页面，并希望自动将折扣码应用到结账表单，您可以通过 URL 参数实现。

首先，您需要获取计划的可分享链接。请转到 **Ultimate Multisite > Products** 并选择一个计划。

点击 **Click to Copy Shareable Link** 按钮，即可获得此特定计划的可分享链接。在我们的例子中，给出的链接是 [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TecoStCUYi.png)

要将折扣码应用到此特定计划，只需在 URL 后添加参数 **?discount_code=XXX**，其中 **XXX** 为优惠码。

在此示例中，我们将为此特定产品应用优惠码 **50OFF**。

此特定计划并应用 50OFF 折扣码后的 URL 如下：[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_。

###
