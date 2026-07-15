---
id: wu_checkout_validation_aliases
title: Filtrační hook - wu_checkout_validation_aliases
sidebar_label: wu_checkout_validation_aliases
_i18n_hash: e081aa9a71c29c9afde90759a29ab237
---
# Filter: wu_checkout_validation_aliases

Umožňuje vývojářům pluginů přidat vlastní aliasy do ověřovače formulářů.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $validation_aliases | `array` | Pole s ID => alias. |
| $checkout | `\Checkout` | Třída pro checkout. |

### Od {#since}

- 2.1
### Zdroj {#source}

Definováno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L2153) na řádku 2153
