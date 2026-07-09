---
id: wu_country_get_administrative_division_name
title: פילטער - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# פֿילטער: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

גיט צוריק דעם שיינעם נאָמען פֿון די לאַנד־אַדמיניסטראַטיווע אונטער־טיילונגען.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $name | `string` | דער נאָמען פֿון דער אונטערטיילונג. געוויינטלעך עפּעס ווי שטאַט, פּראָווינץ, געגנט, אאַז״ו. |
| $country_code | `string` | צוויי־אותיותדיקער ISO קאָד פֿאַרן לאַנד. |
| $state_code | `string` | צוויי־אותיותדיקער ISO קאָד פֿאַרן שטאַט. |
| $ucwords | `bool` | צי מען מאַכט די ווערטער מיט גרויסע אותיות. |
| $current_country | `\WP_Ultimo\Country\Country` | אינסטאַנץ פֿון דער איצטיקער קלאַס. |

### זינט {#since}

- 2.0.11
### מקור {#source}

דעפֿינירט אין [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) אויף שורה 250


## גיט צוריק {#returns}
דער געענדערטער נאָמען פֿון דער אונטערטיילונג.
