---
id: wu_page_this-id_load
title: 'Ação - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_${this->id}_load

Permitir que desenvolvedores de plugins adicionem hooks adicionais às nossas páginas.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | O ID desta página. |
| $page_hook | `string` | O hook da página desta página. |
| $admin_page | `self` | A instância da página. |

### Since

- 1.8.2
- 2.0.4: Adicionado terceiro parâmetro: a instância da página.
### Source

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) na linha 332
