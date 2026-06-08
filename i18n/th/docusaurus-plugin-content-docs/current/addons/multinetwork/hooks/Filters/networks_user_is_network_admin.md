---
id: networks_user_is_network_admin
title: Filter - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

ใช้สำหรับกรองรายการเครือข่ายที่ผู้ใช้คนนั้นเป็นผู้ดูแลระบบ (administrator)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool` | รายการ ID เครือข่าย หรือค่า false หากผู้ใช้ไม่มีเครือข่ายใดๆ |
| $ | `int` | ID ผู้ใช้ที่ต้องการให้ส่งคืนรายการเครือข่าย |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) บรรทัดที่ 703
