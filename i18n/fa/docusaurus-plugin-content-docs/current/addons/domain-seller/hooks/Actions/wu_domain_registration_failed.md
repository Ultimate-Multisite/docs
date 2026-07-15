---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

این اکشن پس از شکست تلاش برای ثبت دامنه فراخوانی می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | پرداختی که باعث (trigger) ثبت دامنه شده است. |
| $registration_data | `array&lt;string,mixed&gt;` | متادیتای ثبت دامنه شامل status=failed و error_message. |
| $error_message | `string` | پیام خطای قابل خواندن توسط انسان از طرف ثبت‌کننده (registrar). |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) در خط ۱۲۵۰ تعریف شده است.
