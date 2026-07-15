---
id: wu_domain_renewal_failed
title: Amal - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Domenni uzaytirish urinishi muvaffaqiyatsiz tugaganidan keyin ishga tushadi.

## Parametrlar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Uzaytirishni ishga tushirgan to‘lov. |
| $renewal_data | `array&lt;string,mixed&gt;` | Uzaytirish metama’lumotlari (domain_name, years, va hokazo). |
| $error_message | `string` | Registratordan kelgan inson o‘qiy oladigan xato xabari. |

### Beri {#since}

- 2.0.0
### Manba {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ichida 630-qatorda belgilangan
