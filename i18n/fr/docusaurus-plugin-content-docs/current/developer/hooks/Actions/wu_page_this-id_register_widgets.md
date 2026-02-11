---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

S'exécute après l'enregistrement des widgets pour cette page.

La partie dynamique du nom du hook, `$this->id`, fait référence à l'ID de la page.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $id | `string` | L'ID de la page. |
| $page_hook | `string` | Le hook de la page. |
| $page | `object` | L'objet de la page. |

### Since

- 2.4.10

### Source

Défini dans [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) à la ligne 755
