---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration {#filter-wumembershipcalculateddateexpiration}

Filtrerar det beräknade utgångsdatumet.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $expiration | `string` | Det beräknade utgångsdatumet i MySQL-format. |
| $membership_id | `int` | ID för medlemskapet. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskaps-objektet. |

### Sedan {#since}

- 2.0
### Källa {#source}

Definieras i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) på rad 1309
