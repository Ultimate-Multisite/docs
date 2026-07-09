---
id: wu_get_site_domain_and_path
title: ഫിൽട്ടർ - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

ഡൊമെയ്ൻ/പാത്ത് ജോഡികൾ മാറ്റാൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

സ്റ്റേജിംഗ് സൊല്യൂഷൻ നടപ്പിലാക്കുക, വ്യത്യസ്ത സെർവറുകൾ ഉപയോഗിക്കുക തുടങ്ങിയ നിരവധി കാര്യങ്ങൾക്ക് ഇത് ഉപകാരപ്രദമാകും.

## പാരാമീറ്ററുകൾ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | ഡൊമെയ്ൻ, പാത്ത് കീകൾ ഉൾക്കൊള്ളുന്ന നിലവിലെ ഒബ്ജക്റ്റ്. |
| $path_or_subdomain | `string` | ഫംഗ്ഷനിലേക്ക് നൽകിയ യഥാർത്ഥ പാത്ത്/സബ്ഡൊമെയ്ൻ. |

### മുതൽ (Since) {#since}

- 2.0.0
### സ്രോതസ്സ് (Source) {#source}

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## റിട്ടേൺസ് (Returns) {#returns}
ഒരു ഡൊമെയ്ൻ, പാത്ത് കീകൾ ഉൾക്കൊള്ളുന്ന ഒബ്ജക്റ്റ്.
