---
id: wu_handle_customer_meta_fields
title: ქმედება - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# ქმედება: wu_handle_customer_meta_fields

მიეცით მოდულის დეველოპერებს შესაძლებლობა, საჭიროების შემთხვევაში მეტამონაცემები სხვადასხვა გზით შეინახონ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $meta_repository | `array` | მეტა ველების სია, key =&gt; value სტრუქტურით. |
| $customer | `\Customer` | Ultimate Multisite-ის კლიენტის ობიექტი. |
| $checkout | `\Checkout` | გადახდის გაფორმების კლასი. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211)-ში, 1211-ე ხაზზე.
