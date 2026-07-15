---
title: የቁጥጥር ፓነል ውህደትን ማሻሻል
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# የቁጥጥር ፓነልን (Control Panel) አቅም ማሳደግ

## አጠቃላይ እይታ (Overview) {#overview}
Enhance ኃይለኛ የሆስቲንግ አውቶሜሽን እና የአስተዳደር አቅም የሚያቀርብ ዘመናዊ የቁጥጥር ፓነል ነው። ይህ ውህደት (integration) Ultimate Multisite እና Enhance Control Panel መካከል የዶሜን ስም (domain) መመሳሰልን (syncing) እና የSSL ሰርተፍኬት አስተዳደርን በራስ-ሰር ያደርጋል።

**ተዛማጅ ውይይት:** ለ커뮤ኒቲ ምክሮች እና ተጨማሪ መረጃ፣ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ይመልከቱ።

## ባህሪያት (Features) {#features}
- በUltimate Multisite ውስጥ ዶሜኖች ሲመዘገቡ የዶሜን ስም በራስ-ሰር መመሳሰል
- DNS ሲፈታ የLetsEncrypt በኩል የSSL ሰርተፍኬት በራስ-ሰር መቅረጽ (provisioning)
- በsubdomain mode በሚሰሩ ኔትወርኮች ላይ የsubdomain ድጋፍ
- የመመደብ (mapping) ዝርዝሮች ሲሰረዙ የዶሜን ስም መጥፋት
- የAPI መለያዎችን ለማረጋገጥ የ연결 (Connection) ሙከራ

## መስፈርቶች (Requirements) {#requirements}

### የስርዓት መስፈርቶች (System Requirements) {#system-requirements}
- Enhance Control Panel መጫን እና መድረስ መቻል አለበት
- WordPress Multisite installation በEnhance server ላይ መስተናገድ ወይም ከእሱ ጋር መገናኘት አለበት
- Apache web server (Enhance በአሁኑ ጊዜ Apache configurationsን ይደግፋል፤ LiteSpeed Enterprise በቅናሽ ዋጋ ይገኛል)

### የAPI መዳረሻ (API Access) {#api-access}
የAPI tokens ለመፍጠር በEnhance Control Panel ውስጥ የአስተዳዳሪ (administrator) መዳረሻ ሊኖርዎት ይገባል።

## የAPI መለያዎችን ማግኘት (Getting Your API Credentials) {#getting-your-api-credentials}

### 1. የAPI Token መፍጠር {#1-create-an-api-token}

1. እንደ አስተዳዳሪ ወደ Enhance Control Panelዎ ይግቡ።
2. በ navigation menu ውስጥ **Settings** ላይ ይጫኑ።
3. ወደ **Access Tokens** ይሂዱ።
4. **Create Token** ላይ ይጫኑ።
5. ለtoken ስም መግለጫ ስም ይስጡት (ለምሳሌ፡ "Ultimate Multisite Integration")።
6. **System Administrator** ሚና (role) ይመድቡ።
7. ለየማለቂያ ቀን (expiry date):
   - token-ው በፍፁም እንዳያልቅ ባዶ ይተውት
   - ወይም ለደህንነት ዓላማዎች የተወሰነ የማብቂያ ቀን ያዘጋጁ።
8. **Create** ላይ ይጫኑ።

ከመፈጠሩ በኋላ፣ **Access Token** እና **Organization ID**ዎ ይታያሉ። **እነዚህን ወዲያውኑ ያስቀምጡ** ምክንያቱም token-ው አንድ ጊዜ ብቻ ይታያል።

### 2. የOrganization ID ማግኘት {#2-get-your-organization-id}

የOrganization ID በAccess Tokens ገጽ ላይ በ"Org ID: {your_id}" በሚል መለያ ባለው ሰማያዊ መረጃ ሳጥን ይታያል።

