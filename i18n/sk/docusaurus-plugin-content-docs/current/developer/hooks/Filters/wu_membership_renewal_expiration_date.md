---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Filtruje vypočítaný dátum expirácie, ktorý sa má nastaviť po obnovení.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $expiration | `string` | Vypočítaný dátum expirácie. |
| $plan | `\Product` | Objekt úrovne membership. |
| $membership_id | `int` | ID membership. |
| $membership | `\Membership` | Objekt membership. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) na riadku 2192
