---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

एखादे विशिष्ट पेज रेंडर (render) झाल्यावर हे ट्रिगर होते.

**वापर (Usage):** येथे 'dynamic part' म्हणजे बदलणारा भाग आहे. त्याला वैध पेज आयडीने (valid page id) बदलावे लागेल. उदाहरणार्थ: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | पेजचा आयडी. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page चे इन्स्टन्स. |

### कधीपासून उपलब्ध {#since}

- 1.8.2
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) मध्ये लाइन 394 वर परिभाषित केले आहे.
