---
id: wu_country_get_administrative_division_name
title: فلٽر - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# فلٽر: wu_country_get_administrative_division_name

ملڪ جي انتظامي ذيلي ورهاستن جو سٺو نالو موٽائي ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $name | `string` | ورهاست جو نالو. عام طور تي رياست، صوبو، علائقو وغيره جهڙو ڪجهه. |
| $country_code | `string` | ملڪ لاءِ ٻن اکرن وارو ISO ڪوڊ. |
| $state_code | `string` | رياست لاءِ ٻن اکرن وارو ISO ڪوڊ. |
| $ucwords | `bool` | جيڪڏهن اسين لفظن کي وڏن اکرن ۾ ڪريون. |
| $current_country | `\WP_Ultimo\Country\Country` | موجوده ڪلاس جو نمونو. |

### کان وٺي {#since}

- 2.0.11
### ذريعو {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ۾ لائن 250 تي بيان ٿيل


## واپسي {#returns}
تبديل ڪيل ورهاست جو نالو.
