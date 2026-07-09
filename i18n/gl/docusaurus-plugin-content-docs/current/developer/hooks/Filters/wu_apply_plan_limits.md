---
id: wu_apply_plan_limits
title: Filtro - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filtro: wu_apply_plan_limits

Permite aos desenvolvedores de plugins interromper anticipadamente as limitacións.

Podes usar este filtro para executar código arbitrario antes de que se inicie calquera dos límites. Se o teu filtro devolve calquera valor verdadeiro, o proceso continuará; se devolve calquera valor falso, o código volverá e non se executará ningún dos hooks seguintes.

### Desde

- 1.7.0
### Fonte

- Definido en [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) na liña 52
- Definido en [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) na liña 98
## Devolve
