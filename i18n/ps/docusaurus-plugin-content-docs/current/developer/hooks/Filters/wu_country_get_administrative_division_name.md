---
id: wu_country_get_administrative_division_name
title: فلټر - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

د هېواد د اداري فرعي وېشونو ښکلی نوم راګرځوي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $name | `string` | د وېش نوم. عموماً لکه ایالت، ولایت، سیمه، او داسې نور. |
| $country_code | `string` | د هېواد لپاره دوه-توري ISO کوډ. |
| $state_code | `string` | د ایالت لپاره دوه-توري ISO کوډ. |
| $ucwords | `bool` | که موږ کلمې په لویو تورو کړو. |
| $current_country | `\WP_Ultimo\Country\Country` | د اوسنۍ کلاس بېلګه. |

### له نسخې راهیسې {#since}

- 2.0.11
### سرچینه {#source}

په [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) کې په 250 کرښه تعریف شوی


## راګرځونې {#returns}
بدل شوی د وېش نوم.
