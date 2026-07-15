---
title: 常见问题
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# 常见问题

以下是一些在支持请求中经常出现的**常见问题**。

  * **什么是 Ultimate Multisite？**

Ultimate Multisite 是一个 WordPress plugin，专为 WordPress 多站点安装而设计，它可以将你的 WordPress 安装转换为一个高级站点网络——类似 [WordPress.com](https://WordPress.com)——允许客户通过月付、季付或年付费用创建站点（你也可以创建免费套餐）。

  * **Ultimate Multisite 在没有 Multisite 的情况下可以工作吗？**

不可以。Ultimate Multisite 需要 WordPress 多站点、子目录或子域名。

  * **Ultimate Multisite 的要求是什么？**

Ultimate Multisite 需要：

**WordPress 版本** : v5.3+（推荐：最新稳定版本）
**PHP 版本** : 7.4.x（即将支持 > 8.0）
**MySQL 版本** : v5+（推荐：版本 5.6，以防你的托管服务商没有提供 8.0）

_还需要启用 Multisite（子域名或子目录）。_ [如何安装 WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)。

  * **Ultimate Multisite 可以与使用子目录的 Multisite 配合工作吗？**

可以。Ultimate Multisite 同时支持子目录安装和子目录安装。

  * **Ultimate Multisite 可以与使用子域名的 Multisite 配合工作吗？**

可以。Ultimate Multisite 同时支持子目录安装和子域名安装。

  * **我可以使用 Ultimate Multisite 来限制用户可以使用哪些 Plugin 和 Theme 吗？**

可以。通过 Ultimate Multisite，你可以选择网络中每个套餐可用的插件和主题。

  * **我可以使用 Ultimate Multisite 来限制用户在其站点上可以创建的文章数量吗？**

可以。通过 Ultimate Multisite，你可以为网络中的**每一种可用文章类型**设置文章配额。你还可以限制管理员可邀请的用户数量、**磁盘空间量**以及更多内容。

  * **Ultimate Multisite 支持站点模板吗？**

支持。通过 Ultimate Multisite，你可以创建任意数量的站点模板。站点模板不是主题，它们是你网络中的普通站点。你可以激活插件、主题，并以任何你想要的方式自定义该站点模板。如果用户选择了该模板，他或她的站点将作为该模板的副本创建，并包含所有自定义设置。

你也可以为套餐设置特定模板。这样做后，每个注册该套餐的用户，其站点都会作为该站点模板的副本创建。

  * **Ultimate Multisite 与 WooCommerce 集成吗？**

是的！

如果你希望你的网络用户可以使用 WooCommerce，让他们能够设置商店，可以通过 Ultimate Multisite 实现。你甚至可以限制客户在每个套餐层级中能够创建的产品数量。

关于 Ultimate Multisite 的订阅付款，你可以使用 [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) 允许你的 Ultimate Multisite 客户在你的主站点上使用 WooCommerce 网关付款。这样，你就可以利用为 WooCommerce 开发的大量支付网关库，并使用它们向你的 Ultimate Multisite 客户收费。

  * **有没有办法从 WPMUDEV Pro Sites 迁移订阅？**

有，Ultimate Multisite 现在为你提供了[一个有用的迁移工具](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/)，用于迁移你的 Pro Sites 网络。

  * **为什么我的套餐编辑页面上的“Allowed Plugins”选项卡是空的？**

Ultimate Multisite 只允许你允许或拒绝访问网络中未进行网络激活的插件。当一个插件进行网络激活时，就其本质而言，它会默认加载到你网络中的每个站点上。

如果你在“Allowed Plugins”选项卡中没有看到列出的任何插件，请检查所需插件是否为网络激活状态。

  * **我可以使用自己的定价表设计吗？**

可以。自 1.4.0 版本起，Ultimate Multisite 支持模板覆盖。

  * **Ultimate Multisite 可以与 WP Engine 配合工作吗？**

可以。Ultimate Multisite 一直受 WP Engine 支持，但要让域名映射正常工作，需要管理员手动执行额外步骤（将域名添加到 WP Engine 面板）。**自 1.6.0 版本起，情况不再如此。** Ultimate Multisite 直接与 WP Engine API 集成，映射后域名会自动添加到面板。

  * **你们推荐哪家托管服务商？**

Ultimate Multisite 应该可以与任何托管服务商配合工作。唯一的区别是，像 Closte、Serverpilot、WPMUDEV、WP Engine、Cloudways、Gridpane 和 [Runcloud.io](http://Runcloud.io) 这样的一些托管公司，对域名映射功能有更紧密的集成，因此可以开箱即用。对于其他托管服务，你可能需要手动设置域名映射。
