---
title: ពង្រឹងការរួមបញ្ចូល Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# ការពង្រឹងការរួមបញ្ចូល Control Panel

## ទិដ្ឋភាពទូទៅ
Enhance គឺជា control panel ទំនើបមួយដែលផ្តល់នូវសមត្ថភាពស្វ័យប្រវត្តិកម្ម និងការគ្រប់គ្រង hosting ដែលមានឥទ្ធិពល។ ការរួមបញ្ចូលនេះអនុញ្ញាតឱ្យមានការซิงค์ domain ដោយស្វ័យប្រเทียม និងការគ្រប់គ្រង SSL certificate រវាង Ultimate Multisite និង Enhance Control Panel។

**ការពិភាក្សាที่เกี่ยวข้อง:** សូមดู [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) สำหรับเคล็ดลับจากชุมชนและข้อมูลเพิ่มเติม

## คุณสมบัติ
- การซิงค์ domain โดยอัตโนมัติเมื่อมีการแมป domain ใน Ultimate Multisite
- การจัดเตรียม SSL certificate อัตโนมัติผ่าน LetsEncrypt เมื่อ DNS ถูกแก้ไข (resolves)
- รองรับ subdomain สำหรับเครือข่ายที่ทำงานในโหมด subdomain
- การลบ domain เมื่อมีการลบการแมป
- การทดสอบการเชื่อมต่อเพื่อตรวจสอบความถูกต้องของ API credentials

## ข้อกำหนดเบื้องต้น

### ข้อกำหนดของระบบ
- ติดตั้งและเข้าถึงได้ Enhance Control Panel
- การติดตั้ง WordPress Multisite ที่โฮสต์อยู่บนหรือเชื่อมต่อกับเซิร์ฟเวอร์ Enhance
- เว็บเซิร์ฟเวอร์ Apache (Enhance รองรับการตั้งค่า Apache ในปัจจุบัน; LiteSpeed Enterprise มีให้ในราคาที่ลดลง)

### การเข้าถึง API
คุณต้องมีสิทธิ์ผู้ดูแลระบบ (administrator access) ของ Enhance Control Panel เพื่อสร้าง API tokens

## การรับข้อมูลประจำตัว API ของคุณ

### 1. สร้าง API Token

1. เข้าสู่ระบบ Enhance Control Panel ในฐานะผู้ดูแลระบบ (administrator)
2. คลิกที่ **Settings** ในเมนูนำทาง (navigation menu)
3. ไปที่ **Access Tokens**
4. คลิก **Create Token**
5. ตั้งชื่อ token ให้สื่อความหมาย (เช่น "Ultimate Multisite Integration")
6. กำหนดบทบาทเป็น **System Administrator**
7. สำหรับวันที่หมดอายุ:
   - ปล่อยว่างไว้หากคุณต้องการให้ token ไม่หมดอายุเลย
   - หรือตั้งวันที่หมดอายุที่เฉพาะเจาะจงเพื่อวัตถุประสงค์ด้านความปลอดภัย
8. คลิก **Create**

បន្ទាប់ពីបង្កើតរួច អ្នកនឹងឃើញ **Access Token** និង **Organization ID**។ សូមរក្សាទុកវាភ្លាមៗព្រោះ token នេះនឹងបង្ហាញតែម្តងប៉ុណ្ណោះ។

### ២. ទទួលបាន Organization ID (ID អង្គភាព)

Organization ID នឹងបង្ហាញនៅលើទំព័រ Access Tokens ក្នុងប្រអប់ព័ត៌មានពណ៌ខៀវដែលមានស្លាកថា "Org ID: {your_id}"។

