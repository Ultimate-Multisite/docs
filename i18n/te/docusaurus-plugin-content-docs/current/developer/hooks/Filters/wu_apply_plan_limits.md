---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

ప్లగిన్ డెవలపర్‌లు పరిమితులను (limitations) ఆపడానికి (short-circuit) ఉపయోగించవచ్చు.

ఏదైనా పరిమితులు ప్రారంభం కావడానికి ముందు, ఏదైనా యాదృచ్ఛిక కోడ్‌ను (arbitrary code) అమలు చేయడానికి మీరు ఈ ఫిల్టర్‌ను ఉపయోగించవచ్చు. మీరు ఫిల్టర్‌లో ఏదైనా ట్రూథీ విలువను (truthy value) తిరిగి ఇస్తే, ప్రక్రియ ముందుకు సాగుతుంది. ఇది ఏదైనా ఫాల్సీ విలువను (falsy value) తిరిగి ఇస్తే, కోడ్ ఆగిపోతుంది మరియు కింద ఉన్న ఏ హుక్‌లు (hooks) కూడా అమలు కావు.

### Since {#since}

- 1.7.0
### Source {#source}

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) లోని 52వ లైన్‌లో నిర్వచించబడింది
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) లోని 98వ లైన్‌లో నిర్వచించబడింది
## Returns {#returns}
