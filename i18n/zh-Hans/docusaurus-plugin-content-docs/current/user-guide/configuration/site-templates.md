---
title: 站点模板
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# 站点模板 (v2)

_**注意：本文适用于 Ultimate Multisite 版本 2.x。如果你使用的是版本 1.x，**_ **请参阅这篇文章** _**。**_

我们在使用 Ultimate Multisite 创建高级网络时的目标，是尽可能自动化更多流程，同时在客户创建网站时为他们提供灵活性和不同选项。实现这种平衡的一种简单方法，就是使用 Ultimate Multisite 站点模板功能。

## 什么是站点模板？ {#what-is-a-site-template}

顾名思义，站点模板是一个样板站点，可在你的网络中创建新站点时作为基础使用。

这意味着你可以创建一个基础站点，启用不同的插件，设置一个启用中的主题，并按你喜欢的任何方式进行自定义。然后，当你的客户创建新的 Account 时，他们得到的就不是一个内部没有有意义内容的默认 WordPress 站点，而是你的基础站点副本，其中所有自定义设置和内容都已就位。

这听起来很棒，但我要如何创建新的站点模板？它再简单不过了。

## 创建和编辑新的站点模板 {#creating-and-editing-a-new-site-template}

站点模板只是你网络中的普通站点。要创建新模板，你只需前往 **网络管理员 > Ultimate Multisite > 站点 > 添加站点。**

**![站点列表页面中的添加站点按钮](/img/config/site-templates-list.png)**

这将打开一个模态窗口，其中会要求填写**站点标题、站点域名/路径**和**站点类型**。在**站点类型**下拉字段中，请确保选择**站点模板** *。*

_![带有站点类型下拉菜单的添加站点模板模态窗口](/img/config/site-templates-list.png)_

你还可以添加面向客户的描述，用于说明该模板包含的内容：

![站点模板编辑界面上的站点模板描述字段](/img/config/site-template-edit-description.png)

在表单底部，你会看到一个**复制站点**切换开关。这将允许你基于现有站点模板创建新的站点模板，作为起点以帮助你节省时间，而不必从头创建站点模板。

![带有复制站点切换开关的添加站点模板模态窗口](/img/config/site-templates-list.png)

### 自定义站点模板的内容 {#customizing-the-contents-of-a-site-template}

要自定义你的站点模板，只需导航到其 Dashboard 面板并进行所需更改。你可以创建新的文章、页面，启用插件并更改启用中的主题。你甚至可以进入自定义器并更改各种自定义选项。

![站点模板编辑界面](/img/config/site-template-edit.png)

当客户基于该站点模板创建新站点时，所有这些数据都会被复制过去。

### 高级选项 {#advanced-options}

如果你熟悉一些自定义编码，可以使用我们的搜索和替换 API，在新站点创建后自动替换其中的信息。这适用于诸如替换“关于”页面上的公司名称、替换“联系”页面上的联系邮箱等情况。

### 使用站点模板 {#using-site-templates}

好的，你已经创建了一批具有不同设计、主题和设置的站点模板。那么现在如何让它们在你的网络中发挥作用？

基本上，你现在可以使用两种方法（不能同时使用）：

  * 将一个站点模板附加到你的每个方案

**或者**

  * 允许你的客户在注册期间自行选择站点模板。

#### 模式 1：分配站点模板 {#mode-1-assign-site-template}

在此模式下，客户在创建 Account 时无法选择模板，而是由你定义每个方案应使用哪个模板。

为此，你需要前往 **Ultimate Multisite > 产品 > 编辑**。

![编辑产品以分配站点模板](/img/config/product-site-templates.png)

这会将你带到**编辑产品**页面。在**产品选项**部分下，找到**站点模板**选项卡，并从下拉字段中选择**分配站点模板**选项。这会显示可用站点模板列表，并允许你只选择一个专用于该产品的站点模板。

![带有分配站点模板选项的产品站点模板选项卡](/img/config/product-site-templates.png)

#### 模式 2：选择可用站点模板 {#mode-2-choose-available-site-template}

在此模式下，你将在注册流程中为客户提供选择。他们将能够从你在产品设置下定义的不同站点模板中进行选择。你可以选择限制他们在所选产品下可选择的站点模板。这将允许你在每个产品下设置不同的站点模板集合，非常适合用于突出价格更高产品的不同功能和特性。

在**编辑产品**页面上。在**产品选项**部分下，找到**站点模板**选项卡，并从下拉字段中选择**选择可用站点模板**选项。这会显示可用站点模板列表，并允许你选择希望可用的站点模板。你可以通过选择其行为来完成：如果你希望该站点模板包含在列表中，请选择**可用**。如果你希望该站点模板不作为选项显示，请选择 _**不可用**_。如果你希望列出的某个站点模板成为默认选中项，请选择**预先选中**。

