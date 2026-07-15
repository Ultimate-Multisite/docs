---
id: wu_membership_post_renew
title: Radnja - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Pokreće se nakon obnove članstva.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Novi datum isteka koji treba postaviti. |
| $membership_id | `int` | ID članstva. |
| $membership | `\Membership` | Objekt članstva. |

### Od verzije {#since}

- 2.0
### Izvor {#source}

Definirano u [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) u retku 2235
