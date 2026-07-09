---
id: wu_page_this-id_register_widgets
title: 'សកម្មភាព - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

ដំណើរការបន្ទាប់ពី widgets ត្រូវបានចុះឈ្មោះសម្រាប់ទំព័រនេះ។

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $id | `string` | id របស់ទំព័រ។ |
| $page_hook | `string` | hook របស់ទំព័រ។ |
| $page | `object` | object របស់ទំព័រ។ |

### ចាប់ពី {#since}

- 2.4.10
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) នៅបន្ទាត់ 755
