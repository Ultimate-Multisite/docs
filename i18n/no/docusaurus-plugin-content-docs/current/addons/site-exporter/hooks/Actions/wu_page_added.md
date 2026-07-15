---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Lar utviklere av plugins kjøre ekstra kode når sider blir registrert.

I motsetning til `wu_page_load`, som bare kjører når en spesifikk side vises, kjører denne hooken ved registrering for hver admin-side som legges til ved hjelp av WP Ultimo-kode.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-en til denne siden. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hooken som ble generert for denne siden. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) på linje 203
