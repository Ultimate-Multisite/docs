---
title: 自定义您的注册表单
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# 自定义你的注册表单 {#customizing-your-registration-form}

为了让你的网络从所有其他基于 WordPress 平台构建的 SaaS 中显得独一无二，Ultimate Multisite 允许你使用我们的 **Checkout Forms** 功能来自定义注册和登录页面。

虽然它们是在尝试转化新客户时用于试验不同方法的一种简单且灵活的方式，但它们主要用于创建个性化注册表单。本文旨在向你展示如何做到这一点。

## 登录和注册页面： {#login-and-registration-pages}

安装 Ultimate Multisite 后，它会自动在你的主站点上创建自定义登录和注册页面。你可以随时前往 **Ultimate Multisite > Settings > Login & Registration** 页面更改这些默认页面。

![登录和注册设置页面](/img/config/settings-general.png)

以下是登录和注册设置页面的完整视图：

![登录和注册设置完整页面](/img/config/settings-login-registration-full.png)

让我们看看你可以在 **Login & Registration** 页面上自定义的每个选项：

  * **启用注册：** 此选项将启用或禁用你网络上的注册。如果将其关闭，你的客户将无法注册并订阅你的产品。

  * **启用电子邮件验证：** 如果此选项开启，订阅免费套餐或带试用期付费套餐的客户将收到一封验证电子邮件，并需要点击验证链接后，他们的网站才会被创建。

  * **默认注册页面：** 这是默认注册页面。此页面需要在你的网站上发布，并且包含一个注册表单（也称为结账表单）——你的客户将在这里订阅你的产品。你可以创建任意数量的注册页面和结账表单，只需记得将结账表单短代码放在注册页面上，否则它不会显示。

  * **使用自定义登录页面：** 此选项允许你使用自定义登录页面，而不是默认的 wp-login.php 页面。如果此选项开启，你可以在**默认登录页面**选项（就在下方）中选择用于登录的页面。

  * **混淆原始登录 url（wp-login.php）**：如果你想隐藏原始登录 URL，可以开启此选项。这有助于防止暴力破解攻击。如果启用此选项，当用户尝试访问原始 wp-login.php 链接时，Ultimate Multisite 将显示 404 错误

  * **强制同步站点发布：** 客户在网络上订阅产品后，新的待处理站点需要转换为真实的网络站点。发布过程通过任务队列以异步方式进行。启用此选项可强制发布在与注册相同的请求中发生。

现在，让我们看看仍然与登录和注册流程相关的其他选项。它们就在同一 Login & registration 页面上的 **Other options** 下方：

  * **默认角色：** 这是你的客户在注册流程完成后会在其网站上拥有的角色。

  * **启用 Jumper：** 在管理区域启用 Jumper 快捷方式。Jumper 允许管理员快速跳转到 Ultimate Multisite 屏幕、网络对象以及其他受支持的目标，而无需浏览每个菜单。如果你希望从管理界面隐藏该快速导航工具，请将其关闭。

  * **同时将用户添加到主站点：** 启用此选项后，在注册流程完成后也会将用户添加到你网络的主站点。如果启用此选项，下方还会出现一个用于设置这些用户在你网站上的**默认角色**的选项。

  * **启用多个账户：** 允许用户使用相同的电子邮件地址在你网络的不同站点中拥有账户。如果此选项关闭，你的客户将无法使用相同的电子邮件地址在你网络上运行的其他网站中创建账户。

以上就是你可以自定义的所有与登录和注册相关的选项！完成编辑后别忘了保存你的设置。

## 使用多个注册表单： {#using-multiple-registration-forms}

Ultimate Multisite 2.0 提供了一个结账表单编辑器，允许你创建任意数量的表单，包含不同的字段、提供的产品等。

登录和注册页面都嵌入了短代码：登录页面使用 **[wu_login_form]**，注册页面使用**[wu_checkout]**。你可以通过构建或创建结账表单来进一步自定义注册页面。

要访问此功能，请前往左侧边栏中的 **Checkout Forms** 菜单。

![侧边栏中的 Checkout Forms 菜单](/img/config/checkout-forms-list.png)

在此页面上，你可以看到你拥有的所有结账表单。

如果你想创建一个新的，只需点击页面顶部的 **Add Checkout Form**。

你可以选择以下三个选项之一作为起点：单步骤、多步骤或空白。然后，点击 **Go to the Editor**。

![添加带有单步骤、多步骤或空白选项的 Checkout Form](/img/config/checkout-forms-list.png)

或者，你可以点击表单名称下方的选项来编辑或复制已有表单。在那里，你还会找到复制表单短代码或删除表单的选项。

![结账表单悬停操作，包括编辑、复制和删除](/img/config/checkout-form-hover-actions.png)

如果你选择单步骤或多步骤，结账表单将已经预填充其运行所需的基本步骤。然后，如果你愿意，可以向其中添加额外步骤。

### 编辑 Checkout Form： {#editing-a-checkout-form}

如前所述，你可以为不同目的创建结账表单。在此示例中，我们将处理一个注册表单。

