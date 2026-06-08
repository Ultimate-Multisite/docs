---
title: Začátky vývoje addonů
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Vývoj Addonů

## Struktura Addonu

```
my-addon/
├── my-addon.php                 # Hlavní soubor pluginu
├── inc/
│   ├── class-my-addon.php       # Hlavní třída addonu
│   ├── admin-pages/             # Administrační rozhraní
│   ├── models/                  # Vlastní modely dat
│   └── integrations/            # Integrace třetích stran
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Šablony
```

## Šablona hlavního souboru Addonu

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

// Ukončení, pokud je přístup zvenčí
defined('ABSPATH') || exit;

// Definování konstant
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Kontrola, zda je Ultimate Multisite aktivní
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon vyžaduje, aby byl Ultimate Multisite nainstalován a aktivován.';
            echo '</p></div>';
        });
        return;
    }

    // Inicializace addonu
    My_Addon::get_instance();
});

/**
 * Hlavní třída addonu
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inicializace addonu
     */
    public function init() {
        // Načtení závislostí
        $this->load_dependencies();

        // Nastavení hooků
        $this->setup_hooks();

        // Inicializace komponent
        $this->init_components();
    }

    /**
     * Načtení požadovaných souborů
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Nastavení hooků WordPressu
     */
    private function setup_hooks() {
        // Aktivace/deaktivace
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hooky Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inicializace komponent addonu
     */
    private function init_components() {
        // Inicializace admin stránek, modelů atd.
    }

    /**
     * Aktivace pluginu
     */
    public function activate() {
        // Vytvoření vlastních tabulek, nastavení možností atd.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Deaktivace pluginu
     */
    public function deactivate() {
        // Úklid, pokud je to nutné
    }

    /**
     * Zpracování dokončení objednávky
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Vlastní logika při dokončení objednávky
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Přidání vlastních polí do checkoutu
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Velikost společnosti',
            'options' => [
                'small' => '1–10 zaměstnanců',
                'medium' => '11–100 zaměstnanců',
                'large' => '100+ zaměstnanců'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Příklad vlastního modelu

```php
<?php

namespace My_Addon\Models;

/**
 * Vlastní model pro leads
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Název modelu
     */
    protected $model = 'lead';

    /**
     * Nastavení tabulky v databázi
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Získání názvu společnosti
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Nastavení názvu společnosti
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Přeměna leadu na zákazníka
     */
    public function convert_to_customer($user_data = []) {
        // Vytvoření uživatele WordPressu
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Vytvoření zákazníka Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopírování dat leadu na zákazníka
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Označení leadu jako převedeného
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integrace administrátorského panelu

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Vlastní administrátorská stránka
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID stránky
     */
    protected $id = 'my-addon-leads';

    /**
     * Pozice v menu
     */
    protected $position = 30;

    /**
     * Inicializace stránky
     */
    public function init() {
        // Registrace u Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registrace administrátorského panelu
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
     * Renderování stránky
     */
    public function render() {
        // Získání dat leadů
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderování šablony
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Testování vašeho Addonu

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Vytvoření testovacího zákazníka
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Vytvoření testovacího členství
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simulace odeslání formuláře
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Ověření, že data byla uložena
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

## Další kroky

- Pro přehled dostupných akcí a filtrů zkontrolujte [Hooks Reference](/developer/hooks)
- Pro integraci API zkontrolujte [REST API Overview](/developer/rest-api/overview)
- Použijte [Addon Template](/addons/addon-template) jako výchozí základ
