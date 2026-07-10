---
title: ការរួមបញ្ចូល RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# ការរួមបញ្ចូល RunCloud {#runcloud-integration}

## ទិដ្ឋភាពទូទៅ {#overview}
RunCloud គឺជាវេទិកាគ្រប់គ្រងម៉ាស៊ីនមេ (server management platform) ដែលដំណើរការលើពពក (cloud-based) ដែលអនុញ្ញាតឱ្យអ្នកដាក់ពង្រាយ និងគ្រប់គ្រងកម្មវិធីគេហទំព័រនៅលើម៉ាស៊ីនមេពពករបស់អ្នកបានយ៉ាងងាយស្រួល។ ការរួមបញ្ចូលនេះជួយឱ្យមានការធ្វើសមកាលកម្មដែន (domain syncing) ដោយស្វ័យប្រវត្តិ និងការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL រវាង Ultimate Multisite និង RunCloud។

## លក្ខណៈពិសេស {#features}
- ការធ្វើសមកាលកម្មដែនដោយស្វ័យប្រវត្តិ
- ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL
- ការលុបដែននៅពេលការផ្គូផ្គង (mappings) ត្រូវបានលុប

## តម្រូវការ {#requirements}
ត្រូវកំណត់ថេរ (constants) ខាងក្រោមនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## របៀបตั้งค่า {#setup-instructions}

### ១. ទទួលបានព័ត៌មាន API របស់ RunCloud របស់អ្នក {#1-get-your-runcloud-api-credentials}

1. ចុចចូលទៅកាន់แดชប៊ឺរ (dashboard) របស់ RunCloud របស់អ្នក។
2. ចូលទៅកាន់ "User Profile" (ចុចលើរូបភាពប្រវត្តិរូបរបស់អ្នកនៅជ្រុងខាងស្តាំលើ)។
3. ជ្រើសរើស "API" ពីម៉ឺនុយ។
4. ចុច "Generate API Key" ប្រសិនបើអ្នកមិនទាន់មានមួយទេ។
5. កូពី (Copy) API Key និង API Secret របស់អ្នក។

### ២. ទទួលបាន Server ID និង App ID របស់អ្នក {#2-get-your-server-and-app-ids}

1. នៅលើแดชប៊ឺរ RunCloud របស់អ្នក សូមចូលទៅកាន់ "Servers"។
2. ជ្រើសរើសម៉ាស៊ីនមេដែលផ្ទុក WordPress multisite របស់អ្នក។
3. Server ID អាចមើលឃើញនៅក្នុង URL៖ `https://manage.runcloud.io/servers/{SERVER_ID}`
4. ចូលទៅកាន់ "Web Applications" ហើយជ្រើសរើសកម្មវិធី WordPress របស់អ្នក។
5. App ID អាចមើលឃើញនៅក្នុង URL៖ `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### ៣. បន្ថែមថេរ (Constants) ទៅក្នុង wp-config.php {#3-add-constants-to-wp-configphp}

បន្ថែមថេរខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### ៤. បើកដំណើរការការរួមបញ្ចូល (Enable the Integration) {#4-enable-the-integration}

១. នៅក្នុង WordPress admin, សូមទៅកាន់ Ultimate Multisite > Settings (ការកំណត់)
២. ចូលទៅកាន់แท็บ "Domain Mapping" (ការបែងចែកដែន)
៣. រំកិលចុះមកដល់ផ្នែក "Host Integrations" (ការរួមបញ្ចូល Host)
៤. បើកដំណើរការ RunCloud integration
៥. ចុចលើ "Save Changes" (រក្សាទុកការផ្លាស់ប្តូរ)

## វាដំណើរការដោយរបៀបណា {#how-it-works}

នៅពេលដែលដែនមួយត្រូវបានកំណត់ (mapped) នៅក្នុង Ultimate Multisite៖

១. ការរួមបញ្ចូល (integration) នឹងផ្ញើសំណើទៅ API របស់ RunCloud ដើម្បីបន្ថែមដែននោះទៅក្នុងកម្មវិធីរបស់អ្នក
២. ប្រសិនបើដែនត្រូវបានបន្ថែមដោយជោគជ័យ ការរួមបញ្ចូលនេះក៏នឹងធ្វើការដាក់ពង្រាយ (redeploy) ใบ chứng nhận SSL ឡើងវិញផងដែរ
៣. នៅពេលដែលការកំណត់ដែនមួយត្រូវបានលុបចេញ ការរួមបញ្ចូលនឹងដកដែននោះចេញពី RunCloud

សម្រាប់ការដំឡើង subdomain, ការរួមបញ្ចូលនឹងគ្រប់គ្រងការបង្កើត subdomain នៅក្នុង RunCloud ដោយស្វ័យប្រវត្តិនៅពេលមានគេហទំព័រថ្មីត្រូវបានបន្ថែមទៅក្នុងបណ្តាញរបស់អ្នក។

## ការដោះស្រាយបញ្ហា (Troubleshooting) {#troubleshooting}

### បញ្ហាការតភ្ជាប់ API {#api-connection-issues}
- សូមពិនិត្យមើលថាតើព័ត៌មានសម្ងាត់ API (API credentials) របស់អ្នកត្រឹមត្រូវឬអត់
- សូមពិនិត្យមើលថាតើ server និង app IDs របស់អ្នកត្រឹមត្រូវឬអត់
- សូមប្រាកដថាគណនី RunCloud របស់អ្នកមានសិទ្ធិគ្រប់គ្រាន់ដែលត្រូវការ

### បញ្ហាใบ chứng nhận SSL {#ssl-certificate-issues}
- RunCloud ប្រហែលជាចំណាយពេលខ្លះក្នុងការចេញใบ chứng nhận SSL
- សូមពិនិត្យមើលថាតើដែន (domains) របស់អ្នកកំពុងចង្អុលទៅ IP address របស់ server អ្នកត្រឹមត្រូវឬអត់
- សូមពិនិត្យមើលការកំណត់ SSL របស់ RunCloud សម្រាប់កម្មវិធីរបស់អ្នក

### ដែនមិនត្រូវបានបន្ថែម {#domain-not-added}
- សូមពិនិត្យមើល logs របស់ Ultimate Multisite ដើម្បីរកសារកំហុស (error messages) ណាមួយ
- សូមផ្ទៀងផ្ទាត់ថាតើដែននោះមិនទាន់ត្រូវបានបន្ថែមទៅក្នុង RunCloud រួចហើយឬនៅ
- សូមប្រាកដថាផែនការ (plan) របស់ RunCloud របស់អ្នកគាំទ្រដែនច្រើន (multiple domains)
