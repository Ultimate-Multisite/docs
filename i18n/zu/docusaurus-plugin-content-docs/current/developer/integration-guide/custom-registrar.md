---
title: Ukwakha Ukuhlanganiswa Kombhalisi Okwenziwe Ngokwezifiso
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ukwakha Ukuhlanganiswa Kombhalisi Ngokwezifiso {#building-a-custom-registrar-integration}

I-addon ye-Domain Seller isebenzisa iphethini ye-**Integration Registry**. Umbhalisi ngamunye uyikilasi le-PHP elisebenzisa `Domain_Selling_Capability` futhi lizibhalisa nge-action hook ethi `wu_domain_seller_register_capabilities`.

Lo mhlahlandlela ubonisa ukuthi ungaxhuma kanjani umbhalisi wangokwezifiso.

## I-interface {#the-interface}

Ikilasi lakho kufanele lisebenzise `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` futhi linwebe `WP_Ultimo\Integrations\Base_Capability_Module`.

Izindlela ezidingekayo:

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

### Izindlela ozikhethelayo {#optional-methods}

Sebenzisa lezi ukuze uvule izici ezengeziwe. I-addon ithola ukusekelwa nge-`method_exists()`:

| Indlela | Okuvulwayo |
|---|---|
| `supports_whois_privacy(): bool` | Inketho yobumfihlo be-WHOIS kuzilungiselelo zomkhiqizo |
| `enable_whois_privacy(string $domain_name): array` | Auto-enables privacy at registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer can add DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer can edit DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer can delete DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Umthetho wenani elibuyiswayo {#return-value-convention}

Zonke izindlela zibuyisa uhlu olune-key ethi `success` okungenani:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Ukubhalisa ikhono lakho {#registering-your-capability}

Bhalisa ikilasi lakho usebenzisa i-action ethi `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

I-agumenti yokuqala ku-`add_capability()` yi-**provider ID** — i-slug yezinhlamvu ezincane esetshenziswa ukukhomba umbhalisi wakho kuzilungiselelo, ekucushweni komkhiqizo, naseziteshini zamalogi. Sebenzisa okuthile okuyingqayizivele (isb., i-slug yenkampani yakho).

---

## Ukwengeza izinkambu zemininingwane yokuqinisekisa kuwizadi {#adding-credential-fields-to-the-wizard}

Ukuze uvumele abalawuli bafake imininingwane yokuqinisekisa ngewizadi yokusetha, bhalisa ukuhlanganiswa kwakho:

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

Imininingwane yokuqinisekisa igcinwa njengezinketho zenethiwekhi kusetshenziswa ama-ID ezinkambu njengama-key. Yilande ekilasini lakho lekhono nge-`wu_get_setting('my_registrar_api_key')`.

---

## Ama-hook ezenzo zangemva kokubhaliswa {#hooks-for-post-registration-actions}

Sebenzisa lezi zenzo ukuze uqalise ama-webhook, ukuhlinzekwa, izaziso, noma izibuyekezo ze-CRM:

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

## Ukuloga {#logging}

Bhala esiteshini selogi esiqondene nomhlinzeki wakho usebenzisa `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Amalogi avela ngaphansi kokuthi **Network Admin › Ultimate Multisite › Amalogi › domain-seller-my-registrar**.
