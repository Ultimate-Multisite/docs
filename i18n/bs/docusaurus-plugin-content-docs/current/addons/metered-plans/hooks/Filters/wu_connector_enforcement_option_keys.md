---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtruje listu opcija (option keys) AI provajdera koje se obavezuju (enforce) sa glavne stranice.

Dodajte opcijske ključeve za prilagođene ili treće strane AI provajdere kako bi se njihova podešavanja takođe naslijedila sa glavne stranice na podstranice (subsites).

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Imena opcijskih ključeva koje treba obavezati (već uključuje dinamički otkrivene ključeve konektora i EXTRA_PROVIDER_OPTIONS). |

### Since

- 1.2.0
### Source

Definisano u [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) na liniji 206
