---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

ഫ്രണ്ട്-എൻഡ് സൈൻഅപ്പുകൾക്കായി ലഭ്യമായ ഭാഷകളുടെ ലിസ്റ്റ് ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

ഈ hook-ലേക്ക് ഒരു empty array കൈമാറിയാൽ, സൈൻഅപ്പ് ഫോമിലെ സെറ്റിംഗ്സ് ഔട്ട്പുട്ട് പ്രവർത്തനരഹിതമാവുകയും, സൈറ്റ് സൃഷ്ടിക്കുമ്പോൾ ഡിഫോൾട്ട് ഭാഷ ഉപയോഗിക്കുകയും ചെയ്യും. ഇതിനകം ഇൻസ്റ്റാൾ ചെയ്യാത്ത ഭാഷകൾ ഒഴിവാക്കപ്പെടും.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | ലഭ്യമായ ഭാഷകൾ. |

### Since {#since}

- 4.4.0
### Source {#source}

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) എന്ന ഫയലിലെ 117-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
