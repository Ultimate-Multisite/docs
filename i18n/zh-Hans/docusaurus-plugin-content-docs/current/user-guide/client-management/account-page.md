---
title: 客户账户页面
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# 您客户的账户页面 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

当客户在您的网络上订阅计划时，他们将获得一个网站及其仪表盘的访问权限，其中包含有关其付款、会员资格、域名、计划限制等重要信息...

在本教程中，我们将引导您了解客户的账户页面，并展示客户在其中可以看到和执行的操作。

## 账户页面

账户页面可通过点击客户仪表盘中的 **Account** 访问。

![客户仪表盘中的账户菜单](/img/admin/dashboard.png)

![客户账户页面概览](/img/admin/dashboard.png)

点击后，客户将看到其会员信息、账单地址、发票、域名、站点限制的概览，并且如果在您的网络中允许，还可以更改 ****Site Template**。

他们还可以将会员更改为其他计划，或购买您提供的其他套餐或服务。让我们分别查看每个部分。

### 会员概览

位于客户网站名称下方的第一个块显示了他们当前计划以及与之一起购买的服务/套餐概览。该块还显示会员编号、最初支付金额、计划及任何服务/套餐的费用以及该会员被计费的次数。他们还可以查看会员状态是 **Active**、**Expired** 或 **Canceled**。

![会员概览，显示计划、金额和计费详情](/img/admin/memberships-list.png)

在此块下方，客户可以看到 **About This Site** 和 **Site Limits** 块。这些块展示了其计划所包含的所有限制：磁盘空间、帖子、页面、访问量等……这些限制可在 **Ultimate Multisite > Products** 的每个计划页面中配置。

![About This Site 和 Site Limits 块，显示计划限制](/img/admin/dashboard.png)

在 **Your Membership** 的右侧，客户可以点击 **Change**。这将向他们展示所有可用的计划和套餐/服务。如果他们选择其他计划，计划的限制将取代当前会员的限制——无论是降级还是升级都不影响。

现在，如果客户选择为当前会员购买套餐或服务——例如更多磁盘空间或访问量——当前会员不会被更改，只会将新套餐添加到其中。

请注意，无法在此会员更改页面添加优惠码。如果客户在首次购买会员时使用了优惠码，该码也将适用于此新会员。

### 更新账单地址

在账户页面，客户还可以更新账单地址。他们只需点击 _Billing Address_ 旁边的 **Update**。

![账单地址部分，带有 Update 按钮](/img/admin/customers-list.png)

将弹出一个新窗口。客户只需填写新地址并点击 _Save Changes_。

![更新账单地址表单](/img/admin/customers-list.png)

### 更改站点模板

要允许客户更改站点模板，您需要前往 **Ultimate Multisite > Settings > Sites** 并开启 **Allow Template Switching** 选项。

此外，在 **Ultimate Multisite > Products** 中，选择您的计划并转到 **Site Templates** 选项卡。确保 **Allow Site Templates** 选项已开启，并在 **Site Template Selection Mode** 中选择 **Choose Available Site Templates**。

![产品站点模板选项卡，显示模板选择模式](/img/config/product-site-templates.png)

您将能够在网站上查看所有可用的站点模板。选择您想要提供给此计划订阅客户的模板，以及不想提供的模板。请注意，这些选项也会影响结账表单，因此任何被标记为 **Not Available** 的模板都不会出现在此计划的注册页面上。

现在，客户可以在其账户页面中点击 **Change Site Template**。

![账户页面上的 Change Site Template 按钮](/img/admin/dashboard.png)

客户将看到此计划的所有可用站点模板列表。

![此计划的可用站点模板列表](/img/config/site-templates-list.png)

选择想要更改为的模板后，客户将被要求确认更改。

![站点模板切换确认对话框](/img/admin/dashboard.png)

在确认后点击 **Process Switch**，新的站点模板将应用于客户的网站。

### 添加自定义域名

客户还可以在其账户页面为此计划添加自定义域名。要允许客户使用自定义域名，请前往 **Ultimate Multisite > Settings > Domain Mapping**。

开启 **Enable Domain Mapping** 选项。这将允许客户在网络层面使用自定义域名。

不要忘记检查域映射是否在产品层面启用——因为您可以限制某个产品不允许客户使用自定义域名。

前往 **Ultimate Multisite > Products**。选择您想要的计划并转到 **Custom Domains** 选项卡。开启 **Allow Custom Domains** 选项。

![Custom Domains 选项卡，显示 Allow Custom Domains 切换](/img/config/product-custom-domains.png)

这将允许所有订阅此特定计划的客户使用自定义域名。现在，在账户页面，客户可以通过点击 **Add Domain** 添加自定义域名。

![账户页面上的 Add Domain 按钮](/img/admin/domains-list.png)

首次打开的窗口将向客户显示一条消息，指导他们如何更新 DNS 记录，以使此自定义域名在您的网络上生效。

![添加自定义域名时显示的 DNS 指令](/img/admin/domains-list.png)

您可以在 **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** 中编辑此消息。

![Domain Mapping 中的 Add New Domain Instructions 设置](/img/config/settings-domain-mapping.png)

点击 **Next Step** 后，客户可以添加自定义域名并选择该域名是否为主域名。请注意，客户可以为其网站使用多个自定义域名，因此可以选择其中一个作为主域名。

![自定义域名输入框，带有主域名选项](/img/admin/domains-list.png)

点击 **Add Domain** 后，域名将被添加到客户的账户。现在他们只需在域名注册商处更改此自定义域名的 DNS 记录。

### 更改密码

在账户仪表盘内，客户还可以通过点击 **Change Password** 更改密码。

![账户页面上的 Change Password 按钮](/img/admin/dashboard.png)

将弹出一个新窗口，客户需要填写当前密码，然后填写想要使用的新密码。

![更改密码表单，包含当前密码和新密码字段](/img/admin/dashboard.png)

### 危险区

我们在 **Danger Zone** 区域还提供了两个选项：**Delete Site** 和 **Delete Account**。它们都位于 Danger Zone，因为这两项操作是不可逆的。如果客户删除了他们的网站或账户，他们将无法恢复。

![Danger Zone，包含 Delete Site 和 Delete Account 选项](/img/admin/dashboard.png)

如果客户点击这两个选项中的任何一个，将弹出一个窗口，客户需要勾选删除网站或账户的选项，并会被警告此操作无法撤销。

![Delete Site 确认对话框](/img/admin/dashboard.png)

![Delete Account 确认对话框](/img/admin/dashboard.png)

如果他们删除网站，账户和会员资格仍保持不变，只会失去网站上的所有内容。如果他们删除账户，所有网站、会员资格和与该账户相关的信息将被删除。
