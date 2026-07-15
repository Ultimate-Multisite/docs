---
id: wu_page_added
title: Toiminto - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Salli plugin-kehittäjien suorittaa lisätoimintoja, kun sivuja rekisteröidään.

Toisin kuin wu_page_load, joka suoritetaan vain, kun tiettyä sivua tarkastellaan, tämä hook suoritetaan rekisteröinnin yhteydessä jokaiselle admin-sivulle, joka lisätään WP Ultimo -koodilla.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tämän sivun ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tälle sivulle luotu hook. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritetty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) rivillä 203
