---
id: wu_apply_plan_limits
title: Филтер - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Филтер: wu_apply_plan_limits

Омогућава програмерима додатака да заобиђу ограничења.

Овај филтер можете користити за покретање произвољног кода пре него што се било које ограничење иницијализује. Ако ваш филтер врати било коју истиниту вредност, процес ће се наставити; ако врати било коју лажну вредност, код ће се вратити и ниједна од кукица испод неће бити покренута.

### Од верзије

- 1.7.0
### Извор

- Дефинисано у [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) у реду 52
- Дефинисано у [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) у реду 98
## Враћа се
