---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Lar plugin-utviklere omgå begrensningene.

Du kan bruke dette filteret til å kjøre vilkårlig kode før noen av begrensningene blir initiert. Hvis filteret returnerer en sann verdi (truthy), vil prosessen fortsette. Hvis det returnerer en usann verdi (falsy), vil koden stoppe, og ingen av hookene nedenfor vil kjøre.

### Siden {#since}

- 1.7.0
### Kilde {#source}

- Definert i [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) på linje 52
- Definert i [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) på linje 98
## Returnerer {#returns}
