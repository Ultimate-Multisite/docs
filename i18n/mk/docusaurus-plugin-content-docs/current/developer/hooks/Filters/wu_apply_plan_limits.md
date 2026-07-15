---
id: wu_apply_plan_limits
title: Филтер - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Дозволете им на развивачите на plugin-и да ги заобиколат ограничувањата.

Можете да го користите овој filter за да извршите произволен code пред да се иницира кое било од ограничувањата. Ако вашиот filter врати која било truthy вредност, процесот ќе продолжи; ако врати која било falsy вредност, code-от ќе се врати и ниту еден од hooks подолу нема да се изврши.

### Од {#since}

- 1.7.0
### Извор {#source}

- Дефинирано во [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) на линија 52
- Дефинирано во [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) на линија 98
## Враќа {#returns}
