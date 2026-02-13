---
title: Einführung in die Addon-Entwicklung
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon-Entwicklung

## Addon-Struktur

```
my-addon/
├── my-addon.php                 # Haupt-Plugin-Datei
├── inc/
│   ├── class-my-addon.php       # Haupt-Addon-Klasse
│   ├── admin-pages/             # Admin-Oberfläche
│   ├── models/                  # Benutzerdefinierte Datenmodelle
│   └── integrations/            # Drittanbieter-Integrationen
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Template-Dateien
```

## Haupt-Addon-Datei-Vorlage

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

// Beenden, wenn direkt aufgerufen
defined('ABSPATH') || exit;

// Konstanten definieren
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Prüfen, ob Ultimate Multisite aktiv ist
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon requires Ultimate Multisite to be installed and activated.';
            echo '</p></div>';
        });
        return;
    }

    // Addon initialisieren
    My_Addon::get_instance();
});

/**
 * Haupt-Addon-Klasse
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Addon initialisieren
     */
    public function init() {
        // Abhängigkeiten laden
        $this->load_dependencies();

        // Hooks einrichten
        $this->setup_hooks();

        // Komponenten initialisieren
        $this->init_components();
    }

    /**
     * Benötigte Dateien laden
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPress-Hooks einrichten
     */
    private function setup_hooks() {
        // Aktivierung/Deaktivierung
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite-Hooks
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Addon-Komponenten initialisieren
     */
    private function init_components() {
        // Komponenten initialisieren, z. B. Admin-Seiten, Modelle, etc.
    }

    /**
     * Plugin-Aktivierung
     */
    public function activate() {
        // Eigene Tabellen erstellen, Optionen setzen, usw.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin-Deaktivierung
     */
    public function deactivate() {
        // Aufräumen falls nötig
    }

    /**
     * Checkout-Abschluss behandeln
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Benutzerdefinierte Logik beim Checkout-Abschluss
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Benutzerdefinierte Checkout-Felder hinzufügen
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

## Beispiel für ein benutzerdefiniertes Modell

```php
<?php

namespace My_Addon\Models;

/**
 * Benutzerdefiniertes Lead-Modell
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Modellname
     */
    protected $model = 'lead';

    /**
     * Datenbanktabelle festlegen
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Firmenname abrufen
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Firmenname setzen
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Lead in Kunde umwandeln
     */
    public function convert_to_customer($user_data = []) {
        // WordPress-Benutzer erstellen
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite-Kunde erstellen
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Lead-Daten zum Kunden kopieren
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Lead als konvertiert markieren
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Admin-Seiten-Integration

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Benutzerdefinierte Admin-Seite
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Seiten-ID
     */
    protected $id = 'my-addon-leads';

    /**
     * Menüposition
     */
    protected $position = 30;

    /**
     * Seite initialisieren
     */
    public function init() {
        // Bei Ultimate Multisite registrieren
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Admin-Seite registrieren
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
     * Seite rendern
     */
    public function render() {
        // Lead-Daten abrufen
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Template rendern
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Ihr Addon testen

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Test-Kunde erstellen
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Test-Mitgliedschaft erstellen
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Formularübermittlung simulieren
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Daten wurden gespeichert
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

## Nächste Schritte

- Überprüfen Sie die [Hooks Reference](/developer/hooks) für verfügbare Aktionen und Filter
- Überprüfen Sie die [REST API Overview](/developer/rest-api/overview) für API-Integration
- Verwenden Sie die [Addon Template](/addons/addon-template) als Ausgangsbasis
