---
id: wu_should_create_domain_record_for_site
title: ഫിൽട്ടർ - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# ഫിൽറ്റർ: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

പുതുതായി സൃഷ്ടിച്ച സൈറ്റിനായി Ultimate Multisite ഒരു ഡൊമെയ്ൻ റെക്കോർഡ് സൃഷ്ടിക്കണമോ എന്ന് ഫിൽറ്റർ ചെയ്യുന്നു.

പങ്കിട്ട ചെക്ക്ഔട്ട്-ഫോം അടിസ്ഥാന ഡൊമെയ്ൻ, ആന്തരിക ഹോസ്റ്റ്, അല്ലെങ്കിൽ മറ്റൊരു സംയോജനം വേറിട്ട് കൈകാര്യം ചെയ്യുന്ന ഡൊമെയ്ൻ ഉപയോഗിക്കുന്ന സൈറ്റുകൾക്കായി സ്വയമേവയുള്ള ഡൊമെയ്ൻ-റെക്കോർഡ് സൃഷ്ടിക്കൽ തടയാനോ മാറ്റിവയ്ക്കാനോ ഈ ഫിൽറ്റർ ഉപയോഗിക്കുക.

## പരാമീറ്ററുകൾ {#parameters}

| പേര് | തരം | വിവരണം |
|------|------|-------------|
| $create | `bool` | ഡൊമെയ്ൻ റെക്കോർഡ് സൃഷ്ടിക്കണമോ എന്ന്. |
| $site | `WP_Site` | പുതുതായി സൃഷ്ടിച്ച സൈറ്റ് ഒബ്ജക്റ്റ്. |

### മുതൽ {#since}

- 2.13.0

### ഉറവിടം {#source}

`inc/functions/domain.php`-ൽ നിർവചിച്ചിരിക്കുന്നു.


## തിരികെ നൽകുന്നത് {#returns}

ഡൊമെയ്ൻ റെക്കോർഡ് സൃഷ്ടിക്കണമോ എന്ന് സൂചിപ്പിക്കുന്ന Boolean.
