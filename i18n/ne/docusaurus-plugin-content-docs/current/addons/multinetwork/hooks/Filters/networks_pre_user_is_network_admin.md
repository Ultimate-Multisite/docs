---
id: networks_pre_user_is_network_admin
title: फिल्टर - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

प्रक्रियालाई छोट्याउन, प्रयोगकर्ता प्रशासक भएका networks लाई फिल्टर गर्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $ | `array\|bool\|null` | network IDs को सूची वा false। null बाहेक कुनै पनि कुराले प्रक्रियालाई छोट्याउनेछ। |
| $ | `int` | जसका लागि networks फर्काइनुपर्छ त्यो प्रयोगकर्ता ID। |

### देखि

- 2.0.0
### स्रोत

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) मा लाइन 688 मा परिभाषित गरिएको छ
