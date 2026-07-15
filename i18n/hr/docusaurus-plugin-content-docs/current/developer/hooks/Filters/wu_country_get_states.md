---
id: wu_country_get_states
title: Filtar - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtar: wu_country_get_states

Vraća popis saveznih država za ovu zemlju.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $states | `array` | Popis saveznih država u formatu XX =&gt; Name. |
| $country_code | `string` | Dvoslovni ISO kod za zemlju. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutačne klase. |

### Od verzije {#since}

- 2.0.11
### Izvor {#source}

Definirano u [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) u retku 86


## Vraća {#returns}
Filtrirani popis saveznih država.
