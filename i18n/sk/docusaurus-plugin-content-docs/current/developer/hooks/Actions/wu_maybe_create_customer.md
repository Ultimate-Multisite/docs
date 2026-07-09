---
id: wu_maybe_create_customer
title: Akcia - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Umožňuje vývojárom pluginov vykonať ďalšie veci, keď je zákazník pridaný.

Tu napríklad pridávame hooks na pridanie zákazníka-&gt;používateľa aj na hlavnú lokalitu.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $customer | `\Customer` | Zákazník, ktorý bol prípadne vytvorený. |
| $checkout | `\Checkout` | Aktuálna trieda checkout. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) na riadku 1156
