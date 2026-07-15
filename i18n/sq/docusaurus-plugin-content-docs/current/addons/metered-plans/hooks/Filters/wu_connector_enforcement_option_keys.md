---
id: wu_connector_enforcement_option_keys
title: Filtër - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtroni listën e çelësave të opsioneve të ofruesit AI të detyruar nga site kryesor.

Shtoni çelësa opsionesh për plugin-et e ofruesve AI të personalizuar ose të palëve të treta, në mënyrë që cilësimet e tyre të trashëgohen gjithashtu nga site kryesor në nën-site.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $keys | `string[]` | Emrat e çelësave të opsioneve për t’u detyruar (tashmë përfshin çelësat e connector të zbuluar dinamikisht dhe EXTRA_PROVIDER_OPTIONS). |

### Që prej {#since}

- 1.2.0
### Burimi {#source}

Përcaktuar në [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) në rreshtin 206
