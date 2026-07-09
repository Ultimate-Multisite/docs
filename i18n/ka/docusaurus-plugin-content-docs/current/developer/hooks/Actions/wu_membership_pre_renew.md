---
id: wu_membership_pre_renew
title: ქმედება - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# მოქმედება: wu_membership_pre_renew {#action-wumembershipprerenew}

აქტიურდება წევრობის განახლებამდე.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $expiration | `string` | ახალი ვადის გასვლის თარიღი, რომელიც უნდა დაყენდეს. |
| $membership_id | `int` | წევრობის ID. |
| $membership | `\Membership` | წევრობის ობიექტი. |

### ვერსიიდან {#since}

- 2.0
### წყარო {#source}

განსაზღვრულია [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204)-ში, ხაზზე 2204
