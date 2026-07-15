---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Umožňuje vývojářům pluginů přidat další hooks na naše stránky.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $id | `string` | ID této stránky. |
| $page_hook | `string` | Hook stránky této stránky. |
| $admin_page | `self` | Objekt stránky. |

### Od verze {#since}

- 1.8.2
- 2.0.4: Přidán třetí parametr: objekt stránky.
### Zdroj {#source}

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) na řádku 332
