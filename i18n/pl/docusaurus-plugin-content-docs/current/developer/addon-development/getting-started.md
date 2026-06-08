---
title: Rozpoczęcie rozwoju wtyczek (Addon Development)
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Tworzenie wtyczki dodatkowej (Addon Development)

## Struktura wtyczki dodatkowej (Addon Structure)

```
my-addon/
├── my-addon.php                 # Główny plik wtyczki
├── inc/
│   ├── class-my-addon.php       # Główna klasa wtyczki dodatkowej
│   ├── admin-pages/             # Interfejs administracyjny
│   ├── models/                  # Własne modele danych
│   └── integrations/            # Integracje z zewnętrznymi usługami
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Pliki szablonów
```

## Szablon głównego pliku wtyczki dodatkowej (Main Addon File Template)

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Własna wtyczka dodatkowa dla Ultimate Multisite
 * Version: 1.0.0
 * Author: Twoje Imię
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Wyjście, jeśli plik zostanie wywołany bezpośrednio
defined('ABSPATH') || exit;

// Definiowanie stałych
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Sprawdzenie, czy Ultimate Multisite jest aktywne
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Wtyczka dodatkowa My Addon wymaga zainstalowania i aktywacji Ultimate Multisite.';
            echo '</p></div>';
        });
        return;
    }

    // Inicjalizacja wtyczki dodatkowej
    My_Addon::get_instance();
});

/**
 * Główna klasa wtyczki dodatkowej
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Inicjalizacja wtyczki dodatkowej
     */
    public function init() {
        // Ładowanie zależności
        $this->load_dependencies();

        // Konfiguracja hooków
        $this->setup_hooks();

        // Inicjalizacja komponentów
        $this->init_components();
    }

    /**
     * Ładowanie wymaganych plików
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Konfiguracja hooków WordPress
     */
    private function setup_hooks() {
        // Aktywacja/dezaktywacja
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hooki Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Inicjalizacja komponentów wtyczki dodatkowej
     */
    private function init_components() {
        // Inicjalizacja stron administracyjnych, modeli itp.
    }

    /**
     * Aktywacja wtyczki dodatkowej
     */
    public function activate() {
        // Tworzenie niestandardowych tabel, ustawianie opcji itp.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Dezaktywacja wtyczki dodatkowej
     */
    public function deactivate() {
        // Czyszczenie, jeśli to konieczne
    }

    /**
     * Obsługa zakończenia procesu zakupu
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Własna logika po zakończeniu zakupu
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Dodawanie niestandardowych pól do checkoutu
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Rozmiar firmy',
            'options' => [
                'small' => '1-10 pracowników',
                'medium' => '11-100 pracowników',
                'large' => '100+ pracowników'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Przykład niestandardowego modelu (Custom Model Example)

```php
<?php

namespace My_Addon\Models;

/**
 * Model potencjalnego klienta (Lead)
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Nazwa modelu
     */
    protected $model = 'lead';

    /**
     * Ustawienie nazwy tabeli w bazie danych
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Pobranie nazwy firmy
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Ustawienie nazwy firmy
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Konwersja potencjalnego klienta na klienta
     */
    public function convert_to_customer($user_data = []) {
        // Tworzenie użytkownika WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Tworzenie klienta Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Kopiowanie danych z potencjalnego klienta na klienta
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Oznaczanie potencjalnego klienta jako skonwertowanego
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Integracja strony administracyjnej (Admin Page Integration)

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Niestandardowa strona administracyjna
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID strony
     */
    protected $id = 'my-addon-leads';

    /**
     * Pozycja w menu
     */
    protected $position = 30;

    /**
     * Inicjalizacja strony
     */
    public function init() {
        // Rejestracja w Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Rejestrowanie strony administracyjnej
     */
    public function register() {
        wu_register_admin_page($this->id, [
            'title' => __('Potencjalni Klienci', 'my-addon'),
            'menu_title' => __('Potencjalni Klienci', 'my-addon'),
            'capability' => 'wu_read_leads',
            'position' => $this->position,
            'parent' => 'ultimate-multisite',
            'callback' => [$this, 'render']
        ]);
    }

    /**
     * Renderowanie strony
     */
    public function render() {
        // Pobieranie danych potencjalnych klientów
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Renderowanie szablonu
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Zarządzanie potencjalnymi klientami', 'my-addon')
        ]);
    }
}
```

## Testowanie wtyczki dodatkowej (Testing Your Addon)

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Tworzenie testowego klienta
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Tworzenie testowego członkostwa
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Symulacja wysłania formularza
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Weryfikacja, czy dane zostały zapisane
        $saved_value = $this->customer->get_meta('company_size');
        $this->assertEquals('medium', $saved_value);
    }

    private function create_test_plan() {
        return wu_create_product([
            'name' => 'Plan Testowy',
            'type' => 'plan',
            'price' => 50,
            'duration' => 1,
            'duration_unit' => 'month'
        ])->get_id();
    }
}
```

## Następne kroki (Next Steps)

- Przejrzyj [Hooks Reference](/developer/hooks), aby zapoznać się z dostępnymi akcjami i filtrami
- Sprawdź [REST API Overview](/developer/rest-api/overview) pod kątem integracji API
- Użyj [Addon Template](/addons/addon-template) jako punktu wyjścia
