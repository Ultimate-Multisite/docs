---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

ఒక డొమైన్ ఒక సైట్‌కు ప్రధాన డొమైన్‌గా మారినప్పుడు ఇది ట్రిగ్గర్ అవుతుంది.

ఒక డొమైన్ యొక్క `primary_domain` ఫ్లాగ్‌ను `true` గా సెట్ చేసినప్పుడు ఈ యాక్షన్ ట్రిగ్గర్ అవుతుంది. ఇది కొత్త ప్రధాన డొమైన్‌ను సృష్టిస్తున్నప్పుడు లేదా ఇప్పటికే ఉన్న డొమైన్‌ను ప్రధానంగా మార్చేటప్పుడు జరగవచ్చు.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ప్రధానమైన డొమైన్‌గా మారిన డొమైన్. |
| $blog_id | `int` | ప్రభావితమైన సైట్ యొక్క బ్లాగ్ ID. |
| $was_new | `bool` | ఇది కొత్తగా సృష్టించబడిన డొమైన్ అవునో కాదో. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) లోని 560వ లైన్‌లో నిర్వచించబడింది.
