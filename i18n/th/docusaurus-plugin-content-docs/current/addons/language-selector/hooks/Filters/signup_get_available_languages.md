---
id: signup_get_available_languages
title: ตัวกรอง - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

ใช้สำหรับกรองรายการภาษาที่มีให้เลือกสำหรับการลงทะเบียนเว็บไซต์จากหน้าส่วนหน้า (front-end)

หากคุณส่งอาร์เรย์ว่างเปล่า (empty array) ไปยัง hook นี้ จะทำให้การแสดงผลของการตั้งค่าบนแบบฟอร์มลงทะเบียนถูกปิดใช้งาน และระบบจะใช้ภาษาเริ่มต้นเมื่อมีการสร้างเว็บไซต์ นอกจากนี้ ภาษาที่ยังไม่ได้ติดตั้งจะถูกลบออก (stripped)

## พารามิเตอร์ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | ภาษาที่มีให้เลือก |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
