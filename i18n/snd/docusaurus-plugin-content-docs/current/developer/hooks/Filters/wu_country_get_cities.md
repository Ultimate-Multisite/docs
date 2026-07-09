---
id: wu_country_get_cities
title: فلٽر - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

ملڪ ۾ هڪ رياست لاءِ شهرن جي فهرست واپس ڪري ٿو.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $cities | `array` | رياست جي شهرن جي نالن جي فهرست. ڪابه ڪنجي موجود نه آهي. |
| $country_code | `string` | ملڪ لاءِ ٻه-اکري ISO ڪوڊ. |
| $state_code | `string` | رياست لاءِ ٻه-اکري ISO ڪوڊ. |
| $current_country | `\WP_Ultimo\Country\Country` | موجوده ڪلاس جو Instance. |

### کان وٺي {#since}

- 2.0.11
### ذريعو {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ۾ لائين 146 تي بيان ٿيل


## واپس ڪري ٿو {#returns}
رياستن جي فلٽر ڪيل فهرست.
