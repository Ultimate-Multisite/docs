---
id: wu_current_type_get_manage_url
title: 'ตัวกรอง - wu_current_{$type}_get_manage_url'
sidebar_label: 'wu_current_{$type}_get_manage_url'
_i18n_hash: b3c7180a6e4666d7998ce8a20ba1cfea
---
# Filter: wu_current_\{$type\}_get_manage_url

ให้ผู้พัฒนาสามารถปรับเปลี่ยนพารามิเตอร์ของ URL สำหรับการจัดการไซต์ได้

## พารามิเตอร์ (Parameters)

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| $manage_site_url | `string` | URL สำหรับการจัดการไซต์ |
| $id | `int` | ID ของไซต์ |
| $site_hash | `string` | แฮชของไซต์ |

### ตั้งแต่

- 2.0.9
### แหล่งที่มา

กำหนดไว้ใน [`inc/class-current.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-current.php#L214) ที่บรรทัด 214


## ค่าที่ส่งกลับ (Returns)
URL สำหรับการจัดการไซต์ที่ถูกแก้ไขแล้ว
