---
title: Addon ಅಭಿವೃದ್ಧಿಗೆ ಪರಿಚಯ
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# ಅಡ್-ಆನ್ ಅಭಿವೃದ್ಧಿ

## ಅಡ್-ಆನ್ ರಚನೆ (Addon Structure)

```
my-addon/
├── my-addon.php                 # ಮುಖ್ಯ ಪ್ಲಗ್ಇನ್ ಫೈಲ್
├── inc/
│   ├── class-my-addon.php       # ಮುಖ್ಯ ಅಡ್-ಆನ್ ಕ್ಲಾಸ್
│   ├── admin-pages/             # ಆಡಳಿತಾತ್ಮಕ ಇಂಟರ್‌ಫೇಸ್
│   ├── models/                  # ಕಸ್ಟಮ್ ಡೇಟಾ ಮಾದರಿಗಳು
│   └── integrations/            # ಮೂರನೇ ವ್ಯಕ್ತಿಗಳ ಏಕೀಕರಣಗಳು
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # ಟೆಂಪ್ಲೇಟ್ ಫೈಲ್‌ಗಳು
```

## ಮುಖ್ಯ ಅಡ್-ಆನ್ ಫೈಲ್ ಟೆಂಪ್ಲೇಟ್ (Main Addon File Template)

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Ultimate Multisite ಗಾಗಿ ಕಸ್ಟಮ್ ಅಡ್-ಆನ್
 * Version: 1.0.0
 * Author: ನಿಮ್ಮ ಹೆಸರು
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// ಇದನ್ನು ನೇರವಾಗಿ ಪ್ರವೇಶಿಸಿದರೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ
defined('ABSPATH') || exit;

// ಸ್ಥಿರಾಂಕಗಳನ್ನು (constants) ವ್ಯಾಖ್ಯಾನಿಸಿ
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite ಸಕ್ರಿಯವಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'ನನ್ನ ಅಡ್-ಆನ್‌ಗೆ Ultimate Multisite ಅನ್ನು ಸ್ಥಾಪಿಸಿ ಮತ್ತು ಸಕ್ರಿಯಗೊಳಿಸುವುದು ಅಗತ್ಯ.';
            echo '</p></div>';
        });
        return;
    }

    // ಅಡ್-ಆನ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸಿ (Initialize)
    My_Addon::get_instance();
});

