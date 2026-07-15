---
title: Kev txawv Control Panel integration zoo siab tsis txhob ua.
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# ປັບປຸງການເຊື່ອມຕໍ່ Control Panel

## ພາບລວມ {#overview}
Enhance ເປັນ control panel ແບບທັນສະໄໝທີ່ໃຫ້ຄວາມສາມາດໃນການເຮັດວຽກອັດຕະໂນມັດ ແລະ ການຈັດການ hosting ທີ່ຊົງພະລັງ. ການເຊື່ອມຕໍ່ນີ້ຈະເຮັດໃຫ້ການ đồng bộ domain ອັດຕະໂນມັດ ແລະ ການຈັດການ SSL certificate ລະຫວ່າງ Ultimate Multisite ແລະ Enhance Control Panel ເຮັດໄດ້ງ່າຍຂຶ້ນ.

**ການສົນທະນາທີ່ກ່ຽວຂ້ອງ:** ເບິ່ງ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ເພື່ອເບິ່ງຄໍາແນະນໍາຂອງຊຸມຊົນ ແລະ ຂໍ້ມູນເພີ່ມເຕີມ.

## ຄຸນສົມບັດ {#features}
- domain syncing ອັດຕະໂນມັດ ເມື່ອທ່ານ map domain ໃນ Ultimate Multisite ແລ້ວ
- ການຈັດຫາ SSL certificate ອັດຕະໂນມັດຜ່ານ LetsEncrypt ເມື່ອ DNS resolve ແລ້ວ
- ຮອງຮັບ subdomain ສຳລັບ network ທີ່ເຮັດວຽກໃນ mode subdomain
- ລຶບ domain ອອກເມື່ອມີການ delete mapping
- ທົດສອບການເຊື່ອມຕໍ່ເພື່ອຢືນຢັນ API credentials

## ຂໍ້ກຳນົດ {#requirements}

### ຂໍ້ກຳນົດຂອງລະບົບ {#system-requirements}
- Enhance Control Panel ຕ້ອງໄດ້ຕິດຕັ້ງ ແລະ ເຂົ້າເຖິງໄດ້
- ການຕິດຕັ້ງ WordPress Multisite ຕ້ອງຖືກ host ຫຼື ເຊື່ອມຕໍ່ກັບ server ຂອງ Enhance
- Apache web server (Enhance ຮອງຮັບການຕັ້ງຄ່າ Apache; LiteSpeed Enterprise ມີໃຫ້ໃນລາຄາທີ່ຫຼຸດລົງ)

### ການເຂົ້າເຖິງ API {#api-access}
ທ່ານຕ້ອງມີສິດເປັນ administrator ໃນ Enhance Control Panel ເພື່ອສ້າງ API tokens.

## ການໄດ້ມາເຊິ່ງ API Credentials ຂອງທ່ານ {#getting-your-api-credentials}

### 1. ສ້າງ API Token {#1-create-an-api-token}

1. ລັອກເຂົ້າສູ່ລະບົບ Enhance Control Panel ຂອງທ່ານໃນຖານະ administrator
2. ກົດທີ່ **Settings** ໃນເມນູການນຳທາງ (navigation menu)
3. ເຂົ້າໄປທີ່ **Access Tokens**
4. ກົດ **Create Token**
5. ໃຫ້ຊື່ token ທີ່ອະທິບາຍໄດ້ (ເຊັ່ນ: "Ultimate Multisite Integration")
6. ມອບໝາຍຮູບແບບ **System Administrator**
7. ສຳລັບວັນໝົດອາຍຸ:
   - ປ່ອຍຫວ່າງໄວ້ຖ້າທ່ານຕ້ອງການໃຫ້ token ນີ້ບໍ່ມີວັນໝົດອາຍຸເລີຍ
   - ຫຼື ກຳນົດວັນໝົດອາຍຸສະເພາະເພື່ອຄວາມປອດໄພ

8. ກົດ **Create**

ຫຼັງຈາກສ້າງແລ້ວ, **Access Token** ແລະ **Organization ID** ຂອງເຈົ້າຈະສະແດງອອກມາ. **ໃຫ້ບັນທຶກສິ່ງເຫຼົ່ານີ້ໄວ້ທັນທີ** ເພາະວ່າ token ນັ້ນຈະສະແດງພຽງເທື່ອດຽວ.

