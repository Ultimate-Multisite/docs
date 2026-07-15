---
id: switch_network
title: การดำเนินการ - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network

จะทำงานเมื่อมีการเปลี่ยนบริบทของเครือข่ายปัจจุบัน

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ID ของเครือข่ายปลายทางที่กำลังเปลี่ยนไป |
| $old_network_id | `int` | ID ของเครือข่ายที่เคยเป็นปัจจุบันก่อนหน้านี้ |

### Since {#since}

- 1.3.0
### Source {#source}

ถูกกำหนดไว้ใน [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) บรรทัดที่ 859
