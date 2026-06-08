---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtert de lijst met optie-sleutels van AI-providers die worden afgedwongen vanaf de hoofdsite.

Voeg optie-sleutels toe voor aangepaste of third-party AI-provider plugins, zodat hun instellingen ook worden geërfd van de hoofdsite op subsites.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $keys | `string[]` | Optie-sleutelnamen die moeten worden afgedwongen (bevat al dynamisch ontdekte connector-sleutels en EXTRA_PROVIDER_OPTIONS). |

### Sinds

- 1.2.0
### Bron

Wordt gedefinieerd in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) op regel 206
