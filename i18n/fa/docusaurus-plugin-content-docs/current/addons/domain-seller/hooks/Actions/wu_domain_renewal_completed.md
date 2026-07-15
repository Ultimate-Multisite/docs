---
id: wu_domain_renewal_completed
title: عمل - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

پس از تمدید موفقیت‌آمیز یک دامنه، اجرا می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | پرداخت مورد نظر که باعث تمدید شده است. |
| $renewal_data | `array&lt;string,mixed&gt;` | متادیتای تمدید (مانند نام دامنه، سال‌ها، شناسه مشتری و غیره). |
| $result | `array&lt;string,mixed&gt;` | آرایه نتیجه خام که توسط ثبت‌کننده (registrar) برگردانده شده و شامل `expiry_date` جدید است. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) در خط ۵۹۴ تعریف شده است.
