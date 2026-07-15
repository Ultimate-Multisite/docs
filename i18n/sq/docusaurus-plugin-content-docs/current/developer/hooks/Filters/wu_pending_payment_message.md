---
id: wu_pending_payment_message
title: Filtër - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtër: wu_pending_payment_message

Lejon përdoruesin të ndryshojë mesazhin rreth pagesave në pritje.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $message | `string` | Mesazhi për t’u shfaqur. |
| $customer | `\WP_Ultimo\Models\Customer` | Klienti aktual. |
| $pending_payments | `array` | Një listë me pagesa në pritje. |

### Që prej {#since}

- 2.0.19
### Burimi {#source}

Përcaktuar në [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) në rreshtin 244
