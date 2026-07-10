---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

ഒരു മാപ്പിംഗ് ഉപയോഗിക്കണോ എന്ന് നിർണ്ണയിക്കുന്നു

സാധാരണയായി, സജീവമായ (active) മാപ്പിംഗുകൾ മാത്രമേ ഉപയോഗിക്കാൻ അനുവദിക്കണമെന്ന് നിങ്ങൾ ആഗ്രഹിക്കുകയുള്ളൂ. എന്നിരുന്നാലും, നിങ്ങൾക്ക് കൂടുതൽ സങ്കീർണ്ണമായ ലോജിക് ഉപയോഗിക്കണമെങ്കിൽ, അല്ലെങ്കിൽ സജീവമല്ലാത്ത 도മെയിനുകളെയും മാപ്പ് ചെയ്യാൻ അനുവദിക്കണമെങ്കിൽ, ഇവിടെ ലളിതമായി ഫിൽട്ടർ ചെയ്യുക.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | മാപ്പിംഗ് സജീവമായി കണക്കാക്കണോ? |
| $mapping | `\Domain` | നമ്മൾ പരിശോധിക്കുന്ന മാപ്പിംഗ് |
| $domain | `string` |  |

### Source {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) എന്ന ഫയലിലെ 391-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
