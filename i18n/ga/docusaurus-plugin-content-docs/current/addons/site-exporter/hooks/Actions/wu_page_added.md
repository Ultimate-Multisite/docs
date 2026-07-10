---
id: wu_page_added
title: Gníomh - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Lig d’fhorbróirí breiseán rudaí breise a rith nuair a chláraítear leathanaigh.

Murab ionann agus wu_page_load, nach ritheann ach nuair atá leathanach ar leith á fheiceáil, ritheann an crúca seo ag an gclárú do gach leathanach riaracháin atá á chur leis ag úsáid cód WP Ultimo.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID an leathanaigh seo. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | An crúca a gineadh don leathanach seo. |

### Ó shin {#since}

- 2.0.0
### Foinse {#source}

Sainithe in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ag líne 203
