---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtreerib AI teenusepakkuja valikuvõtmete loendit, mida jõustatakse peasaidilt.

Lisa valikuvõtmed kohandatud või kolmanda osapoole AI teenusepakkuja plugin'idele, et nende sätted päritaks alamsaitidel samuti peasaidilt.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $keys | `string[]` | Jõustatavate valikuvõtmete nimed (sisaldab juba dünaamiliselt tuvastatud connector-võtmeid ja EXTRA_PROVIDER_OPTIONS). |

### Alates

- 1.2.0
### Allikas

Määratletud failis [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) real 206
