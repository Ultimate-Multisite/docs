---
id: wu_should_create_domain_record_for_site
title: ตัวกรอง - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

กรองว่า Ultimate Multisite ควรสร้างบันทึกโดเมนสำหรับไซต์ที่สร้างใหม่หรือไม่

ใช้ filter นี้เพื่อระงับหรือเลื่อนการสร้างบันทึกโดเมนอัตโนมัติสำหรับไซต์ที่ใช้โดเมนฐานของแบบฟอร์มชำระเงินที่ใช้ร่วมกัน, โฮสต์ภายใน, หรือโดเมนที่การผสานรวมอื่นจะจัดการแยกต่างหาก

## พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| $create | `bool` | ว่าควรสร้างบันทึกโดเมนหรือไม่ |
| $site | `WP_Site` | อ็อบเจกต์ไซต์ที่สร้างใหม่ |

### ตั้งแต่

- 2.13.0

### แหล่งที่มา

กำหนดไว้ใน `inc/functions/domain.php`


## ค่าที่ส่งกลับ

Boolean ที่ระบุว่าจะสร้างบันทึกโดเมนหรือไม่
