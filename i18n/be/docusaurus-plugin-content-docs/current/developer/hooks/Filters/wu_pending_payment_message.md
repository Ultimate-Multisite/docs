---
id: wu_pending_payment_message
title: Фільтр - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Дазваляе карыўніку змяніць паведамленне, якое выказваецца пра неаплачаныя плацёжкі.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Паведамленне, якое будзе выведзена. |
| $customer | `\WP_Ultimo\Models\Customer` | Bieжачы карыўнік. |
| $pending_payments | `array` | Спіс неаплачаных плацёжкі. |

### З версіі

- 2.0.19
### Выказванне ў выдатку

Вызначана ў [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) на 244-й паўніне.