导航到结账表单编辑器后，为你的表单命名（仅用于内部引用）并设置一个别名（例如用于创建短代码）。

![带有名称和 slug 字段的结账表单编辑器](/img/config/checkout-form-name-slug.png)

表单由步骤和字段组成。你可以点击 **Add New Checkout Step** 来添加新步骤。

![Add New Checkout Step 按钮](/img/config/checkout-form-add-step.png)

在模态窗口的第一个选项卡中，填写表单步骤的内容。为它设置一个 ID、一个名称和一个描述。这些项目主要在内部使用。

![包含 ID、名称和描述的结账步骤内容选项卡](/img/config/checkout-form-step-content.png)

接下来，设置该步骤的可见性。你可以在 **Always show**、**Only show for logged in users** 或 **Only show for guests** 之间选择。

![结账步骤可见性选项](/img/config/checkout-form-step-visibility.png)

最后，配置步骤样式。这些是可选字段。

![结账步骤样式配置](/img/config/checkout-form-step-style.png)

现在，是时候向我们的第一个步骤添加字段了。只需点击 **Add New Field**，然后选择你想要的区块类型。

![Add New Field 按钮](/img/config/checkout-form-add-field-button.png)![字段类型选择下拉菜单](/img/config/checkout-form-field-type-dropdown.png)

每个字段都有不同的参数需要填写。对于第一个入口，我们将选择 **Username** 字段。

![Username 字段配置](/img/config/checkout-form-username-content.png)![Username 字段参数](/img/config/checkout-form-username-visibility.png)![Username 字段其他设置](/img/config/checkout-form-username-style.png)

你可以根据需要添加任意数量的步骤和字段。要显示你的产品供客户选择，请使用价格表字段。如果你想让客户选择模板，请添加模板选择字段。依此类推。

![带有模板选择字段的结账表单编辑器](/img/config/checkout-form-with-template-field.png)

_**注意：** 如果你在创建结账表单之后创建产品，你需要在价格表区块中添加该产品。如果不添加，该产品将不会在注册页面显示给你的客户。_

_**注意 2：** 用户名、电子邮件、密码、站点标题、站点 URL、订单摘要、支付和提交按钮是创建结账表单的必填字段。_

在处理结账表单时，你始终可以使用预览按钮查看客户将如何看到该表单。你也可以在以现有用户或访客身份查看之间切换。

![结账表单编辑器上的预览按钮](/img/config/checkout-form-preview-button.png)![以访客或现有用户身份预览结账表单](/img/config/checkout-form-preview-modal.png)

最后，在 **高级选项** 中，你可以配置 **感谢** 页面消息，添加用于跟踪转化的代码片段，为结账表单添加自定义 CSS，或将其限制在特定国家/地区。

![包含感谢页面、转化跟踪和自定义 CSS 的高级选项](/img/config/checkout-form-advanced.png)

你还可以通过切换右侧栏中的这个选项来手动启用或禁用结账表单，或永久删除该表单。

![结账表单的启用切换和删除选项](/img/config/checkout-form-active.png)

别忘了保存你的结账表单！

![Save Checkout Form 按钮](/img/config/checkout-form-save.png)

要获取表单的短代码，请点击 **Generate Shortcode**，并复制模态窗口中显示的结果。

![包含可复制短代码的 Generate Shortcode 模态窗口](/img/config/checkout-form-editor.png)

_**注意：** 你需要将此短代码添加到注册页面，才能把这个结账表单添加到该页面。_

## 通过 URL 参数预选产品和模板： {#pre-selecting-products-and-templates-via-url-parameters}

如果你想为产品创建自定义价格表，并在结账表单上预选客户从价格表或模板页面选择的产品或模板，可以使用 URL 参数来实现。

### **对于套餐：** {#for-plans}

前往 **Ultimate Multisite > 产品 > 选择套餐**。你应该会在页面顶部看到 **Click to copy Shareable Link** 按钮。这就是你可以用来在结账表单上预选这个特定套餐的链接。

![带有可分享链接按钮的产品页面](/img/config/products-list.png)

请注意，此可分享链接仅对 **套餐** 有效。你不能对组合包或服务使用可分享链接。

### 对于模板： {#for-templates}

如果你想在结账表单上预选站点模板，可以在注册页面 URL 上使用参数：**?template_id=X**。其中的 “X” 需要替换为 **站点模板 ID 编号**。要获取此编号，请前往 **Ultimate Multisite > 站点**。

点击你想使用的站点模板正下方的 **Manage**。你将看到 SITE ID 编号。只需将这个编号用于这个特定站点模板，即可在结账表单上预选它。在我们这里的示例中，URL 参数将是 **?template_id=2**。

![显示站点模板 ID 的站点列表](/img/config/site-templates-list.png)

假设我们的网络网站是 [**www.mynetwork.com**](http://www.mynetwork.com)，并且带有结账表单的注册页面位于 **/register** 页面。预选此站点模板后的完整 URL 将类似于 [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**。

如果你愿意，也可以在结账表单中同时预选产品和模板。你只需要复制套餐的可分享链接，并在末尾粘贴模板参数。它将类似于 [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**。
