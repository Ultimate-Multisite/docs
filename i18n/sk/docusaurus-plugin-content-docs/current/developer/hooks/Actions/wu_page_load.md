---
id: wu_page_load
title: Akcia - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Akcia: wu_page_load {#action-wupageload}

Umožňuje vývojárom pluginov pridať na naše stránky ďalšie hooky.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $id | `string` | ID tejto stránky. |
| $page_hook | `string` | Hook stránky tejto stránky. |
| $admin_page | `self` | Inštancia stránky. |

### Od verzie {#since}

- 1.8.2
- 2.0.4: Pridaný tretí parameter: inštancia stránky.
### Zdroj {#source}

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) na riadku 318