![带有行为选项的选择可用站点模板](/img/config/product-site-templates.png)

### 默认模式：结账表单上的站点模板选择 {#default-mode-site-template-selection-on-the-checkout-form}

如果你希望所有站点模板都在注册期间可用，或者不想在你创建的每个产品下额外执行分配或指定站点模板的工作。那么你可以直接在你的**结账表单**下设置站点模板选择。为此，请前往 **Ultimate Multisite > 结账表单**，并在你希望配置的表单下点击**编辑**。

这会显示**编辑结账表单**页面。找到**模板选择**字段，并点击其下方的**编辑**。

将出现一个模态窗口。在 **Template Sites** 字段下，你可以选择并列出所有希望在注册期间可用的网站模板。你在此处指定的网站模板将可用，无论用户选择了什么产品。

![结账表单编辑器中的模板选择字段](/img/config/checkout-form-template-step.png)

在前端，客户会在结账期间看到模板选择器，并可以为他们的新网站选择起始设计。

![注册期间的前端模板选择器](/img/config/frontend-template-chooser.png)

### 网站模板选项 {#site-template-options}

还有其他可在 Ultimate Multisite 设置下开启或关闭的网站模板功能。

![Ultimate Multisite 设置中的网站模板选项](/img/config/settings-sites-templates-section.png)

#### 允许切换模板 {#allow-template-switching}

启用此选项将允许你的客户在 Account 和网站创建后，切换他们在注册流程中选择的模板。从客户的角度来看，这很有用，因为如果他们后来发现最初选择的模板并不最适合其特定需求，就可以重新选择模板。

#### 允许用户将其网站用作模板 {#allow-users-to-use-their-site-as-templates}

由于子网站用户花时间构建和设计了自己的网站，他们可能希望在你的网络中创建另一个子网站时，克隆并将其用作可用的网站模板之一。此选项将允许他们实现这一点。

#### 模板复制时复制媒体 {#copy-media-on-template-duplication}

勾选此选项会将模板网站上上传的媒体复制到新创建的网站。此设置可以在每个套餐中被覆盖。

#### **防止搜索引擎索引网站模板** {#prevent-search-engines-from-indexing-site-templates}

本文讨论的网站模板是样板内容，但仍然是你网络的一部分，这意味着搜索引擎仍然可以找到它们。此选项将允许你隐藏网站模板，以便搜索引擎可以索引它们。

## 使用自动搜索和替换预填充网站模板 {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite 最强大的功能之一，是能够向注册表单添加任意文本、颜色和选择字段。一旦我们捕获了这些数据，就可以用它来预填充所选网站模板某些部分中的内容。然后，当新网站发布时，Ultimate Multisite 会将占位符替换为注册期间输入的实际信息。

例如，如果你希望在注册期间获取终端用户的公司名称，并自动将公司名称放到首页上。你需要在模板网站首页添加占位符，如下图所示（占位符应使用双大括号包围添加 - {{placeholder_name}}）。

![带有大括号占位符文本的首页](/img/config/site-templates-list.png)

然后，你只需在结账表单上添加一个匹配的注册字段来捕获该数据。用于模板选择的同一个结账表单编辑器，也允许你将自定义字段与模板选择器放在一起：

![结账表单编辑器中的模板选择和注册字段](/img/config/checkout-form-template-step.png)

然后，你的客户就能在注册期间填写该字段。

![带有模板选择器的前端结账表单](/img/config/frontend-template-chooser.png)

Ultimate Multisite 随后会自动将占位符替换为客户提供的数据。

![网站上替换为客户数据的占位符](/img/config/site-templates-list.png)

### 解决“模板满是占位符”的问题 {#solving-the-template-full-of-placeholders-problem}

所有这些都很好，但我们确实会遇到一个不美观的问题：现在我们的网站模板——客户可以访问——充满了难看的占位符，且不能说明太多信息。

为了解决这个问题，我们提供了为占位符设置虚拟值的选项，并且在客户访问模板网站时，我们会使用这些值来搜索并替换模板网站上的内容。

你可以前往 **Ultimate Multisite > Settings > Sites**，然后在侧边栏点击 **Edit Placeholders** 链接，访问模板占位符编辑器。

![Sites 设置页面下的网站模板设置](/img/config/settings-sites-templates-section.png)

这会将你带到占位符内容编辑器，你可以在其中添加占位符及其对应内容。

![模板占位符内容编辑器入口](/img/config/settings-sites-templates-section.png)
