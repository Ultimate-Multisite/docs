---
title: Addon ဖွံ့ဖြိုးရေးကို စတင်ခြင်း
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon ရေးသားခြင်း

## Addon ဖွဲ့စည်းပုံ

```
my-addon/
├── my-addon.php                 # အဓိက plugin ဖိုင်
├── inc/
│   ├── class-my-addon.php       # အဓိက addon class
│   ├── admin-pages/             # အုပ်ချုပ်မှု မျက်နှာပြင် (Admin interface)
│   ├── models/                  # ကိုယ်ပိုင် data model များ
│   └── integrations/            # ပြင်ပမှ ပေါင်းစပ်မှုများ
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Template ဖိုင်များ
```

## အဓိက Addon ဖိုင် Template

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Ultimate Multisite အတွက် ကိုယ်ပိုင် Addon
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// တိုက်ရိုက်ဝင်ရောက်အသုံးပြုပါက အလုပ်မလုပ်စေရန်
defined('ABSPATH') || exit;

// Constant များကို သတ်မှတ်ခြင်း
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite ကို အသုံးပြုထားခြင်း ရှိမရှိ စစ်ဆေးခြင်း
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon သည် Ultimate Multisite ကို ထည့်သွင်းပြီး အသက်သွင်းထားရန် လိုအပ်ပါသည်။';
            echo '</p></div>';
        });
        return;
    }

    // Addon ကို စတင်အသုံးပြုရန်
    My_Addon::get_instance();
});

/**
 * အဓိက addon class
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Addon ကို စတင်အသုံးပြုရန်
     */
    public function init() {
        // မှီခိုမှုများကို တင်သွင်းခြင်း
        $this->load_dependencies();

        // Hooks များကို စနစ်တကျချမှတ်ခြင်း
        $this->setup_hooks();

        // Component များကို စတင်အသုံးပြုရန်
        $this->init_components();
    }

    /**
     * လိုအပ်သော ဖိုင်များကို တင်သွင်းခြင်း
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPress hooks များကို စနစ်တကျချမှတ်ခြင်း
     */
    private function setup_hooks() {
        // အသက်သွင်းခြင်း/ပိတ်သိမ်းခြင်း
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hooks များ
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Addon component များကို စတင်အသုံးပြုရန်
     */
    private function init_components() {
        // admin pages, models စသည်တို့ကို စတင်အသုံးပြုရန်
    }

    /**
     * Plugin အသက်သွင်းခြင်း
     */
    public function activate() {
        // ကိုယ်ပိုင် table များ ဖန်တီးခြင်း၊ option များ update လုပ်ခြင်း စသည်တို့
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin ပိတ်သိမ်းခြင်း
     */
    public function deactivate() {
        // လိုအပ်ပါက ရှင်းလင်းခြင်း
    }

    /**
     * Checkout ပြီးမြောက်မှုကို ကိုင်တွယ်ခြင်း
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Checkout ပြီးမြောက်သည့်အခါ လုပ်ဆောင်ရမည့် logic
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * ကိုယ်ပိုင် checkout fields များ ထည့်သွင်းခြင်း
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

## Custom Model ဥပမာ

```php
<?php

namespace My_Addon\Models;

/**
 * ကိုယ်ပိုင် Lead model
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Model အမည်
     */
    protected $model = 'lead';

    /**
     * database table ကို သတ်မှတ်ခြင်း
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Company အမည်ကို ရယူခြင်း
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Company အမည်ကို သတ်မှတ်ခြင်း
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Lead ကို Customer အဖြစ် ပြောင်းလဲခြင်း
     */
    public function convert_to_customer($user_data = []) {
        // WordPress user အသစ် ဖန်တီးခြင်း
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite customer အသစ် ဖန်တီးခြင်း
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Lead data များကို customer သို့ ကူးယူခြင်း
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Lead ကို ပြောင်းလဲပြီးကြောင်း အမှတ်အသားပြုခြင်း
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Admin Page ပေါင်းစပ်မှု

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * ကိုယ်ပိုင် admin page
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Page ID
     */
    protected $id = 'my-addon-leads';

    /**
     * Menu နေရာ
     */
    protected $position = 30;

    /**
     * Page ကို စတင်အသုံးပြုရန်
     */
    public function init() {
        // Ultimate Multisite နှင့် မှတ်ပုံတင်ခြင်း
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Admin page ကို မှတ်ပုံတင်ခြင်း
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
     * Page ကို ပြသခြင်း
     */
    public function render() {
        // leads data များကို ရယူခြင်း
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // template ကို ပြသခြင်း
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Addon ကို စမ်းသပ်ခြင်း

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // စမ်းသပ် customer အကောင့် ဖန်တီးခြင်း
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // စမ်းသပ် membership ဖန်တီးခြင်း
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // form submission ကို အတုယူခြင်း
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // data မှန်ကန်စွာ သိမ်းဆည်းထားခြင်း ရှိမရှိ စစ်ဆေးခြင်း
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

## နောက်ထပ် လုပ်ဆောင်ရမည့်အဆင့်များ

- ရရှိနိုင်သော actions နှင့် filters များအတွက် [Hooks Reference](/developer/hooks) ကို ပြန်လည်စစ်ဆေးပါ
- API ပေါင်းစပ်မှုအတွက် [REST API Overview](/developer/rest-api/overview) ကို စစ်ဆေးပါ
- စတင်အသုံးပြုရန်အတွက် [Addon Template](/addons/addon-template) ကို အသုံးပြုပါ
