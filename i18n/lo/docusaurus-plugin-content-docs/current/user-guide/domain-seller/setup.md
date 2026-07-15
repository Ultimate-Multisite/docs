---
title: ການຕັ້ງຄ່າ ແລະ ການກຳນົດຜູ້ໃຫ້ບໍລິການ
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: ការតំឡើង និងការកំណត់អ្នកផ្តល់សេវា

Addon សម្រាប់ Domain Seller ភ្ជាប់មកជាមួយកម្មវិធីណែនាំ (guided setup wizard) ដែលនឹងនាំអ្នកឆ្លងកាត់គ្រប់ជំហានដែលត្រូវធ្វើ។ ទំព័រនេះនឹងពន្យល់ពីលំហូរនៃកម្មវិធីណែនាំ និងរបៀបកំណត់ ឬប្ដូរការកំណត់អ្នកផ្តល់សេវាបន្ទាប់ពីបានតំឡើងរួច។

## តម្រូវការ {#requirements}

- **Multisite Ultimate** v2.4.12 ឬខ្ពស់ជាងនេះ ដែលត្រូវបានបើកដំណើរការតាមបណ្តាញ (network-activated)
- **PHP** 7.4+
- កូនសោ API (API credentials) យ៉ាងតិចមួយសម្រាប់អ្នកចុះឈ្មោះដែនដែលគាំទ្រ

## ការតំឡើងលើកដំបូង (First-run setup wizard) {#first-run-setup-wizard}

កម្មវិធីណែនាំនេះនឹងដំណើរការដោយស្វ័យប្រវត្តិនៅពេលអ្នកបើកដំណើរការ plugin ជាលើកដំបូងតាមបណ្តាញ។ អ្នកក៏អាចចូលទៅកាន់វាបានគ្រប់ពេលពី **Network Admin › Ultimate Multisite › Domain Seller Setup**។

### ជំហានទី ១ — ជ្រើសរើសអ្នកផ្តល់សេវា (Choose a provider) {#step-1--choose-a-provider}

សូមជ្រើសរើសអ្នកចុះឈ្មោះដែន (registrar) ដែលអ្នកចង់ភ្ជាប់។ ជម្រើសដែលគាំទ្រ៖

| អ្នកផ្តល់សេវា | ការគ្រប់គ្រង DNS | ការការពារ WHOIS |
|---|---|---|
| OpenSRS | បាទ/ចាស | បាទ/ចាស |
| Namecheap | ទេ | បាទ/ចាស (WhoisGuard, ឥតគិតថ្លៃ) |
| HostAfrica | បាទ/ចាស | បាទ/ចាស (ការការពារ ID) |
| Openprovider | បាទ/ចាស | បាទ/ចាស |
| Hostinger | តាមរយៈការបំប្លែងដែន Hostinger ដែលបានបង្ហោះរួចហើយ | បាទ/ចាស |
| GoDaddy | ទេ | ទេ |
| ResellerClub | បាទ/ចាស | ទេ |
| NameSilo | ទេ | ទេ |
| Enom | បាទ/ចាស | ទេ |

### ជំហានទី ២ — បញ្ចូលព័ត៌មានសម្ងាត់ (Enter credentials) {#step-2--enter-credentials}

អ្នកផ្តល់សេវារីននីមួយៗមានវាលព័ត៌មានសម្ងាត់ខុសគ្នា៖

**OpenSRS** — Username និង private key (ពី OpenSRS Reseller Control Panel)

**Namecheap** — Username និង API key (ពី Account › Tools › API Access)

**HostAfrica** — Endpoint API សម្រាប់ Domains Reseller និងព័ត៌មានសម្ងាត់ពី module reseller របស់ HostAfrica។ បច្ចុប្បន្នមិនទាន់មាន endpoint sandbox ពិសេសទេ សូមសាកល្បងដោយការពិនិត្យមើលអានតែ (read-only checks) សុវត្ថិភាពមុនពេលដំណើរការការចុះឈ្មោះពិតប្រាកដ។

**Openprovider** — Username និង password ដែលបានបើក API access រួច។ របៀប sandbox ជាជម្រើសប្រើ Openprovider sandbox API ហើយអ្នកអាចប្រើ customer handle ដើមជាជម្រើសសម្រាប់បច្ចុប្បន្នសម្រាប់ការចុះឈ្មោះ។

