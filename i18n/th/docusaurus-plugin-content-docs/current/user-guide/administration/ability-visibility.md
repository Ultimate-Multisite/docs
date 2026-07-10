---
title: การมองเห็นความสามารถ
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# การมองเห็นความสามารถ (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 ได้เพิ่มการควบคุม **Ability Visibility** ซึ่งทำหน้าที่กำหนดว่าความสามารถ (ability) แต่ละอย่างจะถูกเปิดเผยในส่วนใดบ้าง สิ่งนี้ช่วยให้ผู้ดูแลระบบสามารถปรับแต่งได้อย่างละเอียดว่าความสามารถของ agent ใดบ้างที่สามารถใช้งานได้ผ่าน REST APIs, MCP servers, การเชื่อมต่อกับ WooCommerce, และอินเทอร์เฟซอื่น ๆ

## Ability Visibility คืออะไร? {#what-is-ability-visibility}

Ability Visibility คือระบบสิทธิ์ที่ควบคุมสิ่งต่อไปนี้:

- **ความสามารถใดบ้าง** ที่ agent สามารถเข้าถึงได้
- **ถูกเปิดเผยที่ไหน** (REST API, MCP, WooCommerce, ฯลฯ)
- **ใครสามารถเข้าถึงได้** (ผ่านรายชื่ออนุญาตของพาร์ทเนอร์)
- **ถูกจัดประเภทอย่างไร** (recognized vs. unclassified)

ความสามารถแต่ละอย่างจะมีระดับการมองเห็น (visibility level) ซึ่งเป็นตัวกำหนดว่าความสามารถนั้นจะพร้อมใช้งานในส่วนต่าง ๆ อย่างไร

## ระดับการมองเห็น (Visibility Levels) {#visibility-levels}

### Public (สาธารณะ) {#public}

**ความสามารถสาธารณะ (Public abilities)** สามารถใช้งานได้ทุกที่:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- ผู้ใช้ทุกบทบาท (ด้วยสิทธิ์ที่เหมาะสม)

