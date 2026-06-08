---
id: wu_post_count_statuses
title: ตัวกรอง - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

ให้ผู้พัฒนาปลั๊กอินสามารถกำหนดได้ว่าต้องการนับสถานะโพสต์ใดบ้าง โดยปกติแล้วจะนับเฉพาะโพสต์ที่เผยแพร่ (published) และโพสต์ส่วนตัว (private)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | รายการสถานะโพสต์ที่ต้องการนับ |
| $post_type | `string` | สลัก (slug) ของประเภทโพสต์ |

### Since

- 1.9.1
### Source

กำหนดไว้ใน [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) บรรทัดที่ 119


## Returns
อาร์เรย์ (array) ใหม่ของสถานะโพสต์