የOrganization ID የሚከተለው ቅርጽ ያለው UUID ነው፡ `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

የደንበኛን Organization ID የሚከተሉትን በማድረግ ማግኘት ይችላሉ፡
1. ወደ **Customers** ገጽ ይሂዱ።
2. ለሚመለከተው ደንበኛ **Manage customer** ላይ ይጫኑ።
3. በURL ላይ ይመልከቱ - የOrganization ID ከ`/customers/` በኋላ ያለው የአልፋ-numeral ፊደላት ናቸው።

### 3. የServer ID ማግኘት {#3-get-your-server-id}

የServer IDዎን (ለዶሜን ስራዎች የሚያስፈልግ) ለማግኘት፡

1. በEnhance Control Panel ውስጥ ወደ **Servers** ይሂዱ።
2. የWordPress installationዎ በሚሰራበት server ላይ ይጫኑ።
3. የServer ID (UUID format) በURL ወይም በserver details ውስጥ ይታያል።
4. አማራጭ፣ ሰርቨሮችን በAPI በመጠቀም መዘርዘር ይችላሉ፡

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

የserver ID የሚከተለው UUID ቅርጽን ይከተላል፡ `00000000-0000-0000-0000-000000000000`

### 4. የAPI URL ማግኘት {#4-get-your-api-url}

የAPI URLዎ የEnhance Control Panel URLዎ ሲሆን መጨረሻውም `/api/` ነው፡

```
https://your-enhance-panel.com/api/
```

**ጠቃሚ:** `/api/` መንገድ (path) ያስፈልጋል። የተለመዱ ስህተቶች የሚከተሉትን ያካትታሉ፡
- ያለ `/api/` ብቻ የዶሜኑን ስም መጠቀም
- ከHTTPS ይልቅ HTTP መጠቀም (ለደህንነት HTTPS ያስፈልጋል)

## ውቅረጫ (Configuration) {#configuration}

### የሚያስፈልጉ Constants {#required-constants}

የሚከተሉትን constants ወደ `wp-config.php` ፋይልዎ ይጨምሩ፡

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### በIntegration Wizard አማካኝነት Setup {#setup-via-integration-wizard}

1. በWordPress admin ውስጥ፣ ወደ **Ultimate Multisite** > **Settings** ይሂዱ።
2. ወደ **Integrations** ታብ (tab) ይሂዱ።
3. **Enhance Control Panel Integration**ን ያግኙ እና **Configuration** ላይ ይጫኑ።
4. הwizard (የመመሪያው) አሰጣጡን ይመራዎታል፡
   - **Step 1:** መግቢያ እና የባህሪ አጠቃላይ እይታ
   - **Step 2:** የAPI መለያዎችዎን ያስገቡ (Token, API URL, Server ID)
   - **Step 3:** ግንኙነትን ይፈትሹ (Test the connection)
   - **Step 4:** ይገምግሙ እና ያንቀሳቅሱ (Review and activate)

የሚከተሉትን መምረጥ ይችላሉ፡
- הwizard constants-ዎቹን በራስ-ሰር ወደ `wp-config.php` ፋይልዎ እንዲያስገቡ ማድረግ
- የconstants ትርጓሜዎችን መቅዳት እና በእጅ መጨመር

## ተጨማሪ የWordPress ውቅረጫ (Additional WordPress Configuration) {#additional-wordpress-configuration}

በ커뮤ኒቲ ግብረመልስ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) ላይ በመመርኮዝ፣ እነዚህን ተጨማሪ ቅንብሮች (settings) ሊያስፈልግዎት ይችላል፡

### .htaccess ውቅረጫ {#htaccess-configuration}

በዶሜን መመደብ (domain mapping) ላይ ችግሮች ካጋጠሙዎት፡
1. የመጀመሪያውን Enhance `.htaccess` ፋይል ይሰርዙ።
2. በstandard WordPress Multisite `.htaccess` ፋይል ይተኩት።

### የCookie Constants {#cookie-constants}

በተመደቡ ዶሜኖች ላይ ትክክለኛ የcookie አያያዝን ለማረጋገጥ እነዚህን constants ወደ `wp-config.php` ይጨምሩ፡

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## እንዴት ይሰራል (How It Works) {#how-it-works}

### ዶሜን ሲመደብ (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. ተጠቃሚ በUltimate Multisite ውስጥ የcustom domain መመደብ ያደርጋል (ወይም አዲስ site በsubdomain mode ይፈጠራል)።
2. ውህደቱ ወደ Enhance's API የPOST ጥያቄ ይልካል፡ `/servers/{server_id}/domains`
3. Enhance ዶሜኑን ወደ server configurationዎ ይጨምረዋል።
4. DNS ወደ serverዎ ሲፈታ፣ Enhance በLetsEncrypt በኩል የSSL ሰርተፍኬት በራስ-ሰር ያቀርባል።
5. ዶሜኑ በHTTPS በኩል በንቃት ይሆናል።

### ዶሜን ሲሰረዝ (When a Domain is Removed) {#when-a-domain-is-removed}

1. በUltimate Multisite ውስጥ የዶሜን መመደብ ይሰረዛል።
2. ውህደቱ የዶሜኑን ID ለማግኘት Enhanceን ይጠይቃል።
3. የDELETE ጥያቄ ወደሚልከው፡ `/servers/{server_id}/domains/{domain_id}`
4. Enhance ዶሜኑን ከserver configurationዎ ያጠፋዋል።

### DNS እና SSL ፍተሻ (DNS and SSL Checking) {#dns-and-ssl-checking}

Ultimate Multisite የተገጠመለት የDNS እና SSL ፍተሻ አለው፡
- የፍተሻ ክፍተቱን (check interval) በ**Domain Mapping Settings** ውስጥ ማዋቀር ይችላሉ (መነሻ፡ 300 ሰከንዶች/5 ደቂቃ)
- ስርዓቱ ዶሜኑን እንደ ንቁ ምልክት ከመደረጉ በፊት የDNS ስርጭትን (propagation) ያረጋግጣል።
- የSSL ሰርተፍኬት ትክክለኛነት በራስ-ሰር ይፈተሻል።
- Enhance የSSL አቅርቦትን በራስ-ሰር ስለሚይዝ፣ በእጅ የSSL ውቅረጫ አያስፈልግም።

## Setupን ማረጋገጥ (Verifying Setup) {#verifying-setup}

### ግንኙነትን መፈተሽ (Test the Connection) {#test-the-connection}

1. በIntegration Wizard ውስጥ፣ **Test Connection** ስልጣን ይጠቀሙ።
2. plugin-ው በserverዎ ላይ ያሉ ዶሜኖችን ለመዘርዘር ይሞክራል።
3. የስኬት መልዕክት ያረጋግጣል፡
   - የAPI መለያዎች ትክክል ናቸው።
   - የAPI URL ተደራሽ ነው።
   - የServer ID ትክክል ነው።
   - ፈቃዶች በትክክል ተቀምጠዋል።

### ዶሜን ከተመደበ በኋላ (After Mapping a Domain) {#after-mapping-a-domain}

1. በUltimate Multisite ውስጥ የtest domain መመደብ ያድርጉ።
2. የUltimate Multisite logs (**Ultimate Multisite** > **Logs** > **integration-enhance**) ይመልከቱ።
3. በEnhance Control Panel ውስጥ ዶሜኑ መጨመሩን ያረጋግጡ፡
   - ወደ **Servers** > **Your Server** > **Domains** ይሂዱ።
   - አዲሱ ዶሜን በዝርዝሩ መታየት አለበት።
4. DNS ከተሰራጨ በኋላ፣ SSL በራስ-ሰር መቅረጽ መፈጸሙን ያረጋግጡ።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### የAPI ግንኙነት ችግሮች (API Connection Issues) {#api-connection-issues}

**ስህተት: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` መጨረሻው `/api/` መሆኑን ያረጋግጡ።
- HTTPS እየተጠቀሙ መሆኑን፣ HTTP ሳይሆን።
- Enhance panel ከWordPress serverዎ ተደራሽ መሆኑን ያረጋግጡ።
- ግንኙነትን የሚከለክሉ የፋየርዎል ህጎች (firewall rules) መኖራቸውን ያረጋግጡ።

