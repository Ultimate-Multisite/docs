---
id: wu_enforce_password_rules
title: फ़िल्टर - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

यह फ़िल्टर निर्धारित करता है कि क्या अतिरिक्त पासवर्ड नियमों को लागू किया जाना चाहिए।

जब यह `true` होता है, तो यह न्यूनतम लंबाई और वर्ण आवश्यकताओं को लागू करता है। यह "Super Strong" सेटिंग के लिए या जब Defender Pro की Strong Password सुविधा सक्रिय होती है, तो स्वचालित रूप से सक्षम हो जाता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | क्या अतिरिक्त नियम लागू करने हैं। |
| $strength_setting | `string` | एडमिन सेटिंग का मान। |
| $defender_active | `bool` | क्या Defender Pro Strong Password सक्रिय है। |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) में लाइन 531 पर परिभाषित है
