---
id: wu_connector_enforcement_option_keys
title: Filtro - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Filtra l'elenco delle chiavi delle opzioni dei fornitori di AI che vengono applicate dal sito principale.

Aggiunge chiavi di opzioni per plugin di fornitori di AI personalizzati o di terze parti, in modo che le loro impostazioni vengano ereditate anche dal sito principale sui sottositi.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $keys | `string[]` | Nomi delle chiavi delle opzioni da applicare (include già le chiavi dei connettori scoperte dinamicamente e EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Definito in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) alla riga 206
