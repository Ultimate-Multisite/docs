---
id: wu_membership_post_renew
title: Toiminto - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Käynnistyy jäsenyyden uusimisen jälkeen.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $expiration | `string` | Asetettava uusi vanhenemispäivä. |
| $membership_id | `int` | Jäsenyyden ID. |
| $membership | `\Membership` | Jäsenyysobjekti. |

### Alkaen versiosta {#since}

- 2.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) rivillä 2235
