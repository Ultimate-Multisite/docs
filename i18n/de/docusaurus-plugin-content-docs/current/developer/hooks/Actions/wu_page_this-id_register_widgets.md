---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_${this->id}_register_widgets

Ausgelöst, nachdem Widgets für diese Seite registriert wurden.

Der dynamische Teil des Hook-Namens, `$this->id`, bezieht sich auf die Seiten-ID.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $id | `string` | Die Seiten-ID. |
| $page_hook | `string` | Der Seiten-Hook. |
| $page | `object` | Das Seitenobjekt. |

### Seit

- 2.4.10

### Quelle

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) in Zeile 755
