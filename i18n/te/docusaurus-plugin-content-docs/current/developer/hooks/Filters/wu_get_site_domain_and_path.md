---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

డొమైన్/పాత్ జతలను (domain/path pairs) మార్చడానికి డెవలపర్‌లకు ఇది అనుమతిస్తుంది.

ఇది స్టేజింగ్ సొల్యూషన్ (staging solution) అమలు చేయడం, వేరే సర్వర్లు వాడటం వంటి అనేక విషయాలకు ఉపయోగపడుతుంది.

## పారామీటర్లు (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | డొమైన్ మరియు పాత్ కీలను కలిగి ఉన్న ప్రస్తుత ఆబ్జెక్ట్. |
| $path_or_subdomain | `string` | ఫంక్షన్‌కు పంపబడిన అసలు పాత్/సబ్-డొమైన్. |

### ఎప్పటి నుండి (Since)

- 2.0.0
### మూలం (Source)

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) లోని 235వ లైన్‌లో నిర్వచించబడింది.


## తిరిగి ఇచ్చేది (Returns)
డొమైన్ మరియు పాత్ కీలను కలిగి ఉన్న ఒక ఆబ్జెక్ట్‌ను తిరిగి ఇస్తుంది.
