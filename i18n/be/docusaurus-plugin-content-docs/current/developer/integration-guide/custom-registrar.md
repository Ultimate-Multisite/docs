---
title: Пабудова карыстальніцкага рэгістратара
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Стваৰванне кастымава интеграцыі рэгістратара

Аддонак Domain Seller выкарыстоўвае пацэнны пасыл (pattern) **Integration Registry**. Кожны рэгістратар — гэта клас PHP, які рэалізуе `Domain_Selling_Capability` і рэгіструе сябе праз action hook `wu_domain_seller_register_capabilities`.

Гутэ, як падключыць кастымавага рэгістратара.

## Інтерфейс

Ваш клас павінен рэалізаваць `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` і пашыраць `WP_Ultimo\Integrations\Base_Capability_Module`.

Неабходныя методы:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Неабходныя методы ідэнтыфікацыі (з Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // заўсёды 'domain-selling'
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

    // --- Асноўныя неабходныя методы (з Domain_Selling_Capability) ---

    /** Збірае ўсе магчымыя TLD і гульдовыя цаны. */
    public function sync_tlds(): array { ... }

    /** Праверыць магчымасць імя домену $domain_name па ўсіх $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Атрымаць гульдовую цану для TLD на N гадоў. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Рэгістраваць домен. Павяртае ['success' => true, 'expiry_date' => '...'] у выпадку поспеху. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Пановіць домен на N гадоў. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Атрымаць статус рэгіস্ট্রцыі, дату выгасання, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Праверыць увайсці API і злучэнне. */
    public function test_connection(): array { ... }
}
```

### Неабязначальныя методы

Рэалізуйце іх, каб адкрыць дадатковыя функцыі. Аддонак выяўляе падтрымку праз `method_exists()`:

| Метод | Адкрывае |
|---|---|
| `supports_whois_privacy(): bool` | Варыянт прыватнасці WHOIS ў настаўленнях прадукту |
| `enable_whois_privacy(string $domain_name): array` | Аўтаматычна ўключае прыватнасць пры рэгістрацыі |
| `get_dns_records(string $domain_name): array` | Падраздзель "DNS" для кліента |
| `add_dns_record(string $domain_name, array $record_data): array` | Кліент можа дадаць DNS запісы |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Кліент можа рэдагаваць DNS запісы |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Кліент можа выдаляць DNS запісы |
| `update_nameservers(string $domain_name, array $nameservers): array` | Апрацоўка nameservers |
| `get_epp_code(string $domain_name): array` | Трансфер домену (выходны) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Трансфер домену (паступлены) |

### Канвенцыя па вяртанні значэння

Усе методы павяртаюць масыў з мінімум ключом `success`:

```php
// Поспех
return ['success' => true, 'data' => [...]];

// Непадзежа
return ['success' => false, 'message' => 'Падрабязнае паведамленне пра памылку'];
```

---

## Рэгістрацыя вашай функцыянальнасці

Зарэгіструйце свой клас, выкарыстоўваючы action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Першы аргумент у `add_capability()` — гэта **provider ID** — паменны слюг, які выкарыстоўваецца для ідэнтыфікацыі вашага рэгістратара ў настаўленнях, канфігурацыі прадукту і каналах журналювання. Выкарыстоўвайце непаўторны ідэнтыфікатар (напрыклад, слюг вашай кампаніі).

---

## Дадаванне паляў для ўвайസ്‌ткаў (Credentials)

Каб дазволіць адміністратарым уводзіць увайсці праз wizard наладжання, зарэгіструйце свою интеграцыю:

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

Увайсці захоўваюцца як network options, выкарыстоўваючы ID паляў як ключы. Атрыхуце іх у класе вашай функцыянальнасці праз `wu_get_setting('my_registrar_api_key')`.

---

## Hooks для дзеянняў пасля рэгістрацыі

Выкарыстоўвайце гэтыя actions, каб выклікаць webhooks, правайзінг, паведамленні або абнаўленні CRM:

```php
// Пасля паспяховага рэгістравання домену
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: сырая адказ рэгістратара
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Пасля непадзежы рэгістрацыі
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Пасля паспяховага паноўлення
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Абнавіць свой сістэму выстаўлення рахункаў, адправіць квітанцыю і г.д.
}, 10, 3);

// Пасля непадзежы паноўлення
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Паведамленне, лагіка папыткі, і г.д.
}, 10, 3);

// Пасля канчання трансферу домену
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain — гэта WP_Ultimo\Models\Domain object
}, 10, 2);

// Пасля праверкі SES DKIM (калі актыўны SES integration)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain — гэта WP_Ultimo\Models\Domain object
});
```

---

## Журналіраванне (Logging)

Пішыце ў свой спецыфічны для провайдэра канал журналювання, выкарыстоўваючы `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Журналы з'яўляюцца ў **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
