---
id: wu_membership_calculated_date_expiration
title: Suodatin - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Suodatin: wu_membership_calculated_date_expiration

Suodattaa lasketun vanhentumispäivän.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Laskettu vanhentumispäivä MySQL-muodossa. |
| $membership_id | `int` | Jäsenyyden ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Jäsenyysobjekti. |

### Alkaen {#since}

- 2.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) rivillä 1309
