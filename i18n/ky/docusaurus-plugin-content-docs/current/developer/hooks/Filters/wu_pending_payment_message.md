---
id: wu_pending_payment_message
title: Чыпка - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Фильтр: wu_pending_payment_message

Колдонуучуга күтүүдөгү төлөмдөр жөнүндө билдирүүнү өзгөртүүгө уруксат берет.

## Параметрлер

| Аталышы | Түрү | Сүрөттөмө |
|------|------|-------------|
| $message | `string` | Басып чыгарылуучу билдирүү. |
| $customer | `\WP_Ultimo\Models\Customer` | Учурдагы кардар. |
| $pending_payments | `array` | Күтүүдөгү төлөмдөрдүн тизмеси. |

### Кайсы версиядан бери

- 2.0.19
### Булак

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ичинде 244-сапта аныкталган.
