---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

Дазваляе раробнікам plugin дадаць адпаведныя хукі (hooks) для канкрэтнай старонкі.

Выкарыстанне: Дынамічная частка павінна быць заменнена на правільны ID старонкі, напрыклад: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Паметнікі

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID гэтай старонкі. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хук, сгенераваны для гэтай старонкі. |

### Since

- 1.8.2
### Source

Вызначана ў [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) на 301-й пасылцы.
