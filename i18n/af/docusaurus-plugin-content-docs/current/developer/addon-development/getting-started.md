---
title: Begin met Addon-ontwikkeling
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon Ontwikkeling

## Addon Struktuur

```
my-addon/
├── my-addon.php                 # Hoof-plugin bestand
├── inc/
│   ├── class-my-addon.php       # Hoof-addon klas
│   ├── admin-pages/             # Admin-koppelvlak
│   ├── models/                  # Pasgemaakte data-modelle
│   └── integrations/            # Derde-partye integrasies
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Sjabloonbestanke
```

## Hoof-Addon Bestand Sjabloon

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

// Verlaat as dit direk toegspan word
defined('ABSPATH') || exit;

// Definieer konstantes
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Kontroleer of Ultimate Multisite aktief is
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon benodig Ultimate Multisite om geïnstalleer en geaktiveer te wees.';
            echo '</p></div>';
        });
        return;
    }

    // Initialiseer addon
    My_Addon::get_instance();
});

/**
 * Hoof-addon klas
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Initialiseer die addon
     */
    public function init() {
        // Laai afhanklikhede
        $this->load_dependencies();

        // Stel hooks op
        $this->setup_hooks();

        // Initialiseer komponente
        $this->init_components();
    }

    /**
     * Laai vereiste bestanke
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Stel WordPress hooks op
     */
    private function setup_hooks() {
        // Aktivering/deaktivering
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hooks
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Initialiseer addon komponente
     */
    private function init_components() {
        // Initialiseer admin bladsye, modelle, ens.
    }

    /**
     * Plugin aktivering
     */
    public function activate() {
        // Skep pasgemaakte tabelle, stel opsies, ens.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin deaktivering
     */
    public function deactivate() {
        // Skoonmaak indien nodig
    }

    /**
     * Hanteer uitcheck-voltooiing
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Pasgemaakte logika wanneer die uitcheck voltooi word
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Voeg pasgemaakte uitcheck velde by
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Maat van Maatskappy',
            'options' => [
                'small' => '1-10 werknemers',
                'medium' => '11-100 werknemers',
                'large' => '100+ werknemers'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Pasgemaakte Model Voorbeeld

```php
<?php

namespace My_Addon\Models;

/**
 * Pasgemaakte Loodmodel
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Model naam
     */
    protected $model = 'lead';

    /**
     * Stel die databasetabel
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Kry die maatskappy se naam
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Stel die maatskappy se naam
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Skakel lood na kliënt
     */
    public function convert_to_customer($user_data = []) {
        // Skep WordPress gebruiker
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Skep Ultimate Multisite kliënt
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopieer looddata na kliënt
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Merk lood as geskakel
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Admin Bladsy Integrasie

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Pasgemaakte admin bladsy
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Bladsy ID
     */
    protected $id = 'my-addon-leads';

    /**
     * Menu posisie
     */
    protected $position = 30;

    /**
     * Initialiseer bladsy
     */
    public function init() {
        // Registreer by Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registreer die admin bladsy
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
     * Render die bladsy
     */
    public function render() {
        // Kry looddata
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Render sjabloon
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Toetsing van Jou Addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Skep toetsklant
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Skep toetslidmaatskap
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simuleer form indiening
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verifieer dat data gestoor is
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

## Volgende Stappe

- Raadpleeg die [Hooks Reference](/developer/hooks) vir beskikbare aksies en filters
- Kyk na die [REST API Overview](/developer/rest-api/overview) vir API-integrasie
- Gebruik die [Addon Template](/addons/addon-template) as 'n begin-skaffolding
