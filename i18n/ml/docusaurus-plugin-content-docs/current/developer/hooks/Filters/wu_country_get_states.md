---
id: wu_country_get_states
title: ഫിൽട്ടർ - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

ഈ രാജ്യത്തിൻ്റെ സംസ്ഥാനങ്ങളുടെ ലിസ്റ്റ് നൽകുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | XX => പേര് എന്ന ഫോർമാറ്റിലുള്ള സംസ്ഥാനങ്ങളുടെ ലിസ്റ്റ്. |
| $country_code | `string` | രാജ്യത്തിൻ്റെ രണ്ട് അക്ഷര ഇസോ കോഡ്. |
| $current_country | `\WP_Ultimo\Country\Country` | നിലവിലെ ക്ലാസിൻ്റെ ഇൻസ്റ്റൻസ്. |

### മുതൽ {#since}

- 2.0.11
### സ്രോതസ്സ് {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) എന്ന ഫയലിലെ 86-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## നൽകുന്നത് {#returns}
ഫിൽട്ടർ ചെയ്ത സംസ്ഥാനങ്ങളുടെ ലിസ്റ്റ്.
