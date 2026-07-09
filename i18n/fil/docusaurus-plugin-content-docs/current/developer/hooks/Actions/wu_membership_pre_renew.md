---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Ito ay tumatakbo bago mag-renew ang membership.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Ang bagong petsa ng pag-expire na itatakda. |
| $membership_id | `int` | Ang ID ng membership. |
| $membership | `\Membership` | Ang object ng membership. |

### Since {#since}

- 2.0
### Source {#source}

Tinukoy sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) sa linya 2204
