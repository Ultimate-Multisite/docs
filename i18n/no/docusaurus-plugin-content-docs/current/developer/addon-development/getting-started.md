---
title: Å komme i gang med utvikling av tillegg
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Utvikling av Addons

## Addon-struktur

```
my-addon/
├── my-addon.php                 # Hovedplugin-fil
├── inc/
│   ├── class-my-addon.php       # Hovedaddon-klasse
│   ├── admin-pages/             # Admin-grensesnitt
│   ├── models/                  # Tilpassede datamodeller
│   └── integrations/            # Integrasjoner med tredjeparter
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Malfiler
```

## Mal for hovedaddon-fil

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

// Avslutt hvis filen aksesseres direkte
defined('ABSPATH') || exit;

// Definer konstanter
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Sjekk om Ultimate Multisite er aktivt
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon krever at Ultimate Multisite er installert og aktivert.';
            echo '</p></div>';
        });
        return;
    }

    // Initialiser addon
    My_Addon::get_instance();
});

/**
 * Hovedaddon-klasse
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Initialiserer addon
     */
    public function init() {
        // Laster avhengigheter
        $this->load_dependencies();

        // Setter opp hooks
        $this->setup_hooks();

        // Initialiserer komponenter
        $this->init_components();
    }

    /**
     * Laster påkrevde filer
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Setter opp WordPress hooks
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
     * Initialiserer addon-komponenter
     */
    private function init_components() {
        // Initialiserer admin-sider, modeller, etc.
    }

    /**
     * Plugin-aktivering
     */
    public function activate() {
        // Oppretter tilpassede tabeller, setter inn alternativer, etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin-deaktivering
     */
    public function deactivate() {
        // Rydd opp om nødvendig
    }

    /**
     * Håndterer fullført kassekjøp
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Tilpasset logikk når kassekjøpet er fullført
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Legger til tilpassede kassekjøpsfelt
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Virksomhetsstørrelse',
            'options' => [
                'small' => '1-10 ansatte',
                'medium' => '11-100 ansatte',
                'large' => '100+ ansatte'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Eksempel på tilpasset modell

```php
<?php

namespace My_Addon\Models;

/**
 * Tilpasset Lead-modell
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Modellnavn
     */
    protected $model = 'lead';

    /**
     * Setter opp databasenavnet
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Henter selskapets navn
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Setter selskapets navn
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Konverterer lead til kunde
     */
    public function convert_to_customer($user_data = []) {
        // Oppretter WordPress-bruker
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Oppretter Ultimate Multisite-kunde
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopierer lead-data til kunden
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Marker lead som konvertert
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integrasjon i admin-side

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Tilpasset admin-side
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Side-ID
     */
    protected $id = 'my-addon-leads';

    /**
     * Plassering i menyen
     */
    protected $position = 30;

    /**
     * Initialiserer siden
     */
    public function init() {
        // Registrerer med Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registrerer admin-siden
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
     * Viser siden
     */
    public function render() {
        // Henter lead-data
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Viser mal
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Administrer Leads', 'my-addon')
        ]);
    }
}
```

## Testing av Addon-et ditt

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Oppretter testkunde
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Oppretter testmedlemskap
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simulerer skjema-innlevering
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verifiser at data ble lagret
        $saved_value = $this->customer->get_meta('company_size');
        $this->assertEquals('medium', $saved_value);
    }

    private function create_test_plan() {
        return wu_create_product([
            'name' => 'Testplan',
            'type' => 'plan',
            'price' => 50,
            'duration' => 1,
            'duration_unit' => 'month'
        ])->get_id();
    }
}
```

## Neste skritt

- Gå gjennom [Hooks Reference](/developer/hooks) for tilgjengelige actions og filters
- Sjekk [REST API Overview](/developer/rest-api/overview) for API-integrasjon
- Bruk [Addon Template](/addons/addon-template) som et utgangspunkt
