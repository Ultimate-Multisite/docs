---
title: ຄວາມສາມາດໃນການເຫັນ
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# ການເຫັນຄວາມສາມາດ (Ability Visibility)

Superdav AI Agent v1.12.0 ເປີດໂຕຄຸນສົມບັດ **Ability Visibility** ເຊິ່ງເປັນການຄວບຄຸມວ່າໜ້າຕ່າງໃດໆຈະສະແດງຄວາມສາມາດ (ability) ໃດໃຫ້ເຫັນ. ສິ່ງນີ້ຊ່ວຍໃຫ້ຜູ້ບໍລິຫານສາມາດປັບຕາລາງໄດ້ວ່າຄວາມສາມາດຂອງ agent ໃດທີ່ສາມາດໃຊ້ໄດ້ຜ່ານ REST APIs, MCP servers, WooCommerce integrations ແລະ ພື້ນທີ່ອື່ນໆ.

## Ability Visibility ແມ່ນຫຍັງ? {#what-is-ability-visibility}

Ability Visibility ແມ່ນລະບົບສິດທິ (permission system) ທີ່ຄວບຄຸມ:

- **ຄວາມສາມາດໃດ** ທີ່ agent ສາມາດໃຊ້ໄດ້
- **ມັນຖືກສະແດງອອກຢູ່ໃສ** (REST API, MCP, WooCommerce, ແລະ ອື່ນໆ)
- **ໃຜສາມາດເຂົ້າເຖິງໄດ້** (ຜ່ານ partner allow-lists)
- **ມັນຖືກຈັດປະເພດແນວໃດ** (ທີ່ຮັບຮູ້ແລ້ວ ຫຼື ທີ່ຍັງບໍ່ທັນໄດ້ຮັບການຈັດປະເພດ)

ຄວາມສາມາດແຕ່ລະຢ່າງມີລະດັບການເຫັນ (visibility level) ເຊິ່ງກຳນົດວ່າສາມາດໃຊ້ງານໄດ້ໃນໜ້າຕ່າງທີ່ແຕກຕ່າງກັນໄດ້ແນວໃດ.

## ລະດັບການເຫັນ (Visibility Levels) {#visibility-levels}

### ສາທາລະນະ (Public) {#public}

**Ability ສາທາລະນະ** ແມ່ນສາມາດໃຊ້ໄດ້ທຸກບ່ອນ:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- ທຸກໜ້າທີ່ຂອງຜູ້ໃຊ້ (ພ້ອມສິດທິທີ່ເໝາະສົມ)

ຕົວຢ່າງ: `scaffold-block-theme`, `activate-theme`, `send-email`

### ພາຍໃນ (Internal) {#internal}

**Ability ພາຍໃນ** ແມ່ນສາມາດໃຊ້ໄດ້ພາຍໃນການຕິດຕັ້ງ WordPress ຂອງທ່ານເທົ່ານັ້ນ:

- Chat interfaces
- Admin panels
- ຜູ້ໃຊ້ທີ່ເຂົ້າສູ່ລະບົບແລ້ວເທົ່ານັ້ນ
- ບໍ່ຖືກສະແດງອອກຜ່ານ REST API ຫຼື ການເຊື່ອມຕໍ່ພາຍນອກ

ຕົວຢ່າງ: `manage-settings`, `view-analytics`, `export-data`

### ຄູ່ຮ່ວມງານ (Partner) {#partner}

**Ability ຄູ່ຮ່ວມງານ** ແມ່ນສາມາດໃຊ້ໄດ້ກັບຄູ່ຮ່ວມງານທີ່ຢູ່ໃນລາຍຊື່ສິດ (whitelisted partners) ເທົ່ານັ້ນ:

- ຮຽກຮ້ອງໃຫ້ມີການເພີ່ມເຂົ້າໃນ partner allow-list ຢ່າງຊັດເຈນ
- ສາມາດໃຊ້ຜ່ານ REST API ໂດຍໃຊ້ຂໍ້ມູນຂອງຄູ່ຮ່ວມງານ
- ສາມາດໃຊ້ຜ່ານ MCP ໂດຍໃຊ້ການຢັ້ງຢືນຕົວຕົນຂອງຄູ່ຮ່ວມງານ
- ບໍ່ສາມາດໃຊ້ໄດ້ກັບຜູ້ໃຊ້ທົ່ວໄປ

ຕົວຢ່າງ: `bulk-import-users`, `modify-billing`, `access-analytics`

### ປິດ (Disabled) {#disabled}

**Ability ທີ່ຖືກປິດ** ແມ່ນບໍ່ສາມາດໃຊ້ໄດ້ໃນບ່ອນໃດໆ:

- ບໍ່ຖືກສະແດງອອກຜ່ານໜ້າຕ່າງໃດໆ
- ບໍ່ມີຢູ່ໃນການສົນທະນາ (chat)
- ບໍ່ມີຢູ່ໃນ Admin panels
- ມີປະໂຫຍດສຳລັບ ability ທີ່ເກັບໄວ້ ຫຼື ທົດລອງໃຊ້ເທົ່ານັ້ນ

## ການຈັດການຄວາມເຫັນຂອງຄວາມສາມາດ (Managing Ability Visibility) {#managing-ability-visibility}

### ການເຂົ້າເຖິງການຕັ້ງຄ່າຄວາມເຫັນຂອງຄວາມສາມາດ (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. ໄປທີ່ **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. ចុចលើ tab **Abilities**
3. អ្នកនឹងឃើញລາຍຊື່ຂອງຄວາມສາມາດທັງໝົດທີ່ຕິດຕັ້ງໄວ້ພ້ອມລະດັບການເຫັນຂອງມັນ

### ການເບິ່ງລາຍລະອຽດຂອງຄວາມສາມາດ (Viewing Ability Details) {#viewing-ability-details}

ໃຫ້ចុចໃສ່ຄວາມສາມາດໃດໜຶ່ງເພື່ອເບິ່ງ:

- **Name**: ຕົວລະບຸຂອງຄວາມສາມາດນັ້ນ
- **Description**: ຄວາມສາມາດນັ້ນເຮັດຫຍັງบ้าง
- **Current visibility**: ສາທາລະນະ (Public), ພາຍໃນ (Internal), ຄູ່ຮ່ວມງານ (Partner), ຫຼື ປິດ (Disabled)
- **Partner allow-list**: ຄູ່ຮ່ວມງານໃດທີ່ສາມາດເຂົ້າເຖິງໄດ້ (ຖ້າມີການເຫັນຂອງ Partner)
- **Last updated**: ເວລາສຸດທ້າຍທີ່ໄດ້ປ່ຽນການເຫັນ
- **Status**: ຮັບຮູ້ແລ້ວ (Recognized) ຫຼື ບໍ່ຈັດປະເພດ (Unclassified)

### ການປ່ຽນລະດັບຄວາມເຫັນ (Changing Visibility Levels) {#changing-visibility-levels}

ເພື່ອປ່ຽນການເຫັນຂອງຄວາມສາມາດ:

1. ចុចໃສ່ຄວາມສາມາດໃນລາຍຊື່
2. ເລືອກລະດັບຄວາມເຫັນໃໝ່ຈາກ dropdown
3. ຖ້າເລືອກ "Partner", ໃຫ້ເພີ່ມ partner identifier (ຕົວລະບຸຄູ່ຮ່ວມງານ) ເຂົ້າໃນ allow-list
4. ចុច **Save**

ຕົວຢ່າງ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### ການປະຕິບັດງານແບບເປັນກຸ່ມ (Bulk Operations) {#bulk-operations}

ເພື່ອປ່ຽນການເຫັນຂອງຄວາມສາມາດຫຼາຍຢ່າງໃນເວລາດຽວກັນ:

