---
id: wu_enforce_password_rules
title: តម្រង - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# តម្រង: wu_enforce_password_rules

តម្រងថាតើត្រូវអនុវត្តច្បាប់ពាក្យសម្ងាត់បន្ថែមឬអត់។

នៅពេល true វាអនុវត្តតម្រូវការប្រវែងអប្បបរមា និងតួអក្សរ។ វាត្រូវបានបើកដោយស្វ័យប្រវត្តិសម្រាប់ការកំណត់ "Super Strong" ឬនៅពេលមុខងារ Strong Password របស់ Defender Pro សកម្ម។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $enforce_rules | `bool` | ថាតើត្រូវអនុវត្តច្បាប់បន្ថែមឬអត់។ |
| $strength_setting | `string` | តម្លៃការកំណត់របស់អ្នកគ្រប់គ្រង។ |
| $defender_active | `bool` | ថាតើ Defender Pro Strong Password សកម្មឬអត់។ |

### ចាប់ពី

- 2.4.0
### ប្រភព

បានកំណត់នៅក្នុង [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) នៅបន្ទាត់ 531
