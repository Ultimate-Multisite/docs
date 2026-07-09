---
id: wu_page_added
title: Actio - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Actio: wu_page_added

Sinite elaboratores additamentorum res additicias exsequi cum paginae registrantur.

Aliter ac wu_page_load, qui tantum currit cum pagina certa spectatur, hic hamus in registratione currit pro omni pagina administratoris quae codice WP Ultimo additur.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID huius paginae. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hamus huic paginae generatus. |

### Ex quo

- 2.0.0
### Fons

Definitum in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) linea 203
