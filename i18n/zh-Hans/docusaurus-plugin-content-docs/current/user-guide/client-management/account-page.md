---
title: 客户 Account 页面
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# 您客户的 Account 页面 (v2) {#your-clients-account-page-v2}

_**重要提示：本文适用于 Ultimate Multisite 2.x 版本。**_

当客户在您的网络上订阅一个套餐时，他们将获得一个网站及其 Dashboard 的访问权限，其中包含有关其付款、会员资格、域名、套餐限制等的重要信息……

在本教程中，我们将带您了解客户的 Account 页面，您将看到客户可以在其中看到什么以及执行什么操作。

## Account 页面 {#the-account-page}

可以通过在客户的 Dashboard 中点击 **Account** 来访问 Account 页面。

![客户 Dashboard 中的 Account 菜单](/img/account-page/account-menu.png)

在主权租户网络中，Ultimate Multisite v2.13.0 会将此客户管理体验保留在主站点上。如果客户从主权租户打开账户、结账、账单、发票、站点管理、模板切换或域名映射操作，该操作会指回主站点客户面板，以确保网络账单和会员记录保持权威性。

当客户来自主权租户时，主站点客户面板可以包含一个返回租户站点的链接。只有当 Ultimate Multisite 能够验证返回目标是该客户的站点之一时，才会显示返回链接，这可以防止任意重定向，同时保留租户工作流程。

![客户 Account 页面概览](/img/account-page/overview.png)

客户点击后，将看到其会员资格、账单地址、发票、域名、站点限制的概览，并且还可以更改 ****站点模板**（如果您的网络允许）**。

他们还可以将会员资格更改为另一个套餐，或购买您提供的其他包或服务。让我们分别看看每个部分。

### 您的会员资格概览： {#your-membership-overview}

客户网站名称正下方的第一个区块显示其当前套餐以及随套餐购买的服务/包的概览。该区块还显示会员编号、为其支付的初始金额、套餐以及任何服务/包的费用，以及该会员资格被计费的次数。他们还可以看到会员资格是 **有效**、**已过期** 还是 **已取消**。

![显示套餐、金额和账单详情的会员资格概览](/img/account-page/membership-card.png)

在此区块正下方，客户可以看到 **关于此站点** 和 **站点限制** 区块。这些区块会向他们显示其套餐附带的所有限制：磁盘空间、文章、页面、访问量等……这些限制可以在 **Ultimate Multisite > 产品** 的每个套餐页面上配置。

![显示套餐限制的关于此站点和站点限制区块](/img/account-page/site-limits.png)

在 **您的会员资格** 右侧，客户可以点击 **更改**。这将向他们显示所有可用的套餐和包/服务。如果他们选择另一个套餐，该套餐的限制将取代当前会员资格的限制——无论他们是在降级还是升级。

现在，如果您的客户选择为当前会员资格购买包或服务——例如更多磁盘空间或访问量——当前会员资格不会被更改，只会向其中添加新的包。

请注意，优惠券代码不能添加到此会员资格更改页面。如果客户在首次购买会员资格时使用了优惠券代码，该代码也将应用于这个新的会员资格。

### 更新账单地址： {#updating-the-billing-address}

在 Account 页面上，您的客户也可以更新其账单地址。他们只需点击 _账单地址_ 旁边的 **更新**。

![带有更新按钮的账单地址部分](/img/account-page/billing-address.png)

客户会看到一个新窗口。他只需要填写新地址并点击 _保存更改_。

![更新账单地址表单](/img/account-page/billing-address-form.png)

### 更改站点模板： {#changing-the-site-template}

要允许客户更改其站点模板，您需要前往 **Ultimate Multisite > 设置 > 站点**，并开启 **允许模板切换** 选项。

另外，在 **Ultimate Multisite > 产品** 中，选择您的套餐并前往 **站点模板** 选项卡。确保 **允许站点模板** 选项已开启，并且在 **站点模板选择模式** 中，已选择 **选择可用的站点模板** 选项。

![带有模板选择模式的产品站点模板选项卡](/img/config/product-site-templates.png)

您将能够在您的网站上看到所有可用的站点模板。选择哪些模板要提供给订阅此套餐的客户，哪些不提供给他们。请注意，此选项也会影响结账表单，因此任何被选择为 **不可用** 的模板都不会出现在此套餐的注册页面上。

