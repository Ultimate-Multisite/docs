---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtrerar listan över AI-leverantörsinställningar (option keys) som tvingas fram från huvudwebbplatsen.

Lägg till option keys för anpassade eller tredjeparts AI-leverantörsplugins så att deras inställningar också ärvs från huvudwebbplatsen på underwebbplatserna.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $keys | `string[]` | Option key-namn som ska tvingas fram (inkluderar redan dynamiskt upptäckta connector-keys och EXTRA_PROVIDER_OPTIONS). |

### Sedan {#since}

- 1.2.0
### Källa {#source}

Definieras i [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) på rad 206
