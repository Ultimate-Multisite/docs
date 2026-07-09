---
title: Kubaka ihuzwa ryihariye ry’umwanditsi w’amazina ya domaine
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Kubaka Ihuzwa rya Registrar Ryihariye

Addon ya Domain Seller ikoresha imiterere ya **Integration Registry**. Buri registrar ni class ya PHP ishyira mu bikorwa `Domain_Selling_Capability` kandi ikiyandikisha binyuze kuri action hook ya `wu_domain_seller_register_capabilities`.

Aka gatabo kerekana uko wahurizamo registrar yihariye.

## Interface

Class yawe igomba gushyira mu bikorwa `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` kandi ikagura `WP_Ultimo\Integrations\Base_Capability_Module`.

Uburyo busabwa:

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

### Uburyo butari ngombwa

Bishyire mu bikorwa kugira ngo ufungure ibindi biranga. Addon imenya ubufasha binyuze kuri `method_exists()`:

| Uburyo | Ibyo ifungura |
|---|---|
| `supports_whois_privacy(): bool` | Amahitamo y’ibanga rya WHOIS mu igenamiterere ry’ibicuruzwa |
| `enable_whois_privacy(string $domain_name): array` | Ihita ifungura ibanga igihe cyo kwiyandikisha |
| `get_dns_records(string $domain_name): array` | Tab yo kureba DNS y’umukiriya |
| `add_dns_record(string $domain_name, array $record_data): array` | Umukiriya ashobora kongeramo DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Umukiriya ashobora guhindura DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Umukiriya ashobora gusiba DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gucunga nameserver |
| `get_epp_code(string $domain_name): array` | Kwimura domain (isohoka) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Kwimura domain (iyinjira) |

### Amabwiriza y’agaciro gasubizwa

Uburyo bwose busubiza array ifite nibura key ya `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Kwandikisha ubushobozi bwawe

Andikisha class yawe ukoresheje action ya `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argument ya mbere ya `add_capability()` ni **provider ID** — slug y’inyuguti nto ikoreshwa kumenya registrar yawe mu igenamiterere, mu itunganywa ry’ibicuruzwa, no mu nzira za log. Koresha ikintu cyihariye (urugero, slug y’isosiyete yawe).

---

## Kongera fields z’ibyangombwa muri wizard

Kugira ngo ureke admins binjize ibyangombwa binyuze muri setup wizard, andikisha integration yawe:

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

Ibyangombwa bibikwa nka network options hakoreshejwe field IDs nka keys. Bibone muri class y’ubushobozi bwawe ukoresheje `wu_get_setting('my_registrar_api_key')`.

---

## Hooks z’ibikorwa bya nyuma yo kwiyandikisha

Koresha ibi bikorwa kugira ngo utangize webhooks, gutegura serivisi, imenyesha, cyangwa ivugurura rya CRM:

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

## Gufata inyandiko

Andika ku muyoboro w’inyandiko wihariye ku mutanga-serivisi wawe ukoresheje `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Inyandiko zigaragara munsi ya **Ubuyobozi bw’Urusobe › Ultimate Multisite › Inyandiko › domain-seller-my-registrar**.
