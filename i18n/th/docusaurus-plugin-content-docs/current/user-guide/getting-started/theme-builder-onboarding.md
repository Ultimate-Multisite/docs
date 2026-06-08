---
title: กระบวนการเริ่มต้นใช้งาน Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# ขั้นตอนการเริ่มต้นใช้งาน Theme Builder

Superdav AI Agent v1.12.0 ได้เพิ่ม **ขั้นตอนการเริ่มต้นใช้งาน Theme Builder** แบบมีไกด์นำทาง ซึ่งจะช่วยให้คุณสร้างบล็อกธีม (block theme) แบบกำหนดเองได้ตั้งแต่ขั้นตอนการตั้งค่าครั้งแรก นี่เป็นการแทนที่โหมด Site Builder แบบเดิมด้วยแนวทางที่ยืดหยุ่นกว่าและมีผู้ช่วย AI เข้ามาช่วย

## Theme Builder Onboarding Flow คืออะไร?

Theme Builder Onboarding Flow คือเวิร์กช็อปการตั้งค่าแบบโต้ตอบ (interactive setup wizard) ที่จะ:

- นำทางคุณในการตัดสินใจด้านการออกแบบ (เช่น สี, รูปแบบตัวอักษร, โครงสร้าง)
- บันทึกความชอบด้านภาพลักษณ์ของเว็บไซต์ของคุณ
- สร้างบล็อกธีมแบบกำหนดเองที่ปรับให้เข้ากับความต้องการของคุณ
- เปิดใช้งานธีมโดยอัตโนมัติเมื่อเสร็จสมบูรณ์

ขั้นตอนการทำงานนี้ขับเคลื่อนโดย **Setup Assistant agent** ซึ่งจะถามคำถามเพื่อความชัดเจนและสร้างธีมของคุณทีละส่วน

## วิธีเริ่มต้น Theme Builder Onboarding

### การตั้งค่าครั้งแรก (First-Run Setup)

เมื่อคุณเปิด Superdav AI Agent บนการติดตั้ง WordPress ใหม่เป็นครั้งแรก คุณจะเห็น:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

ให้เลือก **"Build a custom theme"** เพื่อเข้าสู่ขั้นตอนการเริ่มต้นใช้งาน Theme Builder

### การเปิดใช้งานด้วยตนเอง (Manual Activation)

คุณยังสามารถเริ่ม Theme Builder onboarding ได้ทุกเมื่อโดยการร้องขอ:

```
"Start the Theme Builder onboarding"
```

หรือ

```
"Help me create a custom theme"
```

## ขั้นตอนการเริ่มต้นใช้งาน

### ขั้นตอนที่ 1: การเลือกโหมด (Mode Selection)

Setup Assistant agent จะสอบถามความต้องการของคุณ:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** แนะนำสำหรับผู้ใช้ส่วนใหญ่ เพราะ agent จะให้คำแนะนำด้านการออกแบบตามอุตสาหกรรมและเป้าหมายของคุณ

### ขั้นตอนที่ 2: การระบุรายละเอียดเว็บไซต์ (Site Specification)

คุณจะถูกถามเกี่ยวกับเว็บไซต์ของคุณ:

- **Site purpose**: เว็บไซต์สำหรับอีคอมเมิร์ซ, บล็อก, พอร์ตโฟลิโอ, SaaS ฯลฯ
- **Target audience**: ผู้เข้าชมของคุณคือใคร?
- **Brand colors**: สีหลักและสีรอง (หรือ "ไม่แน่ใจ")
- **Tone**: เป็นมืออาชีพ, สร้างสรรค์, ขี้เล่น, เรียบง่าย ฯลฯ

ข้อมูลเหล่านี้จะถูกจัดเก็บไว้ในหน่วยความจำ **site_brief** ของคุณ ซึ่ง agent จะใช้อ้างอิงในเซสชันถัดไป

### ขั้นตอนที่ 3: การตัดสินใจระบบดีไซน์ (Design System Decisions)

agent จะนำคุณผ่านการเลือกค่าดีไซน์ (design tokens) ต่างๆ:

- **Typography**: ตระกูลฟอนต์ (serif, sans-serif, monospace) และขนาดตัวอักษร
- **Color palette**: สีหลัก, สีรอง, สีเน้น (accent) และสีกลาง (neutral)
- **Spacing**: โครงสร้างแบบกระชับ, ปกติ หรือแบบมีพื้นที่ว่าง
- **Motion**: แอนิเมชันและการเปลี่ยนภาพ (ถ้าต้องการ)

### ขั้นตอนที่ 4: การสร้างธีม (Theme Generation)

Setup Assistant agent จะสร้างโครงร่าง (scaffold) ของบล็อกธีมแบบกำหนดเองของคุณด้วย:

