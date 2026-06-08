---
id: wu_page_added
title: Akcja - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Pozwala deweloperom pluginów na wykonanie dodatkowych akcji, gdy strony są rejestrowane.

W przeciwieństwie do `wu_page_load`, który uruchamia się tylko wtedy, gdy dana strona jest wyświetlana, ten hook uruchamia się podczas rejestracji każdej strony administracyjnej dodanej za pomocą kodu WP Ultimo.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID tej strony. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook wygenerowany dla tej strony. |

### Since

- 2.0.0
### Source

Zdefiniowane w [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) w linii 203
