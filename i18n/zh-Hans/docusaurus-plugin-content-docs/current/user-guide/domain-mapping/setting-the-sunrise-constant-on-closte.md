---
title: 在 Closte 上设置日出常量
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# 在 Closte 上将 Sunrise 常量设置为 true

一些主机提供商出于安全原因会锁定 wp-config.php。 这意味着 Ultimate Multisite 无法自动编辑该文件以包含必要的常量，从而使域映射和其他功能正常工作。 Closte 就是其中之一。

然而，Closte 提供了一种安全方式来向 wp-config.php 添加常量。只需按照以下步骤操作即可：

## 在 Closte 仪表盘上

首先，[登录您的 Closte 账户](https://app.closte.com/)，点击 Sites 菜单项，然后点击您当前正在工作的站点上的 Dashboard 链接：

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

您会在屏幕左侧看到一系列新的菜单项。使用该菜单导航到 **Settings** 页面：

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

然后，在 **Settings** 页面中，找到 WP-Config 选项卡，再找到该选项卡上的“Additional wp-config.php content”字段：

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

在安装 Ultimate Multisite 的过程中，您需要在该字段中添加 sunrise 常量。只需添加一行并粘贴下面的代码。然后点击 **Save All** 按钮。

define('SUNRISE', true);

就这样，您已完成设置。返回 Ultimate Multisite 安装向导并刷新页面以继续流程。
