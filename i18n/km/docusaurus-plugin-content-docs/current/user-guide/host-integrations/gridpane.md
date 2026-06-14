---
title: ការរួមបញ្ចូល GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# ការរួមបញ្ចូលជាមួយ GridPane (GridPane Integration)

## ទិដ្ឋភាពទូទៅ (Overview)
GridPane គឺជា control panel សម្រាប់បង្ហោះ WordPress ដែលត្រូវបានបង្កើតឡើងយ៉ាងពិសេសសម្រាប់អ្នកជំនាញ WordPress ស្រាវជ្រាវ។ ការរួមបញ្ចូលនេះអនុញ្ញាតឱ្យមានការធ្វើសមកាលកម្មដែន (domain syncing) និងការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL រវាង Ultimate Multisite និង GridPane ដោយស្វ័យប្រវត្តិ។

## លក្ខណៈពិសេស (Features)
- ការធ្វើសមកាលកម្មដែនដោយស្វ័យប្រវត្តិ (Automatic domain syncing)
- ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL (SSL certificate management)
- ការកំណត់រចនាសម្ព័ន្ធថេររបស់ SUNRISE ដោយស្វ័យប្រវត្តិ (Automatic configuration of SUNRISE constant)

## តម្រូវការ (Requirements)
អ្នកត្រូវកំណត់ថេរ (constants) ខាងក្រោមនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## របៀបដំឡើង (Setup Instructions)

### ១. ទទួលបានព័ត៌មាន API របស់អ្នកពី GridPane (Get Your GridPane API Credentials)

1. ចុចចូលទៅកាន់แดชប៊ឺរ GridPane របស់អ្នក។
2. ចូលទៅកាន់ "Settings" > "API"។
3. បង្កើត API key ប្រសិនបើអ្នកមិនទាន់មានទេ។
4. កូពី API key របស់អ្នក។

### ២. ទទួលបាន Server ID និង Site ID របស់អ្នក (Get Your Server and Site IDs)

1. នៅក្នុងแดชប៊ឺរ GridPane របស់អ្នក សូមចូលទៅកាន់ "Servers"។
2. ជ្រើសរើស server ដែលអ្នកបានបង្ហោះ WordPress multisite របស់អ្នក។
3. កត់ត្រា Server ID (ដែលអាចមើលឃើញនៅក្នុង URL ឬនៅលើទំព័រព័ត៌មាន server)។
4. ចូលទៅកាន់ "Sites" ហើយជ្រើសរើស WordPress site របស់អ្នក។
5. កត់ត្រា Site ID (ដែលអាចមើលឃើញនៅក្នុង URL ឬនៅលើទំព័រព័ត៌មាន site)។

### ៣. បន្ថែមថេរទៅក្នុង wp-config.php (Add Constants to wp-config.php)

បន្ថែមថេរខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### ៤. បើកដំណើរការការរួមបញ្ចូល (Enable the Integration)

1. នៅក្នុង WordPress admin របស់អ្នក សូមចូលទៅកាន់ Ultimate Multisite > Settings។
2. ចូលទៅកាន់แท็บ "Domain Mapping"។
3. រំលងចុះក្រោមទៅផ្នែក "Host Integrations"។
4. បើកដំណើរការការរួមបញ្ចូល GridPane (Enable the GridPane integration)។
5. ចុចលើ "Save Changes"។

## វាដំណើរការដោយរបៀបណា (How It Works)

នៅពេលដែលដែនមួយត្រូវបានកំណត់រចនាសម្ព័ន្ធនៅក្នុង Ultimate Multisite៖

១. ការរួមបញ្ចូល (integration) ផ្ញើសំណើទៅ API របស់ GridPane ដើម្បីបន្ថែមដែន (domain) ទៅក្នុងគេហទំព័ររបស់អ្នក។
២. GridPane នឹងគ្រប់គ្រងការផ្តល់វិញ្ញាបនបត្រ SSL ដោយស្វ័យប្រវត្តិ។
៣. នៅពេលដែលការបំបែកការផ្គូផ្គងដែន (domain mapping) ត្រូវបានលុបចោល ការរួមបញ្ចូលនឹងលុបដែននោះចេញពី GridPane។

ការរួមបញ្ចូលនេះក៏គ្រប់គ្រងថេរ SUNRISE នៅក្នុងឯកសារ wp-config.php របស់អ្នកដោយស្វ័យប្រវត្តិផងដែរ ដែលជាអ្វីដែលចាំបាច់សម្រាប់ការផ្គូផ្គងដែនដំណើរការបានត្រឹមត្រូវ។

## ការគ្រប់គ្រងថេរ SUNRISE (SUNRISE Constant Management)

លក្ខណៈពិសេសប្លែកមួយនៃការរួមបញ្ចូល GridPane គឺវាធ្វើឱ្យថេរ SUNRISE នៅក្នុង wp-config.php ត្រឡប់ទៅស្ថានភាពដើមដោយស្វ័យប្រវត្តិ ដើម្បីការពារការប៉ះទង្គិចជាមួយប្រព័ន្ធផ្គូផ្គងដែនរបស់ GridPane។ នេះធានាថាប្រព័ន្ធទាំងពីរអាចដំណើរការជាមួយគ្នាបានដោយគ្មានបញ្ហាអ្វីឡើយ។

## ការដោះស្រាយបញ្ហា (Troubleshooting)

### បញ្ហានៅការតភ្ជាប់ API (API Connection Issues)
- សូមពិនិត្យមើលថាតើ API key របស់អ្នកត្រឹមត្រូវឬអត់
- សូមពិនិត្យមើលថាតើ server និង site IDs របស់អ្នកត្រឹមត្រូវឬអត់
- សូមធានាថាគណនី GridPane របស់អ្នកមានសិទ្ធិគ្រប់គ្រាន់ដែលត្រូវការ

### បញ្ហាវញ្ញាបនបត្រ SSL (SSL Certificate Issues)
- GridPane ប្រហែលជាចំណាយពេលខ្លះក្នុងការចេញវិញ្ញាបនបត្រ SSL។
- សូមពិនិត្យមើលថាតើដែនរបស់អ្នកកំពុងចង្អុលទៅ IP address របស់ server អ្នកបានត្រឹមត្រូវឬអត់
- សូមពិនិត្យមើលការកំណត់ SSL របស់ GridPane សម្រាប់គេហទំព័ររបស់អ្នក

### ដែនមិនត្រូវបានបន្ថែម (Domain Not Added)
- សូមពិនិត្យមើល logs របស់ Ultimate Multisite សម្រាប់សារកំហុសណាមួយ។
- សូមផ្ទៀងផ្ទាត់ថាតើដែននោះមិនទាន់ត្រូវបានបន្ថែមទៅក្នុង GridPane រួចហើយឬនៅ។
- សូមធានាថា DNS records នៃដែនរបស់អ្នកត្រូវបានកំណត់រចនាសម្ព័ន្ធត្រឹមត្រូវ។
