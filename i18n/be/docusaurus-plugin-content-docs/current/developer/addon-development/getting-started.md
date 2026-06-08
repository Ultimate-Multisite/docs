---
title: Пачатак праектавання аддонаў
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Разработка аддонаў

## Структура аддону

```
my-addon/
├── my-addon.php                 # Галоўны файл плагіна
├── inc/
│   ├── class-my-addon.php       # Галоўны клас аддону
│   ├── admin-pages/             # Адмін-інтерфейс
│   ├── models/                  # Кастомныя мадэлі дадзеных
│   └── integrations/            # Інтеграцыі з трэцяяй бакавінай
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Файлы шаблонаў
```

## Шаблон галоўнага файла аддону

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Кастомны аддон для Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Выход, калі даступ выкарыстоўваецца непасрэдна
defined('ABSPATH') || exit;

// Вызначэнне канстантаў
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Праверка, ці актыўны Ultimate Multisite
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Наш аддон патрабуе, каб Ultimate Multisite быў усталяваны і актыўваны.';
            echo '</p></div>';
        });
        return;
    }

    // Ініцыялізацыя аддону
    My_Addon::get_instance();
});

/**
 * Галоўны клас аддону
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Ініцыялізацыя аддону
     */
    public function init() {
        // Загрузка залежнасцей
        $this->load_dependencies();

        // Наладка хукаў
        $this->setup_hooks();

        // Ініцыялізацыя кампанентаў
        $this->init_components();
    }

    /**
     * Загрузка неабходных файлаў
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Наладка хукаў WordPress
     */
    private function setup_hooks() {
        // Актвацыя/дэактывацыя
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Хукі Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Ініцыялізацыя кампанентаў аддону
     */
    private function init_components() {
        // Ініцыялізацыя адмінкі, мадэляў і г.д.
    }

    /**
     * Актвацыя плагіна
     */
    public function activate() {
        // Стварыць кастомныя табліцы, ўсталяваць налады і г.д.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Дэактывацыя плагіна
     */
    public function deactivate() {
        // Ачыстка, калі гэта неабходна
    }

    /**
     * Апрацоўка заканчэння аплатам
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Кастомная лагіка пры заканчэнні аплатам
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Дадаванне кастомных паляў аплатам
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Памер кампаніі',
            'options' => [
                'small' => '1-10 паслуднікаў',
                'medium' => '11-100 паслуднікаў',
                'large' => '100+ паслуднікаў'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Прыклад кастомнай мадэлі

```php
<?php

namespace My_Addon\Models;

/**
 * Кастомная мадэль "Лід"
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Назва мадэлі
     */
    protected $model = 'lead';

    /**
     * Устаноўванне табліцы базы дадзеных
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Атрымаць назву кампаніі
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Усталяваць назву кампаніі
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Ператварыць ліда ў кліента
     */
    public function convert_to_customer($user_data = []) {
        // Стварыць карыстальніка WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Стварыць кліента Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Капіяваць дадзеныя ліда ў кліента
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Адзначыць ліда як ператвараванага
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Інтеграцыя адмінкі

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Кастомная адмінка
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID адмінкі
     */
    protected $id = 'my-addon-leads';

    /**
     * Пазейцыя ў меню
     */
    protected $position = 30;

    /**
     * Ініцыялізацыя адмінкі
     */
    public function init() {
        // Рэгістрацыя ў Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Рэгістрацыя адмінкі
     */
    public function register() {
        wu_register_admin_page($this->id, [
            'title' => __('Ліды', 'my-addon'),
            'menu_title' => __('Ліды', 'my-addon'),
            'capability' => 'wu_read_leads',
            'position' => $this->position,
            'parent' => 'ultimate-multisite',
            'callback' => [$this, 'render']
        ]);
    }

    /**
     * Апраўленне адмінкі
     */
    public function render() {
        // Атрымаць дадзеныя лідаў
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Апраўленне шаблону
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Кантроль лідаў', 'my-addon')
        ]);
    }
}
```

## Тэставанне вашага аддону

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Стварыць тэставых кліентаў
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Стварыць тэставы абонамент
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Сімуляцыя адпраўлення формы
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Праверка, што дадзеныя былі захаваны
        $saved_value = $this->customer->get_meta('company_size');
        $this->assertEquals('medium', $saved_value);
    }

    private function create_test_plan() {
        return wu_create_product([
            'name' => 'Тэставы план',
            'type' => 'plan',
            'price' => 50,
            'duration' => 1,
            'duration_unit' => 'month'
        ])->get_id();
    }
}
```

## Наступныя крокі

- Пагледзіце [Hooks Reference](/developer/hooks) для магчымых дзеянняў і фільтраў
- Прагледзьце [REST API Overview](/developer/rest-api/overview) для інтэграцыі з API
- Выкарыстоўвайце [Addon Template](/addons/addon-template) як пачатковы каркас
