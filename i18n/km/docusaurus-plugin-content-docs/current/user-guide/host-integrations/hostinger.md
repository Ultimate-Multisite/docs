---
title: ការរួមបញ្ចូល Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# ការភ្ជាប់ជាមួយ Hostinger (hPanel)

## ទិដ្ឋភាពទូទៅ

Hostinger គឺជាអ្នកផ្តល់សេវាបង្ហោះគេហទំព័រដ៏ពេញនិយម ដែលមានផ្ទាំងគ្រប់គ្រងទំនើបមួយឈ្មោះថា hPanel។ ការរួមបញ្ចូល Ultimate Multisite Hostinger អនុញ្ញាតឱ្យមានការធ្វើសមកាលកម្មដែនដោយស្វ័យប្រវត្តិរវាង Ultimate Multisite និង hPanel របស់ Hostinger ដែលអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងការផ្គូផ្គងដែន (domain mappings) និង subdomain ដោយស្វ័យប្រវត្តិពី admin របស់ WordPress របស់អ្នក។

## លក្ខណៈពិសេស

- ការបង្កើត addon domain ដោយស្វ័យប្រវត្តិនៅក្នុង hPanel
- ការបង្កើត subdomain ដោយស្វ័យប្រវត្តិនៅក្នុង hPanel (សម្រាប់ការដំឡើង subdomain multisite)
- ការលុបដែននៅពេលដែលការផ្គូផ្គងត្រូវបានលុបចេញ
- ការរួមបញ្ចូលដោយរលូនជាមួយ API គ្រប់គ្រងដែនរបស់ hPanel

## តម្រូវការ

ដើម្បីប្រើប្រាស់ការរួមបញ្ចូល Hostinger អ្នកត្រូវការ៖

