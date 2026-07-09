---
title: Создание пользовательской интеграции с регистратором
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Создание кастомной интеграции регистратора доменов {#building-a-custom-registrar-integration}

Addon Domain Seller использует паттерн **Integration Registry** (Реестр интеграций). Каждый регистратор — это класс PHP, который реализует `Domain_Selling_Capability` и регистрирует себя через action hook `wu_domain_seller_register_capabilities`.

В этом руководстве показано, как подключить кастомного регистратора.

## Интерфейс {#the-interface}

Ваш класс должен реализовать `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` и расширять `WP_Ultimo\Integrations\Base_Capability_Module`.

Требуемые методы:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Обязательные методы идентификации (из Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // всегда 'domain-selling'
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

    // --- Основные обязательные методы (из Domain_Selling_Capability) ---

    /** Получает все доступные TLD и оптовые цены. */
    public function sync_tlds(): array { ... }

    /** Проверяет доступность $domain_name по TLD. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Получает оптовую цену для TLD на N лет. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Регистрирует домен. При успехе возвращает ['success' => true, 'expiry_date' => '...']. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Продлевает домен на N лет. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Получает информацию о домене: статус регистрации, дата истечения срока, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Тестирует учетные данные API и подключение. */
    public function test_connection(): array { ... }
}
```

### Опциональные методы {#optional-methods}

Реализуйте их, чтобы открыть дополнительные функции. Addon определяет поддержку с помощью `method_exists()`:

| Метод | Открывает |
|---|---|
| `supports_whois_privacy(): bool` | Опция конфиденциальности WHOIS в настройках продукта |
| `enable_whois_privacy(string $domain_name): array` | Автоматически включает конфиденциальность при регистрации |
| `get_dns_records(string $domain_name): array` | Вкладку DNS для клиента |
| `add_dns_record(string $domain_name, array $record_data): array` | Позволяет клиенту добавлять записи DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Позволяет клиенту редактировать записи DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Позволяет клиенту удалять записи DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Управление nameservers |
| `get_epp_code(string $domain_name): array` | Передача домена (исходящая) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Передача домена (входящая) |

### Конвенция возвращаемого значения {#return-value-convention}

Все методы должны возвращать массив, который содержит как минимум ключ `success`:

```php
// Успех
return ['success' => true, 'data' => [...]];

// Сбой
return ['success' => false, 'message' => 'Ошибка, понятная человеку'];
```

---

## Регистрация вашей возможности {#registering-your-capability}

Зарегистрируйте ваш класс, используя action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Первый аргумент в `add_capability()` — это **provider ID** (идентификатор поставщика) — строчный слаг, используемый для идентификации вашего регистратора в настройках, конфигурации продукта и журналах. Используйте что-то уникальное (например, слаг вашей компании).

---

## Добавление полей учетных данных в мастер настройки {#adding-credential-fields-to-the-wizard}

Чтобы администраторы могли вводить учетные данные через мастер настройки, зарегистрируйте вашу интеграцию:

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

Учетные данные хранятся как сетевые опции, используя ID полей в качестве ключей. Получите их в вашем классе возможности с помощью `wu_get_setting('my_registrar_api_key')`.

---

## Хуки для действий после регистрации {#hooks-for-post-registration-actions}

Используйте эти actions для запуска вебхуков, процессов предоставления услуг (provisioning), уведомлений или обновлений CRM:

```php
// После успешной регистрации домена
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: сырой ответ регистратора
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// После сбоя регистрации
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Регистрация домена не удалась: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// После успешного продления
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Обновите вашу систему биллинга, отправьте квитанцию и т.д.
}, 10, 3);

// После сбоя продления
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Оповещение, логика повтора и т.д.
}, 10, 3);

// После завершения передачи домена
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain — это объект WP_Ultimo\Models\Domain
}, 10, 2);

// После верификации SES DKIM (если активна интеграция SES)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain — это объект WP_Ultimo\Models\Domain
});
```

---

## Логирование {#logging}

Записывайте данные в свой канал логов, специфичный для поставщика, используя `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Успешно зарегистрирован {$domain_name}", 'info');
wu_log_add('domain-seller-my-registrar', "Ошибка регистрации: {$error}", 'error');
```

Логи отображаются в **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
