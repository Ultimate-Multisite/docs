---
id: wu_page_added
title: សកម្មភាព - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# សកម្មភាព៖ wu_page_added

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ plugin ដំណើរការអ្វីៗបន្ថែម នៅពេលទំព័រត្រូវបានចុះឈ្មោះ។

ខុសពី wu_page_load ដែលដំណើរការតែពេលមានការមើលទំព័រជាក់លាក់ប៉ុណ្ណោះ hook នេះដំណើរការនៅពេលចុះឈ្មោះ សម្រាប់ទំព័រ admin នីមួយៗដែលត្រូវបានបន្ថែមដោយប្រើកូដ Ultimate Multisite។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $page_id | `string` | ID របស់ទំព័រនេះ។ |
| $page_hook | `string` | ឈ្មោះ hook របស់ទំព័រនេះ។ |

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) នៅបន្ទាត់ 228
