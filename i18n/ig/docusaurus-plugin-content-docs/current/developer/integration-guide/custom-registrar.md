---
title: Iwulite Njikọta Onye Ndebanye Aha Ahaziri Iche
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ịrụ Njikọ Registrar Ahaziri {#building-a-custom-registrar-integration}

Addon Domain Seller na-eji ụkpụrụ **Integration Registry**. Registrar ọ bụla bụ klas PHP nke na-emejuputa `Domain_Selling_Capability` ma na-edebanye onwe ya site na action hook `wu_domain_seller_register_capabilities`.

Nduzi a na-egosi otu esi ejikọ registrar ahaziri.

## Interface ahụ {#the-interface}

Klas gị ga-emejuputa `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ma gbasaa `WP_Ultimo\Integrations\Base_Capability_Module`.

Ụzọ achọrọ:

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

### Ụzọ nhọrọ {#optional-methods}

Meejuputa ndị a iji meghee atụmatụ ndị ọzọ. Addon na-achọpụta nkwado site na `method_exists()`:

| Ụzọ | Ihe ọ na-emeghe |
|---|---|
| `supports_whois_privacy(): bool` | Nhọrọ nzuzo WHOIS na ntọala ngwaahịa |
| `enable_whois_privacy(string $domain_name): array` | Na-eme ka nzuzo rụọ ọrụ n’onwe ya n’oge ndebanye |
| `get_dns_records(string $domain_name): array` | Taabụ nlele DNS nke onye ahịa |
| `add_dns_record(string $domain_name, array $record_data): array` | Onye ahịa nwere ike ịgbakwunye ndekọ DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Onye ahịa nwere ike dezie ndekọ DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Onye ahịa nwere ike ihichapụ ndekọ DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Njikwa nameserver |
| `get_epp_code(string $domain_name): array` | Mbufe domain (na-apụ apụ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Mbufe domain (na-abata) |

### Usoro uru a na-alaghachi {#return-value-convention}

Ụzọ niile na-alaghachi array nwere opekata mpe igodo `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Idebanye capability gị {#registering-your-capability}

Debanye klas gị site n’iji action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argument mbụ nye `add_capability()` bụ **ID onye na-eweta ọrụ** — slug mkpụrụedemede nta eji amata registrar gị na ntọala, nhazi ngwaahịa, na ọwa log. Jiri ihe pụrụ iche (dịka ọmụmaatụ, slug ụlọ ọrụ gị).

---

## Ịgbakwunye ubi credential na wizard {#adding-credential-fields-to-the-wizard}

Iji kwe ka admin tinye credentials site na setup wizard, debanye njikọ gị:

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

A na-echekwa credentials dịka network options site n’iji ID ubi dị ka igodo. Weghachite ha n’ime klas capability gị site na `wu_get_setting('my_registrar_api_key')`.

---

## Hooks maka omume mgbe ndebanye gasịrị {#hooks-for-post-registration-actions}

Jiri actions ndị a kpalite webhooks, provisioning, notifications, ma ọ bụ mmelite CRM:

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

## Ndekọ {#logging}

Dee na ọwa ndekọ nke onye na-eweta gị kpọmkwem site na iji `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Ndekọ na-apụta n'okpuru **Onye Nchịkwa Netwọkụ › Ultimate Multisite › Ndekọ › domain-seller-my-registrar**.
