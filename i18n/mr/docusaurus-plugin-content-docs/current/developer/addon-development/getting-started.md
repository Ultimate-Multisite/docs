---
title: ॲडऑन विकासाची सुरुवात
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon Development (अ‍ॅडऑन डेव्हलपमेंट)

## Addon Structure (अ‍ॅडऑनची रचना)

```
my-addon/
├── my-addon.php                 # Main plugin file (मुख्य प्लगइन फाईल)
├── inc/
│   ├── class-my-addon.php       # Main addon class (मुख्य अ‍ॅडऑन क्लास)
│   ├── admin-pages/             # Admin interface (अ‍ॅडमिन इंटरफेस)
│   ├── models/                  # Custom data models (सानुकूल डेटा मॉडेल्स)
│   └── integrations/            # Third-party integrations (तृतीय-पक्ष एकत्रीकरणे)
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Template files (टेम्प्लेट फाईल्स)
```

## Main Addon File Template (मुख्य अ‍ॅडऑन फाईलचा नमुना)

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
 * Main addon class (मुख्य अ‍ॅडऑन क्लास)
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Initialize the addon (अ‍ॅडऑन सुरू करणे)
     */
    public function init() {
        // Load dependencies (अवलंबन लोड करणे)
        $this->load_dependencies();

        // Setup hooks (हुक्स सेट करणे)
        $this->setup_hooks();

        // Initialize components (घटक सुरू करणे)
        $this->init_components();
    }

    /**
     * Load required files (आवश्यक फाईल्स लोड करणे)
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Setup WordPress hooks (वर्डप्रेस हुक्स सेट करणे)
     */
    private function setup_hooks() {
        // Activation/deactivation (सक्रिय/निष्क्रिय करणे)
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hooks (Ultimate Multisite हुक्स)
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Initialize addon components (अ‍ॅडऑन घटक सुरू करणे)
     */
    private function init_components() {
        // Initialize admin pages, models, etc. (अ‍ॅडमिन पेजेस, मॉडेल्स इत्यादी सुरू करा.)
    }

    /**
     * Plugin activation (प्लगइन सक्रिय करणे)
     */
    public function activate() {
        // Create custom tables, set options, etc. (सानुकूल टेबल्स तयार करा, पर्याय सेट करा, इत्यादी.)
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin deactivation (प्लगइन निष्क्रिय करणे)
     */
    public function deactivate() {
        // Cleanup if needed (आवश्यक असल्यास साफसफाई करा)
    }

    /**
     * Handle checkout completion (चेकआउट पूर्ण झाल्यावर हाताळणी)
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Custom logic when checkout completes (चेकआउट पूर्ण झाल्यावर सानुकूल लॉजिक)
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Add custom checkout fields (सानुकूल चेकआउट फील्ड जोडणे)
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

## Custom Model Example (सानुकूल मॉडेलचे उदाहरण)

```php
<?php

namespace My_Addon\Models;

/**
 * Custom Lead model (सानुकूल लीड मॉडेल)
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Model name (मॉडेलचे नाव)
     */
    protected $model = 'lead';

    /**
     * Set the database table (डेटाबेस टेबल सेट करणे)
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Get the company name (कंपनीचे नाव मिळवणे)
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Set the company name (कंपनीचे नाव सेट करणे)
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Convert lead to customer (लीडला ग्राहकमध्ये रूपांतरित करणे)
     */
    public function convert_to_customer($user_data = []) {
        // Create WordPress user (वर्डप्रेस युजर तयार करणे)
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Create Ultimate Multisite customer (Ultimate Multisite ग्राहक तयार करणे)
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Copy lead data to customer (लीड डेटा ग्राहकाकडे कॉपी करणे)
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Mark lead as converted (लीडला रूपांतरित म्हणून मार्क करणे)
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Admin Page Integration (अ‍ॅडमिन पेज एकत्रीकरण)

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Custom admin page (सानुकूल अ‍ॅडमिन पेज)
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Page ID (पेज आयडी)
     */
    protected $id = 'my-addon-leads';

    /**
     * Menu position (मेनूची जागा)
     */
    protected $position = 30;

    /**
     * Initialize page (पेज सुरू करणे)
     */
    public function init() {
        // Register with Ultimate Multisite (Ultimate Multisite सोबत नोंदणी करणे)
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Register the admin page (अ‍ॅडमिन पेज नोंदणी करणे)
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
     * Render the page (पेज रेंडर करणे)
     */
    public function render() {
        // Get leads data (लीड्स डेटा मिळवणे)
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Render template (टेम्प्लेट रेंडर करणे)
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Testing Your Addon (तुमचा अ‍ॅडऑन तपासणे)

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Create test customer (चाचणी ग्राहक तयार करणे)
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Create test membership (चाचणी मेंबरशिप तयार करणे)
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simulate form submission (फॉर्म सबमिशनचे अनुकरण करणे)
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verify data was saved (डेटा सेव्ह झाला आहे की नाही तपासा)
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

## Next Steps (पुढील पायऱ्या)

- Review the [Hooks Reference](/developer/hooks) for available actions and filters (उपलब्ध actions आणि filters साठी [Hooks Reference] तपासा)
- Check the [REST API Overview](/developer/rest-api/overview) for API integration (API एकत्रीकरणासाठी [REST API Overview] तपासा)
- Use the [Addon Template](/addons/addon-template) as a starting scaffold ([Addon Template] चा वापर प्रारंभिक आधार म्हणून करा)
