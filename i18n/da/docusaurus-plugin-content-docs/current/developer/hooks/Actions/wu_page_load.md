---
id: wu_page_load
title: Handling - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Tillad plugin-udviklere at tilføje yderligere hooks til vores sider.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $id | `string` | ID'et for denne side. |
| $page_hook | `string` | Page hook for denne side. |
| $admin_page | `self` | Sideinstansen. |

### Siden {#since}

- 1.8.2
- 2.0.4: Tilføjet tredje parameter: sideinstansen.
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) på linje 318