**ስህተት: "Enhance API Token not found"**
- `WU_ENHANCE_API_TOKEN` በ`wp-config.php` ውስጥ መገለጽ መሆኑን ያረጋግጡ።
- token-ው በEnhance ውስጥ አልተሰረዘም ወይም አልማረቀም ያረጋግጡ።
- በtoken ዋጋ ላይ የፊደል ስህተቶችን ይፈትሹ።

**ስህተት: "Server ID is not configured"**
- `WU_ENHANCE_SERVER_ID` በ`wp-config.php` ውስጥ መገለጽ መሆኑን ያረጋግጡ።
- የServer ID ትክክለኛ UUID ቅርጽ መሆኑን ያረጋግጡ።
- server-ው በEnhance panelዎ ውስጥ መኖሩን ያረጋግጡ።

### ዶሜን አለመጨመር (Domain Not Added) {#domain-not-added}

**ሎጎችን ይፈትሹ:**
1. ወደ **Ultimate Multisite** > **Logs** ይሂዱ።
2. በ**integration-enhance** ይጣfiltሩ።
3. ችግሩን የሚያመለክቱ የስህተት መልዕክቶችን ይፈልጉ።

**የተለመዱ ምክንያቶች:**
- ትክክል ያልሆነ የዶሜን ስም ቅርጽ
- ዶሜኑ ቀድሞውንም በEnhance መኖር
- በቂ የAPI ፈቃዶች (token-ው System Administrator ሚና እንዳለው ያረጋግጡ)
- የServer ID ከEnhance ውስጥ ካለው ትክክለኛ server ጋር አለመመሳሰል

