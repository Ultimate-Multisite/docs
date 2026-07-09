---
id: wu_apply_plan_limits
title: Filtro - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filtro: wu_apply_plan_limits

Permite que desenvolvedores de plugins façam short-circuit das limitações.

Pode usar este filtro para executar código arbitrário antes de qualquer um dos limites ser iniciado. Se o seu filtro retornar qualquer valor truthy, o processo continuará; se retornar qualquer valor falsy, o código retornará e nenhum dos hooks abaixo será executado.

### Desde

- 1.7.0
### Fonte

- Definido em [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) na linha 52
- Definido em [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) na linha 98
## Retorna
