---
id: wu_domain_registration_completed
title: عمل - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

این اکشن پس از اینکه یک دامنه با موفقیت ثبت شد، فعال می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | پرداخت مرتبط با ثبت. |
| $registration_data | `array&lt;string,mixed&gt;` | متادیتای ثبت (شامل domain_name، provider_id، years، expiry_date و غیره). |
| $result | `array&lt;string,mixed&gt;` | آرایه نتیجه خام که توسط ثبت‌کننده (registrar) برگردانده شده است. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) در خط ۱۲۰۴ تعریف شده است.