1. ប្រគល់គណនី Hostinger ដែលមានការចូលប្រើ hPanel
2. API token ពី Hostinger
3. អថេរ (constants) ខាងក្រោមដែលបានកំណត់នៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ជាជម្រើស អ្នកក៏អាចកំណត់បន្ថែមបានដូចនេះដែរ៖

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API endpoint តាមលំនាំដើម
```

## ការណែនាំអំពីការរៀបចំ (Setup Instructions)

### ១. បង្កើត Hostinger API Token របស់អ្នក

1. ចុះឈ្មោះចូលគណនី Hostinger របស់អ្នក ហើយចូលទៅកាន់ hPanel។
2. ចូលទៅកាន់ **Account Settings** → **API Tokens**។
3. ចុចលើ **Create New Token**។
4. ដាក់ឈ្មោះឱ្យ token របស់អ្នកមានលក្ខណៈពិពណ៌នា (ឧទាហរណ៍៖ "Ultimate Multisite")។
5. ជ្រើសរើសការអនុញ្ញាតដែលចាំបាច់៖
   - Domain management
   - Subdomain management

6. ចម្លង token ដែលបានបង្កើត ហើយរក្សាទុកវាដោយសុវត្ថិភាព។

### ២. រកប្រភពគណនីរបស់អ្នក (Find Your Account ID)

1. នៅក្នុង hPanel សូមចូលទៅកាន់ **Account Settings** → **Account Information**។
2. Account ID របស់អ្នកនឹងបង្ហាញនៅលើទំព័រនេះ។
3. ចម្លង និងរក្សាទុក ID នេះសម្រាប់ជំហានបន្ទាប់។

### ៣. បន្ថែម Constants ទៅក្នុង wp-config.php

បន្ថែម constants ខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ប្រសិនបើគណនី Hostinger របស់អ្នកប្រើ endpoint API ផ្សេង អ្នកអាចកំណត់វាបានដូចខាងក្រោម៖

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ៤. បើកដំណើរការការរួមបញ្ចូល (Enable the Integration)

១. នៅលើ WordPress admin របស់អ្នក សូមចូលទៅកាន់ **Ultimate Multisite > Settings**។
២. ចូលទៅកាន់แท็บ **Domain Mapping**។
៣. រំលងចុះក្រោមទៅផ្នែក **Host Integrations**។
៤. បើកដំណើរការការរួមបញ្ចូល **Hostinger (hPanel)**។
៥. ចុចលើ **Save Changes**។

## វាដំណើរការដោយរបៀបណា (How It Works)

### Addon Domains (ដែនបន្ថែម)

នៅពេលអ្នកកំណត់ (map) ដែននៅក្នុង Ultimate Multisite៖

១. ការរួមបញ្ចូលនេះនឹងផ្ញើសំណើទៅ API របស់ Hostinger ដើម្បីបន្ថែមដែននោះជា addon domain។
២. ដែននោះត្រូវបានកំណត់ឱ្យចង្អុលទៅ directory មេ (root directory) របស់អ្នក។
៣. នៅពេលដែលការកំណត់ដែនត្រូវបានលុបចេញ ការរួមបញ្ចូលនេះនឹងលុប addon domain ចេញពី hPanel ដោយស្វ័យប្រវត្តិ។

### Subdomains (តំបន់រង)

សម្រាប់ការដំឡើង subdomain multisite នៅពេលបង្កើតគេហទំព័រថ្មី៖

១. ការរួមបញ្ចូលនេះនឹងស្រង់ផ្នែក subdomain ចេញពីដែនពេញ (full domain)។
២. វាផ្ញើសំណើទៅ API របស់ Hostinger ដើម្បីបន្ថែម subdomain។
៣. Subdomain នោះត្រូវបានកំណត់ឱ្យចង្អុលទៅ directory មេ (root directory) របស់អ្នក។

## កំណត់សម្គាល់សំខាន់ៗ (Important Notes)

- ការរួមបញ្ចូលនេះប្រើ REST API របស់ Hostinger ដើម្បីទំនាក់ទំនងជាមួយគណនីរបស់អ្នក។
- API token របស់អ្នកត្រូវតែមានសិទ្ធិគ្រប់គ្រាន់សម្រាប់ការគ្រប់គ្រងដែន និង subdomain។
- ការរួមបញ្ចូលនេះមិនបានដោះស្រាយការកំណត់ DNS ទេ៖ ដែនទាំងនោះត្រូវតែត្រូវបានចង្អុលទៅគណនី Hostinger របស់អ្នករួចហើយ។
- សំណើ API ត្រូវបានធ្វើឡើងដោយសុវត្ថិភាពតាមរយៈ HTTPS។
- សូមរក្សាទុក API token របស់អ្នកឱ្យមានសុវត្ថិភាព ហើយកុំចែករំលែកវាជាសាធារណៈឡើយ។

## ការដោះស្រាយបញ្ហា (Troubleshooting)

### បញ្ហានៃការតភ្ជាប់ API (API Connection Issues)

- ตรวจสอบว่า API token ของคุณถูกต้องและยังไม่หมดอายุ
- ตรวจสอบว่า Account ID ของคุณถูกต้อง
- ตรวจสอบให้แน่ใจว่า API token ของคุณมีสิทธิ์ที่จำเป็นสำหรับการจัดการโดเมน
- ตรวจสอบว่าบัญชี Hostinger ของคุณเปิดใช้งานอยู่และอยู่ในสถานะที่ดี

### โดเมนยังไม่ได้เพิ่ม

- ตรวจสอบบันทึกของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาดใดๆ
- ตรวจสอบว่าโดเมนนั้นยังไม่ได้ถูกเพิ่มในบัญชี Hostinger ของคุณ
- ตรวจสอบให้แน่ใจว่าบัญชี Hostinger ของคุณยังไม่ถึงขีดจำกัดสำหรับโดเมนเสริม (addon domains)
- ยืนยันว่าโดเมนนั้นชี้ไปยัง nameservers ของ Hostinger ของคุณอย่างถูกต้อง

### ปัญหาใบรับรอง SSL

- การเชื่อมต่อนี้ไม่ได้จัดการการออกใบรับรอง SSL
- โดยปกติแล้ว Hostinger จะมีใบรับรอง SSL ฟรีผ่าน AutoSSL
- คุณสามารถจัดการใบรับรอง SSL ได้โดยตรงใน hPanel ภายใต้ **SSL/TLS**
- หรือใช้ Let's Encrypt ร่วมกับฟีเจอร์ AutoSSL ของ Hostinger

## การสนับสนุน

หากต้องการความช่วยเหลือเพิ่มเติมเกี่ยวกับการเชื่อมต่อกับ Hostinger โปรดดูที่:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
