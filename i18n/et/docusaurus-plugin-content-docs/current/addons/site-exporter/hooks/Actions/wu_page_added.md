---
id: wu_page_added
title: Tegevus - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Toiming: wu_page_added

Võimaldab plugin arendajatel käivitada täiendavaid toiminguid, kui lehed registreeritakse.

Erinevalt wu_page_load-ist, mis käivitub ainult siis, kui konkreetset lehte vaadatakse, käivitub see hook registreerimisel iga admin lehe puhul, mis lisatakse WP Ultimo koodiga.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Selle lehe ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sellele lehele genereeritud hook. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) real 203
