---
id: wu_minimum_password_length
title: فلټر - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# فلټر: wu_minimum_password_length {#filter-wuminimumpasswordlength}

د پاسورډ لږ تر لږه اوږدوالی فلټر کړئ.

یوازې هغه مهال پلي کېږي چې wu_enforce_password_rules true وي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $min_length | `int` | د پاسورډ لږ تر لږه اوږدوالی. Default 12 (له Defender Pro سره سمون لري). |
| $defender_active | `bool` | ایا Defender Pro Strong Password فعال دی. |

### له نسخې راهیسې {#since}

- 2.4.0
### سرچینه {#source}

په [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) کې په 543 کرښه تعریف شوی.
