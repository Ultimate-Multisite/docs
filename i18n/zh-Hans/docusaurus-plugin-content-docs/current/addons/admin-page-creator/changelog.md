---
title: Admin Page Creator 更新日志
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog

### Version 1.9.0 - Released on 2026-01-18

* Fixed: 激活时出现致命错误。
* Refactored: 内容源类使用 Singleton trait，并正确初始化父构造函数。
* Fixed: Vue.js 模板编译错误，导致内容类型选择器无法渲染。
* Fixed: 缺失 Vue 数据属性（template_id、external_link_url_embedable、external_link_url_checking）。
* Fixed: TinyMCE 编辑器在页面加载时未正确初始化。
* Fixed: Divi 支持文件未通过 Composer 自动加载。
* Fixed: Divi 支持类中的 PHP 语法损坏。
* Improved: JavaScript 资产组织和压缩。
* Improved: 与最新 WordPress 和页面构建器版本的兼容性。

= Version: 1.8.8 - Released on 2025-09-28

* Rename prefix to ultimate-multisite; update text domain; version bump.

### Version 1.8.7 - 04/10/2023

* Fixed: 尝试添加新管理页面时出现致命错误。
* Fixed: 与 Oxygen 样式表前缀冲突。

### Version 1.8.6 - 09/08/2023

* Added: 新增选项，可显示来自主站点或当前子站点的数据。
* Added: 支持 WordPress 区块编辑器（Gutenberg）。
* Fixed: Brizy 页面资产未加载的问题。

### Version 1.8.5 - 09/12/2020

* Fixed: 隐藏菜单的屏幕选项无法消失的问题。

### Version 1.8.4 - 11/11/2020

* Fixed: 支持 Multisite Ultimate v2。

### Version 1.8.3 - 01/10/2020

* Fixed: 与 Beaver Builder 的不兼容。
* Fixed: 与 WP 5.5 的边距不一致。

### Version 1.8.2 - 21/09/2020

* Fixed: 与 WP 5.5 的小兼容性问题。

### Version 1.8.1 - 05/08/2020

* Fixed: 与 Brizy 2.0 的不兼容。
* Fixed: 构建菜单列表时的小性能问题。

### Version 1.8.0 - 27/04/2020

* Fixed: 在未选择边距模式时，通知被顶部栏隐藏。
* Added: 自定义页面现在可以同时替换多个 WordPress 管理顶级和子页面。
* Added: 管理员现在可以使用 WP Admin Pages PRO 隐藏管理页面。

### Version 1.7.9 - 01/04/2020

* Fixed: Brizy 1.10.118 及以上版本导致管理页面 SVG 支持失效。

### Version 1.7.8 - 26/03/2020

* Fixed: 使用法语时导致编辑器页面转义错误。

### Version 1.7.7 - 04/03/2020

* Fixed: 与 Brizy Builder 的小兼容性问题。
* Improved: Freemius SDK 更新至 2.3.2。

### Version 1.7.6 - 10/02/2020

* Fixed: 仪表盘小工具右下角的管理页面编辑按钮不起作用。
* Fixed: 与 Astra 的小兼容性问题。
* Fixed: Brizy 新版本导致兼容性问题。

### Version 1.7.5 - 14/12/2019

* Fixed: 新增边缘情况处理器，用于在替换页面选项中填充菜单项。
* Fixed: Elementor 字体无法使用。
* Improved: Freemius SDK 更新以支持从账户页面隐藏敏感信息。

### Version 1.7.4 - 29/11/2019

* Fixed: 与 WooCommerce Memberships 不兼容。
* Fixed: Oxygen Builder 选项卡组件无法工作。
* Fixed: Beaver Themer 无法工作。

### Version 1.7.3 - 12/07/2019

* Fixed: 当父页面转换为另一种管理页面类型时，页面消失。
* Improved: 改进管理页面类型之间的列表表格分隔符。
* Improved: 对插件整个代码库进行安全审查。
* Improved: 在给定菜单/内容源类型不可用时，分隔符选项卡警告的说明。

### Version 1.7.2 - 01/07/2019

* Fixed: Freemius SDK 版本更新至 2.3.0。
* Fixed: 与 Flywheel 的兼容性问题。

### Version 1.7.1 - 27/06/2019

