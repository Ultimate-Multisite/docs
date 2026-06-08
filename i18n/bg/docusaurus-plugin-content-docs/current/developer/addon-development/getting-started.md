---
title: Запознаване с разработка на аддонове
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Разработка на Addon

## Структура на Addon-а

```
my-addon/
├── my-addon.php                 # Основен файл на плагина
├── inc/
│   ├── class-my-addon.php       # Основен клас на addon-а
│   ├── admin-pages/             # Интерфейс за администратор
│   ├── models/                  # Персонализирани модели на данни
│   └── integrations/            # Интеграции с трети страни
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Файлове за шаблони
```

## Шаблон за основния файл на Addon-а

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Персонализирана добавка за Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Изход, ако бъде достъпен директно
defined('ABSPATH') || exit;

// Дефиниране на константи
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Проверка дали Ultimate Multisite е активен
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon изисква Ultimate Multisite да е инсталиран и активиран.';
            echo '</p></div>';
        });
        return;
    }

    // Инициализиране на addon-а
    My_Addon::get_instance();
});

/**
 * Основен клас на addon-а
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Инициализиране на addon-а
     */
    public function init() {
        // Зареждане на зависимостите
        $this->load_dependencies();

        // Настройване на хуковете
        $this->setup_hooks();

        // Инициализиране на компонентите
        $this->init_components();
    }

    /**
     * Зареждане на необходимите файлове
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Настройване на WordPress хуковете
     */
    private function setup_hooks() {
        // Активиране/деактивиране
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Хукове на Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Инициализиране на компонентите на addon-а
     */
    private function init_components() {
        // Инициализиране на админ страници, модели и т.н.
    }

    /**
     * Активиране на плагина
     */
    public function activate() {
        // Създаване на персонализирани таблици, задаване на опции и т.н.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Деактивиране на плагина
     */
    public function deactivate() {
        // Почистване, ако е необходимо
    }

    /**
     * Обработка на завършването на плащането
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Персонализирана логика при завършване на плащането
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Добавяне на персонализирани полета за плащане
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Размер на компанията',
            'options' => [
                'small' => '1-10 служители',
                'medium' => '11-100 служители',
                'large' => '100+ служители'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Пример за персонализиран Model

```php
<?php

namespace My_Addon\Models;

/**
 * Персонализиран Lead model
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Име на Model-а
     */
    protected $model = 'lead';

    /**
     * Задаване на таблицата в базата данни
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Получаване на името на компанията
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Задаване на името на компанията
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Преобразуване на лийд в клиент
     */
    public function convert_to_customer($user_data = []) {
        // Създаване на потребител в WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Създаване на клиент в Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Копиране на данните на лийда към клиента
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Отбелязване на лийда като преобразуван
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Интеграция на страница в админ панела

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Персонализирана админ страница
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID на страницата
     */
    protected $id = 'my-addon-leads';

    /**
     * Позиция в менюто
     */
    protected $position = 30;

    /**
     * Инициализиране на страницата
     */
    public function init() {
        // Регистриране с Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Регистриране на админ страницата
     */
    public function register() {
        wu_register_admin_page($this->id, [
            'title' => __('Лийдове', 'my-addon'),
            'menu_title' => __('Лийдове', 'my-addon'),
            'capability' => 'wu_read_leads',
            'position' => $this->position,
            'parent' => 'ultimate-multisite',
            'callback' => [$this, 'render']
        ]);
    }

    /**
     * Изказване на страницата
     */
    public function render() {
        // Получаване на данните на лийдовете
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Изказване на шаблона
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Управление на лийдове', 'my-addon')
        ]);
    }
}
```

## Тестване на Addon-а

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Създаване на тестов клиент
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Създаване на тестово членство
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Симулиране на изпращане на форма
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Проверка дали данните са запазени
        $saved_value = $this->customer->get_meta('company_size');
        $this->assertEquals('medium', $saved_value);
    }

    private function create_test_plan() {
        return wu_create_product([
            'name' => 'Тестов план',
            'type' => 'plan',
            'price' => 50,
            'duration' => 1,
            'duration_unit' => 'month'
        ])->get_id();
    }
}
```

## Следващи стъпки

- Прегледайте [Hooks Reference](/developer/hooks) за налични actions и filters
- Проверете [REST API Overview](/developer/rest-api/overview) за интеграция с API
- Използвайте [Addon Template](/addons/addon-template) като начална основа
