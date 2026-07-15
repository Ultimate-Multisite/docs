---
id: wu_page_added
title: Handling - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Handling: wu_page_added

Tillad plugin-udviklere at køre yderligere ting, når sider registreres.

I modsætning til wu_page_load, som kun kører, når en specifik side vises, kører denne hook ved registrering for hver admin-side, der tilføjes ved hjælp af WP Ultimo-kode.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID'et for denne side. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hooken, der er genereret til denne side. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) på linje 203
