---
id: wu_minimum_password_length
title: ફિલ્ટર - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

પાસવર્ડની ન્યૂનતમ લંબાઈને ફિલ્ટર કરે છે.

આ ફક્ત ત્યારે જ લાગુ થાય છે જ્યારે `wu_enforce_password_rules` true હોય.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | પાસવર્ડની ન્યૂનતમ લંબાઈ. ડિફોલ્ટ 12 છે (Defender Pro સાથે મેળ ખાય છે). |
| $defender_active | `bool` | શું Defender Pro Strong Password સક્રિય છે કે નહીં. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
