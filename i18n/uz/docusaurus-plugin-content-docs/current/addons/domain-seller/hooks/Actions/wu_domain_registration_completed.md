---
id: wu_domain_registration_completed
title: Amal - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Domen muvaffaqiyatli ro‘yxatdan o‘tkazilgandan keyin ishga tushadi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ro‘yxatdan o‘tkazishni ishga tushirgan to‘lov. |
| $registration_data | `array&lt;string,mixed&gt;` | Ro‘yxatdan o‘tkazish metadata ma’lumotlari (domain_name, provider_id, years, expiry_date va hokazo). |
| $result | `array&lt;string,mixed&gt;` | Registrar tomonidan qaytarilgan xom natija massivi. |

### Dan boshlab {#since}

- 2.0.0
### Manba {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) faylida, 1204-qatorda aniqlangan
