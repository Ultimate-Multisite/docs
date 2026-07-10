---
title: ຮູບແບບການນໍາໃຊ້ Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# กระบวนการเริ่มต้นใช้งาน Theme Builder {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 ได้นำ **กระบวนการเริ่มต้นใช้งาน Theme Builder** ที่มีคำแนะนำมาให้ ซึ่งจะช่วยคุณสร้างธีมแบบบล็อกที่กำหนดเองระหว่างการตั้งค่าครั้งแรกของคุณ สิ่งนี้จะเข้ามาแทนที่โหมด Site Builder แบบเก่าด้วยแนวทางที่ยืดหยุ่นกว่าและได้รับความช่วยเหลือจากเอเจนต์

## กระบวนการเริ่มต้นใช้งาน Theme Builder คืออะไร? {#what-is-the-theme-builder-onboarding-flow}

กระบวนการเริ่มต้นใช้งาน Theme Builder เป็นวิซาร์ดตั้งค่าแบบโต้ตอบที่จะ:

- นำคุณผ่านการตัดสินใจด้านการออกแบบ (สี, รูปแบบตัวอักษร, เลย์เอาต์)
- เก็บความชอบด้านเอกลักษณ์ทางภาพของเว็บไซต์ของคุณ
- สร้างธีมแบบบล็อกที่กำหนดเองซึ่งปรับให้เข้ากับความต้องการของคุณ
- เปิดใช้งานธีมโดยอัตโนมัติเมื่อเสร็จสิ้น

กระบวนการนี้ขับเคลื่อนโดย **Setup Assistant agent** ซึ่งจะถามคำถามเพื่อชี้แจงและสร้างธีมของคุณไปทีละส่วน

## การเริ่มต้น Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### การตั้งค่าครั้งแรก (First-Run Setup) {#first-run-setup}

เมื่อคุณเปิด Superdav AI Agent เป็นครั้งแรกบน WordPress ที่ติดตั้งใหม่ คุณจะเห็น:

```
ยินดีต้อนรับสู่ Superdav AI Agent!

คุณต้องการทำอะไร?
1. สร้างธีมแบบกำหนดเอง (Theme Builder)
2. ใช้ธีมที่มีอยู่
3. ข้ามการตั้งค่าไปก่อน
```

เลือก **"สร้างธีมแบบกำหนดเอง"** เพื่อเข้าสู่กระบวนการเริ่มต้นใช้งาน Theme Builder

### การเปิดใช้งานด้วยตนเอง (Manual Activation) {#manual-activation}

คุณยังสามารถเริ่มกระบวนการเริ่มต้นใช้งาน Theme Builder ได้ทุกเมื่อโดยการร้องขอ:

```
"Start the Theme Builder onboarding"
```

หรือ

```
"Help me create a custom theme"
```

## ขั้นตอนการเริ่มต้นใช้งาน {#the-onboarding-steps}

### ขั้นตอนที่ 1: การเลือกโหมด (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent จะถามเกี่ยวกับความชอบของคุณ:

```
คุณต้องการสร้างธีมของคุณอย่างไร?
- แบบมีคำแนะนำ (ฉันจะถามคำถามและสร้างให้คุณ)
- แบบลงมือทำเอง (ฉันจะแสดงตัวเลือกให้คุณตัดสินใจ)
```

**โหมดแบบมีคำแนะนำ (Guided mode)** แนะนำสำหรับผู้ใช้ส่วนใหญ่ โดยเอเจนต์จะให้คำแนะนำด้านการออกแบบตามอุตสาหกรรมและเป้าหมายของคุณ

### ขั้นตอนที่ 2: การระบุรายละเอียดเว็บไซต์ (Site Specification) {#step-2-site-specification}

คุณจะถูกถามเกี่ยวกับเว็บไซต์ของคุณ:

- **วัตถุประสงค์ของเว็บไซต์**: E-commerce, บล็อก, แฟปอร์ตโฟลิโอ, SaaS ฯลฯ
- **กลุ่มเป้าหมาย**: ผู้เข้าชมของคุณคือใคร?
- **สีแบรนด์**: สีหลักและสีรอง (หรือ "ไม่แน่ใจ")
- **น้ำเสียง**: เป็นมืออาชีพ, สร้างสรรค์, ขี้เล่น, เรียบง่าย ฯลฯ

ข้อมูลเหล่านี้จะถูกเก็บไว้ในหน่วยความจำที่ชื่อว่า **site_brief** ซึ่งเอเจนต์ต่างๆ จะใช้อ้างอิงในการทำงานในเซสชันถัดไป

