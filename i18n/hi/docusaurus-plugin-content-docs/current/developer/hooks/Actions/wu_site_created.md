---
id: wu_site_created
title: क्रिया - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created

जब कोई साइट पहली बार बनाई जाती है, तो यह ट्रिगर होता है।

यदि इसे टेम्पलेट से डुप्लिकेट किया जाता है, तो यह ट्रिगर नहीं होता है।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | वह ऑब्जेक्ट डेटा जिसे स्टोर किया जाएगा। |
| $site | `\Site` | ऑब्जेक्ट का इंस्टेंस। |

### कब से उपलब्ध

- 2.0.0
### स्रोत

[`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) में लाइन 1652 पर परिभाषित है