1. ໝາຍໃສ່ຊ່ອງກວດ (checkboxes) ຕໍ່ໜ້າຄວາມສາມາດທີ່ຕ້ອງການ
2. ເລືອກລະດັບຄວາມເຫັນໃໝ່ຈາກ dropdown ການກະທຳແບບເປັນກຸ່ມ (bulk action)
3. ចុច **Apply**

## ລາຍການອະນຸຍາດຄູ່ຮ່ວມງານ (Partner Allow-List) {#partner-allow-list}

**partner allow-list** ແມ່ນສິ່ງທີ່ຄວບຄຸມວ່າຄູ່ຮ່ວມງານພາຍນອກໃດສາມາດເຂົ້າເຖິງຄວາມສາມາດລະດັບ Partner ໄດ້.

### ການເພີ່ມຄູ່ຮ່ວມງານ (Adding Partners) {#adding-partners}

1. ໄປທີ່ **Superdav AI Agent** → **Settings** → **Partners**
2. ចុច **Add Partner**
3. ໃສ່ partner identifier (ປົກກະຕິແມ່ນ API key ຫຼື organization ID)
4. ສາມາດເພີ່ມຊື່ ແລະ ຄຳອະທິບາຍຂອງຄູ່ຮ່ວມງານໄດ້ (ເປັນທາງເລືອກ)
5. ចុច **Save**

### ການມອບໝາຍຄວາມສາມາດໃຫ້ຄູ່ຮ່ວມງານ (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

ຫຼັງຈາກເພີ່ມຄູ່ຮ່ວມງານແລ້ວ:

1. ไปที่แท็บ **Abilities** (ความสามารถ)
2. หาความสามารถที่มีการมองเห็นสำหรับ Partner (พันธมิตร)
3. คลิกเพื่อแก้ไข
4. ในส่วน "Partner allow-list" ให้ติ๊กถูกช่องสำหรับพาร์ทเนอร์ที่จะต้องเข้าถึงได้
5. คลิก **Save** (บันทึก)

### การเพิกถอนสิทธิ์การเข้าถึงของ Partner {#revoking-partner-access}

หากต้องการเอาสิทธิ์การเข้าถึงของพาร์ทเนอร์ออก:

1. แก้ไขความสามารถนั้น
2. ยกเลิกการติ๊กช่องของพาร์ทเนอร์ในรายการอนุญาต (allow-list)
3. คลิก **Save** (บันทึก)

พาร์ทเนอร์คนนั้นจะสูญเสียสิทธิ์ในการเข้าถึงความสามารถนั้นทันที

## ความสามารถที่ยังไม่ได้จัดประเภท (Unclassified Abilities) {#unclassified-abilities}

เมื่อคุณติดตั้งความสามารถจากภายนอกที่ Superdav AI Agent ไม่รู้จัก ระบบจะทำเครื่องหมายว่าเป็น **Unclassified** (ยังไม่ได้จัดประเภท)

### ประกาศสำหรับผู้ดูแลระบบเกี่ยวกับความสามารถที่ยังไม่ได้จัดประเภท {#admin-notice-for-unclassified-abilities}

คุณจะเห็นประกาศของผู้ดูแลระบบดังนี้:

```
⚠️ พบความสามารถที่ยังไม่ได้จัดประเภท

ความสามารถต่อไปนี้ถูกติดตั้งแล้วแต่ไม่ได้รับการจดจำ:
- custom-import-tool
- external-api-wrapper

ความสามารถเหล่านี้อาจมีความเสี่ยงด้านความปลอดภัยหรือความเข้ากันได้ โปรดตรวจสอบและจัดประเภทใหม่

[Review Abilities] [Dismiss]
```

### การตรวจสอบความสามารถที่ยังไม่ได้จัดประเภท {#reviewing-unclassified-abilities}

1. คลิก **Review Abilities** (ตรวจสอบความสามารถ) ในประกาศนั้น
2. สำหรับความสามารถแต่ละรายการที่คุณจะเห็น:
   - ชื่อและความสามารถของความสามารถนั้น
   - แหล่งที่มา (ปลั๊กอิน/แอดออนที่ติดตั้งมัน)
   - ระดับการมองเห็นที่แนะนำ
   - การประเมินด้านความปลอดภัย

