---
title: Att komma igång med utveckling av tillägg
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Utveckla ett Addon

## Addon-struktur

```
my-addon/
├── my-addon.php                 # Huvudplugin-fil
├── inc/
│   ├── class-my-addon.php       # Huvudaddon-klass
│   ├── admin-pages/             # Admin-gränssnitt
│   ├── models/                  # Anpassade datamodeller
│   └── integrations/            # Integrationer med tredjepart
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Mallfilerna
```

## Mall för huvudaddon-fil

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Anpassat addon för Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Avbryt om filen nås direkt
defined('ABSPATH') || exit;

// Definiera konstanter
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Kontrollera om Ultimate Multisite är aktivt
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Mitt Addon kräver att Ultimate Multisite är installerat och aktiverat.';
            echo '</p></div>';
        });
        return;
    }

    // Initialisera addon
    My_Addon::get_instance();
});

/**
 * Huvudaddon-klass
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Initialiserar addon
     */
    public function init() {
        // Ladda beroenden
        $this->load_dependencies();

        // Ställ in hooks
        $this->setup_hooks();

        // Initialisera komponenter
        $this->init_components();
    }

    /**
     * Laddar nödvändiga filer
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Ställer in WordPress hooks
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
     * Initialiserar addon-komponenter
     */
    private function init_components() {
        // Initialisera admin-sidor, modeller, etc.
    }

    /**
     * Plugin-aktivering
     */
    public function activate() {
        // Skapa anpassade tabeller, ställa in alternativ, etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin-deaktivering
     */
    public function deactivate() {
        // Rensa upp vid behov
    }

    /**
     * Hanterar slutförd kassaaffär
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Anpassad logik när kassan är klar
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Lägger till anpassade fält i kassan
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Företagets storlek',
            'options' => [
                'small' => '1-10 anställda',
                'medium' => '11-100 anställda',
                'large' => '100+ anställda'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Exempel på anpassad modell

```php
<?php

namespace My_Addon\Models;

/**
 * Anpassad Lead-modell
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Modellnamn
     */
    protected $model = 'lead';

    /**
     * Ställer in databasbordet
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Hämtar företagsnamnet
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Sätter företagsnamnet
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Konverterar lead till kund
     */
    public function convert_to_customer($user_data = []) {
        // Skapa WordPress-användare
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Skapa Ultimate Multisite-kund
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopiera lead-data till kunden
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Märk lead som konverterad
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integration av admin-sida

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Anpassad admin-sida
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Sid-ID
     */
    protected $id = 'my-addon-leads';

    /**
     * Plats i menyn
     */
    protected $position = 30;

    /**
     * Initialiserar sidan
     */
    public function init() {
        // Registrera med Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registrerar admin-sidan
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
     * Renderar sidan
     */
    public function render() {
        // Hämta lead-data
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderar mall
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Hantera leads', 'my-addon')
        ]);
    }
}
```

## Testa ditt Addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Skapa testkund
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Skapa testmedlemskap
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simulera formulärinlämning
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verifiera att data sparades
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

## Nästa steg

- Gå igenom [Hooks Reference](/developer/hooks) för tillgängliga actions och filters
- Kolla [REST API Overview](/developer/rest-api/overview) för API-integration
- Använd [Addon Template](/addons/addon-template) som en startskiva
