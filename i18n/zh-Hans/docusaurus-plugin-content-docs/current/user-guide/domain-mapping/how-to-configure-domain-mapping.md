---
title: 如何配置域名映射
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# 如何配置域映射 (v2)

_**重要提示：本文涉及 Ultimate Multisite 2.x 版本。**_

高级网络最强大的功能之一是为客户提供将顶级域名附加到其站点的机会。毕竟，哪个看起来更专业：[_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com)还是[_**joesbikeshop.com**_](http://joesbikeshop.com)？这就是为什么 Ultimate Multisite 内置了该功能，无需使用第三方插件。

## 什么是域映射？

正如其名称所示，域映射是 Ultimate Multisite 提供的一项功能，它可以接受自定义域名的请求，并将该请求映射到网络中对应的站点，并将该域名附加到该站点。

### 如何在您的 Ultimate Multisite 网络上设置域映射

域映射需要您进行一些设置才能正常工作。幸运的是，Ultimate Multisite 会为您自动完成繁重的工作，让您轻松满足要求。

在 Ultimate Multisite 安装期间，向导会自动将 **sunrise.php** 复制并安装到指定文件夹。**向导在此步骤完成之前不会允许您继续**。

![Ultimate Multisite installation wizard with sunrise.php step](/img/config/settings-domain-mapping.png)

这意味着，一旦 Ultimate Multisite 安装向导完成网络设置，您就可以立即开始映射自定义域名。

请注意，Ultimate Multisite 中的域映射并非强制。您可以选择使用 WordPress Multisite 原生域映射功能或任何其他域映射解决方案。

如果您需要禁用 Ultimate Multisite 域映射以使用其他域映射解决方案，可以在 **Ultimate Multisite > Settings > Domain Mapping** 下禁用此功能。

![Domain Mapping settings with enable toggle](/img/config/settings-domain-mapping.png)

在此选项下方，您还可以看到 **Force Admin Redirect** 选项。此选项允许您控制客户是否可以在自定义域名和子域名上都访问其管理仪表盘，还是仅在其中一个上访问。

如果您选择 **Force redirect to mapped domain**，您的客户只能在自定义域名上访问其管理仪表盘。

选项 **Force redirect to** **network domain** 则完全相反——您的客户只能在子域名上访问其仪表盘，即使尝试在自定义域名上登录。

而选项 **Allow access to the admin by both mapped domain domain and network domain** 允许他们在子域名和自定义域名上都访问其管理仪表盘。

![Force Admin Redirect options for domain mapping](/img/config/settings-domain-mapping.png)

映射自定义域名有两种方式。第一种是通过网络管理员仪表盘以超级管理员身份映射域名，第二种是通过子站点管理员仪表盘的账户页面映射。

但在开始将自定义域名映射到网络中的子站点之前，您需要确保域名的 **DNS 设置** 已正确配置。

### 

### 确保域 DNS 设置已正确配置

要使映射生效，您需要确保计划映射的域名指向您的网络 IP 地址。请注意，您需要的是 **Network IP address**——即安装 Ultimate Multisite 的域名的 IP 地址，而不是您想要映射的自定义域名的 IP 地址。要搜索特定域名的 IP 地址，建议访问 [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)，例如。

要正确映射域名，您需要在您的 **DNS** 配置中添加一个 **A RECORD**，指向该 **IP address**。

如果您在尝试使其工作时遇到困难，请 **联系您的域名注册商支持**，他们将能够帮助您完成此部分。

如果您计划允许您的客户映射自己的域名，他们将需要自己完成此部分工作。如果他们无法创建 A 记录，请将他们指向其注册商支持系统。

### Mapping custom domain name as Super Admin

当您以超级管理员身份登录网络时，您可以轻松添加和管理自定义域名，方法是转到 **Ultimate Multisite > Domains**。

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

在此页面，您可以点击顶部的 **Add Domain** 按钮，这将弹出一个模态窗口，您可以在其中设置并填写 **custom domain name**、您希望将自定义域名应用到的 **subsite**，并决定是否将其设置为 **primary domain**（请注意，您可以将 **multiple domain names to one subsite**）。

![Add Domain modal with domain name and site fields](/img/admin/domains-list.png)

输入所有信息后，您可以点击底部的 **Add Existing Domain** 按钮。

这将启动验证并获取自定义域名的 DNS 信息的过程。您还将在页面底部看到一个日志，供您跟踪其正在进行的过程。此过程可能需要几分钟才能完成。

**Stage** 或状态应从 **Checking DNS** 更改为 **Ready**，如果一切设置正确。

![Domain stage changing from Checking DNS to Ready](/img/admin/domains-list.png)

![Domain with Ready status in domains list](/img/admin/domains-list.png)

如果您点击域名，您将能够看到其中的一些选项。让我们快速查看一下：

![Domain detail page with stage, site, active, and SSL options](/img/admin/domains-list.png)

**Stage:** 这是域名所在的阶段。当您首次添加域名时，它可能在 **Checking DNS** 阶段。该过程将检查 DNS 条目并确认它们。然后，域名将进入 **Checking SSL** 阶段。Ultimate Multisite 将检查域名是否具有 SSL，并将您的域名分类为 **Ready** 或 **Ready (without SSL)**。

**Site:** 与此域名关联的子域名。映射域名将显示此特定站点的内容。

**Active:** 您可以切换此选项以激活或停用域名。

**Is Primary Domain?:** 您的客户可以为每个站点拥有多个映射域名。使用此选项来选择…

**Is Secure?:** 尽管 Ultimate Multisite 在启用之前会检查域名是否具有 SSL 证书，但您可以手动选择是否使用或不使用 SSL 证书加载域名。请注意，如果网站没有 SSL 证书，而您尝试强制使用 SSL 加载，它可能会给您错误。

### Mapping custom domain name as Subsite user

子站点管理员也可以从其子站点管理员仪表盘映射自定义域名。

首先，您需要确保在 **Domain mapping** 设置下启用此选项。请参阅下面的截图。

![Domain mapping settings allowing subsite users to map domains](/img/config/settings-domain-mapping.png)

您还可以在 **Plan** 级别或 **Ultimate Multisite > Products** 上的产品选项中设置或配置此选项。

当这些选项中的任何一个启用且子站点用户被允许映射自定义域名时，子站点用户应该会在 **Account** 页面下看到一个名为 **Domains** 的元框。

用户可以点击 **Add Domain** 按钮，它将弹出一个带有一些说明的模态窗口。

用户随后可以点击 **Next Step** 并继续添加自定义域名。他们还可以选择这是否为主域名。

点击 **Add Domain** 将启动验证并获取自定义域名 DNS 信息的过程。

### About Domain Syncing

域同步是 Ultimate Multisite 将自定义域名添加到您的托管账户作为附加域名 **以使域映射工作** 的过程。

如果您的托管提供商与 Ultimate Multisite 域映射功能集成，域同步会自动发生。目前，这些托管提供商是 _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ 和 _Cpanel_。

您需要在 Ultimate Multisite 设置的 **Integration** 选项卡下激活此集成。

![Product custom domains option in product settings](/img/config/settings-domain-mapping.png)

![Domains metabox on the subsite account page](/img/admin/domains-list.png)

请注意，如果您的托管提供商不是上述提到的任何提供商，**您需要手动同步或将域名添加到您的托管账户**。
