---
id: wu_admin_notices
title: फ़िल्टर - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Ultimate Multisite द्वारा जोड़े गए एडमिन नोटिस को फ़िल्टर करने के लिए डेवलपर्स को अनुमति देता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | उस विशेष पैनल के लिए नोटिस की सूची। |
| $all_notices | `array` | नोटिस की सूची, जो पैनल के अनुसार अलग किए गए हैं। |
| $panel | `string` | जिस पैनल के नोटिस प्राप्त करने हैं। |
| $filter | `string` | यदि हटाए जा सकने वाले नोटिस को फ़िल्टर कर दिया गया है। |
| $dismissed_messages | `array` | हटाए गए नोटिस की कुंजी (keys) की सूची। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) में लाइन 121 पर परिभाषित है।


## Returns {#returns}
