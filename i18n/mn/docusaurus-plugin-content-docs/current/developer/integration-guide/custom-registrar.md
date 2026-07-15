---
title: Custom Registrar интеграц бүтээх
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Захиалгат registrar интеграци бүтээх

Domain Seller addon нь **Integration Registry** загварыг ашигладаг. Registrar бүр нь `Domain_Selling_Capability`-г хэрэгжүүлдэг PHP class бөгөөд `wu_domain_seller_register_capabilities` action hook-оор дамжуулан өөрийгөө бүртгэдэг.

Энэ гарын авлага нь захиалгат registrar-г хэрхэн холбохыг харуулна.

## Интерфейс {#the-interface}

Таны class `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability`-г хэрэгжүүлж, `WP_Ultimo\Integrations\Base_Capability_Module`-г өргөтгөх ёстой.

Шаардлагатай аргууд:

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

### Сонголттой аргууд {#optional-methods}

Нэмэлт боломжуудыг нээхийн тулд эдгээрийг хэрэгжүүлнэ үү. Addon нь дэмжлэгийг `method_exists()`-оор илрүүлдэг:

| Арга | Нээх боломж |
|---|---|
| `supports_whois_privacy(): bool` | Бүтээгдэхүүний тохиргоон дахь WHOIS нууцлалын сонголт |
| `enable_whois_privacy(string $domain_name): array` | Бүртгэлийн үед нууцлалыг автоматаар идэвхжүүлнэ |
| `get_dns_records(string $domain_name): array` | Үйлчлүүлэгчийн DNS харах tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Үйлчлүүлэгч DNS бичлэг нэмэх боломжтой |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Үйлчлүүлэгч DNS бичлэг засварлах боломжтой |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Үйлчлүүлэгч DNS бичлэг устгах боломжтой |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver удирдлага |
| `get_epp_code(string $domain_name): array` | Домэйн шилжүүлэг (гарах) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Домэйн шилжүүлэг (орох) |

### Буцаах утгын зарчим {#return-value-convention}

Бүх аргууд хамгийн багадаа `success` key агуулсан array буцаана:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Capability-гаа бүртгэх {#registering-your-capability}

`wu_domain_seller_register_capabilities` action ашиглан class-аа бүртгэнэ үү:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-д өгөх эхний аргумент нь **provider ID** — тохиргоо, бүтээгдэхүүний тохируулга, log сувгуудад таны registrar-г танихад ашиглагдах жижиг үсгийн slug юм. Давтагдашгүй зүйл ашиглана уу (жишээ нь, танай компанийн slug).

---

## Wizard-д credential талбарууд нэмэх {#adding-credential-fields-to-the-wizard}

Админууд setup wizard-оор дамжуулан credentials оруулах боломжтой болгохын тулд интеграциа бүртгэнэ үү:

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

Credentials нь талбарын ID-г key болгон ашиглаж network options хэлбэрээр хадгалагдана. Тэдгээрийг capability class дотроо `wu_get_setting('my_registrar_api_key')` ашиглан авна уу.

---

## Бүртгэлийн дараах үйлдлүүдэд зориулсан hook-ууд {#hooks-for-post-registration-actions}

Webhook, provisioning, мэдэгдэл, эсвэл CRM шинэчлэлтүүдийг өдөөхийн тулд эдгээр action-уудыг ашиглана уу:

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

## Лог бүртгэл {#logging}

`wu_log_add()` ашиглан өөрийн үйлчилгээ үзүүлэгчид хамаарах лог суваг руу бичнэ үү:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Логууд **Сүлжээний админ › Ultimate Multisite › Логууд › domain-seller-my-registrar** доор харагдана.
