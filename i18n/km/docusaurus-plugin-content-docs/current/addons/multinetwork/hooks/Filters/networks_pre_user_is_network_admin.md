---
id: networks_pre_user_is_network_admin
title: តម្រង - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

ចម្រាញ់ networks ដែលអ្នកប្រើជាអ្នកគ្រប់គ្រង ដើម្បីកាត់បន្ថយដំណើរការឲ្យខ្លី។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $ | `array\|bool\|null` | បញ្ជី network IDs ឬ false។ អ្វីក៏ដោយក្រៅពី null នឹងកាត់បន្ថយដំណើរការឲ្យខ្លី។ |
| $ | `int` | User ID ដែលត្រូវត្រឡប់ networks សម្រាប់វា។ |

### ចាប់តាំងពី {#since}

- 2.0.0
### ប្រភព {#source}

កំណត់ក្នុង [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) នៅបន្ទាត់ 688
