---
title: Початок розробки додатків
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Розробка аддонів

## Структура аддону

```
my-addon/
├── my-addon.php                 # Основний файл плагіна
├── inc/
│   ├── class-my-addon.php       # Основний клас аддону
│   ├── admin-pages/             # Сторінки адмін-інтерфейсу
│   ├── models/                  # Кастомні моделі даних
│   └── integrations/            # Інтеграції з сторонніми сервісами
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Файли шаблонів
```

## Шаблон основного файлу аддону

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

// Вихід, якщо файл викликано напряму
defined('ABSPATH') || exit;

// Визначення констант
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Перевірка активації Ultimate Multisite
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon вимагає встановлення та активації Ultimate Multisite.';
            echo '</p></div>';
        });
        return;
    }

    // Ініціалізація аддону
    My_Addon::get_instance();
});

/**
 * Основний клас аддону
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Ініціалізація аддону
     */
    public function init() {
        // Завантаження залежностей
        $this->load_dependencies();

        // Налаштування хуків
        $this->setup_hooks();

        // Ініціалізація компонентів
        $this->init_components();
    }

    /**
     * Завантаження необхідних файлів
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Налаштування хуків WordPress
     */
    private function setup_hooks() {
        // Активація/деактивація
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Хуки Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Ініціалізація компонентів аддону
     */
    private function init_components() {
        // Ініціалізація сторінок адмін-панелі, моделей тощо.
    }

    /**
     * Активація плагіна
     */
    public function activate() {
        // Створення кастомних таблиць, встановлення опцій тощо.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Деактивація плагіна
     */
    public function deactivate() {
        // Очищення, якщо потрібно
    }

    /**
     * Обробка завершення оформлення замовлення
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Кастомна логіка при завершенні оформлення замовлення
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Додавання кастомних полів оформлення замовлення
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Розмір компанії',
            'options' => [
                'small' => '1-10 співробітників',
                'medium' => '11-100 співробітників',
                'large' => '100+ співробітників'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Приклад кастомної моделі

```php
<?php

namespace My_Addon\Models;

/**
 * Кастомна модель Lead
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Назва моделі
     */
    protected $model = 'lead';

    /**
     * Встановлення таблиці бази даних
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Отримати назву компанії
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Встановити назву компанії
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Конвертувати Lead у клієнта
     */
    public function convert_to_customer($user_data = []) {
        // Створення користувача WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Створення клієнта Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Копіювання даних Lead до клієнта
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Позначення Lead як конвертованого
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Інтеграція сторінки адмін-панелі

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Кастомна сторінка адмін-панелі
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID сторінки
     */
    protected $id = 'my-addon-leads';

    /**
     * Позиція в меню
     */
    protected $position = 30;

    /**
     * Ініціалізація сторінки
     */
    public function init() {
        // Реєстрація в Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Реєстрація адмін-сторінки
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
     * Рендеринг сторінки
     */
    public function render() {
        // Отримання даних Lead
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Рендеринг шаблону
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Тестування вашого аддону

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Створення тестового клієнта
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Створення тестової підписки
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Імітація відправки форми
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Перевірка, що дані збережено
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

## Наступні кроки

- Перегляньте [Hooks Reference](/developer/hooks) для доступних action та filter
- Ознайомтеся з [REST API Overview](/developer/rest-api/overview) для інтеграції через API
- Використовуйте [Addon Template](/addons/addon-template) як стартовий каркас
