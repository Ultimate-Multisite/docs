---
id: wu_page_this-id_after_render
title: 'Toiminto - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Käynnistyy tietyn sivun renderöinnin jälkeen.

Käyttö: Dynaaminen osa on korvattava kelvollisella sivun id:llä, esim. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sivun id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page -instanssi. |

### Alkaen {#since}

- 1.8.2
### Lähde {#source}

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) rivillä 394
