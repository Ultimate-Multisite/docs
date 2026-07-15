---
id: wu_country_get_states
title: Suodatin - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Palauttaa tämän maan osavaltioiden luettelon.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $states | `array` | Osavaltioiden luettelo muodossa XX =&gt; Nimi. |
| $country_code | `string` | Maan kaksikirjaiminen ISO-koodi. |
| $current_country | `\WP_Ultimo\Country\Country` | Nykyisen luokan instanssi. |

### Alkaen {#since}

- 2.0.11
### Lähde {#source}

Määritelty tiedostossa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) rivillä 86


## Palauttaa {#returns}
Suodatetun osavaltioiden luettelon.
