---
id: wu_page_added
title: Actio - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Actio: wu_page_added {#action-wupageadded}

Sinite effectores plugin res additas agere cum paginae describuntur.

Dissimile a wu_page_load, quod solum agitur cum pagina certa spectatur, hic hook agitur in descriptione pro omni pagina admin quae additur codice Ultimate Multisite utendo.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $page_id | `string` | ID huius paginae. |
| $page_hook | `string` | Nomen hook huius paginae. |

### Ab {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ad lineam 228
