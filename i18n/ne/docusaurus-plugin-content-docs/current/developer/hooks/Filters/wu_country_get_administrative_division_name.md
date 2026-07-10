---
id: wu_country_get_administrative_division_name
title: फिल्टर - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

देशका प्रशासनिक उप-विभाजनहरूको राम्रो नाम फर्काउँछ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | विभाजनको नाम। सामान्यतया राज्य, प्रदेश, क्षेत्र आदि जस्तो केही। |
| $country_code | `string` | देशका लागि दुई-अक्षरको ISO code। |
| $state_code | `string` | राज्यका लागि दुई-अक्षरको ISO code। |
| $ucwords | `bool` | यदि हामी शब्दहरूलाई uppercase गर्छौं। |
| $current_country | `\WP_Ultimo\Country\Country` | हालको class को instance। |

### Since {#since}

- २.०.११
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) मा पङ्क्ति २५० मा परिभाषित


## Returns {#returns}
परिमार्जित विभाजन नाम।
