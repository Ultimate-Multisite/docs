---
title: ការចាប់ផ្តើមជាមួយការអភិវឌ្ឍកម្មវិធីបន្ថែម
sidebar_position: 1
_i18n_hash: 9e377a4aa16c5d3b119fbd631cb6126e
---
# ការអភិវឌ្ឍកម្មវិធីបន្ថែម

## រចនាសម្ព័ន្ធកម្មវិធីបន្ថែម {#addon-structure}

```
my-addon/
├── my-addon.php                 # ឯកសារ plugin ចម្បង
├── inc/
│   ├── class-my-addon.php       # class កម្មវិធីបន្ថែមចម្បង
│   ├── admin-pages/             # ចំណុចប្រទាក់គ្រប់គ្រង
│   ├── models/                  # ម៉ូដែលទិន្នន័យផ្ទាល់ខ្លួន
│   └── integrations/            # ការរួមបញ្ចូលភាគីទីបី
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # ឯកសារគំរូ
```

## គំរូឯកសារចម្បងរបស់កម្មវិធីបន្ថែម {#main-addon-file-template}

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

## ឧទាហរណ៍ម៉ូដែលផ្ទាល់ខ្លួន {#custom-model-example}

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

## ការរួមបញ្ចូលទំព័រគ្រប់គ្រង {#admin-page-integration}

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

## ការសាកល្បង Addon របស់អ្នក {#testing-your-addon}

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

## ចំណុចពង្រីក v2.13.0 {#v2130-extension-points}

Ultimate Multisite v2.13.0 បន្ថែមចំណុចពង្រីកជាច្រើន ដែលមានប្រយោជន៍សម្រាប់ addon ដែលភ្ជាប់ជាមួយអ្នកជួលមានអធិបតេយ្យភាព ដែន checkout ឬស្វ័យប្រវត្តិកម្ម DNS របស់អ្នកផ្តល់ host។

### URLs សម្រាប់ SSO និងការគ្រប់គ្រងគេហទំព័រមេ {#sso-and-main-site-management-urls}

Use `wu_with_sso($url)` when linking customers across domains, especially when a sovereign tenant launches a main-site account, checkout, billing, invoice, template-switching, site-management, or domain-mapping action. The generated URL can be adjusted with `wu_sso_url`:

```php
add_filter('wu_sso_url', function($sso_url, $user, $site_id, $redirect_to) {
    return add_query_arg('source', 'my-addon', $sso_url);
}, 10, 4);
```

### ដែនមូលដ្ឋាននៃទម្រង់ checkout {#checkout-form-base-domains}

ប្រើ `wu_checkout_form_base_domains` នៅពេល addon របស់អ្នកផ្តល់ដែនមូលដ្ឋានរួមបន្ថែម ដែលគួរតែដំណើរការដូចដែន **Site URL** របស់ទម្រង់ checkout ជំនួសឱ្យការផ្គូផ្គងផ្ទាល់ខ្លួនតាមគេហទំព័រនីមួយៗ៖

```php
add_filter('wu_checkout_form_base_domains', function($domains) {
    $domains[] = 'sites.example.com';

    return $domains;
});
```

Ultimate Multisite ធ្វើឱ្យ host ទាំងនេះមានទម្រង់ស្តង់ដារ ហើយរំលងកំណត់ត្រាដែនដែលបានផ្គូផ្គងតាមគេហទំព័រនីមួយៗដោយស្វ័យប្រវត្តិសម្រាប់ពួកវា។

### ការបង្កើតកំណត់ត្រាដែនដោយស្វ័យប្រវត្តិ {#automatic-domain-record-creation}

ប្រើ `wu_should_create_domain_record_for_site` នៅពេល addon របស់អ្នកត្រូវការទប់ស្កាត់ ឬពន្យារពេលការបង្កើតកំណត់ត្រាដែនដោយស្វ័យប្រវត្តិសម្រាប់គេហទំព័រដែលទើបបង្កើតថ្មី៖

```php
add_filter('wu_should_create_domain_record_for_site', function($create, $site) {
    $domain = (string) $site->domain;

    if ('.internal.example' === substr($domain, -strlen('.internal.example'))) {
        return false;
    }

    return $create;
}, 10, 2);
```

ការភ្ជាប់ជាមួយអ្នកផ្តល់ host ដែលស្តាប់ `wu_add_subdomain` អាចបង្កើតកំណត់ត្រា DNS នៅខាងអ្នកផ្តល់ នៅពេលគេហទំព័រត្រូវបានបង្កើត។ ប្រសិនបើគ្មានការភ្ជាប់ណាមួយបានចុះឈ្មោះសម្រាប់ action នោះទេ Ultimate Multisite នឹងរំលងការងារផ្ទៃខាងក្រោយទទេ។

## ជំហានបន្ទាប់ {#next-steps}

- ពិនិត្យមើល [ឯកសារយោង Hooks](/developer/hooks) សម្រាប់ actions និង filters ដែលមាន
- ពិនិត្យ [ទិដ្ឋភាពទូទៅ REST API](/developer/rest-api/overview) សម្រាប់ការភ្ជាប់ API
- ប្រើ [គំរូ Addon](/addons/addon-template) ជាគ្រោងចាប់ផ្តើម
