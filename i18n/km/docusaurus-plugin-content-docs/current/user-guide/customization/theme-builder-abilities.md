---
title: សមត្ថភាព Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# សមត្ថភាព Theme Builder៖ ការបង្កើត និងបើកដំណើរការ Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 បានណែនាំសមត្ថភាពដ៏មានឥទ្ធិពលពីរ ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត និងដាក់ពង្រាយ custom block themes ដោយផ្ទាល់ពី giao diện chat។

## ទិដ្ឋភាពទូទៅ {#overview}

សមត្ថភាព **scaffold-block-theme** និង **activate-theme** អនុញ្ញាតឱ្យ agent ធ្វើដូចខាងក្រោម៖
- បង្កើត block themes ដែលត្រៀមខ្លួនរួចជាស្រេចសម្រាប់ផលិតកម្ម ដោយផ្អែកលើការបញ្ជាក់របស់អ្នក។
- បើកដំណើរការ theme នៅលើ site របស់អ្នកដោយស្វ័យប្រវត្តិ ដោយមិនចាំបាច់មានការអន្តរាគមន៍ដោយដៃ។
- បង្កើតអត្តសញ្ញាណរូបភាពដែលស៊ីគ្នា តាមរយៈការសម្រេចចិត្តក្នុងការរចនាដែលមានការណែនាំ។

## ការបង្កើត Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

សមត្ថភាព **scaffold-block-theme** បង្កើត block theme WordPress ថ្មីមួយដែលមានរចនាសម្ព័ន្ធ theme រួចរាល់ រួមមាន៖

- ការកំណត់រចនាសម្ព័ន្ធ `theme.json` ជាមួយនឹង design tokens (ធាតុរចនា)
- file template blocks សម្រាប់ layout ទូទៅៗ
- រូបរាង និង variations នៃ block តាមតម្រូវការជាក់លាក់
- metadata និងការប្រកាស support របស់ theme

### របៀបប្រើប្រាស់ {#how-to-invoke}

នៅក្នុងការ chat របស់អ្នកជាមួយ Superdav AI Agent អ្នកអាចស្នើសុំបង្កើត theme បានដូចខាងក្រោម៖

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

agent នឹងធ្វើដូចនេះ៖
1. ប្រមូលចំណូលចិត្តផ្នែករចនាពីការសន្ទនាជាមួយអ្នក។
2. បង្កើតរចនាសម្ព័ន្ធ theme រួចរាល់ទាំងស្រុង។
3. បង្កើត file theme ដែលចាំបាច់ទាំងអស់។
4. រៀបចំ theme ឱ្យត្រៀមសម្រាប់ការបើកដំណើរការ។

### លទ្ធផលដែលរំពឹងទុក {#expected-output}

នៅពេលសមត្ថភាពនេះដំណើរការដោយជោគជ័យ អ្នកនឹងឃើញ៖

- ការបញ្ជាក់ថា theme ត្រូវបានបង្កើត (scaffolded) ដោយជោគជ័យ។
- ឈ្មោះ និងទីតាំងនៃ theme។
- សេចក្តីសង្ខេបនៃ design tokens ដែលបានអនុវត្ត (ពណ៌, អក្សរ, ចន្លោះ)។
- ស្ថានភាពត្រៀមរួចសម្រាប់ការបើកដំណើរការ។

ឧទាហរណ៍លទ្ធផល៖
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## ការបើកដំណើរការ Theme (Activate Theme) {#activate-theme}

ความสามารถ **activate-theme** จะเปลี่ยนเว็บไซต์ของคุณไปใช้ธีมที่เพิ่งสร้างขึ้นใหม่หรือธีมที่มีอยู่แล้ว

### วิธีการเรียกใช้งาน {#how-to-invoke-1}

หลังจากที่คุณสร้าง (scaffold) ธีมเสร็จแล้ว คุณสามารถเปิดใช้งานได้ทันที:

```
"Activate the Modern Agency theme"
```

หรือเปิดใช้งานธีมที่มีอยู่แล้วก็ได้:

```
"Switch to the Twentytwentyfour theme"
```

### ผลลัพธ์ที่คาดหวัง {#expected-output-1}

เมื่อการเปิดใช้งานสำเร็จ:

- การยืนยันว่าธีมใดกำลังใช้งานอยู่
- ชื่อธีมก่อนหน้า (เพื่อใช้อ้างอิง)
- URL ของเว็บไซต์ที่ธีมนั้นใช้งานอยู่ตอนนี้
- หมายเหตุการตั้งค่าเฉพาะของธีมต่างๆ

ตัวอย่างผลลัพธ์:
```
✓ ธีมถูกเปิดใช้งานสำเร็จ
  ธีมที่ใช้งาน: Modern Agency
  ธีมก่อนหน้า: Twentytwentyfour
  ใช้งานอยู่ที่: https://yoursite.com
  หมายเหตุ: ตรวจสอบหน้าแรกของคุณเพื่อยืนยันเลย์เอาต์
```

