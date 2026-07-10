---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration {#filter-wumembershipcalculateddateexpiration}

Filtrerer den beregnede udløbsdato.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $expiration | `string` | Beregnet udløbsdato i MySQL-format. |
| $membership_id | `int` | ID for medlemskabet. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskabsobjekt. |

### Siden {#since}

- 2.0
### Kilde {#source}

Defineret i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) på linje 1309
