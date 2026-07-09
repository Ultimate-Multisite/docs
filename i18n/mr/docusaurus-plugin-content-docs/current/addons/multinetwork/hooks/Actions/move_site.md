---
id: move_site
title: कृती - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

जेव्हा एखादी साइट नवीन नेटवर्कवर हलवली जाते, तेव्हा हे कार्यान्वित होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ज्या साइटला हलवण्यात आले आहे त्याचा ID. |
| $old_network_id | `int` | साइटचे मूळ (original) नेटवर्क ID. |
| $new_network_id | `int` | ज्या नेटवर्कवर साइट हलवली गेली आहे त्याचा ID. |

### Since {#since}

- 1.3.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) या ठिकाणी, लाइन 1587 वर परिभाषित केले आहे.
