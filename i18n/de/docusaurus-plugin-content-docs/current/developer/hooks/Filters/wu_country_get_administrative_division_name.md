---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Gibt einen schönen Namen der administrativen Unterteilungen des Landes zurück.

## Parameters {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $name | `string` | Der Name der Unterteilung. In der Regel etwas wie state, province, region, etc. |
| $country_code | `string` | Zwei-Buchstaben-ISO-Code für das Land. |
| $state_code | `string` | Zwei-Buchstaben-ISO-Code für den Staat. |
| $ucwords | `bool` | wenn wir die Wörter großschreiben. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanz der aktuellen Klasse. |

### Since {#since}

- 2.0.11

### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250

## Returns {#returns}

Der modifizierte Unterteilungsname.
