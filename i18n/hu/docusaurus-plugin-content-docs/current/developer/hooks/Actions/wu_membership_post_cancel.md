---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

A tagság lemondása után fog futni.

Ez a trigger a lemondás e-mailjét küldi el.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $membership_id | `int` | A tagság azonosítója. |
| $membership | `\WP_Ultimo\Models\Membership` | A tagság objektuma. |

### Since {#since}

- 2.0
### Source {#source}

Definálva van a [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) fájlban, 2290-sorban.
