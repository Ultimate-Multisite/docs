---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

ചില പ്ലഗിനുകൾ മാപ്പിംഗ് സജീവമാകുന്നതിന് മുമ്പുള്ള യൂആർഎല്ലുകൾ സേവ് ചെയ്യുകയോ അല്ലെങ്കിൽ മുകളിൽ പറഞ്ഞ ഫിൽട്ടറുകളിൽ ഉൾപ്പെടാത്ത രീതിയിൽ യൂആർഎല്ലുകൾ നിർമ്മിക്കുകയോ ചെയ്യാം.

അത്തരം സാഹചര്യങ്ങളിൽ, നമുക്ക് അധിക ഫിൽട്ടറുകൾ ചേർക്കേണ്ടതുണ്ട്. കൈമാറ്റം ചെയ്യപ്പെടുന്ന രണ്ടാമത്തെ പാരാമീറ്റർ `mangle_url` കോളബാക്കാണ്. ഈ ഫിൽട്ടർ നേരിട്ട് ഉപയോഗിക്കരുതെന്ന് ഞങ്ങൾ ശുപാർശ ചെയ്യുന്നു. പകരം, `Domain_Mapping::apply_mapping_to_url` എന്ന രീതി ഉപയോഗിക്കുക.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | മാംഗിൾ കോളബാക്ക്. |
| $domain_mapper | `self` | ഈ ഒബ്ജക്റ്റ്. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
