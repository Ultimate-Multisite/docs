---
title: ایڈ آن ڈیولپمنٹ کے ساتھ آغاز کرنا
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon کی تیاری

## Addon کا ڈھانچہ

```
my-addon/
├── my-addon.php                 # مرکزی پلگ ان فائل
├── inc/
│   ├── class-my-addon.php       # مرکزی addon کلاس
│   ├── admin-pages/             # ایڈمن انٹرفیس
│   ├── models/                  # کسٹم ڈیٹا ماڈلز
│   └── integrations/            # تھرڈ پارٹی انٹیگریشنز
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # ٹیمپلیٹ فائلز
```

## مرکزی Addon فائل کا خاکہ

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Ultimate Multisite کے لیے کسٹم Addon
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// اگر براہ راست رسائی کی جائے تو باہر نکل جائیں
defined('ABSPATH') || exit;

// کانسٹنٹس (Constants) کی تعریف کریں
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// چیک کریں کہ کیا Ultimate Multisite فعال ہے
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon کو چلانے کے لیے Ultimate Multisite کا انسٹال اور ایکٹیویٹ ہونا ضروری ہے۔';
            echo '</p></div>';
        });
        return;
    }

    // Addon کو شروع کرنا
    My_Addon::get_instance();
});

/**
 * مرکزی addon کلاس
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Addon کو شروع کرنا
     */
    public function init() {
        // ضروری فائلوں کو لوڈ کرنا
        $this->load_dependencies();

        // hooks سیٹ کرنا
        $this->setup_hooks();

        // اجزاء (components) کو شروع کرنا
        $this->init_components();
    }

    /**
     * ضروری فائلوں کو لوڈ کرنا
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * ورڈپریس hooks سیٹ کرنا
     */
    private function setup_hooks() {
        // ایکٹیویشن/ڈی ایکٹیویشن
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hooks
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Addon کے اجزاء کو شروع کرنا
     */
    private function init_components() {
        // ایڈمن پیجز، ماڈلز وغیرہ کو شروع کرنا
    }

    /**
     * پلگ ان ایکٹیویشن
     */
    public function activate() {
        // کسٹم ٹیبلز بنانا، آپشنز سیٹ کرنا، وغیرہ
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * پلگ ان ڈی ایکٹیویشن
     */
    public function deactivate() {
        // اگر ضرورت ہو تو صفائی (cleanup) کریں
    }

    /**
     * چیک آؤٹ مکمل ہونے کو سنبھالنا
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // جب چیک آؤٹ مکمل ہو جائے تو کسٹم منطق
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * کسٹم چیک آؤٹ فیلڈز شامل کرنا
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

## Custom Model کی مثال

```php
<?php

namespace My_Addon\Models;

/**
 * کسٹم Lead ماڈل
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * ماڈل کا نام
     */
    protected $model = 'lead';

    /**
     * ڈیٹا بیس ٹیبل سیٹ کرنا
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * کمپنی کا نام حاصل کرنا
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * کمپنی کا نام سیٹ کرنا
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Lead کو Customer میں تبدیل کرنا
     */
    public function convert_to_customer($user_data = []) {
        // ورڈپریس یوزر بنانا
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite کا کسٹمر بنانا
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Lead ڈیٹا کو Customer میں کاپی کرنا
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Lead کو کنورٹ شدہ کے طور پر نشان زد کرنا
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Admin Page میں شامل کرنا

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * کسٹم ایڈمن پیج
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * پیج ID
     */
    protected $id = 'my-addon-leads';

    /**
     * مینو کی پوزیشن
     */
    protected $position = 30;

    /**
     * پیج کو شروع کرنا
     */
    public function init() {
        // Ultimate Multisite کے ساتھ رجسٹر کرنا
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * ایڈمن پیج کو رجسٹر کرنا
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
     * پیج کو دکھانا (Render)
     */
    public function render() {
        // Leads ڈیٹا حاصل کرنا
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // ٹیمپلیٹ دکھانا
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## اپنے Addon کا ٹیسٹ کرنا

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // ٹیسٹ کسٹمر بنانا
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // ٹیسٹ ممبرشپ بنانا
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // فارم سبمیشن کی نقل (simulate)
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // تصدیق کرنا کہ ڈیٹا محفوظ ہوا ہے
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

## اگلے اقدامات

- دستیاب actions اور filters کے لیے [Hooks Reference](/developer/hooks) کا جائزہ لیں
- API انٹیگریشن کے لیے [REST API Overview](/developer/rest-api/overview) چیک کریں
- ایک ابتدائی خاکہ (starting scaffold) کے طور پر [Addon Template](/addons/addon-template) استعمال کریں
