---
id: wu_handle_user_meta_fields
title: Akcia - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Umožňuje vývojárom pluginov ukladať meta údaje používateľa rôznymi spôsobmi, ak to potrebujú.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $meta_repository | `array` | Zoznam meta polí, štruktúrovaný ako key =&gt; value. |
| $user | `\WP_User` | Objekt používateľa WordPress. |
| $customer | `\Customer` | Objekt zákazníka Ultimate Multisite. |
| $checkout | `\Checkout` | Trieda checkout. |

### Od verzie {#since}

- 2.0.4
### Zdroj {#source}

Definované v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) na riadku 1244
