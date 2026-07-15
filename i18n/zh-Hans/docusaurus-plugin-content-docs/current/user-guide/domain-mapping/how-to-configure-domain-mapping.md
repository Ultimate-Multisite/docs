---
title: 如何配置域名映射
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# 如何配置域名映射（v2）

_**重要说明：本文适用于 Ultimate Multisite 2.x 版本。**_

高级网络最强大的功能之一，就是能够让我们的客户有机会为他们的站点绑定顶级域名。毕竟，哪个看起来更专业：[_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) 还是 [_**joesbikeshop.com**_](http://joesbikeshop.com)？这就是 Ultimate Multisite 内置此功能的原因，无需使用第三方 plugin。

## 什么是域名映射？ {#whats-domain-mapping}

顾名思义，域名映射是 Ultimate Multisite 提供的一种能力：接收自定义域名请求，并将该请求映射到网络中已绑定该特定域名的对应站点。

### 如何在你的 Ultimate Multisite 网络上设置域名映射 {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

域名映射需要你进行一些设置才能工作。值得庆幸的是，Ultimate Multisite 会为你自动完成繁重的工作，因此你可以轻松满足要求。

在 Ultimate Multisite 安装过程中，向导会自动将 **sunrise.php** 复制并安装到指定文件夹。**在此步骤完成之前，向导不会允许你继续**。

<!-- 截图不可用：包含 sunrise.php 步骤的 Ultimate Multisite 安装向导 -->

这意味着，一旦 Ultimate Multisite 安装向导完成你的网络设置，你就可以立即开始映射自定义域名。

请注意，Ultimate Multisite 中的域名映射不是强制性的。你可以选择使用 WordPress Multisite 原生域名映射功能，或任何其他域名映射解决方案。

如果你需要禁用 Ultimate Multisite 域名映射，以便使用其他域名映射解决方案，可以在 **Ultimate Multisite > 设置 > 域名映射** 下禁用此功能。

![显示管理员重定向、映射消息和 DNS 选项的域名映射设置页面](/img/config/domain-mapping-settings.png)

在此选项正下方，你还可以看到 **强制管理员重定向** 选项。此选项允许你控制客户是否能够同时通过自定义域名和子域名访问其管理 Dashboard，或只能通过其中一个访问。

如果你选择 **强制重定向到映射域名**，你的客户将只能通过他们的自定义域名访问其管理 Dashboard。

**强制重定向到** **网络域名** 选项的作用正好相反——你的客户将只能通过其子域名访问 Dashboard，即使他们尝试在自定义域名上登录也是如此。

而 **允许通过映射域名和网络域名访问管理员区域** 选项允许他们同时通过子域名和自定义域名访问其管理 Dashboard。

![已展开的管理员重定向下拉菜单，显示三个重定向选项](/img/config/domain-mapping-redirect-options.png)

映射自定义域名有两种方式。第一种是作为 super admin 从你的网络管理 Dashboard 映射域名，第二种是通过子站点管理 Dashboard 中的 Account 页面完成。

但在开始将自定义域名映射到你网络中的某个子站点之前，你需要确保该域名的 **DNS 设置** 已正确配置。

###

### 确保域名 DNS 设置已正确配置 {#making-sure-the-domain-dns-settings-are-properly-configured}

要使映射生效，你需要确保计划映射的域名指向你的网络 IP 地址。请注意，你需要的是网络 IP 地址——也就是安装了 Ultimate Multisite 的域名的 IP 地址——而不是你想要映射的自定义域名的 IP 地址。要搜索特定域名的 IP 地址，我们建议使用 [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)，例如。

要正确映射该域名，你需要在 **DNS** 配置中添加一条指向该 **IP 地址** 的 **A 记录**。不同域名注册商之间的 DNS 管理方式差异很大，但如果你搜索“ _在 XXXX 创建 A 记录_ ”，网上有大量相关教程，其中 XXXX 是你的域名注册商（例如：“ _在_ _GoDaddy_ _创建 A 记录_ ”）。

如果你发现自己难以让其正常工作，**请联系你的域名注册商支持**，他们将能够帮助你完成这部分。

如果你计划允许客户映射他们自己的域名，他们必须自己完成这部分工作。如果他们无法创建 A 记录，请引导他们使用其注册商的支持系统。

### 以 Super Admin 身份映射自定义域名 {#mapping-custom-domain-name-as-super-admin}

当你以 super admin 身份登录你的网络时，可以通过进入 **Ultimate Multisite > 域名** 轻松添加和管理自定义域名。

![Ultimate Multisite 中的域名列表页面](/img/admin/domains-list.png)

在此页面中，你可以点击顶部的 **添加域名** 按钮，这将打开一个模态窗口，你可以在其中设置并填写 **自定义域名**、你希望应用该自定义域名的 **子站点**，并决定是否将其设置为 **主域名**（请注意，你可以将 **多个域名映射到一个子站点**）。

![包含域名、站点选择器和主域名开关的添加域名模态窗口](/img/admin/domain-add-modal.png)

填写完所有信息后，你可以点击底部的 **添加现有域名** 按钮。

这将开始验证并获取自定义域名 DNS 信息的过程。你还会在页面底部看到一份日志，用于跟踪正在进行的流程。此过程可能需要几分钟才能完成。

Ultimate Multisite v2.13.0 还会在应被视为每站点域名的主机上创建新站点时，自动创建内部域名记录。如果该主机是网络的主域名，或是在 **Site URL** 字段上配置的共享结账表单基础域名之一，则会跳过自动映射域名记录，以便该共享基础域名仍可供使用它的每个站点使用。

当客户通过 Domain Seller v1.3.0 或更新版本注册新域名时，Ultimate Multisite 默认会自动将注册的域名映射到客户的网络站点。注册成功后，管理员不再需要添加单独的映射域名记录，除非他们想调整主域名标记、激活状态或 SSL 处理等选项。

如果一切都已正确设置，**阶段**或状态应从**正在检查 DNS**变为**就绪**。

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

如果你点击域名，将能够看到其中的一些选项。我们快速看一下它们：

![包含阶段、站点、启用、主域名和 SSL 开关的域名详情页面](/img/admin/domain-edit.png)

**阶段：** 这是域名当前所处的阶段。首次添加域名时，它可能会处于**正在检查 DNS**阶段。该流程会检查 DNS 记录并确认它们是否正确。然后，域名会进入**正在检查 SSL**阶段。Ultimate Multisite 会检查该域名是否有 SSL，并将你的域名归类为**就绪**或**就绪（无 SSL）**。

**站点：** 与此域名关联的子域名。映射的域名将显示此特定站点的内容。

**启用：** 你可以打开或关闭此选项来启用或停用该域名。

**是否为主域名？：** 你的客户可以为每个站点拥有多个映射域名。使用此选项选择这是否是特定站点的主域名。

**是否安全？：** 即使 Ultimate Multisite 会在启用域名之前检查该域名是否有 SSL 证书，你仍然可以手动选择使用或不使用 SSL 证书来加载该域名。请注意，如果网站没有 SSL 证书，而你尝试强制使用 SSL 加载它，可能会出现错误。

### 作为子站点用户映射自定义域名 {#mapping-custom-domain-name-as-subsite-user}

子站点管理员也可以从其子站点管理 Dashboard 映射自定义域名。

首先，你需要确保在**域名映射**设置下启用此选项。请参见下面的截图。

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

你也可以在 **Plan** 级别或 **Ultimate Multisite > 产品**上的产品选项中设置或配置此选项。

![产品编辑页面上的自定义域名部分](/img/config/product-custom-domains.png)

启用其中任一选项，并且允许子站点用户映射自定义域名时，子站点用户应在 **Account** 页面下看到一个名为**域名**的元框。

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

用户可以点击**添加域名**按钮，这将弹出一个包含一些说明的模态窗口。

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

然后用户可以点击**下一步**并继续添加自定义域名。他们还可以选择这是否为主域名。

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

点击**添加域名**将启动验证并获取自定义域名 DNS 信息的流程。

### 关于域名同步 {#about-domain-syncing}

域名同步是一个流程，在该流程中，Ultimate Multisite 会将自定义域名作为附加域名添加到你的托管账户，**以便域名映射能够正常工作**。

如果你的托管服务提供商已与 Ultimate Multisite 域名映射功能集成，则域名同步会自动发生。目前，这些托管服务提供商包括 _Runcloud、Closte、WP Engine、Gridpane、WPMU Dev、Cloudways_ 和 _Cpanel_。

当主机提供商集成处于启用状态时，Ultimate Multisite 还可以为新创建的站点将提供商端的 DNS 或子域名创建任务加入队列。如果没有集成正在监听该任务，则会跳过后台作业，以避免产生无操作的队列条目。映射域名的 DNS 和 SSL 检查会继续通过正常的域名阶段流程运行。

你需要在 Ultimate Multisite 设置的**集成**选项卡下启用此集成。

![Ultimate Multisite 设置中显示托管服务提供商的集成选项卡](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_请注意，如果你的托管服务提供商不是上面提到的那些提供商之一，**你需要手动同步或添加域名**到你的托管账户。_
