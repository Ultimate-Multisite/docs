---
id: wu_page_added
title: Aktioun - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Erlaabt plugin-Entwéckler, zousätzlech Saachen auszeféieren, wann Säite registréiert ginn.

Am Géigesaz zu wu_page_load, dat nëmme leeft, wann eng spezifesch Säit gekuckt gëtt, leeft dësen hook bei der Registréierung fir all Admin-Säit, déi mam WP Ultimo Code derbäigesat gëtt.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | D'ID vun dëser Säit. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Den hook, deen zu dëser Säit generéiert gouf. |

### Zënter

- 2.0.0
### Quell

Definéiert an [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) op Zeil 203
