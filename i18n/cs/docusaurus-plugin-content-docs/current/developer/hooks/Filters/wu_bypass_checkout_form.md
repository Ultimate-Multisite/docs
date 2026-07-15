---
id: wu_bypass_checkout_form
title: Filtrační parametr - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# Filter: wu_bypass_checkout_form

Umožňuje vývojářům obejít výstup a nahradit ho vlastním.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $bypass | `string\|bool` | Určuje, zda má být formulář pokladny obejit, nebo řetězec, který má být namísto formuláře vrácen. |
| $atts | `array` | Parametry bloku/shortcode pokladny. |

### Zdroj {#source}

Definováno v [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) na řádku 327
