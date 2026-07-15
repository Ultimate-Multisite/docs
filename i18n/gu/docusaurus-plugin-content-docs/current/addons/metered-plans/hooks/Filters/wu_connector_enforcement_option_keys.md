---
id: wu_connector_enforcement_option_keys
title: ફિલ્ટર - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

મુખ્ય સાઇટમાંથી લાગુ (enforced) થતી AI પ્રદાતા (provider) option keys ની યાદીને ફિલ્ટર કરવા માટે આનો ઉપયોગ થાય છે.

કસ્ટમ અથવા થર્ડ-પાર્ટી AI પ્રદાતા plugins માટે option keys ઉમેરો, જેથી સબસાઇટ્સ પર પણ તેમની સેટિંગ્સ મુખ્ય સાઇટમાંથી વારસામાં (inherited) મળી શકે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | એનાલિસિસ માટે લાગુ કરવાના option key ના નામ (જેમાં પહેલેથી જ ડાયનેમિકલી ડિસ્કવર કરેલા connector keys અને EXTRA_PROVIDER_OPTIONS શામેલ છે). |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
