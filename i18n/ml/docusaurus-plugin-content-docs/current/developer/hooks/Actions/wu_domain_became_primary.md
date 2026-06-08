---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

ഒരു ഡൊമെയ്ൻ ഒരു സൈറ്റിന്റെ പ്രാഥമിക ഡൊമെയ്നായി മാറുമ്പോൾ ഇത് ട്രിഗർ ചെയ്യപ്പെടും.

ഒരു ഡൊമെയ്‌ന്റെ `primary_domain` ഫ്ലാഗ് `true` ആക്കുമ്പോൾ, അതായത് ഒരു പുതിയ പ്രാഥമിക ഡൊമെയ്ൻ ഉണ്ടാക്കുമ്പോഴോ അല്ലെങ്കിൽ നിലവിലുള്ള ഒരു ഡൊമെയ്ൻ പ്രാഥമികമാക്കാൻ അപ്ഡേറ്റ് ചെയ്യുമ്പോഴോ ആണ് ഈ ആക്ഷൻ ട്രിഗർ ചെയ്യുന്നത്.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | പ്രാഥമികമാവുകയും ചെയ്ത ഡൊമെയ്ൻ. |
| $blog_id | `int` | ബാധിക്കപ്പെട്ട സൈറ്റിന്റെ ബ്ലോഗ് ID. |
| $was_new | `bool` | ഇത് പുതുതായി സൃഷ്ടിച്ച ഡൊമെയ്ൻ ആണോ എന്ന്. |

### Since

- 2.0.0
### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
