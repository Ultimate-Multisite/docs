---
id: wu_membership_post_renew
title: Acțiune - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Acțiune: wu_membership_post_renew

Se declanșează după reînnoirea abonamentului.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $expiration | `string` | Data de expirare nouă care trebuie setată. |
| $membership_id | `int` | ID-ul abonamentului. |
| $membership | `\Membership` | Obiectul abonamentului. |

### De la

- 2.0
### Sursă

Definit în [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) la linia 2235
