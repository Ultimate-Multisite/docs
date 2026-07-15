---
id: wu_apc_process_page_content
title: फिल्टर - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

डेव्हलपर्सना अंतिम (final) कंटेंटमध्ये बदल करण्याची परवानगी देते.

## पॅरामीटर्स {#parameters}

| नाव | प्रकार | वर्णन |
|------|------|-------------|
| $content | `string` | रिप्लेसमेंटनंतरचा कंटेंट. |
| $content_before_processing | `string` | रिप्लेसमेंटपूर्वीचा कंटेंट. |
| $to_replace | `array` | प्लेसहोल्डर्स (placeholders) असलेले ॲरे (array). |
| $placeholder_count | `int` | सापडलेल्या प्लेसहोल्डर्सची संख्या. |

### कधीपासून {#since}

- 1.4.0
### स्रोत {#source}

Defined in [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) at line 46


## परत मिळणारा कंटेंट {#returns}
बदलांनंतरचा कंटेंट.
