---
id: wu_membership_renewal_expiration_date
title: ფილტრი - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# ფილტრი: wu_membership_renewal_expiration_date

ფილტრავს გამოთვლილ ვადის გასვლის თარიღს, რომელიც განახლების შემდეგ უნდა დადგინდეს.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | გამოთვლილი ვადის გასვლის თარიღი. |
| $plan | `\Product` | Membership დონის ობიექტი. |
| $membership_id | `int` | Membership-ის ID. |
| $membership | `\Membership` | Membership ობიექტი. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192)-ში, ხაზზე 2192
