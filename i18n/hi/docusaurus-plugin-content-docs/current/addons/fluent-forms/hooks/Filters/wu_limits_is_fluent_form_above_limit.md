---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

यह जांचता है कि क्या किसी दिए गए फॉर्म प्रकार को इस प्लान पर अनुमति है। यह plugin डेवलपर्स को return value को filter करने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| Name | Type | विवरण |
|------|------|-------------|
| $value | `bool` | यदि फॉर्म प्रकार सीमा से अधिक है या नहीं। |
| $form_type | `string` | जिस फॉर्म प्रकार की जांच की जा रही है। |
| $form_count | `int` | वर्तमान फॉर्म की संख्या। |
| $quota | `int` | अनुमत कोटा। |

### कब से {#since}

- 1.0.0
### स्रोत {#source}

- [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) में लाइन 56 पर परिभाषित।
- [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) में लाइन 89 पर परिभाषित।
