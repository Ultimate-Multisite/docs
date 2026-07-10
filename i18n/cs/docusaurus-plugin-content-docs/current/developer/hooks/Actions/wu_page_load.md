---
id: wu_page_load
title: Akce - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

Umožňuje vývojářům pluginů přidat další háčky (hooks) na naše stránky.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID této stránky. |
| $page_hook | `string` | Háček stránky (page hook) této stránky. |
| $admin_page | `self` | Instancí stránky. |

### Od {#since}

- 1.8.2
- 2.0.4: Přidán třetí parametr: instance stránky.
### Zdroj {#source}

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) na řádku 318
