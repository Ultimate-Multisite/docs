---
id: wu_membership_pre_renew
title: Akció - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Akció: wu_membership_pre_renew

Elfoglalódik a tagság megújítását megelőzően.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $expiration | `string` | Az új lejárati dátum, amelyet be kell állítani. |
| $membership_id | `int` | A tagság azonosítója. |
| $membership | `\Membership` | Tagság objektum. |

### Elkövetkezés

- 2.0
### Forrás

Definíciója található [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) fájlban, 2204-sorban.