现在，您的客户可以在其 Account 页面中点击 **更改站点模板**。

![Account 页面上的更改站点模板按钮](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 显示了重新设计的模板切换面板。该面板以 **当前模板卡片** 开始，因此客户可以在选择替换模板之前看到哪个模板处于激活状态。

在客户查看选项时，可用站点模板的固定网格会保持可见。这有助于他们在不忘记当前选择的情况下，比较其套餐允许使用的模板。

![该套餐的可用站点模板列表](/img/config/site-templates-list.png)

选择他们想要切换到的模板后，系统会要求他们确认更改。

![站点模板切换确认对话框](/img/account-page/template-switch-confirm.png)

开启确认并点击 **处理切换** 后，新的站点模板将用于您客户的网站。

客户也可以在需要将站点重置回当前分配的模板时，从此面板使用 **Reset current template**。与切换到另一个模板一样，重置模板可能会覆盖站点内容，因此客户只有在理解重置操作后才应确认。

### 添加自定义域名： {#adding-custom-domains}

你的客户也可以在其账户页面为此计划添加自定义域名。要允许你的客户使用自定义域名，请前往 **Ultimate Multisite > Settings >** **Domain Mapping**。

开启 **Enable Domain Mapping** 选项。这将允许你的客户在网络级别使用自定义域名。

别忘了也检查是否基于产品启用了域名映射——因为你可以限制某个产品，不允许你的客户使用自定义域名。

前往 **Ultimate Multisite > Products**。选择你想要的计划，然后进入 **Custom Domains** 选项卡。开启 **Allow Custom Domains** 选项。

![带有 Allow Custom Domains 开关的 Custom Domains 选项卡](/img/config/product-custom-domains.png)

这将允许所有订阅此特定计划的客户使用自定义域名。现在，在 Account 页面上，你的客户可以通过点击 **Add Domain** 添加自定义域名。

![账户页面上的 Add Domain 按钮](/img/account-page/add-domain-button.png)

打开的第一个窗口会向你的客户显示一条消息，说明如何更新他们的 DNS 记录，以便让此自定义域名在你的网络上生效。

![添加自定义域名时显示的 DNS 说明](/img/account-page/add-domain-dns.png)

此消息可以由你在 **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** 中编辑。

![Domain Mapping 中的 Add New Domain Instructions 设置](/img/config/settings-domain-mapping.png)

下面是域名映射设置页面的完整视图：

![域名映射设置完整页面](/img/config/settings-domain-mapping-full.png)

点击 **Next Step** 后，你的客户可以添加他们的自定义域名，并选择此自定义域名是否作为主域名。请注意，你的客户可以为其网站使用多个自定义域名，因此他们可以选择哪一个作为主域名。

![带有主域名选项的自定义域名输入](/img/account-page/add-domain-primary.png)

点击 **Add Domain** 后，该域名将被添加到你客户的账户中。现在他们需要做的就是在其域名注册商处更改此自定义域名的 DNS 记录。

### 更改密码： {#changing-password}

在账户 Dashboard 内，你的客户也可以通过点击 **Change Password** 来更改密码。

![账户页面上的 Change Password 按钮](/img/account-page/change-password-button.png)

这将显示一个新窗口，你的客户需要在其中填写当前密码，然后填写他们想使用的新密码。

![包含当前密码和新密码字段的更改密码表单](/img/account-page/change-password-form.png)

### 危险区域： {#danger-zone}

我们还提供两个显示在 **Danger Zone** 部分的选项：**Delete Site** 和 **Delete Account**。它们都位于 Danger Zone 部分，因为这两个操作都是不可逆的。如果你的客户删除他们的网站或账户，就无法恢复。

![包含 Delete Site 和 Delete Account 选项的 Danger Zone](/img/account-page/danger-zone.png)

如果你的客户点击这两个选项中的任意一个，都会看到一个窗口，他们需要在其中开启移除网站或账户的选项，并会收到此操作无法撤销的警告。

![Delete Site 确认对话框](/img/account-page/delete-site-confirm.png)

![Delete Account 确认对话框](/img/account-page/delete-account-confirm.png)

如果他们删除自己的网站，他们的账户和会员资格仍会保持不变。他们只会失去网站上的所有内容。如果他们删除自己的账户，与此账户相关的所有网站、会员资格和信息都将丢失。
