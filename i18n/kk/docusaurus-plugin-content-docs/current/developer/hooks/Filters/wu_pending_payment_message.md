---
id: wu_pending_payment_message
title: Сүзгі - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Пайдаланушыға күтудегі төлемдер туралы хабарламаны өзгертуге мүмкіндік береді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $message | `string` | Шығарылатын хабарлама. |
| $customer | `\WP_Ultimo\Models\Customer` | Ағымдағы клиент. |
| $pending_payments | `array` | Күтудегі төлемдер тізімі. |

### Бастап {#since}

- 2.0.19
### Дереккөз {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ішінде, 244-жолда анықталған.
