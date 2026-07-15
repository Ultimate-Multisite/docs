---
title: Integration ntawm ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ការរួមបញ្ចូល ServerPilot

## ພາບລວມ {#overview}
ServerPilot ແມ່ນບໍລິການໃນ cloud ເພື່ອໂຮດ WordPress ແລະ ເທິງເວັບໄຊ PHP ອື່ນໆ ຢູ່ເທິງ server ຕ່າງໆ ເຊັ່ນ DigitalOcean, Amazon, Google, ຫຼືຜູ້ໃຫ້ບໍລິການ server ອື່ນໆ. ການເຊື່ອມຕໍ່ນີ້ຈະເຮັດໃຫ້ການ đồng bộ domain (domain syncing) ແລະ ການຈັດການ SSL certificate ລະຫວ່າງ Ultimate Multisite ກັບ ServerPilot ເປັນແບບອັດຕະໂນມັດ.

## ຄຸນສົມບັດ {#features}
- ການđồng bộ domain ອັດຕະໂນມັດ
- ການຈັດການ SSL certificate ໂດຍໃຊ້ Let's Encrypt
- ການຕໍ່ອາຍຸ SSL renewal ອັດຕະໂນມັດ

## ຂໍ້ກຳນົດ {#requirements}
ຄ່າ constant (ຕົວປ່ຽນ) ຂ້າງລຸ່ມນີ້ຕ້ອງຖືກກຳນົດໄວ້ໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## ຄູ່ມືການຕັ້ງຄ່າ {#setup-instructions}

### 1. ດຶງຂໍ້ມູນ API Credentials ຂອງ ServerPilot {#1-get-your-serverpilot-api-credentials}

1. ເຂົ້າສູ່ລະບົບ dashboard ຂອງ ServerPilot ຂອງທ່ານ
2. ໄປທີ່ "Account" > "API"
3. ສ້າງ API key ໃໝ່ຖ້າທ່ານຍັງບໍ່ມີ
4. ຄັດລອກ Client ID ແລະ API Key ຂອງທ່ານ

### 2. ດຶງ App ID ຂອງທ່ານ {#2-get-your-app-id}

