---
id: wu_domain_seller_process_purchase
title: მოქმედება - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# მოქმედება: wu_domain_seller_process_purchase

ამოქმედდება, როდესაც დომენის შეძენა მუშავდება checkout-ის დასრულების შემდეგ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | გადახდის ობიექტი. |
| $checkout_data | `array&lt;string,mixed&gt;` | სრული checkout-ის მონაცემები რეგისტრაციის ფორმიდან. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246)-ში, 246-ე ხაზზე
