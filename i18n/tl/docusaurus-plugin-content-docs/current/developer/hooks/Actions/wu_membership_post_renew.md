---
id: wu_membership_post_renew
title: Aksyon - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Nati-trigger pagkatapos ng pag-renew ng membership.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Bagong petsa ng expiration na itatakda. |
| $membership_id | `int` | Ang ID ng membership. |
| $membership | `\Membership` | Membership object. |

### Mula Noong

- 2.0
### Pinagmulan

Tinukoy sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) sa linya 2235