* Fixed: 欢迎小工具现在显示给所有角色。
* Fixed: 如果通过 https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ 上记录的过滤器隐藏菜单，则屏幕选项不添加隐藏/显示管理页面菜单。
* Improved: 隐藏管理页面菜单现在也会隐藏来自 Beaver Builder 已保存模板列表的模板。
* Added: 批量激活和停用管理页面的选项。
* Added: 在主站点显示页面的选项。
* Added: 在替换模式下重命名顶级和子级菜单标签的选项。

### Version 1.7.0 - 04/06/2019

* Fix: Oxygen 模板未显示的问题。
* Added: 支持小部件创建。

### Version 1.6.1 - 22/05/2019

* Fixed: 拼写错误。
* Fixed: 子菜单页面覆盖具有相同顺序值的先前子菜单项。
* Fixed: 复制现在会重置复制页面的 slug。
* Improved: 更新 pt_BR 和 es_ES po 文件。
* Improved: 列表表格现在也列出自定义页面的名称作为父页面。

### Version 1.6.0 - 21/05/2019

* Added: 外部链接现在也支持 iframe 加载。

### Version 1.5.5 - 17/05/2019

* Fixed: 删除或复制页面时抛出的警告信息。
* Fixed: 权限设置未应用于管理员。

### Version 1.5.4 - 08/05/2019

* Fixed: 与 Sliced Invoices 不兼容。
* Fixed: Oxygen 的小问题。
* Fixed: 新管理页面标题字段的占位符在键盘弹起时未消失。

### Version 1.5.3 - 03/05/2019

* Fixed: 与 Advanced Custom Field 选项页面不兼容。
* Added: 将特定用户添加为自定义管理页面目标的选项。

### Version 1.5.2 - 30/04/2019

* Fixed: 与 Brizy 新版本不兼容。
* Added: 添加西班牙语翻译 - 由 John Rozzo 提供。谢谢，John！
* Added: Oxygen Builder 的测试版支持。

### Version 1.5.1 - 15/04/2019

* Fixed: 普通和 HTML 编辑器中的占位符问题。
* Fixed: 管理页面未显示在工具 → 导出。
* Fixed: 仅在我们自己的页面加载脚本和样式。
* Added: 超级管理员现在可以复制管理页面。

### Version 1.5.0 - 29/03/2019

* Fixed: Sentry 捕获的小错误。
* Fixed: 编辑管理页面屏幕上的删除按钮不起作用。
* Improved: 更改 BeaverBuilder 按钮，以明确标准 BB 许可证也受支持。
* Added: 管理员也可以设置子菜单的顺序。
* Added: 替换页面模式现在支持所有可用菜单项。

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Added: 作为独立插件在 https://wpadminpagespro.com 上发布。
* Added: 在页面创建过程完成后移除 Admin Pages 菜单项的选项。
* Added: 从管理页面移除管理员通知的选项。
* Added: 内容处理，您可以放置类似 {{user:first_name}} 的占位符，并自动替换为用户 first_name 元字段。
* Added: 内联编辑器。
* Added: 合并内容源父类，以便将来更容易添加新的页面构建器/内容源。
* Added: 支持外部 URL。

### Version 1.3.0 - 15/01/2019

* Fixed: 在多站点环境中，管理页面不显示在主站点。
* Improved: 从子站点的导出屏幕中移除 Multisite Ultimate 自定义文章类型。
* Added: 在创建页面时为网络管理员提供顶部栏快速操作。
* Added: 巨大的！Elementor 支持！
* Added: 巨大的！Brizy 支持！

### Version 1.2.1 - 17/11/2018

* Fixed: 使插件兼容 Multisite Ultimate 1.9.0。

### Version 1.2.0 - 10/09/2018

* Added: 如果在 wp-config.php 中将 WU_APC_ALLOW_PHP_PROCESSING 设置为 true，则添加 PHP 支持。这不使用 PHP 的 eval，但仍可能导致安全漏洞。请谨慎使用。
* Improved: 插件附加组件更新器。
* Improved: 更新服务器的新 URL。

### Version 1.1.2 - 16/08/2018

* Fixed: WP Engine 的小问题。

### Version 1.1.1 - 16/08/2018

* Fixed: 权限未正确应用于替换页面。

### Version 1.1.0 - 15/08/2018

* Added: Beaver Builder 模板现在受支持！您可以使用您喜欢的页面构建器创建自定义管理页面。
* Added: 现在也可以替换 WordPress 默认管理页面的内容。
* Added: 现在也可以将创建的内容追加到默认 WordPress 管理页面的顶部或底部。

0.0.1
- Initial Release
