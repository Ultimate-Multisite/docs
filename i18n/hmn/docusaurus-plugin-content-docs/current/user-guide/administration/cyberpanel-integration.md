---
title: CyberPanel Integration
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Khuas neeg tshawb thav tshawb hawm tshawb ua li cas. Kuv yuav tshawb txog ti kuv yuav tshawb qhia txog ti koj yuav tshawb qhia cas rau Ultimate Multisite CyberPanel integration, uas yuav tsim kom domain mapped hauv koj cov neeg chaw (network) yuav tsim kom tau hauv CyberPanel li virtual host autonoom (automatic) ( thiab txhua yam yuav tsim kom tso cai loss/tso cai tshiab), thiab muaj kev tsim SSL auto-provisioning los ntawm Let's Encrypt.

## Qhov uas nws ua tau

- Tha domain hauv Ultimate Multisite, integration yuav raug tawm CyberPanel API rau tsim virtual host rau domain ntawd.
- Tha koj tshawb qhia (mapping) domain tso cai loss/tso cai tshiab, integration yuav raug tawm API los tso cai thov virtual host uas hnyav.
- Tha auto-SSL tau, integration yuav tsim SSL certificate los ntawm Let's Encrypt txhua yam hauv kauws li thaum virtual host tau tsim.
- Tsis txhob tsim/tso cai alias `www.` lossis yog tsis tsim depending peb thiaj li cas koj ua "Auto-create www subdomain" setting hauv Domain Mapping settings.

## Cov qhov uas yuav tsum tsim (Prerequisites)

- CyberPanel instance los ntawm vajah (v2.3 lossis tshiab tshaj) uas koj WordPress server no raug tau thov tau.
- Website muaj lom hauv CyberPanel uas raug tsim root network WordPress koj yeej. Integration yuav tsim virtual host tshiab rau server no.
- CyberPanel API access tau. Authentication yog koj username thiab password ntawm CyberPanel admin.
- Cov DNS records rau cov domain mapped yuav tsum raug tau thov tau rau IP address ntawm koj server hauv peb tsis muaj kev tsim SSL lossis tso cai certificate uas zoo.

## Cov tso cai (Requirements)

Cov constant sau no yuav tsum tsim hauv koj `wp-config.php` file:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Tsis txhob tsim/tso cai:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain uaam sau domain tsim SSL hauv domain uas ua domain creation tawm
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact

## Setup Instructions

### 1. Enable the CyberPanel API

1. Log in tsua CyberPanel dashboard ua admin.
2. Tsim tsua **Security** > **SSL** thiab xav tau ti SSL active hauv CyberPanel interface (cov tsis txhob rau api calls txaus).
3. CyberPanel API yog muaj hauv `https://your-server-ip:8090/api/` default. Tsis txhob tsim cov luam tsis txhob tsim rau hais ti ua tau — nws active hauv admin users default.

### 2. Add Constants to wp-config.php

Tsim cov constant no mus rau hauv `wp-config.php` file hauv lub line `/* That's all, stop editing! */` tom:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ua tsim auto-SSL (recommended):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Enable the Integration

1. Ua hauv WordPress network admin, mus rau **Ultimate Multisite** > **Settings**.
2. Mus rau tab **Domain Mapping**.
3. Tsim mus rau **Host Integrations**.
4. Activate (enable) cov integration **CyberPanel**.
5. Click **Save Changes**.

### 4. Verify Connectivity

Use connection test uas muaj hauv settings wizard:

1. Ultimate Multisite > Settings > Domain Mapping > Host Integrations > CyberPanel-க்கு போங்க.
2. **Test Connection**-ஐ கிளிக் பண்ணுங்க.
3. ஒரு வெற்றி மெசேஜ் வரும், அது அந்த plugin CyberPanel API-க்கு ரைட் ஆகி சரியா authenticate பண்ண முடிஞ்சிருக்குன்னு சொல்லும்.

## இது எப்படி வேலை செய்யுது?

### Domain Mapping (டொமைன் மேப்பிங்)

Ultimate Multisite-ல ஒரு டொமைனை மேப் பண்ணும்போது:

1. இந்த integration உங்க CyberPanel host-க்கு `/api/createWebsite` என்ற இடத்துக்கு `POST` request அனுப்புது.
2. CyberPanel, அந்த domain-க்கு ஒரு புதிய virtual host-ஐ, நீங்க செட் பண்ணிருக்கிற package-க்கு அடியில உருவாக்குது.
3. Document root (கோப்பு சேமிக்கிற இடம்) உங்க WordPress network root directory-யை சுட்டிக்காட்டுற மாதிரி அமைக்கப்படும்.
4. டொமைன் மேப்பிங் நீக்கப்படும்போது, அந்த virtual host-ஐ சுத்தம் செய்ய integration `/api/deleteWebsite`-ஐ அழைக்கும்.

