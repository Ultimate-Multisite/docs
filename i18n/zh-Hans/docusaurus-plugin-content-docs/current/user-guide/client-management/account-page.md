---
title: 客户账户页面
sidebar_position: 14
_i18n_hash: 92f8a44adfaf871b0a881fbc76bc0084
---
# 您的客户账户页面 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

当客户在您的网络上订阅计划时，他们将获得一个网站及其仪表盘的访问权限，其中包含有关其付款、会员资格、域名、计划限制等重要信息...

在本教程中，我们将引导您了解客户的账户页面，并展示客户在其中可以看到和执行的操作。

## 账户页面

账户页面可通过点击客户仪表盘中的 **Account** 访问。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LrGNKCDc8R.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FTDgqcwaO0.png)

点击后，客户将看到其会员概览、账单地址、发票、域名、站点限制，并且如果网络允许，还可以更改 ****站点模板**。

他们还可以将会员更改为其他计划，或购买您提供的其他套餐或服务。让我们分别查看每个部分。

### 会员概览

位于客户网站名称下方的第一个块显示其当前计划以及与之一起购买的服务/套餐概览。该块还显示会员编号、最初支付金额、计划和任何服务/套餐的费用以及该会员被计费的次数。客户还可以查看会员状态是 **活跃**、**已过期** 还是 **已取消**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-XNTPsXaqzp.png)

在此块下方，客户可以看到 **关于此站点** 和 **站点限制** 块。这些块展示了其计划所包含的所有限制：磁盘空间、文章、页面、访问量等……这些限制可在 **Ultimate Multisite > Products** 的每个计划页面中配置。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6kVmMDoiCU.png)

在 **Your Membership** 的右侧，客户可以点击 **更改**。这将显示所有可用的计划和套餐/服务。如果他们选择其他计划，计划的限制将取代当前会员的限制——无论是降级还是升级都不影响。

现在，如果客户选择为当前会员购买套餐或服务——例如更多磁盘空间或访问量——当前会员不会被更改，只会添加新的套餐。

请注意，优惠码无法在此会员更改页面添加。如果客户在首次购买会员时使用了优惠码，该码也将适用于此新会员。

### 更新账单地址

在账户页面，客户还可以更新账单地址。他们只需点击 _账单地址_ 旁边的 **更新**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GLQ21kppU2.png)

将弹出一个新窗口。客户只需填写新地址并点击 _保存更改_。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Z2nY05cYvD.png)

### 更改站点模板

要允许客户更改站点模板，您需要前往 **Ultimate Multisite > Settings > Sites** 并开启 **允许模板切换** 选项。

此外，在 **Ultimate Multisite > Products** 中，选择您的计划并转到 **站点模板** 选项卡。确保 **允许站点模板** 选项已开启，并在 **站点模板选择模式** 中选择 **选择可用站点模板**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rjixD7iShD.png)

您将能够在网站上查看所有可用的站点模板。选择您想要提供给此计划订阅客户的模板，以及不想提供的模板。请注意，这些选项也会影响结账表单，因此任何被标记为 **不可用** 的模板都不会出现在此计划的注册页面上。

现在，客户可以在其账户页面中点击 **更改站点模板**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5pdvAuh6h3.png)  
客户将看到此计划所有可用站点模板的列表。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bQSA663xNo.png)

选择想要更改的模板后，客户将被要求确认更改。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6azvPydgAU.png)

在确认后点击 **处理切换**，新的站点模板将应用于客户的网站。

### 添加自定义域名

客户还可以在其账户页面为此计划添加自定义域名。要允许客户使用自定义域名，请前往 **Ultimate Multisite > Settings > 域映射**。

开启 **启用域映射** 选项。这将允许客户在网络层面使用自定义域名。

不要忘记检查域映射是否在产品层面启用——因为您可以限制某个产品不允许客户使用自定义域名。

前往 **Ultimate Multisite > Products**。选择您想要的计划并转到 **自定义域名** 选项卡。开启 **允许自定义域名** 选项。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J7mrCTfet6.png)

这将允许所有订阅此特定计划的客户使用自定义域名。现在，在账户页面，客户可以通过点击 **添加域名** 添加自定义域名。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0mbLgC86SG.png)

打开的第一个窗口将向客户显示一条消息，指导他们如何更新 DNS 记录，以使此自定义域名在您的网络上生效。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-emhM26Abhn.png)

您可以在 **Ultimate Multisite > Settings > 域映射 > 添加新域名说明** 中编辑此消息。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6ZjI8Fk6Gw.png)

点击 **下一步** 后，客户可以添加自定义域名并选择该域名是否为主域名。请注意，客户可以为其网站使用多个自定义域名，因此可以选择其中一个作为主域名。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pSzZowjc2a.png)

点击 **添加域名** 后，域名将被添加到客户的账户。现在他们只需在域名注册商处更改此自定义域名的 DNS 记录。

### 更改密码

在账户仪表盘内，客户还可以通过点击 **更改密码** 更改密码。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sihWaIk4B8.png)

将弹出一个新窗口，客户需要填写当前密码，然后填写想要使用的新密码。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5zCgtcHfgB.png)

### 危险区

我们在 **危险区** 区域提供了两个选项：**删除网站** 和 **删除账户**。它们都在危险区区域，因为这两项操作是不可逆的。如果客户删除了他们的网站或账户，他们将无法恢复。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FMNX249rFi.png)

如果客户点击这两个选项中的任何一个，将弹出一个窗口，客户需要勾选删除网站或账户的选项，并会被警告此操作无法撤销。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MRI6taFdJK.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-itpv48GPgY.png)

如果他们删除网站，账户和会员资格仍保持不变，只会失去网站上的所有内容。如果他们删除账户，所有网站、会员资格以及与该账户相关的信息将全部丢失。
