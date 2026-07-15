---
id: networks_pre_user_is_network_admin
title: ตัวกรอง - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

ตัวกรองนี้ใช้สำหรับกรองรายการเครือข่ายที่ผู้ใช้คนนั้นเป็นผู้ดูแลระบบ เพื่อให้เราสามารถข้ามขั้นตอนการทำงานปกติได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | รายการ ID เครือข่าย หรือค่า false ค่าใด ๆ ที่ไม่ใช่ null จะทำให้กระบวนการทำงานข้ามขั้นตอน (short-circuit) |
| $ | `int` | ID ผู้ใช้ที่ต้องการให้ส่งคืนรายการเครือข่าย |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) บรรทัดที่ 688
