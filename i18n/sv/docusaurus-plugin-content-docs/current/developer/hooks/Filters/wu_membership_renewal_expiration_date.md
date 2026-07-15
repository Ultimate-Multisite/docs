---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Filtrerar det beräknade utgångsdatumet så att det sätts efter förnyelsen.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $expiration | `string` | Det beräknade utgångsdatumet. |
| $plan | `\Product` | Objekt för medlemsnivån. |
| $membership_id | `int` | Medlemskapets ID. |
| $membership | `\Membership` | Medlemskaps-objekt. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definierat i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) på rad 2192
