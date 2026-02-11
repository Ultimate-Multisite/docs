---
title: GitHub 代码片段
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# 如何在我们的 GitHub 仓库中使用 Ultimate Multisite 代码片段

GitHub 仓库中提供了代码片段，Ultimate Multisite 用户经常请求这些片段，用于添加诸如在注册页面插入 Google Analytics 脚本或隐藏管理仪表盘中的元框等小功能。

本文将向您展示如何使用，或更具体地说，在哪里放置这些代码。

您可以在下面的链接中找到这些片段。

https://github.com/next-press/wp-ultimo-snippets/

您可以通过两种方式添加代码

  1. 在您的主题的 functions.php 文件中。

  2. Must-Use 插件（mu-plugins）

# 如何在您的主题的 functions.php 文件中添加片段。

  1. 登录您的 WordPress 网络管理员仪表盘，进入 Themes > Theme Editor（见下图截图）。

  2. 在“Edit Themes”页面，确保在屏幕右上角的下拉框中选择了您当前激活的主题（截图中的 #3）。

  3. 在“Theme Files”部分点击 functions.php 文件以加载文件。向下滚动到文件底部，粘贴您从 GitHub 仓库获取的 Ultimate Multisite 代码片段。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

# 如何创建 Must-Use 插件（mu-plugins）

WordPress 有一个功能，允许您加载名为“Must-Use 插件”（简称 mu-plugins）的自定义功能。

这些特殊的 mu-plugins 在所有常规插件之前加载，且无法被停用。在多站点网络中，这些 mu-plugins 中的代码会在您安装的所有站点上加载。

1\. 使用 FTP 或 SSH 访问您的 WordPress 安装的文件系统。

2\. 在 WordPress 安装的 wp-content 目录中，创建一个名为 mu-plugins 的新目录。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

3\. 在您的电脑上使用记事本或任何代码编辑器创建一个名为 wu-snippet.php 的新 PHP 文件。

4\. 将您从 GitHub 仓库获取的 Ultimate Multisite 代码片段放入该文件并保存。您也可以在代码片段顶部添加此代码，以标识您的 mu 插件。
