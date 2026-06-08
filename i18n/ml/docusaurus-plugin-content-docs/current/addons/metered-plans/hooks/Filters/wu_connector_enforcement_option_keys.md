---
id: wu_connector_enforcement_option_keys
title: ഫിൽട്ടർ - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

പ്രധാന സൈറ്റിൽ നിന്ന്บังคับ ചെയ്യുന്ന AI പ്രൊവൈഡർ ഓപ്ഷൻ കീകളുടെ ലിസ്റ്റ് ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

കസ്റ്റം അല്ലെങ്കിൽ തേർഡ്-പാർട്ടി AI പ്രൊവൈഡർ പ്ലഗിനുകൾക്കുള്ള ഓപ്ഷൻ കീകൾ കൂടി ചേർക്കാൻ ഇത് സഹായിക്കുന്നു. അതുവഴി സബ്സൈറ്റുകളിലും അവയുടെ സെറ്റിംഗുകൾ പ്രധാന സൈറ്റിൽ നിന്ന് സ്വമേവ ലഭിക്കുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` |บังคับ ചെയ്യേണ്ട ഓപ്ഷൻ കീകളുടെ പേരുകൾ (ഇതിൽ ഇതിനകം ഡൈനാമിക്കായി കണ്ടെത്തിയ കണക്റ്റർ കീകളും EXTRA_PROVIDER_OPTIONS ഉം ഉൾപ്പെടുന്നു). |

### Since

- 1.2.0
### Source

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) എന്ന ഫയലിലെ 206-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
