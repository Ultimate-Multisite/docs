---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Vráti zoznam miest pre štát v krajine.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $cities | `array` | Zoznam názvov miest v štáte. Nie sú prítomné žiadne kľúče. |
| $country_code | `string` | Dvojpísmenový ISO kód krajiny. |
| $state_code | `string` | Dvojpísmenový ISO kód štátu. |
| $current_country | `\WP_Ultimo\Country\Country` | Inštancia aktuálnej triedy. |

### Od verzie

- 2.0.11
### Zdroj

Definované v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) na riadku 146


## Vráti
Filtrovaný zoznam štátov.