### ขั้นตอนที่ 3: การตัดสินใจเกี่ยวกับ Design System {#step-3-design-system-decisions}

เอเจนต์จะแนะนำคุณในการเลือก design token ต่างๆ ดังนี้:

- **Typography (รูปแบบตัวอักษร)**: ตระกูลฟอนต์ (serif, sans-serif, monospace) และขนาดของตัวอักษร
- **Color palette (ชุดสี)**: สีหลัก, สีรอง, สีเน้น (accent), และสีกลาง (neutral colors)
- **Spacing (ระยะห่าง)**: การจัดวางแบบกระชับ, ปกติ, หรือแบบมีพื้นที่เยอะๆ
- **Motion (การเคลื่อนไหว)**: แอนิเมชันและการเปลี่ยนฉาก (ถ้าต้องการ)

### ขั้นตอนที่ 4: การสร้าง Theme {#step-4-theme-generation}

เอเจนต์ Setup Assistant จะช่วยคุณสร้าง custom block theme โดยมีสิ่งเหล่านี้รวมอยู่ด้วย:

- `theme.json` ที่เก็บ design tokens ทั้งหมดของคุณ
- Template ของ Block สำหรับเลย์เอาต์ทั่วไป (หน้าแรก, บล็อก, ติดต่อ)
- สไตล์ของ Block ที่ปรับให้เข้ากับ design system ของคุณ
- ข้อมูลเมตาของ Theme และการประกาศรองรับ WordPress

### ขั้นตอนที่ 5: การเปิดใช้งานและการตรวจสอบ {#step-5-activation-and-verification}

Theme จะถูกเปิดใช้งานโดยอัตโนมัติ และคุณจะเห็นข้อความดังนี้:

```
✓ Theme ของคุณพร้อมใช้งานแล้ว!
  ชื่อ Theme: [ชื่อเว็บไซต์ของคุณ] Theme
  สี: [สีหลัก] / [สีรอง]
  รูปแบบตัวอักษร: [ตระกูลฟอนต์]

  ไปที่เว็บไซต์ของคุณเพื่อดูดีไซน์ใหม่ได้เลยครับ/ค่ะ
```

จากนั้น คุณสามารถเข้าไปที่เว็บไซต์ของคุณเพื่อตรวจสอบว่า theme แสดงผลถูกต้องหรือไม่

## ข้อกำหนดของเว็บไซต์และหน่วยความจำ site_brief {#site-specification-and-sitebrief-memory}

ระหว่างขั้นตอนการเริ่มต้นใช้งาน เอเจนต์จะบันทึกข้อกำหนดของเว็บไซต์ของคุณไว้ในหมวดหมู่หน่วยความจำ **site_brief** ซึ่งประกอบด้วย:

- วัตถุประสงค์และเป้าหมายของเว็บไซต์
- กลุ่มเป้าหมาย
- สีแบรนด์และน้ำเสียง (tone)
- ความชอบด้านการออกแบบ
- โครงสร้างเนื้อหา

### ทำไม site_brief ถึงสำคัญ {#why-sitebrief-matters}

ในเซสชันถัดไป เอเจนต์จะใช้อ้างอิง site_brief ของคุณเพื่อ:

### การดูสรุปข้อมูลเว็บไซต์ของคุณ (Viewing Your site_brief) {#viewing-your-sitebrief}

คุณสามารถถามเอเจนต์ได้ว่า:

```
"Show me my site brief"
```

หรือ

```
"What do you know about my site?"
```

เอเจนต์จะแสดงรายละเอียดสเปคของเว็บไซต์ที่คุณบันทึกไว้ให้ดูครับ/ค่ะ

## การปรับแต่งหลังจากตั้งค่าเสร็จสิ้น (Customizing After Onboarding) {#customizing-after-onboarding}

หลังจากที่การตั้งค่า Theme Builder เสร็จสมบูรณ์แล้ว คุณสามารถทำสิ่งเหล่านี้ได้:

### ใช้ทักษะด้านความสวยงามของ Design System (Use the Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

ขอให้ปรับปรุงดีไซน์ เช่น:

```
"Refine the typography to be more modern"
```

หรือ

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** จะช่วยแนะนำคุณในการอัปเดตดีไซน์ตามที่คุณต้องการครับ/ค่ะ

### แก้ไขไฟล์ theme.json โดยตรง (Edit theme.json Directly) {#edit-themejson-directly}

