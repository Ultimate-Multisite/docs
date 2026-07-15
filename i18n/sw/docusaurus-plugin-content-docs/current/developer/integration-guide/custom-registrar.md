---
title: Kuunda Uunganisho wa Usajili Maalum
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Kuunda Uunganishaji wa Usajili Maalum

Addon ya Domain Seller inatumia mfumo wa **Integration Registry**. Kila registrar ni class ya PHP ambayo inatekeleza `Domain_Selling_Capability` na kujisajili kupitia action hook ya `wu_domain_seller_register_capabilities`.

Mwongozo huu unakuonyesha jinsi ya kuunganisha (wire in) registrar yako maalum.

## Interface {#the-interface}

Class yako lazima itekeleze `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` na kuimarisha (extend) `WP_Ultimo\Integrations\Base_Capability_Module`.

Methods zinazohitajika:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Methods muhimu za utambulisho (kutoka Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // daima 'domain-selling'
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

    // --- Methods muhimu za msingi (kutoka Domain_Selling_Capability) ---

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

### Methods za Hiari {#optional-methods}

Tumia hizi ili kufungua vipengele zaidi. Addon inatambua usaidizi kupitia `method_exists()`:

| Method | Inafungua |
|---|---|
| `supports_whois_privacy(): bool` | Chaguo la faragha ya WHOIS katika mipangilio ya bidhaa |
| `enable_whois_privacy(string $domain_name): array` | Kuwezesha faragha kiotomatiki wakati wa usajili |
| `get_dns_records(string $domain_name): array` | Tab ya kuona DNS ya mteja |
| `add_dns_record(string $domain_name, array $record_data): array` | Mteja anaweza kuongeza rekodi za DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Mteja anaweza kuhariri rekodi za DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Mteja anaweza kufuta rekodi za DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Usimamizi wa nameservers |
| `get_epp_code(string $domain_name): array` | Uhamisho wa domain (kuondoka) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Uhamisho wa domain (kuingia) |

### Kanuni ya Thamani ya Kurudisha {#return-value-convention}

Methods zote zinakurudisha array yenye angalau key ya `success`:

```php
// Mafanikio
return ['success' => true, 'data' => [...]];

// Kushindwa
return ['success' => false, 'message' => 'Kosa linaloweza kusomwa na binadamu'];
```

---

## Kujisajili kwa Capability yako {#registering-your-capability}

Sajili class yako kwa kutumia action ya `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argumenti ya kwanza kwa `add_capability()` ni **provider ID** — ni slug ndogo (lowercase) inayotumika kutambua registrar yako katika mipangilio, usanidi wa bidhaa, na njia za log. Tumia kitu cha kipekee (k.m., slug ya kampuni yako).

---

## Kuongeza Fields za Credentials kwenye Wizard {#adding-credential-fields-to-the-wizard}

Ili kuruhusu wasimamizi kuingiza credentials kupitia setup wizard, sajili uunganishaji wako:

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

Credentials hihifadhiwa kama network options kwa kutumia field IDs kama keys. Upate zilizohifadhiwa katika class yako ya capability kwa kutumia `wu_get_setting('my_registrar_api_key')`.

---

## Hooks kwa Actions Baada ya Usajili {#hooks-for-post-registration-actions}

Tumia actions hizi ili kuanzisha webhooks, provisioning, notifications, au updates za CRM:

```php
// Baada ya usajili wa domain kufanikiwa
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Baada ya usajili kushindwa
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Baada ya ubariki (renewal) kufanikiwa
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Update mfumo wako wa bili, tuma risiti, n.k.
}, 10, 3);

// Baada ya ubariki kushindwa
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, logic ya kujaribu tena, n.k.
}, 10, 3);

// Baada ya uhamisho wa domain kukamilika
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain ni kitu cha WP_Ultimo\Models\Domain
}, 10, 2);

// Baada ya uhakiki wa SES DKIM (ikiwa SES integration ni active)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain ni kitu cha WP_Ultimo\Models\Domain
});
```

---

## Logging {#logging}

Andika kwenye channel yako ya log maalum kwa provider kwa kutumia `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs zinaonekana chini ya **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
