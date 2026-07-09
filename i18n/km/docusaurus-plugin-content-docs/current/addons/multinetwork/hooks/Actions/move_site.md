---
id: move_site
title: សកម្មភាព - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# សកម្មភាព: move_site

ដំណើរការបន្ទាប់ពី site ត្រូវបានផ្លាស់ទីទៅ network ថ្មី។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | សេចក្តីពិពណ៌នា |
|------|------|-------------|
| $site_id | `int` | ID របស់ site ដែលត្រូវបានផ្លាស់ទី។ |
| $old_network_id | `int` | ID របស់ network ដើមសម្រាប់ site។ |
| $new_network_id | `int` | ID របស់ network ដែល site ត្រូវបានផ្លាស់ទីទៅ។ |

### ចាប់ពី

- 1.3.0
### ប្រភព

បានកំណត់នៅក្នុង [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) នៅបន្ទាត់ 1587
