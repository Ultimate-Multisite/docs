---
id: wu_minimum_password_length
title: តម្រង - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

ត្រងប្រវែងអប្បបរមារបស់ពាក្យសម្ងាត់។

អនុវត្តតែពេល `wu_enforce_password_rules` ជា true ប៉ុណ្ណោះ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $min_length | `int` | ប្រវែងអប្បបរមារបស់ពាក្យសម្ងាត់។ លំនាំដើម 12 (ត្រូវគ្នានឹង Defender Pro)។ |
| $defender_active | `bool` | ថាតើ Defender Pro Strong Password សកម្មឬអត់។ |

### ចាប់តាំងពី {#since}

- 2.4.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) នៅបន្ទាត់ 543
