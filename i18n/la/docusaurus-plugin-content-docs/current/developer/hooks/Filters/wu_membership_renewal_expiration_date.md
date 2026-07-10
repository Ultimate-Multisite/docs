---
id: wu_membership_renewal_expiration_date
title: Filtrum - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filtrum: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Filtrat diem expirationis computatum post renovationem statuendum.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $expiration | `string` | Dies expirationis computatus. |
| $plan | `\Product` | Obiectum gradus adscriptionis. |
| $membership_id | `int` | ID adscriptionis. |
| $membership | `\Membership` | Obiectum adscriptionis. |

### Ex {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) linea 2192