### የSSL ሰርተፍኬት ችግሮች (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL አለመቅረጽ (SSL not provisioning):**
- DNS ወደ serverዎ IP address እየጠቆመ መሆኑን ያረጋግጡ።
- ዶሜኑ በትክክል መፈታቱን ያረጋግጡ፡ `nslookup yourdomain.com`
- Enhance SSL ለመቅረጽ DNS መፈታቱን ይፈልጋል።
- የSSL አቅርቦት ከDNS ስርጭት በኋላ በአጠቃላይ 5-10 ደቂቃ ይወስዳል።
- ለSSL-ተኮር ስህተቶች የEnhance Control Panel logsን ይፈትሹ።

**በEnhance ውስጥ በእጅ የSSL ችግር መፍታት:**
1. ወደ **Servers** > **Your Server** > **Domains** ይሂዱ።
2. ዶሜኑንዎን ያግኙ እና የSSL ሁኔታውን ይፈትሹ።
3. አስፈላጊ ከሆነ የSSL አቅርቦትን በእጅ ማስጀመር ይችላሉ።

### የDNS ፍተሻ ክፍተት (DNS Check Interval) {#dns-check-interval}

ዶሜኖች ወይም የSSL ሰርተፍኬቶች ለመንቀሳቀስ በጣም ረጅም ጊዜ እየወሰዱ ከሆነ፡
1. ወደ **Ultimate Multisite** > **Settings** > **Domain Mapping** ይሂዱ።
2. **DNS Check Interval** ቅንብሩን ያግኙ።
3. ከመነሻ 300 ሰከንዶች ወደ ዝቅተኛ ዋጋ (minimum: 10 ሰከንዶች) ያስተካክሉ።
4. **ማስታወሻ:** ዝቅተኛ ክፍተቶች ማለት ብዙ ጊዜ ፍተሻ ማለት ነው፣ ግን ከፍተኛ የserver ጭነትም ማለት ነው።

