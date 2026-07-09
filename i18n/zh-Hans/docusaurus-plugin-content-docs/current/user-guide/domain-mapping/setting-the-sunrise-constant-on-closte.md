---
title: 在 Closte 上设置 Sunrise 常量
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# 在 Closte 上将 Sunrise 常量设置为 true

出于安全原因，一些托管服务提供商会锁定 wp-config.php。这意味着 Ultimate Multisite 无法自动编辑该文件，以加入使域名映射和其他功能正常工作所需的常量。Closte 就是这样的托管服务提供商之一。

不过，Closte 提供了一种安全地向 wp-config.php 添加常量的方法。你只需按照以下步骤操作：

## 在 Closte dashboard 上

首先，[登录你的 Closte account](https://app.closte.com/)，点击 Sites 菜单项，然后点击你当前正在处理的网站上的 Dashboard 链接：

<!-- 截图不可用：Closte dashboard 显示 Sites 菜单和 Dashboard 链接 -->

屏幕左侧会显示一组新的菜单项。使用该菜单前往 **设置** 页面：

<!-- 截图不可用：Closte 左侧边栏菜单显示 Settings 选项 -->

然后，在 **设置** 中，找到 WP-Config 选项卡，然后找到该选项卡上的“Additional wp-config.php content”字段：

<!-- 截图不可用：Closte Settings 页面，其中 WP-Config 选项卡显示 Additional wp-config.php content 字段 -->

在安装 Ultimate Multisite 的过程中，你需要把 sunrise 常量添加到该字段中。只需添加新的一行并粘贴下面这一行。之后，点击 **全部保存** 按钮。

define('SUNRISE', true);

就这样，你已经设置完成。返回 Ultimate Multisite 安装向导并刷新页面，以继续该流程。
