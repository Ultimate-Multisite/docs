---
id: move_site
title: Action - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

จะทำงานหลังจากที่ไซต์ถูกย้ายไปยังเครือข่ายใหม่แล้ว

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID ของไซต์ที่ถูกย้าย |
| $old_network_id | `int` | ID ของเครือข่ายเดิมของไซต์ |
| $new_network_id | `int` | ID ของเครือข่ายที่ไซต์ถูกย้ายไป |

### Since {#since}

- 1.3.0
### Source {#source}

กำหนดไว้ใน [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) บรรทัดที่ 1587
