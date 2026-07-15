---
id: wu_handle_user_meta_fields
title: ქმედება - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# ქმედება: wu_handle_user_meta_fields

მიეცით plugin-ის დეველოპერებს შესაძლებლობა, საჭიროების შემთხვევაში, user meta მონაცემები სხვადასხვა გზით შეინახონ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $meta_repository | `array` | meta ველების სია, key =&gt; value სტრუქტურით. |
| $user | `\WP_User` | WordPress-ის მომხმარებლის ობიექტი. |
| $customer | `\Customer` | Ultimate Multisite-ის მომხმარებლის ობიექტი. |
| $checkout | `\Checkout` | გადახდის გაფორმების კლასი. |

### ვერსიიდან {#since}

- 2.0.4
### წყარო {#source}

განსაზღვრულია [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244)-ში, ხაზზე 1244
