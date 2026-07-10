---
id: wu_page_this-id_before_render
title: 'Azzjoni - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Jiskatta qabel ir-rendering ta' paġna speċifika.

Użu: Il-parti dinamika trid tiġi sostitwita b'id validu tal-paġna, eż. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L-id tal-paġna. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L-istanza ta' Base Admin Page. |

### Minn {#since}

- 1.8.2
### Sors {#source}

Iddefinit f'[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) fil-linja 368
