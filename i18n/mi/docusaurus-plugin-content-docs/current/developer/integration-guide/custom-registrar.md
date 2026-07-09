---
title: Te Hanga i tētahi Tuituitanga Kairēhita Ritenga
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Te Hanga i tētahi Whakaurunga Registrar Ritenga

Ka whakamahi te Domain Seller addon i tētahi tauira **Integration Registry**. He akomanga PHP ia registrar e whakatinana ana i `Domain_Selling_Capability`, ā, ka rēhita i a ia anō mā te action hook `wu_domain_seller_register_capabilities`.

E whakaatu ana tēnei aratohu me pēhea te hono mai i tētahi registrar ritenga.

## Te atanga

Me whakatinana tō akomanga i `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability`, ā, me whakawhānui i `WP_Ultimo\Integrations\Base_Capability_Module`.

Ngā aratuka e hiahiatia ana:

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

### Ngā aratuka kōwhiringa

Whakatinanatia ēnei kia whakatuwhera i ngā āhuatanga tāpiri. Ka rapu te addon i te tautoko mā `method_exists()`:

| Aratuka | Ka whakatuwhera |
|---|---|
| `supports_whois_privacy(): bool` | Kōwhiringa matatapu WHOIS i ngā tautuhinga hua |
| `enable_whois_privacy(string $domain_name): array` | Ka whakahohe aunoa i te matatapu i te rēhitatanga |
| `get_dns_records(string $domain_name): array` | Ripa tiro DNS mā te kiritaki |
| `add_dns_record(string $domain_name, array $record_data): array` | Ka taea e te kiritaki te tāpiri pūkete DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Ka taea e te kiritaki te whakatika pūkete DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Ka taea e te kiritaki te muku pūkete DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Whakahaere nameserver |
| `get_epp_code(string $domain_name): array` | Whakawhiti rohe (puta atu) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Whakawhiti rohe (kuhu mai) |

### Tikanga uara whakahoki

Ka whakahoki ngā aratuka katoa i tētahi array me tētahi kī `success` hei mea iti rawa:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Te rēhita i tō āheinga

Rēhitatia tō akomanga mā te action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Ko te tohenga tuatahi ki `add_capability()` ko te **ID kaiwhakarato** — he slug pūriki e whakamahia ana hei tautuhi i tō registrar i ngā tautuhinga, te whirihoranga hua, me ngā hongere rangitaki. Whakamahia tētahi mea motuhake (hei tauira, te slug o tō kamupene).

---

## Te tāpiri āpure taipitopito tuakiri ki te ruānuku

Kia āhei ai ngā kaiwhakahaere ki te tāuru taipitopito tuakiri mā te ruānuku tatūnga, rēhitatia tō whakaurunga:

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

Ka penapenatia ngā taipitopito tuakiri hei kōwhiringa whatunga mā te whakamahi i ngā ID āpure hei kī. Tikina i roto i tō akomanga āheinga mā `wu_get_setting('my_registrar_api_key')`.

---

## Ngā hook mō ngā mahi whai muri i te rēhitatanga

Whakamahia ēnei action hei whakaoho i ngā webhook, te whakarato, ngā whakamōhiotanga, ngā whakahōu CRM rānei:

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

## Rangitaki

Tuhia ki tō hongere rangitaki motuhake ki te kaiwhakarato mā te whakamahi i `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Ka puta ngā rangitaki i raro i **Kaiwhakahaere Whatunga › Ultimate Multisite › Rangitaki › domain-seller-my-registrar**.
