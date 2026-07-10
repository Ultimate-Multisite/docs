---
title: Ndërtimi i një integrimi të personalizuar me regjistruesin
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ndërtimi i një integrimi të personalizuar të regjistruesit {#building-a-custom-registrar-integration}

Shtesa Domain Seller përdor një model **Integration Registry**. Çdo regjistrues është një klasë PHP që implementon `Domain_Selling_Capability` dhe regjistrohet vetë përmes action hook `wu_domain_seller_register_capabilities`.

Ky udhëzues tregon si të lidhni një regjistrues të personalizuar.

## Ndërfaqja {#the-interface}

Klasa juaj duhet të implementojë `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` dhe të zgjerojë `WP_Ultimo\Integrations\Base_Capability_Module`.

Metodat e kërkuara:

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

### Metoda opsionale {#optional-methods}

Implementojini këto për të zhbllokuar veçori shtesë. Shtesa zbulon mbështetjen përmes `method_exists()`:

| Metoda | Zhbllokon |
|---|---|
| `supports_whois_privacy(): bool` | Opsionin e privatësisë WHOIS në cilësimet e produktit |
| `enable_whois_privacy(string $domain_name): array` | Aktivizon automatikisht privatësinë gjatë regjistrimit |
| `get_dns_records(string $domain_name): array` | Skedën e pamjes DNS për klientin |
| `add_dns_record(string $domain_name, array $record_data): array` | Klienti mund të shtojë regjistrime DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Klienti mund të modifikojë regjistrime DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Klienti mund të fshijë regjistrime DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Menaxhimin e nameserver-ëve |
| `get_epp_code(string $domain_name): array` | Transferimin e domain-it (dalës) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transferimin e domain-it (hyrës) |

### Konventa e vlerës së kthyer {#return-value-convention}

Të gjitha metodat kthejnë një array me të paktën një çelës `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Regjistrimi i capability-t tuaj {#registering-your-capability}

Regjistroni klasën tuaj duke përdorur action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argumenti i parë për `add_capability()` është **provider ID** — një slug me shkronja të vogla që përdoret për të identifikuar regjistruesin tuaj në cilësime, konfigurimin e produktit dhe kanalet e log-eve. Përdorni diçka unike (p.sh., slug-un e kompanisë suaj).

---

## Shtimi i fushave të kredencialeve në wizard {#adding-credential-fields-to-the-wizard}

Për t’u lejuar adminëve të fusin kredencialet përmes setup wizard, regjistroni integrimin tuaj:

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

Kredencialet ruhen si opsione rrjeti duke përdorur ID-të e fushave si çelësa. Merrini ato në klasën tuaj të capability-t me `wu_get_setting('my_registrar_api_key')`.

---

## Hooks për veprimet pas regjistrimit {#hooks-for-post-registration-actions}

Përdorni këto actions për të aktivizuar webhooks, provisioning, njoftime ose përditësime CRM:

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

## Regjistrimi i logjeve {#logging}

Shkruani në kanalin e logjeve specifik për ofruesin tuaj duke përdorur `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logjet shfaqen te **Administrimi i rrjetit › Ultimate Multisite › Logjet › domain-seller-my-registrar**.
