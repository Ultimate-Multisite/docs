---
title: GitHub 代码片段
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# 如何在我们的 GitHub 仓库中使用 Ultimate Multisite 代码片段 {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

GitHub 仓库中提供了一些代码片段，这些代码片段经常被 Ultimate Multisite 用户请求使用，他们希望添加一些小功能，例如在注册页面添加 Google Analytics 脚本，或从管理 Dashboard 中隐藏一个元框。

本文将向你展示如何使用这些代码，或者更具体地说，应将这些代码放在哪里。

你可以在下面的链接中找到这些代码片段。

https://github.com/next-press/wp-ultimo-snippets/

你有 2 种方式可以添加代码

  1. 在你的 theme 的 functions.php 文件中。

  2. Must-Use Plugins (mu-plugins)

# 如何将代码片段添加到你的 theme 的 functions.php 文件中。 {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. 登录你的 WordPress Network 管理 Dashboard，并前往 Themes >Theme Editor（见下方截图）。

  2. 在“Edit Themes”页面上，确保已在屏幕右上方的下拉字段中选择了你的当前启用 theme（下方截图中的 #3）。

  3. 点击“Theme Files”部分下的 functions.php 文件以加载该文件。向下滚动到底部，并粘贴你从 GitHub 仓库获取的 Ultimate Multisite 代码片段。

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# 如何创建 Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress 有一项功能，允许你加载名为“Must-Use Plugins”的自定义功能，简称“mu-plugins”。

这些特殊的 mu-plugins 会在所有其他常规 plugin 之前加载，并且无法停用。在 multisite 网络中，这些 mu-plugins 中的代码会在你安装中的所有站点上加载。

1\. 使用 FTP 或 SSH 访问你的 WordPress 安装的文件系统。

2\. 在你的 WordPress 安装的 wp-content 目录内，创建一个名为 mu-plugins 的新目录。

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. 在你的电脑上使用记事本或任何代码编辑器创建一个名为 wu-snippet.php 的新 PHP 文件。

4\. 将你从 GitHub 仓库获取的 Ultimate Multisite 代码片段放入该文件并保存。你也可以将此代码添加到代码片段顶部，用于标记你的 mu plugin。
