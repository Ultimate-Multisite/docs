---
id: wu_apply_plan_limits
title: Filtro - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Permitir a los desarrolladores de plugins interrumpir las limitaciones.

Puedes usar este filtro para ejecutar código arbitrario antes de que se inicien las limitaciones. Si el filtro devuelve un valor verdadero, el proceso continuará; si devuelve un valor falso, el código se detendrá y ninguno de los ganchos siguientes se ejecutará.

### Since

- 1.7.0
### Source

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) at line 98
## Returns
