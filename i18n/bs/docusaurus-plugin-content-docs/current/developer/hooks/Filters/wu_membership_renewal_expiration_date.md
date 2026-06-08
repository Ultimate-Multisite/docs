---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Filtrira izračunati datum isteka tako da bude postavljen nakon obnove.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $expiration | `string` | Izračunati datum isteka. |
| $plan | `\Product` | Objekt nivoa članstva. |
| $membership_id | `int` | ID članstva. |
| $membership | `\Membership` | Objekt članstva. |

### Od verzije

- 2.0.0
### Izvor

Definisano je u [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) na liniji 2192
