---
title: 'บทเรียนที่ 5: การออกแบบแผนของคุณ'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# บทที่ 5: การออกแบบแผนบริการของคุณ

ระดับแผนบริการของคุณไม่ได้เป็นเพียงแค่ระดับราคาเท่านั้น แต่ยังสะท้อนให้เห็นว่ากลุ่มลูกค้าเฉพาะทางของคุณดำเนินธุรกิจอย่างไร ในบทเรียนนี้ คุณจะได้ออกแบบระดับผลิตภัณฑ์ที่ตอบโจทย์ความต้องการที่แท้จริงของธุรกิจฟิตเนสในแต่ละช่วงของการเติบโต

## จุดที่เราทิ้งไว้ {#where-we-left-off}

FitSite มีเทมเพลตให้พร้อม 3 แบบ (Studio Essential, Gym Pro, Fitness Chain) ตอนนี้เราจะมาสร้างแผนบริการที่จะกำหนดว่าลูกค้าจะเข้าถึงอะไรได้บ้าง และต้องจ่ายเงินเท่าไหร่

## การคิดในแง่ของกลุ่มลูกค้า {#thinking-in-customer-segments}

ข้อผิดพลาดที่คนส่วนใหญ่มักทำคือการออกแบบแผนบริการโดยอิงจากคุณสมบัติทางเทคนิค (เช่น พื้นที่จัดเก็บข้อมูล, แบนด์วิดท์, จำนวนหน้า) แต่กลุ่มลูกค้าเป้าหมายของคุณไม่ได้คิดในแง่นั้น เจ้าของยิมจะคิดถึงสิ่งที่พวกเขาต้องใช้ในการดำเนินธุรกิจ

สำหรับสตูดิโอฟิตเนส มีกลุ่มลูกค้าตามธรรมชาติ 3 กลุ่ม:

| กลุ่มลูกค้า | พวกเขาคือใคร | พวกเขาต้องการอะไร |
|---------|-------------|----------------|
| **เทรนเนอร์อิสระ / สตูดิโอขนาดเล็ก** | พนักงาน 1-3 คน, ทำเลเดียว, เพิ่งเริ่มต้น | เว็บไซต์แบบมืออาชีพ, ข้อมูลคลาส, แบบฟอร์มติดต่อ |
| **ยิมที่มั่นคงแล้ว** | พนักงาน 5-20 คน, ทำเลเดียว, กำลังเติบโต | ทุกอย่างที่กล่าวมาข้างต้น บวกกับการจองคลาส, บล็อก, แกลเลอรี, โดเมนแบบกำหนดเอง |
| **เครือฟิตเนส** | หลายสาขา, แบรนด์ที่มั่นคงแล้ว | ทุกอย่างที่กล่าวมาข้างต้น บวกกับระบบหลายไซต์, หน้าข้อมูลสาขา, รายชื่อพนักงาน |

แผนบริการของคุณควรจะสอดคล้องกับกลุ่มลูกค้าเหล่านี้ ไม่ใช่การรวมคุณสมบัติแบบสุ่ม

## การสร้างแผนบริการ FitSite {#creating-the-fitsite-plans}

ไปที่ **Ultimate Multisite > Products > Add Product** สำหรับแต่ละแผน

### แผนที่ 1: FitSite Starter -- $49/เดือน {#plan-1-fitsite-starter----49month}

**กลุ่มเป้าหมาย**: เทรนเนอร์อิสระและสตูดิโอขนาดเล็ก

**แท็บ Description**:
- Name: FitSite Starter
- Description: "ทุกสิ่งที่เทรนเนอร์ส่วนตัวหรือสตูดิโอขนาดเล็กต้องการเพื่อให้ดูเป็นมืออาชีพทางออนไลน์"

**แท็บ General**:
- Product type: Plan
- Customer role: Administrator

**แท็บ Site Templates**:
- Allow site templates: Enabled
- Available templates: Studio Essential เท่านั้น

**ข้อจำกัด (Limitations)**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (ใช้รูปแบบ `studioname.fitsite.com`)

**แท็บ Plugins**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (เป็นแรงจูงใจในการอัปเกรด)

**แท็บ Themes**:
- Your selected theme: Force Activate
- All other themes: Hidden

### แผนที่ 2: FitSite Growth -- $99/เดือน {#plan-2-fitsite-growth----99month}

**กลุ่มเป้าหมาย**: ยิมขนาดใหญ่ที่ตั้งในทำเลเดียว

**แท็บ Description**:
- Name: FitSite Growth
- Description: "สำหรับยิมที่มั่นคงแล้วและพร้อมที่จะขยายการปรากฏตัวทางออนไลน์และดึงดูดสมาชิกใหม่"

**แท็บ Site Templates**:
- Available templates: Studio Essential และ Gym Pro

