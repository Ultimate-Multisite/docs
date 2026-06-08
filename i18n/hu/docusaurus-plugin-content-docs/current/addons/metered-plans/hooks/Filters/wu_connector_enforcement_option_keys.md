---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Szűrőzi a főoldalról kötelezően alkalmazott AI szolgáltató opciókulcsait.

Ezzel hozzáadhatók opciókulcsok a saját vagy harmadik féltől származó AI szolgáltató pluginekhez, így azok beállításai is örökíthetők a főoldaltól a altoldalakra.

## Paraméterek

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Az alkalmazandó opciókulcsok neve (belefoglalja a dinamikusan felfedezett kapcsolókulcsokat és az EXTRA_PROVIDER_OPTIONS-t). |

### Since

- 1.2.0
### Source

Definíciója található [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) fájlban, 206-sorban.
