---
title: Dhisidda Isdhexgal Diiwaangeliye Gaar loo Habeeyey
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Dhisidda Isku-xirka Registrar Gaar ah {#building-a-custom-registrar-integration}

Addon-ka Domain Seller wuxuu adeegsadaa qaabka **Integration Registry**. Registrar kasta waa PHP class hirgeliya `Domain_Selling_Capability` oo isdiiwaangeliya isaga oo adeegsanaya action hook-ka `wu_domain_seller_register_capabilities`.

Hagahani wuxuu muujinayaa sida loogu xiro registrar gaar ah.

## Interface-ka {#the-interface}

Class-kaagu waa inuu hirgeliyaa `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` oo uu ballaariyaa `WP_Ultimo\Integrations\Base_Capability_Module`.

Hababka loo baahan yahay:

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

### Habab ikhtiyaari ah {#optional-methods}

Hirgelintooda waxay furaysaa astaamo dheeraad ah. Addon-ku wuxuu taageerada ku ogaadaa `method_exists()`:

| Hab | Waxa uu furo |
|---|---|
| `supports_whois_privacy(): bool` | Xulashada asturnaanta WHOIS ee dejimaha badeecadda |
| `enable_whois_privacy(string $domain_name): array` | Si toos ah ayuu asturnaanta u hawlgeliyaa marka la diiwaangelinayo |
| `get_dns_records(string $domain_name): array` | Tab-ka aragtida DNS ee macmiilka |
| `add_dns_record(string $domain_name, array $record_data): array` | Macmiilku wuu ku dari karaa diiwaannada DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Macmiilku wuu tafatiri karaa diiwaannada DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Macmiilku wuu tirtiri karaa diiwaannada DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Maareynta nameserver-ka |
| `get_epp_code(string $domain_name): array` | Wareejinta domain-ka (baxaysa) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Wareejinta domain-ka (soo galaysa) |

### Habka qiimaha soo noqda {#return-value-convention}

Dhammaan hababku waxay soo celiyaan array leh ugu yaraan furaha `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Diiwaangelinta awooddaada {#registering-your-capability}

Diiwaangeli class-kaaga adigoo adeegsanaya action-ka `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argument-ga koowaad ee `add_capability()` waa **provider ID** — slug xarfo yaryar ah oo loo isticmaalo aqoonsiga registrar-kaaga gudaha dejimaha, qaabaynta badeecadda, iyo kanaallada log-ga. Adeegso wax gaar kuu ah (tusaale, slug-ga shirkaddaada).

---

## Ku darista goobaha aqoonsiga wizard-ka {#adding-credential-fields-to-the-wizard}

Si admins ay aqoonsiyada uga geliyaan setup wizard-ka, diiwaangeli integration-kaaga:

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

Aqoonsiyada waxaa loo kaydiyaa sidii network options iyadoo field ID-yada loo adeegsanayo furayaal. Ka soo hel capability class-kaaga adigoo adeegsanaya `wu_get_setting('my_registrar_api_key')`.

---

## Hooks loogu talagalay ficillada diiwaangelinta kadib {#hooks-for-post-registration-actions}

Adeegso actions-kan si aad u kiciso webhooks, diyaarinta adeegga, ogeysiisyada, ama cusboonaysiinta CRM:

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

## Diiwaangelin {#logging}

Ku qor kanaalka diiwaanka ee u gaar ah bixiyahaaga adigoo isticmaalaya `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Diiwaannadu waxay ka muuqdaan **Maamulka Shabakadda › Ultimate Multisite › Diiwaanno › domain-seller-my-registrar**.
