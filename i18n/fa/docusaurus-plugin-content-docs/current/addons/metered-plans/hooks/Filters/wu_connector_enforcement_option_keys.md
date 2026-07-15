---
id: wu_connector_enforcement_option_keys
title: فیلتر - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

این فیلتر، لیست کلیدهای تنظیمات ارائه‌دهنده هوش مصنوعی که از سایت اصلی اعمال می‌شوند را فیلتر می‌کند.

از این فیلتر برای افزودن کلیدهای تنظیمات پلاگین‌های ارائه‌دهنده هوش مصنوعی سفارشی یا شخص ثالث استفاده کنید تا تنظیمات آن‌ها نیز در زیرسایت‌ها از سایت اصلی به ارث برسد.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | نام کلیدهای تنظیماتی که باید اعمال شوند (این لیست شامل کلیدهای کانکتور کشف شده به صورت پویا و EXTRA_PROVIDER_OPTIONS نیز می‌شود). |

### از نسخه {#since}

- 1.2.0
### منبع {#source}

در [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) در خط 206 تعریف شده است.
