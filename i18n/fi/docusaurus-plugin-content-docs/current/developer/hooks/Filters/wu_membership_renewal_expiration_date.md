---
id: wu_membership_renewal_expiration_date
title: Suodatin - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Suodattaa lasketun vanhentumispäivän, joka asetetaan uusimisen jälkeen.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $expiration | `string` | Laskettu vanhentumispäivä. |
| $plan | `\Product` | Jäsenyystason olio. |
| $membership_id | `int` | Jäsenyyden ID. |
| $membership | `\Membership` | Jäsenyysolio. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) rivillä 2192
