---
id: get_site_url_for_previewer
title: តម្រង - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ plugin ត្រង URL ដែលប្រើក្នុង previewer

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $domain | `string` | domain លំនាំដើមដែលកំពុងប្រើឥឡូវនេះ មានប្រយោជន៍សម្រាប់ការកែសម្រួល |
| $domain_options | `array` | បញ្ជីជម្រើស domain ទាំងអស់ដែលបានបញ្ចូលក្នុង Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### ចាប់ពី {#since}

- 1.7.2
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) នៅបន្ទាត់ 812


## ត្រឡប់ {#returns}
domain ថ្មីដែលត្រូវប្រើ
