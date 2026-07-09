---
id: wu_country_get_administrative_division_name
title: Iragazkia - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Herrialdeko administrazio-azpibanaketen izen egokia itzultzen du.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $name | `string` | Banaketaren izena. Normalean state, province, region, etab. bezalako zerbait. |
| $country_code | `string` | Herrialdearen bi letrako ISO kodea. |
| $state_code | `string` | Estatuaren bi letrako ISO kodea. |
| $ucwords | `bool` | hitzak maiuskulaz jartzen baditugu. |
| $current_country | `\WP_Ultimo\Country\Country` | Uneko klasearen instantzia. |

### Noiztik {#since}

- 2.0.11
### Iturburua {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) fitxategian definitua, 250. lerroan


## Itzulera {#returns}
Aldatutako banaketaren izena.
