---
id: wu_page_this-id_register_widgets
title: 'Ação - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Disparado após os widgets serem registados para esta página.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $id | `string` | O ID da página. |
| $page_hook | `string` | O hook da página. |
| $page | `object` | O objeto da página. |

### Desde

- 2.4.10
### Fonte

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) na linha 755
