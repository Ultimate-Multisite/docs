---
id: wu_admin_notices
title: ตัวกรอง - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

อนุญาตให้นักพัฒนาสามารถกรองข้อความแจ้งเตือน (admin notices) ที่เพิ่มโดย Ultimate Multisite ได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | รายการข้อความแจ้งเตือนสำหรับแผงควบคุม (panel) นั้น ๆ |
| $all_notices | `array` | รายการข้อความแจ้งเตือนทั้งหมด โดยมีการแยกตามแผงควบคุม |
| $panel | `string` | แผงควบคุมที่ต้องการดึงข้อความแจ้งเตือน |
| $filter | `string` | ระบุว่าข้อความแจ้งเตือนที่สามารถปิดได้ (dismissable notices) ได้ถูกกรองออกไปแล้วหรือไม่ |
| $dismissed_messages | `array` | รายการคีย์ของข้อความแจ้งเตือนที่ถูกปิดไปแล้ว |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) บรรทัดที่ 121


## Returns
