---
id: wu_page_load
title: Acción - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Acción: wu_page_load {#action-wupageload}

Permite aos desenvolvedores de complementos engadir hooks adicionais ás nosas páxinas.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $id | `string` | O ID desta páxina. |
| $page_hook | `string` | O hook de páxina desta páxina. |
| $admin_page | `self` | A instancia da páxina. |

### Desde {#since}

- 1.8.2
- 2.0.4: Engadiuse o terceiro parámetro: a instancia da páxina.
### Fonte {#source}

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) na liña 318
