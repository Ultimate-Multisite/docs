---
id: wu_handle_customer_meta_fields
title: Akcia - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Akcia: wu_handle_customer_meta_fields

Umožňuje vývojárom pluginov ukladať metadáta rôznymi spôsobmi, ak to potrebujú.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $meta_repository | `array` | Zoznam meta polí, štruktúrovaný ako key =&gt; value. |
| $customer | `\Customer` | Objekt zákazníka Ultimate Multisite. |
| $checkout | `\Checkout` | Trieda checkout. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) na riadku 1211
