---
id: wu_bypass_unset_current_user
title: Filtro - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Permitir que os desenvolvedores ignorem o código de desativação do usuário atual.

Retornar qualquer coisa diferente de null irá ignorar a desativação do usuário atual logado. Isso pode ser útil em alguns cenários, por exemplo, ao lidar com sub-sites que estão sendo usados como painéis administrativos.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null para continuar, qualquer outra coisa para ignorá-lo. |
| $current_user | `false\|\WP_User` | O objeto do usuário atual. |

### Since

- 2.0.11
### Source

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns
