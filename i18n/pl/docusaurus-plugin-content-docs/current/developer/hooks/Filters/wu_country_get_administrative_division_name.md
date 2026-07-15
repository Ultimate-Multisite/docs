---
id: wu_country_get_administrative_division_name
title: Filtry - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtr: wu_country_get_administrative_division_name

Zwraca ładną nazwę podziału administracyjnego kraju.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $name | `string` | Nazwa podziału. Zazwyczaj jest to coś w rodzaju stanu, prowincji, regionu itp. |
| $country_code | `string` | Dwuznakowy kod ISO kraju. |
| $state_code | `string` | Dwuznakowy kod ISO stanu. |
| $ucwords | `bool` | Czy ma być zapisane wielkimi literami. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancja bieżącej klasy. |

### Od wersji {#since}

- 2.0.11
### Źródło {#source}

Zdefiniowane w [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) w linii 250


## Zwraca {#returns}
Zmodyfikowaną nazwę podziału.
