---
id: wu_apc_process_page_content
title: फ़िल्टर - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

डेवलपर्स को अंतिम कंटेंट में बदलाव करने की सुविधा देता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $content | `string` | रिप्लेसमेंट के बाद का कंटेंट। |
| $content_before_processing | `string` | रिप्लेसमेंट से पहले का कंटेंट। |
| $to_replace | `array` | प्लेसहोल्डर्स को रखने वाला ऐरे। |
| $placeholder_count | `int` | पाए गए प्लेसहोल्डर्स की संख्या। |

### कब से {#since}
- 1.4.0
### स्रोत {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) में लाइन 46 पर परिभाषित।

## रिटर्न करता है {#returns}
संशोधन के बाद का कंटेंट।
