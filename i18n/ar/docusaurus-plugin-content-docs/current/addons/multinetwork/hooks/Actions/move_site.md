---
id: move_site
title: الإجراء - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

يتم إطلاقه بعد نقل موقع إلى شبكة جديدة.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | معرف الموقع الذي تم نقله. |
| $old_network_id | `int` | معرف الشبكة الأصلية للموقع. |
| $new_network_id | `int` | معرف الشبكة التي تم نقل الموقع إليها. |

### Since

- 1.3.0

### Source

تم تعريفه في [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) في السطر 1587
