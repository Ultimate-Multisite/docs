---
id: wu_membership_pre_renew
title: Acțiune - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Acțiune: wu_membership_pre_renew {#action-wumembershipprerenew}

Se declanșează înainte de reînnoirea abonamentului.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $expiration | `string` | Data de expirare nouă care va fi setată. |
| $membership_id | `int` | ID-ul abonamentului. |
| $membership | `\Membership` | Obiectul de abonament. |

### De la {#since}

- 2.0
### Sursă {#source}

Definit în [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) la linia 2204
