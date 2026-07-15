---
id: wu_domain_registration_failed
title: Үйлдэл - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Үйлдэл: wu_domain_registration_failed

Домэйн бүртгэх оролдлого амжилтгүй болсны дараа ажиллана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Бүртгэлийг өдөөсөн төлбөр. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed болон error_message агуулсан бүртгэлийн мета өгөгдөл. |
| $error_message | `string` | Бүртгэгчээс ирсэн хүн уншихад ойлгомжтой алдааны мессеж. |

### Хойш {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) файлд 1250-р мөрөнд тодорхойлсон.