### 2. ຮັບ Organization ID ຂອງເຈົ້າ {#2-get-your-organization-id}

Organization ID ຈະສະແດງຢູ່ໃນໜ້າ Access Tokens ໃນກ່ອງຂໍ້ມູນສີຟ້າທີ່ມີປ້າຍຊື່ວ່າ "Org ID: {your_id}".

Organization ID ແມ່ນ UUID (Unique Identifier) ເຊິ່ງມີຮູບແບບຄື: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

ເຈົ້າກໍສາມາດຊອກຫາ Organization ID ຂອງລູກຄ້າໄດ້ໂດຍ:
1. ໄປທີ່ໜ້າ **Customers** (ລູກຄ້າ)
2. ກົດ **Manage customer** (ຈັດການລູກຄ້າ) ສຳລັບລູກຄ້າທີ່ກ່ຽວຂ້ອງ
3. ເບິ່ງ URL - Organization ID ແມ່ນຕົວອັກສອນທີ່ມີຕົວເລກຫຼັງຈາກ `/customers/`

### 3. ຮັບ Server ID ຂອງເຈົ້າ {#3-get-your-server-id}

ເພື່ອຊອກຫາ Server ID (ທີ່ຈຳເປັນສຳລັບການເຮັດວຽກກັບ domain):

1. ໃນ Enhance Control Panel, ໄປທີ່ **Servers**
2. ກົດໃສ່ server ທີ່ WordPress ຕິດຕັ້ງຢູ່
3. Server ID (ຮູບແບບ UUID) ຈະເຫັນໄດ້ໃນ URL ຫຼື ລາຍລະອຽດຂອງ server
4. ອີກທາງເລືອກໜຶ່ງ, ເຈົ້າສາມາດໃຊ້ API ເພື່ອລາຍຊື່ server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID ຈະມີຮູບແບບຄື: `00000000-0000-0000-0000-000000000000`

### 4. ຮັບ API URL ຂອງເຈົ້າ {#4-get-your-api-url}

API URL ຂອງເຈົ້າແມ່ນ URL ຂອງ Enhance Control Panel ຂອງເຈົ້າພ້ອມກັບເພີ່ມ `/api/` ນັ້ນເຂົ້າໄປ:

```
https://your-enhance-panel.com/api/
```

**ສິ່ງສຳຄັນ:** ເທິງເສັ້ນທາງ (path) `/api/` ແມ່ນຈຳເປັນ. ຂໍ້ຜິດພ່າມັກເກົ່າໆປະກອບມີ:
- ການໃຊ້ແຕ່ domain ໂດຍບໍ່ມີ `/api/`
- ການໃຊ້ HTTP ແທນ HTTPS (HTTPS ຈຳເປັນເພື່ອຄວາມປອດໄພ)

## Configuration (ການຕັ້ງຄ່າ) {#configuration}

### Required Constants (ຄ່າທີ່ຕ້ອງມີ) {#required-constants}

ເພີ່ມ constant (ຄ່າថេរ) ຕໍ່ໄປນີ້ເຂົ້າໃນໄຟລ໌ `wp-config.php` ຂອງເຈົ້າ:

// ປັບປຸງການເຊື່ອມຕໍ່ Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### ຕັ້ງຄ່າຜ່ານ Integration Wizard (ຜູ້ຊ່ວຍຕັ້ງຄ່າ) {#setup-via-integration-wizard}

1. ໃນ WordPress admin, ໄປທີ່ **Ultimate Multisite** > **Settings**
2. ໄປທີ່ tab **Integrations** (ການເຊື່ອມຕໍ່)
3. ຊອກຫາ **Enhance Control Panel Integration** ແລ້ວចុច **Configuration** (ຕັ້ງຄ່າ)
4. Wizard ຈະພາເຈົ້າຜ່ານຂັ້ນຕອນຕ່າງໆ:
   - **Step 1:** ການແນະນຳ ແລະ ສະຫຼຸບຟີເຈີ (Feature overview)
   - **Step 2:** ໃສ່ຂໍ້ມູນ API ຂອງເຈົ້າ (Token, API URL, Server ID)
   - **Step 3:** ທົດສອບການເຊື່ອມຕໍ່ (Test the connection)
   - **Step 4:** ກວດສອບ ແລະ ເປີດໃຊ້ງານ (Review and activate)