Organization ID មានទ្រង់ទ្រាយជា UUID ដូចនេះ៖ `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

អ្នកក៏អាចរក Organization ID របស់អតិថិជនបានតាមរយៈ៖
១. ចូលទៅកាន់ទំព័រ **Customers** (អតិថិជន)។
២. ចុចលើ **Manage customer** (គ្រប់គ្រងអតិថិជន) សម្រាប់អតិថិជនដែលពាក់ព័ន្ធ។
៣. មើល URL - Organization ID គឺជាអក្សរតួអក្សរអាលហ្វាបារដែលមាននៅពីក្រោយ `/customers/`។

### ៣. ទទួលបាន Server ID (ID ម៉ាស៊ីន)

ដើម្បីស្វែងរក Server ID (ដែលត្រូវការសម្រាប់ការប្រតិបត្តិការលើ domain)៖

១. នៅលើ Enhance Control Panel សូមចូលទៅកាន់ **Servers** (ម៉ាស៊ីនមេ)។
២. ចុចលើម៉ាស៊ីនដែល WordPress របស់អ្នកកំពុងដំណើរការ។
៣. Server ID (ទ្រង់ទ្រាយ UUID) នឹងអាចមើលឃើញនៅក្នុង URL ឬព័ត៌មានលម្អិតនៃម៉ាស៊ីន។
៤. ឬមួយទៀត អ្នកអាចប្រើ API ដើម្បីរាយបញ្ជីម៉ាស៊ីនបាន៖

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID មានទ្រង់ទ្រាយ UUID ដូចនេះ៖ `00000000-0000-0000-0000-000000000000`

### ៤. ទទួលបាន API URL

API URL របស់អ្នកគឺ URL របស់ Enhance Control Panel របស់អ្នក បូកបន្ថែម `/api/`៖

```
https://your-enhance-panel.com/api/
```

**សំខាន់:** ការប្រើផ្លូវ (path) `/api/` គឺចាំបាច់។ កំហុសទូទៅរួមមាន៖
- ការប្រើតែ domain ដោយគ្មាន `/api/`
- ការប្រើ HTTP ជំនួស HTTPS (HTTPS ចាំបាច់សម្រាប់សុវត្ថិភាព)

## ការកំណត់រចនាសម្ព័ន្ធ (Configuration)

### Constants ដែលត្រូវតម្រូវ (Required Constants)

បន្ថែម constants ខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

// បង្កើនការរួមបញ្ចូល Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### ការកំណត់រចនាសម្ព័ន្ធតាមរយៈ Integration Wizard

1. នៅក្នុង WordPress admin របស់អ្នក សូមចូលទៅកាន់ **Ultimate Multisite** > **Settings**
2. ចូលទៅកាន់แท็บ **Integrations**
3. រកមើល **Enhance Control Panel Integration** ហើយចុច **Configuration**
4. Wizard នឹងណែនាំអ្នកតាមជំហាន៖
   - **Step 1:** ការណែនាំ និងទិដ្ឋភាពរួមនៃមុខងារ (Introduction and feature overview)
   - **Step 2:** បញ្ចូលព័ត៌មានសម្ងាត់ API របស់អ្នក (Token, API URL, Server ID)
   - **Step 3:** សាកល្បងការតភ្ជាប់ (Test the connection)
   - **Step 4:** មើលពិនិត្យ និងបើកដំណើរការ (Review and activate)

អ្នកអាចជ្រើសរើស៖
- អនុញ្ញាតឱ្យ wizard បញ្ចូល constants ទៅក្នុងឯកសារ `wp-config.php` របស់អ្នកដោយស្វ័យប្រវត្តិ
- ចម្លងនិយមន័យ constant ហើយបន្ថែមវាដោយដៃ

## ការកំណត់រចនាសម្ព័ន្ធ WordPress បន្ថែម

ផ្អែកលើមតិយោបល់ពីសហគមន៍ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) អ្នកប្រហែលជាត្រូវកំណត់ការរចនាសម្ព័ន្ធបន្ថែមទាំងនេះ៖

### ការកំណត់រចនាសម្ព័ន្ធ .htaccess

ប្រសិនបើអ្នកជួបបញ្ហាជាមួយការបំប្លែងឈ្មោះដែន (domain mapping)៖
1. លុបឯកសារ Enhance `.htaccess` ដើមចេញ
2. ជំនួសវាដោយឯកសារ WordPress Multisite `.htaccess` ស្តង់ដារ

### Cookie Constants

បន្ថែម constants ទាំងនេះទៅក្នុង `wp-config.php` ដើម្បីធានាថាការគ្រប់គ្រង cookie ដំណើរការបានត្រឹមត្រូវឆ្លងកាត់ដែនដែលបានបំប្លែង៖

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## វាដំណើរការដោយរបៀបណា

### នៅពេលដែលឈ្មោះដែនត្រូវបានបំប្លែង (When a Domain is Mapped)

១. អ្នកប្រើប្រាស់ភ្ជាប់ឈ្មោះដែនផ្ទាល់ខ្លួន (custom domain) នៅក្នុង Ultimate Multisite (ឬបង្កើតគេហទំព័រថ្មីក្នុងរបៀប subdomain)។
២. ការរួមបញ្ចូលគ្នា (integration) បញ្ជូនសំណើ POST ទៅកាន់ API របស់ Enhance៖ `/servers/{server_id}/domains`។
៣. Enhance បន្ថែមឈ្មោះដែននោះទៅក្នុងការកំណត់រចនាសម្ព័ន្ធម៉ាស៊ីនរបស់អ្នក។
៤. នៅពេលដែល DNS ដោះស្រាយមកកាន់ម៉ាស៊ីនរបស់អ្នក Enhance នឹងផ្តល់វិញ្ញាបនបត្រ SSL ដោយស្វ័យប្រវត្តិតាមរយៈ LetsEncrypt។
៥. ឈ្មោះដែននោះនឹងដំណើរការជាមួយ HTTPS។

### នៅពេលដែលលុបឈ្មោះដែនចេញ

១. លុបការភ្ជាប់ឈ្មោះដែន (domain mapping) នៅក្នុង Ultimate Multisite។
២. ការរួមបញ្ចូលគ្នា (integration) សួរទៅ Enhance ដើម្បីស្វែងរក ID របស់ឈ្មោះដែននោះ។
៣. បញ្ជូនសំណើ DELETE ទៅកាន់៖ `/servers/{server_id}/domains/{domain_id}`។
៤. Enhance លុបឈ្មោះដែនចេញពីការកំណត់រចនាសម្ព័ន្ធម៉ាស៊ីនរបស់អ្នក។

### ការពិនិត្យ DNS និង SSL

Ultimate Multisite មានមុខងារត្រួតពិនិត្យ DNS និង SSL ភ្ជាប់មកជាមួយ៖
- អ្នកអាចកំណត់រយៈពេលនៃការត្រួតពិនិត្យនៅក្នុង **Domain Mapping Settings** (លំនាំដើម៖ ៣០០ វិនាទី/៥ នាទី)។
- ប្រព័ន្ធនឹងផ្ទៀងផ្ទាត់ការផ្សព្វផ្សាយ DNS មុនពេលសម្គាល់ឈ្មោះដែននោះថាបានដំណើរការ។
- ការត្រួតពិនិត្យសុពលភាពវិញ្ញាបនបត្រ SSL ត្រូវបានធ្វើឡើងដោយស្វ័យប្រវត្តិ។
- Enhance ដោះស្រាយការផ្តល់វិញ្ញាបនបត្រ SSL ដោយស្វ័យប្រវត្តិទេ ដូច្នេះមិនចាំបាច់កំណត់រចនាសម្ព័ន្ធ SSL ដោយដៃទេ។

## ការផ្ទៀងផ្ទាត់ការរៀបចំ (Verifying Setup)

### សាកល្បងការតភ្ជាប់ (Test the Connection)

១. នៅក្នុង Integration Wizard សូមប្រើជំហាន **Test Connection**។
២. Plugin នឹងព្យាយាមបង្ហាញបញ្ជីឈ្មោះដែននៅលើម៉ាស៊ីនរបស់អ្នក។
៣. សារជោគជ័យនឹងបញ្ជាក់ថា៖
   - API credentials ត្រឹមត្រូវ
   - API URL អាចចូលបាន
   - Server ID មានសុពលភាព
   - ការអនុញ្ញាតត្រូវបានកំណត់ត្រឹមត្រូវ

### បន្ទាប់ពីភ្ជាប់ឈ្មោះដែន (After Mapping a Domain)

១. ភ្ជាប់ឈ្មោះដែនសាកល្បងនៅក្នុង Ultimate Multisite។
២. ពិនិត្យមើល logs របស់ Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)។
៣. ផ្ទៀងផ្ទាត់នៅក្នុង Enhance Control Panel ថាឈ្មោះដែនត្រូវបានបន្ថែម៖
   - ចូលទៅកាន់ **Servers** > **Your Server** > **Domains**
   - ឈ្មោះដែនថ្មីគួរតែលេចឡើងក្នុងបញ្ជី
៤. នៅពេលដែល DNS បានផ្សព្វផ្សាយរួច សូមផ្ទៀងផ្ទាត់ថា SSL ត្រូវបានផ្តល់ដោយស្វ័យប្រវត្តិ។

## ការដោះស្រាយបញ្ហា (Troubleshooting)

### បញ្ហាបណ្តាញ API មិនដំណើរការ (API Connection Issues)

**កំហុស: "Failed to connect to Enhance API" (ភ្ជាប់ទៅកាន់ Enhance API មិនបាន)**
- សូមពិនិត្យមើលថា `WU_ENHANCE_API_URL` មាន `/api/` នៅចុងបញ្ចប់ឬអត់។
- ត្រូវប្រាកដថាអ្នកកំពុងប្រើ HTTPS មិនមែន HTTP ទេ។
- សូមពិនិត្យមើលថាតើផ្ទាំង Enhance អាចចូលដំណើរការបានពីម៉ាស៊ីនបម្រើ WordPress របស់អ្នកដែរឬទេ។
- សូមពិនិត្យមើលថាតើមានច្បាប់ Firewall ណាមួយរារាំងការតភ្ជាប់ដែរឬទេ។

**កំហុស: "Enhance API Token not found" (រកមិនឃើញ Enhance API Token)**
- សូមប្រាកដថា `WU_ENHANCE_API_TOKEN` ត្រូវបានកំណត់នៅក្នុងឯកសារ `wp-config.php`។
- សូមពិនិត្យមើលថាតើ Token នោះត្រូវបានលុប ឬផុតសុពលភាពនៅក្នុង Enhance ដែរឬទេ។
- សូមពិនិត្យមើលការវាយអក្ខរាវិចារណកម្ម (typos) នៅក្នុងតម្លៃរបស់ token។

**កំហុស: "Server ID is not configured" (Server ID មិនត្រូវបានកំណត់)**
- សូមប្រាកដថា `WU_ENHANCE_SERVER_ID` ត្រូវបានកំណត់នៅក្នុងឯកសារ `wp-config.php`។
- សូមប្រាកដថា Server ID នោះមានទ្រង់ទ្រាយ UUID ដែលត្រឹមត្រូវ។
- សូមបញ្ជាក់ថាតើម៉ាស៊ីនបម្រើ (server) នោះមាននៅក្នុងផ្ទាំង Enhance របស់អ្នកឬអត់។

### ដែនឈ្មោះមិនត្រូវបានបន្ថែម (Domain Not Added)

**ពិនិត្យមើល Log:**
1. ចូលទៅកាន់ **Ultimate Multisite** > **Logs**
2. ចុច Filter ដោយប្រើ **integration-enhance**
3. សូមស្វែងរកសារកំហុសដែលបង្ហាញពីបញ្ហា។

**មូលហេតុទូទៅ:**
- ទម្រង់ឈ្មោះដែនមិនត្រឹមត្រូវ (Invalid domain name format)
- ដែនឈ្មោះនោះមាននៅក្នុង Enhance រួចហើយ
- ការអនុញ្ញាត API 不គ្រប់គ្រាន់ (សូមប្រាកដថា token មានតួនាទី System Administrator)
- Server ID មិនត្រូវគ្នានឹងម៉ាស៊ីនបម្រើជាក់ស្តែងនៅក្នុង Enhance

### បញ្ហាប័ណ្ណ SSL (SSL Certificate Issues)

**SSL មិនទាន់ត្រូវបានផ្តល់ជូន (SSL not provisioning):**
- សូមពិនិត្យមើលថាតើ DNS កំពុងចង្អុលទៅ IP address របស់ម៉ាស៊ីនបម្រើរបស់អ្នកឬទេ។
- សូមពិនិត្យមើលថាតើដែនឈ្មោះនោះបង្ហាញត្រឹមត្រូវដែរឬទេ៖ `nslookup yourdomain.com`
- Enhance ទាមទារឱ្យ DNS ត្រូវបានដោះស្រាយ (resolve) មុនពេលវាអាចផ្តល់ SSL បាន។
- ការផ្តល់ SSL ជាធម្មតានឹងចំណាយពេលពី ៥ ទៅ ១០ នាទី បន្ទាប់ពី DNS ផ្សព្វផ្សាយរួច។
- សូមពិនិត្យមើល Log នៃ Enhance Control Panel សម្រាប់កំហុសជាក់លាក់អំពី SSL។

**ការដោះស្រាយបញ្ហា SSL ដោយដៃនៅក្នុង Enhance:**
1. ចូលទៅកាន់ **Servers** > **Your Server** > **Domains**
2. រកឃើញដែនឈ្មោះរបស់អ្នក ហើយពិនិត្យមើលស្ថានភាព SSL របស់វា។
3. អ្នកអាចបង្ខំឱ្យមានការផ្តល់ SSL ដោយដៃបាន ប្រសិនបើចាំបាច់។

### គម្លាតនៃការត្រួតពិនិត្យ DNS (DNS Check Interval)

ប្រសិនបើការធ្វើឱ្យឈ្មោះដែន (domains) ឬវិញ្ញាបនបត្រ SSL យូរពេកក្នុងការដំណើរការ៖
១. ចូលទៅកាន់ **Ultimate Multisite** > **Settings** > **Domain Mapping**
២. រកមើលការកំណត់ **DNS Check Interval**
៣. កែតម្រូវពីតម្លៃលំនាំដើម 300 វិនាទី មកជាតម្លៃទាបជាងនេះ (អប្បបរមា៖ ១០ វិនាទី)
៤. **ចំណាំ:** ការដាក់ចន្លោះពេលឱ្យខ្លីជាងនេះ មានន័យថាការត្រួតពិនិត្យញឹកញាប់ជាងមុន ប៉ុន្តែអាចធ្វើឱ្យបន្ទុកម៉ាស៊ីនមេ (server load) កើនឡើង

### កំហុសនៃការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (Authentication Errors)

**កំហុស HTTP 401/403:**
- បង្កើត (Regenerate) API token របស់អ្នកនៅក្នុង Enhance
- ត្រួតពិនិត្យមើលថាតークននោះមានតួនាទី **System Administrator**
- ពិនិត្យមើលថាតークននោះមិនទាន់ផុតសុពលភាពទេ
- ត្រូវប្រាកដថាអ្នកកំពុងប្រើ Organization ID ដែលត្រឹមត្រូវ (ទោះបីជាធម្មតាវាមិនត្រូវបានទាមទារនៅក្នុង URL ក៏ដោយ)

### ការវិភាគ Log

បើកការ ghiបញ្ជីលម្អិត៖
```php
// បន្ថែមទៅក្នុង wp-config.php ដើម្បីデバッグកាន់តែល្អ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

