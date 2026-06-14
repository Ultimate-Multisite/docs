---
title: ការរួមបញ្ចូល ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ការរួមបញ្ចូលជាមួយ ServerPilot

## ទិដ្ឋភាពទូទៅ
ServerPilot គឺជាសេវាកម្មលើពពកសម្រាប់បង្ហោះគេហទំព័រ WordPress និងគេហទំព័រ PHP ផ្សេងទៀតនៅលើម៉ាស៊ីនមេ (servers) នៅលើ DigitalOcean, Amazon, Google ឬអ្នកផ្តល់ម៉ាស៊ីនមេផ្សេងទៀត។ ការរួមបញ្ចូលនេះអនុញ្ញាតឱ្យមានការធ្វើសមកាលកម្មដែន (domain syncing) ដោយស្វ័យប្រវត្តិ និងការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL រវាង Ultimate Multisite និង ServerPilot។

## លក្ខណៈពិសេស
- ការធ្វើសមកាលកម្មដែនដោយស្វ័យប្រវត្តិ
- ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL ជាមួយ Let's Encrypt
- ការបន្តសុពលភាព SSL ដោយស្វ័យប្រវត្តិ

## តម្រូវការ
ត្រូវកំណត់ថេរ (constants) ខាងក្រោមនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## របៀបរៀបចំ (Setup Instructions)

### ១. ទទួលបានព័ត៌មាន API របស់ ServerPilot របស់អ្នក

1. ចុចចូលទៅកាន់แดชប៊ឺ (dashboard) របស់ ServerPilot។
2. ចូលទៅកាន់ "Account" > "API"។
3. បង្កើត API key ថ្មី ប្រសិនបើអ្នកមិនទាន់មានទេ។
4. កូពី Client ID និង API Key របស់អ្នក។

### ២. ទទួលបាន App ID របស់អ្នក

1. នៅលើแดชប៊ឺ ServerPilot របស់អ្នក សូមចូលទៅកាន់ "Apps"។
2. ជ្រើសរើសកម្មវិធី (app) ដែលគេហទំព័រ WordPress multisite របស់អ្នកត្រូវបានបង្ហោះ។
3. App ID អាចមើលឃើញនៅក្នុង URL៖ `https://manage.serverpilot.io/apps/{APP_ID}`

### ៣. បន្ថែមថេរទៅក្នុង wp-config.php

បន្ថែមថេរខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ៤. បើកដំណើរការការរួមបញ្ចូល (Enable the Integration)

1. នៅលើ admin របស់ WordPress របស់អ្នក សូមចូលទៅកាន់ Ultimate Multisite > Settings។
2. ចូលទៅកាន់แท็บ "Domain Mapping"។
3. រំលងចុះក្រោមទៅផ្នែក "Host Integrations"។
4. បើកដំណើរការការរួមបញ្ចូល ServerPilot។
5. ចុចលើ "Save Changes" (រក្សាទុកការផ្លាស់ប្តូរ)។

## វាដំណើរការដោយរបៀបណា (How It Works)

### ការធ្វើសមកាលកម្មដែន (Domain Syncing)

នៅពេលដែលដែនមួយត្រូវបានកំណត់នៅក្នុង Ultimate Multisite៖

១. ការរួមបញ្ចូល (integration) នឹងទាញយកបញ្ជីឈ្មោះដែន (domains) បច្ចុប្បន្នពី ServerPilot។
២. វាបន្ថែមដែនថ្មីទៅក្នុងបញ្ជី (រួមជាមួយកំណែ www ប្រសិនបើមាន)។
៣. វាផ្ញើបញ្ជីដែលបានធ្វើបច្ចុប្បន្នទៅកាន់ ServerPilot តាមរយៈ API។
៤. ServerPilot នឹងធ្វើបច្ចុប្បន្នភាពបញ្ជីឈ្មោះដែនសម្រាប់កម្មវិធីរបស់អ្នក។

### ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL (SSL Certificate Management)

បន្ទាប់ពីការซิงค์ដែនរួច៖

