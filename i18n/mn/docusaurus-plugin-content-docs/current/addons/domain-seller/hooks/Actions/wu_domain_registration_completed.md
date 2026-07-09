---
id: wu_domain_registration_completed
title: Үйлдэл - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Домэйн амжилттай бүртгэгдсэний дараа ажиллана.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Бүртгэлийг өдөөсөн төлбөр. |
| $registration_data | `array&lt;string,mixed&gt;` | Бүртгэлийн мета өгөгдөл (domain_name, provider_id, years, expiry_date гэх мэт). |
| $result | `array&lt;string,mixed&gt;` | Бүртгэгчээс буцаасан түүхий үр дүнгийн массив. |

### Хувилбараас

- 2.0.0
### Эх сурвалж

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204)-д 1204-р мөрөнд тодорхойлсон
