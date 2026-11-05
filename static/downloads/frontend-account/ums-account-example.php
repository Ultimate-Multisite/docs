<?php
/**
 * Plugin Name: Ultimate Multisite Account Page Example
 * Description: An optional presentation layer for native Ultimate Multisite shortcodes.
 * Version: 1.0.0
 * License: GPL-2.0-or-later
 * Text Domain: ums-account-example
 */
defined('ABSPATH') || exit;

add_filter('theme_page_templates', function ($templates) {
	$templates['ums-account-canvas.php'] = __('Account workspace (example)', 'ums-account-example');
	return $templates;
});

function ums_account_example_is_page() {
	return is_page() && 'ums-account-canvas.php' === get_page_template_slug(get_queried_object_id());
}

add_filter('template_include', function ($template) {
	return ums_account_example_is_page() ? __DIR__ . '/canvas.php' : $template;
}, 99);

add_action('template_redirect', function () {
	if (ums_account_example_is_page()) {
		nocache_headers();
	}
});

add_action('wp_enqueue_scripts', function () {
	if (ums_account_example_is_page()) {
		wp_enqueue_style('ums-account-example', plugins_url('portal.css', __FILE__), [], '1.0.0');
	}
});
