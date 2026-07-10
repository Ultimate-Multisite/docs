---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

پس از شکست تلاش برای تمدید دامنه، فراخوانی می‌شود.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | پرداختی که باعث این تلاش برای تمدید شده است. |
| $renewal_data | `array<string,mixed>` | فراداده تمدید (شامل نام دامنه، تعداد سال و غیره). |
| $error_message | `string` | پیام خطای قابل خواندن توسط انسان که از طرف رجیسترار (ثبت‌کننده) دریافت شده است. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) در خط ۶۳۰ تعریف شده است.
