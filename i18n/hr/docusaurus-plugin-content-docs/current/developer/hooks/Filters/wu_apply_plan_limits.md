---
id: wu_apply_plan_limits
title: Filtar - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Omogućuje developerima plugina da zaobiđu ograničenja.

Ovaj filter možete koristiti za pokretanje proizvoljnog koda prije nego što se bilo koje od ograničenja pokrene. Ako vaš filter vrati bilo koju truthy vrijednost, proces će se nastaviti; ako vrati bilo koju falsy vrijednost, kod će se vratiti i nijedan od hookova u nastavku neće se pokrenuti.

### Od verzije

- 1.7.0
### Izvor

- Definirano u [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) u retku 52
- Definirano u [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) u retku 98
## Vraća
