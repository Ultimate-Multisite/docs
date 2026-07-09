---
title: କଷ୍ଟମ୍ ରେଜିଷ୍ଟ୍ରାର୍ ଇଣ୍ଟିଗ୍ରେସନ୍ ତିଆରି କରିବା
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# କଷ୍ଟମ Registrar Integration ତିଆରି କରିବା

Domain Seller addon ଏକ **Integration Registry** ପ୍ୟାଟର୍ନ ବ୍ୟବହାର କରେ। ପ୍ରତ୍ୟେକ registrar ହେଉଛି ଏକ PHP class, ଯାହା `Domain_Selling_Capability` କାର୍ଯ୍ୟାନ୍ବୟନ କରେ ଏବଂ `wu_domain_seller_register_capabilities` action hook ମାଧ୍ୟମରେ ନିଜକୁ ପଞ୍ଜୀକୃତ କରେ।

ଏହି ଗାଇଡ୍ କଷ୍ଟମ registrar କିପରି ଯୋଡ଼ିବେ ତାହା ଦେଖାଏ।

## Interface

ଆପଣଙ୍କ class କୁ `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` କାର୍ଯ୍ୟାନ୍ବୟନ କରିବାକୁ ଏବଂ `WP_Ultimo\Integrations\Base_Capability_Module` ବିସ୍ତାର କରିବାକୁ ପଡ଼ିବ।

ଆବଶ୍ୟକ method:

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

### ଐଚ୍ଛିକ method

ଅତିରିକ୍ତ ବୈଶିଷ୍ଟ୍ୟ ଖୋଲିବା ପାଇଁ ଏଗୁଡ଼ିକୁ କାର୍ଯ୍ୟାନ୍ବୟନ କରନ୍ତୁ। addon `method_exists()` ମାଧ୍ୟମରେ ସମର୍ଥନ ଚିହ୍ନଟ କରେ:

| Method | ଖୋଲିଥାଏ |
|---|---|
| `supports_whois_privacy(): bool` | ପ୍ରଡକ୍ଟ ସେଟିଙ୍ଗରେ WHOIS ଗୋପନୀୟତା ବିକଳ୍ପ |
| `enable_whois_privacy(string $domain_name): array` | ପଞ୍ଜୀକରଣ ସମୟରେ ଗୋପନୀୟତା ସ୍ୱୟଂଚାଳିତ ଭାବେ ଚାଲୁ କରେ |
| `get_dns_records(string $domain_name): array` | ଗ୍ରାହକ DNS ଦେଖିବା ଟ୍ୟାବ୍ |
| `add_dns_record(string $domain_name, array $record_data): array` | ଗ୍ରାହକ DNS records ଯୋଡ଼ିପାରିବେ |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ଗ୍ରାହକ DNS records ସମ୍ପାଦନ କରିପାରିବେ |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ଗ୍ରାହକ DNS records ହଟାଇପାରିବେ |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver ପରିଚାଳନା |
| `get_epp_code(string $domain_name): array` | Domain ସ୍ଥାନାନ୍ତରଣ (ବାହାରକୁ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain ସ୍ଥାନାନ୍ତରଣ (ଭିତରକୁ) |

### Return value ପ୍ରଚଳନ

ସମସ୍ତ method କମ୍ ସେ କମ୍ `success` key ସହିତ ଏକ array ଫେରାଇଥାଏ:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## ଆପଣଙ୍କ capability ପଞ୍ଜୀକରଣ

`wu_domain_seller_register_capabilities` action ବ୍ୟବହାର କରି ଆପଣଙ୍କ class ପଞ୍ଜୀକରଣ କରନ୍ତୁ:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` ର ପ୍ରଥମ argument ହେଉଛି **provider ID** — ସେଟିଙ୍ଗ, ପ୍ରଡକ୍ଟ କନଫିଗରେସନ୍ ଏବଂ log channels ରେ ଆପଣଙ୍କ registrar କୁ ଚିହ୍ନଟ କରିବା ପାଇଁ ବ୍ୟବହୃତ ଏକ lowercase slug। କିଛି ଅନନ୍ୟ ବ୍ୟବହାର କରନ୍ତୁ (ଯେପରି, ଆପଣଙ୍କ କମ୍ପାନୀ slug)।

---

## Wizard ରେ credential field ଯୋଡ଼ିବା

setup wizard ମାଧ୍ୟମରେ admins ଙ୍କୁ credentials ଦେବାକୁ ସୁବିଧା ଦେବା ପାଇଁ, ଆପଣଙ୍କ integration ପଞ୍ଜୀକରଣ କରନ୍ତୁ:

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

Credentials ଗୁଡ଼ିକ field IDs କୁ key ଭାବେ ବ୍ୟବହାର କରି network options ଭାବରେ ସଞ୍ଚୟ ହୁଏ। ଆପଣଙ୍କ capability class ରେ `wu_get_setting('my_registrar_api_key')` ସହିତ ସେଗୁଡ଼ିକୁ ନେଇଆସନ୍ତୁ।

---

## ପଞ୍ଜୀକରଣ ପରବର୍ତ୍ତୀ କାର୍ଯ୍ୟ ପାଇଁ Hooks

webhooks, provisioning, notifications, କିମ୍ବା CRM updates ଟ୍ରିଗର୍ କରିବା ପାଇଁ ଏହି actions ବ୍ୟବହାର କରନ୍ତୁ:

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

## ଲଗ୍ ରଖିବା

ଆପଣଙ୍କ ପ୍ରଦାତା-ନିର୍ଦ୍ଦିଷ୍ଟ ଲଗ୍ ଚ୍ୟାନେଲ୍‌କୁ `wu_log_add()` ବ୍ୟବହାର କରି ଲେଖନ୍ତୁ:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

ଲଗ୍‌ଗୁଡ଼ିକ **ନେଟୱର୍କ ଆଡମିନ୍ › Ultimate Multisite › ଲଗ୍ › domain-seller-my-registrar** ଅଧୀନରେ ଦେଖାଯାଏ।
