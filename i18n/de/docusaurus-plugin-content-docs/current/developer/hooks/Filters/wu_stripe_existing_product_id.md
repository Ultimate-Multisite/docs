---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Filtert die ID des Produkts, das überprüft werden soll. Wenn diese existiert, verwendet das neue Abonnement dieses Produkt.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $product_id | `string` | ID des Stripe-Produkts, das überprüft werden soll. |
| $name | `string` | Produktname. |

### Quelle {#source}

Definiert in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) at line 2741
