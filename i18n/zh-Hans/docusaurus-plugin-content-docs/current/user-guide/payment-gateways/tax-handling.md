---
title: 税务处理
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# Tax Handling

Ultimate Multisite 在我们的核心插件中内置了税费收集模块，因此如果您需要在计划、套餐和服务上收取销售税，您可以轻松完成，而无需安装任何插件。

对于位于欧洲的公司，我们提供一个 **插件**，它添加了工具和功能，以更好地 **支持 VAT** 合规。

Ultimate Multisite 不会代表您向政府申报或缴纳税款；我们仅在交易时帮助您收取适当的税费。**您仍需自行缴纳税款。**

## Enabling Tax Collection

税费收集默认未启用。要启用它，您需要前往 **Ultimate Multisite > Settings > Taxes** 并切换以启用 Enable Taxes 设置。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ICSEhm7yhk.png)

### Tax excluded vs. Tax included

默认情况下，所有产品价格均不含税，意味着税费 **不包含** 在产品价格中。如果我们判断客户在某笔购买中应缴纳税费，我们将把税费 **加在小计之上**。

如果您希望在产品价格中包含税费，可以通过启用 **Inclusive Tax** 设置来实现。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xiiaIXYI2c.png)

别忘了 **保存** 您所做的更改。

### 

## Creating Tax Rates

启用税费收集后，您需要使用我们的税率编辑器为特定位置创建税率。

您可以通过点击税务设置页面侧边栏的 **Manage Tax Rates** 按钮来访问编辑器。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UZb6g2rvrs.png)

在税率编辑器页面，您可以点击 **Add new Row** 按钮添加新的税率。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZyJCSI6zLZ.png)

您需要为每个税率提供一个 **title**（用于发票）。然后您可以选择 **country**（必填）、**state** 和 **city**（均为可选）来确定该税费的适用地区。最后，添加 **tax rate in percents**。

### Tax Categories

您还可以创建多个税务类别，以为不同类型的产品添加不同的税率。

点击 **Add new Tax Category**，然后输入类别名称并按 **Create**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-73biI4o8lj.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YhH2hLLvEC.png)

要浏览类别，请点击 **Switch** 并选择您想要添加新税费的类别。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xjghTq6ta4.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E5YLXeIsWH.png)

您可以通过前往 **Product edit page** 并切换到 Taxes 选项卡来为特定产品设置税务类别。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vkh5NXKplU.png)

在同一屏幕上，您可以关闭 **Is Taxable?** 开关，让 Ultimate Multisite 知道不应对该产品收取税费。

## European VAT Support

如前所述，我们为欧盟客户提供了一个插件，以满足因欧洲 VAT 规定而产生的额外需求。

我们的 VAT 工具可帮助完成以下几个重要任务：

- 轻松加载欧盟 VAT 率；
- VAT 号码收集与验证 - 以及对 VAT 免税实体（如拥有有效 VAT 号码的公司）的反向计费；

要安装该插件，请前往 **Ultimate Multisite > Settings**，然后点击侧边栏的 **Check our Add-ons** 链接。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AsMyAH5HKC.png)

您将被重定向到我们的插件页面。在那里，您可以搜索 **Ultimate Multisite VAT add-on** 并安装它。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AQ6gWfdY5G.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iz8uncHiYa.png)

然后，前往 **Network Admin > Plugins** 并在网络范围内激活该插件。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PkWGMWlgVu.png)

如果您返回 **Tax Settings tab**，您将看到新的选项。切换 **Enable VAT Support** 选项以启用新的 VAT 工具。别忘了 **保存** 您的设置！

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Gn1SspQZ0S.png)

### Pulling on VAT Tax Rates

我们的集成提供的工具之一是加载欧盟成员国税率的功能。启用 EU VAT 支持后，您可以访问税率编辑器页面来完成此操作。

在页面底部，您将看到 VAT 拉取选项。选择一个费率类型并点击 **Update EU VAT Rates** 按钮，将自动拉取并填充表格中的每个欧盟成员国税率。随后，您只需保存即可。

### ![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jZKEqPBX5E.png)

您还可以在拉取后编辑这些值。只需编辑所需的表格行并点击保存新值即可。

### VAT Validation

当启用 VAT 支持时，Ultimate Multisite 会在结账表单中添加一个额外字段，位于账单地址字段下方。该字段仅对位于欧盟的客户显示。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ITUbFOIM4r.png)

Ultimate Multisite 将随后验证 VAT 号码，如果验证通过，则应用反向计费机制，并将该订单的税率设为 0%。
