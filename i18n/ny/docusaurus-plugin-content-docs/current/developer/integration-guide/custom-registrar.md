---
title: Kupanga Kuphatikiza kwa Registrar Wapadera
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Kumanga Custom Registrar Integration

Addon ya Domain Seller imagwiritsa ntchito njira ya **Integration Registry**. Registrar aliyense ndi class ya PHP yomwe imakhazikitsa `Domain_Selling_Capability` ndipo imadzilembetsa yokha kudzera mu action hook ya `wu_domain_seller_register_capabilities`.

Kalozerayu akuwonetsa momwe mungalumikizire custom registrar.

## Interface {#the-interface}

Class yanu iyenera kukhazikitsa `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ndi kukulitsa `WP_Ultimo\Integrations\Base_Capability_Module`.

Njira zofunikira:

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

### Njira zosankha {#optional-methods}

Khazikitsani izi kuti mutsegule mawonekedwe owonjezera. Addon imazindikira chithandizo kudzera pa `method_exists()`:

| Njira | Zimatsegula |
|---|---|
| `supports_whois_privacy(): bool` | Njira ya WHOIS privacy mu makonda a chinthu |
| `enable_whois_privacy(string $domain_name): array` | Imayatsa privacy yokha pa kulembetsa |
| `get_dns_records(string $domain_name): array` | Tabu ya kasitomala yowonera DNS |
| `add_dns_record(string $domain_name, array $record_data): array` | Kasitomala angawonjezere marekodi a DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Kasitomala angasinthe marekodi a DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Kasitomala angachotse marekodi a DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Kuwongolera nameserver |
| `get_epp_code(string $domain_name): array` | Kusamutsa domain (kutuluka) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Kusamutsa domain (kulowa) |

### Mwambo wa mtengo wobwezedwa {#return-value-convention}

Njira zonse zimabweza array yokhala osachepera kiyi ya `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Kulembetsa capability yanu {#registering-your-capability}

Lembetsani class yanu pogwiritsa ntchito action ya `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argument yoyamba ku `add_capability()` ndi **provider ID** — slug ya zilembo zazing'ono yomwe imagwiritsidwa ntchito kuzindikira registrar yanu mu makonda, kasinthidwe ka chinthu, ndi ma channel a log. Gwiritsani ntchito china chapadera (mwachitsanzo, slug ya kampani yanu).

---

## Kuwonjezera minda ya zitsimikizo ku wizard {#adding-credential-fields-to-the-wizard}

Kuti mulole ma admin alowe zitsimikizo kudzera mu setup wizard, lembetsani integration yanu:

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

Zitsimikizo zimasungidwa ngati network options pogwiritsa ntchito ma ID a field ngati makiyi. Zipezeni mu capability class yanu ndi `wu_get_setting('my_registrar_api_key')`.

---

## Ma hook a zochita za pambuyo pa kulembetsa {#hooks-for-post-registration-actions}

Gwiritsani ntchito ma action awa kuyambitsa ma webhook, provisioning, zidziwitso, kapena zosintha za CRM:

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

## Kusunga malogi {#logging}

Lembani ku njira ya logi ya wopereka wanu pogwiritsa ntchito `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Malogi amaoneka pansi pa **Woyang'anira Netiweki › Ultimate Multisite › Malogi › domain-seller-my-registrar**.
