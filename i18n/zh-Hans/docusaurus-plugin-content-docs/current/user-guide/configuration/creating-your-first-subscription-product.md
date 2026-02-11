---
title: '# 创建您的第一个订阅产品'
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# 创建你的第一个订阅产品 (v2)

_**重要提示：本文仅适用于 Ultimate Multisite 2.x 版本用户。如果你使用的是 1.x 版本，**_ **_**请参阅此文章**_**。_

要开始运营你的网络并开始向潜在用户销售服务，你需要有不同的订阅选项。如何创建这些产品？你可以提供哪些类型的产品？本文将涵盖你需要了解的关于产品的一切。

## Product Type

使用 Ultimate Multisite，你可以向客户提供两类产品：**plans** 和 **add-ons** **(Order Bump)**。Add-ons 可分为两种类型：**packages** 和 **services**。我们将在下面了解它们的区别和特点。

* **Plans**：Ultimate Multisite 的基本产品。只有当客户附加到计划时，才能拥有会员资格。计划为客户提供一个或多个站点（取决于计划的配置），并在产品编辑页面上设置限制。

* **Packages**：直接影响 Ultimate Multisite 计划功能的附加组件。它们会更改限制或为客户购买的原始计划添加新的资源、插件或主题。例如，基础计划可能允许每月 1,000 次访问，你可以提供一个将此数字扩展到 10,000 的套餐。

* **Services**：不改变 Ultimate Multisite 功能的附加组件。它们是你为客户完成的额外任务，除了他们购买的计划之外。例如，客户可能购买一个允许单站点的计划，并支付额外服务费用来完成该站点的设计。

## Managing Products

对于许多人来说，Ultimate Multisite 中的 **Products** 选项卡（Ultimate Multisite > Products）可以等同于传统托管环境中的计划。

在 Ultimate Multisite 中，Products 选项卡定义了适用于特定产品或服务的结构和限制。这些结构涉及产品或服务描述、价格、税费和权限。

本节将帮助你理解 Ultimate Multisite 的这一重要基石。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1YccQg0IBG.png)

## Adding Products

无论是计划、套餐还是服务，定义新项目的入口是通过 **Ultimate Multisite > Products > Add Product**。

界面包含两个主要部分。左侧有若干选项卡，帮助定义产品；右侧有几个部分，用于定义产品的基础价格、激活状态和产品图片。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0AmJMeqen.png)

### Description

基础产品信息可以通过提供产品名称和描述来定义。这些标识符会显示在需要产品信息的任何地方，例如计划和定价选择、发票、升级等。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U9YjF0dghJ.png)

### Pricing Type

在界面右侧，可以定义基础定价。

Ultimate Multisite 支持三种不同的定价类型。**paid** 选项会提示网络管理员输入产品的价格和计费频率。

### Pricing

价格组件定义了基础产品价格和计费间隔。

例如，价格为 $29.99，设置为 1 个月，将每月计费 $29.99。同样，价格为 $89.97，设置为 3 个月，将每季度计费该金额。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T03WJISsoh.png)

### Billing Cycles

计费周期部分指定上述计费间隔的频率，通常以合同或固定期限为依据。

例如，产品价格为 $29.99，间隔为 1 个月，计费周期为 12 次，将在接下来的 12 个月内每月计费 $29.99。换句话说，该设置将建立一个每月 $29.99 的固定价格期限 12 个月，然后停止计费。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hVVAoxC4Jt.png)

### Trial Period

启用试用切换可让网络管理员为产品定义试用期。

在试用期间，客户可以免费使用产品，直到试用期结束才会计费。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzxhWHqJLC.png)

### Setup Fee

你也可以为你的计划收取一次性设置费。

这意味着客户在首次收费时（除价格计划外）将支付额外金额，即本节中定义的费用。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-8ZA2YvhWyK.png)

### Active

激活切换有效地定义了产品是否可供客户新注册使用。

如果此计划已有现有客户，将切换为禁用状态将有效地将该计划设为祖先，移除其在未来注册中的可用性。**计划中的现有客户将继续计费**，直到他们迁移到新计划或从计划中移除。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-74ET2mPskK.png)

### Product Image

**Upload Image** 按钮允许网络管理员使用媒体库选择或上传产品图片。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9tHhGvokLA.png)

### Delete

**Delete Product** 按钮会将产品从系统中删除。它在产品发布后出现。

与其他删除不同，产品不会进入任何回收站状态。因此，一旦删除，操作将不可逆。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rrmQohvw3S.png)

### Product Options

