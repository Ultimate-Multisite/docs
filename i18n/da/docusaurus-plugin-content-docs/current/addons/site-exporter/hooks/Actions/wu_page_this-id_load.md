---
id: wu_page_this-id_load
title: 'Handling - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Gør det muligt for pluginudviklere at tilføje yderligere hooks til en specifik side.

Brug: Den dynamiske del skal erstattes med et gyldigt side-ID, f.eks. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID'et for denne side. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Det hook, der er genereret til denne side. |

### Siden {#since}

- 1.8.2
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) på linje 301
