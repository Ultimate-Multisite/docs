---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

Spouští se po registraci widgetů pro tuto stránku.

Dynamická část názvu hooku, `$this->id`, se vztahuje k ID stránky.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $id | `string` | ID stránky. |
| $page_hook | `string` | Hook stránky. |
| $page | `object` | Objekt stránky. |

### Od {#since}

- 2.4.10
### Zdroj {#source}

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) na řádku 755
