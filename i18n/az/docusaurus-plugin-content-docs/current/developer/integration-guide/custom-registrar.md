---
title: Xüsusi bir Registrar inteqrasiyası qurmaq
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Xüsusi Registrar İntegrasiyası Qurmaq {#building-a-custom-registrar-integration}

Domain Seller addon-u **Integration Registry** (İnteqrasiya Qeydiyyatı) modelindən istifadə edir. Hər bir registrar, `Domain_Selling_Capability` interfeysini tətbiq edən və `wu_domain_seller_register_capabilities` action hook-u vasitəsilə özünü qeyd edən bir PHP sinifidir.

Bu bələdçi sizə xüsusi bir registrar necə qoşacağınızı göstərir.

## İnterfeys {#the-interface}

Sinifiniz `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` interfeysini tətbiq etməli və `WP_Ultimo\Integrations\Base_Capability_Module` sinifindən irsi götürməlidir.

Tələb olunan metodlar:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Tələb olunan identifikasiya metodları (Base_Capability_Module-dan) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // həmişə 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('My Registrar vasitəsilə domen qeydiyyatını aktivləşdirin.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Əsas tələb olunan metodlar (Domain_Selling_Capability-dən) ---

    /** Mövcud bütün TLD-ləri və yığıl qiymətləndirməni (wholesale pricing) çəkir. */
    public function sync_tlds(): array { ... }

    /** $domain_name-in $tlds boyunca mövcudluğunu yoxlayır. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Bir TLD üçün N il üçün yığıl qiymətini alır. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Domen qeydiyyatı edir. Uğur halında ['success' => true, 'expiry_date' => '...'] qaytarır. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Domeni N il üçün yeniləyir. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Qeydiyyat statusunu, bitmə tarixini, nameserverləri alır. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API təsdiq məlumatlarını və bağlantılığı yoxlayır. */
    public function test_connection(): array { ... }
}
```

### Seçimlə metodlar {#optional-methods}

Əlavə funksionallıqları açmaq üçün bunları tətbiq edin. Addon, dəstəyi `method_exists()` vasitəsilə aşkarlayır:

| Metod | Açılan Funksionallıq |
|---|---|
| `supports_whois_privacy(): bool` | Məhsul ayarlarında WHOIS məxfiliyi seçimi |
| `enable_whois_privacy(string $domain_name): array` | Qeydiyyat zamanı məxfiliyi avtomatik aktivləşdirir |
| `get_dns_records(string $domain_name): array` | Müştəri DNS görünüş tabı |
| `add_dns_record(string $domain_name, array $record_data): array` | Müştəri DNS qeydləri əlavə edə bilər |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Müştəri DNS qeydlərini redaktə edə bilər |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Müştəri DNS qeydlərini silə bilər |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver idarəetməsi |
| `get_epp_code(string $domain_name): array` | Domen köçürməsi (çıxış) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domen köçürməsi (giriş) |

### Qaytarılan dəyər konvensiyası {#return-value-convention}

Bütün metodlar minimum `success` açarı olan bir array qaytarır:

```php
// Uğur
return ['success' => true, 'data' => [...]];

// Uğursuzluq
return ['success' => false, 'message' => 'İnsan tərəfindən oxuna bilən xəta'];
```

---

## Funksionallığınızı Qeyd Etmək {#registering-your-capability}

Sinifinizi `wu_domain_seller_register_capabilities` action-u istifadə edərək qeyd edin:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-nin birinci arqumenti **provider ID**-dir — bu, ayarlar, məhsul konfiqurasiyası və log kanallarında registrar-ınızı müəyyən etmək üçün istifadə olunan kiçik hərflərlə yazılmış bir slug-dur. Unikal bir şey istifadə edin (məsələn, şirkətinizin slug-u).

---

## Wizard-a Təsdiq Məlumatı Sahələri Əlavə Etmək {#adding-credential-fields-to-the-wizard}

Adminlərin quruluş wizard-ı vasitəsilə təsdiq məlumatlarını daxil etməsinə imkan vermək üçün inteqrasiyanızı qeyd edin:

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

Təsdiq məlumatları, sahə ID-ləri kimi açarlar istifadə edərək network options kimi saxlanılır. Onları capability sinifinizdə `wu_get_setting('my_registrar_api_key')` ilə əldə edin.

---

## Qeydiyyatdan Sonrakı İşlər üçün Hooks {#hooks-for-post-registration-actions}

Webhook-ları işə salmaq, təminat (provisioning), bildirişlər və ya CRM yeniləmələri üçün bu action-lardan istifadə edin:

```php
// Uğurla domen qeydiyyatı tamamlandıqdan sonra
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Qeydiyyat uğursuz olduqda
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Uğurla yeniləmə tamamlandıqdan sonra
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Mühasibat sisteminizi yeniləyin, bir qəbzi göndərin və s.
}, 10, 3);

// Yeniləmə uğursuz olduqda
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Xəbərdarlıq edin, yenidən cəhd etmə logikasını tətbiq edin və s.
}, 10, 3);

// Domen köçürməsi tamamlandıqdan sonra
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain bir WP_Ultimo\Models\Domain obyektidir
}, 10, 2);

// SES DKIM təsdiqi tamamlandıqdan sonra (əgər SES inteqrasiyası aktivdirsə)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain bir WP_Ultimo\Models\Domain obyektidir
});
```

---

## Loglama {#logging}

`wu_log_add()` istifadə edərək provider-a xas log kanalınıza yazın:

```php
wu_log_add('domain-seller-my-registrar', "{$domain_name} uğurla qeydiyyatdan keçdi", 'info');
wu_log_add('domain-seller-my-registrar', "Qeydiyyat uğursuz oldu: {$error}", 'error');
```

Loglar **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** altında görünür.
