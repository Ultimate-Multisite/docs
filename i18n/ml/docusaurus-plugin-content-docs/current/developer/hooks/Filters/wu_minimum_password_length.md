---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

കുറഞ്ഞ പാസ്‌വേഡ് നീളം ഫിൽട്ടർ ചെയ്യാൻ ഉപയോഗിക്കുന്നു.

`wu_enforce_password_rules` എന്നത് `true` ആകുമ്പോൾ മാത്രമേ ഇത് നടപ്പിലാക്കുകയുള്ളൂ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | കുറഞ്ഞ പാസ്‌വേഡ് നീളം. ഡിഫോൾട്ട് 12 (Defender Pro-യുമായി യോജിക്കുന്നു). |
| $defender_active | `bool` | Defender Pro Strong Password പ്രവർത്തിക്കുന്നുണ്ടോ എന്നത്. |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) എന്ന ഫയലിലെ 543-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
