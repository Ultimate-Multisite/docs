---
id: wu_country_get_cities
title: Filtrs - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtrs: wu_country_get_cities {#filter-wucountrygetcities}

Atgriež pilsētu sarakstu kādam štatam valstī.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $cities | `array` | Štata pilsētu nosaukumu saraksts. Atslēgu nav. |
| $country_code | `string` | Divu burtu ISO kods valstij. |
| $state_code | `string` | Divu burtu ISO kods štatam. |
| $current_country | `\WP_Ultimo\Country\Country` | Pašreizējās klases instance. |

### Kopš {#since}

- 2.0.11
### Avots {#source}

Definēts [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) 146. rindā


## Atgriež {#returns}
Filtrēto štatu sarakstu.
