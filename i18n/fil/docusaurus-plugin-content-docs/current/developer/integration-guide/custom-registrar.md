---
title: Paggawa ng Custom Registrar Integration
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Pagbuo ng Custom Registrar Integration {#building-a-custom-registrar-integration}

Gumagamit ang Domain Seller add-on ng pattern na tinatawag na **Integration Registry**. Ang bawat registrar ay isang PHP class na nagpapatupad (implements) ng `Domain_Selling_Capability` at nagre-register sa pamamagitan ng `wu_domain_seller_register_capabilities` action hook.

Ipinapakita ng gabay na ito kung paano mag-wire in ng sarili mong custom registrar.

## Ang Interface {#the-interface}

Dapat mag-implement ang iyong class ng `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` at mag-extend ng `WP_Ultimo\Integrations\Base_Capability_Module`.

Mga Kinakailangang Methods:

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

### Opsyonal na Methods {#optional-methods}

I-implement ang mga ito para ma-unlock ang mas maraming features. Nakikita ng add-on ang suporta sa pamamagitan ng `method_exists()`:

| Method | Nag-u-unlock |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS privacy option sa product settings |
| `enable_whois_privacy(string $domain_name): array` | Awtomatikong pag-e-enable ng privacy sa pagre-register |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Maaaring magdagdag ng DNS records ang customer |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Maaaring mag-edit ng DNS records ang customer |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Maaaring mag-delete ng DNS records ang customer |
| `update_nameservers(string $domain_name, array $nameservers): array` | Pamamahala ng nameserver |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Konbensyon ng Return Value {#return-value-convention}

Lahat ng methods ay nagbabalik ng array na mayroong `success` key bilang minimum:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Pagre-register ng Iyong Capability {#registering-your-capability}

I-register ang iyong class gamit ang `wu_domain_seller_register_capabilities` action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Ang unang argument sa `add_capability()` ay ang **provider ID** — isang lowercase slug na ginagamit para matukoy ang iyong registrar sa settings, product configuration, at log channels. Gumamit ng kakaiba (halimbawa, ang slug ng iyong kumpanya).

---

## Pagdaragdag ng Credential Fields sa Wizard {#adding-credential-fields-to-the-wizard}

Para payagan ang mga admin na maglagay ng credentials sa setup wizard, i-register ang iyong integration:

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

Ang mga credentials ay iniimbak bilang network options gamit ang field IDs bilang keys. Kunin ang mga ito sa iyong capability class gamit ang `wu_get_setting('my_registrar_api_key')`.

---

## Hooks para sa Post-Registration Actions {#hooks-for-post-registration-actions}

Gamitin ang mga actions na ito para mag-trigger ng webhooks, provisioning, notifications, o CRM updates:

```php
// Pagkatapos ng matagumpay na pagre-register ng domain
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Pagkatapos ng pagkabigo sa pagre-register
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Pagkatapos ng matagumpay na pag-renew
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // I-update ang iyong billing system, magpadala ng resibo, atbp.
}, 10, 3);

// Pagkatapos ng pagkabigo sa pag-renew
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Mag-alert, retry logic, atbp.
}, 10, 3);

// Pagkatapos makumpleto ang domain transfer
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain ay isang WP_Ultimo\Models\Domain object
}, 10, 2);

// Pagkatapos ng SES DKIM verification (kung active ang SES integration)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain ay isang WP_Ultimo\Models\Domain object
});
```

---

## Pag-log (Logging) {#logging}

Sumulat sa provider-specific log channel gamit ang `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Makikita ang mga logs sa **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
