---
title: Introduction to Addon Development
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon Geliştirme

## Addon Yapısı

```
my-addon/
├── my-addon.php                 # Ana plugin dosyası
├── inc/
│   ├── class-my-addon.php       # Ana addon sınıfı
│   ├── admin-pages/             # Yönetici arayüzü
│   ├── models/                  # Özel veri modelleri
│   └── integrations/            # Üçüncü taraf entegrasyonlar
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Şablon dosyaları
```

## Ana Addon Dosyası Şablonu

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

// Direkt erişilirse çıkış yap
defined('ABSPATH') || exit;

// Sabitleri tanımla
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite'ın aktif olup olmadığını kontrol et
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon, Ultimate Multisite eklentisinin kurulmuş ve etkinleştirilmiş olmasını gerektirir.';
            echo '</p></div>';
        });
        return;
    }

    // Addonu başlat
    My_Addon::get_instance();
});

/**
 * Ana addon sınıfı
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Addonu başlat
     */
    public function init() {
        // Bağımlılıkları yükle
        $this->load_dependencies();

        // Hook'ları ayarla
        $this->setup_hooks();

        // Bileşenleri başlat
        $this->init_components();
    }

    /**
     * Gerekli dosyaları yükle
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPress hook'larını ayarla
     */
    private function setup_hooks() {
        // Aktivasyon/deaktivasyon
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite hook'ları
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Addon bileşenlerini başlat
     */
    private function init_components() {
        // Yönetici sayfaları, modeller vb. başlatılır.
    }

    /**
     * Plugin aktivasyonu
     */
    public function activate() {
        // Özel tablolar oluştur, seçenekleri ayarla vb.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Plugin deaktivasyonu
     */
    public function deactivate() {
        // Gerekirse temizlik yap
    }

    /**
     * Ödeme tamamlandığında işlenmesi
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Ödeme tamamlandığında özel mantık
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Özel ödeme alanları ekle
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Şirket Büyüklüğü',
            'options' => [
                'small' => '1-10 çalışan',
                'medium' => '11-100 çalışan',
                'large' => '100+ çalışan'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Özel Model Örneği

```php
<?php

namespace My_Addon\Models;

/**
 * Özel Lead modeli
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Model adı
     */
    protected $model = 'lead';

    /**
     * Veritabanı tablosunu ayarla
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Şirket adını getir
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Şirket adını ayarla
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Lead'i müşteriye dönüştür
     */
    public function convert_to_customer($user_data = []) {
        // WordPress kullanıcısı oluştur
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite müşterisi oluştur
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Lead verilerini müşteriye kopyala
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Lead'i dönüştürüldü olarak işaretle
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Yönetici Sayfası Entegrasyonu

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Özel yönetici sayfası
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * Sayfa ID'si
     */
    protected $id = 'my-addon-leads';

    /**
     * Menü konumu
     */
    protected $position = 30;

    /**
     * Sayfayı başlat
     */
    public function init() {
        // Ultimate Multisite'a kaydol
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Yönetici sayfasını kaydet
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
     * Sayfayı oluştur (render et)
     */
    public function render() {
        // Lead verilerini al
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Şablonu oluştur
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Addon'unuzu Test Etme

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Test müşterisi oluştur
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Test üyeliği oluştur
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Form gönderimini simüle et
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Verinin kaydedildiğini doğrula
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

## Sonraki Adımlar

- Mevcut aksiyonlar ve filtreler için [Hooks Reference](/developer/hooks) belgesini inceleyin
- API entegrasyonu için [REST API Overview](/developer/rest-api/overview) bölümüne bakın
- Başlangıç iskeleti olarak [Addon Template](/addons/addon-template) şablonunu kullanın