- `theme.json` ที่มีค่าดีไซน์ (design tokens) ทั้งหมดของคุณ
- เทมเพลตบล็อกสำหรับโครงสร้างทั่วไป (หน้าแรก, บล็อก, ติดต่อ)
- สไตล์บล็อกที่กำหนดเองที่ตรงกับระบบดีไซน์ของคุณ
- เมตาข้อมูลธีมและการประกาศการรองรับ WordPress

### ขั้นตอนที่ 5: การเปิดใช้งานและการตรวจสอบ (Activation and Verification)

ธีมจะถูกเปิดใช้งานโดยอัตโนมัติ และคุณจะเห็น:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

จากนั้นคุณสามารถไปที่เว็บไซต์ของคุณเพื่อตรวจสอบว่าธีมแสดงผลอย่างถูกต้องหรือไม่

## Site Specification และหน่วยความจำ site_brief

ระหว่างการเริ่มต้นใช้งาน agent จะบันทึกรายละเอียดเว็บไซต์ของคุณไว้ในหมวดหมู่หน่วยความจำ **site_brief** ซึ่งรวมถึง:

- วัตถุประสงค์และเป้าหมายของเว็บไซต์
- กลุ่มเป้าหมาย
- สีและโทนของแบรนด์
- ความชอบด้านการออกแบบ
- โครงสร้างเนื้อหา

### ทำไม site_brief ถึงสำคัญ

ในเซสชันถัดไป agent จะอ้างอิง site_brief ของคุณเพื่อ:

- รักษาความสม่ำเสมอของการออกแบบแม้มีการเปลี่ยนแปลง
- แนะนำฟีเจอร์ที่สอดคล้องกับวัตถุประสงค์ของเว็บไซต์
- ให้คำแนะนำที่คำนึงถึงบริบท
- หลีกเลี่ยงการถามคำถามการตั้งค่าซ้ำๆ

### การดู site_brief ของคุณ

คุณสามารถถาม agent ได้ว่า:

```
"Show me my site brief"
```

หรือ

```
"What do you know about my site?"
```

agent จะแสดงรายละเอียดการตั้งค่าเว็บไซต์ที่คุณบันทึกไว้

## การปรับแต่งหลังการเริ่มต้นใช้งาน

หลังจากที่ Theme Builder onboarding เสร็จสมบูรณ์แล้ว คุณสามารถ:

### ใช้ Design System Aesthetics Skill

ร้องขอการปรับปรุงการออกแบบ:

```
"Refine the typography to be more modern"
```

หรือ

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** จะนำคุณไปสู่การอัปเดตการออกแบบที่เจาะจง

### แก้ไข theme.json โดยตรง

สำหรับผู้ใช้ขั้นสูง ให้แก้ไข `/wp-content/themes/[theme-name]/theme.json` เพื่อปรับ:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### สร้าง Custom Block Templates

ใช้ WordPress block editor เพื่อสร้างเทมเพลตแบบกำหนดเองสำหรับ:

- หน้าแรก (Homepage layouts)
- หน้าบทความบล็อก (Blog post pages)
- หน้าสินค้า (Product pages)
- แบบฟอร์มติดต่อ (Contact forms)

## เปรียบเทียบ: แบบเก่า vs. แบบใหม่

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## การแก้ไขปัญหา (Troubleshooting)

**ขั้นตอนการเริ่มต้นใช้งานไม่เสร็จสมบูรณ์**
- เริ่มต้นขั้นตอนใหม่: "Start the Theme Builder onboarding"
- ตรวจสอบว่าการติดตั้ง WordPress ของคุณเป็นเวอร์ชันล่าสุด
- ยืนยันว่า Setup Assistant agent ถูกเปิดใช้งานแล้ว

**site_brief ของฉันไม่ได้ถูกนำมาใช้**
- ยืนยันว่า agent สามารถเข้าถึงหน่วยความจำได้
- ขอให้ agent "recall my site brief"
- ตรวจสอบว่าหน่วยความจำถูกเปิดใช้งานในการตั้งค่าของคุณ

**ธีมที่สร้างขึ้นไม่ตรงกับความต้องการของฉัน**
- ใช้ Design System Aesthetics skill เพื่อปรับปรุง
- ขอให้ agent "regenerate the theme with [specific changes]"
- แก้ไข theme.json โดยตรงเพื่อควบคุมอย่างแม่นยำ

## ขั้นตอนต่อไป

หลังจากทำ Theme Builder onboarding เสร็จสมบูรณ์:

1. **ตรวจสอบเว็บไซต์ของคุณ**: เข้าไปที่เว็บไซต์เพื่อดูธีมใหม่
2. **ปรับปรุงการออกแบบ**: ใช้ Design System Aesthetics skill เพื่อปรับแต่ง
3. **เพิ่มเนื้อหา**: เริ่มสร้างเนื้อหาของเว็บไซต์คุณ
4. **สำรวจความสามารถ**: เรียนรู้เกี่ยวกับความสามารถของ agent อื่นๆ เช่น scaffold-block-theme และ activate-theme
