---
title: 'บทเรียนที่ 3: การตั้งค่าเครือข่ายของคุณ'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# บทที่ 3: การตั้งค่าเครือข่าย (Network) ของคุณ

ได้เวลาสร้างแล้ว ในบทเรียนนี้ คุณจะได้ติดตั้ง Ultimate Multisite และตั้งค่ารากฐานของเครือข่าย FitSite ทุกการตัดสินใจในส่วนนี้จะคำนึงถึงกลุ่มธุรกิจฟิตเนสเป็นหลัก

## จุดที่เราทำค้างไว้ {#where-we-left-off}

เราได้เลือกสตูดิโอฟิตเนสเป็นกลุ่มเป้าหมาย (niche) และยืนยันโอกาสทางธุรกิจแล้ว ตอนนี้เราจะเปลี่ยนแนวคิดนั้นให้กลายเป็นแพลตฟอร์มที่ใช้งานได้จริง

## การเลือกโฮสติ้ง (Hosting) {#choosing-your-hosting}

การเลือกโฮสติ้งมีความสำคัญมากกว่าสำหรับแพลตฟอร์มเฉพาะกลุ่ม (niche platform) เมื่อเทียบกับการทำเว็บไซต์เพียงเว็บไซต์เดียว เพราะคุณไม่ได้โฮสต์แค่เว็บไซต์เดียว แต่คุณกำลังโฮสต์เครือข่ายที่อาจขยายไปถึงหลายสิบหรือหลายร้อยเว็บไซต์

### สิ่งที่ควรพิจารณา {#what-to-look-for}

- **รองรับ WordPress Multisite**: โฮสติ้งทุกเจ้าไม่ได้รองรับ multisite ได้ดีเท่ากัน
- **Wildcard SSL**: จำเป็นอย่างยิ่งสำหรับเครือข่ายที่ใช้โดเมนย่อย (subdomain)
- **ทรัพยากรที่ขยายได้ (Scalable resources)**: คุณต้องมีพื้นที่ให้เติบโตโดยที่ไม่ต้องย้ายระบบ (migrate)
- **การผสานรวมกับ Ultimate Multisite**: การทำ Domain mapping และ SSL อัตโนมัติจะช่วยลดภาระการดูแลระบบได้อย่างมาก

### แนวทางที่แนะนำ {#recommended-approach}

ให้เลือกโฮสติ้งจากรายการ [Compatible Providers](/user-guide/host-integrations/closte) เจ้าเหล่านี้ผ่านการทดสอบกับ Ultimate Multisite และมีระบบผสานรวมที่คุณต้องการสำหรับการทำ Domain mapping และการทำงานอัตโนมัติของ SSL

สำหรับ FitSite เราจะใช้การตั้งค่าแบบโดเมนย่อย (subdomain configuration) ซึ่งหมายความว่าในตอนแรกเว็บไซต์ของลูกค้าจะปรากฏเป็น `studioname.fitsite.com` ก่อนที่พวกเขาจะเลือกเชื่อมต่อโดเมนของตัวเองในภายหลัง

## การติดตั้ง WordPress Multisite {#installing-wordpress-multisite}

หากคุณยังไม่มีการติดตั้ง WordPress Multisite:

1. ติดตั้ง WordPress บนผู้ให้บริการโฮสติ้งของคุณ
2. ทำตามคู่มือ [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. เลือกการตั้งค่าแบบ **subdomain** เมื่อระบบแจ้งให้เลือก

:::tip ทำไมต้องใช้ Subdomains?
Subdomains จะให้ที่อยู่เฉพาะตัวสำหรับเว็บไซต์ของลูกค้าแต่ละราย (`studio.fitsite.com`) แทนที่จะเป็นเส้นทาง (path) (`fitsite.com/studio`) ซึ่งดูเป็นมืออาชีพกว่าสำหรับลูกค้าของคุณ และช่วยหลีกเลี่ยงปัญหาความขัดแย้งของ permalink ดูการเปรียบเทียบโดยละเอียดได้ที่ [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101)
:::

## การติดตั้ง Ultimate Multisite {#installing-ultimate-multisite}

ทำตามคู่มือ [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) เพื่อ:

1. อัปโหลดและเปิดใช้งานปลั๊กอิน (plugin) นี้ทั่วทั้งเครือข่าย
2. รัน [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

ระหว่างการใช้ Setup Wizard ให้คำนึงถึงกลุ่มธุรกิจฟิตเนส (FitSite niche) เสมอ:

- **Currency**: ตั้งค่าเป็นสกุลเงินที่ลูกค้าสตูดิโอฟิตเนสของคุณใช้
- **Company name**: "FitSite" (หรือชื่อแบรนด์ที่คุณเลือก)
- **Company logo**: อัปโหลดโลโก้แบรนด์ของคุณ — ส่วนนี้จะปรากฏบนใบแจ้งหนี้และอีเมล

## การตั้งค่าสำหรับกลุ่มธุรกิจฟิตเนส {#configuring-for-the-fitness-niche}

เมื่อติดตั้ง Ultimate Multisite แล้ว ให้ทำการตั้งค่าเฉพาะกลุ่มธุรกิจเหล่านี้:

### การตั้งค่าทั่วไป (General Settings) {#general-settings}

ไปที่ **Ultimate Multisite > Settings** และตั้งค่า:

- **Site name**: FitSite
- **Default role**: Administrator — เจ้าของสตูดิโอฟิตเนสจำเป็นต้องควบคุมเนื้อหาของเว็บไซต์ตัวเองได้อย่างเต็มที่
- **Registration**: เปิดใช้งานการลงทะเบียนผู้ใช้ เพื่อให้เจ้าของสตูดิโอสามารถสมัครด้วยตัวเองได้

### การตั้งค่าอีเมล (Email Configuration) {#email-configuration}

อีเมลระบบของคุณควรใช้ภาษาที่สื่อถึงกลุ่มธุรกิจของคุณ ไปที่ **Ultimate Multisite > Settings > Emails** และปรับแต่ง:

- เปลี่ยนภาษาทั่วไป "เว็บไซต์ใหม่ของคุณ" ให้เป็นข้อความที่เฉพาะเจาะจงสำหรับฟิตเนส
- ตัวอย่างหัวข้อต้อนรับ: "เว็บไซต์สตูดิโอฟิตเนสของคุณพร้อมใช้งานแล้ว"
- ตัวอย่างเนื้อหาต้อนรับ: อ้างถึงสตูดิโอ ชั้นเรียน และการเริ่มต้นใช้งานเว็บไซต์ฟิตเนสของพวกเขา

เราจะปรับปรุงส่วนนี้ให้ละเอียดขึ้นในบทเรียนที่ 8 (การรับลูกค้าเข้าสู่ระบบ) แต่การกำหนดโทนตั้งแต่ตอนนี้จะช่วยให้แม้แต่การสมัครทดลองใช้ในช่วงแรกก็ยังรู้สึกว่าตรงกับกลุ่มธุรกิจเฉพาะนี้

### การตั้งค่าโดเมน (Domain Configuration) {#domain-configuration}

หากคุณใช้ผู้ให้บริการโฮสติ้งที่รองรับ ให้ตั้งค่า Domain mapping ในตอนนี้:

1. ไปที่ **Ultimate Multisite > Settings > Domain Mapping**
2. ทำตามคู่มือการผสานรวมสำหรับโฮสติ้งของคุณโดยเฉพาะ
3. ทดสอบว่า subsites ใหม่ได้รับ SSL โดยอัตโนมัติ

สิ่งนี้จะรับประกันว่าเมื่อเราเริ่มสร้างเทมเพลตและเว็บไซต์ทดสอบในบทเรียนถัดไป ทุกอย่างจะทำงานได้อย่างสมบูรณ์ตั้งแต่ต้นจนจบ

## ภาพรวมเครือข่าย FitSite จนถึงตอนนี้ {#the-fitsite-network-so-far}

เมื่อจบบทเรียนนี้ คุณจะได้สิ่งเหล่านี้:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## สิ่งที่เราสร้างในบทเรียนนี้ {#what-we-built-this-lesson}

- **การติดตั้ง WordPress Multisite** ที่ใช้งานได้จริงในโหมด subdomain
- **Ultimate Multisite ที่ติดตั้ง** และตั้งค่าด้วยแบรนด์ FitSite
- **โฮสติ้งและ SSL** ที่พร้อมสำหรับเครือข่ายที่เติบโต
- **Domain mapping** ที่ตั้งค่าสำหรับผู้ให้บริการโฮสติ้งของคุณ
- **โทนอีเมลเฉพาะกลุ่ม** ที่กำหนดตั้งแต่เริ่มต้น

---

**ถัดไป:** [บทที่ 4: การสร้างเทมเพลตเฉพาะกลุ่ม](lesson-4-templates) — เราจะสร้างเทมเพลตเว็บไซต์ที่เจ้าของสตูดิโอฟิตเนสต้องการใช้จริง
