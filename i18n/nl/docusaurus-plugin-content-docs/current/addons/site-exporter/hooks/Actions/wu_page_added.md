---
id: wu_page_added
title: ''
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Laat pluginontwikkelaars extra acties uitvoeren wanneer pagina's worden geregistreerd.

In tegenstelling tot wu_page_load, die alleen wordt uitgevoerd wanneer een specifieke pagina wordt bekeken, wordt deze hook uitgevoerd bij registratie voor elke adminpagina die wordt toegevoegd met WP Ultimo-code.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | De ID van deze pagina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | De hook die aan deze pagina is gegenereerd. |

### Since

- 2.0.0
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203
