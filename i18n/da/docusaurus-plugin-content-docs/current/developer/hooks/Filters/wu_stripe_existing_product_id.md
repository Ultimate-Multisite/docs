---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Filtrerer ID'et for det produkt, der skal tjekkes for. Hvis dette findes, vil det nye abonnement bruge dette produkt.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $product_id | `string` | ID for Stripe produktet, der skal tjekkes for. |
| $name | `string` | Produktnavn. |

### Kilde

Defineret i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) på linje 2741