១. ការរួមបញ្ចូលនឹងបើក AutoSSL ដោយស្វ័យប្រវត្តិសម្រាប់កម្មវិធីរបស់អ្នក។
២. ServerPilot នឹងទទួលខុសត្រូវក្នុងការចេញ និងដំឡើងវិញ្ញាបនបត្រ SSL ដោយប្រើ Let's Encrypt។
៣. ServerPilot ក៏ទទួលខុសត្រូវក្នុងការបន្តសុពលភាព (renewal) នៃវិញ្ញាបនបត្រ SSL ដោយស្វ័យប្រវត្តិផងដែរ។

## ការផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ SSL (SSL Certificate Verification)

ការរួមបញ្ចូលត្រូវបានកំណត់ដើម្បីបង្កើនចំនួននៃការសាកល្បងផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ SSL សម្រាប់ ServerPilot ព្រោះវាអាចចំណាយពេលខ្លះសម្រាប់ ServerPilot ដើម្បីចេញ និងដំឡើងវិញ្ញាបនបត្រ SSL។ ជាទូទៅ វានឹងព្យាយាមរហូតដល់ ៥ ដង ប៉ុន្តែនេះអាចត្រូវបានកែសម្រួលដោយប្រើ filters (តម្រង)។

## ការដោះស្រាយបញ្ហា (Troubleshooting)

### បញ្ហាការតភ្ជាប់ API (API Connection Issues)
- សូមពិនិត្យមើលថាតើ Client ID និង API Key របស់អ្នកត្រឹមត្រូវឬអត់។
- សូមពិនិត្យមើលថាតើ App ID របស់អ្នកត្រឹមត្រូវឬអត់។
- សូមធានាថាគណនី ServerPilot របស់អ្នកមានសិទ្ធិ (permissions) ដែលចាំបាច់។

### បញ្ហាវិញ្ញាបនបត្រ SSL (SSL Certificate Issues)
- ServerPilot ទាមទារឱ្យដែនទាំងនោះមានកំណត់ត្រ DNS (DNS records) ដែលត្រឹមត្រូវចង្អុលទៅកាន់ម៉ាស៊ីនមេ (server) របស់អ្នក មុនពេលចេញវិញ្ញាបនបត្រ SSL។
- ប្រសិនបើវិញ្ញាបនបត្រ SSL មិនត្រូវបានចេញទេ សូមពិនិត្យមើលថាតើដែនរបស់អ្នកកំពុងចង្អុលទៅអាសយដ្ឋាន IP របស់ម៉ាស៊ីនមេរបស់អ្នកបានត្រឹមត្រូវឬទេ។
- វាអាចចំណាយពេលខ្លះសម្រាប់ ServerPilot ដើម្បីចេញ និងដំឡើងវិញ្ញាបនបត្រ SSL (ជាធម្មតា ៥-១៥ នាទី)។

### ដែនមិនត្រូវបានបន្ថែម (Domain Not Added)
- សូមពិនិត្យមើល logs របស់ Ultimate Multisite សម្រាប់សារកំហុសណាមួយ។
- សូមផ្ទៀងផ្ទាត់ថាតើដែននោះមិនទាន់ត្រូវបានបន្ថែមទៅក្នុង ServerPilot រួចហើយឬនៅ។
- សូមធានាថាផែនការ (plan) របស់ ServerPilot របស់អ្នកគាំទ្រចំនួនដែនដែលអ្នកកំពុងបន្ថែម។

### ការលុបឈ្មោះដែន (Domain Removal)
- បច្ចុប្បន្ននេះ API របស់ ServerPilot មិនទាន់មានវិធីដើម្បីលុបឈ្មោះដែននីមួយៗបានទេ
- នៅពេលដែលការផ្គូផ្គងដែន (domain mapping) ត្រូវបានលុបនៅក្នុង Ultimate Multisite ការរួមបញ្ចូលគ្នា (integration) នឹងធ្វើបច្ចុប្បន្នភាពបញ្ជីឈ្មោះដែននៅក្នុង ServerPilot ដើម្បីមិនឱ្យមានឈ្មោះដែនដែលបានលុបនោះទៀត
