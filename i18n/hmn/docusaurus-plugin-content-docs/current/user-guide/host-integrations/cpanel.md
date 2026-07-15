---
title: Cpanel Integration
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# ការតភ្ជាប់ជាមួយ cPanel

## ទិដ្ឋភាពទូទៅ {#overview}
cPanel គឺជាផ្ទាំងគ្រប់គ្រងគេហទំព័រដែលពេញនិយមបំផុតមួយ ដែលអ្នកផ្តល់សេវាបង្ហោះ (hosting providers) ច្រើនប្រើប្រាស់។ ការតភ្ជាប់នេះអនុញ្ញាតឱ្យមានការធ្វើសមកាលកម្មឈ្មោះដែន (domain syncing) ដោយស្វ័យប្រវត្តិរវាង Ultimate Multisite និង cPanel ដែលអនុញ្ញាតឱ្យអ្នកបន្ថែមអាល្យាករនៃឈ្មោះដែន (domain aliases) និង subdomain ទៅក្នុងគណនី cPanel របស់អ្នកដោយស្វ័យប្រវត្តិ។

## លក្ខណៈពិសេស {#features}
- ការបង្កើត addon domain ដោយស្វ័យប្រវត្តិនៅក្នុង cPanel
- ការបង្កើត subdomain ដោយស្វ័យប្រវត្តិនៅក្នុង cPanel (សម្រាប់ការដំឡើង subdomain multisite)
- ការលុបឈ្មោះដែននៅពេលដែល mapping ត្រូវបានលុប

## តម្រូវការ {#requirements}
អ្នកត្រូវកំណត់ថេរ (constants) ខាងក្រោមនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ជាជម្រើស អ្នកក៏អាចកំណត់បន្ថែមបាន៖

```php
define('WU_CPANEL_PORT', 2083); // កំណត់តម្លៃផ្សេង បើ cPanel របស់អ្នកប្រើ port ផ្សេង
define('WU_CPANEL_ROOT_DIR', '/public_html'); // កំណត់តម្លៃផ្សេង បើ root directory ឯកសាររបស់អ្នកខុសគ្នា
```

## ការណែនាំអំពីការរៀបចំ (Setup Instructions) {#setup-instructions}

### ១. ទទួលបានព័ត៌មាន cPanel របស់អ្នក {#1-get-your-cpanel-credentials}

1. យកឈ្មោះអ្នកប្រើប្រាស់ (username) និងពាក្យសម្ងាត់ (password) cPanel ពីអ្នកផ្តល់សេវាបង្ហោះរបស់អ្នក។
2. កំណត់ host cPanel របស់អ្នក (ជាធម្មតាគឺ `cpanel.yourdomain.com` ឬ `yourdomain.com:2083`)។

### ២. បន្ថែមថេរទៅក្នុង wp-config.php {#2-add-constants-to-wp-configphp}

បន្ថែមថេរខាងក្រោមទៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ជាជម្រើស អ្នកអាចកែសម្រួល port និង root directory បាន៖

```php
define('WU_CPANEL_PORT', 2083); // ប្តូរប្រសិនបើ cPanel របស់អ្នកប្រើ port ខុសគ្នា
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ប្តូរប្រសិនបើ document root ឯកសាររបស់អ្នកខុសគ្នា
```

### ៣. បើកដំណើរការការតភ្ជាប់ (Enable the Integration) {#3-enable-the-integration}

1. ຕັ້ງຄ່າໃນ WordPress admin, ໄປທີ່ Ultimate Multisite > Settings
2. ໄປທີ່ "Domain Mapping" tab
3. ລາກລົງມາເບິ່ງ "Host Integrations"
4. ເປີດການເຊື່ອມຕໍ່ກັບ cPanel (cPanel integration)
5. ກົດ "Save Changes"

## ມັນເຮັດວຽກແນວໃດ {#how-it-works}

### Addon Domains (ໂດເມນເພີ່ມເຕີມ) {#addon-domains}

ເວລາທີ່ເຮົາ map domain ໃນ Ultimate Multisite:

