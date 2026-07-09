---
title: ការរៀបចំ និងការកំណត់អ្នកផ្តល់សេវា
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# អ្នកលក់ដែន (.Domain Seller): ការរៀបចំ និងការកំណត់អ្នកផ្តល់សេវា {#domain-seller-setup-and-provider-configuration}

Addon Domain Seller ភ្ជាប់មកជាមួយកម្មវិធីជួយបង្រៀន (guided setup wizard) ដែលនឹងណែនាំអ្នកឆ្លងកាត់គ្រប់ជំហានដែលត្រូវការ។ ទំព័រនេះគ្របដណ្តប់លើលំហូរនៃកម្មវិធីជួយ និងរបៀបកំណត់រចនាសម្ព័ន្ធ ឬកំណត់ឡើងវិញនូវអ្នកផ្តល់សេវា បន្ទាប់ពីនោះ។

## តម្រូវការ {#requirements}

- **Multisite Ultimate** v2.4.12 ឬខ្ពស់ជាងនេះ ដែលបានបើកដំណើរការតាមបណ្តាញ (network-activated)
- **PHP** 7.4+
- លិខិតសម្ងាត់ API (API credentials) យ៉ាងតិចមួយសម្រាប់អ្នកចុះបញ្ជីដែលគាំទ្រ

## កម្មវិធីជួយរៀបចំលើកដំបូង (First-run setup wizard) {#first-run-setup-wizard}

កម្មវិធីជួយរៀបចំនឹងដំណើរការដោយស្វ័យប្រវត្តិនៅពេលអ្នកបើកដំណើរការ Addon plugin ជាលើកដំបូងតាមបណ្តាញ។ វាអាចប្រើបានគ្រប់ពេលវេលាពី **Network Admin › Ultimate Multisite › Domain Seller Setup**។

### ជំហានទី ១ — ជ្រើសរើសអ្នកផ្តល់សេវា (Choose a provider) {#step-1--choose-a-provider}

ជ្រើសរើសអ្នកចុះបញ្ជី (registrar) ដែលអ្នកចង់ភ្ជាប់។ ជម្រើសដែលគាំទ្រ៖

| អ្នកផ្តល់សេវា (Provider) | ការគ្រប់គ្រង DNS | ការសម្ងាត់ WHOIS |
|---|---|---|
| OpenSRS | បាទ (Yes) | បាទ (Yes) |
| Namecheap | ទេ (No) | បាទ (Yes) (WhoisGuard, ឥតគិតថ្លៃ) |
| HostAfrica | បាទ (Yes) | បាទ (Yes) (ការការពារ ID) |
| Openprovider | បាទ (Yes) | បាទ (Yes) |
| Hostinger | តាមរយៈការបំប្លែងដែន Hostinger ដែលបានបង្ហោះរួចហើយ | បាទ (Yes) |
| GoDaddy | ទេ (No) | ទេ (No) |
| ResellerClub | បាទ (Yes) | ទេ (No) |
| NameSilo | ទេ (No) | ទេ (No) |
| Enom | បាទ (Yes) | ទេ (No) |

### ជំហានទី ២ — បញ្ចូលព័ត៌មានសម្ងាត់ (Enter credentials) {#step-2--enter-credentials}

អ្នកផ្តល់សេវាកម្មនីមួយៗមានវាលព័ត៌មានសម្ងាត់ខុសគ្នា៖

**OpenSRS** — Username និង private key (ពី OpenSRS Reseller Control Panel)

**Namecheap** — Username និង API key (ពី Account › Tools › API Access)

**HostAfrica** — Endpoint API របស់អ្នកចុះបញ្ជីដែន (Domains Reseller API endpoint) និងព័ត៌មានសម្ងាត់ពី module អ្នកលក់ឡើងវិញរបស់ HostAfrica។ បច្ចុប្បន្នមិនទាន់មាន endpoint sandbox ពិសេសទេ សូមសាកល្បងដោយការពិនិត្យមើលអានតែបាន (read-only checks) មុនពេលដំណើរការការចុះបញ្ជីពិតប្រាកដ។

**Openprovider** — Username និង password ដែលបើកដំណើរការ API access។ របៀប sandbox ជាជម្រើសប្រើ Openprovider sandbox API ហើយ handle អតិថិជនលំនាំដើមជាជម្រើសអាចត្រូវបានប្រើឡើងវិញសម្រាប់ការចុះបញ្ជី។

**Hostinger** — API token សម្រាប់ hPanel របស់ Hostinger ដែលប្រើសម្រាប់ការតភ្ជាប់ស្នូល។ Token នេះត្រូវបានប្រើដើម្បីកំណត់ផែនទីដែនស្នូល និងប្រតិបត្តិការចុះឈ្មោះអ្នកលក់ដែន។

