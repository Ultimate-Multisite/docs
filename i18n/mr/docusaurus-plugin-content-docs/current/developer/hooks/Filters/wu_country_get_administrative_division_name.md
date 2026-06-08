---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

देशाच्या प्रशासकीय उपविभागाचे (administrative sub-divisions) चांगले नाव परत करतो.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | उपविभागाचे नाव. सामान्यतः राज्य (state), प्रांत (province), प्रदेश (region) इत्यादी असते. |
| $country_code | `string` | देशासाठी दोन-अक्षरी ISO कोड. |
| $state_code | `string` | राज्यासाठी दोन-अक्षरी ISO कोड. |
| $ucwords | `bool` | जर आपल्याला शब्दांना कॅपिटल (uppercase) करायचे असेल. |
| $current_country | `\WP_Ultimo\Country\Country` | सध्याच्या क्लासचे उदाहरण (Instance). |

### Since

- 2.0.11
### Source

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) या फाईलमध्ये लाइन 250 वर परिभाषित केले आहे.

## Returns
सुधारित उपविभागाचे नाव.
