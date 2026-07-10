---
title: ทักษะข้อกำหนดเว็บไซต์
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# ทักษะการกำหนดรายละเอียดเว็บไซต์ (Site Specification Skill) {#site-specification-skill}

**ทักษะการกำหนดรายละเอียดเว็บไซต์** เป็นแนวทางที่เป็นระบบในการรวบรวมเป้าหมาย กลุ่มเป้าหมาย และอัตลักษณ์ของแบรนด์ของเว็บไซต์ของคุณ ข้อมูลเหล่านี้จะถูกบันทึกไว้ในหน่วยความจำ **site_brief** ของคุณ ซึ่งเอเจนต์จะใช้อ้างอิงข้ามเซสชันต่างๆ เพื่อให้ความช่วยเหลือที่สม่ำเสมอและเข้าใจบริบทได้ดี

## การกำหนดรายละเอียดเว็บไซต์คืออะไร? {#what-is-site-specification}

การกำหนดรายละเอียดเว็บไซต์คือกระบวนการในการบันทึกข้อมูลเหล่านี้:

- **วัตถุประสงค์ของเว็บไซต์ (Site purpose)**: เว็บไซต์ของคุณทำอะไรและมีอยู่เพื่ออะไร
- **กลุ่มเป้าหมาย (Target audience)**: ใครคือผู้ที่เข้ามาเยี่ยมชมเว็บไซต์ของคุณและพวกเขาต้องการอะไร
- **อัตลักษณ์ของแบรนด์ (Brand identity)**: สี โทนเสียง และสไตล์ภาพของคุณ
- **เป้าหมายทางธุรกิจ (Business goals)**: ความสำเร็จของเว็บไซต์ของคุณมีหน้าตาเป็นอย่างไร
- **โครงสร้างเนื้อหา (Content structure)**: เว็บไซต์ของคุณมีการจัดระเบียบอย่างไร

ข้อมูลเหล่านี้จะกลายเป็น **site_brief** ของคุณ ซึ่งเป็นหน่วยความจำถาวรที่เอเจนต์ใช้เพื่อทำความเข้าใจบริบทของเว็บไซต์คุณ

## ทำไมต้องใช้การกำหนดรายละเอียดเว็บไซต์? {#why-use-site-specification}

### ความสม่ำเสมอข้ามเซสชัน {#consistency-across-sessions}

หากไม่มี site_brief คุณจะต้องอธิบายวัตถุประสงค์ของเว็บไซต์ของคุณซ้ำทุกครั้งที่เริ่มเซสชันใหม่ แต่เมื่อมีแล้ว เอเจนต์จะเข้าใจทันทีว่า:

- เป้าหมายและกลุ่มเป้าหมายของเว็บไซต์คุณคืออะไร
- สีและโทนเสียงของแบรนด์คุณคืออะไร
- โครงสร้างเนื้อหาของคุณเป็นอย่างไร
- วัตถุประสงค์ทางธุรกิจของคุณคืออะไร

### คำแนะนำที่ดีกว่า {#better-recommendations}

เอเจนต์จะใช้ site_brief ของคุณเพื่อ:

- แนะนำฟีเจอร์ที่สอดคล้องกับวัตถุประสงค์ของเว็บไซต์คุณ
- แนะนำโครงสร้างเนื้อหาที่ตรงกับเป้าหมายของคุณ
- เสนอการออกแบบที่สอดคล้องกับแบรนด์ของคุณ
- หลีกเลี่ยงการแนะนำฟีเจอร์ที่ไม่เข้ากัน

### การเริ่มต้นใช้งานที่รวดเร็วขึ้น {#faster-onboarding}

เอเจนต์ใหม่ (หรือเอเจนต์ในเซสชันใหม่) สามารถเรียนรู้ได้อย่างรวดเร็วโดยการอ่าน site_brief ของคุณ แทนที่จะต้องถามคำถามเพื่อขอความชัดเจน

## การเริ่มต้นกำหนดรายละเอียดเว็บไซต์ {#initiating-site-specification}

