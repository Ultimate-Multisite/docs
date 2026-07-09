---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Filtert die Liste der Option-Schlüssel von KI-Anbietern, die von der Hauptseite durchgesetzt werden.

Fügen Sie Option-Schlüssel für benutzerdefinierte oder von Drittanbietern bereitgestellte KI-Anbieter-Plugins hinzu, damit deren Einstellungen auch auf den Unterseiten von der Hauptseite übernommen werden.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $keys | `string[]` | Option-Schlüssel-Namen, die durchgesetzt werden sollen (enthält bereits dynamisch entdeckte Connector-Schlüssel und EXTRA_PROVIDER_OPTIONS). |

### Seit {#since}

- 1.2.0
### Quelle {#source}

Definiert in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) in Zeile 206
