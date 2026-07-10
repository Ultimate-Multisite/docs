---
id: wu_membership_pre_renew
title: Acció - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Aquesta acció: wu_membership_pre_renew {#action-wumembershipprerenew}

Es activa abans de la renovació d'un membre.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $expiration | `string` | La nova data d'expiració que s'vau setar. |
| $membership_id | `int` | L'ID del membre. |
| $membership | `\Membership` | L'objecte de membres. |

### Desde {#since}

- 2.0
### Font {#source}

Definida en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) a la línia 2204
