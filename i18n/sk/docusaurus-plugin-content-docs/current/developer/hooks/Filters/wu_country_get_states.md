---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Vracia zoznam štátov pre túto krajinu.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $states | `array` | Zoznam štátov vo formáte XX =&gt; Name. |
| $country_code | `string` | Dvojpísmenový ISO kód krajiny. |
| $current_country | `\WP_Ultimo\Country\Country` | Inštancia aktuálnej triedy. |

### Od verzie {#since}

- 2.0.11
### Zdroj {#source}

Definované v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) na riadku 86


## Návratová hodnota {#returns}
Filtrovaný zoznam štátov.
