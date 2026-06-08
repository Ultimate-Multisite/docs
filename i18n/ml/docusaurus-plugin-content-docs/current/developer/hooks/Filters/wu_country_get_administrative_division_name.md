---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

രാജ്യത്തിന്റെ ഭരണപരമായ ഉപവിഭാഗങ്ങളുടെ മനോഹരമായ പേര് ഇത് തിരികെ നൽകുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | വിഭാഗത്തിന്റെ പേര്. സാധാരണയായി സംസ്ഥാനം, പ്രവിശ്യ, മേഖല എന്നിങ്ങനെയുള്ള എന്തെങ്കിലും ആയിരിക്കും ഇത്. |
| $country_code | `string` | രാജ്യത്തിനുള്ള രണ്ട് അക്ഷരങ്ങളുള്ള ISO കോഡ്. |
| $state_code | `string` | സംസ്ഥാനത്തിനുള്ള രണ്ട് അക്ഷരങ്ങളുള്ള ISO കോഡ്. |
| $ucwords | `bool` | വാക്കുകൾ വലിയ അക്ഷരങ്ങളാക്കണോ (uppercase). |
| $current_country | `\WP_Ultimo\Country\Country` | നിലവിലെ ക്ലാസിന്റെ ഒരു ഉദാഹരണം (Instance). |

### Since

- 2.0.11
### Source

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) എന്ന ഫയലിലെ 250-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns
മാറ്റിയ ശേഷമുള്ള വിഭാഗത്തിന്റെ പേര്.
