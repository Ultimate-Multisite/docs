---
title: 站点模板
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# Site Templates (v2)

_**注意：本文涉及 Ultimate Multisite 2.x 版本。如果您使用的是 1.x 版本，**_ **请参阅此文章** _**。**_

我们的目标是在使用 Ultimate Multisite 创建高级网络时，尽可能自动化尽可能多的流程，同时为客户在创建网站时提供灵活性和多种选择。实现这种平衡的一种简单方法是使用 Ultimate Multisite 站点模板功能。

## What is a Site Template?

正如其名称所示，站点模板是一种可用作创建网络中新站点基础的模板站点。

这意味着您可以创建一个基础站点，激活不同的插件，设置一个活动主题，并按您喜欢的任何方式进行自定义。然后，当您的客户创建新账户时，他们不会得到一个没有任何有意义内容的默认 WordPress 站点，而是会得到一份包含所有自定义和内容的基础站点副本。

听起来很棒，但我如何创建一个新的站点模板？这比任何可能的方式都要简单。

## Creating and Editing a new Site Template

站点模板只是您网络中的普通站点。要创建新模板，您只需转到 **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![add site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-D1F8SOUTYU.png)**

这将打开一个模态窗口，询问 **Site title, Site Domain/path,** 和 **Site type**。在 **Site Type** 下拉字段中，请确保选择 **Site Template** *.*

_![Add site template modal](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-gGWUnGCS36.png)_

在表单底部，您会注意到一个 **Copy Site** 切换开关。它将允许您基于现有站点模板创建一个新的站点模板，作为起点，帮助您节省时间，而不是从头开始创建站点模板。

![Add site template modal 2](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DVSq5dgWfa.png)

### Customizing the contents of a Site Template

要自定义您的站点模板，只需导航到其仪表盘面板并进行所需更改。您可以创建新文章、页面，激活插件并更改活动主题。您甚至可以进入自定义器，修改各种自定义选项。

所有这些数据将在客户基于该站点模板创建新站点时被复制过来。

### Advanced Options

如果您熟悉一些自定义编码，您可以使用我们的搜索和替换 API，在新站点创建后自动替换信息。这对于替换关于页面上的公司名称、联系页面上的联系电子邮件等非常有用。

### Using Site Templates

好的，您已经创建了一堆不同设计、主题和设置的站点模板。现在如何让它们在您的网络中发挥作用？

基本上，您现在可以使用两种方法（不能同时使用）：

  * 为每个计划附加一个站点模板

**OR**

  * 允许您的客户在注册时自行选择站点模板。

#### Mode 1: Assign Site Template

在此模式下，您的客户在创建账户时无法选择模板，而是您将定义每个计划应使用的模板。

为此，您需要转到 **Ultimate Multisite > Products > Edit**。

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-t7UjzQEG5g.png)

这将带您进入 **Edit Produc** t 页面。在 **Product Options** 部分，找到 **Site template** 选项卡，并从下拉字段中选择 **Assign Site** **Template** 选项。这将显示可用站点模板列表，并允许您仅为该产品选择一个专用站点模板。

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HTcetltjLR.png)

#### Mode 2: Choose Available Site Template

在此模式下，您将在注册过程中为客户提供选择。客户将能够从您在产品设置中定义的不同站点模板中进行选择。您可以选择限制他们在所选产品下可选择的站点模板。这将使您能够在每个产品下拥有不同的站点模板集合，理想地突出更高价产品的不同功能和特性。

在 **Edit Product** 页面。在 **Product Options** 部分，找到 **Site template** 选项卡，并从下拉字段中选择 **Choose Available Site Template** 选项。这将显示可用站点模板列表，并允许您选择想要可用的站点模板。您可以通过选择其行为来完成此操作：**Available**（如果您希望站点模板包含在列表中）；_**Not Available**_（如果您希望站点模板不显示为选项）；以及 **Pre-selected**（如果您希望列表中的某个站点模板为默认选择）。

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dY8gSreOfG.png)

### Default Mode: Site template selection on the Checkout form

如果您希望所有站点模板在注册期间都可用，或者不想在每个创建的产品下进行分配或指定站点模板的额外工作，那么您可以简单地在 **Checkout Form** 下设置站点模板选择。为此，您只需转到 **Ultimate Multisite > Checkout Forms**，然后点击您想要配置的表单下的 **Edit**。

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FaXifuzMu3.png)

这将打开 **Edit Checkout Form** 页面。找到 **Template Selection** 字段并点击其下方的 **Edit**。

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZDAp4vdnve.png)

将出现一个模态窗口。在 **Template Sites** 字段下，您可以选择并列出所有希望在注册期间可用的站点模板。您在此处指定的站点模板将无论用户选择了哪个产品都可用。

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pCSfzJkf4d.png)

### Site Template Options

在 Ultimate Multisite 设置中还有其他可开启或关闭的站点模板功能。

![Site template option](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wrwT3rqFEf.png)

#### Allow Template Switching

启用此选项将允许您的客户在账户和站点创建后，在注册过程中切换他们选择的模板。这从客户的角度来看很有用，因为它允许他们在后来发现原始选择并非最适合其特定需求时重新选择模板。

#### Allow Users to use their Site as templates

由于子站点用户花时间构建和设计自己的站点，他们可能希望克隆并将其用作在您的网络上创建另一个子站点时可用的站点模板之一。此选项将使他们实现这一点。

#### Copy Media on Template Duplication

勾选此选项将把模板站点上上传的媒体复制到新创建的站点。此设置可在每个计划中被覆盖。

#### **Prevent Search Engines from indexing Site Templates**

如本文所述，站点模板是模板，但仍是您网络的一部分，这意味着它们仍可被搜索引擎发现。此选项将允许您隐藏站点模板，以便搜索引擎无法索引它们。

## Pre-populating Site Templates with auto search-and-replace

Ultimate Multisite 最强大的功能之一是能够在注册表单中添加任意文本、颜色和选择字段。一旦我们捕获到这些数据，我们就可以用它来预填充所选站点模板中某些部分的内容。然后，当新站点发布时，Ultimate Multisite 将用注册期间输入的实际信息替换占位符。

例如，如果您希望在注册期间获取最终用户的公司名称并自动将公司名称放在首页。在您的模板站点首页，您需要添加占位符，如下图所示（占位符应被双大括号包围 - {{placeholder_name}}）。

![homepage placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-yEOlZVv2Gr.png)

然后，您只需在结账表单中添加一个匹配的注册字段来捕获该数据：

![checkout form](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9adTd73gNT.png)

您的客户随后将能够在注册期间填写该字段。

![registration field](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jHQ9ZOGWlh.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-preview)

Ultimate Multisite 将随后自动用客户提供的数据替换占位符。

![replace placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-chL5wf7wmY.png)

### Solving the "template full of placeholders" problem

这一切都很好，但我们确实遇到了一个丑陋的问题：现在我们的站点模板——客户可以访问的——充满了无聊的占位符，无法提供太多信息。

为了解决这个问题，我们提供了为占位符设置虚假值的选项，并在客户访问期间使用这些值在模板站点上搜索并替换其内容。

您可以通过转到 **Ultimate Multisite > Settings > Sites** 并在侧边栏中点击 **Edit Placeholders** 链接来访问模板占位符编辑器。

![placeholder settings](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztZnAexNEZ.png)

这将带您进入占位符内容编辑器，您可以在其中添加占位符及其相应内容。

![template placeholders](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-95QJa1MRGz.png)
