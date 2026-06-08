---
title: അഡോൺ വികസനത്തിനുള്ള തുടക്കം
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon വികസനം

## Addon ഘടന

```
my-addon/
├── my-addon.php                 # പ്രധാന പ്ലഗിൻ ഫയൽ
├── inc/
│   ├── class-my-addon.php       # പ്രധാന addon ക്ലാസ്
│   ├── admin-pages/             # അഡ്മിൻ ഇന്റർഫേസ്
│   ├── models/                  # കസ്റ്റം ഡാറ്റാ മോഡലുകൾ
│   └── integrations/            # തേർഡ്-പാർട്ടി സംയോജനങ്ങൾ
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # ടെംപ്ലേറ്റ് ഫയലുകൾ
```

## പ്രധാന Addon ഫയൽ ടെംപ്ലേറ്റ്

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

// നേരിട്ട് ആക്സസ് ചെയ്താൽ എക്സിറ്റ് ചെയ്യുക
defined('ABSPATH') || exit;

// കോൺസ്റ്റന്റുകൾ നിർവചിക്കുക
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite സജീവമാണോ എന്ന് പരിശോധിക്കുക
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon requires Ultimate Multisite to be installed and activated.';
            echo '</p></div>';
        });
        return;
    }

    // addon ആരംഭിക്കുക
    My_Addon::get_instance();
});

/**
 * പ്രധാന addon ക്ലാസ്
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * addon ആരംഭിക്കുക
     */
    public function init() {
        // ഡിപൻഡൻസികൾ ലോഡ് ചെയ്യുക
        $this->load_dependencies();

        // hooks സജ്ജമാക്കുക
        $this->setup_hooks();

        // കോമ്പോണന്റുകൾ ആരംഭിക്കുക
        $this->init_components();
    }

    /**
     * ആവശ്യമായ ഫയലുകൾ ലോഡ് ചെയ്യുക
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPress hooks സജ്ജമാക്കുക
     */
    private function setup_hooks() {
        // സജീവമാക്കൽ/നിർജ്ജീവമാക്കൽ
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hooks
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * addon കോമ്പോണന്റുകൾ ആരംഭിക്കുക
     */
    private function init_components() {
        // അഡ്മിൻ പേജുകൾ, മോഡലുകൾ തുടങ്ങിയവ ആരംഭിക്കുക.
    }

    /**
     * പ്ലഗിൻ സജീവമാക്കൽ
     */
    public function activate() {
        // കസ്റ്റം ടേബിളുകൾ ഉണ്ടാക്കുക, ഓപ്ഷനുകൾ സജ്ജമാക്കുക, തുടങ്ങിയവ.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * പ്ലഗിൻ നിർജ്ജീവമാക്കൽ
     */
    public function deactivate() {
        // ആവശ്യമെങ്കിൽ ക്ലീൻഅപ്പ് ചെയ്യുക
    }

    /**
     * ചെക്ക്ഔട്ട് പൂർത്തിയാക്കൽ കൈകാര്യം ചെയ്യുക
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // ചെക്ക്ഔട്ട് പൂർത്തിയാകുമ്പോൾ കസ്റ്റം ലോജിക്
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * കസ്റ്റം ചെക്ക്ഔട്ട് ഫീൽഡുകൾ ചേർക്കുക
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

## കസ്റ്റം മോഡൽ ഉദാഹരണം

```php
<?php

namespace My_Addon\Models;

/**
 * കസ്റ്റം ലീഡ് മോഡൽ
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * മോഡലിന്റെ പേര്
     */
    protected $model = 'lead';

    /**
     * ഡാറ്റാബേസ് ടേബിൾ സജ്ജമാക്കുക
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * കമ്പനിയുടെ പേര് നേടുക
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * കമ്പനിയുടെ പേര് സജ്ജമാക്കുക
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * ലീഡിനെ കസ്റ്റമറാക്കി മാറ്റുക
     */
    public function convert_to_customer($user_data = []) {
        // WordPress യൂസറെ സൃഷ്ടിക്കുക
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite കസ്റ്റമറെ സൃഷ്ടിക്കുക
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // ലീഡ് ഡാറ്റ കസ്റ്റമറിലേക്ക് പകർത്തുക
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // ലീഡിനെ കൺവെർട്ട് ചെയ്തതായി അടയാളപ്പെടുത്തുക
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## അഡ്മിൻ പേജ് സംയോജനം

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * കസ്റ്റം അഡ്മിൻ പേജ്
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * പേജ് ID
     */
    protected $id = 'my-addon-leads';

    /**
     * മെനു പൊസിഷൻ
     */
    protected $position = 30;

    /**
     * പേജ് ആരംഭിക്കുക
     */
    public function init() {
        // Ultimate Multisite-മായി രജിസ്റ്റർ ചെയ്യുക
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * അഡ്മിൻ പേജ് രജിസ്റ്റർ ചെയ്യുക
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
     * പേജ് റെൻഡർ ചെയ്യുക
     */
    public function render() {
        // ലീഡ് ഡാറ്റ നേടുക
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // ടെംപ്ലേറ്റ് റെൻഡർ ചെയ്യുക
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## നിങ്ങളുടെ Addon ടെസ്റ്റ് ചെയ്യുക

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // ടെസ്റ്റ് കസ്റ്റമറെ സൃഷ്ടിക്കുക
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // ടെസ്റ്റ് മെമ്പർഷിപ്പ് സൃഷ്ടിക്കുക
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // ഫോം സമർമിഷൻ അനുകരിക്കുക
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // ഡാറ്റ സേവ് ആയെന്ന് പരിശോധിക്കുക
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

## അടുത്ത ഘട്ടങ്ങൾ

- ലഭ്യമായ actions, filters എന്നിവക്കായി [Hooks Reference](/developer/hooks) പരിശോധിക്കുക
- API സംയോജനത്തിനായി [REST API Overview](/developer/rest-api/overview) പരിശോധിക്കുക
- ഒരു സ്റ്റാർട്ടിംഗ് സ്കഫോൾഡായി [Addon Template](/addons/addon-template) ഉപയോഗിക്കുക
