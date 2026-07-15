---
id: wu_enforce_password_rules
title: फिल्टर - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# फिल्टर: wu_enforce_password_rules

थप पासवर्ड नियमहरू लागू गर्ने कि नगर्ने फिल्टर गर्छ।

true हुँदा, न्यूनतम लम्बाइ र क्यारेक्टर आवश्यकताहरू लागू गर्छ। "Super Strong" सेटिङका लागि वा Defender Pro को Strong Password सुविधा सक्रिय हुँदा स्वचालित रूपमा सक्षम हुन्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $enforce_rules | `bool` | थप नियमहरू लागू गर्ने कि नगर्ने। |
| $strength_setting | `string` | admin सेटिङ मान। |
| $defender_active | `bool` | Defender Pro Strong Password सक्रिय छ कि छैन। |

### देखि {#since}

- 2.4.0
### स्रोत {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) मा लाइन 531 मा परिभाषित गरिएको छ।
