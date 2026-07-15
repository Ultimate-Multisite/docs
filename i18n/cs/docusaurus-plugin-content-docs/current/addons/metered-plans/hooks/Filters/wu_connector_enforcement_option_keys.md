---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtruje seznam klíčů s nastavením poskytovatelů AI, které jsou vynuceny z hlavní stránky.

Přidejte klíče s nastavením pro vlastní nebo externí AI poskytovatelové pluginy, aby jejich nastavení bylo také dědiováno z hlavní stránky na podstránky.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Název klíčů s nastavením, které se vynucují (zahrnuje již dynamicky nalezené klíče konektoru a EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
