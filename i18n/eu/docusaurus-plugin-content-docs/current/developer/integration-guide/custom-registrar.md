---
title: Erregistratzaile pertsonalizatu baten integrazioa eraikitzea
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Registrar pertsonalizatu baten integrazioa eraikitzea {#building-a-custom-registrar-integration}

Domain Seller addon-ak **Integration Registry** eredua erabiltzen du. Registrar bakoitza `Domain_Selling_Capability` inplementatzen duen PHP klase bat da, eta bere burua erregistratzen du `wu_domain_seller_register_capabilities` action hook-aren bidez.

Gida honek registrar pertsonalizatu bat nola konektatu erakusten du.

## Interfazea {#the-interface}

Zure klaseak `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` inplementatu behar du eta `WP_Ultimo\Integrations\Base_Capability_Module` hedatu.

Beharrezko metodoak:

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

### Aukerako metodoak {#optional-methods}

Inplementatu hauek eginbide gehigarriak desblokeatzeko. Addon-ak euskarria detektatzen du `method_exists()` bidez:

| Metodoa | Desblokeatzen du |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS pribatutasun-aukera produktu-ezarpenetan |
| `enable_whois_privacy(string $domain_name): array` | Pribatutasuna automatikoki gaitzen du erregistroan |
| `get_dns_records(string $domain_name): array` | Bezeroaren DNS ikuspegiaren fitxa |
| `add_dns_record(string $domain_name, array $record_data): array` | Bezeroak DNS erregistroak gehi ditzake |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Bezeroak DNS erregistroak edita ditzake |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Bezeroak DNS erregistroak ezaba ditzake |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver kudeaketa |
| `get_epp_code(string $domain_name): array` | Domeinu-transferentzia (irteerakoa) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domeinu-transferentzia (sarrerakoa) |

### Itzulera-balioaren konbentzioa {#return-value-convention}

Metodo guztiek array bat itzultzen dute, gutxienez `success` gakoarekin:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Zure gaitasuna erregistratzea {#registering-your-capability}

Erregistratu zure klasea `wu_domain_seller_register_capabilities` action erabiliz:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-ren lehen argumentua **provider ID** da — minuskulazko slug bat, zure registrar-a ezarpenetan, produktu-konfigurazioan eta log-kanaletan identifikatzeko erabiltzen dena. Erabili zerbait bakarra (adibidez, zure enpresaren slug-a).

---

## Kredentzial-eremuak morroiari gehitzea {#adding-credential-fields-to-the-wizard}

Administratzaileei konfigurazio-morroiaren bidez kredentzialak sartzen uzteko, erregistratu zure integrazioa:

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

Kredentzialak sareko aukera gisa gordetzen dira, eremu-IDak gako gisa erabiliz. Berreskuratu zure gaitasun-klasean `wu_get_setting('my_registrar_api_key')` erabiliz.

---

## Erregistroaren ondorengo ekintzetarako hook-ak {#hooks-for-post-registration-actions}

Erabili action hauek webhook-ak, hornikuntza, jakinarazpenak edo CRM eguneraketak abiarazteko:

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

## Erregistroak {#logging}

Idatzi zure hornitzaileari dagokion erregistro-kanalean `wu_log_add()` erabiliz:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Erregistroak **Sareko administrazioa › Ultimate Multisite › Erregistroak › domain-seller-my-registrar** atalean agertzen dira.