### የማረጋገጫ ስህተቶች (Authentication Errors) {#authentication-errors}

**HTTP 401/403 ስህተቶች:**
- የAPI token-ዎን በEnhance ውስጥ እንደገና ይፍጠሩ።
- token-ው **System Administrator** ሚና እንዳለው ያረጋግጡ።
- token-ው ካልማረቀ ያረጋግጡ።
- ትክክለኛውን Organization ID እየተጠቀሙ መሆኑን ያረጋግጡ (ምንም እንኳን በአጠቃላይ በURL ውስጥ ባይጠየቅም)።

### የሎግ ትንተና (Log Analysis) {#log-analysis}

ዝርዝር ሎግ ማድረግን ያንቁ፡
```php
// ለተሻለ 디버깅 ወደ wp-config.php ይጨምሩ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

ከዚያ በሎጎች ይፈትሹ፡
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: በEnhance admin interface ውስጥ ይገኛል።

## የAPI ማጣቀሻ (API Reference) {#api-reference}

### ማረጋገጫ (Authentication) {#authentication}
ሁሉም የAPI ጥያቄዎች Bearer token authenticationን ይጠቀማሉ፡
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### የተለመዱ Endpoints (Common Endpoints Used) {#common-endpoints-used}

**ሰርቨሮችን መዘርዘር (List Servers):**
```
GET /servers
```

**በserver ላይ ያሉ ዶሜኖችን መዘርዘር (List Domains on a Server):**
```
GET /servers/{server_id}/domains
```

**ዶሜን መጨመር (Add a Domain):**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ዶሜን መሰረዝ (Delete a Domain):**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### ሙሉ የAPI ሰነድ (Full API Documentation) {#full-api-documentation}
ሙሉ የAPI ሰነድ፡ [https://apidocs.enhance.com](https://apidocs.enhance.com)

## ምርጥ ልምዶች (Best Practices) {#best-practices}

### ደህንነት (Security) {#security}
- **የAPI tokens በversion control ውስጥ በፍፁም አይጨምሩ**
- tokens በ`wp-config.php` ውስጥ ማስቀመጥ አለባቸው ይህም ከGit መገለል አለበት።
- ትክክለኛ ፈቃዶችን ባላቸው tokens ይጠቀሙ (ሙሉ ውህደት System Administrator)
- ለproduction environments የtoken የማብቂያ ቀናት ያዘጋጁ።
- tokensን በየጊዜው ያሽከረክሩ (Rotate)።

### አፈጻጸም (Performance) {#performance}
- ከመጠን በላይ የAPI ጥሪዎችን ለማስቀረት የመነሻ DNS ፍተሻ ክፍተትን (300 ሰከንዶች) ይጠቀሙ።
- ትልቅ የዶሜን ስራዎችን ሲሰሩ የEnhance server ሀብቶችን ይከታተሉ።
- ብዙ ዶሜኖችን በአንድ ጊዜ እየመደቡ ከሆነ የዶሜን መጨመርን መከፋፈል ያስቡ።

### ክትትል (Monitoring) {#monitoring}
- የውህደት ስህተቶችን ለማግኘት የUltimate Multisite logsን በየጊዜው ይፈትሹ።
- ለተሳሳቱ የዶሜን መጨመር ክትትል ያዘጋጁ።
- የSSL ሰርተፍኬቶች በትክክል መሆኑን ያረጋግጡ።

---
**ማጠቃለያ:**
ይህ መመሪያ የWordPress/CMS ተጠቃሚዎችን የቴክኒክ እውቀት ደረጃን መሰረት በማድረግ የተዘጋጀ ሲሆን፣ የAPI ቁልፍ አጠቃቀም፣ የቅንብር ስህተቶች እና የደህንነት ስጋቶች ላይ ትኩረት አድርጓል። የትኛው ክፍል ላይ ተጨማሪ ዝርዝር መረጃ እንደሚያስፈልግ የሚገልጽ ጥያቄ መጠየቅ ይቻላል።
