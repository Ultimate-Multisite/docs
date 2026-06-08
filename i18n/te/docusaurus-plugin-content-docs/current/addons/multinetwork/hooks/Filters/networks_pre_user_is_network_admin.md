---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

వినియోగదారుడు అడ్మినిస్ట్రేటర్‌గా ఉన్న నెట్‌వర్క్‌లను ఫిల్టర్ చేస్తుంది, తద్వారా ప్రాసెస్‌ను త్వరగా పూర్తి చేయడానికి (short-circuit).

## పారామీటర్లు

| పేరు | రకం | వివరణ |
|------|------|-------------|
| $ | `array\|bool\|null` | నెట్‌వర్క్ IDల జాబితా లేదా false. null కాకుండా ఏ విలువ అయినా ప్రాసెస్‌ను త్వరగా పూర్తి చేస్తుంది. |
| $ | `int` | నెట్‌వర్క్‌లను తిరిగి ఇవ్వవలసిన వినియోగదారు ID. |

### ఎప్పటి నుండి

- 2.0.0
### మూలం

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) లోని 688వ లైన్‌లో నిర్వచించబడింది.
