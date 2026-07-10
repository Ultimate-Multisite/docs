---
id: wu_page_this-id_after_render
title: 'Амал - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Пас аз намоиш додани саҳифаи мушаххас иҷро мешавад.

Истифода: Қисми динамикӣ бояд бо id-и саҳифаи дуруст иваз карда шавад, масалан add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id-и саҳифа. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Намунаи Base Admin Page. |

### Аз версияи {#since}

- 1.8.2
### Манбаъ {#source}

Дар [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) дар сатри 394 муайян шудааст
