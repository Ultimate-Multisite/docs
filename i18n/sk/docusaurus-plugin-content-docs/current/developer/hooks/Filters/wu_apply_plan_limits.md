---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Umožňuje vývojárom doplnkov obísť obmedzenia.

Tento filter môžete použiť na spustenie ľubovoľného kódu pred tým, než sa iniciujú akékoľvek limity. Ak váš filter vráti akúkoľvek pravdivú hodnotu, proces bude pokračovať; ak vráti akúkoľvek nepravdivú hodnotu, kód sa vráti a nespustí sa žiadny z hookov nižšie.

### Od verzie

- 1.7.0
### Zdroj

- Definované v [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) na riadku 52
- Definované v [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) na riadku 98
## Návratová hodnota
