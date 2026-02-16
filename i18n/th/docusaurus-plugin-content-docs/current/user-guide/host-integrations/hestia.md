---
title: Hestia Control Panel Integration
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# การเชื่อมต่อกับ Hestia Control Panel

คู่มือนี้อธิบายวิธีตั้งค่าการเชื่อมต่อ Hestia กับ Ultimate Multisite เพื่อให้โดเมนที่แมปในเครือข่ายของคุณถูกเพิ่ม (และลบ) เป็น Web Domain Alias ใน Hestia โดยอัตโนมัติ

- คำสั่ง Hestia CLI ที่เกี่ยวข้อง: v-add-web-domain-alias / v-delete-web-domain-alias
- เอกสาร REST API อย่างเป็นทางการ: https://hestiacp.com/docs/server-administration/rest-api.html

## การทำงาน
- เมื่อมีการแมปโดเมนใน Ultimate Multisite ระบบจะเรียก Hestia API เพื่อรันคำสั่ง:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- เมื่อลบการแมปโดเมน ระบบจะรันคำสั่ง:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- สามารถเพิ่ม/ลบ alias `www.` โดยอัตโนมัติ ขึ้นอยู่กับการตั้งค่า "Auto-create www subdomain" ในหน้า Domain Mapping

## ข้อกำหนดเบื้องต้น
- ต้องมี Hestia Web Domain ที่ชี้ไปยังไซต์ WordPress ของคุณอยู่แล้ว ระบบจะเพิ่ม alias ไปยังโดเมนหลักนี้
- ต้องเปิดใช้งาน Hestia API คุณสามารถยืนยันตัวตนได้ด้วยรหัสผ่านหรือ API hash/token

ดูเอกสาร REST API ของ Hestia สำหรับวิธีเปิดใช้งาน API และรายละเอียดการยืนยันตัวตน:
https://hestiacp.com/docs/server-administration/rest-api.html

## การตั้งค่า (Wizard → Integrations → Hestia)
กรอกค่าต่อไปนี้:

- `WU_HESTIA_API_URL` (จำเป็น)
  - URL ของ API endpoint โดยทั่วไปคือ `https://your-hestia-host:8083/api/`
- `WU_HESTIA_API_USER` (จำเป็น)
  - ชื่อผู้ใช้ Hestia สำหรับรันคำสั่ง API (มักจะเป็น `admin`)
- `WU_HESTIA_API_PASSWORD` หรือ `WU_HESTIA_API_HASH` (ต้องระบุอย่างน้อยหนึ่งอย่าง)
  - เลือกวิธียืนยันตัวตน: รหัสผ่านหรือ API hash/token
- `WU_HESTIA_ACCOUNT` (จำเป็น)
  - บัญชี (เจ้าของ) ของ Web Domain ใน Hestia ซึ่งเป็น argument แรกของคำสั่ง CLI
- `WU_HESTIA_WEB_DOMAIN` (จำเป็น)
  - Hestia Web Domain ที่ให้บริการ WordPress ของคุณ (alias จะถูกเพิ่มที่นี่)
- `WU_HESTIA_RESTART` (ไม่บังคับ; ค่าเริ่มต้น `yes`)
  - กำหนดว่าจะรีสตาร์ท/รีโหลดบริการหลังจากเปลี่ยนแปลง alias หรือไม่

คุณสามารถให้ wizard เพิ่ม constants เหล่านี้ลงใน `wp-config.php` ให้อัตโนมัติ หรือกำหนดเองก็ได้

## การตรวจสอบการตั้งค่า
- ในขั้นตอน "Testing" ของ wizard ปลั๊กอินจะเรียก `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ผ่าน API หากได้รับ response สำเร็จ แสดงว่าการเชื่อมต่อและการยืนยันตัวตนถูกต้อง
- หลังจากแมปโดเมนแล้ว ให้ตรวจสอบใน Hestia: Web > โดเมนหลัก > Aliases คุณควรเห็น alias ใหม่ที่เพิ่มเข้าไป

## หมายเหตุและเคล็ดลับ
- ตรวจสอบให้แน่ใจว่า `WU_HESTIA_WEB_DOMAIN` มีอยู่แล้วและเป็นของ `WU_HESTIA_ACCOUNT`
- หากต้องการใช้ SSL ให้จัดการใบรับรองที่ Hestia การเชื่อมต่อนี้จัดการเฉพาะ alias เท่านั้น
- ปลั๊กอินอาจเพิ่ม/ลบ `www.<domain>` ด้วย ขึ้นอยู่กับการตั้งค่า "www subdomain" ในหน้า Domain Mapping

## ตัวอย่างการเรียก API (cURL)
ด้านล่างเป็นตัวอย่างเบื้องต้น (ปรับให้เหมาะกับสภาพแวดล้อมของคุณ) ดูเอกสารอย่างเป็นทางการสำหรับพารามิเตอร์ที่แน่นอน

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (หรือ &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias ที่ต้องการเพิ่ม)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

สำหรับการลบ ใช้ `cmd=v-delete-web-domain-alias` พร้อม args เดียวกัน

## การแก้ไขปัญหา
- เกิด HTTP error จาก API: ตรวจสอบว่า `WU_HESTIA_API_URL` เข้าถึงได้และมี `/api` ต่อท้าย
- เกิดข้อผิดพลาดการยืนยันตัวตน: ตรวจสอบ `WU_HESTIA_API_USER` และ `WU_HESTIA_API_PASSWORD` หรือ `WU_HESTIA_API_HASH`
- พบข้อความ "Missing account/base domain" ใน logs: ตรวจสอบว่า `WU_HESTIA_ACCOUNT` และ `WU_HESTIA_WEB_DOMAIN` ถูกตั้งค่าและมีอยู่จริงใน Hestia

## แหล่งข้อมูลอ้างอิง
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
