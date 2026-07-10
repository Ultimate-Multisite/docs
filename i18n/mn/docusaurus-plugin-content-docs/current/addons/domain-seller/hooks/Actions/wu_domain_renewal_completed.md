---
id: wu_domain_renewal_completed
title: Үйлдэл - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Домэйн амжилттай сунгагдсаны дараа ажиллана.

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Сунгалтыг өдөөсөн төлбөр. |
| $renewal_data | `array&lt;string,mixed&gt;` | Сунгалтын мета өгөгдөл (domain_name, years, customer_id гэх мэт). |
| $result | `array&lt;string,mixed&gt;` | Шинэ expiry_date-г багтаасан, registrar-аас буцаасан түүхий үр дүнгийн массив. |

### Хувилбараас {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594)-д 594-р мөрөнд тодорхойлсон
