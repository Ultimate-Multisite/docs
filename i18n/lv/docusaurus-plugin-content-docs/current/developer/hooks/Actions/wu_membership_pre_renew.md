---
id: wu_membership_pre_renew
title: Darbība - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Darbība: wu_membership_pre_renew {#action-wumembershipprerenew}

Tiek aktivizēta pirms abonementa atjaunošanas.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $expiration | `string` | Jaunais derīguma termiņa datums, kas jāiestata. |
| $membership_id | `int` | Abonementa ID. |
| $membership | `\Membership` | Abonementa objekts. |

### Kopš {#since}

- 2.0
### Avots {#source}

Definēts [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) 2204. rindā
