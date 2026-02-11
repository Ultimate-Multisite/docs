---
title: 自定义您的注册表单
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# 自定义您的注册表单

为了让您的网络在所有基于 WordPress 平台的 SaaS 中脱颖而出，Ultimate Multisite 允许您使用我们的 **结账表单** 功能自定义注册和登录页面。

虽然它们是尝试将新客户转化时实验不同方法的简单而灵活的方式，但它们主要用于创建个性化的注册表单。本文旨在向您展示如何做到这一点。

## 登录和注册页面：

在安装 Ultimate Multisite 后，它会在您的主站点自动创建自定义登录和注册页面。您可以随时通过进入 **Ultimate Multisite > Settings > Login & Registration** 页面来更改这些默认页面。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-K3a5Ol4prD.png)

让我们来看看您可以在 **Login & Registration** 页面上自定义的每个选项：

- **Enable registration:** 此选项将启用或禁用网络上的注册。如果关闭，您的客户将无法注册并订阅您的产品。

- **Enable email verification:** 如果此选项开启，订阅免费计划或带试用期的付费计划的客户将收到验证邮件，并需要点击验证链接以创建他们的网站。

- **Default registration page:** 这是默认的注册页面。此页面需要在您的网站上发布，并包含一个注册表单（也称为结账表单）——客户将在此订阅您的产品。您可以创建任意数量的注册页面和结账表单，只需记得在注册页面上放置结账表单短代码，否则它将不会出现。

- **Use custom login page:** 此选项允许您使用自定义登录页面，而不是默认的 wp-login.php 页面。如果此选项开启，您可以在 **Default login page** 选项（位于其下方）中选择用于登录的页面。

- **Obfuscate the original login url (wp-login.php)** : 如果您想隐藏原始登录 URL，可以开启此选项。这有助于防止暴力破解攻击。如果启用此选项，Ultimate Multisite 在用户尝试访问原始 wp-login.php 链接时会显示 404 错误。

- **Force synchronous site publication:** 当客户在网络上订阅产品后，新的待处理站点需要转换为真实的网络站点。发布过程通过作业队列异步完成。启用此选项可强制在注册请求中完成发布。

现在，让我们看看仍与登录和注册过程相关的其他选项。它们位于同一登录 & 注册页面的 **Other options** 下方：

- **Default role:** 这是客户在注册过程后在其网站上拥有的角色。

- **Add users to the main site as well:** 启用此选项后，用户在注册过程后也会被添加到网络的主站点。如果启用此选项，您还会在其下方看到设置这些用户在网站上 **default role** 的选项。

- **Enable multiple accounts:** 允许用户在网络的不同站点使用相同的电子邮件地址拥有账户。如果此选项关闭，您的客户将无法在网络上运行的其他网站上使用相同的电子邮件地址创建账户。

以上就是您可以自定义的所有与登录和注册相关的选项！编辑完成后别忘了保存设置。

## 使用多个注册表单：

Ultimate Multisite 2.0 提供了一个结账表单编辑器，允许您创建任意数量的表单，包含不同字段、提供的产品等。

登录和注册页面都嵌入了短代码：登录页面使用 **[wu_login_form]**，注册页面使用 **[wu_checkout]**。您可以通过构建或创建结账表单进一步自定义注册页面。

要访问此功能，请转到左侧边栏的 **Checkout Forms** 菜单。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vvxvSRGAfu.png)

在此页面，您可以看到所有已创建的结账表单。

如果想创建新的表单，只需点击页面顶部的 **Add Checkout Form**。

您可以将这三种选项之一（单步、多步或空白）作为起点。然后点击 **Go to the Editor**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OVx7AlxoX5.png)

或者，您可以通过点击表单名称下方的选项来编辑或复制已有表单。在那里，您还会找到复制表单短代码或删除表单的选项。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LdsdAu67WF.png)

如果选择单步或多步，结账表单将已预填基本步骤。随后，如果需要，您可以添加额外步骤。

