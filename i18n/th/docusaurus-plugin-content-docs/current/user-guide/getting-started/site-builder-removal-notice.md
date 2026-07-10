---
title: แจ้งเตือนการลบโหมด Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# ประกาศยกเลิก Site Builder mode {#site-builder-mode-removal-notice}

**โหมด Site Builder ถูกยกเลิกแล้วใน Superdav AI Agent v1.12.0** หากคุณเคยใช้ Site Builder mode คุณควรย้ายไปใช้ **Setup Assistant agent** แทนสำหรับการสร้างธีมและการตั้งค่าเว็บไซต์

## เกิดอะไรขึ้น? {#what-happened}

### Site Builder Mode (แบบเดิม) {#site-builder-mode-legacy}

Site Builder mode เป็นอินเทอร์เฟซแบบมีขั้นตอน (wizard-based interface) สำหรับ:

- การสร้างเว็บไซต์จากเทมเพลต
- การตั้งค่าพื้นฐาน
- การเลือกธีม
- การตั้งค่าเนื้อหาเริ่มต้น

### สิ่งที่เข้ามาแทนที่คืออะไร? {#what-replaced-it}

**Setup Assistant agent** จะเข้ามาจัดการฟังก์ชันทั้งหมดของ Site Builder โดยมีคุณสมบัติดังนี้:

- การตั้งค่าที่ยืดหยุ่นกว่า โดยมี agent คอยแนะนำ
- ตัวเลือกการปรับแต่งธีมที่ดีกว่า
- การผสานรวมกับ Theme Builder onboarding
- หน่วยความจำ site_brief ที่คงอยู่สำหรับการใช้งานในครั้งถัดไป

## หากคุณเคยใช้ Site Builder Mode {#if-you-were-using-site-builder-mode}

### เว็บไซต์ของคุณปลอดภัยดี {#your-sites-are-safe}

- เว็บไซต์ที่มีอยู่ซึ่งสร้างด้วย Site Builder mode ยังคงใช้งานได้ตามปกติ
- ไม่มีข้อมูลสูญหายหรือการหยุดชะงักของเว็บไซต์
- คุณยังคงสามารถจัดการเว็บไซต์ของคุณได้ตามปกติ

### ย้ายไปใช้ Setup Assistant Agent {#migrate-to-setup-assistant-agent}

สำหรับการตั้งค่าเว็บไซต์ใหม่หรือการเปลี่ยนธีม ให้ใช้ Setup Assistant agent:

```
"Help me set up a new site"
```

หรือ

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent ให้ฟังก์ชันการทำงานแบบเดิม แต่มีความยืดหยุ่นมากกว่า

## เปรียบเทียบ: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (ยกเลิกแล้ว) | Setup Assistant (ใหม่) |
|---------|----------------------|----------------------|
| Setup method | แบบฟอร์มมีขั้นตอน (Wizard form) | การสนทนาของ Agent |
| Theme selection | เทมเพลตที่กำหนดไว้ล่วงหน้า | การสร้างแบบกำหนดเอง |
| Customization | ตัวเลือกจำกัด | ระบบการออกแบบเต็มรูปแบบ (Full design system) |
| Site brief | ไม่มีการจัดเก็บ | หน่วยความจำถาวร (Persistent memory) |
| Future sessions | ต้องตั้งค่าซ้ำ | ใช้ site_brief ที่จัดเก็บไว้ |
| Flexibility | ขั้นตอนคงที่ | การสนทนาที่ปรับเปลี่ยนได้ (Adaptive conversation) |

## การย้ายไปใช้ Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### สำหรับเว็บไซต์ใหม่ {#for-new-sites}

แทนที่จะใช้ Site Builder mode:

1. ขอความช่วยเหลือ: "Help me set up a new site"
2. Setup Assistant agent จะแนะนำคุณในเรื่อง:
   - วัตถุประสงค์และเป้าหมายของเว็บไซต์
   - กลุ่มเป้าหมาย
   - อัตลักษณ์ของแบรนด์ (Brand identity)
   - การสร้างธีม
   - การตั้งค่าเริ่มต้น

### สำหรับเว็บไซต์ที่มีอยู่แล้ว {#for-existing-sites}

หากคุณมีเว็บไซต์ที่มีอยู่ซึ่งสร้างด้วย Site Builder mode:

1. คุณยังสามารถใช้งานได้ตามเดิม
2. หากต้องการอัปเดตธีม ให้ขอความช่วยเหลือ: "Redesign my site"
3. Setup Assistant agent จะช่วยคุณสร้างธีมใหม่
4. ข้อมูลเว็บไซต์ของคุณจะไม่เปลี่ยนแปลง

### สำหรับการเปลี่ยนธีม {#for-theme-changes}

แทนที่จะใช้การเลือกธีมของ Site Builder mode:

