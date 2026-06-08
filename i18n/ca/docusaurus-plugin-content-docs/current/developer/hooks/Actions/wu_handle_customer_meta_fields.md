---
id: wu_handle_customer_meta_fields
title: Acció - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Aquesta funció: wu_handle_customer_meta_fields

Permet als desenvolupadors de plugins guardar metadades de diverses maneres si ho necessiten.

## Paràmetres

| Nom | Tip | Descripció |
|------|------|-------------|
| `$meta_repository` | `array` | La llista de camps de meta, estructurada com a clau => valor. |
| `$customer` | `\Customer` | L'objecte del client d'Ultimate Multisite. |
| `$checkout` | `\Checkout` | La classe de checkout. |

### Des de

- 2.0.0
### Font

Definida en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) a la línia 1211
