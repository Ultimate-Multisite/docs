---
title: Comenzando con el desarrollo de complementos
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Desarrollo de Addon

## Estructura del Addon

```
my-addon/
├── my-addon.php                 # Archivo principal del plugin
├── inc/
│   ├── class-my-addon.php       # Clase principal del addon
│   ├── admin-pages/             # Interfaz de administración
│   ├── models/                  # Modelos de datos personalizados
│   └── integrations/            # Integraciones de terceros
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Archivos de plantilla
```

## Plantilla del Archivo Principal del Addon

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

// Salir si se accede directamente
defined('ABSPATH') || exit;

// Definir constantes
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Verificar si Ultimate Multisite está activo
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon requires Ultimate Multisite to be installed and activated.';
            echo '</p></div>';
        });
        return;
    }

    // Inicializar addon
    My_Addon::get_instance();
});

/**
 * Clase principal del addon
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inicializar el addon
     */
    public function init() {
        // Cargar dependencias
        $this->load_dependencies();

        // Configurar ganchos
        $this->setup_hooks();

        // Inicializar componentes
        $this->init_components();
    }

    /**
     * Cargar archivos requeridos
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Configurar ganchos de WordPress
     */
    private function setup_hooks() {
        // Activación/desactivación
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ganchos de Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inicializar componentes del addon
     */
    private function init_components() {
        // Inicializar páginas de administración, modelos, etc.
    }

    /**
     * Activación del plugin
     */
    public function activate() {
        // Crear tablas personalizadas, establecer opciones, etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Desactivación del plugin
     */
    public function deactivate() {
        // Limpiar si es necesario
    }

    /**
     * Manejar la finalización del checkout
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Lógica personalizada cuando el checkout se completa
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Añadir campos personalizados al checkout
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

## Ejemplo de Modelo Personalizado

```php
<?php

namespace My_Addon\Models;

/**
 * Modelo de Lead personalizado
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Nombre del modelo
     */
    protected $model = 'lead';

    /**
     * Establecer la tabla de la base de datos
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Obtener el nombre de la empresa
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Establecer el nombre de la empresa
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Convertir lead a cliente
     */
    public function convert_to_customer($user_data = []) {
        // Crear usuario de WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Crear cliente de Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Copiar datos del lead al cliente
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Marcar lead como convertido
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integración de la Página de Administración

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Página de administración personalizada
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID de la página
     */
    protected $id = 'my-addon-leads';

    /**
     * Posición del menú
     */
    protected $position = 10;

    /**
     * Inicializar página
     */
    public function init() {
        // Registrar con Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registrar la página de administración
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
     * Renderizar la página
     */
    public function render() {
        // Obtener datos de leads
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderizar plantilla
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Pruebas de Tu Addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Crear cliente de prueba
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Crear membresía de prueba
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simular envío de formulario
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verificar que los datos se guardaron
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

## Próximos Pasos

- Revisa la [Referencia de Ganchos](/developer/hooks) para las acciones y filtros disponibles
- Revisa la [Visión General de la API REST](/developer/rest-api/overview) para la integración de la API
- Usa la [Plantilla de Addon](/addons/addon-template) como un esqueleto inicial
