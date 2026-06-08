---
title: Pagsugod sa Pag-develop og Addon
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Pag-develop sa Addon

## Estruktura sa Addon

```
my-addon/
├── my-addon.php                 # Panguna nga file sa plugin
├── inc/
│   ├── class-my-addon.php       # Panguna nga addon class
│   ├── admin-pages/             # Admin interface
│   ├── models/                  # Custom data models
│   └── integrations/            # Third-party integrations
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Mga template files
```

## Template sa Panguna nga File sa Addon

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
            echo 'Kinahanglan ang akong Addon para sa Ultimate Multisite nga gi-install ug gi-activate.';
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

## Pananglitan sa Custom Model

Kini usa ka pananglitan kung unsaon paghimo og custom model sa imong WordPress site. Kini makatabang nimo nga mas maayo ang pag-customize sa imong data o functionality.

**Unsa man ni?**

Sa laktod, ang "custom model" kay usa ka paraan aron maghatag og espesyal nga istruktura kung unsaon pag-organisa ug pagproseso sa imong mga datos sulod sa WordPress system. Dili kini usa ka standard feature, kundi usa ka paagi aron makontrolar nimo ang pamaagi sa pagtrabaho sa data.

**Unsay gamit ni?**

Gamiton ni ang custom model kung kinahanglan nimo nga:
1. **Mag-process og data sa laing paagi:** Kung dili gusto nimo ang standard way nga gi-handle sa WordPress para sa usa ka partikular nga klase sa impormasyon.
2. **Maghimo og mas komplikado nga logic:** Kon kinahanglan nimo nga adunay daghang mga kondisyon (conditions) o proseso aron ma-update o ma-display ang imong data.
3. **Mag-integrate sa laing system:** Kung gusto nimo nga ang impormasyon gikan sa WordPress mahimong magpadulong sa usa ka lain nga database o external service.

**Unsa ang mga bahin ni?**

Sa kasagaran, ang paghimo og custom model naglangkob sa:
* **Data Structure Definition:** Unsaon pag-design sa imong data (unsaon pag-organisa sa mga columns o fields).
* **Logic Implementation:** Ang code nga mag-iingon kung unsaon pagbasa, pagsulat, o pag-update sa maong data.
* **Integration Points (Hooks):** Mga punto diin mahimong mag-trigger ang imong custom model aron makig-istorya sa WordPress core functions.

**Pananglitan sa Paggamit:**

Imagine nga naghimo ka og usa ka e-commerce store gamit ang WooCommerce, ug gusto nimo nga ang impormasyon bahin sa "special discount rules" dili lang basta text, kondili usa kini nga structured data nga dali ma-scan ug ma-apply. Ang custom model mao ang maghatag og porma ni kana nga mga discount rules aron mas dali kining i-manage.

Sa laktod nga pagkasulti, ang custom model kay ang imong kaugalingong "blueprint" o plano kung unsaon pagtrabaho sa data sulod sa WordPress, imbes nga mosunod lang sa default setup.

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
        // Maghimo og WordPress user
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Maghimo og Ultimate Multisite customer
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopyahon ang datos sa lead ng customer
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // I-marka nga na-convert ang lead
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}

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
        // Kuhaon ang datos sa leads
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

## Pag-test sa Imong Addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Mag-testing customer
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Mag-testing membership
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simulation sa pag-submit sa form
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Pag-verify kung na-save ang data
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

## Sunod nga mga Lakang

---
- Tan-awon ang [Hooks Reference](/developer/hooks) para makita kung unsa may mga available nga actions ug filters.
- Siguraduhon nga tan-awa ang [REST API Overview](/developer/rest-api/overview) para sa pag-integrate sa API.
- Gamita ang [Addon Template](/addons/addon-template) isip nagsugod nga balangkas (scaffold).
