---
id: wu_handle_customer_meta_fields
title: សកម្មភាព - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍ plugin រក្សាទុក meta data តាមវិធីផ្សេងៗ ប្រសិនបើពួកគេត្រូវការ។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $meta_repository | `array` | បញ្ជីនៃវាល meta ដែលមានរចនាសម្ព័ន្ធ key =&gt; value។ |
| $customer | `\Customer` | object អតិថិជន Ultimate Multisite។ |
| $checkout | `\Checkout` | class checkout។ |

### ចាប់ពី

- 2.0.0
### ប្រភព

បានកំណត់នៅក្នុង [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ត្រង់បន្ទាត់ 1211
