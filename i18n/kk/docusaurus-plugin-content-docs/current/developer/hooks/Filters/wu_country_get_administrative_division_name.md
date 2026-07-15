---
id: wu_country_get_administrative_division_name
title: Сүзгі - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Сүзгі: wu_country_get_administrative_division_name

Елдің әкімшілік бөлімшелерінің әдемі атауын қайтарады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $name | `string` | Бөлімше атауы. Әдетте штат, провинция, аймақ және т.б. сияқты болады. |
| $country_code | `string` | Елге арналған екі әріпті ISO коды. |
| $state_code | `string` | Штатқа арналған екі әріпті ISO коды. |
| $ucwords | `bool` | сөздерді бас әріппен жазатынымыз. |
| $current_country | `\WP_Ultimo\Country\Country` | Ағымдағы кластың данасы. |

### Бастап {#since}

- 2.0.11
### Дереккөзі {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ішінде 250-жолда анықталған


## Қайтарады {#returns}
Өзгертілген бөлімше атауы.
