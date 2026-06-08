---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

อนุญาตให้นักพัฒนาสามารถข้ามโค้ดที่ทำการล้างข้อมูลผู้ใช้ปัจจุบันได้

หากส่งค่าใด ๆ ที่ไม่ใช่ `null` ออกไป จะเป็นการข้ามการล้างข้อมูลผู้ใช้ที่ล็อกอินอยู่ ซึ่งมีประโยชน์ในบางสถานการณ์ ตัวอย่างเช่น เมื่อต้องจัดการกับเว็บไซต์ย่อย (sub-sites) ที่ถูกใช้เป็นแผงควบคุมผู้ดูแลระบบ

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | หากส่งค่า `null` จะดำเนินการต่อไป ส่วนค่าอื่น ๆ จะเป็นการข้ามการทำงานนี้ |
| $current_user | `false\|\WP_User` | อ็อบเจกต์ของผู้ใช้ปัจจุบัน |

### Since

- 2.0.11
### Source

กำหนดไว้ใน [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) บรรทัดที่ 221


## Returns
