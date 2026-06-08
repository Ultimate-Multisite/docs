---
title: Memulakan Pembangunan Addon
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Pembangunan Addon

## Struktur Addon

```
my-addon/
├── my-addon.php                 # Fail plugin utama
├── inc/
│   ├── class-my-addon.php       # Kelas addon utama
│   ├── admin-pages/             # Antaramuka pentadbir
│   ├── models/                  # Model data tersuai
│   └── integrations/            # Integrasi pihak ketiga
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Fail templat
```

## Templat Fail Addon Utama

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Addon tersuai untuk Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Keluar jika diakses secara langsung
defined('ABSPATH') || exit;

// Takrifkan pemalar
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Semak sama ada Ultimate Multisite aktif
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Addon Saya memerlukan Ultimate Multisite dipasang dan diaktifkan.';
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
        // Muatkan kebergantungan
        $this->load_dependencies();

        // Sediakan hook
        $this->setup_hooks();

        // Inisialisasi komponen
        $this->init_components();
    }

    /**
     * Muatkan fail yang diperlukan
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Sediakan hook WordPress
     */
    private function setup_hooks() {
        // Pengaktifan/penyahaktifan
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
        // Inisialisasi halaman pentadbir, model, dsb.
    }

    /**
     * Pengaktifan plugin
     */
    public function activate() {
        // Cipta jadual tersuai, tetapkan pilihan, dsb.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Penyahaktifan plugin
     */
    public function deactivate() {
        // Bersihkan jika perlu
    }

    /**
     * Mengendalikan penyiapan checkout
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Logik tersuai apabila checkout selesai
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Tambah medan checkout tersuai
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Saiz Syarikat',
            'options' => [
                'small' => '1-10 pekerja',
                'medium' => '11-100 pekerja',
                'large' => '100+ pekerja'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Contoh Model Tersuai

```php
<?php

namespace My_Addon\Models;

/**
 * Model Lead tersuai
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Nama model
     */
    protected $model = 'lead';

    /**
     * Tetapkan jadual pangkalan data
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Dapatkan nama syarikat
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Tetapkan nama syarikat
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Tukar lead kepada pelanggan
     */
    public function convert_to_customer($user_data = []) {
        // Cipta pengguna WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Cipta pelanggan Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Salin data lead ke pelanggan
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Tandakan lead sebagai telah ditukar
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integrasi Halaman Pentadbir

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Halaman pentadbir tersuai
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID Halaman
     */
    protected $id = 'my-addon-leads';

    /**
     * Kedudukan menu
     */
    protected $position = 30;

    /**
     * Inisialisasi halaman
     */
    public function init() {
        // Daftar dengan Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Daftar halaman pentadbir
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
     * Paparkan halaman
     */
    public function render() {
        // Dapatkan data lead
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Paparkan templat
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
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

        // Cipta pelanggan ujian
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Cipta keahlian ujian
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Mensimulasikan penghantaran borang
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Sahkan data telah disimpan
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

## Langkah Seterusnya

- Semak [Hooks Reference](/developer/hooks) untuk tindakan dan penapis yang tersedia
- Semak [REST API Overview](/developer/rest-api/overview) untuk integrasi API
- Gunakan [Addon Template](/addons/addon-template) sebagai rangka permulaan
