---
title: Maxsus registrator integratsiyasini yaratish
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Maxsus Registrar integratsiyasini yaratish

Domain Seller addon **Integration Registry** patternidan foydalanadi. Har bir registrar `Domain_Selling_Capability` ni implementatsiya qiladigan va `wu_domain_seller_register_capabilities` action hook orqali o‘zini ro‘yxatdan o‘tkazadigan PHP class hisoblanadi.

Ushbu qo‘llanma custom registrarni qanday ulashni ko‘rsatadi.

## Interfeys

Classingiz `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ni implementatsiya qilishi va `WP_Ultimo\Integrations\Base_Capability_Module` ni extend qilishi kerak.

Talab qilinadigan metodlar:

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

### Ixtiyoriy metodlar

Qo‘shimcha imkoniyatlarni ochish uchun bularni implementatsiya qiling. Addon qo‘llab-quvvatlashni `method_exists()` orqali aniqlaydi:

| Metod | Ochadi |
|---|---|
| `supports_whois_privacy(): bool` | mahsulot sozlamalaridagi WHOIS maxfiylik opsiyasi |
| `enable_whois_privacy(string $domain_name): array` | Ro‘yxatdan o‘tkazishda maxfiylikni avtomatik yoqadi |
| `get_dns_records(string $domain_name): array` | Mijoz DNS ko‘rish tabi |
| `add_dns_record(string $domain_name, array $record_data): array` | Mijoz DNS yozuvlarini qo‘sha oladi |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Mijoz DNS yozuvlarini tahrirlay oladi |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Mijoz DNS yozuvlarini o‘chira oladi |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver boshqaruvi |
| `get_epp_code(string $domain_name): array` | Domen transferi (chiquvchi) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domen transferi (kiruvchi) |

### Qaytariladigan qiymat konvensiyasi

Barcha metodlar kamida `success` kalitiga ega array qaytaradi:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Capabilityingizni ro‘yxatdan o‘tkazish

Classingizni `wu_domain_seller_register_capabilities` action yordamida ro‘yxatdan o‘tkazing:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` ga beriladigan birinchi argument **provider ID** — sozlamalar, mahsulot konfiguratsiyasi va log kanallarida registraringizni aniqlash uchun ishlatiladigan kichik harfli slug. Noyob biror narsa ishlating (masalan, kompaniyangiz slugi).

---

## Wizardga credential maydonlarini qo‘shish

Adminlarga setup wizard orqali credentiallarni kiritish imkonini berish uchun integratsiyangizni ro‘yxatdan o‘tkazing:

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

Credentiallar field IDlaridan key sifatida foydalanib network optionlar ko‘rinishida saqlanadi. Ularni capability classingizda `wu_get_setting('my_registrar_api_key')` bilan oling.

---

## Ro‘yxatdan o‘tkazishdan keyingi actionlar uchun hooklar

Webhooklar, provisioning, bildirishnomalar yoki CRM yangilanishlarini ishga tushirish uchun ushbu actionlardan foydalaning:

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

## Jurnallash

Provayderingizga xos jurnal kanaliga `wu_log_add()` yordamida yozing:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Jurnallar **Tarmoq administratori › Ultimate Multisite › Jurnallar › domain-seller-my-registrar** ostida ko‘rinadi.
