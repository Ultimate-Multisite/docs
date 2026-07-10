---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

Lar plugin-utviklere legge til ekstra hooks på sidene våre.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $id | `string` | ID-en til denne siden. |
| $page_hook | `string` | Side-hooken til denne siden. |
| $admin_page | `self` | Selve side-instansen. |

### Siden {#since}

- 1.8.2
- 2.0.4: Legget til tredje parameter: side-instansen.
### Kilde {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) på linje 318
