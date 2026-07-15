---
id: wu_password_require_special
title: फ़िल्टर - wu_password_require_special
sidebar_label: wu_password_require_special
_i18n_hash: 87f845abf068a92161fb7db01f88ee99
---
# Filter: wu_password_require_special

यह फ़िल्टर निर्धारित करता है कि पासवर्ड में विशेष वर्ण (special characters) आवश्यक हैं या नहीं।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | क्या विशेष वर्ण आवश्यक हैं। जब नियम लागू होते हैं, तो डिफ़ॉल्ट रूप से यह सत्य (true) होता है। |
| $defender_active | `bool` | क्या Defender Pro Strong Password सक्रिय है। |

### कब से {#since}

- 2.4.0
### स्रोत {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L583) पर लाइन 583 पर परिभाषित किया गया है
