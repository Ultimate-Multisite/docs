---
title: Addon Developmentની શરૂઆત
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# એડન ડેવલપમેન્ટ (Addon Development)

## એડનનું માળખું (Addon Structure)

```
my-addon/
├── my-addon.php                 # મુખ્ય પ્લગઇન ફાઇલ (Main plugin file)
├── inc/
│   ├── class-my-addon.php       # મુખ્ય એડન ક્લાસ (Main addon class)
│   ├── admin-pages/             # એડમિન ઇન્ટરફેસ (Admin interface)
│   ├── models/                  # કસ્ટમ ડેટા મોડલ્સ (Custom data models)
│   └── integrations/            # થર્ડ-પાર્ટી ઇન્ટિગ્રેશન્સ (Third-party integrations)
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # ટેમ્પલેટ ફાઇલો (Template files)
```

## મુખ્ય એડન ફાઇલ ટેમ્પલેટ (Main Addon File Template)

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Ultimate Multisite માટે કસ્ટમ એડન
 * Version: 1.0.0
 * Author: તમારું નામ
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// જો સીધું એક્સેસ કરવામાં આવે તો બહાર નીકળો (Exit if accessed directly)
defined('ABSPATH') || exit;

// કોન્સ્ટન્ટ્સ વ્યાખ્યાયિત કરો (Define constants)
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// તપાસો કે Ultimate Multisite એક્ટિવ છે કે નહીં (Check if Ultimate Multisite is active)
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'માતા એડન માટે Ultimate Multisite ઇન્સ્ટોલ અને એક્ટિવેટ થયેલ હોવું જરૂરી છે.';
            echo '</p></div>';
        });
        return;
    }

    // એડનને ઇનિશિયલાઇઝ કરો (Initialize addon)
    My_Addon::get_instance();
});

/**
 * મુખ્ય એડન ક્લાસ (Main addon class)
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * એડનને ઇનિશિયલાઇઝ કરો (Initialize the addon)
     */
    public function init() {
        // ડિપેન્ડન્સીઝ લોડ કરો (Load dependencies)
        $this->load_dependencies();

        // હૂક્સ સેટઅપ કરો (Setup hooks)
        $this->setup_hooks();

        // કમ્પોનન્ટ્સ ઇનિશિયલાઇઝ કરો (Initialize components)
        $this->init_components();
    }

    /**
     * જરૂરી ફાઇલો લોડ કરો (Load required files)
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * વર્ડપ્રેસ હૂક્સ સેટઅપ કરો (Setup WordPress hooks)
     */
    private function setup_hooks() {
        // એક્ટિવેશન/ડીએક્ટિવેશન (Activation/deactivation)
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite હૂક્સ
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * એડન કમ્પોનન્ટ્સ ઇનિશિયલાઇઝ કરો (Initialize addon components)
     */
    private function init_components() {
        // એડમિન પેજીસ, મોડલ્સ વગેરે ઇનિશિયલાઇઝ કરો.
    }

    /**
     * પ્લગઇન એક્ટિવેશન (Plugin activation)
     */
    public function activate() {
        // કસ્ટમ ટેબલ બનાવો, ઓપ્શન્સ સેટ કરો, વગેરે.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * પ્લગઇન ડીએક્ટિવેશન (Plugin deactivation)
     */
    public function deactivate() {
        // જો જરૂરી હોય તો ક્લીનઅપ કરો.
    }

    /**
     * ચેકઆઉટ પૂર્ણ થવા પર હેન્ડલ કરો (Handle checkout completion)
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // જ્યારે ચેકઆઉટ પૂર્ણ થાય ત્યારે કસ્ટમ લોજિક
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * કસ્ટમ ચેકઆઉટ ફીલ્ડ્સ ઉમેરો (Add custom checkout fields)
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'કંપનીનું કદ (Company Size)',
            'options' => [
                'small' => '૧-૧૦ કર્મચારીઓ',
                'medium' => '૧૧-૧૦૦ કર્મચારીઓ',
                'large' => '૧૦૦+ કર્મચારીઓ'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## કસ્ટમ મોડલ ઉદાહરણ (Custom Model Example)

```php
<?php

namespace My_Addon\Models;

/**
 * કસ્ટમ લીડ મોડલ (Custom Lead model)
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * મોડલનું નામ (Model name)
     */
    protected $model = 'lead';

    /**
     * ડેટાબેઝ ટેબલ સેટ કરો (Set the database table)
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * કંપનીનું નામ મેળવો (Get the company name)
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * કંપનીનું નામ સેટ કરો (Set the company name)
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * લીડને ગ્રાહકમાં રૂપાંતરિત કરો (Convert lead to customer)
     */
    public function convert_to_customer($user_data = []) {
        // વર્ડપ્રેસ યુઝર બનાવો (Create WordPress user)
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite ગ્રાહક બનાવો (Create Ultimate Multisite customer)
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // લીડ ડેટાને ગ્રાહકમાં કોપી કરો (Copy lead data to customer)
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // લીડને રૂપાંતરિત તરીકે માર્ક કરો (Mark lead as converted)
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## એડમિન પેજ ઇન્ટિગ્રેશન (Admin Page Integration)

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * કસ્ટમ એડમિન પેજ (Custom admin page)
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * પેજ ID (Page ID)
     */
    protected $id = 'my-addon-leads';

    /**
     * મેનુ પોઝિશન (Menu position)
     */
    protected $position = 30;

    /**
     * પેજ ઇનિશિયલાઇઝ કરો (Initialize page)
     */
    public function init() {
        // Ultimate Multisite સાથે રજીસ્ટર કરો (Register with Ultimate Multisite)
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * એડમિન પેજ રજીસ્ટર કરો (Register the admin page)
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
     * પેજ રેન્ડર કરો (Render the page)
     */
    public function render() {
        // લીડ્સ ડેટા મેળવો (Get leads data)
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // ટેમ્પલેટ રેન્ડર કરો (Render template)
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## તમારા એડનનું પરીક્ષણ કરવું (Testing Your Addon)

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // ટેસ્ટ ગ્રાહક બનાવો (Create test customer)
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // ટેસ્ટ મેમ્બરશિપ બનાવો (Create test membership)
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // ફોર્મ સબમિશનનું અનુકરણ કરો (Simulate form submission)
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // ચકાસો કે ડેટા સેવ થયો છે (Verify data was saved)
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

## આગળના પગલાં (Next Steps)

- ઉપલબ્ધ એક્શન અને ફિલ્ટર્સ માટે [Hooks Reference](/developer/hooks) સમીક્ષા કરો
- API ઇન્ટિગ્રેશન માટે [REST API Overview](/developer/rest-api/overview) તપાસો
- શરૂઆતનું સ્કેફોલ્ડ તરીકે [Addon Template](/addons/addon-template) નો ઉપયોગ કરો
