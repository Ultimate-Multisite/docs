---
title: การค้นหาโดเมนในส่วนหัว
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# การค้นหาโดเมนจาก Header

ใช้การตั้งค่านี้เมื่อคุณต้องการฟอร์ม Header ขนาดเล็กที่เริ่มการค้นหาโดเมน จากนั้นให้ลูกค้าเลือกจากโดเมนที่พร้อมใช้งานภายใน checkout ของ Ultimate Multisite

## ข้อกำหนด {#requirements}

- Ultimate Multisite เปิดใช้งานระดับเครือข่าย
- Multisite Ultimate Domain Seller เปิดใช้งานระดับเครือข่าย
- มีผลิตภัณฑ์จดทะเบียนโดเมนที่ใช้งานอยู่อย่างน้อยหนึ่งรายการ โดยมี:
  - ตั้งค่า `domain_provider` เป็นผู้ให้บริการที่กำหนดค่าไว้แล้ว
  - กำหนดค่า TLDs ที่รองรับไว้ เช่น `com`, `net` และ `org`
- ฟอร์ม checkout ที่ถูกต้องซึ่งมีฟิลด์ **การเลือกโดเมน**

## ฟอร์ม checkout {#checkout-form}

1. สร้างหรือแก้ไขฟอร์ม checkout ที่ใช้โดยหน้าลงทะเบียน
2. เพิ่มฟิลด์ checkout/Account ที่จำเป็นตามปกติ รวมถึง **ชื่อผู้ใช้** ฟอร์ม checkout ที่มีเฉพาะฟิลด์โดเมนจะถูกปฏิเสธโดยการตรวจสอบความถูกต้องของ Ultimate Multisite
3. เพิ่มฟิลด์ **การเลือกโดเมน**
4. ตั้งค่าโหมดการเลือกโดเมนเป็น **ลงทะเบียนเท่านั้น** เมื่อโฟลว์ควรมุ่งเน้นที่โดเมนที่จดทะเบียนมากกว่าโดเมนย่อยฟรีหรือโดเมนที่มีอยู่แล้ว
5. กำหนดผลิตภัณฑ์จดทะเบียนโดเมนให้กับฟิลด์นั้น

หน้าลงทะเบียนควรแสดงผลฟอร์ม checkout เช่น:

```text
[wu_checkout slug="domain-form"]
```

## ฟอร์ม Header {#header-form}

เพิ่มฟอร์ม `GET` ขนาดเล็กใน Header ของไซต์ที่ส่งคำค้นหาที่ป้อนไปยังหน้า checkout เป็น `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

อย่าเลือกโดเมนล่วงหน้าใน JavaScript ของ Header แบบกำหนดเอง Header ควรส่งเฉพาะคำค้นหาเท่านั้น สคริปต์ checkout ของ Domain Seller จะอ่าน `?domain_name=example` เติมช่องค้นหา checkout และเรียกใช้การค้นหาความพร้อมใช้งานเพื่อให้ลูกค้าเลือกจากโดเมนที่ส่งกลับมา

## พฤติกรรมที่คาดหวัง {#expected-behaviour}

การค้นหา `example` ใน Header ควรเปิด:

```text
/register/?domain_name=example
```

จากนั้น checkout ควรแสดงผลลัพธ์ที่เลือกได้ เช่น:

- `example.com`
- `example.net`
- `example.org` ไม่พร้อมใช้งาน
- TLDs อื่น ๆ ที่ผู้ให้บริการรองรับ

หลังจากเลือกผลลัพธ์ที่พร้อมใช้งานแล้ว สรุปคำสั่งซื้อควรรวมผลิตภัณฑ์จดทะเบียนโดเมนและชื่อโดเมนที่เลือก

## การตรวจสอบ {#verification}

1. เปิดหน้าแรก
2. ค้นหาชื่อเปล่า เช่น `example`
3. ยืนยันว่า URL checkout มี `?domain_name=example`
4. ยืนยันว่าฟิลด์โดเมนใน checkout มี `example`
5. ยืนยันว่ารายการตัวเลือกโดเมนปรากฏขึ้น
6. คลิก **เลือก** สำหรับโดเมนที่พร้อมใช้งาน
7. ยืนยันว่าสรุปคำสั่งซื้อมี `Domain Registration - example.com` หรือโดเมนที่เลือก

## การแก้ไขปัญหา {#troubleshooting}

- หากไม่มีรายการปรากฏ ให้ตรวจสอบแท็บเครือข่ายของเบราว์เซอร์สำหรับ `admin-ajax.php?action=wu_domain_search` และยืนยันว่ามันส่งคืน `domains` หรือ `results` ที่ไม่ว่างเปล่า
- หากฟอร์ม checkout ตรวจสอบไม่ผ่านขณะบันทึก ให้เพิ่มฟิลด์ Account ที่จำเป็น เช่น **ชื่อผู้ใช้**
- หากการเลือกโดเมนไม่อัปเดตรถเข็น ให้ยืนยันว่า `window.wu_checkout_form` มีอยู่ และมีการโหลดแอสเซ็ต checkout ของ Domain Seller บนหน้า checkout แล้ว
