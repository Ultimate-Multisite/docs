---
title: Ho aha kopanyo e ikhethileng ea mongodisi
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ho aha Khokahanyo ea Registrar e Iketselitsoeng

Addon ea Domain Seller e sebelisa paterone ea **Integration Registry**. Registrar ka ’ngoe ke class ea PHP e sebelisang `Domain_Selling_Capability` mme e ingolisa ka action hook ea `wu_domain_seller_register_capabilities`.

Tataiso ena e bontša kamoo u ka hokelang registrar e iketselitsoeng.

## Interface

Class ea hao e tlameha ho sebelisa `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` le ho atolosa `WP_Ultimo\Integrations\Base_Capability_Module`.

Mekhoa e hlokahalang:

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

### Mekhoa ea boikhethelo

Sebelisa ena ho bula likarolo tse eketsehileng. Addon e lemoha tšehetso ka `method_exists()`:

| Mokhoa | E bula |
|---|---|
| `supports_whois_privacy(): bool` | Khetho ea lekunutu la WHOIS litlhophisong tsa sehlahisoa |
| `enable_whois_privacy(string $domain_name): array` | E bulela lekunutu ka bo eona ha ho ngolisoa |
| `get_dns_records(string $domain_name): array` | Tabo ea pono ea DNS ea moreki |
| `add_dns_record(string $domain_name, array $record_data): array` | Moreki a ka eketsa lirekoto tsa DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Moreki a ka hlophisa lirekoto tsa DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Moreki a ka hlakola lirekoto tsa DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Tsamaiso ea nameserver |
| `get_epp_code(string $domain_name): array` | Phetiso ea domain (e tsoang) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Phetiso ea domain (e kenang) |

### Tumellano ea boleng bo khutlisitsoeng

Mekhoa eohle e khutlisa array e nang le bonyane senotlolo sa `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Ho ngolisa bokhoni ba hao

Ngolisa class ea hao u sebelisa action ea `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argument ea pele ho `add_capability()` ke **ID ea mofani** — slug ea litlhaku tse nyenyane e sebelisoang ho khetholla registrar ea hao litlhophisong, tlhophisong ea sehlahisoa, le likanaleng tsa log. Sebelisa ntho e ikhethang (mohlala, slug ea k’hamphani ea hao).

---

## Ho eketsa masimo a mangolo a tumello ho wizard

Ho lumella batsamaisi ho kenya mangolo a tumello ka setup wizard, ngolisa khokahanyo ea hao:

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

Mangolo a tumello a bolokoa e le likhetho tsa network ho sebelisoa li-ID tsa masimo e le linotlolo. A fumane class ea hao ea bokhoni ka `wu_get_setting('my_registrar_api_key')`.

---

## Hooks bakeng sa liketso tsa ka mor’a ngoliso

Sebelisa liketso tsena ho tsosa webhooks, provisioning, litsebiso, kapa lintlafatso tsa CRM:

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

## Ho boloka direkoto

Ngola kanaleng ya direkoto e kgethehileng bakeng sa mofani wa hao o sebedisa `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Direkoto di hlaha tlasa **Motsamaisi wa Netweke › Ultimate Multisite › Direkoto › domain-seller-my-registrar**.
