---
id: wu_make_primary_domain_redirect_url
title: តម្រង - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ត្រង redirect URL បន្ទាប់ពីកំណត់ domain ជា primary។

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍កែប្រែកន្លែងដែលអ្នកប្រើត្រូវបាន redirect ទៅ បន្ទាប់ពីកំណត់ domain មួយជា primary ដោយជោគជ័យ។ តាមលំនាំដើម វា redirect ទៅ URL បច្ចុប្បន្ននៅលើ site មេ ឬទៅ admin URL របស់ site ដែលកំពុងត្រូវបានកែប្រែ។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $redirect_url | `string` | redirect URL លំនាំដើម។ ជា URL បច្ចុប្បន្ន (បើជា site មេ) ឬ admin URL របស់ site បច្ចុប្បន្ន។ |
| $current_site | `int` | ID របស់ site ដែល domain របស់វាកំពុងត្រូវបានកំណត់ជា primary។ |
| $domain | `\Domain` | វត្ថុ domain ដែលត្រូវបានកំណត់ជា primary។ |
| $old_primary_domains | `array` | អារេនៃ ID របស់ domain ដែលពីមុនជា primary។ |

### ចាប់ពី

- 2.0.0
### ប្រភព

បានកំណត់នៅក្នុង [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) នៅបន្ទាត់ 639


## ត្រឡប់
redirect URL ដែលបានត្រង។
