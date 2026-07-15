---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Vracia pekný názov administratívnych poddivízií krajiny.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Názov divízie. Zvyčajne niečo ako štát, provincia, región atď. |
| $country_code | `string` | Dvojpísmenový ISO kód krajiny. |
| $state_code | `string` | Dvojpísmenový ISO kód štátu. |
| $ucwords | `bool` | či slová píšeme s veľkým začiatočným písmenom. |
| $current_country | `\WP_Ultimo\Country\Country` | Inštancia aktuálnej triedy. |

### Od verzie {#since}

- 2.0.11
### Zdroj {#source}

Definované v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) na riadku 250


## Vráti {#returns}
Upravený názov divízie.
