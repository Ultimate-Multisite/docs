---
id: wu_membership_calculated_date_expiration
title: Filtrační parametr - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Filtruje vypočítaný datum expirace.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $expiration | `string` | Vypočítaný datum expirace ve formátu MySQL. |
| $membership_id | `int` | ID členství. |
| $membership | `\WP_Ultimo\Models\Membership` | Objekt členství. |

### Since

- 2.0
### Source

Definováno v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) na řádku 1309
