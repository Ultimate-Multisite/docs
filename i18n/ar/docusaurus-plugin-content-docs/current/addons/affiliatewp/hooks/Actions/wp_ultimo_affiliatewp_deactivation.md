---
id: wp_ultimo_affiliatewp_deactivation
title: الإجراء - wp_ultimo_affiliatewp_deactivation
sidebar_label: wp_ultimo_affiliatewp_deactivation
_i18n_hash: ba7dc99de8b0d2af2f10eb24509420d7
---
# wp_ultimo_affiliatewp_deactivation

Let other plugins attach their own deactivation hooks to this plugin.

## Since

- The plugin is deactivated.

## How to

- Add your own deactivation hook to this plugin.

## Example

```php
add_action( 'wp_ultimo_affiliatewp_deactivation', 'my_plugin_deactivation' );
function my_plugin_deactivation() {
    // Your deactivation code here
}
```

## Notes

- The hook is defined in `wp_ultimo_affiliatewp.php` on line 123.
- The hook is triggered when the plugin is deactivated.
