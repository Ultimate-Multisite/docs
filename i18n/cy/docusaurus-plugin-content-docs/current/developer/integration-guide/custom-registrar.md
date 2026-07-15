---
title: Adeiladu Integreiddiad Cofrestrydd Wedi'i Deilwra
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Adeiladu Integreiddiad Cofrestrydd Personol

Mae addon Domain Seller yn defnyddio patrwm **Integration Registry**. Mae pob cofrestrydd yn ddosbarth PHP sy’n gweithredu `Domain_Selling_Capability` ac yn cofrestru ei hun drwy’r bachyn gweithredu `wu_domain_seller_register_capabilities`.

Mae’r canllaw hwn yn dangos sut i gysylltu cofrestrydd personol.

## Y rhyngwyneb {#the-interface}

Rhaid i’ch dosbarth weithredu `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ac ymestyn `WP_Ultimo\Integrations\Base_Capability_Module`.

Dulliau gofynnol:

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

### Dulliau dewisol {#optional-methods}

Gweithredwch y rhain i ddatgloi nodweddion ychwanegol. Mae’r addon yn canfod cymorth drwy `method_exists()`:

| Dull | Yn datgloi |
|---|---|
| `supports_whois_privacy(): bool` | Opsiwn preifatrwydd WHOIS mewn gosodiadau cynnyrch |
| `enable_whois_privacy(string $domain_name): array` | Yn galluogi preifatrwydd yn awtomatig wrth gofrestru |
| `get_dns_records(string $domain_name): array` | Tab golwg DNS i gwsmeriaid |
| `add_dns_record(string $domain_name, array $record_data): array` | Gall cwsmer ychwanegu cofnodion DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Gall cwsmer olygu cofnodion DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Gall cwsmer ddileu cofnodion DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Rheoli nameserver |
| `get_epp_code(string $domain_name): array` | Trosglwyddo parth (allanol) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Trosglwyddo parth (mewnol) |

### Confensiwn gwerth dychwelyd {#return-value-convention}

Mae pob dull yn dychwelyd arae gydag allwedd `success` o leiaf:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Cofrestru eich gallu {#registering-your-capability}

Cofrestrwch eich dosbarth gan ddefnyddio’r weithred `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Y ddadl gyntaf i `add_capability()` yw’r **ID darparwr** — slug llythrennau bach a ddefnyddir i adnabod eich cofrestrydd mewn gosodiadau, ffurfweddiad cynnyrch, a sianeli log. Defnyddiwch rywbeth unigryw (e.e., slug eich cwmni).

---

## Ychwanegu meysydd manylion mewngofnodi at y dewin {#adding-credential-fields-to-the-wizard}

I ganiatáu i weinyddwyr nodi manylion mewngofnodi drwy’r dewin gosod, cofrestrwch eich integreiddiad:

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

Cedwir manylion mewngofnodi fel opsiynau rhwydwaith gan ddefnyddio IDau’r meysydd fel allweddi. Adalwch nhw yn eich dosbarth gallu gyda `wu_get_setting('my_registrar_api_key')`.

---

## Bachau ar gyfer gweithredoedd ôl-gofrestru {#hooks-for-post-registration-actions}

Defnyddiwch y gweithredoedd hyn i sbarduno webhooks, provisioning, hysbysiadau, neu ddiweddariadau CRM:

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

## Logio {#logging}

Ysgrifennwch i'ch sianel logio sy'n benodol i'r darparwr gan ddefnyddio `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Mae logiau'n ymddangos o dan **Gweinyddiaeth Rhwydwaith › Ultimate Multisite › Logiau › domain-seller-my-registrar**.
