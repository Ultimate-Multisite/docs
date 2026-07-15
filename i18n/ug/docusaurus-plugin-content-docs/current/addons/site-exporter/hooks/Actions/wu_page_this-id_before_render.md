---
id: wu_page_this-id_before_render
title: 'ھەرىكەت - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

مۇئەييەن بەتنى كۆرسىتىشتىن بۇرۇن ئىجرا قىلىنىدۇ.

ئىشلىتىلىشى: دىنامىك قىسمىنى ئىناۋەتلىك بەت id سى بىلەن ئالماشتۇرۇش كېرەك، مەسىلەن add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## پارامېتىرلار {#parameters}

| ئىسمى | تىپى | چۈشەندۈرۈش |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | بەتنىڭ id سى. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page مىسالى. |

### باشلاپ {#since}

- 1.8.2
### مەنبە {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) دا 368-قۇردا بېكىتىلگەن
