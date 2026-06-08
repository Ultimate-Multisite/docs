---
id: wu_pending_payment_message
title: Filtr - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtr: wu_pending_payment_message

Pozwala użytkownikowi zmienić komunikat dotyczący płatności oczekujących.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $message | `string` | Komunikat, który ma zostać wyświetlony. |
| $customer | `\WP_Ultimo\Models\Customer` | Aktualny klient. |
| $pending_payments | `array` | Lista płatności oczekujących. |

### Od

- 2.0.19
### Źródło

Zdefiniowane w [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) w linii 244
