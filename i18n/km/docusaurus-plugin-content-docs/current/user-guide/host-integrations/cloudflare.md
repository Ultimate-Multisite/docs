---
title: ការរួមបញ្ចូល Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# ការតភ្ជាប់ជាមួយ Cloudflare

## ទិដ្ឋភាពទូទៅ
Cloudflare គឺជាអ្នកផ្តល់សេវាបណ្តាញចែកចាយមាតិកា (CDN) និងសុវត្ថិភាពឈានមុខគេមួយ ដែលជួយការពារ និងបង្កើនល្បឿនគេហទំព័រ។ ការតភ្ជាប់នេះអនុញ្ញាតឱ្យមានការគ្រប់គ្រងដែនដោយស្វ័យប្រវត្តិរវាង Ultimate Multisite និង Cloudflare ជាពិសេសសម្រាប់ការដំឡើង subdomain multisite។

## លក្ខណៈពិសេស
- ការបង្កើត subdomain ដោយស្វ័យប្រវត្តិនៅក្នុង Cloudflare
- ការគាំទ្រ subdomain ដែលត្រូវបានបិទផ្លូវ (Proxied)
- ការគ្រប់គ្រងកំណត់ត្រា DNS (DNS record management)
- ការបង្ហាញកំណត់ត្រា DNS កាន់តែប្រសើរនៅក្នុង admin របស់ Ultimate Multisite

## តម្រូវការ
ត្រូវកំណត់ថេរខាងក្រោមនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## ការណែនាំអំពីការរៀបចំ

### ១. ទទួលបាន Cloudflare API Key របស់អ្នក
1. ចុះឈ្មោះចូលទៅកាន់แดชប៊ឺរ Cloudflare របស់អ្នក។
2. ចូលទៅកាន់ "My Profile" (ចុចលើអ៊ីមែលរបស់អ្នកនៅជ្រុងខាងស្តាំលើ)។
3. ជ្រើសរើស "API Tokens" (តុក្កតា API) ពីម៉ឺនុយ។
4. បង្កើត token API ថ្មីដោយមានការអនុញ្ញាតដូចខាងក្រោម៖
   - Zone.Zone: Read (អាន)
   - Zone.DNS: Edit (កែសម្រួល)
5. ចម្លង token API របស់អ្នក។

### ២. ទទួលបាន Zone ID របស់អ្នក
1. នៅក្នុងแดชប៊ឺរ Cloudflare របស់អ្នក សូមជ្រើសរើសដែនដែលអ្នកចង់ប្រើ។
2. Zone ID អាចមើលឃើញនៅក្នុងแท็บ "Overview" (ទិដ្ឋភាពទូទៅ) នៅរបារចំហៀងខាងស្តាំក្រោម "API"។
3. ចម្លង Zone ID។

### ៣. បន្ថែមថេរទៅក្នុង wp-config.php
បន្ថែមថេរខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ៤. បើកដំណើរការការតភ្ជាប់ (Enable the Integration)
1. នៅក្នុង WordPress admin របស់អ្នក សូមចូលទៅកាន់ Ultimate Multisite > Settings។
2. ចូលទៅកាន់แท็บ "Domain Mapping" (ការបែងចែកដែន)។
3. រំលងចុះក្រោមទៅផ្នែក "Host Integrations" (ការតភ្ជាប់ម្ចាស់ផ្ទះ)។
4. បើកដំណើរការការតភ្ជាប់ Cloudflare។
5. ចុចលើ "Save Changes" (រក្សាទុកការផ្លាស់ប្តូរ)។

## វាដំណើរការដោយរបៀបណា

### ការគ្រប់គ្រង subdomain
នៅពេលដែលគេហទំព័រថ្មីត្រូវបានបង្កើតនៅក្នុងការដំឡើង subdomain multisite៖

១. ការរួមបញ្ចូលកម្មវិធី (integration) នឹងផ្ញើសំណើទៅ API របស់ Cloudflare ដើម្បីបន្ថែមកំណត់ត្រា CNAME សម្រាប់ subdomain។
២. Subdomain ត្រូវបានកំណត់ឱ្យប្រើ proxy តាមរយៈ Cloudflare ជាលំនាំដើម (នេះអាចផ្លាស់ប្តូរបានដោយប្រើ filters)។
៣. នៅពេលដែលគេហទំព័រមួយត្រូវបានលុប ការរួមបញ្ចូលកម្មវិធីនឹងដក subdomain ចេញពី Cloudflare។

### ការបង្ហាញ DNS Record

ការរួមបញ្ចូលកម្មវិធីនេះពង្រឹងការបង្ហាញ DNS record នៅក្នុង admin របស់ Ultimate Multisite ដោយធ្វើដូចខាងក្រោម៖

១. ទាញយក DNS records ដោយផ្ទាល់ពី Cloudflare
២. បង្ហាញថា record ទាំងនោះត្រូវបាន proxy ឬអត់
៣. បង្ហាញព័ត៌មានបន្ថែមអំពី DNS records ទាំងនោះ

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (ពីមុនគេហៅថា "Cloudflare for SaaS") គឺជាមុខងារមួយរបស់ Cloudflare ដែលអនុញ្ញាតឱ្យអតិថិជនរបស់អ្នកប្រើឈ្មោះដែនផ្ទាល់ខ្លួនដែលមាន SSL នៅលើបណ្តាញ multisite របស់អ្នក។ វាគឺជាវិធីសាស្រ្តដែលត្រូវបានណែនាំសម្រាប់ការដំឡើង multisite ដែលភ្ជាប់ជាមួយឈ្មោះដែន ដោយប្រើ Cloudflare ព្រោះ Cloudflare គ្រប់គ្រងការចេញ និងការបន្តវិញ្ញាបនបត្រ SSL សម្រាប់ឈ្មោះដែនផ្ទាល់ខ្លួននីមួយៗដោយស្វ័យប្រវត្តិ។

