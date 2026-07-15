---
title: ការជូនដំណឹងអំពីការលុបចោលរបៀប Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# ประกาศการนำโหมด Site Builder ออก

**โหมด Site Builder ได้ถูกนำออกใน Superdav AI Agent v1.12.0 แล้ว** หากคุณเคยใช้โหมด Site Builder คุณควรย้ายไปใช้ **Setup Assistant agent** สำหรับการสร้างธีมและการตั้งค่าเว็บไซต์แทนครับ/ค่ะ

## เกิดอะไรขึ้น? {#what-happened}

### โหมด Site Builder (แบบเก่า) {#site-builder-mode-legacy}

Site Builder mode เป็นอินเทอร์เฟซที่ทำงานเหมือนขั้นตอน (wizard-based interface) สำหรับ:

- การสร้างเว็บไซต์จากเทมเพลต
- การกำหนดค่าการตั้งค่าพื้นฐาน
- การเลือกธีม
- การตั้งค่าเนื้อหาเริ่มต้น

### สิ่งที่เข้ามาแทน? {#what-replaced-it}

**Setup Assistant agent** ตอนนี้จัดการฟังก์ชันทั้งหมดของ Site Builder ด้วย:

- การตั้งค่าที่ยืดหยุ่นกว่าและนำทางโดย Agent
- ตัวเลือกการปรับแต่งธีมที่ดีขึ้น
- การผสานรวมกับการแนะนำ Theme Builder
- หน่วยความจำ site_brief ที่คงอยู่สำหรับการใช้งานในครั้งต่อไป

## หากคุณเคยใช้ Site Builder Mode {#if-you-were-using-site-builder-mode}

### เว็บไซต์ของคุณยังปลอดภัย {#your-sites-are-safe}

- เว็บไซต์ที่มีอยู่ซึ่งสร้างด้วย Site Builder mode ยังคงทำงานได้ตามปกติ
- ไม่มีข้อมูลสูญหายหรือการขัดข้องของเว็บไซต์
- คุณสามารถจัดการเว็บไซต์ของคุณได้ตามปกติ

### ย้ายไปใช้ Setup Assistant Agent {#migrate-to-setup-assistant-agent}

สำหรับการตั้งค่าเว็บไซต์ใหม่หรือการเปลี่ยนแปลงธีม ให้ใช้ Setup Assistant agent:

```
"Help me set up a new site"
```

หรือ

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent มีฟังก์ชันที่เหมือนเดิมแต่มีความยืดหยุ่นมากขึ้นครับ/ค่ะ

## การเปรียบเทียบ: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| คุณสมบัติ | Site Builder (ถูกนำออก) | Setup Assistant (ใหม่) |
|---|---|---|
| วิธีการตั้งค่า | แบบฟอร์ม Wizard | การสนทนากับ Agent |
| การเลือกธีม | เทมเพลตที่กำหนดไว้ล่วงหน้า | การสร้างแบบกำหนดเอง |
| การปรับแต่ง | ตัวเลือกจำกัด | ระบบออกแบบเต็มรูปแบบ |
| site brief | ไม่มีการจัดเก็บ | หน่วยความจำที่คงอยู่ |
| เซสชันในอนาคต | ตั้งค่าซ้ำ | ใช้ site_brief ที่บันทึกไว้ |
| ความยืดหยุ่น | เวิร์กโฟลว์แบบตายตัว | การสนทนาที่ปรับเปลี่ยนได้ |

## การย้ายไปใช้ Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### สำหรับเว็บไซต์ใหม่ {#for-new-sites}

ជំនួសការប្រើប្រាស់ Site Builder mode៖

១. ការស្នើសុំ៖ "ជួយខ្ញុំរៀបចំគេហទំព័រថ្មី"
២. Setup Assistant agent នឹងណែនាំអ្នកឆ្លងកាត់៖
   - គោលបំណង និង目標 (goals) នៃគេហទំព័រ
   - អ្នកប្រើប្រាស់គោលដៅ (Target audience)
   - អត្តសញ្ញាណម៉ាកយីហោ (Brand identity)
   - ការបង្កើត Theme
   - ការកំណត់រចនាសម្ព័ន្ធដំបូង

