---
title: Introducere în Dezvoltarea Addon-urilor
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Dezvoltarea Addon-urilor

## Structura Addon-ului

```
my-addon/
├── my-addon.php                 # Fișierul principal al plugin-ului
├── inc/
│   ├── class-my-addon.php       # Clasa principală a addon-ului
│   ├── admin-pages/             # Interfața de administrare
│   ├── models/                  # Modele de date personalizate
│   └── integrations/            # Integrari cu terțe părți
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Fișiere de șablon
```

## Template pentru Fișierul Principal al Addon-ului

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Addon personalizat pentru Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Ieșirea dacă este accesat direct
defined('ABSPATH') || exit;

// Definirea constantelor
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Verifică dacă Ultimate Multisite este activ
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Addon-ul Meu necesită ca Ultimate Multisite să fie instalat și activat.';
            echo '</p></div>';
        });
        return;
    }

    // Inițializarea addon-ului
    My_Addon::get_instance();
});

/**
 * Clasa principală a addon-ului
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inițializarea addon-ului
     */
    public function init() {
        // Încărcarea dependențelor
        $this->load_dependencies();

        // Configurarea hook-urilor
        $this->setup_hooks();

        // Inițializarea componentelor
        $this->init_components();
    }

    /**
     * Încărcarea fișierelor necesare
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Configurarea hook-urilor WordPress
     */
    private function setup_hooks() {
        // Activare/dezactivare
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hook-uri Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inițializarea componentelor addon-ului
     */
    private function init_components() {
        // Inițializarea paginilor de administrare, modelelor etc.
    }

    /**
     * Activarea plugin-ului
     */
    public function activate() {
        // Crearea tabelelor personalizate, setarea opțiunilor etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Dezactivarea plugin-ului
     */
    public function deactivate() {
        // Curățarea dacă este necesar
    }

    /**
     * Gestionarea finalizării checkout-ului
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Logica personalizată când se finalizează checkout-ul
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Adăugarea câmpurilor personalizate de checkout
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Dimensiunea Companiei',
            'options' => [
                'small' => '1-10 angajați',
                'medium' => '11-100 angajați',
                'large' => '100+ angajați'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Exemplu de Model Personalizat

```php
<?php

namespace My_Addon\Models;

/**
 * Model de Lead personalizat
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Numele modelului
     */
    protected $model = 'lead';

    /**
     * Setarea tabelului de bază de date
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Obține numele companiei
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Setarea numelui companiei
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Convertirea unui lead în client
     */
    public function convert_to_customer($user_data = []) {
        // Crearea utilizatorului WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Crearea clientului Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Copierea datelor lead-ului către client
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Marcarea lead-ului ca convertit
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integrarea Paginii de Administrare

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Pagina de administrare personalizată
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID-ul paginii
     */
    protected $id = 'my-addon-leads';

    /**
     * Poziția în meniu
     */
    protected $position = 30;

    /**
     * Inițializarea paginii
     */
    public function init() {
        // Înregistrarea la Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Înregistrarea paginii de administrare
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
     * Renderarea paginii
     */
    public function render() {
        // Obținerea datelor lead-urilor
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderarea șablonului
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Testarea Addon-ului

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Crearea unui client de test
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Crearea unei aderări de test
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simularea trimiterii formularului
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verificarea că datele au fost salvate
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

## Pași Următori

- Revizuiți [Referința Hook-urilor](/developer/hooks) pentru acțiuni și filtre disponibile
- Consultați [Prezentarea API-ului REST](/developer/rest-api/overview) pentru integrarea API
- Folosiți [Template-ul Addon-ului](/addons/addon-template) ca scaffold de pornire
