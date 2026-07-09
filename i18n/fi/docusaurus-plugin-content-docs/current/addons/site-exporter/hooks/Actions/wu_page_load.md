---
id: wu_page_load
title: Toiminto - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Toiminto: wu_page_load {#action-wupageload}

Salli plugin-kehittäjien lisätä sivuillemme lisähookeja.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tämän sivun ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tälle sivulle luotu hook. |

### Alkaen versiosta {#since}

- 1.8.2
### Lähde {#source}

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) rivillä 289