3. เลือกระดับการมองเห็น:
   - **Public** (สาธารณะ): เชื่อมั่นในความสามารถนั้น; เปิดเผยให้ทุกคนเข้าถึงได้
   - **Internal** (ภายใน): จำกัดการใช้งานเฉพาะภายในเท่านั้น
   - **Partner** (พันธมิตร): จำกัดเฉพาะพาร์ทเนอร์ที่ระบุไว้
   - **Disabled** (ปิดใช้งาน): ไม่ใช้ความสามารถนี้

4. คลิก **Classify** (จัดประเภท) เพื่อบันทึกการตัดสินใจของคุณ

### ทำไมต้องจัดประเภทความสามารถที่ยังไม่ได้จัดประเภท? {#why-classify-unclassified-abilities}

การจัดประเภทความสามารถ:

- **เพิ่มความปลอดภัย**: คุณอนุมัติอย่างชัดเจนว่าอะไรจะถูกเปิดเผย
- **ป้องกันอุบัติเหตุ**: ความสามารถที่ยังไม่ได้จัดประเภทจะถูกปิดใช้งานโดยค่าเริ่มต้น
- **เปิดใช้งานฟีเจอร์**: เมื่อจัดประเภทแล้ว ความสามารถนั้นก็จะพร้อมใช้งาน
- **บันทึกการตัดสินใจ**: การเลือกของคุณจะถูกบันทึกไว้เพื่อวัตถุประสงค์ในการตรวจสอบ

## ການເຫັນໄດ້ຊ່ອງໃນພື້ນທີ່ຕ່າງໆ {#visibility-in-different-surfaces}

### REST API {#rest-api}

**ຄວາມສາມາດທີ່ເປີດເຜີຍຕໍ່ສາທາລະນະ (Public abilities)** ສາມາດເຂົ້າເຖິງໄດ້ຜ່ານ REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**ຄວາມສາມາດພາຍໃນ (Internal) ແລະ ຄວາມສາມາດຂອງຄູ່ຮ່ວມງານ (Partner abilities)** ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ຜ່ານ REST API.

### MCP Servers {#mcp-servers}

**ຄວາມສາມາດທີ່ເປີດເຜີຍຕໍ່ສາທາລະນະ (Public abilities)** ສາມາດເຂົ້າເຖິງໄດ້ຜ່ານ MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**ຄວາມສາມາດພາຍໃນ (Internal abilities)** ບໍ່ຖືກເປີດເຜີຍຜ່ານ MCP.

**ຄວາມສາມາດຂອງຄູ່ຮ່ວມງານ (Partner abilities)** ສາມາດເຂົ້າເຖິງໄດ້ສະເພາະເວລາທີ່ມີຂໍ້ມູນການເຂົ້າສູ່ລະບົບຂອງຄູ່ຮ່ວມງານ.

### WooCommerce Integration {#woocommerce-integration}

**ຄວາມສາມາດທີ່ເປີດເຜີຍຕໍ່ສາທາລະນະ (Public abilities)** ທີ່ກ່ຽວຂ້ອງກັບ WooCommerce ມີດັ່ງນີ້:

- ການຈັດການຜະລິດຕະພັນ (Product management)
- ການປະມວນຜົນຄໍາສັ່ງຊື້ (Order processing)
- ການສື່ສານກັບລູກຄ້າ (Customer communication)

**ຄວາມສາມາດພາຍໃນ (Internal abilities)** ບໍ່ຖືກເປີດເຜີຍໃຫ້ WooCommerce ເຫັນ.

### Chat Interface {#chat-interface}

**ທຸກຄວາມສາມາດ** (Public, Internal, Partner) ສາມາດເຂົ້າເຖິງໄດ້ໃນການແຊັດ ຂຶ້ນກັບສິດຂອງຜູ້ໃຊ້:

