---
id: wu_pending_payment_message
title: Фильтр - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Фильтр: wu_pending_payment_message

Кулланучыга көтелгән түләүләр турында хәбәрне үзгәртергә мөмкинлек бирә.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $message | `string` | Чыгарылачак хәбәр. |
| $customer | `\WP_Ultimo\Models\Customer` | Хәзерге клиент. |
| $pending_payments | `array` | Көтелгән түләүләр исемлеге. |

### Бирле

- 2.0.19
### Чыганак

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) эчендә 244 нче юлда билгеләнгән
