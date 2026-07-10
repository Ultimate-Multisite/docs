---
title: สร้างเมนู
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# การสร้างเมนู {#create-menu}

ความสามารถในการ **สร้างเมนู** ช่วยให้คุณสร้างเมนูนำทางของ WordPress โดยรองรับป้ายกำกับ (label) สำหรับการนำทางที่แยกต่างหากจากชื่อหน้า (page title)

## ภาพรวม {#overview}

ฟังก์ชันนี้ช่วยขยายความสามารถในการสร้างเมนูมาตรฐาน โดยเพิ่มความสามารถในการระบุพารามิเตอร์ `navigation_label` สิ่งนี้ช่วยให้คุณสร้างเมนูที่ป้ายกำกับที่แสดงในการนำทางแตกต่างจากชื่อหน้า ซึ่งช่วยเพิ่มความยืดหยุ่นทั้งในโครงสร้างเว็บไซต์และประสบการณ์ผู้ใช้

## พารามิเตอร์ {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | ชื่อเมนู เช่น `Primary Navigation` |
| `location` | string | No | ตำแหน่งธีม (Theme location) ที่จะกำหนดเมนูนี้ เช่น `primary` |
| `navigation_label` | string | No | ป้ายกำกับที่จะแสดงในการนำทาง (แตกต่างจากชื่อหน้า) |

## ค่าที่ส่งกลับ (Return Value) {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## ป้ายกำกับนำทาง (Navigation Label) เทียบกับชื่อหน้า (Page Title) {#navigation-label-vs-page-title}

พารามิเตอร์ `navigation_label` ช่วยให้คุณแยกชื่อเมนูภายในออกจากป้ายกำกับที่แสดงให้ผู้ใช้เห็นได้:

- **`name`** — ตัวระบุเมนูภายในที่ WordPress ใช้ (เช่น "Primary Navigation")
- **`navigation_label`** — ป้ายกำกับที่แสดงให้ผู้เยี่ยมชมเว็บไซต์เห็นในการนำทาง (เช่น "Main Menu")

สิ่งนี้มีประโยชน์เมื่อ:
- รูปแบบการตั้งชื่อภายในของคุณแตกต่างจากป้ายกำกับที่ผู้ใช้เห็น
- คุณต้องการป้ายกำกับที่สั้นกว่าในการนำทางเมื่อเทียบกับในแผงผู้ดูแลระบบ (admin panel)
- คุณจำเป็นต้องรองรับหลายภาษาที่มีความยาวป้ายกำกับต่างกัน
- คุณกำลังสร้างเมนูสำหรับภูมิภาคหรือกลุ่มผู้ใช้ที่เฉพาะเจาะจง

## ตัวอย่างการใช้งาน {#usage-examples}

### ตัวอย่างที่ 1: เมนูแบบง่ายพร้อมป้ายกำกับนำทาง {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### ตัวอย่างที่ 2: เมนูสำหรับตำแหน่งธีมที่เฉพาะเจาะจง {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## การผสานรวมกับ Theme Builder {#integration-with-theme-builder}

เมื่อใช้ Theme Builder ความสามารถในการสร้างเมนูจะ:

1. ตรวจจับตำแหน่งเมนูธีมที่มีอยู่โดยอัตโนมัติ
2. สร้างเมนูพร้อมป้ายกำกับนำทางที่เหมาะสมสำหรับการออกแบบของคุณ
3. กำหนดเมนูไปยังตำแหน่งธีมที่ถูกต้อง
4. รองรับการเพิ่มรายการเมนูหลังจากสร้างแล้ว

## ความสามารถที่เกี่ยวข้อง {#related-abilities}

- **`add_menu_item`** — เพิ่มรายการไปยังเมนูที่มีอยู่
- **`update_menu`** — เปลี่ยนชื่อเมนูหรือกำหนดตำแหน่งธีมใหม่
- **`delete_menu`** — ลบเมนูออกจากเว็บไซต์ของคุณ

## แนวทางปฏิบัติที่ดีที่สุด (Best Practices) {#best-practices}

- **ใช้ป้ายกำกับนำทางที่ชัดเจน** — ทำให้ป้ายกำกับกระชับและสื่อความหมายสำหรับผู้ใช้
- **จับคู่ตำแหน่งธีม** — กำหนดเมนูไปยังตำแหน่งธีมที่ถูกต้องเพื่อให้แสดงผลได้อย่างเหมาะสม
- **วางแผนโครงสร้างเมนู** — ตัดสินใจเกี่ยวกับลำดับชั้นของเมนูก่อนที่จะสร้างรายการ
- **ทดสอบการตอบสนอง (Responsiveness)** — ตรวจสอบว่าเมนูแสดงผลอย่างถูกต้องบนอุปกรณ์มือถือ
- **แปลป้ายกำกับ (Localize labels)** — ใช้ป้ายกำกับนำทางที่แตกต่างกันสำหรับเวอร์ชันภาษาที่แตกต่างกัน

## ข้อจำกัด (Limitations) {#limitations}

- ป้ายกำกับนำทางใช้สำหรับการแสดงผลเท่านั้น ส่วน `name` ภายในยังคงใช้สำหรับการระบุตัวตนของ WordPress
- การรองรับธีมแตกต่างกันไป; ธีมทั้งหมดอาจไม่รองรับตำแหน่งเมนูทั้งหมด
- ต้องเพิ่มรายการเมนูแยกต่างหากหลังจากสร้างเมนู
- การเปลี่ยนป้ายกำกับนำทางจำเป็นต้องอัปเดตเมนู

## ความสามารถที่เกี่ยวข้อง {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — สร้างโลโก้สำหรับส่วนหัวของเว็บไซต์ของคุณ
- [Validate Palette Contrast](./validate-palette-contrast.md) — ตรวจสอบให้แน่ใจว่าชุดสีที่ใช้สามารถเข้าถึงได้
