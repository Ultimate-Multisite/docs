---
id: wu_handle_user_meta_fields
title: សកម្មភាព - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# សកម្មភាព: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍ plugin រក្សាទុកទិន្នន័យ​មេតា​របស់​អ្នកប្រើ​តាមវិធីផ្សេងៗ ប្រសិនបើពួកគេត្រូវការ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $meta_repository | `array` | បញ្ជីនៃវាលមេតា ដែលមានរចនាសម្ព័ន្ធ key =&gt; value។ |
| $user | `\WP_User` | វត្ថុអ្នកប្រើ WordPress។ |
| $customer | `\Customer` | វត្ថុអតិថិជន Ultimate Multisite។ |
| $checkout | `\Checkout` | ថ្នាក់ checkout។ |

### ចាប់ពី {#since}

- 2.0.4
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) នៅបន្ទាត់ 1244
