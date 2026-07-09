---
id: networks_pre_user_is_network_admin
title: फिल्टर - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

वापरकर्त्याला कोणत्या नेटवर्कचा प्रशासक (administrator) आहे, याची तपासणी करण्यासाठी वापरले जाणारे फिल्टर आहे. यामुळे प्रक्रिया थेट पूर्ण (short-circuit) करता येते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | नेटवर्क आयडींची यादी किंवा false. जर हे null नसेल, तर प्रक्रिया थेट पूर्ण होईल. |
| $ | `int` | ज्या वापरकर्त्यासाठी नेटवर्कची माहिती परत करायची आहे, त्याचा User ID. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) मध्ये लाइन 688 वर परिभाषित केले आहे.
