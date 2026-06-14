---
title: Integration Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# ការតភ្ជាប់ជាមួយ Hostinger (hPanel)

## ទិដ្ឋភាពទូទៅ

Hostinger គឺជាអ្នកផ្តល់សេវាបង្ហោះគេហទំព័រដ៏ពេញនិយម ដែលមានផ្ទាំងគ្រប់គ្រងទំនើបមួយឈ្មោះថា hPanel។ Ultimate Multisite Hostinger integration អនុញ្ញាតឱ្យធ្វើការបម្រុងដែនដោយស្វ័យប្រវត្តិរវាង Ultimate Multisite និង hPanel របស់ Hostinger ដែលអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងការផ្គូផ្គងដែន (domain mappings) និង subdomain ដោយស្វ័យប្រវត្តិពី WordPress admin របស់អ្នក។

## លក្ខណៈពិសេស

- ការបង្កើត addon domain ដោយស្វ័យប្រវត្តិនៅក្នុង hPanel
- ការបង្កើត subdomain ដោយស្វ័យប្រវត្តិនៅក្នុង hPanel (សម្រាប់ការដំឡើង subdomain multisite)
- ការលុបដែននៅពេលដែលការផ្គូផ្គងត្រូវបានលុប
- ការរួមបញ្ចូលគ្នាដោយរលូនជាមួយ API គ្រប់គ្រងដែនរបស់ hPanel

## តម្រូវការ

ដើម្បីប្រើ Hostinger integration អ្នកត្រូវការ៖

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

1. ចុចចូលគណនី Hostinger របស់អ្នក ហើយចូលទៅកាន់ hPanel។
2. ចូលទៅកាន់ **Account Settings** → **API Tokens**។
3. ចុចលើ **Create New Token**។
4. ដាក់ឈ្មោះឱ្យ token របស់អ្នកមានលក្ខណៈពិពណ៌នា (ឧទាហរណ៍៖ "Ultimate Multisite")។
5. ជ្រើសរើសការអនុញ្ញាតដែលចាំបាច់៖
   - Domain management
   - Subdomain management
6. ចម្លង token ដែលបានបង្កើត ហើយរក្សាទុកវាឱ្យបានសុវត្ថិភាព។

### ២. រកប្រភព Account ID របស់អ្នក

1. នៅក្នុង hPanel សូមចូលទៅកាន់ **Account Settings** → **Account Information**។
2. Account ID របស់អ្នកនឹងបង្ហាញនៅលើទំព័រនេះ។
3. ចម្លង និងរក្សាទុក ID នេះសម្រាប់ជំហានបន្ទាប់។

### ៣. បន្ថែម Constants ទៅក្នុង wp-config.php

បន្ថែម constants ខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ຖ້າ tài khoản Hostinger ຂອງເຈົ້າໃຊ້ API endpoint ອື່ນ, ເຈົ້າສາມາດປັບຕ່າງໄດ້:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. ເປີດການເຊື່ອມຕໍ່ (Enable the Integration)

1. ໃນ WordPress admin, ໄປທີ່ **Ultimate Multisite > Settings**
2. ໄປທີ່ tab **Domain Mapping**
3. ລາກລົງມາຫາ **Host Integrations**
4. ເປີດການເຊື່ອມຕໍ່ **Hostinger (hPanel)**
5. ກົດ **Save Changes**

## ມັນເຮັດວຽກແນວໃດ (How It Works)

### Addon Domains (ໂດເມນເພີ່ມເຕີມ)

ເວລາທີ່ເຈົ້າ map domain ໃນ Ultimate Multisite:

1. ການເຊື່ອມຕໍ່ຈະສົ່ງ request ໄປຫາ Hostinger's API ເພື່ອເພີ່ມ domain ນັ້ນເປັນ addon domain
2. Domain ນັ້ນຖືກຕັ້ງຄ່າໃຫ້ຊີ້ໄປທີ່ root directory ຂອງເຈົ້າ
3. ເວລາທີ່ເອົາການ map domain ອອກ, ການເຊື່ອມຕໍ່ຈະເອົາ addon domain ອອກຈາກ hPanel ໂດຍອັດຕະໂນມັດ

### Subdomains (ຊື່ຍ່ອຍ)

