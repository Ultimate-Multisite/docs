---
id: wu_page_this-id_before_render
title: 'Akcia - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Spustí sa pred vykreslením konkrétnej stránky.

Použitie: Dynamickú časť je potrebné nahradiť platným id stránky, napr. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id stránky. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Inštancia Base Admin Page. |

### Od verzie {#since}

- 1.8.2
### Zdroj {#source}

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) na riadku 368
