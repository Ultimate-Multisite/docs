---
id: wu_domain_registration_failed
title: Amal - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Amal: wu_domain_registration_failed

Domenni ro‘yxatdan o‘tkazish urinishi muvaffaqiyatsiz tugaganidan keyin ishga tushadi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ro‘yxatdan o‘tkazishni ishga tushirgan to‘lov. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed va error_message ni o‘z ichiga olgan ro‘yxatdan o‘tkazish metama’lumotlari. |
| $error_message | `string` | Registratordan kelgan inson o‘qiy oladigan xato xabari. |

### Beri {#since}

- 2.0.0
### Manba {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) faylida 1250-qatorda aniqlangan
