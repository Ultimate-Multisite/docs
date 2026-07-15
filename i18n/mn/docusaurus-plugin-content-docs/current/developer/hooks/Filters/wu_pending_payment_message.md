---
id: wu_pending_payment_message
title: Шүүлтүүр - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Хэрэглэгчид хүлээгдэж буй төлбөрүүдийн тухай мессежийг өөрчлөх боломж олгоно.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $message | `string` | Хэвлэх мессеж. |
| $customer | `\WP_Ultimo\Models\Customer` | Одоогийн хэрэглэгч. |
| $pending_payments | `array` | Хүлээгдэж буй төлбөрүүдтэй жагсаалт. |

### Хойш {#since}

- 2.0.19
### Эх сурвалж {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244)-д 244-р мөрөнд тодорхойлсон
