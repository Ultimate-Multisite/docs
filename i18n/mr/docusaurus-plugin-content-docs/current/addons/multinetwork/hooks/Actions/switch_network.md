---
id: switch_network
title: क्रिया - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network

जेव्हा सध्याचा नेटवर्क संदर्भ (network context) बदलला जातो, तेव्हा हे ॲक्शन कार्यान्वित होते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ज्या नेटवर्कवर स्विच केले जात आहे त्याचा आयडी (ID). |
| $old_network_id | `int` | पूर्वीचे (previously) नेटवर्क ज्यावर आपण होतो त्याचा आयडी (ID). |

### कधीपासून {#since}

- 1.3.0
### स्रोत {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) मध्ये लाइन 859 वर परिभाषित केले आहे.