/**
 * ಮುಖ್ಯ ಅಡ್-ಆನ್ ಕ್ಲಾಸ್
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * ಅಡ್-ಆನ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸಿ
     */
    public function init() {
        // ಅವಲಂಬನೆಗಳನ್ನು (dependencies) ಲೋಡ್ ಮಾಡಿ
        $this->load_dependencies();

        // ಹುಕ್‌ಗಳನ್ನು (hooks) ಸೆಟಪ್ ಮಾಡಿ
        $this->setup_hooks();

        // ಘಟಕಗಳನ್ನು (components) ಪ್ರಾರಂಭಿಸಿ
        $this->init_components();
    }

    /**
     * ಅಗತ್ಯ ಫೈಲ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಿ
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * ವರ್ಡ್ಪ್ರೆಸ್ ಹುಕ್‌ಗಳನ್ನು ಸೆಟಪ್ ಮಾಡಿ
     */
    private function setup_hooks() {
        // ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ/ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವಿಕೆ (Activation/deactivation)
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite ಹುಕ್‌ಗಳು
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * ಅಡ್-ಆನ್ ಘಟಕಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿ
     */
    private function init_components() {
        // ಆಡಳಿತಾತ್ಮಕ ಪುಟಗಳು, ಮಾದರಿಗಳು ಇತ್ಯಾದಿಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿ.
    }

    /**
     * ಪ್ಲಗ್ಇನ್ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ (Plugin activation)
     */
    public function activate() {
        // ಕಸ್ಟಮ್ ಟೇಬಲ್‌ಗಳನ್ನು ರಚಿಸಿ, ಆಪ್ಷನ್‌ಗಳನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಿ, ಇತ್ಯಾದಿ.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * ಪ್ಲಗ್ಇನ್ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವಿಕೆ (Plugin deactivation)
     */
    public function deactivate() {
        // ಅಗತ್ಯವಿದ್ದರೆ ಸ್ವಚ್ಛಗೊಳಿಸಿ (Cleanup)
    }

    /**
     * ಚೆಕ್‌ಔಟ್ ಪೂರ್ಣಗೊಂಡಾಗ ನಿರ್ವಹಣೆ (Handle checkout completion)
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // ಚೆಕ್‌ಔಟ್ ಪೂರ್ಣಗೊಂಡಾಗ ಕಸ್ಟಮ್ ಲಾಜಿಕ್
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * ಕಸ್ಟಮ್ ಚೆಕ್‌ಔಟ್ ಫೀಲ್ಡ್‌ಗಳನ್ನು ಸೇರಿಸಿ
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'ಕಂಪನಿ ಗಾತ್ರ',
            'options' => [
                'small' => '1-10 ಉದ್ಯೋಗಿಗಳು',
                'medium' => '11-100 ಉದ್ಯೋಗಿಗಳು',
                'large' => '100+ ಉದ್ಯೋಗಿಗಳು'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## ಕಸ್ಟಮ್ ಮಾದರಿ ಉದಾಹರಣೆ (Custom Model Example)

```php
<?php

namespace My_Addon\Models;

/**
 * ಕಸ್ಟಮ್ ಲೀಡ್ ಮಾದರಿ (Custom Lead model)
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * ಮಾದರಿ ಹೆಸರು (Model name)
     */
    protected $model = 'lead';

    /**
     * ಡೇಟಾಬೇಸ್ ಟೇಬಲ್ ಅನ್ನು ಸೆಟ್ ಮಾಡಿ
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * ಕಂಪನಿ ಹೆಸರನ್ನು ಪಡೆಯಿರಿ
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * ಕಂಪನಿ ಹೆಸರನ್ನು ಸೆಟ್ ಮಾಡಿ
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * ಲೀಡ್ ಅನ್ನು ಗ್ರಾಹಕರಾಗಿ ಪರಿವರ್ತಿಸಿ (Convert lead to customer)
     */
    public function convert_to_customer($user_data = []) {
        // ವರ್ಡ್ಪ್ರೆಸ್ ಬಳಕೆದಾರರನ್ನು ರಚಿಸಿ
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite ಗ್ರಾಹಕರನ್ನು ರಚಿಸಿ
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // ಲೀಡ್ ಡೇಟಾವನ್ನು ಗ್ರಾಹಕರಿಗೆ ನಕಲಿಸಿ
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // ಲೀಡ್ ಅನ್ನು ಪರಿವರ್ತಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## ಆಡಳಿತಾತ್ಮಕ ಪುಟ ಏಕೀಕರಣ (Admin Page Integration)

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * ಕಸ್ಟಮ್ ಆಡಳಿತಾತ್ಮಕ ಪುಟ (Custom admin page)
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ಪುಟದ ID
     */
    protected $id = 'my-addon-leads';

    /**
     * ಮೆನುವಿನ ಸ್ಥಾನ (Menu position)
     */
    protected $position = 30;

    /**
     * ಪುಟವನ್ನು ಪ್ರಾರಂಭಿಸಿ (Initialize page)
     */
    public function init() {
        // Ultimate Multisite ನೊಂದಿಗೆ ನೋಂದಾಯಿಸಿ
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * ಆಡಳಿತಾತ್ಮಕ ಪುಟವನ್ನು ನೋಂದಾಯಿಸಿ
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
     * ಪುಟವನ್ನು ಪ್ರದರ್ಶಿಸಿ (Render the page)
     */
    public function render() {
        // ಲೀಡ್‌ಗಳ ಡೇಟಾವನ್ನು ಪಡೆಯಿರಿ
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // ಟೆಂಪ್ಲೇಟ್ ಅನ್ನು ಪ್ರದರ್ಶಿಸಿ
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## ನಿಮ್ಮ ಅಡ್-ಆನ್ ಅನ್ನು ಪರೀಕ್ಷಿಸುವುದು (Testing Your Addon)

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // ಪರೀಕ್ಷಾ ಗ್ರಾಹಕರನ್ನು ರಚಿಸಿ
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // ಪರೀಕ್ಷಾ ಸದಸ್ಯತ್ವವನ್ನು ರಚಿಸಿ
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // ಫಾರ್ಮ್ ಸಲ್ಲಿಸುವಿಕೆಯನ್ನು ಅನುಕರಿಸಿರಿ (Simulate form submission)
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // ಡೇಟಾವನ್ನು ಉಳಿಸಲಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
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

## ಮುಂದಿನ ಹಂತಗಳು (Next Steps)

- ಲಭ್ಯವಿರುವ ಆಕ್ಷನ್‌ಗಳು ಮತ್ತು ಫಿಲ್ಟರ್‌ಗಳಿಗಾಗಿ [Hooks Reference](/developer/hooks) ಅನ್ನು ಪರಿಶೀಲಿಸಿ
- API ಏಕೀಕರಣಕ್ಕಾಗಿ [REST API Overview](/developer/rest-api/overview) ಅನ್ನು ಪರಿಶೀಲಿಸಿ
- ಆರಂಭಿಕ ಸ್ಕ್ಯಾಫೋಲ್ಡ್ ಆಗಿ [Addon Template](/addons/addon-template) ಅನ್ನು ಬಳಸಿ
