---
title: 如何安装 WordPress 多站点
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# 如何安装 WordPress 多站点？ {#how-do-i-install-wordpress-multisite}

WordPress 多站点允许你在单个安装中拥有一个站点网络。这是一个内置功能，但默认并未启用。

:::tip
Ultimate Multisite 包含一个**[内置的多站点设置向导](./multisite-setup-wizard)**，可自动完成整个流程。如果你已安装 Ultimate Multisite，我们建议使用该向导，而不是按照下面的手动步骤操作。
:::

由于 Ultimate Multisite 是一个仅限网络的 plugin，在本教程中，你将学习如何手动安装和设置 WordPress 多站点。本文基于 WPBeginner 的 [如何安装和设置 WordPress 多站点网络](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/)。

**创建多站点网络前需要注意的事项：**

  * 获取优质的 WordPress 主机！网络中的网站共享相同的服务器资源。

  * 如果你只有几个低流量站点，共享主机可能就适合你。

  * 大多数**托管式 WordPress 主机提供商**都开箱即用地提供多站点（他们会为你安装已启用并配置好多站点的 WordPress）。WP Engine、Closte、Cloudways 等都是如此。如果你不确定你的主机提供商是否支持，请在继续本教程之前联系他们的支持团队。

  * 熟悉安装 WordPress 以及使用 FTP 编辑文件也很有帮助。

_**重要**_ **：** 如果你正在现有的 WordPress 网站上设置多站点网络，请不要忘记：

  * 为你的 WordPress 站点创建完整备份

  * 前往你的 plugins 页面，从批量操作中选择_停用_，然后点击_应用_，停用你站点上的所有 plugins

<!-- 截图不可用：WordPress plugins 页面显示批量停用操作 -->

要启用多站点，首先使用 FTP 客户端或 cPanel 文件管理器连接到你的站点，并打开 wp-config.php 文件进行编辑。

在 _*That’s all, stop editing! Happy blogging.*_ 这一行之前，添加以下代码片段：

define('WP_ALLOW_MULTISITE', true);

保存你的 wp-config.php 文件并上传回服务器。

在你的站点上启用多站点功能后，现在就可以设置你的网络了。

前往 **工具 » 网络设置**

<!-- 截图不可用：WordPress 工具菜单显示网络设置选项 -->

现在你需要告诉 WordPress，你将为网络中的站点使用哪种域名结构：子域名或子目录。

如果你选择子域名，则必须更改用于域名映射的 DNS 设置，并确保为你的多站点网络设置 _**通配符子域名**_。

回到网络设置，为你的网络填写标题，并确保网络管理员邮箱中的电子邮件地址正确。点击_安装_继续。

<!-- 截图不可用：WordPress 网络设置页面，包含网络标题和管理员邮箱字段 -->

将这段由 WordPress 提供的代码添加到你的 _**wp-config.php**_：

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

并将这段同样由 WordPress 提供的代码添加到你的 _**.htaccess**_ 文件：

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

使用 FTP 客户端或文件管理器（例如，如果你使用的是 cPanel 之类的工具）将代码复制并粘贴到这两个文件中。

最后，重新登录你的 WordPress 站点以访问你的多站点网络。

**在安装 Ultimate Multisite 之前，测试并确保你能够在 WordPress 多站点安装中创建子站点非常重要。**

要创建子站点：

  1. 打开你网站的 wp-admin

  2. 导航到 我的站点 > 站点 (/wp-admin/network/sites.php)

  3. 点击顶部的添加新的

  4. 填写所有字段：

  * 站点地址 — 切勿使用“www”

  * 子域名：[siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * 子目录：[yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * 站点标题 — 站点的标题，之后可以更改

  * 管理员邮箱 — 设置为该子站点的初始管理员用户

![WordPress 多站点中的添加新站点表单](/img/admin/sites-list.png)

填写完字段后，点击“添加站点”按钮。创建新的子站点后，继续访问它以确保该子站点可以正常工作。

## 常见问题： {#common-problems}

### 1\. 我可以创建新站点，但它们无法访问。 {#1-i-can-create-new-sites-but-they-are-not-accessible}

如果你选择了子域名，还需要为你的多站点网络设置通配符子域名。

要执行此操作，请前往你的网站主机账户的控制面板 Dashboard（例如 cPanel/Plesk/Direct Admin，具体取决于你的主机提供商）。

找到“域名”或“子域名”选项。在某些控制面板中，它标记为“域名管理”。

在子域名字段中，输入星号 (*)。然后，它应该会要求你选择要将该子域名添加到其下的域名。

所选域名的文档根目录将自动检测。点击_创建_或_保存_按钮以添加你的通配符子域名。该条目应类似于“*.[mydomain.com](http://mydomain.com)”
