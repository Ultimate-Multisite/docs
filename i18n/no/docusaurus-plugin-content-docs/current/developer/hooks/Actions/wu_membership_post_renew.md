---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Utløses etter at medlemskapet er fornyet.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $expiration | `string` | Den nye utløpsdatoen som skal settes. |
| $membership_id | `int` | ID-en til medlemskapet. |
| $membership | `\Membership` | Medlemskapsobjektet. |

### Siden {#since}

- 2.0
### Kilde {#source}

Definert i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) på linje 2235
