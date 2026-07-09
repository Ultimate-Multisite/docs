---
id: wu_membership_pre_renew
title: Үйлдэл - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Гишүүнчлэлийг сунгахаас өмнө ажиллана.

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Тохируулах шинэ дуусах огноо. |
| $membership_id | `int` | Гишүүнчлэлийн ID. |
| $membership | `\Membership` | Гишүүнчлэлийн объект. |

### Хойш {#since}

- 2.0
### Эх сурвалж {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204)-д 2204-р мөрөнд тодорхойлсон.
