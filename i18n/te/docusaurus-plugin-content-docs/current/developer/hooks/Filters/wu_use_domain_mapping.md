---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

మ్యాపింగ్ ఉపయోగించాలా వద్దా అని నిర్ణయించడం

సాధారణంగా, మీరు కేవలం యాక్టివ్ మ్యాపింగ్‌లను మాత్రమే ఉపయోగించడానికి అనుమతించాలని కోరుకుంటారు. అయితే, మీరు మరింత అధునాతన లాజిక్‌ను ఉపయోగించాలనుకుంటే, లేదా నాన్-యాక్టివ్ డొమైన్‌లను కూడా మ్యాప్ చేయడానికి అనుమతించాలనుకుంటే, ఇక్కడ ఫిల్టర్ చేయండి.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | మ్యాపింగ్‌ను యాక్టివ్‌గా పరిగణించాలా? |
| $mapping | `\Domain` | మనం పరిశీలిస్తున్న మ్యాపింగ్ |
| $domain | `string` | |

### Source

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) లోని 391వ లైన్‌లో నిర్వచించబడింది