ເຈົ້າສາມາດເລືອກໄດ້ວ່າ:
- ໃຫ້ wizard ໃສ່ constant ຕ່າງໆເຂົ້າໃນໄຟລ໌ `wp-config.php` ຂອງເຈົ້າໂດຍອັດຕະໂນມັດ
- ຄັດລອກຄ່າ constant ເພື່ອເພີ່ມມັນດ້ວຍຕົນເອງ

## ການຕັ້ງຄ່າ WordPress ເພີ່ມເຕີມ {#additional-wordpress-configuration}

ອີງຕາມຄວາມຄິດເຫັນຈາກຊຸມຊົນ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), ເຈົ້າອາດຈະຕ້ອງຕັ້ງຄ່າການຕັ້ງຄ່າເພີ່ມເຕີມເຫຼົ່ານີ້:

### ການຕັ້ງຄ່າ .htaccess {#htaccess-configuration}

ຖ້າເຈົ້າພົບບັນຫາໃນການแมપ domain (domain mapping):
1. ລຶບໄຟລ໌ Enhance `.htaccess` ຕົ້ນສະບັບອອກ
2. ແທນມັນດ້ວຍໄຟລ໌ WordPress Multisite `.htaccess` ມາດຕະຖານ

### Cookie Constants {#cookie-constants}

ເພີ່ມ constant ເຫຼົ່ານີ້ເຂົ້າໃນ `wp-config.php` ເພື່ອໃຫ້ແນ່ໃຈວ່າການຈັດການ cookie ເປັນໄປຢ່າງຖືກຕ້ອງໃນ domain ທີ່แมપໄວ້:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ມັນເຮັດວຽກແນວໃດ {#how-it-works}

### ເມື່ອມີ Domain ຖືກแมપ (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. ຜູ້ໃຊ້ເຮັດການ map custom domain ຢູ່ໃນ Ultimate Multisite (ຫຼື ສ້າງໄຊທ໌ໃໝ່ໃນ subdomain mode)
2. ການເຊື່ອມຕໍ່ (integration) ສົ່ງ POST request ໄປທີ່ API ຂອງ Enhance: `/servers/{server_id}/domains`
3. Enhance ເພີ່ມ domain ນັ້ນເຂົ້າໃນການຕັ້ງຄ່າ server ຂອງທ່ານ
4. ເມື່ອ DNS ແລ່ນໄປຫາ server ຂອງທ່ານ, Enhance ຈະສ້າງ SSL certificate ໃຫ້ໂດຍອັດຕະໂນມັດຜ່ານ LetsEncrypt
5. Domain ນັ້ນກາຍເປັນ active ດ້ວຍ HTTPS

### ເວລາທີ່ເອົາ Domain ອອກ {#when-a-domain-is-removed}

1. ລຶບການ map domain ໃນ Ultimate Multisite
2. ການເຊື່ອມຕໍ່ (integration) ສອບຖາມ Enhance ເພື່ອຊອກຫາ ID ຂອງ domain ນັ້ນ
3. ສົ່ງ DELETE request ໄປທີ່: `/servers/{server_id}/domains/{domain_id}`
4. Enhance ຈະເອົາ domain ອອກຈາກການຕັ້ງຄ່າ server ຂອງທ່ານ

### ການກວດສອບ DNS ແລະ SSL {#dns-and-ssl-checking}

Ultimate Multisite ມີການກວດສອບ DNS ແລະ SSL ໃນຕົວ:
- ເຈົ້າສາມາດຕັ້ງຄ່າໄລຍະເວລາໃນການກວດສອບໄດ້ໃນ **Domain Mapping Settings** (ຄ່າເລີ່ມຕົ້ນ: 300 seconds/5 ນາທີ)
- ລະບົບຈະກວດສອບການແຜ່ກະຈາຍ DNS ກ່ອນທີ່ຈະໝາຍ domain ນັ້ນວ່າ active
- ການໃຊ້ງານ SSL certificate ຖືກກວດສອບໂດຍອັດຕະໂນມັດ
- Enhance ຈັດການ provisioning SSL ອັດຕະໂນມັດ, ດັ່ງນັ້ນບໍ່ຈໍາເປັນຕ້ອງຕັ້ງຄ່າ SSL ແບບເອງ

## ການຢືນຢັນການຕັ້ງຄ່າ (Verifying Setup) {#verifying-setup}

### ທົດສອບການເຊື່ອມຕໍ່ (Test the Connection) {#test-the-connection}

1. ໃນ Integration Wizard, ໃຊ້ຂັ້ນຕອນ **Test Connection**
2. Plugin ຈະພະຍາຍາມລາຍຊື່ domain ເທິງ server ຂອງເຈົ້າ
3. ຂໍ້ຄວາມສຳເລັດຈະຢືນຢັນວ່າ:
   - API credentials ແມ່ນຖືກຕ້ອງ
   - API URL ສາມາດເຂົ້າເຖິງໄດ້
   - Server ID ມີຜົນໃຊ້
   - ສິດທິ (Permissions) ຖືກຕັ້ງຄ່າຢ່າງເໝາະສົມ

### ຫຼັງຈາກ map domain ແລ້ວ {#after-mapping-a-domain}

1. Map test domain ໃນ Ultimate Multisite
2. ກວດສອບ logs ຂອງ Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. ເພື່ອຢືນຢັນໃນ Enhance Control Panel ວ່າ domain ນັ້ນຖືກເພີ່ມແລ້ວ:
   - ໄປທີ່ **Servers** > **Your Server** > **Domains**
   - Domain ໃໝ່ຄວນຈະປາກົດຢູ່ໃນ list
4. ເມື່ອ DNS ແຜ່ກະຈາຍແລ້ວ, ກວດສອບວ່າ SSL ຖືກ provision ອັດຕະໂນມັດແລ້ວ

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}

