---
id: switch_network
title: क्रिया - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# एक्शन: switch_network

यह तब ट्रिगर होता है जब वर्तमान नेटवर्क संदर्भ बदला जाता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $new_network_id | `int` | वह ID जिस नेटवर्क पर स्विच किया जा रहा है। |
| $old_network_id | `int` | पहले के वर्तमान नेटवर्क की ID। |

### कब से {#since}

- 1.3.0
### स्रोत {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) में लाइन 859 पर परिभाषित है
