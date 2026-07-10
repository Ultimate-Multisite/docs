---
id: wu_page_after_render
title: Handling - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: df5c3e7ef27ab39b167189e082ed729b
---
# Action: wu_page_after_render {#action-wupageafterrender}

Gir plugin-utviklere mulighet til å legge til ekstra innhold etter at vi har rendret siden.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID-en til denne siden. |
| $page | `object` | Objektet som representerer siden. |

### Since {#since}

- 1.8.2
### Source {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L413) på linje 413
