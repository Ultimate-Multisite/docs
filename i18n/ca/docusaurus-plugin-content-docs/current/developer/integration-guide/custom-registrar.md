---
title: Creant una Integració de Registrar Personalitzada
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Creant una Integració de Registre de Domínis {#building-a-custom-registrar-integration}

El addon Domain Seller utilitza un patró d'**Registre d'Integracions** (Integration Registry). Cada registre és una classe PHP que implementa `Domain_Selling_Capability` i es registra mitjançant l'action hook `wu_domain_seller_register_capabilities`.

Aquesta guia mostra com a afegir un registre personalitzat.

## L'interfície {#the-interface}

La teva classe ha de implementar `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` i estendre `WP_Ultimo\Integrations\Base_Capability_Module`.

Mètodes requerits:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Mètodes d'identitat requerits (de Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // sempre 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Enable domain registration via My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Mètodes bàsics requerits (de Domain_Selling_Capability) ---

    /** Treballar tots els TLDs disponibles i preus major histèric. */
    public function sync_tlds(): array { ... }

    /** Comprovar la disponibilitat de $domain_name en diversos $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Obténer el preu major histèric per a un TLD durant N anys. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registrar un domini. Retorna ['success' => true, 'expiry_date' => '...'] en cas de èxit. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renovar un domini durant N anys. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Obténer l'estat de registre, la data de caducitat i els nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Provar les credencials de l'API i la connectivitat. */
    public function test_connection(): array { ... }
}
```

### Mètodes opcionals {#optional-methods}

Implementa aquests mètodes per desbloquejar funcions addicionals. L'addon detecta el suport utilitzant `method_exists()`:

| Mètode | Desbloqueja |
|---|---|
| `supports_whois_privacy(): bool` | Opció de privacitat WHOIS a la configuració del producte |
| `enable_whois_privacy(string $domain_name): array` | Habilitar privacitat automàticament al registrar |
| `get_dns_records(string $domain_name): array` | Tabella de veu DNS per al client |
| `add_dns_record(string $domain_name, array $record_data): array` | El client pot afegir records DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | El client pot editar records DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | El client pot eliminar records DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gestió de nameservers |
| `get_epp_code(string $domain_name): array` | Transferència de domini (de sortida) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transferència de domini (d'entrada) |

### Convenció de valor de retorn {#return-value-convention}

Tots els mètodes han de retornar un array amb, mínim, una clau `success`:

```php
// Èxit
return ['success' => true, 'data' => [...]];

// Fallida
return ['success' => false, 'message' => 'Error legible per un humà'];
```

---

## Registrant la teva capacitat {#registering-your-capability}

Registra la teva classe utilitzant l'action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

El primer argument de `add_capability()` és l'**ID del proveïdor** (provider ID): un slug en minúscules utilitzat per identificar el teu registre a la configuració, la configuració del producte i els canals de logs. Utitza algun cosa únic (per exemple, lo slug de la teva empresa).

---

## Afegir camps de credencials al wizard {#adding-credential-fields-to-the-wizard}

Per permetre als admins introduir credencials a través del wizard de configuració, registra la teva integració:

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

Les credencials es guarden com a opcions de xarxa utilitzant els IDs de camps com a clau. Recupera-les a la teva classe de capacitat amb `wu_get_setting('my_registrar_api_key')`.

---

## Hooks per accions posteriors al registre {#hooks-for-post-registration-actions}

Utilitza aquests actions per activar webhooks, aprovisionament, notificacions o actualitzacions de CRM:

```php
// Després d'un registre de domini exitós
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: resposta bruta del registre
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Després d'un fallament de registre
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Després d'una renovació exitosa
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Actualitza el teu sistema de facturació, envia un reçu, etc.
}, 10, 3);

// Després d'un fallament de renovació
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alertar, lògica de reintent, etc.
}, 10, 3);

// Després que es completa la transferència de domini
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain és un objecte WP_Ultimo\Models\Domain
}, 10, 2);

// Després de la verificació SES DKIM (si l'integració SES està activa)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain és un objecte WP_Ultimo\Models\Domain
});
```

---

## Logging {#logging}

Escriu al teu canal de logs específic del proveïdor utilitzant `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Els logs apareixen en **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
