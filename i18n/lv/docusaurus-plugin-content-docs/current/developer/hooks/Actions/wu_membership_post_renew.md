---
id: wu_membership_post_renew
title: Darbība - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Darbība: wu_membership_post_renew

Tiek aktivizēta pēc dalības atjaunošanas.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $expiration | `string` | Jaunais derīguma termiņa datums, kas jāiestata. |
| $membership_id | `int` | Dalības ID. |
| $membership | `\Membership` | Dalības objekts. |

### Kopš

- 2.0
### Avots

Definēts [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) 2235. rindā
