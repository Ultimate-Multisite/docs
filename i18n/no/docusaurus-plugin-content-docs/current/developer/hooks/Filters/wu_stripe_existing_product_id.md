---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Filtrerer ID-en til produktet som skal sjekkes. Hvis denne ID-en eksisterer, vil det nye abonnementet bruke dette produktet.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | ID-en til Stripe-produktet som skal sjekkes. |
| $name | `string` | Produktnavn. |

### Kilde {#source}

Definert i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) på linje 2741
