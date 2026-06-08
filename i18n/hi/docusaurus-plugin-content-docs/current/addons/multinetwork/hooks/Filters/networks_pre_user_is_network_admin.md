---
id: networks_pre_user_is_network_admin
title: फ़िल्टर - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

यह फ़िल्टर उन नेटवर्क को फ़िल्टर करता है जिनके एडमिनिस्ट्रेटर (administrator) के रूप में कोई उपयोगकर्ता जुड़ा हुआ है, जिससे पूरी प्रक्रिया को तुरंत बायपास (short-circuit) किया जा सकता है।

## पैरामीटर्स

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $ | `array\|bool\|null` | नेटवर्क IDs की सूची या `false`। `null` के अलावा कोई भी मान प्रक्रिया को तुरंत पूरा कर देगा। |
| $ | `int` | उपयोगकर्ता ID जिसके लिए नेटवर्क लौटाए जाने चाहिए। |

### से

- 2.0.0
### स्रोत

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) में लाइन 688 पर परिभाषित।
