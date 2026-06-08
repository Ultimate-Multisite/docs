---
title: Uvod u razvoj dodataka
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Razvoj Addona

## Struktura Addona

```
my-addon/
├── my-addon.php                 # Glavna plugin datoteka
├── inc/
│   ├── class-my-addon.php       # Glavna Addon klasa
│   ├── admin-pages/             # Admin interfejs
│   ├── models/                  # Kustom data modeli
│   └── integrations/            # Integracije sa trećim klijentima
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Šablonski fajlovi
```

## Šablon Glavne Addon Datoteke

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Kustom Addon za Ultimate Multisite
 * Version: 1.0.0
 * Author: Vaše Ime
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Izlaz ako je direktno pristupano
defined('ABSPATH') || exit;

// Definisanje konstanti
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Provjera da li je Ultimate Multisite aktivan
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Moj Addon zahtijeva da je Ultimate Multisite instaliran i aktivan.';
            echo '</p></div>';
        });
        return;
    }

    // Inicijalizacija addona
    My_Addon::get_instance();
});

/**
 * Glavna Addon klasa
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inicijalizacija addona
     */
    public function init() {
        // Učitavanje zavisnosti
        $this->load_dependencies();

        // Postavljanje hookova
        $this->setup_hooks();

        // Inicijalizacija komponenti
        $this->init_components();
    }

    /**
     * Učitavanje potrebnih fajlova
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Postavljanje WordPress hookova
     */
    private function setup_hooks() {
        // Aktivacija/deaktivacija
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hookovi
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inicijalizacija addon komponenti
     */
    private function init_components() {
        // Inicijalizacija admin stranica, modela, itd.
    }

    /**
     * Aktivacija plugin-a
     */
    public function activate() {
        // Kreiranje kustom tabela, postavljanje opcija, itd.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Deaktivacija plugin-a
     */
    public function deactivate() {
        // Čišćenje ako je potrebno
    }

    /**
     * Obrada završetka checkout-a
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Kustom logika kada se checkout završi
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Dodavanje kustom polja za checkout
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Veličina kompanije',
            'options' => [
                'small' => '1-10 zaposlenih',
                'medium' => '11-100 zaposlenih',
                'large' => '100+ zaposlenih'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Primjer Kustom Modela

```php
<?php

namespace My_Addon\Models;

/**
 * Kustom Lead model
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Ime modela
     */
    protected $model = 'lead';

    /**
     * Postavljanje baze podataka tabele
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Dohvaćanje imena kompanije
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Postavljanje imena kompanije
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Konverzija lead-a u klijenta
     */
    public function convert_to_customer($user_data = []) {
        // Kreiranje korisnika WordPress-a
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Kreiranje klijenta Ultimate Multisite-a
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopiranje podataka lead-a na klijenta
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Označavanje lead-a kao konvertovanog
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integracija Admin Stranice

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Kustom admin stranica
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID stranice
     */
    protected $id = 'my-addon-leads';

    /**
     * Pozicija u meniju
     */
    protected $position = 30;

    /**
     * Inicijalizacija stranice
     */
    public function init() {
        // Registracija sa Ultimate Multisite-om
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registracija admin stranice
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
     * Renderovanje stranice
     */
    public function render() {
        // Dohvaćanje podataka lead-a
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderovanje šablona
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Testiranje Vašeg Addona

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Kreiranje test klijenta
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Kreiranje test članstva
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simulacija slanja forme
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verifikacija da su podaci sačuvani
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

## Sljedeći Koraci

- Pregledajte [Hooks Reference](/developer/hooks) za dostupne akcije i filtere
- Pročitajte [REST API Overview](/developer/rest-api/overview) za integraciju API-ja
- Koristite [Addon Template](/addons/addon-template) kao početni okvir
