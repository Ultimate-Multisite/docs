---
id: wu_membership_post_cancel
title: Toiminto - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Toiminto: wu_membership_post_cancel {#action-wumembershippostcancel}

Käynnistyy sen jälkeen, kun jäsenyys on peruttu.

Tämä käynnistää peruutussähköpostin.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $membership_id | `int` | Jäsenyyden ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership-objekti. |

### Alkaen {#since}

- 2.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) rivillä 2290
