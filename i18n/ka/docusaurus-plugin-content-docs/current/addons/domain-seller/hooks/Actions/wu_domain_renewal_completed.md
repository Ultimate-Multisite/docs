---
id: wu_domain_renewal_completed
title: მოქმედება - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

ამოქმედდება დომენის წარმატებით განახლების შემდეგ.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | გადახდა, რომელმაც განახლება გამოიწვია. |
| $renewal_data | `array&lt;string,mixed&gt;` | განახლების მეტამონაცემები (domain_name, years, customer_id და ა.შ.). |
| $result | `array&lt;string,mixed&gt;` | რეგისტრატორის მიერ დაბრუნებული ნედლი შედეგების მასივი, ახალი expiry_date-ის ჩათვლით. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594)-ში, 594-ე ხაზზე
