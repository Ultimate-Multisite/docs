---
id: wu_country_get_cities
title: فلٽر - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

ڪنهن ملڪ ۾ هڪ صوبي لاءِ شهرن جي فهرست واپس ڪري ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $cities | `array` | صوبي جي شهرن جي نالن جي فهرست. ڪي به ڪنجيون موجود ناهن. |
| $country_code | `string` | ملڪ لاءِ ٻه اکرن وارو ISO ڪوڊ. |
| $state_code | `string` | صوبي لاءِ ٻه اکرن وارو ISO ڪوڊ. |
| $current_country | `\WP_Ultimo\Country\Country` | موجوده ڪلاس جو Instance. |

### کان وٺي {#since}

- 2.0.11
### ذريعو {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ۾ لائين 146 تي بيان ٿيل


## واپسيون {#returns}
صوبن جي فلٽر ٿيل فهرست.
