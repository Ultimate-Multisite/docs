---
title: Изработка на прилагодена интеграција со регистратор
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Градење прилагодена интеграција со регистратор

Domain Seller додатокот користи шема **Integration Registry**. Секој регистратор е PHP класа што имплементира `Domain_Selling_Capability` и се регистрира преку action hook-от `wu_domain_seller_register_capabilities`.

Овој водич покажува како да поврзете прилагоден регистратор.

## Интерфејсот

Вашата класа мора да имплементира `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` и да ја прошири `WP_Ultimo\Integrations\Base_Capability_Module`.

Задолжителни методи:

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

### Незадолжителни методи

Имплементирајте ги овие за да отклучите дополнителни функции. Додатокот ја открива поддршката преку `method_exists()`:

| Метод | Отклучува |
|---|---|
| `supports_whois_privacy(): bool` | Опција за WHOIS приватност во поставките на производот |
| `enable_whois_privacy(string $domain_name): array` | Автоматски овозможува приватност при регистрација |
| `get_dns_records(string $domain_name): array` | Јазиче за преглед на DNS за клиентот |
| `add_dns_record(string $domain_name, array $record_data): array` | Клиентот може да додава DNS записи |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Клиентот може да уредува DNS записи |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Клиентот може да брише DNS записи |
| `update_nameservers(string $domain_name, array $nameservers): array` | Управување со nameserver-и |
| `get_epp_code(string $domain_name): array` | Пренос на домен (излезен) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Пренос на домен (влезен) |

### Конвенција за повратна вредност

Сите методи враќаат низа со најмалку клуч `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Регистрирање на вашата способност

Регистрирајте ја вашата класа користејќи ја акцијата `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Првиот аргумент за `add_capability()` е **ID на провајдерот** — slug со мали букви што се користи за идентификување на вашиот регистратор во поставките, конфигурацијата на производот и каналите за логови. Користете нешто уникатно (на пр., slug на вашата компанија).

---

## Додавање полиња за акредитиви во волшебникот

За да им овозможите на администраторите да внесуваат акредитиви преку волшебникот за поставување, регистрирајте ја вашата интеграција:

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

Акредитивите се зачувуваат како мрежни опции користејќи ги ID-јата на полињата како клучеви. Преземете ги во вашата класа за способност со `wu_get_setting('my_registrar_api_key')`.

---

## Hooks за дејства по регистрација

Користете ги овие дејства за активирање webhooks, provisioning, известувања или ажурирања на CRM:

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

## Евидентирање

Запишувајте во каналот за логови специфичен за вашиот давател со користење на `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Логовите се појавуваат под **Мрежен администратор › Ultimate Multisite › Логови › domain-seller-my-registrar**.
