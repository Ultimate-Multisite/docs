---
id: wu_country_get_states
title: Filtrs - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtrs: wu_country_get_states

Atgriež šīs valsts štatu sarakstu.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $states | `array` | Štatu saraksts XX =&gt; Name formātā. |
| $country_code | `string` | Valsts divu burtu ISO kods. |
| $current_country | `\WP_Ultimo\Country\Country` | Pašreizējās klases instance. |

### Kopš {#since}

- 2.0.11
### Avots {#source}

Definēts [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) 86. rindā


## Atgriež {#returns}
Filtrēto štatu sarakstu.
