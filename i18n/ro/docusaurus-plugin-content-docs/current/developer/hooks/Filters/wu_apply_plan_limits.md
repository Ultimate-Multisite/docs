---
id: wu_apply_plan_limits
title: Filtru - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Permite dezvoltatorilor de plugin să contource limitările.

Puteți folosi acest filter pentru a rula un cod arbitrar înainte ca orice limitare să fie inițiată. Dacă filterul returnează o valoare *truthy* (adevărată), procesul va continua, iar dacă returnează o valoare *falsy* (falsă), codul va se opri și niciunul dintre hook-urile de mai jos nu va rula.

### Since {#since}

- 1.7.0
### Source {#source}

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns {#returns}