**GoDaddy** — API key និង secret (ពី developer.godaddy.com)

**ResellerClub** — Reseller ID និង API key (ពី control panel របស់ ResellerClub)

**NameSilo** — API key (ពី namesilo.com › Account › API Manager)

**Enom** — Account ID និង API token

ពិនិត្យមើល **Sandbox mode** ប្រសិនបើមាន ដើម្បីសាកល្បងជាមួយបរិយាកាសតេស្តរបស់អ្នកផ្តល់សេវា មុនពេលដាក់ឱ្យដំណើរការ។

### ជំហានទី ៣ — សាកល្បងការតភ្ជាប់ {#step-3--test-the-connection}

ចុចលើ **Test Connection**។ Wizard នឹងបញ្ជូនការហៅ API បែបស្រាលៗដើម្បីផ្ទៀងផ្ទាត់ព័ត៌មានសម្ងាត់ និងការតភ្ជាប់។ សូមជួសជុលបញ្ហាព័ត៌មានសម្ងាត់ណាមួយមុនពេលបន្ត។

### ជំហានទី ៤ — នាំចូល TLDs {#step-4--import-tlds}

ចុចលើ **Import TLDs** ដើម្បីទាញយក TLDs ទាំងអស់ដែលមាន និងតម្លៃលក់ដុំពីអ្នកផ្តល់សេវាដែលបានភ្ជាប់។ ការធ្វើបែបនេះនឹងបំពេញបញ្ជី TLD ដែលប្រើសម្រាប់ផលិតផលដែន។ ការនាំចូលអាចចំណាយពេល ៣០–៦០ វិនាទីសម្រាប់អ្នកផ្តល់សេវាដែលមានបញ្ជី TLDs ច្រើន។

TLDs ក៏ត្រូវបានធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិម្តងក្នុងមួយថ្ងៃតាមរយៈ scheduled cron job ផងដែរ។

### ជំហានទី ៥ — បង្កើតផលិតផលដែន {#step-5--create-a-domain-product}

Wizard នឹងបង្កើតផលិតផលដែនទូទៅ (catch-all domain product) ដោយមានការបន្ថែមតម្លៃ ១០%។ អ្នកអាចកែសម្រួលផលិតផលនេះភ្លាមៗ ឬលុបចោល ហើយបង្កើតផលិតផលដោយដៃក្រោម **Ultimate Multisite › Products**។

សូមមើល [Domain Products and Pricing](./domain-products) សម្រាប់មគ្គុទ្ទេសក៍ការកំណត់រចនាសម្ព័ន្ធផលិតផលពេញលេញ។

---

## ការកំណត់ឡើងវិញនូវអ្នកផ្តល់សេវា (Reconfiguring a provider) {#reconfiguring-a-provider}

ចូលទៅកាន់ **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ឬចុចលើ **Settings** នៅក្នុងបញ្ជី plugin)។

ទំព័រការកំណត់នេះមាន៖

- **เปิดใช้งานการขายโดเมน** — เปิดหรือปิดฟีเจอร์ทั้งหมดนี้ได้
- **ผู้ให้บริการเริ่มต้น (Default provider)** — ผู้ให้บริการที่ใช้สำหรับการค้นหาโดเมนและผลิตภัณฑ์ใหม่ๆ
- **จำนวน TLD สูงสุดต่อการค้นหา (Max TLDs per search)** — จะตรวจสอบ TLD กี่ตัวเมื่อลูกค้าค้นหา; ค่าที่สูงกว่าจะแสดงตัวเลือกมากขึ้นแต่จะช้าลง
- **ระยะเวลาแคชความพร้อมใช้งาน (Availability cache duration)** — ระยะเวลาที่จะเก็บผลลัพธ์ความพร้อมใช้งานและราคาไว้; ค่าที่ต่ำกว่าจะแม่นยำกว่าแต่เพิ่มจำนวนการเรียก API

- **จัดการผลิตภัณฑ์โดเมน (Manage domain products)** — ลิงก์ด่วนไปยังรายการ Products
- **กำหนดค่าผู้ให้บริการ (Configure providers)** — เปิดตัวช่วยติดตั้ง (Integration Wizard) เพื่อเพิ่มหรือตั้งค่าผู้ให้บริการใหม่

### การเพิ่มผู้ให้บริการที่สอง {#adding-a-second-provider}

คลิกที่ **Configure providers** แล้วรันวิซาร์ดอีกครั้งสำหรับผู้จดทะเบียนรายใหม่ คุณสามารถตั้งค่าผู้ให้บริการได้หลายรายพร้อมกัน กำหนดผลิตภัณฑ์โดเมนแต่ละรายการให้กับผู้ให้บริการที่เฉพาะเจาะจง หรือปล่อยให้เป็นค่าเริ่มต้นก็ได้

