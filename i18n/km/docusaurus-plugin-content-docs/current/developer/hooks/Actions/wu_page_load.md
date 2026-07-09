---
id: wu_page_load
title: សកម្មភាព - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# សកម្មភាព៖ wu_page_load {#action-wupageload}

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ plugin បន្ថែម hook ផ្សេងៗទៅទំព័ររបស់យើង។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $id | `string` | ID របស់ទំព័រនេះ។ |
| $page_hook | `string` | page hook របស់ទំព័រនេះ។ |
| $admin_page | `self` | អាំងស្តង់ទំព័រ។ |

### ចាប់តាំងពី {#since}

- 1.8.2
- 2.0.4៖ បានបន្ថែមប៉ារ៉ាម៉ែត្រទីបី៖ អាំងស្តង់ទំព័រ។
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) នៅបន្ទាត់ 318
