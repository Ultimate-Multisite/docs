---
id: wu_page_added
title: Ago - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Ago: wu_page_added

Permesas al programistoj de kromprogramoj ruli pliajn aferojn kiam paĝoj estas registritaj.

Male al la wu_page_load, kiu ruliĝas nur kiam specifa paĝo estas vidata, ĉi tiu hook ruliĝas ĉe registrado por ĉiu administra paĝo aldonata per WP Ultimo-kodo.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La ID de ĉi tiu paĝo. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La hook generita por ĉi tiu paĝo. |

### Ekde {#since}

- 2.0.0
### Fonto {#source}

Difinita en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ĉe linio 203
