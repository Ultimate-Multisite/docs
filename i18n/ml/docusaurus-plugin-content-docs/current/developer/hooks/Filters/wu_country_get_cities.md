---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

ഒരു രാജ്യത്തിലെ ഒരു സംസ്ഥാനത്തിനുള്ള നഗരങ്ങളുടെ ലിസ്റ്റ് ഇത് നൽകുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | വിവരണം |
|------|------|-------------|
| $cities | `array` | സംസ്ഥാനത്തിലെ നഗരങ്ങളുടെ പേരുകളുടെ ലിസ്റ്റ്. ഇതിൽ কোনো കീകളോ (keys) ഉണ്ടാകില്ല. |
| $country_code | `string` | രാജ്യത്തിനുള്ള രണ്ട് അക്ഷരങ്ങളുള്ള ISO കോഡ്. |
| $state_code | `string` | സംസ്ഥാനത്തിനുള്ള രണ്ട് അക്ഷരങ്ങളുള്ള ISO കോഡ്. |
| $current_country | `\WP_Ultimo\Country\Country` | നിലവിലെ ക്ലാസിന്റെ ഇൻസ്റ്റൻസ്. |

### ലഭ്യമായത് {#since}

- 2.0.11
### സ്രോതസ്സ് {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) എന്ന ഫയലിലെ 146-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## നൽകുന്നത് {#returns}
ഫിൽട്ടർ ചെയ്ത സംസ്ഥാനങ്ങളുടെ ലിസ്റ്റ്.
