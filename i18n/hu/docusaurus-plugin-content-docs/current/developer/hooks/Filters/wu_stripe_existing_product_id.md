---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Szűrőzi a keresett termék ID-jét. Ha ez létezik, az új előfizetés ezt a terméket fogja használni.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $product_id | `string` | A Stripe termék ID-je, amit ellenőrizni kell. |
| $name | `string` | A termék neve. |

### Forrás

Meghatározva a [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) fájlban, 2741-sorban.