## ขั้นตอนการทำงาน: สร้างและเปิดใช้งาน (Scaffold and Activate) {#workflow-scaffold-and-activate}

ขั้นตอนการทำงานทั่วไปจะรวมความสามารถทั้งสองเข้าด้วยกัน:

1. **ร้องขอการสร้างธีม**: "สร้าง block theme สำหรับ landing page ของ SaaS ของฉัน"
2. **Agent สร้างธีม**: สร้างไฟล์และ design tokens
3. **ตรวจสอบและปรับปรุง**: หารือเกี่ยวกับการเปลี่ยนแปลงการออกแบบหากจำเป็น
4. **เปิดใช้งาน**: "เปิดใช้งานธีมตอนนี้"
5. **ตรวจสอบ**: เข้าไปที่เว็บไซต์ของคุณเพื่อยืนยันว่าดีไซน์ใหม่ใช้งานได้แล้ว

## Design Tokens และการปรับแต่ง (Design Tokens and Customization) {#design-tokens-and-customization}

ธีมที่ถูกสร้างขึ้นมาจะใช้ WordPress design tokens (ผ่าน `theme.json`) สำหรับ:

- **สี**: โทนหลัก, โทนรอง, สีเน้น, พาเลทกลาง
- **ตัวอักษร**: ตระกูลฟอนต์, ขนาด, น้ำหนัก, ความสูงของบรรทัด
- **ระยะห่าง**: การเว้นช่องไฟ (Padding), ระยะขอบ (Margin), สเกลช่องว่าง (Gap scales)
- **เส้นขอบ**: โทเค็นรัศมีและขนาด
- **เงา**: ระดับความยกตัว

โทเค็นเหล่านี้จะถูกรวมไว้ใน `theme.json` ทำให้ง่ายต่อการปรับเปลี่ยนระบบดีไซน์ทั้งหมดของคุณจากไฟล์เดียว

## ข้อจำกัดและข้อควรทราบ {#limitations-and-notes}

- ธีมจะถูกสร้างโครงร่างไว้ใน `/wp-content/themes/` และต้องปฏิบัติตามกฎการตั้งชื่อของ WordPress
- การเปิดใช้งาน (Activation) ต้องมีสิทธิ์ที่เหมาะสมบนเว็บไซต์ WordPress ของคุณ
- โค้ด PHP ที่กำหนดเองในธีมนั้นน้อยมาก; ให้ใช้ plugin สำหรับฟังก์ชันที่ซับซ้อน

- ธีมแบบ Block ทำงานได้ดีที่สุดกับ WordPress เวอร์ชัน 5.9 และใหม่กว่า

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

**ธีมไม่ปรากฏหลังจากสร้างโครงร่าง (scaffolding)**
- ตรวจสอบว่าไดเรกทอรีของธีมมีอยู่จริงและมีการตั้งค่าสิทธิ์ที่ถูกต้องหรือไม่
- ตรวจสอบว่า `theme.json` เป็น JSON ที่ถูกต้องหรือไม่
- ตรวจสอบให้แน่ใจว่าชื่อธีมไม่ซ้ำกับธีมที่มีอยู่

**การเปิดใช้งานล้มเหลว (Activation fails)**
- ยืนยันว่าคุณมีสิทธิ์ผู้ดูแลระบบ (administrator permissions)
- ตรวจสอบว่าไดเรกทอรีของธีมสามารถอ่านได้โดย WordPress หรือไม่
- ตรวจสอบบันทึกข้อผิดพลาดของ WordPress เพื่อดูรายละเอียด

**Design tokens ไม่ถูกนำมาใช้**
- ตรวจสอบว่าไวยากรณ์ (syntax) ของ `theme.json` ถูกต้องหรือไม่
- ล้าง plugin ที่เกี่ยวข้องกับการแคช (caching plugins) ทั้งหมดออก
- ตรวจสอบว่าเวอร์ชัน WordPress ของคุณรองรับ design tokens ที่คุณใช้อยู่หรือไม่

## ขั้นตอนต่อไป (Next Steps) {#next-steps}

หลังจากเปิดใช้งานธีมของคุณแล้ว คุณสามารถ:
- ใช้ทักษะ **Design System Aesthetics skill** เพื่อปรับแต่งรูปแบบตัวอักษร สี และระยะห่าง
- ปรับแต่งสไตล์ของ block แต่ละอันผ่าน WordPress block editor
- เพิ่ม CSS ที่กำหนดเองในไฟล์ `style.css` ของธีม
- สร้าง template block แบบกำหนดเองสำหรับประเภทหน้า (page types) เฉพาะ
