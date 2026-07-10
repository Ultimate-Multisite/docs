---
id: wu_membership_pre_cancel
title: Toiminto - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel {#action-wumembershipprecancel}

Käynnistyy ennen kuin jäsenyys peruutetaan.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $membership_id | `int` | Jäsenyyden ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Jäsenyysobjekti. |

### Alkaen {#since}

- 2.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) rivillä 2267
