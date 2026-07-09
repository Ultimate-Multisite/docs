---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load {#action-wupageload}

Låter plugin-utvecklare lägga till ytterligare hooks på våra sidor.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID:t för den här sidan. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook:en som genereras för den här sidan. |

### Sedan {#since}

- 1.8.2
### Källa {#source}

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) på rad 289
