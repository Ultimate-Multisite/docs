---
id: wu_membership_post_renew
title: Acció - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Aquesta acció: wu_membership_post_renew {#action-wumembershippostrenew}

Es activa després de la renovació d'un membre.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $expiration | `string` | La nova data d'expiració que s'ha de setar. |
| $membership_id | `int` | L'ID del membre. |
| $membership | `\Membership` | L'objecte de membres. |

### Des de {#since}

- 2.0
### Font {#source}

Definida en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) a la línia 2235
