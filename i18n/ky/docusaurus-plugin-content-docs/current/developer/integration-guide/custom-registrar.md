---
title: Ыңгайлаштырылган каттоочу интеграциясын түзүү
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ыңгайлаштырылган каттоочу интеграциясын түзүү

Domain Seller addon **Integration Registry** үлгүсүн колдонот. Ар бир каттоочу `Domain_Selling_Capability` ишке ашырган жана `wu_domain_seller_register_capabilities` action hook аркылуу өзүн каттаган PHP класс болуп саналат.

Бул колдонмо ыңгайлаштырылган каттоочуну кантип туташтырууну көрсөтөт.

## Интерфейс {#the-interface}

Сиздин классыңыз `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ишке ашырып, `WP_Ultimo\Integrations\Base_Capability_Module` кеңейтиши керек.

Талап кылынган ыкмалар:

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

### Кошумча ыкмалар {#optional-methods}

Кошумча мүмкүнчүлүктөрдү ачуу үчүн буларды ишке ашырыңыз. Addon колдоону `method_exists()` аркылуу аныктайт:

| Ыкма | Ачкан мүмкүнчүлүктөр |
|---|---|
| `supports_whois_privacy(): bool` | Продукт жөндөөлөрүндөгү WHOIS купуялык опциясы |
| `enable_whois_privacy(string $domain_name): array` | Каттоо учурунда купуялыкты автоматтык түрдө иштетет |
| `get_dns_records(string $domain_name): array` | Кардардын DNS көрүү өтмөгү |
| `add_dns_record(string $domain_name, array $record_data): array` | Кардар DNS жазууларын кошо алат |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Кардар DNS жазууларын түзөтө алат |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Кардар DNS жазууларын өчүрө алат |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver башкаруу |
| `get_epp_code(string $domain_name): array` | Доменди өткөрүү (чыгуучу) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Доменди өткөрүү (кирүүчү) |

### Кайтарылган маани боюнча келишим {#return-value-convention}

Бардык ыкмалар эң аз дегенде `success` ачкычы бар массивди кайтарат:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Мүмкүнчүлүгүңүздү каттоо {#registering-your-capability}

Классыңызды `wu_domain_seller_register_capabilities` action аркылуу каттаңыз:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` функциясынын биринчи аргументи — **provider ID** — жөндөөлөрдө, продукт конфигурациясында жана журнал каналдарында каттоочуңузду аныктоо үчүн колдонулган кичине тамгалардан турган slug. Уникалдуу бир нерсени колдонуңуз (мисалы, компанияңыздын slug мааниси).

---

## Wizard'га эсептик маалымат талааларын кошуу {#adding-credential-fields-to-the-wizard}

Админдер setup wizard аркылуу эсептик маалыматтарды киргизе алышы үчүн, интеграцияңызды каттаңыз:

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

Эсептик маалыматтар талаа ID'лери ачкыч катары колдонулган network options түрүндө сакталат. Аларды мүмкүнчүлүк классыңызда `wu_get_setting('my_registrar_api_key')` менен алыңыз.

---

## Каттоодон кийинки аракеттер үчүн hook'тор {#hooks-for-post-registration-actions}

Webhook'торду, камсыздоону, билдирмелерди же CRM жаңыртууларын иштетүү үчүн бул action'дорду колдонуңуз:

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

## Журналдаштыруу {#logging}

Провайдериңизге тиешелүү журнал каналына `wu_log_add()` аркылуу жазыңыз:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Журналдар **Тармак администратору › Ultimate Multisite › Журналдар › domain-seller-my-registrar** бөлүмүндө көрүнөт.
