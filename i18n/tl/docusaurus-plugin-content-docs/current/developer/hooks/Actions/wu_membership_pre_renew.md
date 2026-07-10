---
id: wu_membership_pre_renew
title: Aksyon - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Nati-trigger bago ang pag-renew ng membership.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Bagong petsa ng expiration na itatakda. |
| $membership_id | `int` | Ang ID ng membership. |
| $membership | `\Membership` | Membership object. |

### Mula Noong {#since}

- 2.0
### Pinagmulan {#source}

Tinukoy sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) sa linya 2204
