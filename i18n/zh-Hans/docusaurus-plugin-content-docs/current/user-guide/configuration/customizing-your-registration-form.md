---
title: 自定义您的注册表单
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# 自定义您的注册表单

为了让您的网络在所有基于 WordPress 平台的 SaaS 中脱颖而出，Ultimate Multisite 允许您使用我们的 **Checkout Forms** 功能自定义注册和登录页面。

虽然它们是尝试将新客户转化时实验不同方法的简单灵活方式，但它们主要用于创建个性化的注册表单。本文旨在向您展示如何做到这一点。

## 登录和注册页面：

在安装 Ultimate Multisite 后，它会在您的主站点自动创建自定义登录和注册页面。您可以随时通过进入 **Ultimate Multisite > Settings > Login & Registration** 页面来更改这些默认页面。

![登录和注册设置页面](/img/config/settings-general.png)

让我们来看看您可以在 **Login & Registration** 页面上自定义的每个选项：

- **Enable registration:** 此选项将启用或禁用网络上的注册。如果关闭，您的客户将无法注册并订阅您的产品。

- **Enable email verification:** 如果此选项开启，订阅免费计划或带试用期的付费计划的客户将收到验证邮件，并需要点击验证链接才能创建他们的网站。

- **Default registration page:** 这是默认的注册页面。此页面需要在您的网站上发布，并包含一个注册表单（也称为结账表单）——客户将在此订阅您的产品。您可以创建任意数量的注册页面和结账表单，只需记得在注册页面上放置结账表单短代码，否则它将不会显示。

- **Use custom login page:** 此选项允许您使用自定义登录页面，而不是默认的 wp-login.php 页面。如果开启此选项，您可以在 **Default login page** 选项（位于其下方）中选择用于登录的页面。

- **Obfuscate the original login url (wp-login.php)**：如果您想隐藏原始登录 URL，可以开启此选项。这有助于防止暴力破解攻击。如果启用此选项，Ultimate Multisite 在用户尝试访问原始 wp-login.php 链接时会显示 404 错误。

- **Force synchronous site publication:** 当客户在网络上订阅产品后，新的待处理站点需要转换为真实的网络站点。发布过程通过作业队列异步完成。启用此选项可强制在注册请求中完成发布。

现在，让我们看看仍与登录和注册过程相关的其他选项。它们位于同一登录 & 注册页面的 **Other options** 下方：

- **Default role:** 这是客户在注册流程完成后在其网站上拥有的角色。

- **Add users to the main site as well:** 启用此选项后，用户在注册流程完成后也会被添加到网络的主站点。如果启用此选项，您还会在其下方看到设置这些用户在网站上 **default role** 的选项。

- **Enable multiple accounts:** 允许用户在网络的不同站点使用相同的电子邮件地址拥有账户。如果此选项关闭，您的客户将无法在网络上运行的其他网站上使用相同的电子邮件地址创建账户。

以上就是您可以自定义的所有与登录和注册相关的选项！编辑完成后别忘了保存设置。

## 使用多个注册表单：

Ultimate Multisite 2.0 提供了一个结账表单编辑器，允许您创建任意数量的表单，包含不同字段、提供的产品等。

登录和注册页面都嵌入了短代码：登录页面使用 **[wu_login_form]**，注册页面使用 **[wu_checkout]**。您可以通过构建或创建结账表单进一步自定义注册页面。

要访问此功能，请转到左侧边栏的 **Checkout Forms** 菜单。

![侧边栏中的 Checkout Forms 菜单](/img/config/checkout-forms-list.png)

在此页面，您可以查看所有已创建的结账表单。

如果想创建新表单，只需点击页面顶部的 **Add Checkout Form**。

您可以从以下三种选项中选择一个作为起点：单步、分步或空白。然后点击 **Go to the Editor**。

![添加结账表单时的单步、分步或空白选项](/img/config/checkout-forms-list.png)

或者，您可以通过点击表单名称下方的选项来编辑或复制已有表单。在那里，您还会找到复制表单短代码或删除表单的选项。

![结账表单悬停操作：编辑、复制和删除](/img/config/checkout-form-hover-actions.png)

如果选择单步或分步，结账表单将预先填充基本步骤。随后，您可以根据需要添加额外步骤。

### 编辑结账表单：

正如之前提到的，您可以为不同目的创建结账表单。在此示例中，我们将处理一个注册表单。

进入结账表单编辑器后，为表单命名（仅用于内部引用）并设置 slug（用于创建短代码等）。

