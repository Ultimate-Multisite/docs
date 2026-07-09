---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Nagti-trigger pagkatapos ma-renew ang membership.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Bagong petsa ng pag-expire na itatakda. |
| $membership_id | `int` | Ang ID ng membership. |
| $membership | `\Membership` | Object ng membership. |

### Since {#since}

- 2.0
### Source {#source}

Tinukoy sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) sa linya 2235
