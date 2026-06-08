---
title: Створення власної інтеграції з реєстратором
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Створення власної інтеграції реєстратора доменів

Додаток Domain Seller використовує шаблон **Integration Registry** (Реєстр інтеграцій). Кожен реєстратор — це клас PHP, який реалізує `Domain_Selling_Capability` та реєструє себе через action hook `wu_domain_seller_register_capabilities`.

У цьому посібнику показано, як підключити власного реєстратора.

## Інтерфейс

Ваш клас повинен реалізувати `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` та успадковувати `WP_Ultimo\Integrations\Base_Capability_Module`.

Необхідні методи:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Необхідні методи ідентифікації (з Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // завжди 'domain-selling'
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

    // --- Основні необхідні методи (з Domain_Selling_Capability) ---

    /** Отримує всі доступні TLD та оптові ціни. */
    public function sync_tlds(): array { ... }

    /** Перевіряє доступність $domain_name для $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Отримує оптову ціну для TLD на N років. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Реєструє домен. Повертає ['success' => true, 'expiry_date' => '...'] у разі успіху. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Поновлює домен на N років. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Отримує інформацію про домен: статус реєстрації, дату закінчення терміну, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Тестує облікові дані API та зв'язок. */
    public function test_connection(): array { ... }
}
```

### Необов'язкові методи

Реалізуйте їх, щоб розблокувати додаткові функції. Додаток виявляє підтримку за допомогою `method_exists()`:

| Метод | Розблоковує |
|---|---|
| `supports_whois_privacy(): bool` | Опція конфіденційності WHOIS в налаштуваннях продукту |
| `enable_whois_privacy(string $domain_name): array` | Автоматично вмикає конфіденційність при реєстрації |
| `get_dns_records(string $domain_name): array` | Вкладка DNS для клієнта |
| `add_dns_record(string $domain_name, array $record_data): array` | Клієнт може додавати записи DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Клієнт може редагувати записи DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Клієнт може видаляти записи DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Управління nameservers |
| `get_epp_code(string $domain_name): array` | Передача домену (вихідна) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Передача домену (вхідна) |

### Конвенція значення повернення

Усі методи повертають масив, який містить мінімум ключ `success`:

```php
// Успіх
return ['success' => true, 'data' => [...]];

// Збій
return ['success' => false, 'message' => 'Помилка, зрозуміла людині'];
```

---

## Реєстрація вашої можливості

Зареєструйте ваш клас, використовуючи action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Перший аргумент `add_capability()` — це **provider ID** (ідентифікатор провайдера) — нижній регістр слаговальне слово, яке використовується для ідентифікації вашого реєстратора в налаштуваннях, конфігурації продукту та логах. Використовуйте щось унікальне (наприклад, слаг вашої компанії).

---

## Додавання полів облікових даних до візарда

Щоб дозволити адміністраторам вводити облікові дані через візарда налаштування, зареєструйте вашу інтеграцію:

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

Облікові дані зберігаються як мережеві опції, використовуючи ID полів як ключі. Отримайте їх у вашому класі можливості за допомогою `wu_get_setting('my_registrar_api_key')`.

---

## Хуки для дій після реєстрації

Використовуйте ці дії для запуску вебхуків, провізіонування, сповіщень або оновлення CRM:

```php
// Після успішної реєстрації домену
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: сирий відгук реєстратора
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Після збою реєстрації
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Після успішного поновлення
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Оновіть вашу платіжну систему, надішліть квитанцію тощо.
}, 10, 3);

// Після збою поновлення
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Сповіщення, логіка повтору тощо.
}, 10, 3);

// Після завершення передачі домену
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain — це об'єкт WP_Ultimo\Models\Domain
}, 10, 2);

// Після верифікації SES DKIM (якщо активна інтеграція SES)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain — це об'єкт WP_Ultimo\Models\Domain
});
```

---

## Логування

Пишіть у спеціалізований для вашого провайдера канал логів, використовуючи `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Логи відображаються у розділі **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
