---
title: Il-Bini ta’ Integrazzjoni ta’ Reġistratur Personalizzata
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Bini ta' Integrazzjoni Personalizzata ta' Reġistratur {#building-a-custom-registrar-integration}

L-addon Domain Seller juża mudell ta' **Integration Registry**. Kull reġistratur huwa klassi PHP li timplimenta `Domain_Selling_Capability` u tirreġistra lilha nnifisha permezz tal-action hook `wu_domain_seller_register_capabilities`.

Din il-gwida turi kif tqabbad reġistratur personalizzat.

## L-interface {#the-interface}

Il-klassi tiegħek trid timplimenta `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` u testendi `WP_Ultimo\Integrations\Base_Capability_Module`.

Metodi meħtieġa:

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

### Metodi fakultattivi {#optional-methods}

Implimenta dawn biex tiftaħ karatteristiċi addizzjonali. L-addon jiskopri l-appoġġ permezz ta' `method_exists()`:

| Method | Jiftaħ |
|---|---|
| `supports_whois_privacy(): bool` | Għażla tal-privatezza WHOIS fis-settings tal-prodott |
| `enable_whois_privacy(string $domain_name): array` | Jattiva l-privatezza awtomatikament waqt ir-reġistrazzjoni |
| `get_dns_records(string $domain_name): array` | Tab tal-veduta DNS tal-klijent |
| `add_dns_record(string $domain_name, array $record_data): array` | Il-klijent jista' jżid rekords DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Il-klijent jista' jeditja rekords DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Il-klijent jista' jħassar rekords DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Ġestjoni tan-nameserver |
| `get_epp_code(string $domain_name): array` | Trasferiment tad-domain (ħiereġ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Trasferiment tad-domain (dieħel) |

### Konvenzjoni tal-valur ritornat {#return-value-convention}

Il-metodi kollha jirritornaw array b'mill-inqas key `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Reġistrazzjoni tal-capability tiegħek {#registering-your-capability}

Irreġistra l-klassi tiegħek billi tuża l-action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

L-ewwel argument għal `add_capability()` huwa l-**provider ID** — slug b'ittri żgħar użat biex jidentifika r-reġistratur tiegħek fis-settings, fil-konfigurazzjoni tal-prodott, u fil-kanali tal-log. Uża xi ħaġa unika (eż., is-slug tal-kumpanija tiegħek).

---

## Żieda ta' fields tal-kredenzjali mal-wizard {#adding-credential-fields-to-the-wizard}

Biex tħalli lill-admins idaħħlu l-kredenzjali permezz tas-setup wizard, irreġistra l-integrazzjoni tiegħek:

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

Il-kredenzjali jinħażnu bħala network options billi jużaw il-field IDs bħala keys. Irkuprahom fil-klassi tal-capability tiegħek b'`wu_get_setting('my_registrar_api_key')`.

---

## Hooks għal azzjonijiet wara r-reġistrazzjoni {#hooks-for-post-registration-actions}

Uża dawn l-actions biex tiskatta webhooks, provisioning, notifiki, jew aġġornamenti tas-CRM:

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

## Logging {#logging}

Ikteb fil-kanal tal-log speċifiku għall-fornitur tiegħek billi tuża `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Il-logs jidhru taħt **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
