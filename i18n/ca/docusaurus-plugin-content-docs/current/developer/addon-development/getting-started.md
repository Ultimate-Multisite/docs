---
title: Com començar amb el desenvolupament d'addons
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Desenvolupament d'Addons

## Estructura de l'Addon

```
my-addon/
├── my-addon.php                 # Fitxer principal del plugin
├── inc/
│   ├── class-my-addon.php       # Classe principal de l'addon
│   ├── admin-pages/             # Interfície d'administració
│   ├── models/                  # Models de dades personalitzats
│   └── integrations/            # Integracions de tercers
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Fitxers de plantilla
```

## Plantilla del Fitxer Principal de l'Addon

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Addon personalitzat per Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Sortir si s'accessa directament
defined('ABSPATH') || exit;

// Definir constants
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Comprovar si Ultimate Multisite està actiu
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon requereix que Ultimate Multisite estigui instal·lat i actiu.';
            echo '</p></div>';
        });
        return;
    }

    // Inicialitzar l'addon
    My_Addon::get_instance();
});

/**
 * Classe principal de l'addon
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inicialitzar l'addon
     */
    public function init() {
        // Carregar dependències
        $this->load_dependencies();

        // Configurar hooks
        $this->setup_hooks();

        // Inicialitzar components
        $this->init_components();
    }

    /**
     * Carregar fitxers requerits
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Configurar hooks de WordPress
     */
    private function setup_hooks() {
        // Activació/desactivació
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hooks d'Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inicialitzar components de l'addon
     */
    private function init_components() {
        // Inicialitzar pàgines d'administració, models, etc.
    }

    /**
     * Activació del plugin
     */
    public function activate() {
        // Crear taules personalitzades, configurar opcions, etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Desactivació del plugin
     */
    public function deactivate() {
        // Netgeixa si és necessari
    }

    /**
     * Manejar la completació del pagament
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Lògica personalitzada quan es completa el pagament
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Afegir camps personalitzats al pagament
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Talla de l\'empresa',
            'options' => [
                'small' => '1-10 empleats',
                'medium' => '11-100 empleats',
                'large' => '100+ empleats'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Exemple de Model Personalitzat

```php
<?php

namespace My_Addon\Models;

/**
 * Model de Lead personalitzat
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Nom del model
     */
    protected $model = 'lead';

    /**
     * Definir la taula de la base de dades
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Obté el nom de l'empresa
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Definir el nom de l'empresa
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Convertir el lead en client
     */
    public function convert_to_customer($user_data = []) {
        // Crear un usuarari de WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Crear el client d'Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Copiar dades del lead al client
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Marcar el lead com a convertit
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integració de la Pàgina d'Administració

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Pàgina d'administració personalitzada
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID de la pàgina
     */
    protected $id = 'my-addon-leads';

    /**
     * Posició del menú
     */
    protected $position = 30;

    /**
     * Inicialitzar pàgina
     */
    public function init() {
        // Registrar amb Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registrar la pàgina d'administració
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
     * Renderitzar la pàgina
     */
    public function render() {
        // Obté les dades dels leads
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderitzar la plantilla
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Gestionar Leads', 'my-addon')
        ]);
    }
}
```

## Prova del teu Addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Crear un client de prova
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Crear una membresia de prova
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simular l'enviament del formulari
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verificar que les dades es van guardar
        $saved_value = $this->customer->get_meta('company_size');
        $this->assertEquals('medium', $saved_value);
    }

    private function create_test_plan() {
        return wu_create_product([
            'name' => 'Plan de prova',
            'type' => 'plan',
            'price' => 50,
            'duration' => 1,
            'duration_unit' => 'month'
        ])->get_id();
    }
}
```

## Pròxims Passos

- Revisa la [Referència de Hooks](/developer/hooks) per a les accions i els filtres disponibles
- Consulta la [Visió general de l'API REST](/developer/rest-api/overview) per a l'integració d'API
- Utilitza la [Plantilla d'Addon](/addons/addon-template) com a esquelet inicial