**Hostinger** — โทเค็น hPanel ของ Hostinger ที่แชร์มาจากส่วนหลักของการเชื่อมต่อ Hostinger โทเค็นเดียวกันนี้ใช้สำหรับจับคู่โดเมนหลักและการดำเนินการลงทะเบียนผู้ขายโดเมน (Domain Seller registration operations)

**GoDaddy** — API key และ secret (จาก developer.godaddy.com)

**ResellerClub** — Reseller ID และ API key (จากแผงควบคุมของ ResellerClub)

**NameSilo** — API key (จาก namesilo.com › Account › API Manager)

**Enom** — Account ID และ API token

ตรวจสอบ **Sandbox mode** หากมี เพื่อทดสอบกับสภาพแวดล้อมทดสอบของผู้ให้บริการก่อนที่จะใช้งานจริง

### ขั้นตอนที่ 3 — ทดสอบการเชื่อมต่อ {#step-3--test-the-connection}

คลิก **Test Connection** ตัว Wizard จะส่งคำขอ API ขนาดเล็กเพื่อตรวจสอบข้อมูลประจำตัวและการเชื่อมต่อ แก้ไขปัญหาเกี่ยวกับข้อมูลประจำตัวให้เรียบร้อยก่อนดำเนินการต่อ

### ขั้นตอนที่ 4 — นำเข้า TLDs (Top-Level Domains) {#step-4--import-tlds}

คลิก **Import TLDs** เพื่อดึง TLD ทั้งหมดและราคาขายส่งจากผู้ให้บริการที่เชื่อมต่อเข้ามา สิ่งนี้จะเติมรายการ TLD ที่ใช้สำหรับผลิตภัณฑ์โดเมน การนำเข้าอาจใช้เวลาประมาณ 30–60 วินาทีสำหรับผู้ให้บริการที่มีแคตตาล็อก TLD ขนาดใหญ่

TLDs จะถูกซิงค์ใหม่โดยอัตโนมัติวันละครั้งผ่าน cron job ที่ตั้งเวลาไว้

### ขั้นตอนที่ 5 — สร้างผลิตภัณฑ์โดเมน (Create a domain product) {#step-5--create-a-domain-product}

Wizard จะสร้างผลิตภัณฑ์โดเมนแบบ catch-all เริ่มต้นพร้อมส่วนเพิ่มราคา (markup) 10% คุณสามารถแก้ไขผลิตภัณฑ์นี้ได้ทันที หรือข้ามไปและสร้างผลิตภัณฑ์ด้วยตนเองภายใต้ **Ultimate Multisite › Products**

ดู [Domain Products and Pricing](./domain-products) สำหรับคู่มือการตั้งค่าผลิตภัณฑ์ฉบับเต็ม

---

## การกำหนดค่าผู้ให้บริการใหม่ (Reconfiguring a provider) {#reconfiguring-a-provider}

ไปที่ **Network Admin › Ultimate Multisite › Settings › Domain Seller** (หรือคลิก **Settings** ในรายการปลั๊กอิน)

หน้าการตั้งค่าจะมี:

- **เปิดใช้งานการขายโดเมน** — เปิดหรือปิดฟีเจอร์ทั้งหมดนี้ได้เลย
- **ผู้ให้บริการเริ่มต้น (Default provider)** — ผู้ให้บริการที่ใช้ในการค้นหาโดเมนและผลิตภัณฑ์ใหม่ๆ
- **จำนวน TLD สูงสุดต่อการค้นหา (Max TLDs per search)** — จะตรวจสอบ TLD กี่ตัวเมื่อลูกค้าค้นหา ยิ่งใส่ค่าสูง จำนวนตัวเลือกก็จะเยอะขึ้น แต่จะช้าลงหน่อย
- **ระยะเวลาแคชความพร้อมใช้งาน (Availability cache duration)** — จะเก็บผลลัพธ์ความพร้อมใช้งานและราคาไว้กี่เวลานะ ค่าที่ต่ำกว่าจะแม่นยำกว่า แต่จะทำให้มีการเรียก API บ่อยขึ้น
- **จัดการผลิตภัณฑ์โดเมน (Manage domain products)** — ลิงก์ด่วนไปยังรายการผลิตภัณฑ์

### การเพิ่มผู้ให้บริการรายที่สอง {#adding-a-second-provider}