ສຳລັບການຕິດຕັ້ງ subdomain multisite, ເມື່ອມີ site ໃໝ່ຖືກສ້າງຂຶ້ນ:

1. ການເຊື່ອມຕໍ່ຈະດຶງສ່ວນ subdomain ອອກຈາກ domain ເຕັມ
2. ມັນຈະສົ່ງ request ໄປຫາ Hostinger's API ເພື່ອເພີ່ມ subdomain ນັ້ນ
3. Subdomain ນັ້ນຖືກຕັ້ງຄ່າໃຫ້ຊີ້ໄປທີ່ root directory ຂອງເຈົ້າ

## ສິ່ງທີ່ຄວນຈື່ (Important Notes)

- ການເຊື່ອມຕໍ່ນີ້ໃຊ້ Hostinger's REST API ເພື່ອສື່ສານກັບ tài khoảnຂອງເຈົ້າ
- API token ຂອງເຈົ້າຕ້ອງມີສິດທີ່ຈຳເປັນສຳລັບການຈັດການ domain ແລະ subdomain
- ການເຊື່ອມຕໍ່ນີ້ບໍ່ໄດ້ຈັດການ DNS configuration; domain ຕ່າງໆຕ້ອງຖືກຊີ້ໄປທີ່ Hostinger account ຂອງເຈົ້າແລ້ວ
- API requests ແມ່ນເຮັດຜ່ານ HTTPS ຢ່າງປອດໄພ
- ເຮັດໃຫ້ API token ຂອງເຈົ້າປອດໄພ ແລະ ຫ້າມແບ່ງປັນມັນຕໍ່ສາທາລະນະ

## ການແກ້ໄຂບັນຫາ (Troubleshooting)

### API Connection Issues

- ຢືນຢັນວ່າ API token ຂອງເຈົ້າຖືກຕ້ອງ ແລະ ຍັງບໍ່ໝົດອາຍຸ
- ກວດສອບວ່າ Account ID ຂອງເຈົ້າຖືກຕ້ອງແລ້ວ
- ຮັບປະກັນວ່າ API token ຂອງເຈົ້າມີສິດທີ່ຈຳເປັນສຳລັບການຈັດການ domain
- ຢືນຢັນວ່າ account Hostinger ຂອງເຈົ້າເປີດໃຊ້ງານ ແລະ ຢູ່ໃນສະພາບດີ

### Domain ບໍ່ໄດ້ເພີ່ມເຂົ້າໄປ

- ກວດສອບ logs ຂອງ Ultimate Multisite ເພື່ອຫາຂໍ້ຄວາມຜິດພາດໃດໆ
- ກວດສອບວ່າ domain ນັ້ນຍັງບໍ່ໄດ້ຖືກເພີ່ມເຂົ້າໃນ account Hostinger ຂອງເຈົ້າແລ້ວ
- ຮັບປະກັນວ່າ account Hostinger ຂອງເຈົ້າບໍ່ໄດ້ຮອດຂີດຈຳກັດສຳລັບ addon domains ແລ້ວ
- ຢືນຢັນວ່າ domain ນັ້ນຖືກຊີ້ໄປ (pointed) ຢ່າງຖືກຕ້ອງກັບ nameservers ຂອງ Hostinger

### ปัญหาໃບຢັ້ງຢືນ SSL (SSL Certificate Issues)

- ການເຊື່ອມຕໍ່ນີ້ບໍ່ໄດ້ຈັດການການອອກໃບຢັ້ງຢືນ SSL
- Hostinger ສ່ວນຫຼາຍຈະໃຫ້ໃບຢັ້ງຢືນ SSL ຟຣີຜ່ານ AutoSSL
- ເຈົ້າສາມາດຈັດການໃບຢັ້ງຢືນ SSL ໂດຍກົງໃນ hPanel ພາຍໃຕ້ **SSL/TLS**
- ຫຼື ອື່ນໆ, ສາມາດໃຊ້ Let's Encrypt ກັບຄຸນສົມບັດ AutoSSL ຂອງ Hostinger

## ການສະໜັບສະໜູນ (Support)

ສຳລັບຄວາມຊ່ວຍເຫຼືອເພີ່ມເຕີມກ່ຽວກັບການເຊື່ອມຕໍ່ກັບ Hostinger, ກະລຸນາກໄປທີ່:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
