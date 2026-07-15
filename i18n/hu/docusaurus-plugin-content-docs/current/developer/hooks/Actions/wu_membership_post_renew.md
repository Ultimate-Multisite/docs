---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

A tagság megújítását követően aktiválódik.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $expiration | `string` | Az új lejárati dátum, amelyet be kell állítani. |
| $membership_id | `int` | A tagság azonosítója. |
| $membership | `\Membership` | Tagság objektum. |

### Desde {#since}

- 2.0
### Forrás {#source}

Definálva a [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) fájlban, 2235-sorban
