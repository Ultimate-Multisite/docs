---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

जेव्हा एखादा विशिष्ट पेज रेंडर (render) व्हायला लागतो, तेव्हा हे ट्रिगर होते.

वापर (Usage): इथे 'dynamic part' (ज्यामध्ये `$this->id` आहे) ची जागा वैध पेज ID ने बदलावी लागेल. उदाहरणार्थ: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | पेजचा ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page चे इन्स्टन्स. |

### Since

- 1.8.2
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) at line 368