**Error: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` 에는 끝에 `/api/` 가 포함되어 있는지 확인해 보세요.
- HTTP가 아니라 HTTPS를 사용하고 있는지 확인하세요.
- Enhance 패널이 당신의 WordPress 서버에서 접속 가능한지 확인하세요.
- 연결을 막는 방화벽 규칙이 없는지 확인하세요.

**Error: "Enhance API Token not found"**
- `wp-config.php` 파일 안에 `WU_ENHANCE_API_TOKEN` 이 정의되어 있는지 확인하세요.
- Enhance에서 토큰이 삭제되거나 만료되지 않았는지 확인하세요.
- 토큰 값에 오타가 없는지 확인해 보세요.

**Error: "Server ID is not configured"**
- `wp-config.php` 파일 안에 `WU_ENHANCE_SERVER_ID` 가 정의되어 있는지 확인하세요.
- Server ID 가 유효한 UUID 형식인지 확인하세요.
- Enhance 패널에서 해당 서버가 존재하는지 확인해 보세요.

### Domain Not Added (Domain Loj) {#domain-not-added}

**Logs kiểm tra:**
1. **Ultimate Multisite** > **Logs** 로 가세요.
2. **integration-enhance** 로 필터링하세요.
3. 문제를 나타내는 에러 메시지가 있는지 찾아보세요.

**Thov nrog zoo:**
- Domain name format sai (domain hmoj)
- Enhance ထဲမှာ domain erna tsis muaj
- API permissions tsis thov (token hmoj System Administrator role muaj)
- Server ID twb server actual twb Enhance twb muaj

### SSL Certificate Issues {#ssl-certificate-issues}

**SSL tsis provision:**
- DNS twb server IP address twb pointing muaj muaj (pointing muaj) 확인하세요.
- Domain twb thov muaj: `nslookup yourdomain.com` 로 resolve muaj muaj (resolve muaj) 확인하세요.
- Enhance twb SSL provision muaj DNS twb resolve muaj muaj (resolve muaj) muajmauj.
- SSL provision muaj DNS propagation twb 5-10 minutes thov muaj.
- SSL-specific errors twb Enhance Control Panel logs twb check하세요.

**Manual SSL troubleshooting in Enhance:**
1. **Servers** > **Your Server** > **Domains** 로 가세요.
2. 당신의 domain twb find muaj, SSL status twb check하세요.
3. 필요하면 SSL provision twb manually trigger muaj.

### DNS Check Interval {#dns-check-interval}

ຖ້າ domain (website address) ຫຼື SSL certificate  activations ດຶງເວລາຫຼາຍເກີນໄປ:
1. ໄປທີ່ **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. ຊອກຫາການຕັ້ງຄ່າ **DNS Check Interval**
3. ປ່ຽນຈາກຄ່າເລີ່ມຕົ້ນ 300 seconds ເປັນຄ່າທີ່ຕໍ່າກວ່າ (ຂັ້ນຕ່ຳ: 10 seconds)
4. **ໝາຍເຫດ:** ການຕັ້ງຄ່າ interval ທີ່ຕໍ່າກວ່າໝາຍຄວາມວ່າລະບົບຈະກວດສອບເລື້ອຍໆ ແຕ່ມັນຈະເຮັດໃຫ້ server ເຮັດວຽກໜັກຂຶ້ນ

### ຂໍ້ຜິດພາດໃນການຢືນຢັນ (Authentication Errors) {#authentication-errors}

**HTTP 401/403 errors:**
- ສ້າງ API token ໃໝ່ໃນ Enhance
- ກວດສອບວ່າ token ນັ້ນມີບົດບາດ (**System Administrator**) ແລ້ວບໍ່
- ກວດເບິ່ງວ່າ token ນັ້ນຍັງບໍ່ໝົດອາຍຸ
- ໃຫ້ແນ່ໃຈວ່າເຈົ້າໃຊ້ Organization ID ທີ່ຖືກຕ້ອງ (ແຕ່ໂດຍທົ່ວໄປມັນບໍ່ຈຳເປັນໃນ URL)

### ການວິເຄາະ Log {#log-analysis}

ເປີດການ logging ລາຍລະອຽດ:
```php
// ເພີ່ມໃສ່ wp-config.php ເພື່ອ Debug ໃຫ້ດີຂຶ້ນ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

