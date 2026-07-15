---
title: Պատվերով ռեգիստրատորի ինտեգրացիայի ստեղծում
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Հատուկ գրանցողի ինտեգրումի կառուցում

Domain Seller addon-ը օգտագործում է **Integration Registry** ձևանմուշ։ Յուրաքանչյուր գրանցող PHP class է, որը իրականացնում է `Domain_Selling_Capability` և ինքն իրեն գրանցում է `wu_domain_seller_register_capabilities` action hook-ի միջոցով։

Այս ուղեցույցը ցույց է տալիս՝ ինչպես միացնել հատուկ գրանցող։

## Ինտերֆեյսը {#the-interface}

Ձեր class-ը պետք է իրականացնի `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` և ընդլայնի `WP_Ultimo\Integrations\Base_Capability_Module`։

Պարտադիր մեթոդներ՝

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

### Ընտրովի մեթոդներ {#optional-methods}

Իրականացրեք սրանք՝ լրացուցիչ հնարավորություններ բացելու համար։ addon-ը աջակցությունը հայտնաբերում է `method_exists()`-ի միջոցով՝

| Մեթոդ | Բացում է |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS գաղտնիության ընտրանք ապրանքի կարգավորումներում |
| `enable_whois_privacy(string $domain_name): array` | Ավտոմատ միացնում է գաղտնիությունը գրանցման ժամանակ |
| `get_dns_records(string $domain_name): array` | Հաճախորդի DNS դիտման ներդիր |
| `add_dns_record(string $domain_name, array $record_data): array` | Հաճախորդը կարող է ավելացնել DNS գրառումներ |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Հաճախորդը կարող է խմբագրել DNS գրառումները |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Հաճախորդը կարող է ջնջել DNS գրառումները |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver-ի կառավարում |
| `get_epp_code(string $domain_name): array` | Դոմեյնի փոխանցում (ելքային) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Դոմեյնի փոխանցում (մուտքային) |

### Վերադարձվող արժեքի պայմանականություն {#return-value-convention}

Բոլոր մեթոդները վերադարձնում են array, որը նվազագույնը պարունակում է `success` key՝

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Ձեր capability-ի գրանցում {#registering-your-capability}

Գրանցեք ձեր class-ը՝ օգտագործելով `wu_domain_seller_register_capabilities` action-ը՝

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-ի առաջին արգումենտը **provider ID**-ն է՝ փոքրատառ slug, որն օգտագործվում է ձեր գրանցողին նույնականացնելու համար կարգավորումներում, ապրանքի կազմաձևումում և մատյանների ալիքներում։ Օգտագործեք եզակի մի բան (օրինակ՝ ձեր ընկերության slug-ը)։

---

## Հավատարմագրային դաշտերի ավելացում wizard-ին {#adding-credential-fields-to-the-wizard}

Որպեսզի ադմինները կարողանան մուտքագրել հավատարմագրերը setup wizard-ի միջոցով, գրանցեք ձեր ինտեգրումը՝

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

Հավատարմագրերը պահվում են որպես network options՝ օգտագործելով դաշտերի ID-ները որպես key-եր։ Ստացեք դրանք ձեր capability class-ում՝ `wu_get_setting('my_registrar_api_key')`-ով։

---

## Հետգրանցման գործողությունների hook-եր {#hooks-for-post-registration-actions}

Օգտագործեք այս action-ները՝ webhooks, provisioning, ծանուցումներ կամ CRM թարմացումներ գործարկելու համար՝

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

## Մատյանագրում {#logging}

Գրեք ձեր մատակարարին հատուկ մատյանագրման ալիքում՝ օգտագործելով `wu_log_add()`՝

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Մատյանները հայտնվում են **Ցանցի ադմինիստրատոր › Ultimate Multisite › Մատյաններ › domain-seller-my-registrar** բաժնում։
