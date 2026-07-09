---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

पासवर्डचे अतिरिक्त नियम लागू करायचे की नाही, हे फिल्टर करते.

जेव्हा हे `true` असते, तेव्हा ते किमान लांबी (minimum length) आणि वर्ण (character) आवश्यकता लागू करते. हे आपोआप "Super Strong" सेटिंगसाठी किंवा जेव्हा Defender Pro चे Strong Password फीचर सक्रिय असते, तेव्हा सक्षम होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | अतिरिक्त नियम लागू करायचे की नाही. |
| $strength_setting | `string` | ॲडमिन सेटिंगचे मूल्य (value). |
| $defender_active | `bool` | Defender Pro Strong Password सक्रिय आहे की नाही. |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) या ठिकाणी, ५३१ व्या ओळीवर परिभाषित केले आहे.
