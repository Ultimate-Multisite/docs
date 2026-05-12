---
title: "Addon Sunrise File Loader"
sidebar_position: 5
---

# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 adds a sunrise extension loader for add-ons and custom MU-plugin integrations that need to run during WordPress sunrise bootstrapping without editing the generated `wp-content/sunrise.php` file.

## When to use it

Use a sunrise extension when your integration must run before regular plugins are loaded, such as custom domain routing, host-specific request handling, or early network bootstrap adjustments.

For normal integrations, prefer regular WordPress plugins, MU-plugins, and the documented Ultimate Multisite hooks. Sunrise code runs very early and should stay small, defensive, and dependency-free.

## File naming convention

Create a PHP file named `sunrise.php` in an addon directory whose name starts with `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

The loader scans the plugins directory for this pattern:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Matching files are loaded in alphabetical order by addon path.

## Where to place the file

Place the file in the root directory of the addon that owns the sunrise behaviour:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

The scan is resolved relative to `WP_CONTENT_DIR`, not the current value of `WP_PLUGIN_DIR`. This keeps discovery stable when multi-tenancy or other early bootstrap code changes plugin directory constants during sunrise.

Do not edit the generated `wp-content/sunrise.php` file directly. The loader lets custom code extend sunrise behaviour without forking the core sunrise file that Ultimate Multisite installs and updates.

## Hooks and filters available

Addon sunrise files run after Ultimate Multisite domain mapping has loaded and before WordPress fires `ms_loaded`. At this point a sunrise file can:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- define sunrise-time constants such as `BLOG_ID_CURRENT_SITE` when needed;
- read Ultimate Multisite sunrise helper state, including routing state used by multi-tenancy integrations.

Ultimate Multisite fires `wu_sunrise_loaded` after its sunrise loader finishes. Use that action for code that should run after sunrise bootstrap is complete but still belongs to the sunrise lifecycle.

Only call functions that are already loaded in the sunrise phase. Avoid database-heavy work, template rendering, HTTP requests, and code that assumes normal plugin load order has completed.

## Minimal example

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

After deploying the file, load a mapped domain and an unmapped main-site URL to confirm both paths still bootstrap correctly.
