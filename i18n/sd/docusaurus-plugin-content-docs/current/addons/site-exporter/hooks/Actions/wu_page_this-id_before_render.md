---
id: wu_page_this-id_before_render
title: 'عمل - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

هڪ مخصوص صفحي کي رينڊر ڪرڻ کان اڳ هلندو آهي.

استعمال: ڊائنامڪ حصي کي صحيح صفحي جي id سان بدلائڻو پوندو، مثال طور add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | صفحي جي id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page جو نمونو. |

### کان وٺي {#since}

- 1.8.2
### ماخذ {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ۾ لائن 368 تي بيان ٿيل آهي
