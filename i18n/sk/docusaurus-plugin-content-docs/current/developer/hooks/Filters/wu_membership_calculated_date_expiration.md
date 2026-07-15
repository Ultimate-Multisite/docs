---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Filtruje vypočítaný dátum skončenia platnosti.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $expiration | `string` | Vypočítaný dátum skončenia platnosti vo formáte MySQL. |
| $membership_id | `int` | ID členstva. |
| $membership | `\WP_Ultimo\Models\Membership` | Objekt členstva. |

### Od verzie {#since}

- 2.0
### Zdroj {#source}

Definované v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) na riadku 1309
