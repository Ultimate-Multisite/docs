---
id: wu_page_load
title: Akcja - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Akcja: wu_page_load

Pozwala deweloperom pluginów na dodanie dodatkowych hooków do naszych stron.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID tej strony. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook wygenerowany dla tej strony. |

### Od {#since}

- 1.8.2
### Źródło {#source}

Zdefiniowane w [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) w linii 289
