---
id: wu_page_added
title: Handling - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Handling: wu_page_added {#action-wupageadded}

Gør det muligt for pluginudviklere at køre yderligere ting, når sider registreres.

I modsætning til wu_page_load, som kun kører, når en specifik side vises, kører denne hook ved registrering for hver administrationsside, der tilføjes med Ultimate Multisite-kode.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string` | ID'et for denne side. |
| $page_hook | `string` | Hook-navnet for denne side. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) på linje 228