ຈາກນັ້ນກວດເບິ່ງ log ຢູ່:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: ສາມາດພົບໄດ້ໃນ admin interface ຂອງ Enhance

## API Reference (ຂໍ້ມູນອ້າງອີງ API) {#api-reference}

### ການຢືນຢັນ (Authentication) {#authentication}
ການຮ້ອງຂໍ API ທັງໝົດໃຊ້ Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints ທີ່ໃຊ້ທົ່ວໄປ {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Add a Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### API Documentation ຢ່າງເຕັມທີ່ {#full-api-documentation}
API documentation ຄົບຖ້ວນ: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices (ວິທີການເຮັດວຽກທີ່ດີ) {#best-practices}

### Amj (Security) {#security}
- **Tsis txhob kom commit API tokens rau version control**
- Tsis txhob kom teiv token ha `wp-config.php` uws yuav tsis tso rau Git
- Siv tokens uas muaj feem chawm (System Administrator) rau integration zoo tshaj plaws
- Teiv duj duj (expiry dates) rau production environments
- Teiv token rau hauv duj duj

### Performance {#performance}
- Siv DNS check interval default (300 seconds) kom tsis muaj API calls u laem
- Tso siab server resources ntawm Enhance tha ua domain operations u laem
- Tso siab txog teb duj domain yuav tsum tsis txhob ua hauv ib lub sijhawm rau hauv duj domain no u laem

### Monitoring {#monitoring}
- Siv Ultimate Multisite logs kom tsis txhob txhob rau integration errors
- Teiv monitoring rau failed domain additions
- Tso siab SSL certificates yuav muaj zoo heev
- Tso siab txog server capacity thiab domain limits ntawm Enhance

## Additional Resources (Tswv Qhia Zoo) {#additional-resources}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** Tso siab wiki page "How to Configure Domain Mapping v2"

## Support (Tsuaj Qhia Zoo) {#support}

Yog koj muaj teeb meem:
1. Siv Troubleshooting section uas tsis txhob kom tsis txhob rau ua ib lub sijhawm
2. Tso siab Ultimate Multisite logs
3. Raiv rau [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Liên lạc rau Enhance support rau teeb meem ntawm panel
5. Ua discussion tshiab uas muaj detailed error logs rau kev tuaj yeem ntawm community

## Notes (Tswv Qhia Zoo) {#notes}

- ዚ integration ዚ  hany handle domain aliases loj; Enhance ዚ SSL automatically manage.
- ዚ integration support custom domain mappings thiab subdomain-based sites ambos.
- Automatic www subdomain creation yuav muaj konfigurasi ha Domain Mapping settings.
- Enhance currently support Apache configurations (LiteSpeed Enterprise available).
- Domain removal from Ultimate Multisite yuav txhob domain thov Enhace, tab sis may not delete SSL certificates immediately.
