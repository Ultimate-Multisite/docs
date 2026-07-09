---
id: wu_bypass_unset_current_user
title: Filtro - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtro: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Permite que developers contornem o código que remove o utilizador atual.

Retornar qualquer coisa diferente de null irá contornar a remoção do utilizador atualmente com sessão iniciada. Isto pode ser útil em alguns cenários, por exemplo, ao lidar com subsites que estão a ser usados como painéis de administração.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null para prosseguir, qualquer outra coisa para contornar isto. |
| $current_user | `false\|\WP_User` | O objeto do utilizador atual. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido em [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) na linha 221


## Retorna {#returns}
