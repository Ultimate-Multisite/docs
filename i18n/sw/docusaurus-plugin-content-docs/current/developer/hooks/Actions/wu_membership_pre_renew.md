---
id: wu_membership_pre_renew
title: Kitendo - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Inachochea kabla ya kurejesha ushiri (membership renewal).

## Vigezo (Parameters) {#parameters}

| Jina (Name) | Aina (Type) | Maelezo (Description) |
|------|------|-------------|
| $expiration | `string` | Tarehe mpya ya kuisha itakayowekwa. |
| $membership_id | `int` | Kitambulisho cha ushiri. |
| $membership | `\Membership` | Kichwa cha ushiri (Membership object). |

### Tangu (Since) {#since}

- 2.0
### Chanzo (Source) {#source}

Kimeainishwa katika [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) kwenye mstari wa 2204
