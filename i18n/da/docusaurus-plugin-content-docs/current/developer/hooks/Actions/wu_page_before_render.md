---
id: wu_page_before_render
title: Handling - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# Action: wu_page_before_render

Tillad pluginudviklere at tilføje yderligere indhold, før vi udskriver siden.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string` | ID'et for denne side. |
| $page | `object` | Sideobjektet. |

### Siden {#since}

- 1.8.2
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388) på linje 388
