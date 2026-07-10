---
id: wu_membership_pre_renew
title: សកម្មភាព - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# សកម្មភាព៖ wu_membership_pre_renew {#action-wumembershipprerenew}

ដំណើរការមុនពេលបន្តសមាជិកភាព។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | កាលបរិច្ឆេទផុតកំណត់ថ្មីដែលត្រូវកំណត់។ |
| $membership_id | `int` | ID របស់សមាជិកភាព។ |
| $membership | `\Membership` | វត្ថុសមាជិកភាព។ |

### ចាប់ពីកំណែ {#since}

- 2.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) នៅបន្ទាត់ 2204