### សម្រាប់គេហទំព័រដែលមានស្រាប់ {#for-existing-sites}

ប្រសិនបើអ្នកមានគេហទំព័រដែលមានស្រាប់ពី Site Builder mode៖

១. អ្នកអាចបន្តប្រើវាដូចដើមបាន
២. ដើម្បីធ្វើបច្ចុប្បន្នភាព Theme សូមស្នើសុំថា៖ "រចនាគេហទំព័ររបស់ខ្ញុំឡើងវិញ" (Redesign my site)
៣. Setup Assistant agent នឹងជួយអ្នកបង្កើត Theme ថ្មីមួយ
៤. ទិន្នន័យគេហទំព័ររបស់អ្នកនៅតែមិនផ្លាស់ប្តូរ

### សម្រាប់ការផ្លាស់ប្តូរ Theme {#for-theme-changes}

ជំនួសការជ្រើសរើស Theme នៅក្នុង Site Builder mode៖

១. ការស្នើសុំថា៖ "ផ្លាស់ប្តូរ Theme របស់ខ្ញុំ" (Change my theme)
២. Setup Assistant agent នឹងធ្វើដូចខាងក្រោម៖
   - សួរអំពីចំណូលចិត្តនៃការរចនារបស់អ្នក
   - បង្កើត Theme ដែលអ្នកផ្ទាល់ (custom theme)
   - ដំណើរការវាលើគេហទំព័ររបស់អ្នក

