---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Låter plugin-utvecklare kringgå begränsningarna.

Du kan använda detta filter för att köra godtycklig kod innan några av begränsningarna startar. Om filtret returnerar ett sanningsvärde (truthy value) fortsätter processen, men om det returnerar ett falskt värde (falsy value) avbryts koden och ingen av hookarna nedan kommer att köras.

### Sedan

- 1.7.0
### Källa

- Definierat i [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) på rad 52
- Definierat i [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) på rad 98
## Returnerar
