---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtrerer listen over konfigurasjonsnøkler for AI-leverandører som pålegges fra hovednettstedet.

Legger til konfigurasjonsnøkler for tilpassede eller tredjeparts AI-leverandør-plugins, slik at deres innstillinger også arves fra hovednettstedet på undernettstedene.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $keys | `string[]` | Konfigurasjonsnøkkelnavn som skal pålegges (inkluderer allerede dynamisk oppdagede konnektor-nøkler og EXTRA_PROVIDER_OPTIONS). |

### Siden

- 1.2.0
### Kilde

Definert i [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) på linje 206
