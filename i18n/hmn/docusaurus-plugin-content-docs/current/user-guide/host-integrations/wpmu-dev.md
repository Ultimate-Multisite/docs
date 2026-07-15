---
title: Integration WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# ការរួមបញ្ចូលជាមួយ WPMU DEV

## ພາບລວມ {#overview}
WPMU DEV ແມ່ນເວທີ WordPress ທີ່ຄົບວົງຈອນ ເຊິ່ງມີການໃຫ້ບໍລິການໃນດ້ານ hosting, plugins, ແລະ ບໍລິການຕ່າງໆສຳລັບເວັບໄຊທ໌ WordPress. ການເຊື່ອມຕໍ່ນີ້ຈະເຮັດໃຫ້ການ đồng bộ domain ອັດຕະໂນມັດ ແລະ ການຈັດການ SSL certificate ລະຫວ່າງ Ultimate Multisite ແລະ hosting ຂອງ WPMU DEV ເປັນໄປໄດ້.

## ຄຸນສົມບັດ {#features}
- ການđồng bộ domain ອັດຕະໂນມັດ
- ການຈັດການ SSL certificate
- ການທົດສອບການຢັ້ງຢືນ SSL certificate ທີ່ຂະຫຍາຍອອກໄປ

## ຂໍ້ກຳນົດ {#requirements}
ການເຊື່ອມຕໍ່ນີ້ຈະກວດສອບໂດຍອັດຕະໂນມັດວ່າທ່ານກຳລັງ host ຢູ່ WPMU DEV ແລະ ໃຊ້ API ທີ່ມີຢູ່ແລ້ວ. ບໍ່ຈຳເປັນຕ້ອງມີການຕັ້ງຄ່າເພີ່ມເຕີມຫຍັງ ຖ້າທ່ານ host ຢູ່ WPMU DEV.

ການເຊື່ອມຕໍ່ນີ້ຈະກວດສອບການມີຢູ່ຂອງ constant ຊື່ວ່າ `WPMUDEV_HOSTING_SITE_ID`, ເຊິ່ງຈະຖືກກຳນົດໂດຍອັດຕະໂນມັດເມື່ອ host ຢູ່ WPMU DEV.

## ຄູ່ມືການຕັ້ງຄ່າ {#setup-instructions}

### 1. ກວດສອບການ Host ຢູ່ WPMU DEV {#1-verify-wpmu-dev-hosting}
ຖ້າທ່ານ host ຢູ່ WPMU DEV, constant ທີ່ຈຳເປັນຄວນຈະຖືກກຳນົດແລ້ວ. ກວດສອບວ່າ:

1. constant `WPMUDEV_HOSTING_SITE_ID` ໄດ້ຖືກກຳນົດຢູ່ໃນ environment ຂອງທ່ານ
2. ທ່ານມີ membership WPMU DEV ທີ່ເຄື່ອນໄຫວ ແລະ ມີ API access

### 2. ເປີດການເຊື່ອມຕໍ່ (Enable the Integration) {#2-enable-the-integration}
1. ໃນ WordPress admin ຂອງທ່ານ, ໄປທີ່ Ultimate Multisite > Settings
2. ໄປທີ່ tab "Domain Mapping"
3. ລອຍລົງມາຫາ "Host Integrations"
4. ເປີດການເຊື່ອມຕໍ່ WPMU DEV
5. ກົດ "Save Changes"

## ມັນເຮັດວຽກແນວໃດ {#how-it-works}

### ການđồng bộ Domain (Domain Syncing) {#domain-syncing}
ເມື່ອ domain ຖືກ map ໃນ Ultimate Multisite:

1. ການເຊື່ອມຕໍ່ນີ້ຈະໃຊ້ WPMU DEV API ເພື່ອເພີ່ມ domain ນັ້ນເຂົ້າໃນ hosting account ຂອງທ່ານ
2. ມັນຍັງຈະເພີ່ມ www version ຂອງ domain ອັດຕະໂນມັດໃຫ້ອີກດ້ວຍ
3. WPMU DEV ຈະເປັນຜູ້ຈັດການການຕັ້ງຄ່າ domain ແລະ ການອອກ SSL certificate

### ການຈັດການ SSL Certificate (SSL Certificate Management) {#ssl-certificate-management}

