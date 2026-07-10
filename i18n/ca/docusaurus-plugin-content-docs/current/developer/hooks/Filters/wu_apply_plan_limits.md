---
id: wu_apply_plan_limits
title: Filtre - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filtre: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Permet als desenvolupadors de plugin interrompre les limitacions.

Pots fer servir aquest filtre per executar codi arbitrari abans que s’iniciï qualsevol dels límits. Si el teu filtre retorna qualsevol valor truthy, el procés continuarà; si retorna qualsevol valor falsy, el codi retornarà i no s’executarà cap dels hooks de sota.

### Des de {#since}

- 1.7.0
### Font {#source}

- Definit a [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) a la línia 52
- Definit a [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) a la línia 98
## Retorna {#returns}