สำหรับผู้ใช้ขั้นสูง สามารถแก้ไขไฟล์ `/wp-content/themes/[theme-name]/theme.json` เพื่อปรับเปลี่ยน:

- color tokens (ค่าสีหลักๆ)
- typography scales (ระดับขนาดตัวอักษร)
- spacing values (ระยะห่างต่างๆ)
- border and shadow definitions (การกำหนดขอบและเงา)

### สร้างแม่แบบบล็อกที่กำหนดเอง (Create Custom Block Templates) {#create-custom-block-templates}

ใช้ WordPress block editor เพื่อสร้างแม่แบบสำหรับ:

- homepage layouts (รูปแบบหน้าแรก)
- blog post pages (หน้าบทความบล็อก)
- product pages (หน้ารายละเอียดสินค้า)
- contact forms (ฟอร์มติดต่อ)

## การเปรียบเทียบ: แบบเก่ากับแบบใหม่ในการตั้งค่า (Comparison: Old vs. New Onboarding) {#comparison-old-vs-new-onboarding}

| คุณสมบัติ | Site Builder (แบบเก่า) | Theme Builder (แบบใหม่) |
|---|---|---|
| วิธีการตั้งค่า | ฟอร์มตามขั้นตอน (Wizard-based form) | การสนทนาที่เอเจนต์แนะนำ (Agent-guided conversation) |
| การสร้างธีม | แม่แบบจำกัด (Limited templates) | โครงสร้างพื้นฐานที่ปรับแต่งได้เอง (Custom scaffolding) |
| Design tokens | กรอกด้วยตนเอง (Manual entry) | การตัดสินใจที่มีคำแนะนำ (Guided decisions) |
| ความยืดหยุ่น | ตัวเลือกคงที่ (Fixed options) | ปรับแต่งได้ (Customizable) |
| การอัปเดตในอนาคต | ไม่มีการอ้างอิง (Not referenced) | ถูกเก็บไว้ใน site_brief |

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

**การตั้งค่าไม่เสร็จสมบูรณ์ (The onboarding flow didn't complete)**
- เริ่มต้นใหม่: "Start the Theme Builder onboarding"
- ตรวจสอบว่า WordPress ของคุณอัปเดตเป็นเวอร์ชันล่าสุดแล้วหรือไม่
- ตรวจสอบให้แน่ใจว่า Setup Assistant agent เปิดใช้งานอยู่

**site_brief ຂອງຂ້ອຍບໍ່ຖືກນຳໃຊ້**
- ກວດສອບວ່າ Agent ມີການເຂົ້າເຖິງ memory (ຄວາມຈຳ) ແລ້ວຫຼືບໍ່
- ຂໍໃຫ້ Agent "recall my site brief" (ເອົາຂໍ້ມູນ site brief ຂອງຂ້ອຍມາ)
- ກວດສອບວ່າ memory ໄດ້ຖືກເປີດໃຊ້ໃນການຕັ້ງຄ່າຂອງທ່ານແລ້ວ

**Theme ທີ່ສ້າງຂຶ້ນບໍ່ກົງກັບຄວາມມັກຂອງຂ້ອຍ**
- ໃຊ້ skill Design System Aesthetics ເພື່ອປັບປຸງມັນໃຫ້ດີຂຶ້ນ
- ຂໍໃຫ້ Agent "regenerate the theme with [specific changes]" (ສ້າງ theme ໃໝ່ດ້ວຍການປ່ຽນແປງສະເພາະ)
- ແກ້ໄຂ file theme.json ໂດຍກົງເພື່ອຄວບຄຸມຢ່າງຊັດເຈນ

## ຂັ້ນຕອນຕໍ່ໄປ {#next-steps}

ຫຼັງຈາກເຮັດ Theme Builder onboarding ແລ້ວ:

1. **ກວດສອບ website ຂອງທ່ານ**: ເຂົ້າໄປທີ່ website ຂອງເຈົ້າເພື່ອເບິ່ງ theme ໃໝ່
2. **ປັບປຸງການອອກແບບ**: ໃຊ້ skill Design System Aesthetics ເພື່ອປັບແຕ່ງຕາມຄວາມຕ້ອງການ
3. **ເພີ່ມເນື້ອຫາ**: ເລີ່ມສ້າງເນື້ອໃນໃຫ້ website ຂອງເຈົ້າ
4. **ສຳຫຼວດຄວາມສາມາດອື່ນໆ**: ຮຽນຮູ້ກ່ຽວກັບຄວາມສາມາດອື່ນໆຂອງ Agent ເຊັ່ນ scaffold-block-theme ແລະ activate-theme