**ข้อจำกัด (Limitations)**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**แท็บ Plugins**:
- ทุกอย่างใน Starter, บวกกับ:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**แท็บ Up & Downgrades**:
- Plan group: FitSite Plans
- Product order: 2

### แผนที่ 3: FitSite Pro -- $199/เดือน {#plan-3-fitsite-pro----199month}

**กลุ่มเป้าหมาย**: เครือฟิตเนสหลายสาขา

**แท็บ Description**:
- Name: FitSite Pro
- Description: "แพลตฟอร์มที่สมบูรณ์แบบสำหรับแบรนด์ฟิตเนสที่มีหลายสาขา"

**แท็บ Site Templates**:
- Available templates: ทั้งสามเทมเพลต

**ข้อจำกัด (Limitations)**:
- Sites: 5 (สาขาละ 1 แห่ง)
- Disk space: 20 GB
- Custom domain: Enabled

**แท็บ Plugins**:
- ทุกอย่างใน Growth, บวกกับ:
- All premium plugins: Force Activate

**แท็บ Up & Downgrades**:
- Plan group: FitSite Plans
- Product order: 3

## การตั้งค่ากลุ่มแผนบริการ (Plan Group) {#setting-up-the-plan-group}

การตั้งค่ากลุ่มแผนบริการจะช่วยให้แน่ใจว่าลูกค้าสามารถอัปเกรดหรือดาวน์เกรดได้เฉพาะภายในกลุ่มแผนบริการ FitSite เท่านั้น ในแท็บ **Up & Downgrades** ของแต่ละแผน:

1. ตั้งค่า **Plan Group** เป็น "FitSite Plans" สำหรับทั้งสามแผน
2. ตั้งค่า **Product Order** เป็น 1 (Starter), 2 (Growth), 3 (Pro)

สิ่งนี้จะสร้างเส้นทางการอัปเกรดที่ชัดเจน: Starter → Growth → Pro

## การเพิ่ม Order Bumps {#adding-order-bumps}

Order bumps คือผลิตภัณฑ์เสริมที่เสนอระหว่างขั้นตอนการชำระเงิน สำหรับ FitSite คุณควรพิจารณาสิ่งเหล่านี้:

- **Extra Storage Pack** ($19/เดือน) -- พื้นที่จัดเก็บข้อมูลเพิ่มเติม 5 GB
- **Priority Support** ($29/เดือน) -- การตอบกลับที่รวดเร็วยิ่งขึ้น
- **Additional Site** ($39/เดือน) -- สำหรับลูกค้าที่ต้องการไซต์มากกว่าที่แผนบริการอนุญาต

ให้สร้างสิ่งเหล่านี้เป็นผลิตภัณฑ์ประเภท **Package** ใน Ultimate Multisite และเชื่อมโยงกับแผนบริการที่เกี่ยวข้อง

## เหตุผลที่โครงสร้างนี้ใช้งานได้ผล {#why-this-structure-works}

- **Starter** ช่วยลดอุปสรรคในการเริ่มต้น -- ราคาต่ำ, ข้อเสนอเรียบง่าย, ทำให้เทรนเนอร์ออนไลน์ได้อย่างรวดเร็ว
- **Growth** เพิ่มคุณสมบัติที่ยิมต้องการจริง -- การจองคลาส, แกลเลอรี, โดเมนแบบกำหนดเอง
- **Pro** รองรับกลุ่มลูกค้าที่มีมูลค่าสูงที่ต้องการระบบหลายสาขา
- **Order bumps** ช่วยให้ลูกค้าปรับแต่งได้โดยไม่ทำให้แผนหลักซับซ้อน
- **เส้นทางการอัปเกรดที่ชัดเจน** หมายความว่าลูกค้าจะเติบโตไปพร้อมกับคุณแทนที่จะจากไป

## ภาพรวมเครือข่าย FitSite จนถึงตอนนี้ {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## สิ่งที่เราสร้างในบทเรียนนี้ {#what-we-built-this-lesson}

- **สามระดับแผนบริการ** ที่เชื่อมโยงกับกลุ่มธุรกิจฟิตเนสจริง
- **การจำกัดคุณสมบัติ (Feature gating)** โดยใช้การควบคุมปลั๊กอินและเทมเพลตของ Ultimate Multisite
- **กลุ่มแผนบริการ** ที่มีเส้นทางการอัปเกรดที่ชัดเจน
- **ผลิตภัณฑ์ Order bump** สำหรับรายได้เพิ่มเติม
- **โครงสร้างราคา** ที่อิงตามมูลค่าของลูกค้า ไม่ใช่แค่คุณสมบัติทางเทคนิค

---

**ถัดไป:** [บทที่ 6: ประสบการณ์การสมัครสมาชิก](lesson-6-checkout) -- เราจะสร้างขั้นตอนการชำระเงินที่เปลี่ยนเจ้าของสตูดิโอฟิตเนสให้กลายเป็นลูกค้าที่จ่ายเงินได้
