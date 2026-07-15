---
id: move_site
title: Action - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

यह तब ट्रिगर होता है जब किसी साइट को एक नए नेटवर्क पर ले जाया जाता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | उस साइट की ID जिसे मूव किया गया है। |
| $old_network_id | `int` | साइट के मूल नेटवर्क की ID। |
| $new_network_id | `int` | वह नेटवर्क जिस पर साइट को मूव किया गया है। |

### कब से {#since}

- 1.3.0
### स्रोत {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) में लाइन 1587 पर परिभाषित।
