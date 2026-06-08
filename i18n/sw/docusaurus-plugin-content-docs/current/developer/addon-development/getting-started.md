---
title: Kuanza na Uendelezaji wa Ziada (Addon Development)
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Kuunda Kiongeza (Addon Development)

## Muundo wa Kiongeza (Addon Structure)

```
my-addon/
├── my-addon.php                 # Faili kuu la plugin
├── inc/
│   ├── class-my-addon.php       # Class kuu ya kiongeza
│   ├── admin-pages/             # Vipengele vya kiutawala (Admin interface)
│   ├── models/                  # Mifumo ya data maalum (Custom data models)
│   └── integrations/            # Kuunganisha na huduma za nje (Third-party integrations)
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Faili za muundo (Template files)
```

## Mfumo wa Faili Kuu wa Kiongeza (Main Addon File Template)

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

// Itapofika hapa moja kwa moja
defined('ABSPATH') || exit;

// Kubainisha vigezo (Define constants)
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Angalia kama Ultimate Multisite imefanya kazi
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon inahitaji Ultimate Multisite iwe imewekwa na kuwasha.';
            echo '</p></div>';
        });
        return;
    }

    // Anzisha kiongeza
    My_Addon::get_instance();
});

/**
 * Class kuu ya kiongeza
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Anzisha kiongeza
     */
    public function init() {
        // Pakia vyanzo vinavyohitajika (Load dependencies)
        $this->load_dependencies();

        // Weka upangaji wa hooks
        $this->setup_hooks();

        // Anzisha vipengele (Initialize components)
        $this->init_components();
    }

    /**
     * Pakia faili zinazohitajika
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Weka upangaji wa hooks za WordPress
     */
    private function setup_hooks() {
        // Kuwasha/Kizima
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hooks za Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Anzisha vipengele vya kiongeza
     */
    private function init_components() {
        // Anzisha admin pages, models, n.k.
    }

    /**
     * Kuwasha plugin
     */
    public function activate() {
        // Tengeneza meza maalum, weka options, n.k.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Kuzima plugin
     */
    public function deactivate() {
        // Safisha kama inahitajika
    }

    /**
     * Kushughulikia kukamilika kwa malipo (checkout)
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Mantiki maalum wakati malipo yanakapokamilika
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Kuongeza sehemu maalum za malipo
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Ukubwa wa Kampuni',
            'options' => [
                'small' => '1-10 wafanyakazi',
                'medium' => '11-100 wafanyakazi',
                'large' => '100+ wafanyakazi'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Mfano wa Mfumo wa Data Maalum (Custom Model Example)

```php
<?php

namespace My_Addon\Models;

/**
 * Model ya Leads maalum
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Jina la model
     */
    protected $model = 'lead';

    /**
     * Weka jina la meza ya database
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Pata jina la kampuni
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Weka jina la kampuni
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Geuza lead kuwa mteja
     */
    public function convert_to_customer($user_data = []) {
        // Tengeneza mtumiaji wa WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Tengeneza mteja wa Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Nakili data ya lead kwa mteja
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Weka hadhi ya lead kuwa imetungwa
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Kuunganisha Ukurasa wa Kiutawala (Admin Page Integration)

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Ukurasa wa kiutawala maalum
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID ya ukurasa
     */
    protected $id = 'my-addon-leads';

    /**
     * Nafasi ya menyu
     */
    protected $position = 30;

    /**
     * Anzisha ukurasa
     */
    public function init() {
        // Jisajili na Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Jisajili ukurasa wa kiutawala
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
     * Onyesha ukurasa
     */
    public function render() {
        // Pata data za leads
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Onyesha template
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Kujaribu Kiongeza Chako (Testing Your Addon)

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Tengeneza mteja wa majaribio
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Tengeneza ushirikishwaji wa majaribio
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Anza kuiga kutuma fomu
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Thibitisha kwamba data imehifadhiwa
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

## Hatua Zijazo (Next Steps)

- Pitia [Hooks Reference](/developer/hooks) kwa ajili ya actions na filters zilizopo
- Angalia [REST API Overview](/developer/rest-api/overview) kwa ajili ya kuunganisha API
- Tumia [Addon Template](/addons/addon-template) kama mfumo wa kuanzia