- ຜູ້ບໍລິຫານ (Administrators) ເຫັນທຸກຄວາມສາມາດ
- ຜູ້ໃຊ້ປົກກະຕິ (Regular users) ເຫັນພຽງແຕ່ Public abilities
- ຄູ່ຮ່ວມງານ (Partners) ເຫັນ Public + Partner abilities (ຖ້າໄດ້ຮັບການອະນຸຍາດໃຫ້ເຂົ້າເຖິງ)

## ແນວທາງປະຕິບັດທີ່ດີດ້ານຄວາມປອດໄພ (Security Best Practices) {#security-best-practices}

### ຫຼັກການສິດທິພິເສດໜ້ອຍທີ່ສຸດ (Principle of Least Privilege) {#principle-of-least-privilege}

- ຕັ້ງຄ່າຄວາມສາມາດໃຫ້ມີການເຫັນໄດ້ທີ່ຈຳກັດທີ່ສຸດ ເຊິ່ງຍັງເຮັດໃຫ້ສາມາດນຳໃຊ້ໄດ້
- ໃຊ້ Partner visibility ສຳລັບການປະຕິບັດງານທີ່ອ່ອນໄຫວ
- ປິດການເປີດໃຊ້ຄວາມສາມາດທີ່ບໍ່ໄດ້ນຳໃຊ້

### ການກວດສອບເປັນປະຈຳ (Regular Audits) {#regular-audits}

- ກວດສອບການເຫັນໄດ້ຂອງຄວາມສາມາດທຸກໆເດືອນ
- ເບິ່ງຫາຄວາມສາມາດທີ່ບໍ່ໄດ້ຈັດປະເພດ (unclassified abilities)
- ລຶບການເຂົ້າເຖິງຂອງຄູ່ຮ່ວມງານທີ່ບໍ່ໄດ້ໃຊ້ແລ້ວ

### ການບັນທຶກຂໍ້ມູນ ແລະ ການຕິດຕາມ (Logging and Monitoring) {#logging-and-monitoring}

- ຕິດຕາມວ່າຄວາມສາມາດໃດຖືກນຳໃຊ້ຫຼາຍທີ່ສຸດ
- ຕິດຕາມຮູບແບບການເຂົ້າເຖິງຂອງຄູ່ຮ່ວມງານ
- ສົ່ງການແຈ້ງເຕືອນເມື່ອມີການນຳໃຊ້ຄວາມສາມາດທີ່ຜິດປົກກະຕິ

### ຄວາມສາມາດຂອງພາກສ່ວນທີສາມ (Third-Party Abilities) {#third-party-abilities}

- ກວດສອບຄວາມສາມາດຂອງພາກສ່ວນທີສາມກ່ອນທີ່ຈະເປີດໃຊ້
- ຈັດປະເພດໃຫ້ຊັດເຈນວ່າແມ່ນຫຍັງ
- ເລີ່ມຕົ້ນດ້ວຍ Partner visibility ຫຼື Internal visibility ກ່ອນ
- ຈຶ່ງຈະຍົກລະດັບເປັນ Public ຫຼັງຈາກໄດ້ກວດສອບຢ່າງລະອຽດແລ້ວ

## ການແກ້ໄຂບັນຫາ {#troubleshooting}

**ບໍ່ສາມາດເຫັນຄວາມສາມາດໃນລາຍການໄດ້**
- ກວດສອບວ່າຄວາມສາມາດນັ້ນຖືກຕິດຕັ້ງ ແລະ ເປີດໃຊ້ງານແລ້ວບໍ
- ກວດສອບວ່າ plugin/addon ນັ້ນເປີດໃຊ້ງານຢູ່ບໍ
- ໂຫຼດໜ້າໃໝ່ (Refresh the page)

