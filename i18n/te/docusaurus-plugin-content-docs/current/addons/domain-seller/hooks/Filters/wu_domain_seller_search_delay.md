---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

డొమైన్ సెర్చ్ యొక్క డిబౌన్స్ ఆలస్యాన్ని (debounce delay) మిల్లీసెకన్లలో ఫిల్టర్ చేస్తుంది.

నెమ్మదిగా కనెక్షన్ ఉన్నప్పుడు API కాల్స్ తగ్గించడానికి ఈ విలువను పెంచండి.

## పారామీటర్లు {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | మిల్లీసెకన్లలో డిబౌన్స్ ఆలస్యం. డిఫాల్ట్ విలువ 500. |

### ఎప్పటి నుండి {#since}

- 2.1.0
### మూలం {#source}

ఇది [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) లోని 854వ లైన్‌లో నిర్వచించబడింది.
