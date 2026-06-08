---
title: Ξεκώντας με την Ανάπτυξη Addon
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Ανάπτυξη Addon

## Δομή Addon

```
my-addon/
├── my-addon.php                 # Κύριο αρχείο του plugin
├── inc/
│   ├── class-my-addon.php       # Κύρια κλάση του addon
│   ├── admin-pages/             # Σελίδες διαχείρισης (Admin interface)
│   ├── models/                  # Προσαρμοσμένα μοντέλα δεδομένων (Custom data models)
│   └── integrations/            # Ενσωματώσεις τρίτων (Third-party integrations)
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Αρχεία templates
```

## Template Κύριου Αρχείου Addon

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Προσαρμοσμένο addon για Ultimate Multisite
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Αποκλείει αν καλεστεί απευθείας
defined('ABSPATH') || exit;

// Ορισμός σταθερών
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Έλεγχος αν το Ultimate Multisite είναι ενεργό
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Το Addon μου απαιτεί το Ultimate Multisite να είναι εγκατεστημένο και ενεργοποιημένο.';
            echo '</p></div>';
        });
        return;
    }

    // Εнициализация του addon
    My_Addon::get_instance();
});

/**
 * Κύρια κλάση του addon
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Εнициализация του addon
     */
    public function init() {
        // Φόρτωση εξαρτήσεων
        $this->load_dependencies();

        // Ρύθμιση hooks
        $this->setup_hooks();

        // Εнициализация των components
        $this->init_components();
    }

    /**
     * Φόρτωση απαιτούμενων αρχείων
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Ρύθμιση WordPress hooks
     */
    private function setup_hooks() {
        // Ενεργοποίηση/απενεργοποίηση
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hooks του Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Εнициализация των components του addon
     */
    private function init_components() {
        // Εнициализация σελίδων διαχείρισης, μοντέλων κ.λπ.
    }

    /**
     * Ενεργοποίηση plugin
     */
    public function activate() {
        // Δημιουργία προσαρμοσμένων πινάκων, ρύθμιση επιλογών κ.λπ.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Απενεργοποίηση plugin
     */
    public function deactivate() {
        // Καθαρισμός αν χρειάζεται
    }

    /**
     * Χειρισμός ολοκλήρωσης checkout
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Προσαρμοσμένη λογική όταν ολοκληρώνεται το checkout
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Προσθήκη προσαρμοσμένων πεδίων checkout
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Μέγεθος Εταιρείας',
            'options' => [
                'small' => '1-10 υπάλληλοι',
                'medium' => '11-100 υπάλληλοι',
                'large' => '100+ υπάλληλοι'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Παράδειγμα Προσαρμοσμένου Model

```php
<?php

namespace My_Addon\Models;

/**
 * Προσαρμοσμένο Model Leads
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Όνομα Model
     */
    protected $model = 'lead';

    /**
     * Ρύθμιση του πίνακα στη βάση δεδομένων
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Λήψη του ονόματος της εταιρείας
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Ρύθμιση του ονόματος της εταιρείας
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Μετατροπή lead σε πελάτη
     */
    public function convert_to_customer($user_data = []) {
        // Δημιουργία χρήστη WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Δημιουργία πελάτη Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Αντιγραφή δεδομένων lead στον πελάτη
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Σήμανση του lead ως μετατραπμένο
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Ενσωμάτωση Σελίδας Διαχείρισης

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Προσαρμοσμένη σελίδα διαχείρισης
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID της σελίδας
     */
    protected $id = 'my-addon-leads';

    /**
     * Θέση στο μενού
     */
    protected $position = 30;

    /**
     * Εнициализация σελίδας
     */
    public function init() {
        // Εγγραφή στο Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Εγγραφή της σελίδας διαχείρισης
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
     * Εκτέλεση (Rendering) της σελίδας
     */
    public function render() {
        // Λήψη δεδομένων leads
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Εκτέλεση template
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Δοκιμή του Addon σας

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Δημιουργία test πελάτη
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Δημιουργία test συνδρομής
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Προσομοίωση υποβολής φόρμας
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Επιβεβαίωση ότι τα δεδομένα αποθηκεύτηκαν
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

## Επόμενα Βήματα

- Ελέγξτε το [Hooks Reference](/developer/hooks) για διαθέσιμα actions και filters
- Ελέγξτε την [REST API Overview](/developer/rest-api/overview) για ενσωμάτωση API
- Χρησιμοποιήστε το [Addon Template](/addons/addon-template) ως αρχικό scaffold
