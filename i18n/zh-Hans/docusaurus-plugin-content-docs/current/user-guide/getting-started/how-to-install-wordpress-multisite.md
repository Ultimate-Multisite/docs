---
title: 如何安装 WordPress 多站点
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# 如何安装 WordPress Multisite？

WordPress Multisite 允许您在单一安装中拥有一个网站网络。这是一个内置功能，但默认情况下并未激活。

由于 Ultimate Multisite 是一个仅限网络的插件，在本教程中，您将学习如何安装和设置 WordPress Multisite。本文基于 WPBeginner 的 [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/)。

**创建多站点网络前需要注意的事项：**

- 获取优质的 WordPress 托管！网络中的网站共享相同的服务器资源。
- 如果您只有少量低流量的网站，共享托管可能适合您。
- 大多数 **托管 WordPress 托管提供商** 都提供开箱即用的 Multisite（他们会安装已激活并为您配置好的 WordPress Multisite）。这适用于 WP Engine、Closte、Cloudways 等。如果您不确定您的托管提供商是否如此，请在继续本教程之前联系他们的支持团队。
- 熟悉使用 FTP 安装 WordPress 并编辑文件也是很好的。

_**重要** **:** 如果您在现有 WordPress 网站上设置多站点网络，请不要忘记：_

- 创建您 WordPress 网站的完整备份
- 在插件页面中选择批量操作中的 _Deactivate_ 并点击 _Apply_，停用您网站上的所有插件

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

要启用 Multisite，首先使用 FTP 客户端或 cPanel 文件管理器连接到您的网站，并打开 wp-config.php 文件进行编辑。

在 _*That’s all, stop editing! Happy blogging.*_ 行之前，添加以下代码片段：

```php
define('WP_ALLOW_MULTISITE', true);
```

保存并将 wp-config.php 文件上传回服务器。

在您的网站启用 Multisite 功能后，现在是设置网络的时候。

转到 **Tools » Network Setup**

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

现在，您需要告诉 WordPress 您将在网络中使用哪种域结构：子域名还是子目录。

如果您选择子域名，必须更改 DNS 设置以进行域映射，并确保为您的 Multisite 网络设置 _**wildcard subdomains**_。

返回网络设置，给您的网络起一个标题，并确保网络管理员电子邮件地址正确。点击 _Install_ 继续。

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

将 WordPress 提供的以下代码添加到您的 _**wp-config.php**_：

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

将 WordPress 提供的以下代码添加到您的 _**.htaccess**_ 文件：

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

使用 FTP 客户端或文件管理器（例如 cPanel）将代码复制并粘贴到这两个文件中。

最后，重新登录您的 WordPress 网站以访问您的 Multisite 网络。

**在安装 Ultimate Multisite 之前，务必测试并确保您能够在 WordPress Multisite 安装中创建子站点。**

要创建子站点：

1. 打开您网站的 wp-admin
2. 导航到 My Sites > Sites (/wp-admin/network/sites.php)
3. 点击顶部的 Add New
4. 填写所有字段：

   * Site Address — 永远不要使用 “www”
   * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
   * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
   * Site Title — 网站标题，稍后可更改
   * Admin Email — 设置为子站点的初始管理员用户

![image](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

填写完字段后，点击 “Add site” 按钮。新子站点创建后，访问它以确保子站点正常运行。

## 常见问题：

### 1\. 我可以创建新站点，但它们无法访问。

如果您选择了子域名，还需要为您的 Multisite 网络设置通配符子域名。

为此，请转到您网站托管账户的控制面板仪表盘（例如 cPanel/Plesk/Direct Admin，取决于您的托管提供商）。

找到 “Domains” 或 “Subdomains” 的选项。在某些控制面板中，它被标记为 “Domain administration”。

在子域名字段中输入星号 (*)。然后，它会提示您选择要在其下添加子域名的域名。

所选域名的文档根目录将自动检测。点击 _Create_ 或 _Save_ 按钮以添加通配符子域名。条目应为 “*.[mydomain.com](http://mydomain.com)”
