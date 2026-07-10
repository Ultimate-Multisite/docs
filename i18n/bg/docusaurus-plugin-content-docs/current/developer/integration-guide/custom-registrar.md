---
title: Изграждане на персонализирана интеграция с регистратор
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Изграждане на персонализирана интеграция с регистратори {#building-a-custom-registrar-integration}

Addon за продажба на домейни използва модел, наречен **Integration Registry** (Регистър на интеграции). Всеки регистратор е PHP клас, който имплементира `Domain_Selling_Capability` и се регистрира чрез action hook `wu_domain_seller_register_capabilities`.

Този гайд показва как да свържете собствен (кастомен) регистратор.

## Интерфейсът {#the-interface}

Вашият клас трябва да имплементира `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` и да наследява `WP_Ultimo\Integrations\Base_Capability_Module`.

Необходими методи:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Необходими методи за идентификация (от Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // винаги 'domain-selling'
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

    // --- Основни необходими методи (от Domain_Selling_Capability) ---

    /** Извлича всички налични TLD и лут (wholesale) ценообразуване. */
    public function sync_tlds(): array { ... }

    /** Проверява наличността на $domain_name в различни $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Получава лут цена за TLD за N години. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Регистрира домейн. Връща ['success' => true, 'expiry_date' => '...'] при успех. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Продължава (renew) домейн за N години. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Получава информация за домейна, изтекъл дата, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Тества API потребителските данни и свързаността. */
    public function test_connection(): array { ... }
}
```

### По избор методи {#optional-methods}

Имплементирайте тези методи, за да отключите допълнителни функции. Addonът проверява поддръжката чрез `method_exists()`:

| Метод | Отключва |
|---|---|
| `supports_whois_privacy(): bool` | Опция за WHOIS поверителност в настройките на продукта |
| `enable_whois_privacy(string $domain_name): array` | Автоматично включване на поверителност при регистрация |
| `get_dns_records(string $domain_name): array` | Табела за DNS записи на клиента |
| `add_dns_record(string $domain_name, array $record_data): array` | Клиентът може да добавя DNS записи |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Клиентът може да редактира DNS записи |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Клиентът може да изтрива DNS записи |
| `update_nameservers(string $domain_name, array $nameservers): array` | Управление на nameservers |
| `get_epp_code(string $domain_name): array` | Прехвърляне на домейн (изходящо) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Прехвърляне на домейн (входящо) |

### Конвенция за връщани стойности {#return-value-convention}

Всички методи връщат масив, който поне съдържа ключа `success`:

```php
// Успех
return ['success' => true, 'data' => [...]];

// Неуспех
return ['success' => false, 'message' => 'Потребителски разбираема грешка'];
```

---

## Регистриране на вашата функционалност {#registering-your-capability}

Регистрирайте класа си, използвайки action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Първият аргумент в `add_capability()` е **provider ID** (идентификатор на доставчика) — това е нискослукав slug, използван за идентифициране на вашия регистратор в настройките, конфигурацията на продукта и лог каналите. Използвайте нещо уникално (например, slug на вашата компания).

---

## Добавяне на полета за потребителски данни към wizard-а {#adding-credential-fields-to-the-wizard}

За да позволите на администраторите да въвеждат потребителски данни през setup wizard, регистрирайте интеграцията си:

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

Потребителските данни се съхраняват като network options, като ключовете са ID-тата на полетата. Извличайте ги в класът на функционалността си с `wu_get_setting('my_registrar_api_key')`.

---

## Hooks за действия след регистрация {#hooks-for-post-registration-actions}

Използвайте тези actions, за да активирате webhooks, provisioning, известия или актуализации на CRM:

```php
// След успешно регистриране на домейн
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: сурови отговор от регистратора
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// След неуспешно регистриране
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// След успешно продължаване (renewal)
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Актуализирайте системата за фактуриране, изпратете касиет и т.н.
}, 10, 3);

// След неуспешно продължаване (renewal)
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Изпратете предупреждение, логика за повторен опит и т.н.
}, 10, 3);

// След завършване на прехвърляне на домейн
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain е обект от типа WP_Ultimo\Models\Domain
}, 10, 2);

// След верификация на SES DKIM (ако интеграцията с SES е активна)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain е обект от типа WP_Ultimo\Models\Domain
});
```

---

## Логиране (Logging) {#logging}

Пишете в специфичния за доставчика лог канал, използвайки `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Лог файловете се намират в **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