### 编辑结账表单：

正如之前提到的，您可以为不同目的创建结账表单。在此示例中，我们将处理一个注册表单。

进入结账表单编辑器后，为表单命名（仅用于内部引用）并设置 slug（例如用于创建短代码）。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RvbtUn4r3w.png)

表单由步骤和字段组成。您可以点击 **Add New Checkout Step** 添加新步骤。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9Wgpw8DTj9.png)

在模态窗口的第一个选项卡中，填写表单步骤的内容。为其设置 ID、名称和描述。这些项目主要用于内部。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-lr6RKlgll1.png)

接下来，设置步骤的可见性。您可以选择 **Always show**、**Only show for logged in users** 或 **Only show for guests**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0Q6LxP9E90.png)

最后，配置步骤样式。这些是可选字段。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WmBuHXYH7N.png)

现在，开始为第一个步骤添加字段。点击 **Add New Field** 并选择所需的字段类型。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vM8n8QuTzk.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HkNUp6cWRG.png)

每个字段都有不同的参数需要填写。此处我们选择 **Username** 字段。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PFaP6RufZU.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U6Mm10qIeF.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Lr1mEi1DlH.png)

您可以根据需要添加任意数量的步骤和字段。若要向客户展示可选产品，请使用 Pricing Table 字段；若想让客户选择模板，请添加 Template Selection 字段，依此类推。

_**注意：** 如果在创建结账表单后创建了产品，您需要在 Pricing table 部分添加该产品。若未添加，产品将不会在注册页面显示给客户。_

_**注意 2：** username、email、password、site title、site URL、order summary、payment 和 submit button 是创建结账表单的必填字段。_

在编辑结账表单时，您可以随时使用预览按钮查看客户的视图。您还可以在已登录用户和访客视图之间切换。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3zPxZNqzkG.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YXZp7n5Nuw.png)

最后，在 **Advanced Options** 中，您可以配置 **Thank You** 页面信息，添加跟踪转换的代码片段，添加自定义 CSS，或将其限制为特定国家。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TVQ9EUbGJ6.png)

您还可以通过右侧列的此选项手动启用或禁用结账表单，或永久删除表单。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-N5wdel1IIp.png)

别忘了保存您的结账表单！

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rJPV89yQZt.png)

要获取表单短代码，请点击 **Generate Shortcode** 并复制模态窗口中显示的结果。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RTJclNTnJZ.png)

_**注意：** 您需要将此短代码添加到注册页面，以便将结账表单添加到其中。_

## 通过 URL 参数预选产品和模板：

如果您想为产品创建自定义价格表，并在结账表单中预选客户从价格表或模板页面选择的产品或模板，可以使用 URL 参数。

### **针对计划：**

转到 **Ultimate Multisite > Products > Select a plan**。您应该会在页面顶部看到 **Click to copy Shareable Link** 按钮。此链接可用于在结账表单中预选此特定计划。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bUyOlBEfNj.png)

请注意，此可共享链接仅适用于 **Plans**。您无法为套餐或服务使用可共享链接。

### 针对模板：

如果想在结账表单中预选站点模板，可以在注册页面 URL 中使用参数：**?template_id=X**。"X" 需要替换为 **site template ID number**。要获取此编号，请转到 **Ultimate Multisite > Sites**。

在您想使用的站点模板下方点击 **Manage**。您将看到 SITE ID 编号。只需使用此编号即可在结账表单中预选此特定站点模板。在此案例中，URL 参数为 **?template_id=2**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JEgVAVNYMu.png)

假设我们的网络网站是 [**www.mynetwork.com**](http://www.mynetwork.com)，我们的注册页面（包含结账表单）位于 **/register** 页面。预选此站点模板的完整 URL 将类似于 [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**。

如果需要，您还可以同时预选产品和模板。只需复制计划的可共享链接，并在末尾粘贴模板参数即可。URL 将类似于 [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**。
