---
id: wu_domain_seller_search_delay
title: តម្រង - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# តម្រង៖ wu_domain_seller_search_delay

តម្រងពន្យារពេល debounce សម្រាប់ការស្វែងរកដែន គិតជាមីលីវិនាទី។

បង្កើនតម្លៃនេះ ដើម្បីកាត់បន្ថយការហៅ API នៅលើការតភ្ជាប់យឺត។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $delay | `int` | ការពន្យារពេល debounce គិតជាមីលីវិនាទី។ លំនាំដើម 500។ |

### ចាប់ពី {#since}

- 2.1.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) នៅបន្ទាត់ 854
