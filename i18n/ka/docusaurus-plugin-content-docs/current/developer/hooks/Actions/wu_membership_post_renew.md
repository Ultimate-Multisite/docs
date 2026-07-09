---
id: wu_membership_post_renew
title: მოქმედება - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

ამოქმედდება membership-ის განახლების შემდეგ.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | დასაყენებელი ახალი ვადის ამოწურვის თარიღი. |
| $membership_id | `int` | membership-ის ID. |
| $membership | `\Membership` | membership-ის ობიექტი. |

### Since

- 2.0
### წყარო

განსაზღვრულია [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235)-ში, ხაზზე 2235
