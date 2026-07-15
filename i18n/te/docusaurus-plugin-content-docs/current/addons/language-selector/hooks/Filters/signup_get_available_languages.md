---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

ఫ్రంట్-ఎండ్ సైట్ సైన్అప్‌ల కోసం అందుబాటులో ఉన్న భాషల జాబితాను ఇది ఫిల్టర్ చేస్తుంది.

ఈ హుక్‌కు ఖాళీ శ్రేణి (empty array) పంపడం వలన, సైన్అప్ ఫారమ్‌లో సెట్టింగ్ అవుట్‌పుట్ డిసేబుల్ అవుతుంది, మరియు సైట్‌ను సృష్టించేటప్పుడు డిఫాల్ట్ భాష ఉపయోగించబడుతుంది. ఇప్పటికే ఇన్‌స్టాల్ చేయని భాషలు తొలగించబడతాయి (stripped).

## పారామీటర్లు {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | అందుబాటులో ఉన్న భాషలు. |

### ఎప్పటి నుండి {#since}

- 4.4.0
### మూలం {#source}

[ultimate-multisite-language-selector.php](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) లోని 117వ లైన్‌లో నిర్వచించబడింది.
