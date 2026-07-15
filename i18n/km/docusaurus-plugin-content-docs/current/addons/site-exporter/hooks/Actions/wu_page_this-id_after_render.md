---
id: wu_page_this-id_after_render
title: 'សកម្មភាព - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

ដំណើរការបន្ទាប់ពីបង្ហាញទំព័រជាក់លាក់មួយ។

ការប្រើប្រាស់៖ ផ្នែកថាមវន្តត្រូវជំនួសដោយលេខសម្គាល់ទំព័រដែលត្រឹមត្រូវ ឧ. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | លេខសម្គាល់របស់ទំព័រ។ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | វត្ថុ Base Admin Page។ |

### ចាប់តាំងពី {#since}

- 1.8.2
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) នៅបន្ទាត់ 394
