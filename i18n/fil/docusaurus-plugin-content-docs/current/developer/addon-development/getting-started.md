---
title: Pagsisimula sa Pagbuo ng Addon
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Pagbuo ng Addon

## Istruktura ng Addon

```
my-addon/
├── my-addon.php                 # Pangunahing file ng plugin
├── inc/
│   ├── class-my-addon.php       # Pangunahing class ng addon
│   ├── admin-pages/             # Mga pahina sa admin interface
│   ├── models/                  # Mga custom data model
│   └── integrations/            # Mga integrasyon sa third-party
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Mga template file
```

## Template ng Pangunahing File ng Addon

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Custom addon para sa Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Hihinto kung direkta itong ina-access
defined('ABSPATH') || exit;

// Pagde-define ng mga constants
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Titingnan kung aktibo ang Ultimate Multisite
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Kailangan ng My Addon ang Ultimate Multisite para ma-install at ma-activate.';
            echo '</p></div>';
        });
        return;
    }

    // I-i-initialize ang addon
    My_Addon::get_instance();
});

/**
 * Pangunahing class ng addon
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Pag-i-initialize ng addon
     */
    public function init() {
        // I-lo-load ang mga dependencies
        $this->load_dependencies();

        // I-se-setup ang mga hooks
        $this->setup_hooks();

        // I-i-initialize ang mga components
        $this->init_components();
    }

    /**
     * Paglo-load ng mga kinakailangang file
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Pag-se-setup ng WordPress hooks
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
     * Pag-i-initialize ng mga component ng addon
     */
    private function init_components() {
        // I-i-initialize ang admin pages, models, atbp.
    }

    /**
     * Pag-activate ng Plugin
     */
    public function activate() {
        // Gumawa ng custom tables, mag-set ng options, atbp.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Pag-deactivate ng Plugin
     */
    public function deactivate() {
        // Linisin kung kinakailangan
    }

    /**
     * Paghawak sa pagkumpleto ng checkout
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Custom logic kapag kumpleto na ang checkout
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Pagdaragdag ng custom checkout fields
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Laki ng Kumpanya',
            'options' => [
                'small' => '1-10 empleyado',
                'medium' => '11-100 empleyado',
                'large' => '100+ empleyado'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Halimbawa ng Custom Model

```php
<?php

namespace My_Addon\Models;

/**
 * Custom Lead model
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Pangalan ng model
     */
    protected $model = 'lead';

    /**
     * Pag-set ng database table
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Kukuha ng pangalan ng kumpanya
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Magse-set ng pangalan ng kumpanya
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Iko-convert ang lead sa customer
     */
    public function convert_to_customer($user_data = []) {
        // Gumawa ng WordPress user
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Gumawa ng Ultimate Multisite customer
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopyahin ang data ng lead sa customer
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Mark ang lead bilang converted
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integrasyon sa Admin Page

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
     * Pag-i-initialize ng page
     */
    public function init() {
        // Mag-re-register sa Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Pag-re-register ng admin page
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
     * Pag-render ng page
     */
    public function render() {
        // Kukuha ng data ng leads
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // I-render ang template
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Pagsubok sa Iyong Addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Gumawa ng test customer
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Gumawa ng test membership
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // I-simulate ang form submission
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // I-verify na na-save ang data
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

## Susunod na Hakbang

- Balikan ang [Hooks Reference](/developer/hooks) para sa mga available na actions at filters
- Tingnan ang [REST API Overview](/developer/rest-api/overview) para sa API integration
- Gamitin ang [Addon Template](/addons/addon-template) bilang panimulang scaffold
