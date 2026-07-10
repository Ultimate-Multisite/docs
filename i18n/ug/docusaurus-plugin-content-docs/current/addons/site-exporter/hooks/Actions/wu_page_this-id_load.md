---
id: wu_page_this-id_load
title: 'مەشغۇلات - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

قىستۇرما ئاچقۇچىلارنىڭ بەلگىلىك بەتكە قوشۇمچە hooks قوشۇشىغا يول قويىدۇ.

ئىشلىتىش ئۇسۇلى: ھەرىكەتچان قىسمى كۈچكە ئىگە بەت id سى بىلەن ئالماشتۇرۇلۇشى كېرەك، مەسىلەن add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## پارامېتىرلار {#parameters}

| ئىسىم | تۈر | چۈشەندۈرۈش |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | بۇ بەتنىڭ ID سى. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | بۇ بەت ئۈچۈن ھاسىل قىلىنغان hook. |

### باشلاپ {#since}

- 1.8.2
### مەنبە {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) دا 301-قۇردا ئېنىقلانغان
