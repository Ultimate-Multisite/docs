---
id: wu_connector_enforcement_option_keys
title: Suodatin - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Suodatin: wu_connector_enforcement_option_keys

Suodattaa pääsivustolta pakotettujen AI-palveluntarjoajan asetusavainten luettelon.

Lisää asetusavaimia mukautetuille tai kolmannen osapuolen AI-palveluntarjoajan plugineille, jotta niiden asetukset periytyvät myös pääsivustolta alisivustoille.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $keys | `string[]` | Pakotettavien asetusavainten nimet (sisältää jo dynaamisesti löydetyt connector-avaimet ja `EXTRA_PROVIDER_OPTIONS`). |

### Alkaen

- 1.2.0
### Lähde

Määritelty tiedostossa [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) rivillä 206
