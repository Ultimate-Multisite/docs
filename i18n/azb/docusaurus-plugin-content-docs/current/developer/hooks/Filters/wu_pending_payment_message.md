---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Kullanıcının bekleyen ödemelerle ilgili mesajı değiştirmesine olanak tanır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Yazdırılacak mesaj. |
| $customer | `\WP_Ultimo\Models\Customer` | Mevcut müşteri. |
| $pending_payments | `array` | Bekleyen ödemeleri içeren bir liste. |

### Versiyon {#since}

- 2.0.19
### Kaynak {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) dosyasında 244. satırda tanımlanmıştır.
