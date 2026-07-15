---
id: wu_country_get_cities
title: Filtro - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtrilo: wu_country_get_cities

Revenigas la liston de urboj por ŝtato en lando.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $cities | `array` | Listo de ŝtataj urbnomoj. Neniuj ŝlosiloj ĉeestas. |
| $country_code | `string` | Dulitera ISO-kodo por la lando. |
| $state_code | `string` | Dulitera ISO-kodo por la ŝtato. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanco de la aktuala klaso. |

### Ekde {#since}

- 2.0.11
### Fonto {#source}

Difinita en [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ĉe linio 146


## Revenoj {#returns}
La filtrita listo de ŝtatoj.