ตัวอย่าง: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (ภายใน) {#internal}

**ความสามารถภายใน (Internal abilities)** สามารถใช้งานได้เฉพาะภายใน WordPress installation ของคุณเท่านั้น:

- Chat interfaces
- Admin panels
- ผู้ใช้ที่ล็อกอินเท่านั้น
- ไม่ถูกเปิดเผยผ่าน REST API หรือการเชื่อมต่อภายนอก

ตัวอย่าง: `manage-settings`, `view-analytics`, `export-data`

### Partner (พาร์ทเนอร์) {#partner}

**ความสามารถพาร์ทเนอร์ (Partner abilities)** สามารถใช้งานได้เฉพาะกับพาร์ทเนอร์ที่อยู่ในรายชื่ออนุญาตเท่านั้น:

- ต้องมีการระบุในรายชื่ออนุญาตของพาร์ทเนอร์อย่างชัดเจน
- สามารถใช้งานได้ผ่าน REST API ด้วย credentials ของพาร์ทเนอร์
- สามารถใช้งานได้ผ่าน MCP ด้วยการยืนยันตัวตนของพาร์ทเนอร์
- ไม่สามารถใช้งานได้สำหรับผู้ใช้ทั่วไป

ตัวอย่าง: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (ปิดใช้งาน) {#disabled}

**ความสามารถที่ปิดใช้งาน (Disabled abilities)** ไม่สามารถใช้งานได้ที่ใดเลย:

- ไม่ถูกเปิดเผยผ่านส่วนใด ๆ
- ไม่สามารถใช้งานได้ในแชท
- ไม่สามารถใช้งานได้ในแผงควบคุมผู้ดูแลระบบ
- มีประโยชน์สำหรับความสามารถที่เลิกใช้แล้ว (deprecated) หรือความสามารถที่ยังอยู่ในช่วงทดลอง

## การจัดการ Ability Visibility {#managing-ability-visibility}

### การเข้าถึงการตั้งค่า Ability Visibility {#accessing-ability-visibility-settings}

1. ไปที่ **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. คลิกที่แท็บ **Abilities**
3. คุณจะเห็นรายการความสามารถทั้งหมดที่ติดตั้ง พร้อมระดับการมองเห็นของความสามารถเหล่านั้น

### การดูรายละเอียดความสามารถ {#viewing-ability-details}

คลิกที่ความสามารถใด ๆ เพื่อดู:

- **Name**: ตัวระบุของความสามารถ
- **Description**: ความสามารถนั้นทำอะไรได้บ้าง
- **Current visibility**: สาธารณะ (Public), ภายใน (Internal), พาร์ทเนอร์ (Partner), หรือปิดใช้งาน (Disabled)
- **Partner allow-list**: พาร์ทเนอร์ใดบ้างที่สามารถเข้าถึงได้ (หากเป็น Partner visibility)
- **Last updated**: เมื่อไหร่ที่มีการเปลี่ยนแปลงการมองเห็นครั้งล่าสุด
- **Status**: Recognized หรือ Unclassified

### การเปลี่ยนระดับการมองเห็น {#changing-visibility-levels}

ในการเปลี่ยนการมองเห็นของความสามารถ:

1. คลิกที่ความสามารถในรายการ
2. เลือกระดับการมองเห็นใหม่จากเมนูแบบเลื่อนลง
3. หากเลือก "Partner" ให้เพิ่มตัวระบุของพาร์ทเนอร์ใน allow-list
4. คลิก **Save**

ตัวอย่าง:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### การดำเนินการแบบกลุ่ม (Bulk Operations) {#bulk-operations}

ในการเปลี่ยนการมองเห็นสำหรับความสามารถหลายรายการ:

1. ติ๊กช่องสี่เหลี่ยมข้างความสามารถเหล่านั้น
2. เลือกระดับการมองเห็นใหม่จากเมนูแบบเลื่อนลงของการดำเนินการแบบกลุ่ม
3. คลิก **Apply**

## Partner Allow-List {#partner-allow-list}

**Partner allow-list** ควบคุมว่าพาร์ทเนอร์ภายนอกรายใดบ้างที่สามารถเข้าถึงความสามารถระดับ Partner ได้

### การเพิ่มพาร์ทเนอร์ {#adding-partners}

1. ไปที่ **Superdav AI Agent** → **Settings** → **Partners**
2. คลิก **Add Partner**
3. ป้อนตัวระบุของพาร์ทเนอร์ (โดยปกติจะเป็น API key หรือ organization ID)
4. เพิ่มชื่อและคำอธิบายของพาร์ทเนอร์ (ถ้าต้องการ)
5. คลิก **Save**

### การกำหนดความสามารถให้พาร์ทเนอร์ {#assigning-abilities-to-partners}

หลังจากเพิ่มพาร์ทเนอร์แล้ว:

1. ไปที่แท็บ **Abilities**
2. ค้นหาความสามารถที่มี Partner visibility
3. คลิกเพื่อแก้ไข
4. ในส่วน "Partner allow-list" ให้ติ๊กช่องสี่เหลี่ยมสำหรับพาร์ทเนอร์ที่ควรจะเข้าถึงได้
5. คลิก **Save**

### การเพิกถอนการเข้าถึงของพาร์ทเนอร์ {#revoking-partner-access}

ในการลบการเข้าถึงของพาร์ทเนอร์:

1. แก้ไขความสามารถ
2. ยกเลิกการติ๊กช่องสี่เหลี่ยมของพาร์ทเนอร์ใน allow-list
3. คลิก **Save**

พาร์ทเนอร์จะสูญเสียการเข้าถึงความสามารถนั้นทันที

## Unclassified Abilities (ความสามารถที่ยังไม่ถูกจัดประเภท) {#unclassified-abilities}

เมื่อคุณติดตั้งความสามารถจากบุคคลที่สาม (third-party ability) ที่ Superdav AI Agent ไม่รู้จัก ความสามารถนั้นจะถูกทำเครื่องหมายเป็น **Unclassified**

### Admin Notice สำหรับ Unclassified Abilities {#admin-notice-for-unclassified-abilities}

คุณจะเห็นประกาศของผู้ดูแลระบบ:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### การตรวจสอบ Unclassified Abilities {#reviewing-unclassified-abilities}

1. คลิก **Review Abilities** ในประกาศ
2. สำหรับความสามารถที่ยังไม่ถูกจัดประเภทแต่ละรายการ คุณจะเห็น:
   - ชื่อและคำอธิบายความสามารถ
   - แหล่งที่มา (plugin/addon ใดที่ติดตั้ง)
   - ระดับการมองเห็นที่แนะนำ
   - การประเมินความปลอดภัย

3. เลือกระดับการมองเห็น:
   - **Public**: เชื่อถือความสามารถนี้; เปิดเผยใช้งานทุกที่
   - **Internal**: จำกัดการใช้งานภายในเท่านั้น
   - **Partner**: จำกัดการใช้งานสำหรับพาร์ทเนอร์ที่ระบุ
   - **Disabled**: ไม่ใช้ความสามารถนี้

4. คลิก **Classify** เพื่อบันทึกการตัดสินใจของคุณ

### ทำไมต้องจัดประเภท Unclassified Abilities? {#why-classify-unclassified-abilities}

การจัดประเภทความสามารถ:

- **เพิ่มความปลอดภัย**: คุณอนุมัติอย่างชัดเจนว่าอะไรที่ถูกเปิดเผย
- **ป้องกันอุบัติเหตุ**: ความสามารถที่ยังไม่ถูกจัดประเภทจะถูกปิดใช้งานโดยค่าเริ่มต้น
- **เปิดใช้งานฟีเจอร์**: เมื่อจัดประเภทแล้ว ความสามารถนั้นจะพร้อมใช้งาน
- **บันทึกการตัดสินใจ**: การเลือกของคุณจะถูกบันทึกไว้เพื่อวัตถุประสงค์ในการตรวจสอบ

## Visibility ในส่วนต่าง ๆ {#visibility-in-different-surfaces}

### REST API {#rest-api}

**ความสามารถสาธารณะ (Public abilities)** สามารถใช้งานได้ผ่าน REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**ความสามารถภายใน (Internal) และ Partner** ไม่สามารถใช้งานได้ผ่าน REST API

### MCP Servers {#mcp-servers}

**ความสามารถสาธารณะ (Public abilities)** สามารถใช้งานได้ผ่าน MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**ความสามารถภายใน (Internal abilities)** ไม่ถูกเปิดเผยผ่าน MCP

**ความสามารถพาร์ทเนอร์ (Partner abilities)** สามารถใช้งานได้เฉพาะด้วย credentials ของพาร์ทเนอร์เท่านั้น

### WooCommerce Integration {#woocommerce-integration}

**ความสามารถสาธารณะ (Public abilities)** ที่เกี่ยวข้องกับ WooCommerce สามารถใช้งานได้:

- การจัดการสินค้า (Product management)
- การประมวลผลคำสั่งซื้อ (Order processing)
- การสื่อสารกับลูกค้า (Customer communication)

**ความสามารถภายใน (Internal abilities)** ไม่ถูกเปิดเผยให้ WooCommerce

### Chat Interface {#chat-interface}

**ความสามารถทั้งหมด** (Public, Internal, Partner) สามารถใช้งานได้ในแชท ขึ้นอยู่กับสิทธิ์ของผู้ใช้:

- ผู้ดูแลระบบเห็นความสามารถทั้งหมด
- ผู้ใช้ทั่วไปเห็นเฉพาะความสามารถสาธารณะ (Public abilities)
- พาร์ทเนอร์เห็นความสามารถสาธารณะ + พาร์ทเนอร์ (หากอยู่ในรายชื่ออนุญาต)

## แนวทางปฏิบัติที่ดีที่สุดด้านความปลอดภัย (Security Best Practices) {#security-best-practices}

### หลักการสิทธิ์น้อยที่สุด (Principle of Least Privilege) {#principle-of-least-privilege}

- กำหนดความสามารถให้มีระดับการมองเห็นที่จำกัดที่สุด แต่ยังคงใช้งานได้
- ใช้ Partner visibility สำหรับการดำเนินการที่ละเอียดอ่อน
- ปิดใช้งานความสามารถที่คุณไม่ได้ใช้

### การตรวจสอบเป็นประจำ (Regular Audits) {#regular-audits}

- ทบทวนการมองเห็นของความสามารถทุกเดือน
- ตรวจสอบความสามารถที่ยังไม่ถูกจัดประเภท
- ลบการเข้าถึงสำหรับพาร์ทเนอร์ที่ไม่ได้ใช้งาน

### การบันทึกและการตรวจสอบ (Logging and Monitoring) {#logging-and-monitoring}

- ติดตามว่าความสามารถใดถูกใช้งานมากที่สุด
- ติดตามรูปแบบการเข้าถึงของพาร์ทเนอร์
- แจ้งเตือนเมื่อมีการใช้งานความสามารถที่ผิดปกติ

### ความสามารถจากบุคคลที่สาม (Third-Party Abilities) {#third-party-abilities}

- ทบทวนความสามารถจากบุคคลที่สามก่อนเปิดใช้งาน
- จัดประเภทอย่างชัดเจน
- เริ่มต้นด้วย Internal หรือ Partner visibility
- เลื่อนเป็น Public ก็ต่อเมื่อผ่านการตรวจสอบแล้วเท่านั้น

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

**ความสามารถไม่แสดงในรายการ**
- ตรวจสอบว่าความสามารถนั้นถูกติดตั้งและใช้งานอยู่หรือไม่
- ตรวจสอบว่า plugin/addon ถูกเปิดใช้งานแล้ว
- รีเฟรชหน้า

**ไม่สามารถเปลี่ยนการมองเห็นของความสามารถได้**
- ตรวจสอบว่าคุณมีสิทธิ์ผู้ดูแลระบบหรือไม่
- ตรวจสอบว่าความสามารถนั้นไม่ได้ถูกล็อกโดย plugin
- ลองปิดใช้งาน plugin ที่ขัดแย้งกัน

**พาร์ทเนอร์ไม่สามารถเข้าถึงความสามารถได้**
- ตรวจสอบว่าพาร์ทเนอร์อยู่ใน allow-list หรือไม่
- ตรวจสอบว่า visibility ของความสามารถถูกตั้งค่าเป็น Partner หรือไม่
- ยืนยันว่า credentials ของพาร์ทเนอร์ถูกต้อง
- ตรวจสอบ API logs สำหรับข้อผิดพลาดในการยืนยันตัวตน

**Unclassified abilities ยังคงปรากฏอยู่**
- ทบทวนและจัดประเภทในประกาศของผู้ดูแลระบบ
- ตรวจสอบว่าการจัดประเภทของคุณถูกบันทึกแล้ว
- ยืนยันว่า plugin ที่ให้ความสามารถนั้นเป็นเวอร์ชันล่าสุด

## การย้ายข้อมูลจาก Legacy Mode {#migration-from-legacy-mode}

หากคุณกำลังอัปเกรดจาก Superdav AI Agent เวอร์ชันเก่า:

- ความสามารถที่มีอยู่ทั้งหมดจะถูกจัดประเภทเป็น Public โดยอัตโนมัติ
- ทบทวนและปรับการมองเห็นตามความจำเป็น
- ไม่ต้องดำเนินการใด ๆ เว้นแต่คุณต้องการจำกัดการเข้าถึง

ดู **Third-Party Mode Migration** สำหรับรายละเอียดเพิ่มเติมเกี่ยวกับการเปลี่ยนไปใช้ native Abilities API integration

## ขั้นตอนต่อไป (Next Steps) {#next-steps}

หลังจากกำหนดค่า ability visibility แล้ว:

1. **ทบทวนความสามารถของคุณ**: ตรวจสอบความสามารถที่ติดตั้งทั้งหมด
2. **จัดประเภทความสามารถที่ยังไม่ถูกจัดประเภท**: ตอบสนองต่อประกาศของผู้ดูแลระบบ
3. **ตั้งค่าพาร์ทเนอร์**: เพิ่มพาร์ทเนอร์หากใช้ Partner visibility
4. **ตรวจสอบการใช้งาน**: ติดตามว่าความสามารถใดถูกใช้งานมากที่สุด
5. **บันทึกการตัดสินใจ**: เก็บโน้ตว่าทำไมคุณถึงเลือกระดับการมองเห็นแต่ละระดับ
