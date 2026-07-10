---
id: wu_domain_renewal_completed
title: Harakat - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Amal: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Domen muvaffaqiyatli yangilangandan keyin ishga tushadi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Yangilanishni ishga tushirgan to‘lov. |
| $renewal_data | `array&lt;string,mixed&gt;` | Yangilanish metama’lumotlari (domain_name, years, customer_id va hokazo). |
| $result | `array&lt;string,mixed&gt;` | Registrar tomonidan qaytarilgan, yangi expiry_date ni o‘z ichiga olgan xom natija massivi. |

### Boshlab {#since}

- 2.0.0
### Manba {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) faylida 594-qatorda belgilangan
