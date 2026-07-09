---
id: wu_connector_enforcement_option_keys
title: Filtr - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Filtruje listę kluczy opcji dostawcy AI, które są egzekwowane z głównej witryny.

Pozwala dodać klucze opcji dla niestandardowych lub zewnętrznych pluginów dostawców AI, dzięki czemu ich ustawienia są również dziedziczone z głównej witryny na podstronach.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Nazwy kluczy opcji, które mają być egzekwowane (już zawiera odkryte dynamicznie klucze łączników oraz EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Zdefiniowane w [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) w linii 206
