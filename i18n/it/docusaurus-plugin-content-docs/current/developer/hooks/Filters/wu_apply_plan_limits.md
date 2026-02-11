---
id: wu_apply_plan_limits
title: Filtro - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filtro: wu_apply_plan_limits

Consente agli sviluppatori di plugin di interrompere le limitazioni.

Puoi usare questo filtro per eseguire codice arbitrario prima che vengano avviati i limiti. Se il filtro restituisce un valore truthy, il processo continuerà; se restituisce un valore falsy, il codice terminerà e nessuno degli hook sottostanti verrà eseguito.

### Da

- 1.7.0

### Fonte

- Definito in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) alla riga 52
- Definito in [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) alla riga 98

## Restituisce
