---
id: wu_domain_seller_complete_registration
title: მოქმედება - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

ირთვება, როდესაც გადახდა გადადის სტატუსზე, რომელმაც დომენის რეგისტრაცია უნდა გამოიწვიოს.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | გადახდის ობიექტი. |
| $old_status | `string` | გადახდის წინა სტატუსი გადასვლამდე. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266)-ში, ხაზზე 266
