---
id: wu_page_this-id_load
title: 'Acción - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Permite aos desenvolvedores de plugin engadir hooks adicionais ás nosas páxinas.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $id | `string` | O ID desta páxina. |
| $page_hook | `string` | O hook de páxina desta páxina. |
| $admin_page | `self` | A instancia da páxina. |

### Desde {#since}

- 1.8.2
- 2.0.4: Engadido o terceiro parámetro: a instancia da páxina.
### Fonte {#source}

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) na liña 332