1. ขอความช่วยเหลือ: "Change my theme"
2. Setup Assistant agent จะ:
   - สอบถามเกี่ยวกับความชอบด้านการออกแบบของคุณ
   - สร้างธีมแบบกำหนดเอง
   - เปิดใช้งานธีมนั้นบนเว็บไซต์ของคุณ

## ความแตกต่างที่สำคัญ {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. เลือกเทมเพลต
2. เลือกธีม
3. ตั้งค่าพื้นฐาน
4. เสร็จสิ้น
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. อธิบายวัตถุประสงค์ของเว็บไซต์
2. กำหนดกลุ่มเป้าหมาย
3. เลือกความชอบด้านการออกแบบ
4. Agent สร้างธีมแบบกำหนดเอง
5. Agent เปิดใช้งานธีม
6. จัดเก็บ site_brief สำหรับการใช้งานในอนาคต
```

## ประโยชน์ของ Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### ยืดหยุ่นกว่า {#more-flexible}

- อธิบายเว็บไซต์ของคุณด้วยภาษาธรรมชาติ
- รับคำแนะนำที่ปรับให้เหมาะสม
- ปรับให้เข้ากับความต้องการเฉพาะของคุณ

### ปรับแต่งได้ดีกว่า {#better-customization}

- การสร้างธีมแบบกำหนดเอง
- การตัดสินใจของระบบการออกแบบ (Design system decisions)
- การเก็บโทเค็นการออกแบบ (Persistent design tokens)

### หน่วยความจำถาวร {#persistent-memory}

- site_brief ของคุณจะถูกจัดเก็บไว้
- Agent ในอนาคตจะเข้าใจเว็บไซต์ของคุณ
- ไม่จำเป็นต้องทำซ้ำข้อมูลการตั้งค่า

### Workflow ที่ผสานรวมกัน {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- ทุกอย่างทำงานร่วมกันได้อย่างราบรื่น

## การแก้ไขปัญหา {#troubleshooting}

### ฉันหา Site Builder mode ไม่เจอ {#i-cant-find-site-builder-mode}

Site Builder mode ถูกยกเลิกแล้ว ให้ใช้ Setup Assistant agent แทน:

```
"Help me set up a new site"
```

### ฉันต้องการสร้างเว็บไซต์ใหม่จาก Site Builder {#i-want-to-recreate-a-site-from-site-builder}

คุณสามารถสร้างใหม่ได้ด้วย Setup Assistant agent:

1. ขอความช่วยเหลือ: "Help me set up a new site"
2. อธิบายวัตถุประสงค์และการออกแบบของเว็บไซต์เดิมของคุณ
3. agent จะสร้างธีมที่คล้ายกัน
4. site_brief ของคุณจะถูกจัดเก็บไว้เพื่อใช้อ้างอิงในอนาคต

### เว็บไซต์ Site Builder ที่มีอยู่ของฉันใช้งานไม่ได้ {#my-existing-site-builder-site-isnt-working}

เว็บไซต์ที่มีอยู่ซึ่งสร้างด้วย Site Builder mode ยังคงใช้งานได้ตามปกติ หากคุณพบปัญหา:

1. ตรวจสอบว่าธีมของคุณยังคงเปิดใช้งานอยู่
2. ตรวจสอบว่า plugins ของคุณเปิดใช้งานอยู่
3. ตรวจสอบบันทึกข้อผิดพลาดของ WordPress (WordPress error logs)
4. ติดต่อฝ่ายสนับสนุนหากปัญหายังคงอยู่

### ฉันยังใช้เทมเพลต Site Builder เก่าได้ไหม? {#can-i-still-use-my-old-site-builder-templates}

เทมเพลต Site Builder ไม่พร้อมใช้งานแล้ว อย่างไรก็ตาม:

- เว็บไซต์ที่มีอยู่ของคุณยังคงใช้งานได้
- คุณสามารถสร้างเว็บไซต์ที่คล้ายกันได้ด้วย Setup Assistant agent
- Setup Assistant agent มีตัวเลือกการปรับแต่งที่มากกว่า

## ขั้นตอนต่อไป {#next-steps}

1. **สำหรับเว็บไซต์ใหม่**: ใช้ Setup Assistant agent
2. **สำหรับเว็บไซต์ที่มีอยู่**: ใช้งานต่อไปตามเดิม
3. **สำหรับการเปลี่ยนธีม**: ขอความช่วยเหลือจาก Setup Assistant agent
4. **สำหรับการปรับปรุงการออกแบบ**: ใช้ Design System Aesthetics skill

## หัวข้อที่เกี่ยวข้อง {#related-topics}

- **Theme Builder Onboarding**: การตั้งค่าแบบแนะนำสำหรับธีมแบบกำหนดเอง
- **Setup Assistant Agent**: การตั้งค่าเว็บไซต์โดยใช้ agent
- **Site Specification Skill**: การกำหนดเป้าหมายและกลุ่มเป้าหมายของเว็บไซต์
- **Design System Aesthetics Skill**: การปรับปรุงอัตลักษณ์ทางภาพของเว็บไซต์
