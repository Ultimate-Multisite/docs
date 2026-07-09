---
id: wu_page_added
title: Aksie - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Aksie: wu_page_added {#action-wupageadded}

Dit laat plugin-ontwikkelaars toe om bykomstige dinge uit te voer wanneer bladsye geregistreer word.

Verskillend van die `wu_page_load`, wat slegs loop wanneer 'n spesifieke bladsy gesien word, loop hierdie hook by registrasie vir elke adminbladsy wat met WP Ultimo-kode bygevoeg word.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID van hierdie bladsy. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die hook wat vir hierdie bladsy gegenereer is. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Gedefinieer in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) op lyn 203
