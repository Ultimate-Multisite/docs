---
title: Kloste Integration
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# ការតភ្ជាប់ Closte

## ទិដ្ឋភាពទូទៅ {#overview}
Closte គឺជាវេទិកាបង្ហោះ WordPress ដែលគ្រប់គ្រងមួយដែលបង្កើតឡើងនៅលើ Google Cloud infrastructure។ ការតភ្ជាប់នេះអនុញ្ញាតឱ្យមានការធ្វើសមកាលកម្មដែន (domain syncing) និងការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL រវាង Ultimate Multisite និង Closte ដោយស្វ័យប្រវត្តិ។

## លក្ខណៈពិសេស {#features}
- ការធ្វើសមកាលកម្មដែនដោយស្វ័យប្រវត្តិ
- ការគ្រប់គ្រងវិញ្ញាបនបត្រ SSL
- ការគាំទ្រដែន Wildcard
- មិនបាច់កំណត់រចនាសម្ព័ន្ធទេ ប្រសិនបើអ្នកដំណើរការនៅលើ Closte

## តម្រូវការ {#requirements}
ប្រសិនបើអ្នកកំពុងប្រើ Closte អ្នកត្រូវតែកំណត់ constant ខាងក្រោមនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក៖

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

constant នេះជាធម្មតាត្រូវបានកំណត់រួចហើយ ប្រសិនបើអ្នកកំពុងបង្ហោះនៅលើ Closte។

## ការណែនាំអំពីការរៀបចំ {#setup-instructions}

### ១. ផ្ទៀងផ្ទាត់ API Key របស់ Closte របស់អ្នក {#1-verify-your-closte-api-key}
ប្រសិនបើអ្នកកំពុងបង្ហោះនៅលើ Closte constant `CLOSTE_CLIENT_API_KEY` គួរតែត្រូវបានកំណត់រួចហើយនៅក្នុងឯកសារ `wp-config.php` របស់អ្នក។ អ្នកអាចផ្ទៀងផ្ទាត់វាបានដោយពិនិត្យមើលឯកសារ `wp-config.php` របស់អ្នក។

### ២. បើកដំណើរការការតភ្ជាប់ (Enable the Integration) {#2-enable-the-integration}
1. នៅក្នុង WordPress admin របស់អ្នក សូមចូលទៅកាន់ Ultimate Multisite > Settings
2. ចូលទៅកាន់แท็บ "Domain Mapping"
3. រំលងចុះក្រោមទៅផ្នែក "Host Integrations"
4. បើកដំណើរការការតភ្ជាប់ Closte (Enable the Closte integration)
5. ចុចលើ "Save Changes"

## វាដំណើរការដោយរបៀបណា {#how-it-works}

នៅពេលដែលដែនមួយត្រូវបានកំណត់រចនាសម្ព័ន្ធនៅក្នុង Ultimate Multisite៖

1. ការតភ្ជាប់នេះនឹងផ្ញើសំណើទៅ API របស់ Closte ដើម្បីបន្ថែមដែននោះទៅក្នុងកម្មវិធីរបស់អ្នក។
2. Closte នឹងគ្រប់គ្រងការផ្តល់វិញ្ញាបនបត្រ SSL ដោយស្វ័យប្រវត្តិ។
3. នៅពេលដែលការកំណត់រចនាសម្ព័ន្ធដែនត្រូវបានលុបចេញ ការតភ្ជាប់នេះនឹងលុបដែននោះចេញពី Closte។

ការតភ្ជាប់នេះក៏ដំណើរការជាមួយការកំណត់អត្រានៃ DNS check interval នៅក្នុង Ultimate Multisite ដែលអនុញ្ញាតឱ្យអ្នកកំណត់ថាតើប្រព័ន្ធគួរពិនិត្យមើលការផ្សព្វផ្សាយ DNS និងការចេញវិញ្ញាបនបត្រ SSL រញ៉េរញ៉ៃញ៉ៃប៉ុន្មាន។

## ការបង្កើតបញ្ជីដែន (Domain Record Creation) {#domain-record-creation}

ການເຊື່ອມຕໍ່ນີ້ຮັບປະກັນວ່າ ເມື່ອມີການສ້າງ ຫຼື ສໍາເນົາໄຊທ໌ໃໝ່, ຈະມີການສ້າງ record ຊື່ໂດເມນ (domain record) ອັດຕະໂນມັດ. ນີ້ແມ່ນສິ່ງທີ່ສໍາຄັນເປັນພິເສດສຳລັບການເຊື່ອມຕໍ່ Closte ເພາະວ່າ ການສ້າງ record ຊື່ໂດເມນນີ້ ຈະກະຕຸ້ນໃຫ້ API ຂອງ Closte ສ້າງໂດເມນ ແລະ SSL certificate ໃຫ້ພວກເຮົາ.

## ການແກ້ໄຂບັນຫາ (Troubleshooting) {#troubleshooting}

### ปัญหาການເຊື່ອມຕໍ່ API (API Connection Issues) {#api-connection-issues}
- ກວດສອບວ່າ Closte API key ຂອງທ່ານຖືກຕ້ອງບໍ່
- ຮັບປະກັນວ່າບັນຊີ Closte ຂອງທ່ານມີສິດທີ່ຈຳເປັນທັງໝົດ

### ปัญหา SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}
- Closte ອາດຈະໃຊ້ເວລາໃນການອອກ SSL certificate (ປົກກະຕິແມ່ນ 5-10 ນາທີ)
- ກວດສອບວ່າໂດເມນຂອງທ່ານຊີ້ໄປຫາ IP address ຂອງ server Closte ຂອງທ່ານຢ່າງຖືກຕ້ອງບໍ່
- ກວດສອບ DNS records ຂອງໂດເມນທ່ານ ເພື່ອໃຫ້ແນ່ໃຈວ່າໄດ້ຖືກຕັ້ງຄ່າໄວ້ຢ່າງຖືກຕ້ອງ

### ໂດເມນບໍ່ຖືກເພີ່ມ (Domain Not Added) {#domain-not-added}
- ກວດສອບ logs ຂອງ Ultimate Multisite ເພື່ອຫາຂໍ້ຄວາມຜິດພາດໃດໆ
- ກວດສອບວ່າໂດເມນນັ້ນບໍ່ໄດ້ຖືກເພີ່ມເຂົ້າໃນ Closte ແລ້ວບໍ່
- ຮັບປະກັນວ່າ DNS records ຂອງໂດເມນຂອງທ່ານໄດ້ຖືກຕັ້ງຄ່າຢ່າງຖືກຕ້ອງແລ້ວ

### ໄລຍະເວລາການກວດສອບ DNS (DNS Check Interval) {#dns-check-interval}
- ຖ້າ SSL certificates ເຮັດໃຫ້ໃຊ້ເວລາດົນເກີນໄປ, ທ່ານສາມາດປັບໄລຍະເວລາການກວດສອບ DNS ໃນ Domain Mapping settings ໄດ້.
- ໄລຍະເວລາເລີ່ມຕົ້ນແມ່ນ 300 ວິນາທີ (5 ນາທີ), ແຕ່ທ່ານສາມາດຕັ້ງມັນໃຫ້ຕໍ່າທີ່ສຸດເຖິງ 10 ວິນາທີ ເພື່ອໃຫ້ການກວດສອບໄວຂຶ້ນໃນເວລາທົດສອບ.