คลิกที่ **Configure providers** แล้วรันวิซาร์ดอีกครั้งสำหรับผู้จดทะเบียนรายใหม่ คุณสามารถตั้งค่าผู้ให้บริการได้หลายรายพร้อมกัน กำหนดให้โดเมนแต่ละตัวเป็นของผู้ให้บริการรายใดรายหนึ่ง หรือปล่อยให้เป็นค่าเริ่มต้นก็ได้

### การซิงค์ TLD ด้วยตนเอง {#syncing-tlds-manually}

ในหน้าการตั้งค่า ให้คลิกที่ **Sync TLDs** ถัดจากผู้ให้บริการที่คุณตั้งค่าไว้ เพื่อดึงราคาล่าสุด ซึ่งมีประโยชน์หลังจากที่มีผู้ให้บริการอัปเดตราคาขายส่งหรือเพิ่ม TLD ใหม่ๆ เข้ามา

---

## บันทึก (Logs) {#logs}

ผู้ให้บริการแต่ละรายจะเขียนบันทึกของตัวเองแยกกัน คุณสามารถดูบันทึกได้ที่ **Network Admin › Ultimate Multisite › Logs**:

| ช่องทาง Log | เนื้อหา |
|---|---|
| `domain-seller-registration` | ความพยายามในการลงทะเบียนทั้งหมด (สำเร็จและไม่สำเร็จ) |
| `domain-seller-renewal` | ผลลัพธ์ของงานการต่ออายุ |
| `domain-seller-opensrs` | กิจกรรม API OpenSRS ดิบ |
| `domain-seller-namecheap` | กิจกรรม API Namecheap ดิบ |
| `domain-seller-hostafrica` | กิจกรรม API HostAfrica ดิบ |
| `domain-seller-openprovider` | กิจกรรม API Openprovider ดิบ |
| `domain-seller-hostinger` | กิจกรรม API Hostinger ดิบ |
| `domain-seller-godaddy` | กิจกรรม API GoDaddy ดิบ |
| `domain-seller-resellerclub` | กิจกรรม API ResellerClub ดิบ |
| `domain-seller-namesilo` | กิจกรรม API NameSilo ดิบ |
| `domain-seller-enom` | กิจกรรม API Enom ดิบ |

---

## บันทึกความสามารถของผู้ให้บริการ (Provider capability notes) {#provider-capability-notes}

API ของผู้ให้บริการแต่ละรายไม่ได้เปิดเผยการทำงานเหมือนกันทั้งหมดครับ ส่วน Addon จะแสดงการทำงานที่ไม่รองรับออกมาเป็นข้อผิดพลาดที่เห็นได้ชัดสำหรับแอดมิน แทนที่จะเงียบหายไปเฉยๆ ครับ

- **HostAfrica** รองรับเวิร์กโฟลว์การขายต่อ (reseller workflow) ที่กว้างที่สุด ซึ่งรวมถึง การค้นหาข้อมูล, การซิงค์ TLD/ราคา, การลงทะเบียน, การต่ออายุ, การโอนย้าย, การอัปเดต nameserver, DNS records, EPP codes, การล็อกผู้ให้บริการ และการป้องกัน ID ครับ
- **Openprovider** รองรับการซิงค์ TLD ราคาแบบ reseller, การลงทะเบียน, การต่ออายุ, การโอนย้าย, การอัปเดต nameserver, โซน DNS, EPP codes, การล็อกผู้ให้บริการ และความเป็นส่วนตัวของ WHOIS มันจะยืนยันตัวตนด้วย bearer token ที่มีอายุสั้น ซึ่ง Addon จะทำการรีเฟรชให้โดยอัตโนมัติครับ
- **Hostinger** รองรับการค้นหาความพร้อมใช้งาน (availability search), การลงทะเบียน, การดูพอร์ตโฟลิโอ, การอัปเดต nameserver, การล็อกผู้ให้บริการ และความเป็นส่วนตัวของ WHOIS ผ่าน token API ของ hPanel ที่ใช้ร่วมกัน API สาธารณะของ Hostinger ไม่ได้เปิดเผยราคาสำหรับ reseller/wholesale, การโอนย้ายขาเข้า (inbound transfer), การต่ออายุแบบระบุ (explicit renewal) หรือการดึง EPP-code ครับ การต่ออายุจะทำการต่ออายุอัตโนมัติเท่านั้นครับ
