---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Filtert das berechnete Ablaufdatum, sodass es nach der Verlängerung gesetzt wird.

## Parameters {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $expiration | `string` | Berechnetes Ablaufdatum. |
| $plan | `\Product` | Objekt der Mitgliedschaftsstufe. |
| $membership_id | `int` | Die ID der Mitgliedschaft. |
| $membership | `\Membership` | Mitgliedschaftsobjekt. |

### Since {#since}

- 2.0.0

### Source {#source}

Definiert in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) in Zeile 2192
