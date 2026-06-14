---
title: ការរួមបញ្ចូល Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# ការតភ្ជាប់ Cloudways

## ទិដ្ឋភាពទូទៅ
Cloudways គឺជាវេទិកាបង្ហោះគេហទំព័រលើពពកដែលបានគ្រប់គ្រង ដែលអនុញ្ញាតឱ្យអ្នកដាក់ពង្រាយ (deploy) គេហទំព័រ WordPress នៅលើអ្នកផ្តល់សេវាពពកផ្សេងៗដូចជា DigitalOcean, AWS, Google Cloud និងច្រើនទៀត។ ការតភ្ជាប់នេះជួយឱ្យមានការធ្វើសមកាលកម្មឈ្មោះដែន (domain syncing) ដោយស្វ័យប្រវត្តិ និងការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL រវាង Ultimate Multisite និង Cloudways។

## លក្ខណៈពិសេស
- ការធ្វើសមកាលកម្មឈ្មោះដែនដោយស្វ័យប្រវត្តិ
- ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL
- ការគាំទ្រសម្រាប់ឈ្មោះដែនបន្ថែម (extra domains)
- ការផ្ទៀងផ្ទាត់ DNS សម្រាប់វិញ្ញាបនបត្រ SSL

## តម្រូវការ
អ្នកត្រូវកំណត់ថេរ (constants) ខាងក្រោមនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ជាជម្រើស អ្នកក៏អាចកំណត់បន្ថែមបាន៖

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'បញ្ជីឈ្មោះដែនដែលបំបែកដោយសញ្ញាក្បៀស,ឧទាហរណ៍: domain1.com,domain2.net');
```

## ការណែនាំអំពីការដំឡើង (Setup Instructions)

### ១. ទទួលបានព័ត៌មាន API របស់ Cloudways របស់អ្នក

១. ចុចចូលទៅកាន់แดชប៊ឺរ (dashboard) របស់ Cloudways។
២. ចូលទៅកាន់ "Account" > "API Keys"។
៣. បង្កើត API key ប្រសិនបើអ្នកមិនទាន់មានទេ។
៤. កូពី email និង API key របស់អ្នក។

### ២. ទទួលបាន Server ID និង Application IDs របស់អ្នក

១. នៅក្នុងแดชប៊ឺរ Cloudways របស់អ្នក សូមចូលទៅកាន់ "Servers"។
២. ជ្រើសរើស server ដែលគេហទំព័រ WordPress multisite របស់អ្នកត្រូវបានបង្ហោះ (hosted)។
៣. Server ID អាចមើលឃើញនៅក្នុង URL៖ `https://platform.cloudways.com/server/{SERVER_ID}`
៤. ចូលទៅកាន់ "Applications" ហើយជ្រើសរើសកម្មវិធី WordPress របស់អ្នក។
៥. App ID អាចមើលឃើញនៅក្នុង URL៖ `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### ៣. បន្ថែមថេរ (Constants) ទៅក្នុង wp-config.php

បន្ថែមថេរខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ប្រសិនបើអ្នកមាន **domain ខាងក្រៅ** (ដែលនៅខាងក្រៅបណ្តាញ multisite របស់អ្នក) ដែលត្រូវរក្សាទុកក្នុងបញ្ជី aliases របស់ Cloudways រៀងរាល់ពេល៖

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning កុំបញ្ចូល wildcard នៃបណ្តាញរបស់អ្នកផ្ទាល់
**កុំ** បន្ថែម `*.your-network.com` (ឬรูปแบบ subdomain ណាមួយនៃបណ្តាញរបស់អ្នក) ទៅក្នុង `WU_CLOUDWAYS_EXTRA_DOMAINS`។ សូមមើល [សំខាន់ — ឧបសគ្គ SSL wildcard](#important--wildcard-ssl-pitfall)ខាងក្រោម ដើម្បីដឹងពីមូលហេតុដែលវាការពារការចេញវិញ្ញាបនបត្រ SSL សម្រាប់ tenant នីមួយៗ។
:::

### 4. បើកដំណើរការការរួមបញ្ចូល (Enable the Integration)

1. នៅក្នុង admin របស់ WordPress របស់អ្នក សូមចូលទៅកាន់ Ultimate Multisite > Settings
2. ចូលទៅកាន់แท็บ "Domain Mapping"
3. រំលងចុះក្រោមទៅផ្នែក "Host Integrations"
4. បើកដំណើរការការរួមបញ្ចូល Cloudways (Enable the Cloudways integration)
5. ចុច "Save Changes"

## វាដំណើរការដូចម្តេច?

### ការធ្វើសមកាលកម្មដែន (Domain Syncing)

នៅពេលដែល domain ត្រូវបាន map នៅក្នុង Ultimate Multisite៖

1. ការរួមបញ្ចូលនេះនឹងទាញយក domain ដែលបាន map រួចទាំងអស់
2. វាបន្ថែម domain ថ្មីទៅក្នុងបញ្ជី (រួមជាមួយកំណែ www ប្រសិនបើមាន)
3. វាផ្ញើបញ្ជីពេញលេញទៅ Cloudways តាមរយៈ API
4. Cloudways នឹងធ្វើបច្ចុប្បន្នភាព aliases ដែនសម្រាប់ application របស់អ្នក

ចំណាំ៖ API របស់ Cloudways ទាមទារឱ្យផ្ញើបញ្ជី domain ទាំងមូលរាល់ពេលដែលមិនមែនត្រឹមតែបន្ថែម ឬលុប domain បុគ្គលប៉ុណ្ណោះ។

### ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL (SSL Certificate Management)

បន្ទាប់ពីdomain ត្រូវបានធ្វើសមកាលកម្ម៖

1. ការរួមបញ្ចូលនេះនឹងពិនិត្យមើលថា domain ណាខ្លះដែលមាន DNS records ដែលបង្ហាញទៅកាន់ server របស់អ្នកដោយត្រឹមត្រូវ
2. វាផ្ញើសំណើទៅ Cloudways ដើម្បីដំឡើងវិញ្ញាបនបត្រ Let's Encrypt SSL សម្រាប់ domain ទាំងនោះ
3. Cloudways នឹងគ្រប់គ្រងការចេញ និងការដំឡើងវិញ្ញាបនបត្រ SSL

ការតភ្ជាប់នេះតែងតែទាមទារវិញ្ញាបនបត្រ Let's Encrypt **ស្តង់ដារ** (មិនមែនជា wildcard) ពី Cloudways។ ប្រសិនបើអ្នកបញ្ចូល pattern wildcard នៅក្នុង `WU_CLOUDWAYS_EXTRA_DOMAINS` អក្សរ `*.` ដំបូងនឹងត្រូវបានលុបចេញមុនពេលស្នើសុំ SSL — ការប្រើប្រាស់ wildcard ខ្លួនឯងមិនត្រូវបានដំឡើងដោយការតភ្ជាប់នេះទេ។ ដើម្បីប្រើវិញ្ញាបនបត្រ wildcard នៅលើ Cloudways អ្នកត្រូវដំឡើងវាដោយដៃ ប៉ុន្តែការធ្វើដូច្នេះនឹងរារាំងការចេញ Let's Encrypt សម្រាប់โดเมนដែលបានកំណត់តាមដែន (per-domain) សម្រាប់ custom domains ដែលត្រូវបាន map (សូមមើលបញ្ហាប្រឈមខាងក្រោម)។

## Extra Domains (ដែនបន្ថែម)

ថេរ `WU_CLOUDWAYS_EXTRA_DOMAINS` អនុញ្ញាតឱ្យអ្នកបញ្ជាក់អំពី **external** domains បន្ថែមដែលគួរតែរក្សាទុកក្នុងបញ្ជី aliases របស់កម្មវិធី Cloudways ជានិច្ច។ សូមប្រើវាសម្រាប់៖

- external domains ដែលមិនត្រូវបានគ្រប់គ្រងដោយ Ultimate Multisite (ឧទាហរណ៍៖ គេហទំព័រទីផ្សារផ្សេងទៀតដែលប្រើប្រាស់កម្មវិធី Cloudways ដូចគ្នា)
- external domains ឬ staging domains ដែលអ្នកចង់រក្សាទុកក្នុងបញ្ជី aliases របស់កម្មវិធី

**កុំ** ប្រើថេរនេះសម្រាប់ subdomain wildcard នៃបណ្តាញរបស់អ្នកផ្ទាល់ (ឧទាហរណ៍៖ `*.your-network.com`)។ សូមមើលបញ្ហាប្រឈម SSL wildcard ខាងក្រោម។

## សារសំខាន់ — បញ្ហាប្រឈម SSL Wildcard

កំហុសទូទៅមួយនៅពេលធ្វើតាមការកំណត់លំនាំដើមរបស់ Cloudways គឺការបន្ថែម wildcard ដូចជា `*.your-network.com` ទៅក្នុង `WU_CLOUDWAYS_EXTRA_DOMAINS` ឬការដំឡើងវិញ្ញាបនបត្រ SSL wildcard របស់ Cloudways ដោយដៃសម្រាប់ wildcard នោះ។

**ប្រសិនបើអ្នកធ្វើបែបនេះ Cloudways នឹងបដិសេធមិនចេញវិញ្ញាបនបត្រ Let's Encrypt សម្រាប់ custom domains ដែល Ultimate Multisite បាន map។** Cloudways ជំនួសវិញ្ញាបនបត្រ SSL សកម្មនៅលើកម្មវិធីរាល់ពេល ហើយវិញ្ញាបនបត្រ wildcard ដែលមានរួចហើយនៅលើកម្មវិធីនឹងរារាំងការចេញ Let's Encrypt សម្រាប់ដែននីមួយៗដែលការតភ្ជាប់នេះពឹងផ្អែក។

### ការកំណត់រចនាសម្ព័ន្ធ Cloudways SSL ដែលត្រូវបានណែនាំសម្រាប់បណ្តាញ Ultimate Multisite

១. នៅក្នុងแท็บ **SSL Certificate** នៃแอปพลิเคชัน Cloudways ให้ติดตั้งใบรับรอง Let's Encrypt มาตรฐานที่ครอบคลุมเฉพาะ `your-network.com` และ `www.your-network.com` เท่านั้น — ไม่ใช่แบบ wildcard (เครื่องหมาย *)
២. อย่าใส่ `*.your-network.com` (หรือรูปแบบ subdomain อื่นๆ ของเครือข่ายของคุณ) ในช่อง `WU_CLOUDWAYS_EXTRA_DOMAINS` ให้เก็บค่าคงที่นั้นไว้สำหรับโดเมน **ภายนอก** เท่านั้น

៣. สร้าง wildcard subdomain สำหรับแต่ละ tenant ที่ระดับ **DNS** เท่านั้น (บันทึกประเภท `A` สำหรับ `*.your-network.com` ชี้ไปยัง IP ของเซิร์ฟเวอร์ Cloudways ของคุณ) เพื่อให้ subsites สามารถทำงานได้ ใบรับรอง SSL สำหรับโดเมนที่กำหนดเองรายตัวจะถูกออกโดยอัตโนมัติผ่านการเชื่อมต่อนี้ด้วย Let's Encrypt

หากโดเมนที่กำหนดเองของ tenant ติดปัญหาเรื่อง SSL ให้ตรวจสอบแท็บ SSL ของ Cloudways หากมีใบรับรอง wildcard ทำงานอยู่ ให้ลบมันออก ออกใบรับรอง Let's Encrypt มาตรฐานสำหรับโดเมนหลักของเครือข่ายเท่านั้น และลบรายการ wildcard ใดๆ ออกจาก `WU_CLOUDWAYS_EXTRA_DOMAINS` จากนั้นให้เริ่มการแมปโดเมนใหม่ (หรือรอครั้งต่อไป) และระบบจะเริ่มออกใบรับรองสำหรับแต่ละโดเมนอีกครั้ง

## การแก้ไขปัญหา (Troubleshooting)

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบว่าอีเมลและ API key ของคุณถูกต้องหรือไม่
- ตรวจสอบว่า Server ID และ Application ID ของคุณถูกต้องหรือไม่
- ตรวจสอบให้แน่ใจว่าบัญชี Cloudways ของคุณมีสิทธิ์ที่จำเป็น

### បញ្ហាវិញ្ញាបនបត្រ SSL (SSL Certificate Issues)
- Cloudways ទាមទារឱ្យដែន (domains) មានកំណត់ត្រា DNS ដែលត្រឹមត្រូវចង្អុលទៅម៉ាស៊ីនមេ (server) របស់អ្នក មុននឹងចេញវិញ្ញាបនបត្រ SSL។
- ការរួមបញ្ចូលគ្នានេះ (integration) ផ្ទៀងផ្ទាត់កំណត់ត្រា DNS មុនពេលស្នើសុំវិញ្ញាបនបត្រ SSL។
- ប្រសិនបើមិនមានការចេញវិញ្ញាបនបត្រ SSLទេ សូមពិនិត្យមើលថាតើដែនរបស់អ្នកកំពុងចង្អុលទៅអាសយដ្ឋាន IP របស់ម៉ាស៊ីនមេអ្នកបានត្រឹមត្រូវឬយ៉ាងណា។
- **តើដែនដែលកំណត់ដោយអ្នកប្រើប្រាស់ (Per-tenant custom domains) ដែលជាប់គាំងដោយគ្មាន SSL?** សូមពិនិត្យមើលផ្ទាំង SSL Certificate នៅក្នុងកម្មវិធី Cloudways។ ប្រសិនបើវិញ្ញាបនបត្រ wildcard (ដែលបានដំឡើងដោយដៃ ឬគ្របដណ្តប់លើ `*.your-network.com`) កំពុងដំណើរការទេ Cloudways នឹងមិនចេញវិញ្ញាបនបត្រ Let's Encrypt សម្រាប់ដែនដែលកំណត់ដោយឡែកពីគ្នាទេ។ សូមជំនួសវាដោយវិញ្ញាបនបត្រ Let's Encrypt ស្តង់ដារដែលគ្របដណ្តប់លើដែនមេរបស់បណ្តាញ (`your-network.com`, `www.your-network.com`) ប៉ុណ្ណោះ ហើយលុបធាតុ wildcard ណាមួយចេញពី `WU_CLOUDWAYS_EXTRA_DOMAINS`។ បន្ទាប់មក ចុចដំណើរការការកំណត់ដែនឡើងវិញ (re-trigger a domain mapping) (ឬរង់ចាំសម្រាប់មួយបន្ទាប់) ហើយការរួមបញ្ចូលគ្នានឹងស្នើសុំវិញ្ញាបនបត្រសម្រាប់ដែននីមួយៗ។

### មិនបានបន្ថែមដែន (Domain Not Added)
- សូមពិនិត្យមើលកំណត់ហេតុ (logs) របស់ Ultimate Multisite ដើម្បីរកសារកំហុសណាមួយ។
- សូមផ្ទៀងផ្ទាត់ថាដែននោះមិនទាន់ត្រូវបានបន្ថែមទៅក្នុង Cloudways រួចហើយឬនៅ។
- សូមប្រាកដថាផែនការ Cloudways របស់អ្នកគាំទ្រចំនួនដែនដែលអ្នកកំពុងបន្ថែម។
