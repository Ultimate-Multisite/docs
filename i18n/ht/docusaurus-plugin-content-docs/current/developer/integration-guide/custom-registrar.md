---
title: Bati yon Entegrasyon Rejistrè Pèsonalize
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Konstwi yon Entegrasyon Rejis Pèsonalize {#building-a-custom-registrar-integration}

Addon Domain Seller la itilize yon modèl **Integration Registry**. Chak rejis se yon klas PHP ki aplike `Domain_Selling_Capability` epi ki anrejistre tèt li atravè action hook `wu_domain_seller_register_capabilities`.

Gid sa a montre kijan pou konekte yon rejis pèsonalize.

## Entèfas la {#the-interface}

Klas ou a dwe aplike `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` epi pwolonje `WP_Ultimo\Integrations\Base_Capability_Module`.

Metòd obligatwa yo:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Required identity methods (from Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // always 'domain-selling'
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

    // --- Core required methods (from Domain_Selling_Capability) ---

    /** Pull all available TLDs and wholesale pricing. */
    public function sync_tlds(): array { ... }

    /** Check availability of $domain_name across $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Get wholesale price for a TLD for N years. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Register a domain. Returns ['success' => true, 'expiry_date' => '...'] on success. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renew a domain for N years. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Get registration status, expiry date, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Test API credentials and connectivity. */
    public function test_connection(): array { ... }
}
```

### Metòd opsyonèl {#optional-methods}

Aplike sa yo pou debloke fonksyonalite anplis. Addon la detekte sipò atravè `method_exists()`:

| Metòd | Sa li debloke |
|---|---|
| `supports_whois_privacy(): bool` | Opsyon vi prive WHOIS nan paramèt pwodwi yo |
| `enable_whois_privacy(string $domain_name): array` | Aktive vi prive otomatikman pandan enskripsyon |
| `get_dns_records(string $domain_name): array` | Onglè afichaj DNS pou kliyan |
| `add_dns_record(string $domain_name, array $record_data): array` | Kliyan ka ajoute dosye DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Kliyan ka modifye dosye DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Kliyan ka efase dosye DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Jesyon nameserver |
| `get_epp_code(string $domain_name): array` | Transfè domèn (sòtan) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transfè domèn (antre) |

### Konvansyon valè retounen {#return-value-convention}

Tout metòd yo retounen yon tablo ki gen omwen yon kle `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Anrejistre kapasite ou {#registering-your-capability}

Anrejistre klas ou a avèk aksyon `wu_domain_seller_register_capabilities` la:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Premye agiman pou `add_capability()` se **ID founisè** a — yon slug an miniskil yo itilize pou idantifye rejis ou a nan paramèt, konfigirasyon pwodwi, ak chanèl log yo. Itilize yon bagay inik (pa egzanp, slug konpayi ou).

---

## Ajoute chan kalifikasyon nan wizard la {#adding-credential-fields-to-the-wizard}

Pou pèmèt admin yo antre kalifikasyon atravè setup wizard la, anrejistre entegrasyon ou:

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

Kalifikasyon yo estoke kòm opsyon rezo avèk ID chan yo kòm kle. Rekipere yo nan klas kapasite ou a avèk `wu_get_setting('my_registrar_api_key')`.

---

## Hooks pou aksyon apre enskripsyon {#hooks-for-post-registration-actions}

Itilize aksyon sa yo pou deklanche webhooks, provisioning, notifikasyon, oswa mizajou CRM:

```php
// After successful domain registration
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// After registration failure
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// After successful renewal
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Update your billing system, send a receipt, etc.
}, 10, 3);

// After renewal failure
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, etc.
}, 10, 3);

// After domain transfer completes
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain is a WP_Ultimo\Models\Domain object
}, 10, 2);

// After SES DKIM verification (if SES integration is active)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain is a WP_Ultimo\Models\Domain object
});
```

---

## Anrejistreman {#logging}

Ekri nan chanèl jounal espesifik founisè ou a lè w sèvi ak `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Jounal yo parèt anba **Administrasyon Rezo › Ultimate Multisite › Jounal › domain-seller-my-registrar**.
