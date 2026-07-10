---
id: wu_stripe_existing_product_id
title: Filtru - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

Acest filtru verifică ID-ul produsului. Dacă acesta este definit, abonamentul nou va folosi acest produs.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | ID-ul produsului Stripe pe care trebuie verificat. |
| $name | `string` | Numele produsului. |

### Sursă {#source}

Definit în [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) la linia 2741
