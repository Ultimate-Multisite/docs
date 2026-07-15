---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

A widgetek regisztrálása után fog rajta futni.

A hook név dinamikus része, az `$this->id`, a lap azonosítójára (page id) utal.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $id | `string` | A lap azonosítója. |
| $page_hook | `string` | A lap hook-ja. |
| $page | `object` | A lap objektuma. |

### Since {#since}

- 2.4.10
### Source {#source}

Definálva a [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) fájlban, 755-sorban.
