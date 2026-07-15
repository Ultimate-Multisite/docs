---
id: wu_page_this-id_load
title: 'សកម្មភាព - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ plugin បន្ថែម hooks បន្ថែមទៅទំព័ររបស់យើង។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $id | `string` | ID របស់ទំព័រនេះ។ |
| $page_hook | `string` | page hook របស់ទំព័រនេះ។ |
| $admin_page | `self` | instance របស់ទំព័រ។ |

### ចាប់តាំងពី {#since}

- 1.8.2
- 2.0.4: បានបន្ថែមប៉ារ៉ាម៉ែត្រទីបី៖ instance របស់ទំព័រ។
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) នៅបន្ទាត់ 332
