---
title: 代码片段
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# v2 代码片段

基本上，**WordPress** 的代码片段用于执行某些操作，而这些操作本来可能需要一个专门的小插件。这样的代码片段可以放在 WordPress 核心或主题文件之一（通常是你主题的 functions.php 文件），或者可以用作 MU 插件。

本文将向你展示三个可以与 **Ultimate Multisite v2** 一起使用的代码片段：

* [**更改账户菜单项的位置**](#changing-the-position-of-the-account-menu-item)

* [**如何检查用户是否属于某个计划以及/或是否有活跃订阅**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

* [**在映射域中修复 Font-Icons 的 CORS 问题**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## 更改账户菜单项的位置

要更改客户仪表盘上账户菜单项的位置，只需将以下代码片段添加到主站点活动主题的 functions.php 中。你也可以将片段放在你的 mu-plugins 或自定义插件中。

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## 如何检查用户是否属于某个计划以及/或是否有活跃订阅

作为网络管理员，你可能需要创建自定义函数，以执行基本操作或为基于订阅状态和所订阅计划的特定订阅者或最终用户提供服务/功能。

这些 Ultimate Multisite 原生函数将帮助你完成此操作。

要检查用户是否属于某个计划，你可以使用以下函数：

```php
wu_has_plan($user_id, $plan_id)
```

要检查订阅是否活跃，你可以使用以下函数：

```php
wu_is_active_subscriber($user_id)
```

下面是一个示例片段，用于检查当前用户是否属于特定计划（_Plan ID 50_）以及用户订阅是否活跃。

```php
$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;
```

请注意，_**wu_has_plan**_ 需要一个“Plan ID”才能正常工作。

要获取计划的 ID，你可以前往 **Ultimate Multisite > Products**。每个产品的 ID 将显示在表格右侧。

请注意，用户只能订阅 **Plan**，而不是 Package 或 Service，因为它们只是 **Plan** 的附加组件。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LAYTqHqw5w.png)

## 在映射域中修复 Font-Icons 的 CORS 问题

## 在映射域中修复 Font-Icons 的 CORS 问题

在将域映射到子站点后，你可能会发现站点加载自定义字体时遇到问题。这是由于服务器设置中的跨域阻止导致的。

由于字体文件几乎总是直接从 CSS 加载，我们的域映射插件无法将 URL 重写为使用映射域而非原始域，因此要修复此问题，你需要修改服务器配置文件。

下面是针对 Apache 和 NGINX 的代码片段，用于修复此问题。这些更改需要对服务器配置文件（.htaccess 文件和 NGINX 配置文件）有高级了解。如果你不熟悉自行修改这些文件，请在需要帮助时将此页面发送给你的托管服务提供商支持人员。

### Apache

在你的 .htaccess 文件中添加：

```html
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

在你的服务器配置文件中（位置因服务器而异），添加：

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```
