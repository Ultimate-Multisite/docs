---
id: wu_pending_payment_message
title: Filtre - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtre: wu_pending_payment_message

Permet a l’usuari canviar el missatge sobre els pagaments pendents.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $message | `string` | El missatge que s’ha d’imprimir. |
| $customer | `\WP_Ultimo\Models\Customer` | El client actual. |
| $pending_payments | `array` | Una llista amb pagaments pendents. |

### Des de {#since}

- 2.0.19
### Font {#source}

Definit a [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) a la línia 244
