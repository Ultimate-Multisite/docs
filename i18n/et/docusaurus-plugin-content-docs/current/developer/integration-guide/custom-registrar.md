---
title: Kohandatud registripidaja integratsiooni loomine
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Kohandatud registripidaja integratsiooni loomine

Domain Seller addon kasutab **Integration Registry** mustrit. Iga registripidaja on PHP klass, mis rakendab `Domain_Selling_Capability` ja registreerib end `wu_domain_seller_register_capabilities` action hooki kaudu.

See juhend näitab, kuidas ühendada kohandatud registripidaja.

## Liides

Sinu klass peab rakendama `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ja laiendama `WP_Ultimo\Integrations\Base_Capability_Module`.

Nõutavad meetodid:

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

### Valikulised meetodid

Rakenda need, et avada lisafunktsioone. Addon tuvastab toe `method_exists()` kaudu:

| Meetod | Avab |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS privaatsuse valik toote seadetes |
| `enable_whois_privacy(string $domain_name): array` | Auto-enables privacy at registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer can add DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer can edit DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer can delete DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Tagastusväärtuse konventsioon

Kõik meetodid tagastavad massiivi, milles on vähemalt `success` võti:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Sinu võimekuse registreerimine

Registreeri oma klass `wu_domain_seller_register_capabilities` actioni abil:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Esimene argument `add_capability()` jaoks on **pakkuja ID** — väiketähtedega slug, mida kasutatakse sinu registripidaja tuvastamiseks seadetes, toote konfiguratsioonis ja logikanalites. Kasuta midagi ainulaadset (nt sinu ettevõtte slug).

---

## Volituste väljade lisamine viisardisse

Et administraatorid saaksid sisestada volitusi seadistusviisardi kaudu, registreeri oma integratsioon:

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

Volitused salvestatakse võrgu valikutena, kasutades välja ID-sid võtmetena. Too need oma võimekuse klassis väärtusega `wu_get_setting('my_registrar_api_key')`.

---

## Hookid registreerimisjärgsete toimingute jaoks

Kasuta neid actioneid webhookide, provisionimise, teavituste või CRM-i uuenduste käivitamiseks:

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

## Logimine

Kirjuta oma teenusepakkujapõhisesse logikanalisse, kasutades `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logid kuvatakse jaotises **Võrgu haldus › Ultimate Multisite › Logid › domain-seller-my-registrar**.
