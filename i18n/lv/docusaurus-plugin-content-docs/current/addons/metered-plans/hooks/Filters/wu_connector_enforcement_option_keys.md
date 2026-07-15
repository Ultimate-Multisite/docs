---
id: wu_connector_enforcement_option_keys
title: Filtrs - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filtrs: wu_connector_enforcement_option_keys

Filtrē AI provider opciju atslēgu sarakstu, kas tiek uzspiestas no galvenās vietnes.

Pievienojiet opciju atslēgas pielāgotiem vai trešo pušu AI provider spraudņiem, lai to iestatījumi arī tiktu mantoti no galvenās vietnes apakšvietnēs.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $keys | `string[]` | Opciju atslēgu nosaukumi, ko uzspiest (jau ietver dinamiski atrastās connector atslēgas un EXTRA_PROVIDER_OPTIONS). |

### Kopš {#since}

- 1.2.0
### Avots {#source}

Definēts [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) 206. rindā
