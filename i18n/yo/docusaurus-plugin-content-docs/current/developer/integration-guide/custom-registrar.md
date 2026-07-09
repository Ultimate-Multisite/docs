---
title: Ṣíṣe Ìṣepọ̀ Aláforúkọsílẹ̀ Àkànṣe
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ṣíṣe Àkópọ̀ Registrar Àdáṣe

Addon Domain Seller ń lo àpẹẹrẹ **Integration Registry**. Registrar kọ̀ọ̀kan jẹ́ class PHP kan tí ó ṣe ìmúlò `Domain_Selling_Capability` tí ó sì forúkọ sílẹ̀ fúnra rẹ̀ nípasẹ̀ action hook `wu_domain_seller_register_capabilities`.

Ìtọ́nisọ́nà yìí fi hàn bí a ṣe lè so registrar àdáṣe mọ́ọ̀.

## Interface náà

Class rẹ gbọ́dọ̀ ṣe ìmúlò `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` kí ó sì fa `WP_Ultimo\Integrations\Base_Capability_Module` gbooro.

Àwọn method tí a nílò:

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

### Àwọn method àṣàyàn

Ṣe ìmúlò wọ̀nyí láti ṣí àwọn àfikún ẹya sílẹ̀. Addon náà ń ṣàwárí ìtìlẹ́yìn nípasẹ̀ `method_exists()`:

| Method | Ohun tí ó ṣí sílẹ̀ |
|---|---|
| `supports_whois_privacy(): bool` | Àṣàyàn ìpamọ́ WHOIS nínú àwọn ìṣètò ọjà |
| `enable_whois_privacy(string $domain_name): array` | Auto-enables privacy at registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer can add DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer can edit DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer can delete DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Ìlànà iye tí a dá padà

Gbogbo àwọn method ń dá array padà pẹ̀lú key `success` ní ìwọ̀nba kékeré jù:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Fíforúkọsílẹ̀ capability rẹ

Forúkọ class rẹ sílẹ̀ ní lílo action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argument àkọ́kọ́ sí `add_capability()` ni **ID provider** — slug lẹ́tà kékeré tí a ń lò láti dá registrar rẹ mọ̀ nínú àwọn ìṣètò, ìṣètò ọjà, àti àwọn channel log. Lo ohun kan tí ó jẹ́ aláìlẹ́gbẹ́ (fún àpẹẹrẹ, slug ilé-iṣẹ́ rẹ).

---

## Fífi àwọn field credential kún wizard

Láti jẹ́ kí àwọn admin tẹ credentials wọlé nípasẹ̀ setup wizard, forúkọ integration rẹ sílẹ̀:

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

A máa ń tọ́jú credentials gẹ́gẹ́ bí network options ní lílo àwọn ID field gẹ́gẹ́ bí keys. Gba wọ́n nínú class capability rẹ pẹ̀lú `wu_get_setting('my_registrar_api_key')`.

---

## Àwọn hook fún àwọn ìṣe lẹ́yìn-registration

Lo àwọn action wọ̀nyí láti fa webhooks, provisioning, notifications, tàbí àwọn ìmúdójúìwọ̀n CRM ṣiṣẹ́:

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

## Logging

Kọ sí channel log pàtó fún provider rẹ ní lílo `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Àwọn log yóò hàn lábẹ́ **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
