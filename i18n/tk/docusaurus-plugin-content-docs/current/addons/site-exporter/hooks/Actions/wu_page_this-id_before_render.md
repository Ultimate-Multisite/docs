---
id: wu_page_this-id_before_render
title: 'Hereket - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Belli bir sahypa görkezilmezden öň işledilýär.

Ulanylyşy: Dinamiki bölegi dogry sahypa id-si bilen çalşylmaly, meselem add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sahypanyň id-si. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page instansy. |

### Şondan bäri {#since}

- 1.8.2
### Çeşme {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) faýlynda 368-nji setirde kesgitlenen
