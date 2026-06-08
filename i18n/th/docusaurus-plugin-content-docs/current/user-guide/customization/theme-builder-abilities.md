---
title: ความสามารถของ Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# ความสามารถของ Theme Builder: การสร้างโครง (Scaffold) และการเปิดใช้งาน Block Themes

Superdav AI Agent v1.12.0 ได้เพิ่มความสามารถที่ทรงพลังสองอย่าง ซึ่งช่วยให้คุณสามารถสร้างและติดตั้ง custom block themes ได้โดยตรงจากหน้าต่างแชท

## ภาพรวม (Overview)

ความสามารถ **scaffold-block-theme** และ **activate-theme** ช่วยให้ agent สามารถ:
- สร้าง block themes ที่สมบูรณ์และพร้อมใช้งานจริงตามที่คุณกำหนด
- เปิดใช้งาน themes บนเว็บไซต์ของคุณโดยอัตโนมัติโดยไม่ต้องทำด้วยตนเอง
- สร้างเอกลักษณ์ทางภาพที่สอดคล้องกันผ่านการตัดสินใจออกแบบที่แนะนำ

## การสร้างโครง Block Theme (Scaffold Block Theme)

ความสามารถ **scaffold-block-theme** จะสร้าง WordPress block theme ใหม่พร้อมโครงสร้างธีมที่สมบูรณ์ ซึ่งรวมถึง:

- การตั้งค่า `theme.json` พร้อม design tokens
- ไฟล์ block template สำหรับ layout ทั่วไป
- สไตล์และ variation ของ custom block
- metadata และการประกาศการรองรับของธีม

### วิธีเรียกใช้ (How to Invoke)

ในแชทของคุณกับ Superdav AI Agent คุณสามารถร้องขอการสร้าง theme ได้ดังนี้:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

agent จะดำเนินการ:
1. รวบรวมความชอบด้านการออกแบบของคุณผ่านการสนทนา
2. สร้างโครงสร้าง theme ที่สมบูรณ์
3. สร้างไฟล์ theme ที่จำเป็นทั้งหมด
4. เตรียม theme ให้พร้อมสำหรับการเปิดใช้งาน

### ผลลัพธ์ที่คาดหวัง (Expected Output)

เมื่อความสามารถทำงานสำเร็จ คุณจะเห็น:

- การยืนยันว่าได้สร้างโครง theme เรียบร้อยแล้ว
- ชื่อและตำแหน่งของ theme
- สรุป design tokens ที่นำไปใช้ (สี, ตัวอักษร, ระยะห่าง)
- สถานะพร้อมสำหรับการเปิดใช้งาน

ตัวอย่างผลลัพธ์:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## การเปิดใช้งาน Theme (Activate Theme)

ความสามารถ **activate-theme** จะสลับเว็บไซต์ของคุณไปยัง block theme ที่เพิ่งสร้างโครงขึ้นมาใหม่ หรือ theme ที่มีอยู่แล้ว

### วิธีเรียกใช้ (How to Invoke)

หลังจากสร้างโครง theme แล้ว คุณสามารถเปิดใช้งานได้ทันที:

```
"Activate the Modern Agency theme"
```

หรือเปิดใช้งาน theme ที่มีอยู่แล้ว:

```
"Switch to the Twentytwentyfour theme"
```

### ผลลัพธ์ที่คาดหวัง (Expected Output)

เมื่อการเปิดใช้งานสำเร็จ:

- การยืนยัน theme ที่กำลังใช้งานอยู่
- ชื่อ theme ก่อนหน้า (เพื่อใช้อ้างอิง)
- URL ของเว็บไซต์ที่ theme นั้นกำลังทำงานอยู่
- หมายเหตุการตั้งค่าเฉพาะ theme ใดๆ

ตัวอย่างผลลัพธ์:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: การสร้างโครงและการเปิดใช้งาน (Scaffold and Activate)

Workflow ทั่วไปจะรวมความสามารถทั้งสองเข้าด้วยกัน:

1. **ร้องขอการสร้าง theme**: "Create a block theme for my SaaS landing page"
2. **Agent สร้างโครง theme**: สร้างไฟล์และ design tokens
3. **ตรวจสอบและปรับปรุง**: พูดคุยเกี่ยวกับการเปลี่ยนแปลงการออกแบบหากจำเป็น
4. **เปิดใช้งาน**: "Activate the theme now"
5. **ตรวจสอบ**: เข้าชมเว็บไซต์ของคุณเพื่อยืนยันว่าการออกแบบใหม่ทำงานแล้ว

## Design Tokens และการปรับแต่ง (Design Tokens and Customization)

Themes ที่สร้างโครงจะใช้ WordPress design tokens (ผ่าน `theme.json`) สำหรับ:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation levels

tokens เหล่านี้จะถูกรวมศูนย์ไว้ใน `theme.json` ทำให้ง่ายต่อการปรับระบบการออกแบบทั้งหมดของคุณจากไฟล์เดียว

## ข้อจำกัดและหมายเหตุ (Limitations and Notes)

- Themes จะถูกสร้างโครงใน `/wp-content/themes/` และต้องเป็นไปตาม WordPress naming conventions
- การเปิดใช้งานต้องมีสิทธิ์ที่เหมาะสมบนเว็บไซต์ WordPress ของคุณ
- โค้ด PHP แบบกำหนดเองใน themes ควรมีน้อยที่สุด ควรใช้ plugins สำหรับฟังก์ชันที่ซับซ้อน
- Block themes ทำงานได้ดีที่สุดกับ WordPress 5.9 ขึ้นไป

## การแก้ไขปัญหา (Troubleshooting)

**Theme ไม่ปรากฏหลังจากสร้างโครง**
- ตรวจสอบว่า directory ของ theme มีอยู่และมีสิทธิ์ที่เหมาะสม
- ตรวจสอบว่า `theme.json` เป็น JSON ที่ถูกต้อง
- ตรวจสอบว่าชื่อ theme ไม่ขัดแย้งกับ theme อื่นๆ ที่มีอยู่

**การเปิดใช้งานล้มเหลว**
- ยืนยันว่าคุณมีสิทธิ์ระดับ administrator
- ตรวจสอบว่า directory ของ theme สามารถอ่านได้โดย WordPress
- ตรวจสอบ WordPress error logs เพื่อดูรายละเอียด

**Design tokens ไม่ถูกนำไปใช้**
- ตรวจสอบว่า syntax ของ `theme.json` ถูกต้อง
- ล้าง caching plugins ทั้งหมด
- ตรวจสอบว่าเวอร์ชัน WordPress ของคุณรองรับ tokens ที่คุณกำลังใช้

## ขั้นตอนต่อไป (Next Steps)

หลังจากเปิดใช้งาน theme แล้ว คุณสามารถ:
- ใช้ **Design System Aesthetics skill** เพื่อปรับปรุง typography, colors, และ spacing
- ปรับแต่ง block styles รายตัวผ่าน WordPress block editor
- เพิ่ม custom CSS ในไฟล์ `style.css` ของ theme
- สร้าง custom block templates สำหรับ page types เฉพาะ
