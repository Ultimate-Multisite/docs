---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Omogućava programerima pluginova da zaobiđu ograničenja.

Možete koristiti ovaj filter da pokrenete proizvoljan kod prije nego što se bilo koje ograničenje aktivira. Ako filter vrati bilo koju istinitu vrijednost (truthy value), proces će nastaviti, a ako vrati bilo koju neistinitu vrijednost (falsy value), kod će se vratiti i nijedan od hookova ispod neće biti pokrenut.

### Since

- 1.7.0
### Source

- Definirano u [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) na liniji 52
- Definirano u [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) na liniji 98
## Returns
