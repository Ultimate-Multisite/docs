---
title: Commencer le développement d'addons
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Développement d'Addon

## Structure de l'Addon

```
my-addon/
├── my-addon.php                 # Fichier principal du plugin
├── inc/
│   ├── class-my-addon.php       # Classe principale de l'addon
│   ├── admin-pages/             # Interface d'administration
│   ├── models/                  # Modèles de données personnalisés
│   └── integrations/            # Intégrations tierces
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Fichiers de modèle
```

## Modèle de fichier principal de l'Addon

```php
<?php
/**
 * Nom du plugin : My Ultimate Multisite Addon
 * Description : Addon personnalisé pour Ultimate Multisite
 * Version : 1.0.0
 * Auteur : Votre Nom
 * PHP requis : 7.4
 * Ultimate Multisite : 2.0.0
 */

namespace My_Addon;

// Quitter si accédé directement
// Définir les constantes
defined('ABSPATH') || exit;
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'Mon Addon nécessite que Ultimate Multisite soit installé et activé.';
            echo '</p></div>';
        });
        return;
    }

    // Initialiser l'addon
    My_Addon::get_instance();
});

/**
 * Classe principale de l'addon
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * Initialiser l'addon
     */
    public function init() {
        // Charger les dépendances
        $this->load_dependencies();

        // Configurer les hooks
        $this->setup_hooks();

        // Initialiser les composants
        $this->init_components();
    }

    /**
     * Charger les fichiers requis
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * Configurer les hooks WordPress
     */
    private function setup_hooks() {
        // Activation/désactivation
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Hooks Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * Initialiser les composants de l'addon
     */
    private function init_components() {
        // Initialiser les pages d'administration, les modèles, etc.
    }

    /**
     * Activation du plugin
     */
    public function activate() {
        // Créer des tables personnalisées, définir des options, etc.
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * Désactivation du plugin
     */
    public function deactivate() {
        // Nettoyage si nécessaire
    }

    /**
     * Gérer la finalisation du paiement
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // Logique personnalisée lors de la finalisation du paiement
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * Ajouter des champs personnalisés au paiement
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Taille de l\'entreprise',
            'options' => [
                'small' => '1-10 employés',
                'medium' => '11-100 employés',
                'large' => '100+ employés'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## Exemple de modèle personnalisé

```php
<?php

namespace My_Addon\Models;

/**
 * Modèle de prospect personnalisé
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * Nom du modèle
     */
    protected $model = 'lead';

    /**
     * Définir la table de base de données
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * Obtenir le nom de l'entreprise
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * Définir le nom de l'entreprise
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * Convertir le prospect en client
     */
    public function convert_to_customer($user_data = []) {
        // Créer un utilisateur WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Créer un client Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // Copier les données du prospect vers le client
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // Marquer le prospect comme converti
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## Intégration de la page d'administration

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * Page d'administration personnalisée
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ID de la page
     */
    protected $id = 'my-addon-leads';

    /**
     * Position du menu
     */
    protected $position = 30;

    /**
     * Initialiser la page
     */
    public function init() {
        // Enregistrer avec Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * Enregistrer la page d'administration
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
     * Rendre la page
     */
    public function render() {
        // Récupérer les données des prospects
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // Rendre le modèle
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## Tester votre addon

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // Créer un client de test
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // Créer un abonnement de test
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // Simuler la soumission du formulaire
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // Vérifier que les données ont été enregistrées
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

## Prochaines étapes

- Examinez la [Référence des Hooks](/developer/hooks) pour les actions et filtres disponibles
- Consultez la [Vue d'ensemble de l'API REST](/developer/rest-api/overview) pour l'intégration API
- Utilisez le [Modèle d'Addon](/addons/addon-template) comme base de départ
