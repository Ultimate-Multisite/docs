---
id: wu_checkout_after_process_order
title: សកម្មភាព - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

អនុញ្ញាត​ឲ្យ​អ្នក​អភិវឌ្ឍន៍​បើក​ដំណើរការ hooks បន្ថែម។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $checkout | `\Checkout` | អាំងស្តង់​វត្ថុ checkout។ |
| $cart | `\Cart` | អាំងស្តង់​រទេះ checkout។ |

### ចាប់តាំងពី {#since}

- 2.0.9
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) នៅបន្ទាត់ 1013
