---
title: Construire une intégration de registraire personnalisée
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Créer une intégration de registrar personnalisé

L'addon Domain Seller utilise un modèle appelé **Registre d'intégrations** (Integration Registry). Chaque registrar est une classe PHP qui implémente `Domain_Selling_Capability` et s'enregistre via le hook d'action `wu_domain_seller_register_capabilities`.

Ce guide vous montre comment intégrer un registrar personnalisé.

## L'interface

Votre classe doit implémenter `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` et étendre `WP_Ultimo\Integrations\Base_Capability_Module`.

Méthodes requises :

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Méthodes d'identité requises (issues de Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // toujours 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Activer l\'enregistrement de domaines via My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Méthodes de base requises (issues de Domain_Selling_Capability) ---

    /** Récupère tous les TLD disponibles et les prix de gros. */
    public function sync_tlds(): array { ... }

    /** Vérifie la disponibilité de $domain_name sur $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Obtient le prix de gros d'un TLD pour N années. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Enregistre un domaine. Retourne ['success' => true, 'expiry_date' => '...'] en cas de succès. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renouvelle un domaine pour N années. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Obtient le statut d'enregistrement, la date d'expiration et les nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Teste les identifiants API et la connectivité. */
    public function test_connection(): array { ... }
}
```

### Méthodes optionnelles

Implémentez ces méthodes pour débloquer des fonctionnalités supplémentaires. L'addon détecte le support via `method_exists()` :

| Méthode | Débloque |
|---|---|
| `supports_whois_privacy(): bool` | Option de confidentialité WHOIS dans les paramètres du produit |
| `enable_whois_privacy(string $domain_name): array` | Active automatiquement la confidentialité lors de l'enregistrement |
| `get_dns_records(string $domain_name): array` | Onglet de visualisation DNS pour le client |
| `add_dns_record(string $domain_name, array $record_data): array` | Le client peut ajouter des enregistrements DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Le client peut modifier les enregistrements DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Le client peut supprimer des enregistrements DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gestion des nameservers |
| `get_epp_code(string $domain_name): array` | Transfert de domaine (sortant) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transfert de domaine (entrant) |

### Convention de valeur de retour

Toutes les méthodes doivent retourner un tableau contenant au minimum la clé `success` :

```php
// Succès
return ['success' => true, 'data' => [...]];

// Échec
return ['success' => false, 'message' => 'Erreur lisible par l\'homme'];
```

---

## Enregistrer votre capacité

Enregistrez votre classe en utilisant l'action `wu_domain_seller_register_capabilities` :

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Le premier argument de `add_capability()` est l'**ID du fournisseur** (provider ID) — un slug en minuscules utilisé pour identifier votre registrar dans les paramètres, la configuration du produit et les canaux de logs. Utilisez quelque chose d'unique (par exemple, le slug de votre entreprise).

---

## Ajouter des champs d'identifiants au wizard

Pour permettre aux administrateurs de saisir des identifiants via le wizard de configuration, enregistrez votre intégration :

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('My Registrar', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('API Key', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('API Secret', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

Les identifiants sont stockés comme des options de réseau en utilisant les IDs de champ comme clés. Récupérez-les dans votre classe de capacité avec `wu_get_setting('my_registrar_api_key')`.

---

## Hooks pour les actions post-enregistrement

Utilisez ces actions pour déclencher des webhooks, des provisions, des notifications ou des mises à jour CRM :

```php
// Après un enregistrement de domaine réussi
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: réponse brute du registrar
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Après un échec d'enregistrement
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Échec de l'enregistrement du domaine : {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Après un renouvellement réussi
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Mettez à jour votre système de facturation, envoyez un reçu, etc.
}, 10, 3);

// Après un échec de renouvellement
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alerte, logique de nouvelle tentative, etc.
}, 10, 3);

// Après achèvement du transfert de domaine
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain est un objet WP_Ultimo\Models\Domain
}, 10, 2);

// Après vérification SES DKIM (si l'intégration SES est active)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain est un objet WP_Ultimo\Models\Domain
});
```

---

## Journalisation (Logging)

Écrivez dans votre canal de logs spécifique au fournisseur en utilisant `wu_log_add()` :

```php
wu_log_add('domain-seller-my-registrar', "Enregistrement de {$domain_name} réussi", 'info');
wu_log_add('domain-seller-my-registrar', "Échec de l'enregistrement : {$error}", 'error');
```

Les logs apparaissent sous **Admin Réseau › Ultimate Multisite › Logs › domain-seller-my-registrar**.