### ระหว่างการเริ่มต้นใช้งาน Theme Builder {#during-theme-builder-onboarding}

ทักษะการกำหนดรายละเอียดเว็บไซต์จะถูกเริ่มโดยอัตโนมัติในระหว่าง **ขั้นตอนการเริ่มต้นใช้งาน Theme Builder** เอเจนต์ Setup Assistant จะถามคำถามและสร้าง site_brief ของคุณ

### การเริ่มต้นด้วยตนเอง {#manual-initiation}

คุณสามารถเริ่มการกำหนดรายละเอียดเว็บไซต์ได้ตลอดเวลา:

```
"Let's define my site specification"
```

หรือ

```
"Help me create a site brief"
```

## กระบวนการกำหนดรายละเอียดเว็บไซต์ {#the-site-specification-process}

### ขั้นตอนที่ 1: วัตถุประสงค์ของเว็บไซต์ {#step-1-site-purpose}

เอเจนต์จะถามว่า:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

คุณสามารถเลือกหมวดหมู่หรืออธิบายวัตถุประสงค์ของคุณเองได้

### ขั้นตอนที่ 2: กลุ่มเป้าหมาย {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### ขั้นตอนที่ 3: อัตลักษณ์ของแบรนด์ {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### ขั้นตอนที่ 4: เป้าหมายทางธุรกิจ {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### ขั้นตอนที่ 5: โครงสร้างเนื้อหา {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## หน่วยความจำ site_brief ของคุณ {#your-sitebrief-memory}

หลังจากทำ Site Specification เสร็จสิ้น ข้อมูลของคุณจะถูกจัดเก็บเป็น **site_brief** ในหน่วยความจำของเอเจนต์ นี่คือบันทึกที่มีโครงสร้างซึ่งประกอบด้วย:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## การดูและการอัปเดต site_brief ของคุณ {#viewing-and-updating-your-sitebrief}

### ดู site_brief ของคุณ {#view-your-sitebrief}

ถามเอเจนต์ว่า:

```
"Show me my site brief"
```

หรือ

```
"What do you know about my site?"
```

เอเจนต์จะแสดงรายละเอียดที่คุณได้บันทึกไว้

### อัปเดต site_brief ของคุณ {#update-your-sitebrief}

หากเว็บไซต์ของคุณมีการเปลี่ยนแปลง คุณสามารถอัปเดตได้:

```
"Update my site brief: we're now targeting B2B customers"
```

หรือ

```
"Refresh my site specification"
```

สิ่งนี้จะรันทักษะ Site Specification ซ้ำ โดยใช้ข้อมูลเดิมของคุณเป็นจุดเริ่มต้น

## เอเจนต์ใช้ site_brief อย่างไร {#how-agents-use-sitebrief}

### คำแนะนำด้านการออกแบบ {#design-recommendations}

เมื่อคุณขอให้มีการเปลี่ยนแปลงการออกแบบ เอเจนต์จะอ้างอิง site_brief ของคุณ:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### การแนะนำฟีเจอร์ {#feature-suggestions}

เอเจนต์จะแนะนำฟีเจอร์ที่สอดคล้องกับเป้าหมายของคุณ:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### โครงสร้างเนื้อหา {#content-structure}

เอเจนต์จะเสนอการจัดระเบียบเนื้อหาตามโครงสร้างของคุณ:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## แนวทางปฏิบัติที่ดีที่สุด {#best-practices}

### ระบุให้ชัดเจน {#be-specific}

แทนที่จะใช้คำว่า "กลุ่มเป้าหมายทั่วไป" ให้ระบุกลุ่มเป้าหมายจริงของคุณ:

- ✓ "ผู้หญิงอายุ 25-45 ปี สนใจแฟชั่นที่ยั่งยืน"
- ✗ "ทุกคน"

### อัปเดตอย่างสม่ำเสมอ {#update-regularly}

เมื่อเว็บไซต์ของคุณมีการพัฒนา ให้ทำการอัปเดต site_brief:

- เมื่อคุณเปลี่ยนกลุ่มเป้าหมาย
- เมื่อคุณเพิ่มไลน์ผลิตภัณฑ์ใหม่
- เมื่ออัตลักษณ์ของแบรนด์ของคุณเปลี่ยนแปลง
- เมื่อเป้าหมายทางธุรกิจของคุณเปลี่ยนไป

### ใช้คำศัพท์ที่สม่ำเสมอ {#use-consistent-terminology}

ใช้คำศัพท์เดียวกันตลอดเซสชัน:

- ✓ พูดเสมอว่า "เครื่องประดับที่ยั่งยืน" (ไม่ใช้ "เครื่องประดับที่เป็นมิตรต่อสิ่งแวดล้อม" และ "ผลิตภัณฑ์สีเขียว")
- ✓ อ้างถึงกลุ่มเป้าหมายด้วยวิธีเดิมอย่างสม่ำเสมอ

### ใส่บริบท {#include-context}

ให้ข้อมูลพื้นฐานที่ช่วยให้เอเจนต์เข้าใจการตัดสินใจของคุณ:

- "เรากำลังกำหนดเป้าหมายไปที่มืออาชีพที่ให้ความสำคัญกับคุณภาพมากกว่าราคา"
- "กลุ่มเป้าหมายของเราเป็นกลุ่มที่เชี่ยวชาญด้านเทคโนโลยีและคาดหวังการออกแบบที่ทันสมัย"
- "เราเป็นสตาร์ทอัพที่ใช้เงินทุนส่วนตัว ดังนั้นเราจึงต้องการโซลูชันที่คุ้มค่า"

## ความสัมพันธ์กับ Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

ทักษะการกำหนดรายละเอียดเว็บไซต์ถูกรวมเข้ากับ **ขั้นตอนการเริ่มต้นใช้งาน Theme Builder** เมื่อคุณทำ Onboarding เสร็จสิ้น site_brief ของคุณจะถูกสร้างขึ้นโดยอัตโนมัติด้วยข้อมูลที่คุณให้ไว้

คุณยังสามารถรัน Site Specification ได้ด้วยตัวเองหากคุณต้องการ:

- ปรับปรุงรายละเอียดของคุณหลังจากตั้งค่าเริ่มต้น
- อัปเดต site brief เมื่อเว็บไซต์ของคุณมีการพัฒนา
- สร้างรายละเอียดที่ละเอียดก่อนเริ่ม Theme Builder

## การแก้ไขปัญหา {#troubleshooting}

**site_brief ของฉันไม่ได้ถูกใช้งาน**
- ยืนยันว่าเอเจนต์สามารถเข้าถึงหน่วยความจำได้
- ขอให้เอเจนต์ "เรียกดู site brief ของฉัน"
- ตรวจสอบว่าหน่วยความจำเปิดใช้งานอยู่ในส่วนการตั้งค่าของคุณหรือไม่

**ฉันต้องการเริ่มต้นใหม่ด้วย site_brief ใหม่**
- ถามเอเจนต์ว่า: "Clear my site brief and start fresh"
- จากนั้นรัน Site Specification อีกครั้ง

**เอเจนต์ให้คำแนะนำที่ไม่ตรงกับ site_brief ของฉัน**
- ขอให้เอเจนต์ "review my site brief"
- อัปเดต site_brief ของคุณหากมันล้าสมัย
- ให้บริบทเพิ่มเติมในการร้องขอของคุณ

## ขั้นตอนต่อไป {#next-steps}

หลังจากกำหนดรายละเอียดเว็บไซต์ของคุณแล้ว:

1. **ใช้ Theme Builder**: สร้างธีมที่กำหนดเองโดยอิงจาก site_brief ของคุณ
2. **ปรับปรุงการออกแบบ**: ใช้ Design System Aesthetics skill สำหรับงานออกแบบโดยละเอียด
3. **วางแผนเนื้อหา**: ขอให้เอเจนต์แนะนำโครงสร้างเนื้อหา
4. **สร้างฟีเจอร์**: ร้องขอฟีเจอร์ที่สอดคล้องกับเป้าหมายทางธุรกิจของคุณ