在定义完基础产品信息后，产品选项帮助网络管理员进一步定义产品的具体属性。

#### General

**General** 选项卡定义了不适用于其他产品特定选项卡的一般属性。

自解释的 **product slug** 定义了产品在 URL 和 Ultimate Multisite 其他区域中识别的 slug。

Ultimate Multisite 支持多种产品类型，即 Plan、Package 和 Service。**Product Options** 选项卡会根据指定的产品类型动态调整。

**Customer Role** 指定在创建站点时分配给客户的角色。对于大多数网络管理员来说，这将是 Ultimate Multisite 默认角色或管理员。Ultimate Multisite 默认角色可在 **Ultimate Multisite > Settings > Login & Registration** 中设置。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ap5I4lXWwB.png)

#### Up & Downgrades

此选项卡指定客户在其特定层级内可用的升级和降级路径。

要理解此概念，请考虑一个专门的 Ultimate Multisite 安装为其客户提供学习管理解决方案的例子。为此，定义了三个计划（Basic、Plus 和 Premium），并为每个计划激活了特定插件（稍后本节将提供激活插件的说明）。

如果 Ultimate Multisite 安装还为商业网站或电子商务网站提供服务，则这些计划可能需要安装和激活不同的插件。

在这种程度上，允许 eLearning 客户转移到 eCommerce 计划是不理想且有问题的，因为这些计划、定价和限制可能不适合。

因此，为了限制客户路径并防止事件，网络管理员可以定义一个计划组，并在该组内指定客户可以转移的计划。

要定义计划组，请在 **plan group** 列表中指定兼容计划。**product order** 决定计划的排序和从最低到最高的显示方式。

Ultimate Multisite 还包括 **order bump** 功能，可将适当的附加产品和服务添加到计划中。这些作为额外项目提供给客户，可在结账或升级时添加到计划中。

#### Price Variations

价格变体允许网络管理员根据持续时间指定替代定价层级。此设置可使 3 个月、6 个月或年度定价层级得以建立，或根据使用案例确定的任何其他持续时间和频率。

要建立价格变体，请将 **enable price variations** 切换设置为激活，然后单击 **Add new Price Variation** 按钮。

要输入变体，请设置变体的持续时间、周期和价格。可以通过再次单击按钮来输入其他变体。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-x73uxkMU8o.png)

#### Taxes

**Taxes** 选项卡与 **Ultimate Multisite > Settings > Taxes** 中指定的税务设置以及更具体的税率相对应。要启用税费并定义适用税率，请参阅 **Ultimate Multisite: Settings** 中的文档

**![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xYLtpFySzL.png)**

在之前的示例中，我们为美国加利福尼亚州的客户定义了 7.25% 的本地税率。

一旦在 **Ultimate Multisite > Settings > Manage Tax Rates** 中定义了税率，它将在产品级别可供选择。

要表示产品为应税项目，请将 **Is Taxable** 切换设置为激活，并从税务类别下拉菜单中选择适用税率。

#### Site Templates

本质上，站点模板是完整的 WordPress 网站，在订阅开始时被克隆到客户的站点。

网络管理员将模板站点创建并配置为常规 WordPress 站点，激活并配置主题、插件和内容。模板站点将逐字克隆到客户。

此选项卡允许网络管理员指定新订阅时站点模板的行为。要使用站点模板，请将 **allow site templates** 切换设置为激活状态。

**site template selection mode** 定义了订阅过程中的站点模板行为。

**D** **efault** 设置遵循结账表单中的步骤。如果网络管理员在结账过程中定义了模板选择步骤，并且该步骤已使用模板定义，则此设置将遵循结账步骤中建立的指令。

指定 **A** **ssign Site Template** 将强制选择指定的模板。因此，结账过程中的任何模板选择步骤将被移除。

最后，**C** **hoose Available Site Templates** 将覆盖结账步骤中指定的模板，并使用此设置中选择的模板。还可以定义预选模板以帮助客户选择。

最终，如果网络管理员希望模板选择在结账步骤中进行，设置为 ‘_default_’ 即可。或者，为了移除并锁定模板选择并将选择委托给计划设置，可以使用 ‘_assign new template_’ 或 ‘_choose available site templates_’ 选项。

#### Sites

**Sites** 选项卡是 Ultimate Multisite 限制功能的一部分。

此设置指定客户在其会员资格下可以创建的最大站点数。

要启用此限制，请将 **limit sites** 切换设置为激活状态，并在 **site allowance** 字段中指定最大站点数。

#### Visits

