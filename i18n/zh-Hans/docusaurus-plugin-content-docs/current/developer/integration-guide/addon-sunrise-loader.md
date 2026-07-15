---
title: 附加组件 Sunrise 文件加载器
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 为 add-on 和自定义 MU-plugin 集成提供了一个 sunrise 扩展加载器。这些集成需要在 WordPress 的 sunrise 启动阶段运行，而无需直接编辑生成的 `wp-content/sunrise.php` 文件。

## 何时使用它 {#when-to-use-it}

当您的集成必须在常规插件加载之前运行时，请使用 sunrise 扩展。例如，自定义域名路由、特定主机请求处理或早期网络启动调整。

对于正常的集成，请优先使用常规 WordPress 插件、MU-plugins 以及文档中记录的 Ultimate Multisite hooks。Sunrise 代码运行得非常早，因此应该保持代码精简、防御性强，并且不依赖其他组件。

## 文件命名约定 {#file-naming-convention}

在 addon 目录下创建一个名为 `sunrise.php` 的 PHP 文件，该目录名称必须以 `ultimate-multisite-` 开头：

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

加载器会扫描 plugins 目录中符合此模式的文件：

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

匹配的文件将按照 addon 路径的字母顺序加载。

## 文件放置位置 {#where-to-place-the-file}

请将文件放置在拥有 sunrise 行为的 addon 的根目录下：

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

扫描是相对于 `WP_CONTENT_DIR` 解析的，而不是当前 `WP_PLUGIN_DIR` 的值。这样做可以确保在多租户或其它早期启动代码更改插件目录常量时，发现过程保持稳定。

请勿直接编辑生成的 `wp-content/sunrise.php` 文件。使用此加载器可以在不修改 Ultimate Multisite 安装和更新的核心 sunrise 文件的情况下，让自定义代码扩展 sunrise 行为。

## 可用的 Hooks 和 Filters {#hooks-and-filters-available}

Addon sunrise 文件在 Ultimate Multisite 完成域名映射加载之后，并在 WordPress 触发 `ms_loaded` 之前运行。此时，一个 sunrise 文件可以：

- 读取或覆盖 `$current_site` 和 `$current_blog`；
- 在数据库配置加载之后访问 `$wpdb`；
- 根据需要定义 sunrise 阶段的常量，例如 `BLOG_ID_CURRENT_SITE`；
- 读取 Ultimate Multisite 的 sunrise 帮助状态，包括多租户集成使用的路由状态。

Ultimate Multisite 在其 sunrise 加载器完成之后会触发 `wu_sunrise_loaded`。如果您的代码应该在 sunrise 启动完成之后运行，但仍属于 sunrise 生命周期的一部分，请使用此 action。

只调用在 sunrise 阶段已经加载的函数。避免进行大量数据库操作、模板渲染、HTTP 请求，以及假设常规插件加载顺序已经完成的代码。

## 最小示例 {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

部署文件后，请加载一个已映射的域名和一个未映射的主站 URL，以确认这两个路径都能正确地完成启动。
