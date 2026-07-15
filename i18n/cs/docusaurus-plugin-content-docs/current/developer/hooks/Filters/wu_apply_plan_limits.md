---
id: wu_apply_plan_limits
title: Filtrační funkce - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filtr: wu_apply_plan_limits

Umožňuje vývojářům pluginů obejít limity.

Tento filtr můžete použít k spuštění libovolného kódu před zahájením jakýchkoli limitací. Pokud vrátí filtr jakoukoli pravdivou hodnotu (truthy value), proces pokračuje. Pokud vrátí jakoukoli nepravdivou hodnotu (falsy value), kód se vrátí a žádné z níže uvedených hooků se nespustí.

### Od {#since}

- 1.7.0
### Zdroj {#source}

- Definováno v [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) na řádku 52
- Definováno v [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) na řádku 98
## Vrátí {#returns}
