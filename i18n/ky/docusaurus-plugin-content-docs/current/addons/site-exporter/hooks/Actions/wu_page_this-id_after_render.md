---
id: wu_page_this-id_after_render
title: 'Аракет - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Белгилүү бир барак рендерленгенден кийин иштейт.

Колдонуу: Динамикалык бөлүк жарактуу барак id менен алмаштырылышы керек, мисалы, add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Барактын id'си. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page инстансы. |

### Баштап {#since}

- 1.8.2
### Булак {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ичинде 394-сапта аныкталган
