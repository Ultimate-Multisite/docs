---
title: 代码片段
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 的代码片段

基本上，**WordPress** 的代码片段用于执行某些操作，否则这些操作可能需要一个专门的小型 plugin。此类代码片段会放在 WordPress 核心文件或 theme 文件之一中（通常是你的 theme 的 functions.php 文件），也可以作为 MU plugin 使用。

在本文中，我们将向你展示三个可与 **Ultimate Multisite v2** 配合使用的代码片段：

  * [**更改 Account 菜单项的位置**](#changing-the-position-of-the-account-menu-item)

  * [**如何检查用户是否属于指定 plan 和/或拥有有效 subscription**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**修复映射域名中 Font-Icons 的 CORS 问题**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## 更改 Account 菜单项的位置 {#changing-the-position-of-the-account-menu-item}

要更改你的客户 Dashboard 上 Account 菜单项的位置，只需将以下代码片段添加到主站点当前启用 theme 的 functions.php 中。你也可以将该片段放入你的某个 mu-plugins 或自定义 plugins 中。

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## 如何检查用户是否属于指定 plan 和/或拥有有效 subscription {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

作为网络管理员，你可能需要创建自定义函数，根据用户 subscription 的状态以及他们所订阅的 plan，为选定的一组订阅者或最终用户执行基本操作，或提供某项服务/功能。

这些 Ultimate Multisite 原生函数将帮助你完成这项工作。

要检查用户是否是某个指定 plan 的成员，你可以使用以下函数：

wu_has_plan($user_id, $plan_id)

要检查 subscription 是否有效，你可以使用以下函数：

wu_is_active_subscriber($user_id)

下面是一个示例代码片段，用于检查当前用户是否属于某个特定 plan（_Plan ID 50_），以及该用户的 subscription 是否有效。

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

请注意，_**wu_has_plan**_ 需要一个“Plan ID”才能运行。

要获取某个 plan 的 ID，你可以前往 **Ultimate Multisite > Products**。每个 product 的 ID 将显示在表格右侧。

请注意，用户只能订阅 **Plan**，不能订阅 Package 或 Service，因为它们只是 **Plan** 的附加项。

![显示 plan ID 的 Products 列表](/img/admin/products-list.png)

## 修复映射域名中 Font-Icons 的 CORS 问题 {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## 修复映射域名中 Font-Icons 的 CORS 问题 {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

将域名映射到子站点后，你可能会发现该站点在加载自定义字体时遇到问题。这是由服务器设置中的跨源阻止导致的。

由于字体文件几乎总是直接从 CSS 加载，我们的域名映射 plugin 无法重写 URL 以使用映射后的域名替代原始域名，因此为了解决该问题，你需要修改服务器配置文件。

下面是用于修复 Apache 和 NGINX 中该问题的代码片段。这些更改需要具备服务器配置文件（.htaccess 文件和 NGINX 配置文件）的高级知识。如果你不方便自行进行这些更改，请在需要协助时将此页面发送给你的主机提供商支持人员。

### Apache {#apache}

在你的 .htaccess 文件中，添加：

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

在你的服务器配置文件中（位置因服务器而异），添加：

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
