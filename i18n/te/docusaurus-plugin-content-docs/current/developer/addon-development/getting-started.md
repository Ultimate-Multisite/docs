---
title: Addon Development తో ప్రారంభించడం
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon అభివృద్ధి

## Addon నిర్మాణం (Addon Structure)

```
my-addon/
├── my-addon.php                 # ప్రధాన plugin ఫైల్
├── inc/
│   ├── class-my-addon.php       # ప్రధాన addon class
│   ├── admin-pages/             # అడ్మిన్ ఇంటర్‌ఫేస్
│   ├── models/                  # కస్టమ్ డేటా మోడల్స్
│   └── integrations/            # థర్డ్-పార్టీ ఇంటిగ్రేషన్స్
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # టెంప్లేట్ ఫైల్స్
```

## ప్రధాన Addon ఫైల్ టెంప్లేట్ (Main Addon File Template)

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Ultimate Multisite కోసం కస్టమ్ addon
 * Version: 1.0.0
 * Author: మీ పేరు
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// నేరుగా యాక్సెస్ చేస్తే ఆపుతుంది
defined('ABSPATH') || exit;

// స్థిరాంకాలు (constants) నిర్వచించడం
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite యాక్టివ్‌గా ఉందో లేదో తనిఖీ చేయండి
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'మా Addon కి Ultimate Multisite ఇన్‌స్టాల్ చేసి, యాక్టివేట్ చేయబడి ఉండాలి.';
            echo '</p></div>';
        });
        return;
    }

    // addon ను ప్రారంభించడం (Initialize addon)
    My_Addon::get_instance();
});

/**
 * ప్రధాన addon class
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * addon ను ప్రారంభించడం
     */
    public function init() {
        // డిపెండెన్సీలను లోడ్ చేయడం
        $this->load_dependencies();

        // హుక్స్ (hooks) సెటప్ చేయడం
        $this->setup_hooks();

        // కాంపోనెంట్లను ప్రారంభించడం
        $this->init_components();
    }

    /**
     * అవసరమైన ఫైళ్లను లోడ్ చేయడం
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPress హుక్స్ సెటప్ చేయడం
     */
    private function setup_hooks() {
        // యాక్టివేషన్/డియాక్టివేషన్
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite హుక్స్
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * addon కాంపోనెంట్లను ప్రారంభించడం
     */
    private function init_components() {
        // అడ్మిన్ పేజీలు, మోడల్స్ మొదలైన వాటిని ప్రారంభించండి.
    }

    /**
     * Plugin యాక్టివేషన్
     */
    public function activate() {
        // కస్టమ్ టేబుల్స్ సృష్టించడం, ఆప్షన్స్ సెట్ చేయడం, మొదలైనవి.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin డియాక్టివేషన్
     */
    public function deactivate() {
        // అవసరమైతే క్లీనప్ చేయండి
    }

    /**
     * చెక్అవుట్ పూర్తి అయినప్పుడు నిర్వహించడం
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // చెక్అవుట్ పూర్తయినప్పుడు కస్టమ్ లాజిక్
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * కస్టమ్ చెక్అవుట్ ఫీల్డ్‌లను జోడించడం
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'కంపెనీ పరిమాణం',
            'options' => [
                'small' => '1-10 ఉద్యోగులు',
                'medium' => '11-100 ఉద్యోగులు',
                'large' => '100+ ఉద్యోగులు'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## కస్టమ్ మోడల్ ఉదాహరణ (Custom Model Example)

```php
<?php

namespace My_Addon\Models;

/**
 * కస్టమ్ Lead మోడల్
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * మోడల్ పేరు
     */
    protected $model = 'lead';

    /**
     * డేటాబేస్ టేబుల్‌ను సెట్ చేయడం
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * కంపెనీ పేరు పొందడం
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * కంపెనీ పేరు సెట్ చేయడం
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Lead ను కస్టమర్‌గా మార్చడం (Convert lead to customer)
     */
    public function convert_to_customer($user_data = []) {
        // WordPress యూజర్‌ను సృష్టించడం
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite కస్టమర్‌ను సృష్టించడం
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Lead డేటాను కస్టమర్‌కు కాపీ చేయడం
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Lead ను మార్చబడినట్లుగా (converted) గుర్తించడం
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## అడ్మిన్ పేజీ ఇంటిగ్రేషన్ (Admin Page Integration)

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * కస్టమ్ అడ్మిన్ పేజీ
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * పేజీ ID
     */
    protected $id = 'my-addon-leads';

    /**
     * మెనూ స్థానం
     */
    protected $position = 30;

    /**
     * పేజీని ప్రారంభించడం
     */
    public function init() {
        // Ultimate Multisite తో రిజిస్టర్ చేయడం
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * అడ్మిన్ పేజీని రిజిస్టర్ చేయడం
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
     * పేజీని రెండర్ చేయడం
     */
    public function render() {
        // leads డేటాను పొందడం
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // టెంప్లేట్‌ను రెండర్ చేయడం
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## మీ Addon ను పరీక్షించడం (Testing Your Addon)

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // టెస్ట్ కస్టమర్‌ను సృష్టించడం
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // టెస్ట్ membership ను సృష్టించడం
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // ఫారం సబ్మిషన్‌ను అనుకరించడం (Simulate form submission)
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // డేటా సేవ్ అయ్యిందో లేదో ధృవీకరించడం
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

## తదుపరి దశలు (Next Steps)

- అందుబాటులో ఉన్న actions మరియు filters కోసం [Hooks Reference](/developer/hooks) ను సమీక్షించండి
- API ఇంటిగ్రేషన్ కోసం [REST API Overview](/developer/rest-api/overview) ను తనిఖీ చేయండి
- ప్రారంభ స్కాఫోల్డ్‌గా [Addon Template](/addons/addon-template) ను ఉపయోగించండి