បន្ទាប់មកពិនិត្យមើល log នៅ៖
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: មាននៅក្នុង giao diện admin របស់ Enhance

## API Reference (ឯកសារយោង API)

### ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ (Authentication)
ការស្នើសុំ API ទាំងអស់ប្រើការផ្ទៀងផ្ទាត់តាមរយៈ Bearer token៖
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint ដែលប្រើជាទូទៅ

**បញ្ជី Servers:**
```
GET /servers
```

**បញ្ជី Domains នៅលើ Server:**
```
GET /servers/{server_id}/domains
```

**បន្ថែម Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**លុប Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### ឯកសារ API ពេញលេញ
ឯកសារ API ពេញលេញ៖ [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices (ការអនុវត្តល្អបំផុត)

### សុវត្ថិភាព (Security)
- **កុំដាក់ API tokens ចូលក្នុង version control ជាថ្នូរ**
- រក្សាទុក tokens នៅលើ `wp-config.php` ដែលមិនគួរបញ្ចូលទៅក្នុង Git
- ប្រើ tokens ដែលមានសិទ្ធិសមស្រប (System Administrator សម្រាប់កម្មវិធីពេញលេញ)
- កំណត់ថ្ងៃផុតកំណត់នៃ token សម្រាប់ environment ប្រភេទ production
- ប្តូរ (Rotate) tokens ជាចន្លោះពេលទៀងទាត់

### ប្រសិទ្ធភាព (Performance)
- ប្រើប្រាស់ការត្រួតពិនិត្យ DNS by default (300 seconds) ដើម្បីជៀសវាងការហៅ API ច្រើនពេក
- តាមដានធនធានរបស់ server Enhance នៅពេលដំណើរការប្រតិបត្តិការដែនក្នុងទ្រង់ទ្រាយធំ
- ពិចារណាដាក់បញ្ចូលដែនជាដំណាក់កាល (staggering) ប្រសិនបើអ្នកត្រូវធ្វើការបំប្លែងដែនច្រើនក្នុងពេលតែមួយ

### ការត្រួតពិនិត្យ (Monitoring)
- ពិនិត្យមើល log របស់ Ultimate Multisite ជាប្រចាំរកកំហុសនៃការរួមបញ្ចូល (integration errors)
- រៀបចំការតាមដានសម្រាប់ការបន្ថែមដែនដែលបរាជ័យ
- ផ្ទៀងផ្ទាត់ថាវិញ្ញាបនបត្រ SSL កំពុងដំណើរការបានត្រឹមត្រូវ
- ចាំមើលសមត្ថភាពរបស់ server Enhance និងដែនកំណត់នៃដែន

## ធនធានបន្ថែម (Additional Resources)

- **ឯកសារផ្លូវការរបស់ Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **ឯកសារ API របស់ Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **វេទិកាផ្សារភ្ជាប់របស់ Enhance (Enhance Community Forum):** [https://community.enhance.com](https://community.enhance.com)
- **ការពិភាក្សានៅ GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **មគ្គុទ្ទេសក៍ការបំប្លែងដែន Ultimate Multisite:** សូមមើល trang wiki "How to Configure Domain Mapping v2"

## ការគាំទ្រ (Support)

ប្រសិនបើអ្នកជួបបញ្ហា៖
1. ពិនិត្យមើលផ្នែក Troubleshooting នៅខាងលើ
2. មើល log របស់ Ultimate Multisite
3. ពិគ្រោះជាមួយ [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. ទាក់ទងការគាំទ្ររបស់ Enhance ប្រសិនបើមានបញ្ហាជាក់លាក់នៃ panel
5. បង្កើតការពិភាក្សាថ្មីជាមួយនឹង log កំហុសលម្អិតដើម្បីទទួលបានជំនួយពីសហគមន៍

## ចំណាំ (Notes)

- ការរួមបញ្ចូលនេះគាំទ្រតែអាសយដ្ឋានដែនជំនួស (domain aliases) ប៉ុណ្ណោះ។ Enhance គ្រប់គ្រង SSL ដោយស្វ័យប្រវត្តិ។
- ការរួមបញ្ចូលនេះគាំទ្រទាំងការកំណត់រចនាសម្ព័ន្ធសម្រាប់ឈ្មោះដែនផ្ទាល់ខ្លួន (custom domain mappings) និងគេហទំព័រផ្អែកលើ subdomain។
- អ្នកអាចកំណត់ឱ្យបង្កើត subdomain www ដោយស្វ័យប្រវត្តិនៅក្នុងការកំណត់ Domain Mapping បាន។
- Enhance គាំទ្រការកំណត់រចនាសម្ព័ន្ធ Apache បច្ចុប្បន្ន (មាន LiteSpeed Enterprise សម្រាប់ប្រើផងដែរ)។
- ការលុបដែនចេញពី Ultimate Multisite នឹងលុបដែននោះចេញពី Enhance ប៉ុន្តែប្រហែលជាមិនបានលុបវិញ្ញាបនបត្រ SSL ដែលទាក់ទងដោយស្វ័យប្រវត្តិភ្លាមៗទេ។
