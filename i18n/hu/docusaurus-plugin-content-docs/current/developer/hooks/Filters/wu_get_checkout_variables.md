---
id: wu_get_checkout_variables
title: Szűrő - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Szűrő: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Ez a szűrő lehetővé teszi a plugin fejlesztők számára, hogy módosítsák a fizetési oldal előre beállított változóit.

Figyelem: ha hiányzó kulcsokat ad ki, az teljesen összeomlaszthatja a fizetési oldalt a front-end-en.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $variables | `array` | Lokalizált változók. |
| $checkout | `\Checkout` | A fizetési oldal osztálya. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) fájlban, 1970-sorban.


## Visszaadja {#returns}
Az új változók tömbét.
