---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

ይህ action የተወሰነ ገጽ ከተሳለ በኋላ ይሰራል።

Usage: የሚለዋወጠው ክፍል (dynamic part) ትክክለኛ የገጽ ID (page id) መተካት አለበት። ለምሳሌ: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | የገጹን ID ያመለክታል። |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | የBase Admin Page instance ነው። |

### Since

- 1.8.2
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) at line 394
