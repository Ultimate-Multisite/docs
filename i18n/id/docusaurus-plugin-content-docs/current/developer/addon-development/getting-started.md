---
title: Memulai Pengembangan Addon
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Pengembangan Addon

## Struktur Addon

```
my-addon/
├── my-addon.php                 # File plugin utama
├── inc/
│   ├── class-my-addon.php       # Kelas addon utama
│   ├── admin-pages/             # Antarmuka admin
│   ├── models/                  # Model data kustom
│   └── integrations/            # Integrasi pihak ketiga
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # File template
```

## Template File Addon Utama

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

// Keluar jika diakses langsung
defined('ABSPATH') || exit;

// Definisikan konstanta
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Periksa apakah Ultimate Multisite aktif
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon memerlukan Ultimate Multisite untuk terinstal dan diaktifkan.';
            echo '</p></div>';
        });
        return;
    }

    // Inisialisasi addon
    My_Addon::get_instance();
});

/**
 * Kelas addon utama
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inisialisasi addon
     */
    public function init() {
        // Muat dependensi
        $this->load_dependencies();

        // Atur hook
        $this->setup_hooks();

        // Inisialisasi komponen
        $this->init_components();
    }

    /**
     * Muat file yang diperlukan
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Atur hook WordPress
     */
    private function setup_hooks() {
        // Aktivasi/deaktivasi
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hook Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inisialisasi komponen addon
     */
    private function init_components() {
        // Inisialisasi halaman admin, model, dll.
    }

    /**
     * Aktivasi plugin
     */
    public function activate() {
        // Buat tabel kustom, atur opsi, dll.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Deaktivasi plugin
     */
    public function deactivate() {
        // Bersihkan jika diperlukan
    }

    /**
     * Menangani penyelesaian checkout
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Logika kustom saat checkout selesai
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Menambahkan bidang checkout kustom
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Ukuran Perusahaan',
            'options' => [
                'small' => '1-10 karyawan',
                'medium' => '11-100 karyawan',
                'large' => '100+ karyawan'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Contoh Model Kustom

```php
<?php

namespace My_Addon\Models;

/**
 * Model Lead kustom
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Nama model
     */
    protected $model = 'lead';

    /**
     * Mengatur tabel database
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Mendapatkan nama perusahaan
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Mengatur nama perusahaan
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Mengubah lead menjadi pelanggan
     */
    public function convert_to_customer($user_data = []) {
        // Membuat pengguna WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Membuat pelanggan Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Menyalin data lead ke pelanggan
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Menandai lead sebagai sudah dikonversi
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integrasi Halaman Admin

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Halaman admin kustom
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID Halaman
     */
    protected $id = 'my-addon-leads';

    /**
     * Posisi Menu
     */
    protected $position = 30;

    /**
     * Inisialisasi halaman
     */
    public function init() {
        // Daftarkan dengan Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Mendaftarkan halaman admin
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
     * Merender halaman
     */
    public function render() {
        // Mendapatkan data leads
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Merender template
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Kelola Leads', 'my-addon')
        ]);
    }
}
```

## Menguji Addon Anda

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Membuat pelanggan uji
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Membuat keanggotaan uji
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Mensimulasikan pengiriman formulir
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Memverifikasi data telah disimpan
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

## Langkah Selanjutnya

- Tinjau [Hooks Reference](/developer/hooks) untuk aksi dan filter yang tersedia
- Periksa [REST API Overview](/developer/rest-api/overview) untuk integrasi API
- Gunakan [Addon Template](/addons/addon-template) sebagai kerangka awal
