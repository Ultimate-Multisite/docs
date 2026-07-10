---
id: wp_ultimo_skip_network_active_check
title: តម្រង - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# តម្រង៖ wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍កាត់រំលងការត្រួតពិនិត្យការធ្វើឱ្យសកម្មលើបណ្តាញ។

វាមានប្រយោជន៍ពេលប្រើការរៀបចំផ្អែកលើ Composer និងការរៀបចំផ្ទាល់ខ្លួនផ្សេងៗ ដូចជា Bedrock ជាឧទាហរណ៍ ដែលការប្រើ plugin ជា mu-plugins គឺជារបៀបធម្មតា។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ថាតើយើងគួររំលងការត្រួតពិនិត្យឬអត់ លំនាំដើមគឺ false។ |

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) នៅបន្ទាត់ 272


## ត្រឡប់ {#returns}
true ប្រសិនបើអ្នកចង់រំលងការត្រួតពិនិត្យ បើមិនដូច្នោះទេ false។
