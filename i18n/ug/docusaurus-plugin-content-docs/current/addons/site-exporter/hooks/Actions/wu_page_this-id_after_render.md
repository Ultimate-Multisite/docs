---
id: wu_page_this-id_after_render
title: 'ھەرىكەت - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

مەلۇم بىر بەت رەندېرلانغاندىن كېيىن ئىجرا بولىدۇ.

ئىشلىتىش ئۇسۇلى: دىنامىك قىسمى ئىناۋەتلىك بەت id سى بىلەن ئالماشتۇرۇلۇشى كېرەك، مەسىلەن: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## پارامېتىرلار

| ئىسمى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | بەتنىڭ id سى. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ئۈلگىسى. |

### باشلاپ

- 1.8.2
### مەنبە

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) دا 394-قۇردا ئېنىقلانغان