**Visits** 选项卡是 Ultimate Multisite 限制系统的进一步组成部分。此设置允许对客户站点的唯一访客进行计数和后续限速。

从营销角度来看，网络管理员可以利用此设置来鼓励客户在达到限制后升级计划。此设置还可以帮助网络管理员遏制并防止对站点的过度流量，以保护系统资源。

要使用此功能，请将 **limit unique visits** 切换设置为激活状态，并在 **unique visits quota** 字段中指定最大唯一访客数。

一旦达到此限制，Ultimate Multisite 将停止为客户提供站点，而不是显示提示信息。

#### Users

Ultimate Multisite 的 ‘Users’ 限制允许网络管理员限制可创建并分配给角色的用户数量。

要启用此限制功能，请将 **limit user** 切换滑动至右侧激活状态。

接下来，对于每个要限制的角色，请将其旁边的切换设置为激活状态，并在相应字段中定义最大上限。

#### Post Types

**Post Types** 选项卡允许网络管理员对 WordPress 中广泛的文章类型施加细粒度限制。

由于 WordPress 的构造，文章和文章类型是其核心功能的重要组成部分，因此 Ultimate Multisite 的限制系统旨在帮助网络管理员建立和维护限制。

要启用此限制子系统，请将 **limit post types** 切换滑动至右侧激活状态。

接下来，对于每个要限制的文章类型，请将其切换打开（滑动至右侧），并在相应字段中指定最大上限。

#### Disk Space

**Disk Space** 选项卡允许网络管理员限制客户使用的空间。

通常在 WordPress 多站点中，核心文件在所有站点之间共享，媒体文件和上传的单独目录由这些设置和限制适用。

要启用磁盘使用限制，请将 **limit disk size per site** 切换滑动至右侧激活状态。

接下来，在 **disk space allowanc** e 字段中以兆字节为单位指定最大上限。

#### Custom Domain

通过切换此选项，你可以专门允许此计划使用自定义域名。

#### Themes

**Themes** 选项卡允许网络管理员为客户提供可选主题，并可选择强制主题状态。

_**注意：要让主题可供客户使用，必须由网络管理员启用网络。**_

**visibility** 选项定义了客户在其站点的 **Appearance > Themes** 选项卡中查看时该主题是否可见。将此选项设置为 **Hidden** 将从视图中移除该主题，从而限制选择和激活的能力。

**The behavior selection allows the network administrator to define the state of the theme upon the creation of the customer site.**

在 **A** **vailable** 状态下，主题可供客户自行激活。相反，**Not Available** 状态会移除客户激活主题的能力。最后，**Force Activate** 选项强制选择并激活主题，从而在站点创建时将其设置为默认。

#### Plugins

与 Themes 选项卡类似，Ultimate Multisite 允许网络管理员定义插件对客户的可见性以及在创建新站点时的状态。

**visibility** 下拉菜单允许插件在客户通过插件菜单查看其站点时可见或隐藏。

网络管理员可以通过使用行为下拉菜单中的选项进一步操纵插件的行为。

**Default** 选择尊重客户选择的站点模板中定义的插件状态。因此，在模板中激活的插件在克隆到客户站点时将保持激活。

**Force Activate** 在站点创建时将插件置为激活状态，反之 **Force Inactivate** 在站点创建时停用插件。在这两种情况下，插件状态可由客户通过其 WordPress 插件菜单手动更改。

**Force Activate & Lock** 设置类似，但防止客户更改插件状态。因此，设置为 Force Activate and Lock 将强制插件进入激活状态并阻止客户停用它。同样，**Force Inactivate & Lock** 设置将强制插件进入停用状态并阻止用户激活插件。

网络管理员可能希望将 Force Activate & Lock 和 Force Inactivate & Lock 设置与站点模板结合考虑，因为插件和插件状态可能会受到这些设置的影响。

#### Reset Limitations

**Reset Limitations** 选项卡重置产品上定义的所有自定义限制。要重置限制，请单击 **reset limitations** 按钮。

要确认操作，请将 **confirm reset** 切换滑动至右侧激活状态，然后单击 **reset limitations** 按钮。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UXNQerLby7.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xKySIUIvrI.png)

#### Legacy Options

**Legacy Options** 选项卡观察 Ultimate Multisite 1.x 中定义的某些选项和行为。

这些选项是为兼容性和便捷迁移而提供的，并将在未来版本中弃用。

## Edit, Duplicate, or Delete Product

可以通过导航到 **Ultimate Multisite > Products** 并将鼠标悬停在现有产品名称上来编辑、复制或删除现有产品。

## 

###