### การซิงค์ TLD ด้วยตนเอง {#syncing-tlds-manually}

ในหน้าการตั้งค่า ให้คลิก **Sync TLDs** ถัดจากผู้ให้บริการที่คุณกำหนดค่าไว้ เพื่อดึงราคาล่าสุด ซึ่งมีประโยชน์หลังจากที่มีผู้ให้บริการอัปเดตราคาขายส่งหรือเพิ่ม TLD ใหม่ๆ

---

## บันทึก (Logs) {#logs}

ผู้ให้บริการแต่ละรายจะเขียนบันทึกลงในช่องทางบันทึกของตัวเอง คุณสามารถดูบันทึกได้ภายใต้ **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | ការព្យាយាមចុះឈ្មោះទាំងអស់ (ជោគជ័យ និងបរាជ័យ) |
| `domain-seller-renewal` | លទ្ធផលការងារបន្តអាជ្ញាប័ណ្ណ |
| `domain-seller-opensrs` | សកម្មភាព API OpenSRS ដើម |
| `domain-seller-namecheap` | សកម្មភាព API Namecheap ដើម |
| `domain-seller-hostafrica` | សកម្មភាព API HostAfrica ដើម |
| `domain-seller-openprovider` | សកម្មភាព API Openprovider ដើម |
| `domain-seller-hostinger` | សកម្មភាព API Hostinger ដើម |
| `domain-seller-godaddy` | សកម្មភាព API GoDaddy ដើម |
| `domain-seller-resellerclub` | សកម្មភាព API ResellerClub ដើម |
| `domain-seller-namesilo` | សកម្មភាព API NameSilo ដើម |
| `domain-seller-enom` | សកម្មភាព API Enom ដើម |

---

## កំណត់ចំណាំអំពីសមត្ថភាពអ្នកផ្តល់សេវា (Provider capability notes) {#provider-capability-notes}

API របស់ក្រុមហ៊ុនចុះឈ្មោះ (registrar) មិនបង្ហាញប្រតិបត្តិការដូចគ្នាទាំងអស់នោះទេ។ Addon នេះនឹងបង្ហាញប្រតិបត្តិការដែលមិនត្រូវបានគាំទ្រដោយមានកំហុសច្បាស់លាស់សម្រាប់អ្នកគ្រប់គ្រងជំនួសឱ្យការបរាជ័យដោយស្ងៀម។

- **HostAfrica** គាំទ្រដល់លំហូរការងារអ្នកលក់ឡើងវិញ (reseller workflow) ដែលទូលំទូលាយបំផុត រួមទាំងការស្វែងរក (lookup), ការធ្វើសមកាលកម្ម TLD/តម្លៃ, ការចុះឈ្មោះ, ការបន្តអាជ្ញាប័ណ្ណ, ការផ្ទេរ, ការធ្វើបច្ចុប្បន្នភាព nameserver, កំណត់ត្រា DNS, កូដ EPP, ការចាក់សោ registrar និងការការពារ ID។
- **Openprovider** គាំទ្រដល់ការធ្វើសមកាលកម្ម TLD ដែលកំណត់តម្លៃអ្នកលក់ឡើងវិញ (reseller-priced), ការចុះឈ្មោះ, ការបន្តអាជ្ញាប័ណ្ណ, ការផ្ទេរ, ការធ្វើបច្ចុប្បន្នភាព nameserver, តំបន់ DNS, កូដ EPP, ការចាក់សោ registrar និងឯកជនភាព WHOIS។ វាផ្ទៀងផ្ទាត់ជាមួយ bearer token ដែលមានសុពលភាពខ្លី ហើយ addon នេះនឹងធ្វើការបន្ត (refresh) ដោយស្វ័យប្រវត្តិ។
- **Hostinger** គាំទ្រដល់ការស្វែងរកភាពអាចប្រើបាន (availability search), ការចុះឈ្មោះ, ការស្វែងរកផលប័ត្រ (portfolio lookup), ការធ្វើបច្ចុប្បន្នភាព nameserver, ការចាក់សោ registrar និងឯកជនភាព WHOIS តាមរយៈ token API របស់ hPanel ដែលចែករំលែក។ API ដែនសាធារណៈរបស់ Hostinger មិនបង្ហាញតម្លៃអ្នកលក់ឡើងវិញ/តម្លៃដុំ (reseller/wholesale pricing), ការផ្ទេរចូល (inbound transfer), ការបន្តអាជ្ញាប័ណ្ណដោយផ្ទាល់ (explicit renewal) ឬការទាញយកកូដ EPP ទេ។ ការបន្តអាជ្ញាប័ណ្ណគឺធ្វើឡើងដោយស្វ័យប្រវត្តិតែប៉ុណ្ណោះ។
