---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

Körs efter att widgets har registrerats för den här sidan.

Den dynamiska delen av hook-namnet, `$this->id`, hänvisar till sidans ID.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $id | `string` | Sidans ID. |
| $page_hook | `string` | Sidans hook. |
| $page | `object` | Sidobjektet. |

### Sedan {#since}

- 2.4.10
### Källa {#source}

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) på rad 755
