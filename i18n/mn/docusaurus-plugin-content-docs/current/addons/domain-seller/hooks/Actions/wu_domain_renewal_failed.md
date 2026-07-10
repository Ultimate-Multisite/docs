---
id: wu_domain_renewal_failed
title: Үйлдэл - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Домэйн сунгах оролдлого амжилтгүй болсны дараа ажиллана.

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Сунгалтыг үүсгэсэн төлбөр. |
| $renewal_data | `array&lt;string,mixed&gt;` | Сунгалтын мета өгөгдөл (domain_name, years гэх мэт). |
| $error_message | `string` | Бүртгэгчээс ирсэн, хүнд ойлгомжтой алдааны мессеж. |

### Хувилбараас {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630)-д 630-р мөрөнд тодорхойлсон
