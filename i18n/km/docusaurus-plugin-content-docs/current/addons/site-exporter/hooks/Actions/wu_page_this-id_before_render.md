---
id: wu_page_this-id_before_render
title: 'សកម្មភាព - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

ដំណើរការមុនពេលបង្ហាញទំព័រជាក់លាក់មួយ។

ការប្រើប្រាស់៖ ផ្នែក dynamic ត្រូវជំនួសដោយ page id ត្រឹមត្រូវ ឧ. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id របស់ទំព័រ។ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | instance របស់ Base Admin Page។ |

### តាំងពី {#since}

- 1.8.2
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) នៅបន្ទាត់ 368
