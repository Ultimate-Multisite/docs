---
id: wu_page_load
title: Handling - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load {#action-wupageload}

Gør det muligt for pluginudviklere at tilføje yderligere hooks til vores sider.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID'et for denne side. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Den hook, der er genereret til denne side. |

### Siden {#since}

- 1.8.2
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) på linje 289
