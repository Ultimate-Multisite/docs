---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

વધારાના પાસવર્ડ નિયમો લાગુ કરવા કે નહીં તે ફિલ્ટર કરે છે.

જ્યારે આ true હોય, ત્યારે તે ન્યૂનતમ લંબાઈ અને અક્ષરની જરૂરિયાતો લાગુ કરે છે. આ આપમેળે "Super Strong" સેટિંગ માટે અથવા જ્યારે Defender Pro નું Strong Password ફીચર સક્રિય હોય ત્યારે સક્ષમ થઈ જાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | શું વધારાના નિયમો લાગુ કરવા છે. |
| $strength_setting | `string` | એડમિન સેટિંગનું મૂલ્ય. |
| $defender_active | `bool` | શું Defender Pro Strong Password સક્રિય છે. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
