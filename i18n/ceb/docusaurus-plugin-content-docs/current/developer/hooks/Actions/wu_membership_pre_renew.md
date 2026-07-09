---
id: wu_membership_pre_renew
title: Aksyon - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Aksyon: wu_membership_pre_renew {#action-wumembershipprerenew}

Mo-trigger sa wala pa ang pag-renew sa membership.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $expiration | `string` | Bag-ong petsa sa expiration nga itakda. |
| $membership_id | `int` | Ang ID sa membership. |
| $membership | `\Membership` | Membership object. |

### Sukad {#since}

- 2.0
### Tinubdan {#source}

Gidefine sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) sa linya 2204
