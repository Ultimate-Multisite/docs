---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render

Allow plugin developers to add additional content before we print the page.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $page_id | `string` | L'identifiant de cette page. |
| $page | `object` | L'objet de la page. |

### Depuis

- 1.8.2
### Source

Défini dans [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) à la ligne 398
