---
id: wu_country_get_cities
title: فلټر - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# فلټر: wu_country_get_cities

په یوه هېواد کې د یوه ایالت لپاره د ښارونو لړلیک راګرځوي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $cities | `array` | د ایالت د ښار نومونو لړلیک. هېڅ keys نشته. |
| $country_code | `string` | د هېواد لپاره دوه توري ISO کوډ. |
| $state_code | `string` | د ایالت لپاره دوه توري ISO کوډ. |
| $current_country | `\WP_Ultimo\Country\Country` | د اوسني کلاس نمونه. |

### له {#since}

- 2.0.11
### سرچینه {#source}

په [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) کې په ۱۴۶ کرښه تعریف شوی


## راګرځوي {#returns}
د ایالتونو فلټر شوی لړلیک.
