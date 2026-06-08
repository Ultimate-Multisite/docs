---
title: Addon İnkişafına Giriş
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon İnkişafı

## Addon Strukturu

```
my-addon/
├── my-addon.php                 # Əsas plugin faylı
├── inc/
│   ├── class-my-addon.php       # Əsas addon sinifi
│   ├── admin-pages/             # Admin interfeysi
│   ├── models/                  # Xüsusi data modelləri
│   └── integrations/            # Üçüncü tərəf integrasiyaları
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Şablon faylları
```

## Əsas Addon Faylı Şablonu

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

// Birbaşa daxil olunduqda çıxar
defined('ABSPATH') || exit;

// Sabitlər təyin et
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite aktiv olub-olmadığını yoxla
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon, Ultimate Multisite-ın quraşdırılıb və aktivləşdirilməsini tələb edir.';
            echo '</p></div>';
        });
        return;
    }

    // Addonu başlat
    My_Addon::get_instance();
});

/**
 * Əsas addon sinifi
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Addonu başlat
     */
    public function init() {
        // Asılılıqları yüklə
        $this->load_dependencies();

        // Hook-ları qur
        $this->setup_hooks();

        // Komponentləri başlat
        $this->init_components();
    }

    /**
     * Tələb olunan faylları yüklə
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPress hook-larını qur
     */
    private function setup_hooks() {
        // Aktivasiya/deaktivasiya
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hook-ları
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Addon komponentlərini başlat
     */
    private function init_components() {
        // Admin səhifələri, modellər və s. başlat
    }

    /**
     * Plugin aktivasiyası
     */
    public function activate() {
        // Xüsusi cədvəllər yaradın, seçimlər təyin edin və s.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin deaktivasiyası
     */
    public function deactivate() {
        // Lazım olsa təmizləmə
    }

    /**
     * Checkout tamamlanmasını idarə et
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Checkout tamamlananda xüsusi məntiq
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Xüsusi checkout sahələri əlavə et
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Şirkət Ölçüsü',
            'options' => [
                'small' => '1-10 işçi',
                'medium' => '11-100 işçi',
                'large' => '100+ işçi'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Xüsusi Model Nümunəsi

```php
<?php

namespace My_Addon\Models;

/**
 * Xüsusi Lead modeli
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Model adı
     */
    protected $model = 'lead';

    /**
     * Verilbaza cədvəlini təyin et
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Şirkət adını al
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Şirkət adını təyin et
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Lead-i müştəriyə çevir
     */
    public function convert_to_customer($user_data = []) {
        // WordPress istifadəçisi yarat
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite müştərisini yarat
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Lead məlumatlarını müştəriyə köçür
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Lead-i çevrildi kimi işarələ
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Admin Səhifəsinə İntegrasiya

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Xüsusi admin səhifəsi
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Səhifə ID-si
     */
    protected $id = 'my-addon-leads';

    /**
     * Menyuda mövqeyi
     */
    protected $position = 30;

    /**
     * Səhifəni başlat
     */
    public function init() {
        // Ultimate Multisite ilə qeydiyyatdan keç
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Admin səhifəsini qeydiyyatdan keçir
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
     * Səhifəni göstər
     */
    public function render() {
        // Leads məlumatlarını əldə et
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Şablonu göstər
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Addonunuzu Test Etmək

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Test müştərisini yarat
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Test üzvlüyünü yarat
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Form göndərməsini simulyasiya et
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Məlumatların saxlanıldığını yoxla
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

## Növbəti Addımlar

- Mövcud action və filter-lər üçün [Hooks Reference](/developer/hooks) səhifəsinə baxın
- API inteqrasiyası üçün [REST API Overview](/developer/rest-api/overview) səhifəsini yoxlayın
- Başlanğıc şablonu kimi [Addon Template](/addons/addon-template) istifadə edin
