---
title: Integration ntawm GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integration ກັບ GridPane {#gridpane-integration}

## ພາບລວມ {#overview}
GridPane ແມ່ນ control panel ທີ່ສ້າງຂຶ້ນມາພິເສດສຳລັບມືອາຊີບ WordPress. ການເຊື່ອມຕໍ່ນີ້ຊ່ວຍໃຫ້ການ đồng bộ domain ອັດຕະໂນມັດ ແລະ ການຈັດການ SSL certificate ລະຫວ່າງ Ultimate Multisite ແລະ GridPane ເຮັດໄດ້ໂດຍອັດຕະໂນມັດ.

## ຄຸນສົມບັດ {#features}
- Đồng bộ domain ອັດຕະໂນມັດ
- ການຈັດການ SSL certificate
- ການຕັ້ງຄ່າ constant SUNRISE ອັດຕະໂນມັດ

## ຂໍ້ກຳນົດ {#requirements}
ທ່ານຕ້ອງກຳນົດ constant ຕໍ່ໄປນີ້ໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## ຄຳແນະນຳການຕັ້ງຄ່າ {#setup-instructions}

### 1. ດຶງຂໍ້ມູນ API Credentials ຂອງ GridPane {#1-get-your-gridpane-api-credentials}

1. ເຂົ້າສູ່ລະບົບ dashboard ຂອງ GridPane ຂອງທ່ານ
2. ໄປທີ່ "Settings" > "API"
3. ສ້າງ API key ຖ້າທ່ານຍັງບໍ່ມີ
4. ຄັດລອກ API key ຂອງທ່ານ

### 2. ດຶງ Server ID ແລະ Site ID ຂອງທ່ານ {#2-get-your-server-and-site-ids}

1. ໃນ dashboard ຂອງ GridPane, ໄປທີ່ "Servers"
2. ເລືອກ server ທີ່ WordPress multisite ຂອງທ່ານຖືກໂຮດຢູ່
3. ສັງເກດ Server ID (ຈະເຫັນໃນ URL ຫຼື ໜ້າລາຍລະອຽດ server)
4. ໄປທີ່ "Sites" ແລະ ເລືອກ WordPress site ຂອງທ່ານ
5. ສັງເກດ Site ID (ຈະເຫັນໃນ URL ຫຼື ໜ້າລາຍລະອຽດ site)

### 3. ເພີ່ມ Constants ໃນ wp-config.php {#3-add-constants-to-wp-configphp}

ເພີ່ມ constant ຕໍ່ໄປນີ້ໃສ່ໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. ເປີດການເຊື່ອມຕໍ່ (Enable the Integration) {#4-enable-the-integration}

1. ໃນ WordPress admin, ໄປທີ່ Ultimate Multisite > Settings
2. ໄປທີ່ tab "Domain Mapping"
3. ລອຍລົງມາຫາ "Host Integrations"
4. ເປີດການເຊື່ອມຕໍ່ GridPane
5. ກົດ "Save Changes"

## ມັນເຮັດວຽກແນວໃດ (How It Works) {#how-it-works}

ເມື່ອ domain ຖືກ map ໃນ Ultimate Multisite:

1. Integration нь таны доментийг танай сайтод нэмэхэд GridPane-ийн API руу хүсэлт илгээдэг.
2. GridPane SSL сертификатыг автоматаар зохион байгуулдаг.
3. Домен тохиргоо (domain mapping) устгахад, integration нь тухайн доментийг GridPane-ээс арилгана.

Integration нь таны wp-config.php файл дахь SUNRISE тогтмол утгыг автоматаар зохицуулдаг бөгөөд энэ нь домен тохиргоо зөв ажиллахын тулд шаардлагатай юм.

## SUNRISE Constant Удирдах {#sunrise-constant-management}

GridPane integration-ийн өвөрмөц онцлог бол wp-config.php файл дахь SUNRISE тогтмолыг GridPane-ийн өөрийн домен тохиргооны системтэй зөрчилдөхгүй байхын тулд автоматаар буцааж шилжүүлдэг явдал юм. Энэ нь хоёр систем асуудалгүй хамт ажиллах боломжийг олгодог.

## Асуудал Олох (Troubleshooting) {#troubleshooting}

### API Connection Асуудал {#api-connection-issues}
- Таны API key зөв байгаа эсэхийг шалгана.
- Таны сервер болон сайт ID зөв байгаа эсэхийг шалгана.
- Таны GridPane аккаунд шаардлагатай эрхүүд байгаа эсэхийг баталгаажуулна.

### SSL Сертификатын Асуудал {#ssl-certificate-issues}
- GridPane нь SSL сертификат олгоход зарим цаг хугацаа шаардах боломжтой.
- Таны доменүүд таны серверийн IP хаяг руу зөв чиглэсэн эсэхийг баталгаажуулна.
- Таны сайтын GridPane SSL тохиргоог шалгана.

### Домен Нэмэгдээгүй {#domain-not-added}
- Ultimate Multisite логуудаас ямар нэгэн алдааны мессеж байгаа эсэхийг шалгана.
- Тухайн доменүүд аль хэдийн GridPane-д нэмэгдсэн эсэхийг баталгаажуулна.
- Таны доменийн DNS бүрт зөв тохиргоо хийгдсэн эсэхийг шалгана.
