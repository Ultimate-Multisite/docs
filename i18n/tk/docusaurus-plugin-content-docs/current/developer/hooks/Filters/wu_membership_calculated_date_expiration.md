---
id: wu_membership_calculated_date_expiration
title: Süzgüç - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Hasaplanan möhletiň gutarýan senesini filterleýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $expiration | `string` | MySQL formatyndaky hasaplanan gutarýan sene. |
| $membership_id | `int` | agzalygyň ID-si. |
| $membership | `\WP_Ultimo\Models\Membership` | Agzalyk obýekti. |

### Şondan bäri {#since}

- 2.0
### Çeşme {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) içinde, 1309-njy setirde kesgitlenen