### Auto-SSL (தானியங்கி SSL)

`WU_CYBERPANEL_AUTO_SSL` என்பது `true` ஆக இருக்கும்போது:

1. virtual host உருவாக்கப்பட்ட பிறகு, இந்த integration அந்த domain-க்கு `/api/issueSSL`-ஐ அழைக்கும்.
2. CyberPanel, Let's Encrypt certificate-ஐ ACME HTTP-01 challenge பயன்படுத்தி கோரப்படும்.
3. காலாவதியாகும் முன்னாடியே CyberPanel தானாகவே அந்த certificate-ஐ புதுப்பிக்கும்.

> **முக்கியமானது:** Let's Encrypt அந்த domain-ஐ சரிபார்க்க, DNS உங்க server IP address-க்கு முழுசா பரவ (propagate) இருக்கணும். மேப்பிங் செய்த உடனே SSL issue ஆகலைன்னா, DNS propagate ஆகுற வரைக்கும் வெயிட் பண்ணுங்க, அப்புறம் CyberPanel dashboard-ல **SSL** > **Manage SSL**-ல இருந்து SSL-ஐ மறுபடியும் trigger பண்ணுங்க.

### www Subdomain (www துணை டொமைன்)

Domain Mapping அமைப்புகளில் **Auto-create www subdomain** ஆன் செய்யப்பட்டிருந்தா, இந்த integration `www.<domain>`-க்கு ஒரு virtual host alias-ஐயும் உருவாக்கும். அதுமட்டுமில்லாம, Auto-SSL ஆன் செய்யப்பட்டிருந்தால், apex மற்றும் www ரெண்டுமே உள்ள certificate-ஐ issue செய்யும்.

### Email Forwarders (மின்னஞ்சல் ஃபார்வர்டர்கள்)

