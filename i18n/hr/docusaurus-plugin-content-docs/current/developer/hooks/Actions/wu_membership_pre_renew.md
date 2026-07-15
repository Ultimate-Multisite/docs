---
id: wu_membership_pre_renew
title: Radnja - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Pokreće se prije obnove članstva.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Novi datum isteka koji će se postaviti. |
| $membership_id | `int` | ID članstva. |
| $membership | `\Membership` | Objekt članstva. |

### Od verzije {#since}

- 2.0
### Izvor {#source}

Definirano u [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) u retku 2204