**ບໍ່ສາມາດປ່ຽນການເຫັນຂອງຄວາມສາມາດໄດ້**
- ກວດສອບວ່າທ່ານມີສິດເປັນ administrator ແລ້ວບໍ
- ກວດສອບວ່າ plugin ນັ້ນບໍ່ໄດ້ລັອກຄວາມສາມາດໄວ້ບໍ
- ພະຍາຍາມປິດ plugin ທີ່ຂັດແຍ້ງກັນ

**ຄູ່ຮ່ວມງານບໍ່ສາມາດເຂົ້າເຖິງຄວາມສາມາດໄດ້**
- ກວດສອບວ່າຄູ່ຮ່ວມງານນັ້ນຢູ່ໃນລາຍການອະນຸຍາດ (allow-list) ແລ້ວບໍ
- ກວດສອບວ່າການເຫັນຂອງຄວາມສາມາດຖືກຕັ້ງເປັນ Partner ບໍ່
- ຢືນຢັນວ່າຂໍ້ມູນການເຂົ້າສູ່ລະບົບຂອງຄູ່ຮ່ວມງານແມ່ນຖືກຕ້ອງແລ້ວ
- ກວດສອບ API logs ເພື່ອຫາຂໍ້ຜິດພາດໃນການຢັ້ງຢືນ (authentication errors)

**ຄວາມສາມາດທີ່ບໍ່ໄດ້ຈັດປະເພດຍັງ දිÊNຢູ່**
- ທົບທວນ ແລະ ຈັດປະເພດພວກມັນໃນ admin notice
- ກວດສອບວ່າການຈັດປະເພດຂອງທ່ານຖືກບັນທຶກແລ້ວບໍ
- ກວດສອບວ່າ plugin ທີ່ໃຫ້ຄວາມສາມາດນັ້ນມີອັບເດດແລ້ວ

## ການຍົກລະດັບຈາກໂໝດເກົ່າ (Migration from Legacy Mode) {#migration-from-legacy-mode}

ຖ້າທ່ານກຳລັງອັບເກຣດຈາກເວີຊັນເກົ່າຂອງ Superdav AI Agent:

- ຄວາມສາມາດທີ່ມີຢູ່ແລ້ວທັງໝົດຈະຖືກຈັດປະເພດເປັນ Public ອັດຕະໂນມັດ
- ທົບທວນ ແລະ ປັບການເຫັນຕາມຄວາມຈຳເປັນ
- ບໍ່ມີການກະທຳໃດທີ່ຕ້ອງເຮັດ ເວັ້ນເສຍວ່າທ່ານຕ້ອງການຈຳກັດການເຂົ້າເຖິງ

ເບິ່ງ **Third-Party Mode Migration** ເພື່ອຂໍ້ມູນເພີ່ມເຕີມเกี่ยวกับการផ្លាស់ប្តូរໄປສູ່ Native Abilities API integration.

## ຂັ້ນຕອນຕໍ່ໄປ (Next Steps) {#next-steps}

ຫຼັງຈາກຕັ້ງຄ່າການເຫັນຂອງຄວາມສາມາດແລ້ວ:

1. **ທົບທວນຄວາມສາມາດຂອງທ່ານ**: ກວດສອບຄວາມສາມາດທັງໝົດທີ່ຕິດຕັ້ງໄວ້
2. **ຈັດປະເພດຄວາມສາມາດທີ່ບໍ່ໄດ້ຈັດປະເພດ**: ຕອບສະໜອງຕໍ່ admin notices
3. **ຕັ້ງຄ່າຄູ່ຮ່ວມງານ**: ເພີ່ມຄູ່ຮ່ວມງານຖ້າທ່ານໃຊ້ Partner visibility
4. **ຕິດຕາມການນຳໃຊ້**: ຕິດຕາມວ່າຄວາມສາມາດໃດຖືກນຳໃຊ້ຫຼາຍທີ່ສຸດ
5. **ບັນທຶກການຕັດສິນໃຈ**: ເກັບບັນທຶກໄວ້ວ່າເປັນຫຍັງຈຶ່ງເລືອກລະດັບການເຫັນແຕ່ລະອັນ
