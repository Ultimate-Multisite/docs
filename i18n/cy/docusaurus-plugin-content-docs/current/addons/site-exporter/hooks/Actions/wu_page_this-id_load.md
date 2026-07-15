---
id: wu_page_this-id_load
title: 'Gweithred - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Caniatáu i ddatblygwyr plugin ychwanegu bachau ychwanegol at dudalen benodol.

Defnydd: Mae angen disodli’r rhan ddeinamig ag id tudalen dilys, e.e. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID y dudalen hon. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Y bachyn a gynhyrchir ar gyfer y dudalen hon. |

### Ers {#since}

- 1.8.2
### Ffynhonnell {#source}

Diffinnir yn [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ar linell 301
