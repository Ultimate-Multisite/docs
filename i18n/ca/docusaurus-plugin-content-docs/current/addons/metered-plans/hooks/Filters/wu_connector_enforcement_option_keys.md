---
id: wu_connector_enforcement_option_keys
title: Filtre - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtra la llista de claues d'opció del proveïdor d'IA que s'apliquen des del site principal.

Permet afegir claues d'opció per a plugins personalitzats o de provesisors d'IA tercers, de manera que les seves configuracions també es heredin del site principal als subsites.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $keys | `string[]` | Noms de claues d'opció a aplicar (ja inclou les claues de connector descober dinàmicament i EXTRA_PROVIDER_OPTIONS). |

### Desvingut {#since}

- 1.2.0
### Font {#source}

Definit en [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) a la línia 206
