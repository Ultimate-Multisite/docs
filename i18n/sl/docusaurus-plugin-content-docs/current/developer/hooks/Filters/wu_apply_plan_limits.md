---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Razvijalcem vtičnikov omogoča, da zaobidejo omejitve.

Ta filter lahko uporabite za zagon poljubne kode, preden se sproži katera koli omejitev. Če vaš filter vrne katero koli resnično vrednost, se bo postopek nadaljeval; če vrne katero koli neresnično vrednost, se bo koda vrnila in noben od spodnjih kaveljčkov se ne bo zagnal.

### Od različice {#since}

- 1.7.0
### Vir {#source}

- Določeno v [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) v vrstici 52
- Določeno v [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) v vrstici 98
## Vrne {#returns}
