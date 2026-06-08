---
id: wu_page_added
title: Akcija - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Omogućava programerima pluginova da pokrenu dodatne stvari kada se stranice registruju.

Za razliku od `wu_page_load`, koji se pokreće samo kada se gleda određena stranica, ovaj hook se pokreće pri registraciji za svaku admin stranicu koja se dodaje pomoću WP Ultimo koda.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ove stranice. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook generisan za ovu stranicu. |

### Od

- 2.0.0
### Izvor

Definisano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) na liniji 203
