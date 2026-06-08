---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Umožňuje vývojářům pluginů filtrovat přednastavené proměnné pro stránku pokladny.

Buďte opatrní, chybějící klíče mohou zcela zničit fungování pokladny na front-endu.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $variables | `array` | Lokalizované proměnné. |
| $checkout | `\Checkout` | Třída pokladny. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) na řádku 1970


## Vrátí
Nový pole proměnných.
