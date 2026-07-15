---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Tillad plugin-udviklere at kortslutte begrænsningerne.

Du kan bruge dette filter til at køre vilkårlig kode, før nogen af begrænsningerne bliver igangsat. Hvis dit filter returnerer en truthy værdi, vil processen fortsætte; hvis det returnerer en falsy værdi, vil koden returnere, og ingen af hooks nedenfor vil køre.

### Siden {#since}

- 1.7.0
### Kilde {#source}

- Defineret i [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) på linje 52
- Defineret i [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) på linje 98
## Returnerer {#returns}
