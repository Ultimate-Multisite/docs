---
id: wu_bypass_unset_current_user
title: Filtro - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtro: wu_bypass_unset_current_user

Permite aos desenvolvedores omitir o código que desestablece o usuario actual.

Devolver calquera cousa distinta de null omitirá a desasignación do usuario actual que iniciou sesión. Isto pode ser útil nalgúns escenarios, por exemplo, ao tratar con subsitios que se están a usar como paneis de administración.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null para continuar, calquera outra cousa para omitilo. |
| $current_user | `false\|\WP_User` | O obxecto do usuario actual. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido en [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) na liña 221


## Devolve {#returns}