1. ໃນ dashboard ຂອງ ServerPilot, ໄປທີ່ "Apps"
2. ເລືອກ app ທີ່ WordPress multisite ຂອງທ່ານຖືກໂຮດຢູ່
3. App ID ສາມາດເຫັນໄດ້ໃນ URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. ເພີ່ມ Constants ໃນ wp-config.php {#3-add-constants-to-wp-configphp}

ເພີ່ມ constant ຂ້າງລຸ່ມນີ້ເຂົ້າໄປໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. ເປີດການເຊື່ອມຕໍ່ (Enable the Integration) {#4-enable-the-integration}

1. ໃນ WordPress admin, ໄປທີ່ Ultimate Multisite > Settings
2. ຊອກຫາ tab "Domain Mapping"
3. ລອຍລົງມາເຖິງ "Host Integrations"
4. ເປີດການເຊື່ອມຕໍ່ ServerPilot
5. ກົດ "Save Changes"

## ມັນເຮັດວຽກແນວໃດ {#how-it-works}

### ການđồng bộ Domain (Domain Syncing) {#domain-syncing}

ເມື່ອ domain ຖືກ map ໃນ Ultimate Multisite:

1. ការបញ្ចូលទិន្នន័យ (integration) នឹងយកបញ្ជីឈ្មោះដែន (domains) បច្ចុប្បន្នពី ServerPilot។
2. វាបន្ថែមដែនថ្មីទៅក្នុងបញ្ជី (រួមជាមួយកំណែ www ប្រសិនបើមាន)។
3. វាផ្ញើបញ្ជីដែលបានធ្វើបច្ចុប្បន្នទៅ ServerPilot តាមរយៈ API។
4. ServerPilot នឹងធ្វើបច្ចុប្បន្នភាពបញ្ជីឈ្មោះដែនសម្រាប់កម្មវិធីរបស់អ្នក។

### ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL (SSL Certificate Management) {#ssl-certificate-management}

បន្ទាប់ពីការซิงค์ដែនរួច៖

1. ការបញ្ចូលទិន្នន័យនឹងបើក AutoSSL ស្វ័យប្រវត្តិសម្រាប់កម្មវិធីរបស់អ្នកដោយស្វ័យប្រវត្តិ។
2. ServerPilot នឹងគ្រប់គ្រងការចេញ និងការដំឡើងវិញ្ញាបនបត្រ SSL ដោយប្រើ Let's Encrypt។
3. ServerPilot ក៏នឹងគ្រប់គ្រងការបន្តសុពលភាព (renewal) នៃវិញ្ញាបនបត្រ SSL ដោយស្វ័យប្រវត្តិផងដែរ។

## ការផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ SSL (SSL Certificate Verification) {#ssl-certificate-verification}

ការបញ្ចូលទិន្នន័យត្រូវបានកំណត់ដើម្បីបង្កើនចំនួនលើកចោលសម្រាប់ការផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ SSL សម្រាប់ ServerPilot ដោយសារវាអាចចំណាយពេលខ្លះសម្រាប់ ServerPilot ដើម្បីចេញ និងដំឡើងវិញ្ញាបនបត្រ SSL។ ជាធម្មតា វានឹងព្យាយាមរហូតដល់ 5 ដង ប៉ុន្តែអ្នកអាចកែសម្រួលវាបានដោយប្រើ filters (តម្រង)។

## ការដោះស្រាយបញ្ហា (Troubleshooting) {#troubleshooting}

### បញ្ហាការតភ្ជាប់ API (API Connection Issues) {#api-connection-issues}
- សូមពិនិត្យមើលថា Client ID និង API Key របស់អ្នកត្រឹមត្រូវឬអត់។
- សូមពិនិត្យមើលថា App ID របស់អ្នកត្រឹមត្រូវឬអត់។
- សូមប្រាកដថាគណនី ServerPilot របស់អ្នកមានសិទ្ធិ (permissions) ដែលចាំបាច់។

### បញ្ហាវិញ្ញាបនបត្រ SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- ServerPilot ទាមទារឱ្យដែនទាំងនោះមាន DNS records ដែលត្រឹមត្រូវចង្អុលទៅកាន់ server របស់អ្នក មុននឹងចេញវិញ្ញាបនបត្រ SSL។
- ប្រសិនបើវិញ្ញាបនបត្រ SSL មិនត្រូវបានចេញទេ សូមពិនិត្យមើលថាដែនរបស់អ្នកកំពុងចង្អុលទៅ IP address របស់ server អ្នកបានត្រឹមត្រូវឬអត់។
- វាអាចចំណាយពេលខ្លះសម្រាប់ ServerPilot ដើម្បីចេញ និងដំឡើងវិញ្ញាបនបត្រ SSL (ជាធម្មតា 5-15 នាទី)។

### ដែនមិនត្រូវបានបន្ថែម (Domain Not Added) {#domain-not-added}
- សូមពិនិត្យមើល logs របស់ Ultimate Multisite សម្រាប់សារកំហុសណាមួយ។
- សូមផ្ទៀងផ្ទាត់ថាដែននោះមិនទាន់ត្រូវបានបន្ថែមទៅក្នុង ServerPilot រួចហើយឬនៅ។
- សូមប្រាកដថាផែនការ (plan) របស់ ServerPilot របស់អ្នកគាំទ្រចំនួនដែនដែលអ្នកកំពុងបន្ថែម។

### Txhob txhob domaine (Domain Removal) {#domain-removal}
- Oob hnub, ServerPilot API twb tsis muaj tuaj txhob txhob domain txhob.
- Thaum ua rau txhob mapping domain ha Ultimate Multisite, integration yuav tsim khoom (update) tom qab domain list ha ServerPilot kom tsis lhuagana domain txhob chuw.
