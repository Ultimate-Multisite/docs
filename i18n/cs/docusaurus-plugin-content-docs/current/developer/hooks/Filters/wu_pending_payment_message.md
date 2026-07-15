---
id: wu_pending_payment_message
title: Filtrační metoda - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Umožňuje uživateli změnit zprávu o čekajících platbách.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $message | `string` | Zpráva, která se zobrazí. |
| $customer | `\WP_Ultimo\Models\Customer` | Aktuální zákazník. |
| $pending_payments | `array` | Seznam čekajících platb. |

### Od {#since}

- 2.0.19
### Zdroj {#source}

Definováno v [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) na řádku 244
