---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Pinapayagan nito ang mga developer ng plugin na i-short-circuit (i-bypass) ang mga limitasyon.

Maaari mong gamitin ang filter na ito para magpatakbo ng anumang code bago pa man magsimula ang anumang limitasyon. Kung ang return ng filter ay anumang *truthy value* (hal. `true` o isang value na itinuturing na totoo), magpapatuloy ang proseso. Kung ito naman ay *falsy value* (hal. `false` o `null`), hihinto ang code at hindi magpapatakbo ang anumang hooks sa ibaba.

### Since {#since}

- 1.7.0
### Source {#source}

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns {#returns}
