---
id: wu_page_this-id_load
title: 'Гамәл - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Plugin эшләүчеләргә билгеле бер биткә өстәмә hook-лар өстәргә мөмкинлек бирә.

Куллану: Динамик өлеш дөрес бит ID-сы белән алыштырылырга тиеш, мәсәлән, add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бу битнең ID-сы. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бу бит өчен тудырылган hook. |

### Версиядән башлап

- 1.8.2
### Чыганак

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) эчендә, 301 нче юлда билгеләнгән.