![结账表单编辑器中的名称和 slug 字段](/img/config/checkout-form-editor.png)

表单由步骤和字段组成。您可以点击 **Add New Checkout Step** 添加新步骤。

![添加新结账步骤按钮](/img/config/checkout-form-add-step.png)

在模态窗口的第一个选项卡中，填写表单步骤的内容。为其设置 ID、名称和描述。这些项目主要用于内部。

![结账步骤内容选项卡：ID、名称和描述](/img/config/checkout-form-step.png)

接下来，设置步骤的可见性。您可以选择 **Always show**、**Only show for logged in users** 或 **Only show for guests**。

![结账步骤可见性选项](/img/config/checkout-form-step.png)

最后，配置步骤样式。这些是可选字段。

![结账步骤样式配置](/img/config/checkout-form-step.png)

现在，开始为第一个步骤添加字段。点击 **Add New Field** 并选择所需的字段类型。

![添加新字段按钮](/img/config/checkout-form-editor.png)![字段类型选择下拉框](/img/config/checkout-form-step.png)

每个字段都有不同的参数需要填写。此处我们选择 **Username** 字段。

![用户名字段配置](/img/config/checkout-form-step.png)![用户名字段参数](/img/config/checkout-form-step.png)![用户名字段附加设置](/img/config/checkout-form-step.png)

您可以根据需要添加任意数量的步骤和字段。若要向客户展示产品供其选择，请使用 Pricing Table 字段；若想让客户选择模板，请添加 Template Selection 字段，等等。

**注意：** 如果在创建结账表单后再创建产品，您需要在 Pricing Table 部分添加该产品。若未添加，产品将不会在注册页面显示给客户。

**注意 2：** username、email、password、site title、site URL、order summary、payment 和 submit button 是创建结账表单的必填字段。

在编辑结账表单时，您可以随时使用预览按钮查看客户的视图。您还可以在现有用户和访客之间切换。

![结账表单编辑器中的预览按钮](/img/config/checkout-form-editor.png)![结账表单预览：访客或现有用户](/img/config/checkout-form-editor.png)

最后，在 **Advanced Options** 中，您可以配置 **Thank You** 页面消息、添加跟踪转换的代码片段、为结账表单添加自定义 CSS，或将其限制为特定国家。

![高级选项：Thank You 页面、转换跟踪和自定义 CSS](/img/config/checkout-form-advanced.png)

您还可以通过右侧列的开关手动启用或禁用结账表单，或永久删除表单。

![结账表单的激活切换和删除选项](/img/config/checkout-form-active.png)

别忘了保存您的结账表单！

![保存结账表单按钮](/img/config/checkout-form-save.png)

要获取表单的短代码，请点击 **Generate Shortcode** 并复制模态窗口中显示的结果。

![生成短代码模态窗口：复制短代码](/img/config/checkout-form-editor.png)

**注意：** 您需要将此短代码添加到注册页面，以便将结账表单添加到其中。

## 通过 URL 参数预选产品和模板：

如果您想为产品创建自定义价格表，并在结账表单中预选客户从价格表或模板页面选择的产品或模板，可以使用 URL 参数。

### **For plans:**

转到 **Ultimate Multisite > Products > Select a plan**。您应该会在页面顶部看到 **Click to copy Shareable Link** 按钮。该链接可用于在结账表单中预选此特定计划。

![产品页面中的可共享链接按钮](/img/config/products-list.png)

请注意，此可共享链接仅适用于 **Plans**。您无法为套餐或服务使用可共享链接。

### For templates:

若想在结账表单中预选站点模板，可在注册页面 URL 中使用参数：**?template_id=X**。将 “X” 替换为 **site template ID number**。获取此编号，请转到 **Ultimate Multisite > Sites**。

在所需站点模板下方点击 **Manage**。您将看到 SITE ID 编号。仅需使用此编号即可在结账表单中预选该站点模板。在此案例中，URL 参数为 **?template_id=2**。

![站点列表显示站点模板 ID](/img/config/site-templates-list.png)

假设我们的网络网站为 [**www.mynetwork.com**](http://www.mynetwork.com)，注册页面（包含结账表单）位于 **/register**。完整 URL（预选站点模板）将类似于 [**www.mynetwork.com/register/?template_id=2**]。

如果需要，您还可以同时预选产品和模板。只需复制计划的可共享链接，并在末尾添加模板参数即可。示例： [**www.mynetwork.com/register/premium-plan/?template_id=2**]。
