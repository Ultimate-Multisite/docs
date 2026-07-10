---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

అభివృద్ధి చేసేవారు (developers) 'unset current user' కోడ్‌ను దాటవేయడానికి (bypass) ఈ ఫిల్టర్‌ను ఉపయోగించవచ్చు.

ఈ ఫిల్టర్ `null` కాకుండా వేరే ఏదైనా విలువను తిరిగి ఇస్తే, లాగిన్ అయిన ప్రస్తుత వినియోగదారుని తొలగించే ప్రక్రియ (unset) ఆగిపోతుంది. ఇది కొన్ని సందర్భాలలో చాలా ఉపయోగకరంగా ఉంటుంది, ఉదాహరణకు, సబ్-సైట్‌లను అడ్మిన్ ప్యానెల్‌లుగా ఉపయోగిస్తున్నప్పుడు.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | ముందుకు వెళ్లడానికి `null`, దాటవేయడానికి (bypass) వేరే ఏదైనా విలువ. |
| $current_user | `false\|\WP_User` | ప్రస్తుత వినియోగదారు ఆబ్జెక్ట్. |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) లోని 221వ లైన్‌లో నిర్వచించబడింది.

## Returns {#returns}
