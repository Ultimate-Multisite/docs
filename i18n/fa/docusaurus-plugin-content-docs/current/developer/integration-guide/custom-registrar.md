---
title: ساخت یک یکپارچه‌سازی ثبت‌کننده سفارشی
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# ساخت یک یکپارچه‌سازی (Integration) ثبت دامنه سفارشی

افزونه Domain Seller از الگوی **Integration Registry** استفاده می‌کند. هر ثبت‌کننده (registrar) یک کلاس PHP است که `Domain_Selling_Capability` را پیاده‌سازی کرده و خودش را از طریق اکشن هوک `wu_domain_seller_register_capabilities` ثبت می‌کند.

این راهنما نشان می‌دهد که چگونه یک ثبت‌کننده سفارشی را به سیستم متصل کنید.

## رابط (The interface)

کلاس شما باید `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` را پیاده‌سازی کرده و از `WP_Ultimo\Integrations\Base_Capability_Module` ارث‌بری کند.

متدهای مورد نیاز:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- متدهای شناسایی مورد نیاز (از Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // همیشه 'domain-selling'
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

    // --- متدهای اصلی مورد نیاز (از Domain_Selling_Capability) ---

    /** دریافت تمام TLDهای موجود و قیمت عمده. */
    public function sync_tlds(): array { ... }

    /** بررسی در دسترس بودن $domain_name در TLDهای مختلف. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** دریافت قیمت عمده برای یک TLD برای N سال. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** ثبت دامنه. در صورت موفقیت، ['success' => true, 'expiry_date' => '...'] برمی‌گرداند. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** تمدید دامنه برای N سال. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** دریافت وضعیت ثبت، تاریخ انقضا، و Nameserverها. */
    public function get_domain_info(string $domain_name): array { ... }

    /** تست اعتبارنامه‌ها و اتصال API. */
    public function test_connection(): array { ... }
}
```

### متدهای اختیاری

برای فعال کردن قابلیت‌های بیشتر، این متدها را پیاده‌سازی کنید. افزونه با استفاده از `method_exists()` پشتیبانی را تشخیص می‌دهد:

| متد | قابلیت فعال شده |
|---|---|
| `supports_whois_privacy(): bool` | گزینه حریم خصوصی WHOIS در تنظیمات محصول |
| `enable_whois_privacy(string $domain_name): array` | فعال‌سازی خودکار حریم خصوصی در زمان ثبت |
| `get_dns_records(string $domain_name): array` | تب نمایش DNS برای مشتری |
| `add_dns_record(string $domain_name, array $record_data): array` | امکان افزودن رکوردهای DNS توسط مشتری |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | امکان ویرایش رکوردهای DNS توسط مشتری |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | امکان حذف رکوردهای DNS توسط مشتری |
| `update_nameservers(string $domain_name, array $nameservers): array` | مدیریت Nameserverها |
| `get_epp_code(string $domain_name): array` | انتقال دامنه (خروجی) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | انتقال دامنه (ورودی) |

### قرارداد مقدار بازگشتی (Return value convention)

تمام متدها یک آرایه را برمی‌گردانند که حداقل شامل کلید `success` باشد:

```php
// موفقیت
return ['success' => true, 'data' => [...]];

// شکست
return ['success' => false, 'message' => 'پیام خطای قابل خواندن توسط انسان'];
```

---

## ثبت قابلیت شما (Registering your capability)

کلاس خود را با استفاده از اکشن `wu_domain_seller_register_capabilities` ثبت کنید:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

آرگومان اول `add_capability()` **شناسه ارائه‌دهنده (provider ID)** است — یک اسلاگ کوچک حروف‌ریشه که برای شناسایی ثبت‌کننده شما در تنظیمات، پیکربندی محصول و کانال‌های لاگ استفاده می‌شود. از چیزی منحصر به فرد استفاده کنید (مثلاً اسلاگ شرکت شما).

---

## افزودن فیلدهای اعتبارنامه به ویزارد (Adding credential fields to the wizard)

برای اینکه مدیران بتوانند اعتبارنامه‌ها را از طریق ویزارد راه‌اندازی وارد کنند، یکپارچه‌سازی خود را ثبت کنید:

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

اعتبارنامه‌ها به صورت تنظیمات شبکه (network options) با استفاده از `field ID`ها به عنوان کلید ذخیره می‌شوند. آن‌ها را در کلاس قابلیت خود با `wu_get_setting('my_registrar_api_key')` بازیابی کنید.

---

## هوک‌ها برای اقدامات پس از ثبت (Hooks for post-registration actions)

از این اکشن‌ها برای فعال‌سازی وب‌هوک‌ها، فراهم‌سازی (provisioning)، اعلان‌ها یا به‌روزرسانی‌های CRM استفاده کنید:

```php
// پس از ثبت موفق دامنه
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: پاسخ خام ثبت‌کننده
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// پس از شکست ثبت
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// پس از تمدید موفق
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // سیستم صورت‌حساب خود را به‌روز کنید، رسید ارسال کنید و غیره.
}, 10, 3);

// پس از شکست تمدید
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // هشدار، منطق تلاش مجدد و غیره.
}, 10, 3);

// پس از تکمیل انتقال دامنه
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain یک شیء WP_Ultimo\Models\Domain است
}, 10, 2);

// پس از تأیید SES DKIM (اگر یکپارچه‌سازی SES فعال باشد)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain یک شیء WP_Ultimo\Models\Domain است
});
```

---

## لاگ‌برداری (Logging)

از `wu_log_add()` برای نوشتن در کانال لاگ مخصوص ارائه‌دهنده خود استفاده کنید:

```php
wu_log_add('domain-seller-my-registrar', "ثبت {$domain_name} با موفقیت انجام شد", 'info');
wu_log_add('domain-seller-my-registrar', "ثبت نام شکست خورد: {$error}", 'error');
```

لاگ‌ها در **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** نمایش داده می‌شوند.
