---
id: wu_membership_calculated_date_expiration
title: ფილტრი - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# ფილტრი: wu_membership_calculated_date_expiration {#filter-wumembershipcalculateddateexpiration}

ფილტრავს გამოთვლილ ვადის გასვლის თარიღს.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $expiration | `string` | გამოთვლილი ვადის გასვლის თარიღი MySQL ფორმატში. |
| $membership_id | `int` | წევრობის ID. |
| $membership | `\WP_Ultimo\Models\Membership` | წევრობის ობიექტი. |

### ვერსიიდან {#since}

- 2.0
### წყარო {#source}

განსაზღვრულია [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309)-ში, ხაზზე 1309