Tha [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon ua thiaj li, CyberPanel yuav muaj khawv tshawb hauv email customer forwarders. Forwarders yuav luam mesai hmo (messages) tshawb tshawb tsuj domain address rau inbox ib oom uas tsis tsim mailbox zoo tam, uas hmo yuav uas li `info@customer-domain.test` lossis support@customer-domain.test chhuum.

Tha uas ua hauv forwarders rau customer:

1. Thawb hauv constants CyberPanel ib oom uas tsis muaj thiab connection test zoo.
2. Tsim email provider cua CyberPanel hauv settings ntawm Emails addon.
3. Thawb hauv domain customer yuav muaj hauv CyberPanel thaum tsis tsim forwarder.
4. Tsim forwarder test thiab hmo mesai rau nws thaum ua feature ha cov plan production.

Yog tias tsim forwarder tsis zoo, haiv rau logs activity ntawm Ultimate Multisite kom tshawb hauv cas, thiab thawb hauv CyberPanel tias domain source muaj thiab API user muaj permissions hauv email-management.

## Configuration Reference

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | Full URL rau CyberPanel cua koj tsim, loj hmo port lossis ib yam li `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | Username admin ntawm CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | Password admin ntawm CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | Package hosting cua CyberPanel uas yuav tsim rau virtual hosts tshiab |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Tsim Let's Encrypt SSL certificate hauv tshiab domain tsim sau |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | PHP version rau virtual hosts tshiab (yuav tsim hauv version uas muaj hauv CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Email contact rau kev tsim SSL certificate |

## Important Notes

CyberPanel API ໃຊ້ session-based token authentication (token-based authentication). ການເຊື່ອມຕໍ່ນີ້ຈະຈັດການເອົາ token ມາໂດຍອັດຕະໂນມັດໃນແຕ່ລະຄັ້ງທີ່ເອີ້ນຫາ API.
ບັນຊີ admin ຂອງ CyberPanel ຂອງທ່ານຕ້ອງມີສິດໃນການສ້າງ ແລະ ລຶບ website ເຂົ້າໄປ.
CyberPanel ໃຊ້ port `8090` ເປັນຄ່າເລີ່ມຕົ້ນ. ຖ້າ server ຂອງທ່ານໃຊ້ firewall, ກະລຸນາໃຫ້ແນ່ໃຈວ່າ port ນີ້ສາມາດເຂົ້າເຖິງໄດ້ຈາກ WordPress application server.
ການເຊື່ອມຕໍ່ນີ້ບໍ່ໄດ້ຈັດການ DNS records. ທ່ານຕ້ອງຊີ້ DNS domain ໄປທີ່ IP address ຂອງ server ຂອງທ່ານກ່ອນທີ່ຈະ map domain ໃນ Ultimate Multisite.
ຖ້າທ່ານໃຊ້ OpenLiteSpeed (OLS), ການ restart ແບບງຽບ (graceful restart) ຈະຖືກກະທົບໂດຍອັດຕະໂນມັດຫຼັງຈາກປ່ຽນ virtual host. ບໍ່ຈຳເປັນຕ້ອງມີການແຊກແຊງດ້ວຍຕົນເອງ.

## ການແກ້ໄຂບັນຫາ (Troubleshooting)

### API Connection Refused (ການເຊື່ອມຕໍ່ API ຖືກປະຕິເສດ)

- ກວດສອບວ່າ port `8090` ເປີດຢູ່ໃນ firewall ຂອງ server ທ່ານບໍ່.
- ຢືນຢັນວ່າຄ່າຂອງ `WU_CYBERPANEL_HOST` ມີ protocol (`https://`) ແລະ port ທີ່ຖືກຕ້ອງ.
- ກວດສອບວ່າ SSL certificate ຂອງ CyberPanel ຂອງທ່ານໃຊ້ໄດ້; certificate ທີ່ເຊັນເອງ (self-signed certificates) ອາດເຮັດໃຫ້ເກີດຂໍ້ຜິດພາດໃນການກວດສອບ TLS. ໃຫ້ຕັ້ງຄ່າ `WU_CYBERPANEL_VERIFY_SSL` ເປັນ `false` ໃນສະພາບແວດລ້ອມ network ສ່ວນຕົວທີ່ໄວ້ວາງໃຈເທົ່ານັ້ນ.

### Authentication Errors (ຂໍ້ຜິດພາດໃນການຢືນຢັນ)

- ຢືນຢັນວ່າ `WU_CYBERPANEL_USERNAME` ແລະ `WU_CYBERPANEL_PASSWORD` ຂອງທ່ານຖືກຕ້ອງໂດຍການເຂົ້າສູ່ລະບົບ CyberPanel ໂດຍກົງ.
- CyberPanel ຈະລັອກບັນຊີຫຼັງຈາກມີຄວາມພະຍາຍາມເຂົ້າສູ່ລະບົບທີ່ບໍ່ສຳເລັດຊ້ຳໆ. ກວດສອບ **Security** > **Brute Force Monitor** ໃນ CyberPanel ຖ້າມີການລັອກບັນຊີເກີດຂຶ້ນ.

### Domain Not Created (Domain ບໍ່ໄດ້ຖືກສ້າງ)

- ກວດສອບ activity log ຂອງ Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) ເພື່ອຊອກຫາຂໍ້ຄວາມ error ຂອງ API.
- ຢືນຢັນວ່າ package ທີ່ກຳນົດໄວ້ໃນ `WU_CYBERPANEL_PACKAGE` ມີຢູ່ໃນ CyberPanel (**Packages** > **List Packages**).
- ໃຫ້ແນ່ໃຈວ່າ domain ນັ້ນບໍ່ໄດ້ຖືກລົງທະບຽນເປັນ website ໃນ CyberPanel ແລ້ວ — ການສ້າງ website ຊ້ຳກັນຈະສົ່ງ error ກັບມາ.

### SSL Certificate Not Issued (ບໍ່ໄດ້ອອກໃບຢັ້ງຢືນ SSL)

- ຢືນຢັນວ່າ DNS ໄດ້ແຜ່ກະຈາຍສຳເລັດແລ້ວ: ການໃຊ້ຄໍາສັ່ງ `dig +short your-domain.com` ຄວນຈະສະແດງ IP ຂອງ server ຂອງທ່ານ.
- Let's Encrypt ມີການກຳນົດຈຳກັດອັດຕາ (rate limits). ຖ້າທ່ານໄດ້ອອກໃບຢັ້ງຢືນຫຼາຍໃບສຳລັບ domain ດຽວກັນເມື່ອບໍ່ດົນມານີ້, ໃຫ້ລໍຖ້າກ່ອນທີ່ຈະພະຍາຍາມໃໝ່.
- ກວດເບິ່ງ SSL logs ໃນ CyberPanel ພາຍໃຕ້ **Logs** > **Error Logs** ເພື່ອຂໍ້ຄວາມລະອຽດກ່ຽວກັບຄວາມຜິດພາດໃນການອອກໃບຢັ້ງຢືນ.
- ເປັນທາງເລືອກສຳຮອງ, ທ່ານສາມາດອອກ SSL ແບບເບື້ອງຕົ້ນຈາກ CyberPanel: **SSL** > **Manage SSL** > ເລືອກ domain > **Issue SSL**.

## ອ້າງອີງ (References)

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
