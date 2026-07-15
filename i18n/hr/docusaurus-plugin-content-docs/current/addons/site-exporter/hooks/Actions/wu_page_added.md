---
id: wu_page_added
title: Radnja - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Akcija: wu_page_added

Omogućuje programerima pluginova pokretanje dodatnih stvari kada se stranice registriraju.

Za razliku od wu_page_load, koji se pokreće samo kada se pregledava određena stranica, ovaj hook se pokreće pri registraciji za svaku administratorsku stranicu dodanu pomoću WP Ultimo koda.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ove stranice. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook generiran za ovu stranicu. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) u retku 203
