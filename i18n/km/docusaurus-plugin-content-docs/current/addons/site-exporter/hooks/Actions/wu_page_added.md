---
id: wu_page_added
title: សកម្មភាព - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ plugin ដំណើរការការងារបន្ថែម នៅពេលទំព័រត្រូវបានចុះឈ្មោះ។

ខុសពី wu_page_load ដែលដំណើរការតែនៅពេលទំព័រជាក់លាក់មួយកំពុងត្រូវបានមើល hook នេះដំណើរការនៅពេលចុះឈ្មោះសម្រាប់ទំព័រ admin ទាំងអស់ដែលត្រូវបានបន្ថែមដោយប្រើកូដ WP Ultimo។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID របស់ទំព័រនេះ។ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | hook ដែលបានបង្កើតសម្រាប់ទំព័រនេះ។ |

### ចាប់ពី

- 2.0.0
### ប្រភព

បានកំណត់ក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) នៅបន្ទាត់ 203
