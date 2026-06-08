---
id: networks_user_is_network_admin
title: Filter - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

यह फ़िल्टर करता है कि कोई उपयोगकर्ता किस नेटवर्क का व्यवस्थापक (administrator) है।

## पैरामीटर्स

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $ | `array\|bool` | नेटवर्क IDs की सूची, या यदि उपयोगकर्ता के लिए कोई नेटवर्क नहीं है तो `false`। |
| $ | `int` | उपयोगकर्ता ID जिसके लिए नेटवर्क लौटाए जाने चाहिए। |

### कब से

- 2.0.0
### स्रोत

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) में लाइन 703 पर परिभाषित।
