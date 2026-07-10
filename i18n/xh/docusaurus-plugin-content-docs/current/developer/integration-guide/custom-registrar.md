---
title: Ukwakha uDibaniso loMbhalisi olulungiselelweyo
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ukwakha Udibaniso lwe-Registrar Olulungiselelweyo {#building-a-custom-registrar-integration}

I-addon ye-Domain Seller isebenzisa ipateni ye-**Integration Registry**. I-registrar nganye yi-class ye-PHP ephumeza `Domain_Selling_Capability` kwaye izibhalisa nge-action hook ethi `wu_domain_seller_register_capabilities`.

Esi sikhokelo sibonisa indlela yokudibanisa i-registrar elungiselelweyo.

## I-interface {#the-interface}

I-class yakho kufuneka iphumeze `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` kwaye yandise `WP_Ultimo\Integrations\Base_Capability_Module`.

Iindlela ezifunekayo:

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

### Iindlela ozikhethelayo {#optional-methods}

Ziphumeze ezi ukuze uvule iimpawu ezongezelelweyo. I-addon ibona inkxaso nge-`method_exists()`:

| Indlela | Ivula |
|---|---|
| `supports_whois_privacy(): bool` | Ukhetho lobumfihlo be-WHOIS kwiisetingi zemveliso |
| `enable_whois_privacy(string $domain_name): array` | Auto-enables privacy at registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer can add DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer can edit DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer can delete DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Isivumelwano sexabiso elibuyiswayo {#return-value-convention}

Zonke iindlela zibuyisa i-array enesitshixo se-`success` ubuncinane:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Ukubhalisa isakhono sakho {#registering-your-capability}

Bhalisa i-class yakho usebenzisa i-action ethi `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

I-argument yokuqala ku-`add_capability()` yi-**provider ID** — i-slug yoonobumba abancinci esetyenziswa ukuchonga i-registrar yakho kwiisetingi, kuqwalaselo lwemveliso, nakwiitshaneli zeelog. Sebenzisa into eyahlukileyo (umz., i-slug yenkampani yakho).

---

## Ukongeza iifildi zeziqinisekiso kwi-wizard {#adding-credential-fields-to-the-wizard}

Ukuvumela abalawuli bafake iziqinisekiso nge-setup wizard, bhalisa udibaniso lwakho:

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

Iziqinisekiso zigcinwa njenge-network options kusetyenziswa ii-ID zeefildi njengezitshixo. Zifumane kwi-class yesakhono sakho nge-`wu_get_setting('my_registrar_api_key')`.

---

## Ii-hook zezenzo zasemva kobhaliso {#hooks-for-post-registration-actions}

Sebenzisa ezi zenzo ukuqalisa ii-webhook, provisioning, izaziso, okanye uhlaziyo lwe-CRM:

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

## Iilog {#logging}

Bhala kwitshaneli yelog ethile ye-provider yakho usebenzisa `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Iilog zivela phantsi kwe-**Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