1. ການເຊື່ອມຕໍ່ຈະສົ່ງຄຳຮ້ອງຂໍໄປຫາ API ຂອງ cPanel ເພື່ອເພີ່ມ domain ນັ້ນເປັນ addon domain
2. Domain ນັ້ນຈະຖືກຕັ້ງຄ່າໃຫ້ຊີ້ໄປທີ່ root directory (ໂຟເल्ດຫຼັກ) ຂອງເຈົ້າ
3. ເວລາທີ່ເຮົາເອົາການ map domain ອອກ, ການເຊື່ອມຕໍ່ກໍຈະເອົາ addon domain ນັ້ນອອກຈາກ cPanel

### Subdomains (ຊື່ຍ່ອຍ) {#subdomains}

ສຳລັບການຕິດຕັ້ງ subdomain multisite, ເມື່ອມີການສ້າງ site ໃໝ່:

1. ການເຊື່ອມຕໍ່ຈະດຶງສ່ວນ subdomain ອອກມາຈາກ full domain
2. ມັນຈະສົ່ງຄຳຮ້ອງຂໍໄປຫາ API ຂອງ cPanel ເພື່ອເພີ່ມ subdomain ນັ້ນ
3. Subdomain ນັ້ນຈະຖືກຕັ້ງຄ່າໃຫ້ຊີ້ໄປທີ່ root directory ຂອງເຈົ້າ

## ສິ່ງທີ່ຄວນຈື່ໄວ້ສຳຄັນ {#important-notes}

- ການເຊື່ອມຕໍ່ນີ້ໃຊ້ API2 ຂອງ cPanel ເພື່ອຕິດຕໍ່ກັບບັນຊີ cPanel ຂອງເຈົ້າ
- ບັນຊີ cPanel ຂອງເຈົ້າຕ້ອງມີສິດໃນການເພີ່ມ addon domains ແລະ subdomains
- ຜູ້ໃຫ້ບໍລິການໂຮດບ່ອນ (hosting providers) ບາງແຫ່ງອາດຈະຈຳກັດຈຳນວນ addon domains ຫຼື subdomains ທີ່ເຈົ້າສາມາດສ້າງໄດ້
- ການເຊື່ອມຕໍ່ນີ້ບໍ່ໄດ້ຈັດການການຕັ້ງຄ່າ DNS; ເຈົ້າກໍຍັງຕ້ອງຊີ້ domain ຂອງເຈົ້າໄປທີ່ IP address ຂອງ server

## ການແກ້ໄຂບັນຫາ (Troubleshooting) {#troubleshooting}

### API Connection Issues (ບັນຫາການເຊື່ອມຕໍ່ API) {#api-connection-issues}
- ກວດສອບວ່າ username ແລະ password ຂອງ cPanel ເຈົ້າຖືກຕ້ອງບໍ່
- ກວດເບິ່ງວ່າ host ຂອງ cPanel ເຈົ້າຖືກຕ້ອງ ແລະ ສາມາດເຂົ້າເຖິງໄດ້ບໍ່
- ຮັບປະກັນວ່າບັນຊີ cPanel ຂອງເຈົ້າມີສິດທີ່ຈຳເປັນ
- ລອງໃຊ້ full URL ຂອງ host (ຕົວຢ່າງ: `https://cpanel.yourdomain.com`)

### Domain Not Added (Domain ບໍ່ຖືກເພີ່ມ) {#domain-not-added}
- ກວດເບິ່ງ logs ຂອງ Ultimate Multisite ເພື່ອຫາຂໍ້ຄວາມຜິດພາດໃດໆ
- ກວດສອບວ່າ domain ນັ້ນບໍ່ໄດ້ຖືກເພີ່ມເຂົ້າໃນ cPanel ແລ້ວບໍ່
- ຮັບປະກັນວ່າບັນຊີ cPanel ຂອງເຈົ້າບໍ່ໄດ້ຮອດຈຳກັດສູງສຸດສຳລັບ addon domains ຫຼື subdomains

### Certyfikat SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Integration no ua li txhawm txog caom certifikat SSL.
- Koj yuav txhua teeb meej txog siv cPanel's SSL/TLS tools lossis AutoSSL feature los caom SSL certificates rau cov domain hauv koj.
- Lossis, koj yuav tuaj ye siv kev pabcuam zoo li Let's Encrypt neeg hauv cPanel's AutoSSL.
