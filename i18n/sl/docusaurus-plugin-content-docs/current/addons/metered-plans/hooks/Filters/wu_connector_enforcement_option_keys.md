---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Filtrirajte seznam ključev možnosti AI ponudnika, ki se uveljavljajo z glavnega site.

Dodajte ključe možnosti za custom ali third-party AI provider plugin-e, da se njihove nastavitve na podstraneh prav tako podedujejo z glavnega site.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Imena ključev možnosti za uveljavitev (že vključuje dinamično odkrite ključe connector-jev in EXTRA_PROVIDER_OPTIONS). |

### Od različice {#since}

- 1.2.0
### Vir {#source}

Določeno v [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) v vrstici 206
