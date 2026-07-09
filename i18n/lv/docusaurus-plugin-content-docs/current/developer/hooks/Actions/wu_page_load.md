---
id: wu_page_load
title: Darbība - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Darbība: wu_page_load {#action-wupageload}

Ļauj plugin izstrādātājiem pievienot papildu āķus mūsu lapām.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $id | `string` | Šīs lapas ID. |
| $page_hook | `string` | Šīs lapas lapas āķis. |
| $admin_page | `self` | Lapas instance. |

### Kopš {#since}

- 1.8.2
- 2.0.4: Pievienots trešais parametrs: lapas instance.
### Avots {#source}

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) 318. rindā
