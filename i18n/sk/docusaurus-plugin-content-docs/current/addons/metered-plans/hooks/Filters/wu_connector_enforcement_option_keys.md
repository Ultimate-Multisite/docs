---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtruje zoznam kľúčov možností poskytovateľa AI vynucovaných z hlavnej lokality.

Pridajte kľúče možností pre vlastné doplnky alebo doplnky poskytovateľov AI tretích strán, aby sa ich nastavenia tiež dedili z hlavnej lokality na podlokality.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $keys | `string[]` | Názvy kľúčov možností, ktoré sa majú vynucovať (už zahŕňa dynamicky objavené kľúče konektorov a EXTRA_PROVIDER_OPTIONS). |

### Od verzie

- 1.2.0
### Zdroj

Definované v [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) na riadku 206
