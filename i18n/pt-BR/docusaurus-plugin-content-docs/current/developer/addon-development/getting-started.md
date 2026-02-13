---
title: Começando com o Desenvolvimento de Addons
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Desenvolvimento de Addons

## Estrutura do Addon

```
my-addon/
├── my-addon.php                 # Main plugin file
├── inc/
│   ├── class-my-addon.php       # Main addon class
│   ├── admin-pages/             # Admin interface
│   ├── models/                  # Custom data models
│   └── integrations/            # Third-party integrations
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Template files
```

## Modelo de Arquivo Principal do Addon

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

// Sair se acessado diretamente
defined('ABSPATH') || exit;

// Definir constantes
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Verificar se Ultimate Multisite está ativo
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
 * Classe principal do addon
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inicializar o addon
     */
    public function init() {
        // Carregar dependências
        $this->load_dependencies();

        // Configurar hooks
        $this->setup_hooks();

        // Inicializar componentes
        $this->init_components();
    }

    /**
     * Carregar arquivos necessários
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Configurar hooks do WordPress
     */
    private function setup_hooks() {
        // Ativação/desativação
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hooks do Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inicializar componentes do addon
     */
    private function init_components() {
        // Inicializar admin pages, models, etc.
    }

    /**
     * Ativação do plugin
     */
    public function activate() {
        // Criar tabelas personalizadas, definir opções, etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Desativação do plugin
     */
    public function deactivate() {
        // Limpar se necessário
    }

    /**
     * Lidar com conclusão de checkout
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Lógica personalizada quando o checkout é concluído
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Adicionar campos personalizados ao checkout
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

## Exemplo de Modelo Personalizado

```php
<?php

namespace My_Addon\Models;

/**
 * Modelo de Lead personalizado
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Nome do modelo
     */
    protected $model = 'lead';

    /**
     * Definir a tabela do banco de dados
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Obter o nome da empresa
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Definir o nome da empresa
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Converter lead em cliente
     */
    public function convert_to_customer($user_data = []) {
        // Criar usuário do WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Criar cliente do Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Copiar dados do lead para o cliente
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

## Integração da Página Administrativa

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Página administrativa personalizada
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID da página
     */
    protected $id = 'my-addon-leads';

    /**
     * Posição do menu
     */
    protected $position = 30;

    /**
     * Inicializar página
     */
    public function init() {
        // Registrar com Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Registrar a página administrativa
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
     * Renderizar a página
     */
    public function render() {
        // Obter dados dos leads
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderizar template
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Testando Seu Addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Criar cliente de teste
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Criar associação de teste
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simular envio de formulário
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verificar se os dados foram salvos
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

## Próximos Passos

- Revise a [Referência de Hooks](/developer/hooks) para ações e filtros disponíveis
- Verifique a [Visão Geral da API REST](/developer/rest-api/overview) para integração da API
- Use o [Modelo de Addon](/addons/addon-template) como um esqueleto inicial
