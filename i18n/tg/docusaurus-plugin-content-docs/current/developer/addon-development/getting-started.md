---
title: Оғози кор бо таҳияи аддон
sidebar_position: 1
_i18n_hash: 9e377a4aa16c5d3b119fbd631cb6126e
---
# Таҳияи илова

## Сохтори илова {#addon-structure}

```
my-addon/
├── my-addon.php                 # Main plugin file
├── inc/
│   ├── class-my-addon.php       # Main addon class
│   ├── admin-pages/             # Admin interface
│   ├── models/                  # Custom data models
│   └── integrations/            # Third-party integrations
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Template files
```

## Қолаби файли асосии илова {#main-addon-file-template}

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Custom addon for Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Exit if accessed directly
defined('ABSPATH') || exit;

// Define constants
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Check if Ultimate Multisite is active
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon requires Ultimate Multisite to be installed and activated.';
            echo '</p></div>';
        });
        return;
    }

    // Initialize addon
    My_Addon::get_instance();
});

/**
 * Main addon class
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Initialize the addon
     */
    public function init() {
        // Load dependencies
        $this->load_dependencies();

        // Setup hooks
        $this->setup_hooks();

        // Initialize components
        $this->init_components();
    }

    /**
     * Load required files
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Setup WordPress hooks
     */
    private function setup_hooks() {
        // Activation/deactivation
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hooks
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Initialize addon components
     */
    private function init_components() {
        // Initialize admin pages, models, etc.
    }

    /**
     * Plugin activation
     */
    public function activate() {
        // Create custom tables, set options, etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin deactivation
     */
    public function deactivate() {
        // Cleanup if needed
    }

    /**
     * Handle checkout completion
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Custom logic when checkout completes
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Add custom checkout fields
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Company Size',
            'options' => [
                'small' => '1-10 employees',
                'medium' => '11-100 employees',
                'large' => '100+ employees'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Намунаи модели фармоишӣ {#custom-model-example}

```php
<?php

namespace My_Addon\Models;

/**
 * Custom Lead model
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Model name
     */
    protected $model = 'lead';

    /**
     * Set the database table
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Get the company name
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Set the company name
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Convert lead to customer
     */
    public function convert_to_customer($user_data = []) {
        // Create WordPress user
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Create Ultimate Multisite customer
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Copy lead data to customer
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Mark lead as converted
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Ҳамгироии саҳифаи маъмурӣ {#admin-page-integration}

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Custom admin page
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Page ID
     */
    protected $id = 'my-addon-leads';

    /**
     * Menu position
     */
    protected $position = 30;

    /**
     * Initialize page
     */
    public function init() {
        // Register with Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Register the admin page
     */
    public function register() {
        wu_register_admin_page($this->id, [
            'title' => __('Leads', 'my-addon'),
            'menu_title' => __('Leads', 'my-addon'),
            'capability' => 'wu_read_leads',
            'position' => $this->position,
            'parent' => 'ultimate-multisite',
            'callback' => [$this, 'render']
        ]);
    }

    /**
     * Render the page
     */
    public function render() {
        // Get leads data
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Render template
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Озмоиши Addon-и шумо {#testing-your-addon}

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Create test customer
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Create test membership
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simulate form submission
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verify data was saved
        $saved_value = $this->customer->get_meta('company_size');
        $this->assertEquals('medium', $saved_value);
    }

    private function create_test_plan() {
        return wu_create_product([
            'name' => 'Test Plan',
            'type' => 'plan',
            'price' => 50,
            'duration' => 1,
            'duration_unit' => 'month'
        ])->get_id();
    }
}
```

## нуқтаҳои густариши v2.13.0 {#v2130-extension-points}

Ultimate Multisite v2.13.0 якчанд нуқтаи густариш илова мекунад, ки барои addon-ҳое муфиданд, ки бо иҷорагирони мустақил, доменҳои пардохт, ё автоматикунонии DNS-и провайдери мизбон ҳамгиро мешаванд.

### URL-ҳои идоракунии SSO ва сайти асосӣ {#sso-and-main-site-management-urls}

Use `wu_with_sso($url)` when linking customers across domains, especially when a sovereign tenant launches a main-site account, checkout, billing, invoice, template-switching, site-management, or domain-mapping action. The generated URL can be adjusted with `wu_sso_url`:

```php
add_filter('wu_sso_url', function($sso_url, $user, $site_id, $redirect_to) {
    return add_query_arg('source', 'my-addon', $sso_url);
}, 10, 4);
```

### Доменҳои асосии шакли пардохт {#checkout-form-base-domains}

Аз `wu_checkout_form_base_domains` истифода баред, вақте addon-и шумо доменҳои асосии муштараки иловагӣ пешниҳод мекунад, ки бояд ба мисли доменҳои **Site URL**-и шакли пардохт амал кунанд, на ба мисли пайвастҳои фармоишии барои ҳар сайт:

```php
add_filter('wu_checkout_form_base_domains', function($domains) {
    $domains[] = 'sites.example.com';

    return $domains;
});
```

Ultimate Multisite ин мизбонҳоро меъёрӣ мекунад ва барои онҳо сабтҳои автоматии домени хариташудаи барои ҳар сайтро мегузарад.

### Эҷоди автоматии сабти домен {#automatic-domain-record-creation}

Аз `wu_should_create_domain_record_for_site` истифода баред, вақте addon-и шумо бояд эҷоди автоматии сабти доменро барои сайти навтаъсис манъ ё ба таъхир гузорад:

```php
add_filter('wu_should_create_domain_record_for_site', function($create, $site) {
    $domain = (string) $site->domain;

    if ('.internal.example' === substr($domain, -strlen('.internal.example'))) {
        return false;
    }

    return $create;
}, 10, 2);
```

Ҳамгироиҳои провайдери мизбон, ки ба `wu_add_subdomain` гӯш медиҳанд, метавонанд ҳангоми эҷоди сайтҳо сабтҳои DNS-ро дар тарафи провайдер эҷод кунанд. Агар барои он амал ягон ҳамгироӣ сабт нашуда бошад, Ultimate Multisite кори пасзаминаи холиро мегузарад.

## Қадамҳои навбатӣ {#next-steps}

- [Маълумотномаи Hooks](/developer/hooks)-ро барои амалҳо ва филтрҳои дастрас баррасӣ кунед
- [Шарҳи умумии REST API](/developer/rest-api/overview)-ро барои ҳамгироии API санҷед
- [Қолаби Addon](/addons/addon-template)-ро ҳамчун сохтори ибтидоӣ истифода баред