## ភាពខុសគ្នាសំខាន់ៗ {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
១. ជ្រើសរើស template
២. ជ្រើសរើស theme
៣. កំណត់ការកំណត់មូលដ្ឋាន (Configure basic settings)
៤. បញ្ចប់
```

### Setup Assistant Agent {#setup-assistant-agent}

```
១. រៀបរាប់ពីគោលបំណងនៃគេហទំព័ររបស់អ្នក
២. កំណត់អ្នកប្រើប្រាស់គោលដៅរបស់អ្នក
៣. ជ្រើសរើសចំណូលចិត្តនៃការរចនា
៤. Agent បង្កើត theme ដែលអ្នកផ្ទាល់ (custom theme)
៥. Agent ដំណើរការ theme នៅលើគេហទំព័រ
៦. សេចក្តីសង្ខេបគេហទំព័រត្រូវបានរក្សាទុកសម្រាប់ការប្រើប្រាស់លើវគ្គក្រោយៗទៀត
```

## អត្ថប្រយោជន៍នៃ Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### មានភាពបត់បែនជាងមុន (More Flexible) {#more-flexible}

- រៀបរាប់ពីគេហទំព័ររបស់អ្នកដោយប្រើភាសាធម្មជាតិ
- ទទួលបានការណែនាំដែលអ្នកផ្ទាល់បង្កើតឡើង
- សម្របខ្លួនទៅតាមតម្រូវការជាក់លាក់របស់អ្នក

### ការកែសម្រួលកាន់តែប្រសើរ (Better Customization) {#better-customization}

- បង្កើត theme ដែលអ្នកផ្ទាល់
- ការសម្រេចចិត្តលើ Design system
- design tokens ដែលជាប់បានយូរអង្វែង (Persistent design tokens)

### ការចងចាំជាប់បានយូរ (Persistent Memory) {#persistent-memory}

- site_brief របស់អ្នកត្រូវបានរក្សាទុក
- Agent នាពេលអនាគតនឹងយល់ពីគេហទំព័ររបស់អ្នក
- មិនបាច់និយាយឡើងវិញនូវព័ត៌មាននៃការរៀបចំទេ

### ដំណើរការរួមបញ្ចូលគ្នា (Integrated Workflow) {#integrated-workflow}

- ការណែនាំអំពី Theme Builder
- សមត្ថភាពផ្នែក Aesthetics នៃ Design System
- សមត្ថភាពគ្រប់គ្រង Visibility controls
- រាល់ការងារទាំងអស់ដំណើរការជាមួយគ្នាដោយគ្មានបញ្ហា

## ការដោះស្រាយបញ្ហា (Troubleshooting) {#troubleshooting}

### ខ្ញុំរកមិនឃើញ Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode ត្រូវបានលុបចេញហើយ។ សូមប្រើ Setup Assistant agent ជំនួសវិញ៖

"ช่วยฉันตั้งค่าเว็บไซต์ใหม่หน่อย"

### ฉันต้องการสร้างเว็บไซต์ใหม่จาก Site Builder {#i-want-to-recreate-a-site-from-site-builder}

คุณสามารถสร้างมันขึ้นมาใหม่ได้ด้วย Setup Assistant agent:

1. ขอความช่วยเหลือ: "Help me set up a new site" (ช่วยฉันตั้งค่าเว็บไซต์ใหม่หน่อย)
2. อธิบายวัตถุประสงค์และการออกแบบของเว็บไซต์เดิมของคุณ
3. Agent จะสร้างธีมที่คล้ายกันให้คุณ
4. ข้อมูลสรุปไซต์ (site_brief) ของคุณจะถูกเก็บไว้เพื่อใช้อ้างอิงในอนาคต

### เว็บไซต์ Site Builder ที่มีอยู่ของฉันใช้งานไม่ได้ {#my-existing-site-builder-site-isnt-working}

เว็บไซต์ที่สร้างขึ้นด้วยโหมด Site Builder ยังคงใช้งานได้ หากคุณประสบปัญหา:

1. ตรวจสอบว่าธีมของคุณยังเปิดใช้งานอยู่หรือไม่
2. ตรวจสอบว่าปลั๊กอินของคุณถูกเปิดใช้งานแล้ว
3. ตรวจสอบบันทึกข้อผิดพลาดของ WordPress (WordPress error logs)
4. ติดต่อฝ่ายสนับสนุนหากปัญหายังคงอยู่

### ฉันยังสามารถใช้เทมเพลต Site Builder เก่าๆ ได้ไหม? {#can-i-still-use-my-old-site-builder-templates}

เทมเพลต Site Builder ไม่พร้อมใช้งานแล้ว อย่างไรก็ตาม:

- เว็บไซต์ที่มีอยู่ของคุณยังคงใช้งานได้
- คุณสามารถสร้างเว็บไซต์ที่คล้ายกันขึ้นมาใหม่ด้วย Setup Assistant agent
- Setup Assistant agent มีตัวเลือกในการปรับแต่งให้มากขึ้น

## ขั้นตอนต่อไป (Next Steps) {#next-steps}

1. **สำหรับเว็บไซต์ใหม่**: ใช้ Setup Assistant agent
2. **สำหรับเว็บไซต์ที่มีอยู่แล้ว**: ใช้ต่อไปตามเดิมได้เลย
3. **สำหรับการเปลี่ยนแปลงธีม**: ขอความช่วยเหลือจาก Setup Assistant agent
4. **สำหรับการปรับปรุงการออกแบบ**: ใช้ทักษะ Design System Aesthetics

## หัวข้อที่เกี่ยวข้อง (Related Topics) {#related-topics}

- **Theme Builder Onboarding**: การตั้งค่าแบบมีคำแนะนำสำหรับธีมที่กำหนดเอง
- **Setup Assistant Agent**: การตั้งค่าเว็บไซต์โดยมี Agent เป็นผู้แนะนำ
- **Site Specification Skill**: กำหนดเป้าหมายและกลุ่มเป้าหมายของเว็บไซต์คุณ
- **Design System Aesthetics Skill**: ปรับปรุงเอกลักษณ์ทางภาพของเว็บไซต์ของคุณ
