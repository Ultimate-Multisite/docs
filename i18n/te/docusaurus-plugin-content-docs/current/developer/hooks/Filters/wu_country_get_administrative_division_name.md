---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

దేశ పరిపాలనా ఉప-విభాగాలకు మంచి పేరును తిరిగి ఇస్తుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | విభాగం పేరు. సాధారణంగా రాష్ట్రం (state), ప్రావిన్స్ (province), ప్రాంతం (region) వంటివి. |
| $country_code | `string` | దేశం కోసం రెండు అక్షరాల ISO కోడ్. |
| $state_code | `string` | రాష్ట్రం కోసం రెండు అక్షరాల ISO కోడ్. |
| $ucwords | `bool` | మనం అక్షరాలను పెద్ద అక్షరాలలోకి (uppercase) మార్చాలనుకుంటే. |
| $current_country | `\WP_Ultimo\Country\Country` | ప్రస్తుత క్లాస్ యొక్క ఉదాహరణ (Instance). |

### Since

- 2.0.11
### Source

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) లోని 250వ లైన్‌లో నిర్వచించబడింది.

## Returns
మార్పు చేయబడిన విభాగం పేరు.
