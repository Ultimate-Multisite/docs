---
id: wu_page_this-id_load
title: 'Çalakî - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Destûrê bide pêşvebirên plugin ku hookên zêde li rûpelek taybetî zêde bikin.

Bikaranîn: Beşa guhêrbar divê bi page ideke derbasdar were guhertin, wekî mînak add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametre {#parameters}

| Nav | Cure | Şirove |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ya vê rûpelê. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | hook-a ji bo vê rûpelê hatî çêkirin. |

### Ji {#since}

- 1.8.2
### Çavkanî {#source}

Di [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) de li rêza 301 hatî danasîn.
