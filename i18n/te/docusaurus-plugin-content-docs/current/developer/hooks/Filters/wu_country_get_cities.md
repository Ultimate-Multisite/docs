---
id: wu_country_get_cities
title: ఫిల్టర్ - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

ఒక దేశంలోని ఒక రాష్ట్రానికి సంబంధించిన నగరాల జాబితాను తిరిగి ఇస్తుంది.

## పారామీటర్లు

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | రాష్ట్రంలోని నగరాల పేర్ల జాబితా. ఇందులో ఏ కీలు (keys) ఉండవు. |
| $country_code | `string` | దేశానికి సంబంధించిన రెండు అక్షరాల ISO కోడ్. |
| $state_code | `string` | రాష్ట్రానికి సంబంధించిన రెండు అక్షరాల ISO కోడ్. |
| $current_country | `\WP_Ultimo\Country\Country` | ప్రస్తుత క్లాస్ యొక్క ఉదాహరణ (Instance). |

### Since

- 2.0.11
### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146


## Returns
ఫిల్టర్ చేయబడిన రాష్ట్రాల జాబితా.
