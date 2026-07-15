---
id: wu_page_this-id_load
title: 'សកម្មភាព - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍កម្មវិធីបន្ថែមបន្ថែម hook ផ្សេងទៀតទៅកាន់ទំព័រជាក់លាក់។

ការប្រើប្រាស់៖ ផ្នែកថាមវន្តត្រូវជំនួសដោយ ID ទំព័រដែលត្រឹមត្រូវ ឧ. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID នៃទំព័រនេះ។ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | hook ដែលបានបង្កើតសម្រាប់ទំព័រនេះ។ |

### ចាប់តាំងពី {#since}

- 1.8.2
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) នៅបន្ទាត់ 301