### វាខុសពីការរួមបញ្ចូល Cloudflare បែបស្តង់ដារយ៉ាងដូចម្តេច

| | ការរួមបញ្ចូលស្តង់ដារ (Standard integration) | Cloudflare Custom Hostnames |
|---|---|---|
| **គោលបំណង** | បង្កើត DNS records ដោយស្វ័យប្រវត្តិសម្រាប់ subdomain | អនុញ្ញាតឱ្យប្រើឈ្មោះដែនផ្ទាល់ខ្លួន (mapped domains) ជាមួយនឹង SSL ដែលគ្រប់គ្រងដោយ Cloudflare |
| **ល្អបំផុតសម្រាប់** | multisite ដែលប្រើ subdomain | multisite ដែលភ្ជាប់ជាមួយឈ្មោះដែន (Domain-mapped multisite) |
| **SSL** | ត្រូវបានគ្រប់គ្រងដោយឡែកពីគ្នា | ត្រូវបានគ្រប់គ្រងដោយ Cloudflare ដោយស្វ័យប្រវត្តិ |

### ការកំណត់រចនាសម្ព័ន្ធ Cloudflare Custom Hostnames

១. នៅក្នុងแดชบอร์ด Cloudflare ของคุณ ให้เปิดโซนสำหรับโดเมนหลักของคุณ

២. ไปที่ **SSL/TLS > Custom Hostnames** (ชื่อโฮสต์กำหนดเอง)

៣. เพิ่ม origin สำรอง (fallback origin) ที่ชี้ไปยัง IP หรือ hostname ของเซิร์ฟเวอร์ของคุณ

៤. สำหรับโดเมนลูกค้าแต่ละรายที่ถูกแมปใน Ultimate Multisite ให้เพิ่มรายการ Custom Hostname ใน Cloudflare คุณสามารถทำให้ขั้นตอนนี้เป็นแบบอัตโนมัติโดยใช้ Cloudflare API ได้

៥. Cloudflare จะออกและต่ออายุใบรับรอง TLS สำหรับ custom hostname แต่ละตัวโดยอัตโนมัติเมื่อ DNS ของลูกค้าชี้ไปยังเครือข่ายของคุณ

สำหรับเอกสารอ้างอิง API ฉบับเต็ม ดูที่ [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)

:::note การอัปเดตคำศัพท์
ตั้งแต่ Ultimate Multisite v2.6.1 เป็นต้นไป ฟีเจอร์นี้จะถูกเรียกว่า **Cloudflare Custom Hostnames** ในการตั้งค่าและป้ายกำกับของปลั๊กอินทั้งหมด เวอร์ชันก่อนหน้าใช้ชื่อ "Cloudflare for SaaS" ซึ่งเป็นชื่อผลิตภัณฑ์ Cloudflare ที่อยู่เบื้องหลัง
:::

## ข้อควรทราบที่สำคัญ

ตามการอัปเดตล่าสุดของ Cloudflare การทำ wildcard proxying (การส่งต่อแบบครอบคลุม) ตอนนี้สามารถใช้งานได้สำหรับลูกค้าทุกราย ซึ่งหมายความว่าการผสานรวม DNS มาตรฐานของ Cloudflare ไม่มีความสำคัญเท่าที่เคยเป็นสำหรับการติดตั้ง subdomain multisite เนื่องจากคุณสามารถตั้งค่า record DNS แบบ wildcard ใน Cloudflare ได้เลย

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบให้แน่ใจว่า API token ของคุณถูกต้องและมีสิทธิ์ที่จำเป็น
- ตรวจสอบว่า Zone ID ของคุณถูกต้องหรือไม่
- ตรวจสอบให้แน่ใจว่าบัญชี Cloudflare ของคุณมีสิทธิ์ที่จำเป็น

### ไม่มีการเพิ่ม Subdomain
- ตรวจสอบ log ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาดใดๆ
- ตรวจสอบว่า subdomain นั้นไม่ได้ถูกเพิ่มเข้าไปใน Cloudflare แล้วหรือไม่
- ตรวจสอบให้แน่ใจว่าแผน Cloudflare ของคุณรองรับจำนวน record DNS ที่คุณกำลังสร้าง

### បញ្ហាការបណ្តាក់ទូរស័ព្ទ (Proxying Issues)
- ប្រសិនបើអ្នកមិនចង់ឱ្យ subdomain ត្រូវបានបណ្តាក់ទូរស័ព្ទទេ អ្នកអាចប្រើ filter `wu_cloudflare_should_proxy` បាន។
- អ្វីខ្លះនៃមុខងារប្រហែលជាមិនដំណើរការត្រឹមត្រូវនៅពេលដែលវាត្រូវបានបណ្តាក់ទូរស័ព្ទ (ឧទាហរណ៍ មុខងារគ្រប់គ្រង WordPress មួយចំនួន)។
- សូមពិចារណាប្រើ Cloudflare's Page Rules ដើម្បីជៀសវាងការរក្សាទុក Cache សម្រាប់หน้า admin (admin pages)។
