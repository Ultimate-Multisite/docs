---
id: wu_minimum_password_strength
title: ફિલ્ટર - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

જરૂરી ન્યૂનતમ પાસવર્ડ મજબૂતી (zxcvbn સ્કોર) ફિલ્ટર કરો.

મજબૂતીના સ્તરો: - 0, 1: ખૂબ નબળું - 2: નબળું - 3: મધ્યમ - 4: મજબૂત (ડિફોલ્ટ)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | જરૂરી ન્યૂનતમ મજબૂતીનું સ્તર. |
| $strength_setting | `string` | એડમિન સેટિંગનું મૂલ્ય (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
