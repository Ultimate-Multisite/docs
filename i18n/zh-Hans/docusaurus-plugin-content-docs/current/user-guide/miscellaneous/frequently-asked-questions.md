---
title: 常见问题
sidebar_position: 18
_i18n_hash: aba85d38cf43f35fa4bcc680e95c6a84
---
# 常见问题解答

以下是一些在支持请求中经常出现的 **常见问题**。

  * **Ultimate Multisite 是什么？**

Ultimate Multisite 是一款为 WordPress 多站点安装设计的插件，它将您的 WordPress 安装转变为一个高级站点网络——类似于 [WordPress.com](https://WordPress.com)——允许客户通过月费、季费或年费创建站点（您也可以创建免费计划）。

  * **Ultimate Multisite 能在非多站点环境下工作吗？**

不行。Ultimate Multisite 需要 WordPress 多站点、子目录或子域名。

  * **Ultimate Multisite 的系统要求是什么？**

Ultimate Multisite 需要：

**WordPress 版本** : v5.3+ (推荐：最新稳定版本)  
**PHP 版本** : 7.4.x（>8.0 的支持即将推出）  
**MySQL 版本** : v5+（推荐：5.6 版，以防您的主机不支持 8.0）  

_Multisite (子域名或子目录) 也需要激活。_ [如何安装 WordPress 多站点](/docs/user-guide/getting-started/how-to-install-wordpress-multisite)。

  * **Ultimate Multisite 能与子目录多站点一起使用吗？**

可以。Ultimate Multisite 支持子目录安装和子目录安装。

  * **Ultimate Multisite 能与子域名多站点一起使用吗？**

可以。Ultimate Multisite 支持子目录安装和子域名安装。

  * **我可以使用 Ultimate Multisite 限制用户使用哪些插件和主题吗？**

可以。使用 Ultimate Multisite，您可以为网络中的每个计划选择可用的插件和主题。

  * **我可以使用 Ultimate Multisite 限制用户在其站点上创建的帖子数量吗？**

可以。使用 Ultimate Multisite，您可以为网络中的 **每种可用帖子类型** 设定帖子配额。您还可以限制管理员可邀请的用户数量、**磁盘空间** 的大小，以及更多功能。

  * **Ultimate Multisite 支持站点模板吗？**

可以。使用 Ultimate Multisite，您可以创建任意数量的站点模板。站点模板不是主题，而是网络中的普通站点。您可以激活插件、主题，并以任何方式自定义该站点模板。如果用户选择该模板，他/她的站点将作为该模板的副本创建，所有自定义设置都会保留。

您还可以为某个计划设置特定模板。这样，所有在该计划上注册的用户，其站点将被创建为该站点模板的副本。

  * **Ultimate Multisite 与 WooCommerce 集成吗？**

是的！

如果您希望网络用户可以使用 WooCommerce，允许他们设置商店，这可以通过 Ultimate Multisite 实现。您甚至可以限制客户在每个计划层级上能够创建的产品数量。

关于 Ultimate Multisite 的订阅支付，您可以使用 [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) 让您的 Ultimate Multisite 客户通过主站点的 WooCommerce 网关进行支付。这样，您就可以利用 WooCommerce 开发的大量支付网关库来向 Ultimate Multisite 客户收费。

  * **是否有办法将订阅从 WPMUDEV Pro Sites 迁移？**

是的，Ultimate Multisite 现在提供了一个 [有用的工具](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) 帮助您迁移 Pro Sites 网络。

  * **为什么我的计划编辑页面上的“允许插件”选项卡为空？**

Ultimate Multisite 只允许您对未在网络中激活的插件进行允许或拒绝访问。当插件被网络激活时，按其本质，它会默认在网络中的每个站点上加载。

如果在“允许插件”选项卡中没有列出任何插件，请检查所需插件是否已网络激活。

  * **我可以使用自己的定价表设计吗？**

可以。自 1.4.0 版本起，Ultimate Multisite 支持模板覆盖。

  * **Ultimate Multisite 与 WP Engine 兼容吗？**

是的。Ultimate Multisite 一直受到 WP Engine 的支持，但之前需要管理员手动额外操作（将域名添加到 WP Engine 面板）才能实现域名映射。**自 1.6.0 版本起，这种情况已不再存在。** Ultimate Multisite 直接与 WP Engine API 集成，域名在映射后会自动添加到面板。

  * **您推荐哪家主机提供商？**

Ultimate Multisite 应该可以与任何主机提供商一起使用。唯一的区别是，一些主机公司（如 Closte、Serverpilot、WPMUDEV、WP Engine、Cloudways、Gridpane 和 [Runcloud.io](http://Runcloud.io)）在域名映射功能上具有更紧密的集成，因此它们可以开箱即用。对于其他主机，您可能需要手动设置域名映射。