ການເຊື່ອມຕໍ່ (integration) ຖືກຕັ້ງຄ່າໄວ້ເພື່ອເພີ່ມຈຳນວນຄັ້ງໃນການກວດສອບໃບຢັ້ງຢືນ SSL ສຳລັບການໂຮງຮຽນຂອງ WPMU DEV ເພາະວ່າອາດຈະໃຊ້ເວລາໄລຍະໜຶ່ງໃນການອອກ ແລະ ຕິດຕັ້ງໃບຢັ້ງຢືນ SSL. ໂດຍປົກກະຕິແລ້ວ, ມັນຈະພະຍາຍາມເຖິງ 10 ຄັ້ງສຳລັບການກວດສອບໃບຢັ້ງຢືນ SSL ເມື່ອທຽບກັບການພະຍາຍາມມາດຕະຖານ 5 ຄັ້ງ.

## ຂໍ້ຄວນຈື່ (Important Notes) {#important-notes}

### ການລຶບໂດເມນ (Domain Removal) {#domain-removal}

ປັດຈຸບັນ, API ຂອງ WPMU DEV ບໍ່ມີວິທີໃນການລຶບໂດເມນອອກ. ເມື່ອທ່ານເອົາການแมપໂດເມນອອກໃນ Ultimate Multisite, ໂດເມນນັ້ນຍັງຈະຢູ່ໃນບັນຊີໂຮງຮຽນຂອງ WPMU DEV ຂອງທ່ານຢູ່. ຖ້າຈຳເປັນ, ທ່ານຈະຕ້ອງໄປລຶບມັນດ້ວຍຕົນເອງຈາກ dashboard ຂອງ WPMU DEV hosting.

### ການຢັ້ງຢືນ API (API Authentication) {#api-authentication}

ການເຊື່ອມຕໍ່ນີ້ໃຊ້ API key ຂອງ WPMU DEV ເຊິ່ງຖືກເກັບໄວ້ໃນຖານຂໍ້ມູນ WordPress ຂອງທ່ານເປັນ option ຊື່ວ່າ `wpmudev_apikey`. ນີ້ຈະຖືກຕັ້ງຄ່າໂດຍອັດຕະໂນມັດເມື່ອທ່ານເຊື່ອມຕໍ່ໄຊທ໌ຂອງທ່ານກັບ WPMU DEV.

## ການແກ້ໄຂບັນຫາ (Troubleshooting) {#troubleshooting}

### ปัญหาການເຊື່ອມຕໍ່ API (API Connection Issues) {#api-connection-issues}
- ກວດສອບວ່າໄຊທ໌ຂອງທ່ານໄດ້ເຊື່ອມຕໍ່ກັບ WPMU DEV ແນວໃດຢ່າງຖືກຕ້ອງ.
- ກວດສອບວ່າ option `wpmudev_apikey` ຖືກຕັ້ງຢູ່ໃນຖານຂໍ້ມູນ WordPress ຂອງທ່ານແລ້ວບໍ່.
- ຮັບປະກັນວ່າການເປັນສະມາຊິກຂອງ WPMU DEV ຂອງທ່ານແມ່ນເປີດໃຊ້ງານຢູ່.

### ปัญหาໃບຢັ້ງຢືນ SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- WPMU DEV ອາດຈະໃຊ້ເວລາໃນການອອກໃບຢັ້ງຢືນ SSL (ປົກກະຕິແມ່ນ 5-15 ນາທີ).
- ການເຊື່ອມຕໍ່ນີ້ຖືກຕັ້ງຄ່າໄວ້ເພື່ອເກັບກວດສອບເຖິງ 10 ຄັ້ງສຳລັບໃບຢັ້ງຢືນ SSL.
- ຖ້າໃບຢັ້ງຢືນ SSL ຍັງບໍ່ອອກຫຼັງຈາກພະຍາຍາມຫຼາຍຄັ້ງ, ກະລຸນາຕິດຕໍ່ support ຂອງ WPMU DEV.

### ໂດເມນບໍ່ຖືກເພີ່ມ (Domain Not Added) {#domain-not-added}
- ກວດສອບ logs ຂອງ Ultimate Multisite ເພື່ອຫາຂໍ້ຄວາມຜິດພາດໃດໆ.
- ກວດສອບວ່າໂດເມນນັ້ນບໍ່ໄດ້ຖືກເພີ່ມເຂົ້າໃນ WPMU DEV ແລ້ວ.
- ຮັບປະກັນວ່າແຜນ hosting ຂອງທ່ານຂອງ WPMU DEV ຮອງຮັບຈຳນວນໂດເມນທີ່ທ່ານກຳລັງເພີ່ມໃສ່.
