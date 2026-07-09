---
id: wu_make_primary_domain_redirect_url
title: ตัวกรอง - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# ตัวกรอง: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

ตัวกรอง URL สำหรับเปลี่ยนเส้นทางหลังจากตั้งค่าโดเมนให้เป็นโดเมนหลัก

ตัวกรองนี้ช่วยให้นักพัฒนาสามารถกำหนดเองได้ว่าผู้ใช้จะถูกเปลี่ยนเส้นทางไปที่ใดหลังจากที่ตั้งค่าโดเมนเป็นโดเมนหลักสำเร็จ โดยปกติแล้ว ระบบจะเปลี่ยนเส้นทางไปยัง URL ปัจจุบันของเว็บไซต์หลัก หรือไปยัง URL ของหน้าผู้ดูแลระบบของเว็บไซต์ที่กำลังแก้ไข

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL สำหรับเปลี่ยนเส้นทางเริ่มต้น ไม่ว่าจะเป็น URL ปัจจุบัน (ถ้าเป็นเว็บไซต์หลัก) หรือ URL ของหน้าผู้ดูแลระบบของเว็บไซต์ปัจจุบัน |
| $current_site | `int` | ID ของเว็บไซต์ที่กำลังถูกตั้งค่าโดเมนให้เป็นโดเมนหลัก |
| $domain | `\Domain` | อ็อบเจกต์โดเมนที่ถูกตั้งค่าให้เป็นโดเมนหลัก |
| $old_primary_domains | `array` | อาร์เรย์ของ ID โดเมนที่เคยเป็นโดเมนหลักมาก่อน |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) บรรทัดที่ 639


## Returns {#returns}
URL สำหรับเปลี่ยนเส้นทางที่ถูกกรองแล้ว
