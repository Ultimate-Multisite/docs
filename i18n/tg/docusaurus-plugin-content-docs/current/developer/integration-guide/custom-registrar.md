---
title: Сохтани ҳамгироии фармоишии регистратор
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Сохтани ҳамгироии фармоишии бақайдгиранда

Иловаи Domain Seller аз намунаи **Integration Registry** истифода мебарад. Ҳар бақайдгиранда як синфи PHP аст, ки `Domain_Selling_Capability`-ро татбиқ мекунад ва худро тавассути hook-и амали `wu_domain_seller_register_capabilities` сабт менамояд.

Ин роҳнамо нишон медиҳад, ки чӣ гуна як бақайдгирандаи фармоиширо пайваст кардан мумкин аст.

## Интерфейс

Синфи шумо бояд `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability`-ро татбиқ кунад ва `WP_Ultimo\Integrations\Base_Capability_Module`-ро васеъ намояд.

Усулҳои зарурӣ:

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

### Усулҳои ихтиёрӣ

Инҳоро татбиқ кунед, то имкониятҳои иловагӣ фаъол шаванд. Илова дастгириро тавассути `method_exists()` муайян мекунад:

| Усул | Фаъол мекунад |
|---|---|
| `supports_whois_privacy(): bool` | Имконоти махфияти WHOIS дар танзимоти маҳсулот |
| `enable_whois_privacy(string $domain_name): array` | Ҳангоми бақайдгирӣ махфиятро худкор фаъол мекунад |
| `get_dns_records(string $domain_name): array` | Ҷадвали намоиши DNS барои муштарӣ |
| `add_dns_record(string $domain_name, array $record_data): array` | Муштарӣ метавонад сабтҳои DNS илова кунад |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Муштарӣ метавонад сабтҳои DNS-ро таҳрир кунад |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Муштарӣ метавонад сабтҳои DNS-ро нест кунад |
| `update_nameservers(string $domain_name, array $nameservers): array` | Идоракунии nameserver |
| `get_epp_code(string $domain_name): array` | Интиқоли домен (баромадӣ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Интиқоли домен (воридотӣ) |

### Қоидаи арзиши баргардонӣ

Ҳамаи усулҳо массиверо бармегардонанд, ки ҳадди ақал дорои калиди `success` аст:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Сабт кардани қобилияти худ

Синфи худро бо истифода аз амали `wu_domain_seller_register_capabilities` сабт кунед:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Аргументи якуми `add_capability()` **ID-и provider** аст — slug-и ҳарфҳои хурд, ки барои муайян кардани бақайдгирандаи шумо дар танзимот, конфигуратсияи маҳсулот ва каналҳои лог истифода мешавад. Аз чизи нодир истифода баред (масалан, slug-и ширкати худ).

---

## Илова кардани майдонҳои маълумоти эътимоднома ба wizard

Барои он ки admin-ҳо тавонанд маълумоти эътимодномаро тавассути setup wizard ворид кунанд, ҳамгироии худро сабт кунед:

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

Маълумоти эътимоднома ҳамчун имконоти шабака бо истифода аз ID-ҳои майдон ҳамчун калидҳо нигоҳ дошта мешавад. Онҳоро дар синфи қобилияти худ бо `wu_get_setting('my_registrar_api_key')` гиред.

---

## Hook-ҳо барои амалҳои пас аз бақайдгирӣ

Ин амалҳоро барои фаъол кардани webhook-ҳо, provisioning, огоҳиномаҳо ё навсозиҳои CRM истифода баред:

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

## Сабтҳо

Ба канали сабти махсуси провайдери худ бо истифода аз `wu_log_add()` нависед:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Сабтҳо дар **Маъмури шабака › Ultimate Multisite › Сабтҳо › domain-seller-my-registrar** пайдо мешаванд.
