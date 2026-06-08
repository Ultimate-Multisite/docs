---
title: การตั้งค่าและการกำหนดค่าผู้ให้บริการ
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: การตั้งค่าและการกำหนดค่าผู้ให้บริการ

Addon Domain Seller มาพร้อมกับตัวช่วยตั้งค่า (setup wizard) ที่จะนำทางคุณไปทีละขั้นตอนที่จำเป็นทั้งหมด หน้านี้จะครอบคลุมขั้นตอนการทำงานของ wizard และวิธีการกำหนดค่าหรือแก้ไขผู้ให้บริการในภายหลัง

## ข้อกำหนดเบื้องต้น (Requirements)

- **Ultimate Multisite** v2.4.12 หรือสูงกว่า และต้องเปิดใช้งานในระดับ Network
- **PHP** 7.4+
- ข้อมูลรับรอง API สำหรับผู้จดทะเบียนอย่างน้อยหนึ่งรายที่รองรับ

## ตัวช่วยตั้งค่าครั้งแรก (First-run setup wizard)

ตัวช่วยตั้งค่าจะเปิดใช้งานโดยอัตโนมัติในครั้งแรกที่คุณเปิดใช้งานปลั๊กอินในระดับ Network นอกจากนี้ยังสามารถเข้าถึงได้ตลอดเวลาจาก **Network Admin › Ultimate Multisite › Domain Seller Setup**

### ขั้นตอนที่ 1 — เลือกผู้ให้บริการ (Choose a provider)

เลือกผู้จดทะเบียนที่คุณต้องการเชื่อมต่อ ตัวเลือกที่รองรับ:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### ขั้นตอนที่ 2 — กรอกข้อมูลรับรอง (Enter credentials)

ผู้ให้บริการแต่ละรายมีช่องข้อมูลรับรองที่แตกต่างกัน:

**OpenSRS** — Username และ private key (จาก OpenSRS Reseller Control Panel)

**Namecheap** — Username และ API key (จาก Account › Tools › API Access)

**GoDaddy** — API key และ secret (จาก developer.godaddy.com)

**ResellerClub** — Reseller ID และ API key (จาก ResellerClub control panel)

**NameSilo** — API key (จาก namesilo.com › Account › API Manager)

**Enom** — Account ID และ API token

โปรดตรวจสอบ **Sandbox mode** หากมี เพื่อทดสอบกับสภาพแวดล้อมทดสอบของผู้ให้บริการก่อนใช้งานจริง

### ขั้นตอนที่ 3 — ทดสอบการเชื่อมต่อ (Test the connection)

คลิก **Test Connection** ตัวช่วยตั้งค่าจะส่ง API call แบบเบาเพื่อตรวจสอบข้อมูลรับรองและการเชื่อมต่อ แก้ไขปัญหาข้อมูลรับรองใด ๆ ก่อนดำเนินการต่อ

### ขั้นตอนที่ 4 — นำเข้า TLDs (Import TLDs)

คลิก **Import TLDs** เพื่อดึง TLDs และราคาขายส่งทั้งหมดที่มีจากผู้ให้บริการที่เชื่อมต่อไว้ สิ่งนี้จะเติมรายการ TLD ที่ใช้โดยผลิตภัณฑ์โดเมน การนำเข้าอาจใช้เวลา 30–60 วินาทีสำหรับผู้ให้บริการที่มีแคตตาล็อก TLD ขนาดใหญ่

ระบบจะทำการซิงค์ TLDs ใหม่โดยอัตโนมัติวันละครั้งผ่านงาน cron job

### ขั้นตอนที่ 5 — สร้างผลิตภัณฑ์โดเมน (Create a domain product)

ตัวช่วยตั้งค่าจะสร้างผลิตภัณฑ์โดเมนแบบครอบคลุมทั้งหมด (catch-all) โดยมีส่วนเพิ่มราคา (markup) 10% คุณสามารถแก้ไขผลิตภัณฑ์นี้ได้ทันที หรือข้ามไปและสร้างผลิตภัณฑ์ด้วยตนเองภายใต้ **Ultimate Multisite › Products**

ดู [Domain Products and Pricing](./domain-products) สำหรับคู่มือการกำหนดค่าผลิตภัณฑ์ฉบับเต็ม

---

## การกำหนดค่าผู้ให้บริการใหม่ (Reconfiguring a provider)

ไปที่ **Network Admin › Ultimate Multisite › Settings › Domain Seller** (หรือคลิก **Settings** ในรายการปลั๊กอิน)

หน้าการตั้งค่าประกอบด้วย:

- **Enable domain selling** — สลับเปิด/ปิดฟีเจอร์ทั้งหมด
- **Default provider** — ผู้ให้บริการที่ใช้สำหรับการค้นหาโดเมนและผลิตภัณฑ์ใหม่
- **Max TLDs per search** — จำนวน TLD ที่จะตรวจสอบเมื่อลูกค้าทำการค้นหา; ค่าที่สูงขึ้นจะแสดงตัวเลือกมากขึ้นแต่จะช้าลง
- **Availability cache duration** — ระยะเวลาในการแคชผลลัพธ์ความพร้อมใช้งานและราคา; ค่าที่ต่ำกว่าจะแม่นยำกว่าแต่จะเพิ่มจำนวน API calls
- **Manage domain products** — ลิงก์ด่วนไปยังรายการ Products
- **Configure providers** — เปิด Integration Wizard เพื่อเพิ่มหรือกำหนดค่าผู้ให้บริการใหม่

### การเพิ่มผู้ให้บริการรายที่สอง (Adding a second provider)

คลิก **Configure providers** และเรียกใช้ wizard อีกครั้งสำหรับผู้จดทะเบียนรายใหม่ คุณสามารถกำหนดค่าผู้ให้บริการได้หลายรายพร้อมกัน กำหนดผลิตภัณฑ์โดเมนแต่ละรายการให้ใช้ผู้ให้บริการเฉพาะราย หรือปล่อยให้เป็นค่าเริ่มต้นก็ได้

### การซิงค์ TLDs ด้วยตนเอง (Syncing TLDs manually)

ในหน้าการตั้งค่า ให้คลิก **Sync TLDs** ถัดจากผู้ให้บริการที่กำหนดค่าไว้เพื่อดึงราคาล่าสุด สิ่งนี้มีประโยชน์หลังจากที่ผู้ให้บริการมีการอัปเดตราคาขายส่งหรือเพิ่ม TLD ใหม่

---

## บันทึก (Logs)

ผู้ให้บริการแต่ละรายจะเขียนบันทึกไปยังช่องบันทึกของตัวเอง บันทึกสามารถดูได้ภายใต้ **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | ความพยายามในการลงทะเบียนทั้งหมด (ทั้งสำเร็จและล้มเหลว) |
| `domain-seller-renewal` | ผลลัพธ์ของงานต่ออายุ (Renewal job) |
| `domain-seller-opensrs` | กิจกรรม API ของ OpenSRS ดิบ |
| `domain-seller-namecheap` | กิจกรรม API ของ Namecheap ดิบ |
| `domain-seller-godaddy` | กิจกรรม API ของ GoDaddy ดิบ |
| `domain-seller-resellerclub` | กิจกรรม API ของ ResellerClub ดิบ |
| `domain-seller-namesilo` | กิจกรรม API ของ NameSilo ดิบ |
| `domain-seller-enom` | กิจกรรม API ของ Enom ดิบ |
