---
title: Integration ntawm WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# ការរួមបញ្ចូលជាមួយ WP Engine

## ພາບລວມ {#overview}
WP Engine ເປັນເວທີໂຮດ WordPress ທີ່ຈັດການແບບພຣີມຽມ (premium managed) ທີ່ໃຫ້ປະສິດທິພາບ, ຄວາມປອດໄພ, ແລະ ສາມາດຂະຫຍາຍໄດ້ດີສຳລັບເວັບໄຊ WordPress. ການເຊື່ອມຕໍ່ນີ້ຈະເຮັດໃຫ້ການ đồng bộ domain ອັດຕະໂນມັດລະຫວ່າງ Ultimate Multisite ແລະ WP Engine ເຮັດໄດ້.

## ຄຸນສົມບັດ {#features}
- ການđồng bộ domain ອັດຕະໂນມັດ
- ຮອງຮັບ subdomain ສຳລັບການຕິດຕັ້ງ multisite
- ການເຊື່ອມຕໍ່ທີ່ລຽບງ່າຍກັບລະບົບທີ່ມີຢູ່ແລ້ວຂອງ WP Engine

## ຂໍ້ກຳນົດ {#requirements}
ການເຊື່ອມຕໍ່ນີ້ຈະກວດສອບອັດຕະໂນມັດວ່າເຈົ້າໃຊ້ WP Engine ຫຼື ບໍ່ ແລະ ໃຊ້ API ຂອງ WP Engine ທີ່ມາພ້ອມ. ຖ້າ plugin WP Engine ເປີດໃຊ້ງານຢ່າງຖືກຕ້ອງແລ້ວ, ບໍ່ຈຳເປັນຕ້ອງຕັ້ງຄ່າເພີ່ມເຕີມໃດໆ.

ຢ່າງໃດກໍຕາມ, ຖ້າເຈົ້າຕ້ອງການຕັ້ງຄ່າການເຊື່ອມຕໍ່ດ້ວຍຕົນເອງ, ເຈົ້າສາມາດກຳນົດໜຶ່ງໃນຄ່າ (constant) ນີ້ໃນໄຟລ໌ `wp-config.php` ຂອງເຈົ້າໄດ້:

```php
define('WPE_APIKEY', 'your_api_key'); // ວິທີທີ່ແນະນຳທີ່ສຸດ
// ຫຼື
define('WPE_API', 'your_api_key'); // ວິທີທາງເລືອກ
```

## ຄູ່ມືການຕັ້ງຄ່າ {#setup-instructions}

### 1. ກວດສອບ Plugin WP Engine {#1-verify-wp-engine-plugin}

ຖ້າເຈົ້າໃຊ້ WP Engine, plugin WP Engine ຄວນຈະຖືກຕິດຕັ້ງ ແລະ ເປີດໃຊ້ງານແລ້ວ. ກວດສອບວ່າ:

1. Plugin WP Engine ເປີດໃຊ້ງານຢູ່
2. ມີໄຟລ໌ `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ຢູ່ໃນໂຟເल्ດນັ້ນ

### 2. ເປີດໃຊ້ການເຊື່ອມຕໍ່ (Enable the Integration) {#2-enable-the-integration}

1. ໃນ WordPress admin ຂອງເຈົ້າ, ໄປທີ່ Ultimate Multisite > Settings
2. ຊອກຫາ tab "Domain Mapping"
3. ລອຍລົງມາຫາ "Host Integrations"
4. ເປີດໃຊ້ການເຊື່ອມຕໍ່ WP Engine
5. ກົດ "Save Changes"

## ມັນເຮັດວຽກແນວໃດ {#how-it-works}

### ການđồng bộ Domain (Domain Syncing) {#domain-syncing}

ເມື່ອມີ domain ຖືກ map ໃນ Ultimate Multisite:

1. ການເຊື່ອມຕໍ່ນີ້ຈະໃຊ້ WP Engine API ເພື່ອເພີ່ມ domain ນັ້ນເຂົ້າໃນການຕິດຕັ້ງຂອງເຈົ້າຢູ່ WP Engine
2. WP Engine ຈະເປັນຜູ້ຈັດການການຕັ້ງຄ່າ domain ແລະ ການອອກ SSL certificate
3. ເມື່ອມີການເອົາ domain map ອອກ, ການເຊື່ອມຕໍ່ນີ້ກໍຈະເອົາ domain ນັ້ນອອກຈາກ WP Engine

ສຳລັບການຕິດຕັ້ງ subdomain multisite:

1. ການເຊື່ອມຕໍ່ນີ້ຈະເພີ່ມ subdomain ທຸກອັນເຂົ້າໃນ WP Engine ເມື່ອມີໄຊທ໌ໃໝ່ຖືກສ້າງຂຶ້ນ
2. WP Engine ຈະຈັດການການຕັ້ງຄ່າ subdomain ນັ້ນໃຫ້ແລ້ວ
3. ເມື່ອມີໄຊທ໌ຖືກລຶບ, ການເຊື່ອມຕໍ່ນີ້ກໍຈະເອົາ subdomain ອອກຈາກ WP Engine

## ຂໍ້ຄວນຈື່ {#subdomain-support}

### Wildcard Domains (ໂດເມນແບບ wildcard) {#important-notes}

ສຳລັບການຕິດຕັ້ງ subdomain multisite, ແນະນຳໃຫ້ຕິດຕໍ່ support ຂອງ WP Engine ເພື່ອຮ້ອງຂໍການຕັ້ງຄ່າ wildcard domain. ສິ່ງນີ້ຈະເຮັດໃຫ້ subdomain ທັງໝົດເຮັດວຽກໄດ້ໂດຍອັດຕະໂນມັດໂດຍບໍ່ຈຳເປັນຕ້ອງເພີ່ມໃສ່ແຕ່ລະອັນເອງ.

### SSL Certificates (ໃບຢັ້ງຢືນ SSL) {#wildcard-domains}

WP Engine ຈະຈັດການການອອກ ແລະ ການຕໍ່ອາຍຸໃບຢັ້ງຢືນ SSL ໃຫ້ກັບທຸກ domain ທີ່ຖືກເພີ່ມຜ່ານການເຊື່ອມຕໍ່ນີ້ໂດຍອັດຕະໂນມັດ. ບໍ່ຕ້ອງການການຕັ້ງຄ່າເພີ່ມເຕີມໃດໆ.

## ການແກ້ໄຂບັນຫາ (Troubleshooting) {#ssl-certificates}

### API Connection Issues (ບັນຫາການເຊື່ອມຕໍ່ API) {#troubleshooting}
- ກວດສອບວ່າ plugin WP Engine ເປີດໃຊ້ງານຢູ່ ແລະ ຖືກຕັ້ງຄ່າຢ່າງຖືກຕ້ອງແລ້ວບໍ່
- ຖ້າທ່ານໄດ້ກຳນົດ API key ແບບເອງ, ກໍໃຫ້ກວດສອບວ່າມັນຖືກຕ້ອງແລ້ວບໍ່
- ຕິດຕໍ່ support ຂອງ WP Engine ຖ້າທ່ານມີບັນຫາជាមួយ API

### Domain Not Added (Domain ບໍ່ໄດ້ຖືກເພີ່ມ) {#api-connection-issues}
- ກວດສອບ logs ຂອງ Ultimate Multisite ເພື່ອຊອກຫາຂໍ້ຄວາມຜິດພາດໃດໆ
- ກວດສອບວ່າ domain ນັ້ນບໍ່ໄດ້ຖືກເພີ່ມເຂົ້າ WP Engine ແລ້ວບໍ່
- ໃຫ້ແນ່ໃຈວ່າแผน (plan) ຂອງ WP Engine ຂອງທ່ານຮອງຮັບຈຳນວນ domain ທີ່ທ່ານກຳລັງເພີ່ມຢູ່

### Subdomain Issues (ບັນຫາ subdomain) {#domain-not-added}
- ຖ້າ subdomain ບໍ່ເຮັດວຽກ, ກໍຕິດຕໍ່ support ຂອງ WP Engine ເພື່ອຮ້ອງຂໍການຕັ້ງຄ່າ wildcard domain
- ກວດສອບວ່າການຕັ້ງຄ່າ DNS ຂອງທ່ານຖືກຕ້ອງສຳລັບ domainຫຼັກ ແລະ subdomain ທັງໝົດແລ້ວ
