---
id: wu_page_this-id_register_widgets
title: 'Ação - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Ação: wu_page_${this->id}_register_widgets

Dispara após os widgets serem registrados para esta página.

A parte dinâmica do nome do hook, $this->id, refere-se ao id da página.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $id | `string` | O id da página. |
| $page_hook | `string` | O hook da página. |
| $page | `object` | O objeto da página. |

### Desde

- 2.4.10

### Fonte

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) na linha 755
