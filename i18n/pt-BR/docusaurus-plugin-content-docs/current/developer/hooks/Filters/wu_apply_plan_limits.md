---
id: wu_apply_plan_limits
title: Filtro - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Permitir que desenvolvedores de plugins interrompam as limitações.

Você pode usar este filtro para executar código arbitrário antes que qualquer um dos limites seja iniciado. Se o filtro retornar qualquer valor verdadeiro, o processo continuará; se retornar qualquer valor falso, o código retornará e nenhum dos hooks abaixo será executado.

### Since

- 1.7.0

### Source

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) at line 98

## Returns
