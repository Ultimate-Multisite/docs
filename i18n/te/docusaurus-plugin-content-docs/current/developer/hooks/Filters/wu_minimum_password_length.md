---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

కనీస పాస్‌వర్డ్ పొడవును ఫిల్టర్ చేస్తుంది.

`wu_enforce_password_rules` అనేది `true` అయినప్పుడు మాత్రమే ఇది అమలు చేయబడుతుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | కనీస పాస్‌వర్డ్ పొడవు. డిఫాల్ట్‌గా 12 (Defender Pro తో సరిపోతుంది). |
| $defender_active | `bool` | Defender Pro Strong Password యాక్టివ్‌గా ఉందో లేదో. |

### Since

- 2.4.0
### Source

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) లోని 543వ లైన్‌లో నిర్వచించబడింది.
