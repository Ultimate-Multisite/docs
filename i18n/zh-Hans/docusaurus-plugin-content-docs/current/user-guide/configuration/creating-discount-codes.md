---
title: 创建折扣码
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# 创建折扣代码 (v2)

_**重要说明：本文适用于 Ultimate Multisite 版本 2.x。**_

使用 Ultimate Multisite，你可以创建折扣代码，为你的客户的订阅提供折扣。而且创建起来很简单！

## 创建和编辑折扣代码

要创建或编辑折扣代码，请前往 **Ultimate Multisite > Discount Codes**。

![折扣代码列表——任何代码存在之前的空状态](/img/config/discount-codes-empty.png)

在那里，你会看到已经创建的折扣代码列表。

你可以点击 **Add Discount** **Code** 来创建新的优惠券，也可以将鼠标悬停在已有优惠券上并点击 **Edit** 来编辑它们。

![带有悬停操作的折扣代码列表，显示 Edit 和 Delete 链接](/img/config/discount-codes-list-hover.png)

![页面标题中的 Add Discount Code 按钮](/img/config/discount-codes-add-button.png)

你将被重定向到创建或编辑优惠券代码的页面。在此示例中，我们将创建一个新的。

![显示所有区块的折扣代码编辑页面](/img/config/discount-code-edit.png)

让我们看看这里可用的设置：

**Enter Discount Code:** 这只是你的折扣代码的名称。这不是客户在结账表单上需要使用的代码。

**Description:** 在这里，你可以简要描述此优惠券的用途。

![编辑页面顶部的折扣代码名称和描述字段](/img/config/discount-code-description.png)

你还可以查看折扣代码为活跃或非活跃状态：

![折扣代码活跃状态](/img/config/discount-code-active.png)

**Coupon code:** 这里用于定义客户在结账期间需要输入的代码。

![客户在结账时输入代码的优惠券代码字段](/img/config/discount-code-coupon-field.png)

**Discount:** 在这里，你可以为折扣代码设置**百分比**或**固定金额**。

![带有百分比或固定金额下拉选项的折扣金额设置](/img/config/discount-code-amount.png)

**Apply to renewals:** 如果关闭此选项，此折扣代码将只应用于**首次付款**。所有其他付款将没有折扣。如果开启此选项，该折扣代码将对所有未来付款有效。

**Setup fee discount:** 如果关闭此选项，该优惠券代码将**不会对订单的设置费提供任何折扣**。如果开启此选项，你可以设置该优惠券代码将应用于你的方案设置费的折扣（百分比或固定金额）。

![应用于续订和设置费折扣的开关选项](/img/config/discount-code-renewals.png)

**Active:** 手动激活或停用此优惠券代码。

![用于手动启用或禁用折扣代码的 Active 开关](/img/config/discount-code-active.png)

在 **Advanced Options** 下，我们有以下设置：

![折扣代码高级选项](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** 在这里，你可以看到折扣代码已被使用的次数。

  * **Max uses:** 这将限制用户可使用此折扣代码的次数。例如，如果你在这里填写 10，该优惠券就只能使用 10 次。达到此限制后，该优惠券代码将不能再使用。

![带有当前使用次数和最大使用次数字段的限制使用设置](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** 在这里，你可以选择为优惠券添加开始日期和/或到期日期。

![用于安排折扣代码的开始日期和到期日期字段](/img/config/discount-code-dates.png)

**Limit products:** 如果你开启 **Select products**，将会显示你的所有产品。你可以手动选择（通过开启或关闭开关）哪些产品可以接受此优惠券代码。在这里关闭的产品，如果客户尝试对其使用此优惠券代码，将不会显示任何变化。

![带有按产品开关的限制产品区块](/img/config/discount-code-limit-products.png)

设置完所有这些选项后，点击 **Save Discount Code** 保存你的优惠券，这样就完成了！

![编辑页面底部的 Save Discount Code 按钮](/img/config/discount-code-save.png)

该优惠券现在会出现在你的列表中，从那里你可以点击**编辑或删除**它。

![列表中的折扣代码行，带有 Edit 和 Delete 悬停操作](/img/config/discount-codes-list-hover.png)

###

### 使用 URL 参数：

如果你想自定义定价表，或为你的网站构建一个漂亮的优惠券代码页面，并希望自动将折扣代码应用到你的结账表单，你可以通过 URL 参数来实现。

首先，你需要获取你的方案的可共享链接。为此，请前往 **Ultimate Multisite > Products** 并选择一个方案。

点击 **Click to Copy Shareable Link** 按钮。这将为你提供该特定方案的可共享链接。在我们的示例中，给出的可共享链接是 [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![带有可共享链接按钮的产品页面](/img/config/products-list.png)

要将折扣代码应用到此特定方案，只需将参数 **?discount_code=XXX** 添加到 URL。其中 **XXX** 是优惠券代码。

在这里的示例中，我们会将优惠券代码 **50OFF** 应用到此特定产品。

此特定方案的 URL，并应用 50OFF 折扣代码后，将如下所示：[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_。

###
