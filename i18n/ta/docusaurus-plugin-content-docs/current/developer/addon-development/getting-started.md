---
title: Addon மேம்பாட்டைத் தொடங்குதல்
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon உருவாக்குதல்

## Addon அமைப்பு

```
my-addon/
├── my-addon.php                 # பிரதான plugin கோப்பு
├── inc/
│   ├── class-my-addon.php       # பிரதான addon class
│   ├── admin-pages/             # நிர்வாக இடைமுகம் (Admin interface)
│   ├── models/                  # தனிப்பயன் தரவு மாதிரிகள் (Custom data models)
│   └── integrations/            # மூன்றாம் தரப்பு ஒருங்கிணைப்புகள் (Third-party integrations)
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Template கோப்புகள்
```

## பிரதான Addon கோப்பு மாதிரி

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Ultimate Multisite-க்கான தனிப்பயன் addon
 * Version: 1.0.0
 * Author: உங்கள் பெயர்
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// நேரடியாக அணுகப்பட்டால் வெளியேறவும்
defined('ABSPATH') || exit;

// மாறிலிகளை வரையறுக்கவும் (Define constants)
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite செயல்படுகிறதா எனச் சரிபார்க்கவும்
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon செயல்பட Ultimate Multisite நிறுவப்பட்டு செயல்படுத்தப்பட்டிருக்க வேண்டும்.';
            echo '</p></div>';
        });
        return;
    }

    // addon-ஐ துவக்குதல் (Initialize addon)
    My_Addon::get_instance();
});

/**
 * பிரதான addon class
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * addon-ஐ துவக்குதல்
     */
    public function init() {
        // சார்புகளை ஏற்றவும் (Load dependencies)
        $this->load_dependencies();

        // hooks-களை அமைக்கவும் (Setup hooks)
        $this->setup_hooks();

        // கூறுகளை துவக்குதல் (Initialize components)
        $this->init_components();
    }

    /**
     * தேவையான கோப்புகளை ஏற்றவும்
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPress hooks-களை அமைக்கவும்
     */
    private function setup_hooks() {
        // செயல்படுத்தல்/செயல்படுத்தல் நீக்கம் (Activation/deactivation)
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hooks
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * addon கூறுகளை துவக்குதல்
     */
    private function init_components() {
        // நிர்வாகப் பக்கங்கள், மாதிரிகள் (models) போன்றவற்றை துவக்குங்கள்.
    }

    /**
     * Plugin செயல்படுத்தல் (Plugin activation)
     */
    public function activate() {
        // தனிப்பயன் அட்டவணைகளை உருவாக்கவும், விருப்பங்களை அமைக்கவும்.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin செயல்படுத்தலை நீக்குதல் (Plugin deactivation)
     */
    public function deactivate() {
        // தேவைப்பட்டால் சுத்தம் செய்யவும் (Cleanup if needed)
    }

    /**
     * checkout நிறைவு செய்வதைக் கையாளுதல்
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // checkout நிறைவு செய்யும்போது தனிப்பயன் தர்க்கம் (Custom logic when checkout completes)
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * தனிப்பயன் checkout புலங்களைச் சேர்த்தல்
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'நிறுவனத்தின் அளவு (Company Size)',
            'options' => [
                'small' => '1-10 ஊழியர்கள்',
                'medium' => '11-100 ஊழியர்கள்',
                'large' => '100+ ஊழியர்கள்'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## தனிப்பயன் மாதிரி உதாரணம்

```php
<?php

namespace My_Addon\Models;

/**
 * தனிப்பயன் Lead மாதிரி
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * மாதிரி பெயர்
     */
    protected $model = 'lead';

    /**
     * தரவுத்தள அட்டவணையை அமைக்கவும்
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * நிறுவனத்தின் பெயரைப் பெறவும்
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * நிறுவனத்தின் பெயரை அமைக்கவும்
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * lead-ஐ வாடிக்கையாளராக மாற்றுதல்
     */
    public function convert_to_customer($user_data = []) {
        // WordPress பயனரை உருவாக்கவும்
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite வாடிக்கையாளரை உருவாக்கவும்
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // lead தரவை வாடிக்கையாளருக்கு நகலெடுக்கவும்
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // lead-ஐ மாற்றப்பட்டதாக குறிக்கவும்
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## நிர்வாகப் பக்க ஒருங்கிணைப்பு

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * தனிப்பயன் நிர்வாகப் பக்கம்
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * பக்கம் ID
     */
    protected $id = 'my-addon-leads';

    /**
     * மெனு நிலை (Menu position)
     */
    protected $position = 30;

    /**
     * பக்கத்தை துவக்குதல்
     */
    public function init() {
        // Ultimate Multisite உடன் பதிவு செய்யவும்
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * நிர்வாகப் பக்கத்தைப் பதிவு செய்தல்
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
     * பக்கத்தை ரெண்டர் செய்தல் (Render the page)
     */
    public function render() {
        // leads தரவைப் பெறவும்
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // template-ஐ ரெண்டர் செய்யவும்
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## உங்கள் Addon-ஐ சோதித்தல்

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // சோதனை வாடிக்கையாளரை உருவாக்கவும்
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // சோதனை உறுப்பினர் நிலையை உருவாக்கவும்
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // form சமர்ப்பிப்பை உருவகப்படுத்தவும் (Simulate form submission)
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // தரவு சேமிக்கப்பட்டதா எனச் சரிபார்க்கவும்
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

## அடுத்த கட்டங்கள்

- கிடைக்கும் actions மற்றும் filters-களுக்காக [Hooks Reference](/developer/hooks)-ஐ மதிப்பாய்வு செய்யவும்
- API ஒருங்கிணைப்பிற்காக [REST API Overview](/developer/rest-api/overview)-ஐ சரிபார்க்கவும்
- தொடக்க scaffold ஆக [Addon Template](/addons/addon-template)-ஐப் பயன்படுத்தவும்
