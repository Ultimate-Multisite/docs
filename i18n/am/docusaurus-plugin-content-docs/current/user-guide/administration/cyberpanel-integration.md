---
title: CyberPanel መዋሃድ
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# የCyberPanel ውህደት {#cyberpanel-integration}

ይህ መመሪያ በUltimate Multisite የCyberPanel ውህደት እንዴት ማዋቀር እንደሚቻል ያብራራል፤ ይህም በኔትዎርክዎ ውስጥ ያሉ የዶሜን ካርታዎች በCyberPanel ውስጥ እንደ ቨርቹዋል ሆስት በራስ-ሰር እንዲጨመሩ (እና እንዲወገዱ)፣ እንዲሁም በLet's Encrypt አማካይነት አማራጭ የauto-SSL አገልግሎት እንዲሰጥ ያደርጋል።

## ምን ያደርጋል {#what-it-does}

- አንድ ዶሜን በUltimate Multisite ሲካረታ፣ ውህደቱ የዚያን ዶሜን ቨርቹዋል ሆስት ለመፍጠር የCyberPanel APIን ይጠራል።
- የዶሜን ካርታ ሲወገድ፣ ውህደቱ ተዛማጅ የቨርቹዋል ሆስትን ለማጥፋት APIን ይጠራል።
- auto-SSL ሲበራ፣ ውህደቱ ቨርቹዋል ሆስቱ ከተፈጠረ በኋላ ወዲያውኑ የLet's Encrypt ሰርተፍኬት እንዲሰጥ ያደርጋል።
- በተጨማሪም፣ በDomain Mapping settings ውስጥ ባለው "Auto-create www subdomain" ቅንብር መሰረት `www.` አሊያስን በቅደም ተከተል ይጨምራል/ይወገዳል።

## ቅድመ ሁኔታዎች {#prerequisites}

- የሚሰራ የCyberPanel instance (v2.3 ወይም ከዚያ በላይ ይመከራል) እና ከWordPress serverዎ ሊደርስበት የሚችል መሆን አለበት።
- የWordPress network rootዎን ቀድሞ የሚያገለግል የCyberPanel ውስጥ ያለ existing website ሊኖርዎት ይገባል። ውህደቱ አዳዲስ ቨርቹዋል ሆስቶችን ወደዚህ server ይያያዛል።
- የCyberPanel API መዳረሻ መብራት መሆን አለበት። ማረጋገጫው የሚጠቀመው በCyberPanel admin username እና passwordዎ ነው።
- auto-SSL ትክክለኛ ሰርተፍኬት ሊሰጥበት የሚችል ከሆነ፣ የካርታ የተደረጉ ዶሜኖች DNS recordsዎ ቀድሞ ወደ የserverዎ IP address መ 指ት አለባቸው።

## የሚያስፈልጉ ነገሮች {#requirements}

የሚከተሉት ቋሚ ተለዋዋጮች (constants) በ`wp-config.php` ፋይልዎ ውስጥ መገለጽ አለባቸው፦

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

በተጨማሪም፣ የሚከተሉትን መግለጽ ይችላሉ፦

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — የዶሜን መፍጠር በኋላ Let's Encrypt SSL እንዲሰጥ ያደርጋል
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // ለSSL ሰርተፍኬት ግንኙነት የሚያገለግል
```

## የማዋቀር መመሪያዎች {#setup-instructions}

### 1. የCyberPanel APIን ማብራት {#1-enable-the-cyberpanel-api}

1. እንደ አስተዳዳሪ ወደ CyberPanel dashboardዎ ይግቡ።
2. ወደ **Security** > **SSL** ይሂዱ እና SSL በCyberPanel interface ራሱ ንቁ መሆኑን ያረጋግጡ (ለsecure API calls አስፈላጊ ነው)።
3. የCyberPanel API በነባሪነት በ`https://your-server-ip:8090/api/` ላይ ይገኛል። ለማብራት ተጨማሪ እርምጃዎች አያስፈልጉም — ለአስተዳዳሪ ተጠቃሚዎች በነባሪነት ክፍት ነው።

### 2. ቋሚ ተለዋዋጮችን በwp-config.php ላይ መጨመር {#2-add-constants-to-wp-configphp}

የሚከተሉትን ቋሚ ተለዋዋጮች በ`wp-config.php` ፋይልዎ ውስጥ ከ`/* That's all, stop editing! */` መስመር በፊት ይጨምሩ፦

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSLን ለማብራት (ይመከር)፦

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. ውህደቱን ማብራት {#3-enable-the-integration}

1. በWordPress network adminዎ ውስጥ፣ ወደ **Ultimate Multisite** > **Settings** ይሂዱ።
2. ወደ **Domain Mapping** ታብ ይጓዙ።
3. እስከ **Host Integrations** ድረስ ዝቅ ይሏቸው።
4. የ**CyberPanel** ውህደትን ያብሩ።
5. **Save Changes** የሚለውን ይጫኑ።

### 4. ግንኙነትን ማረጋገጥ {#4-verify-connectivity}

በsettings wizard ውስጥ ባለው built-in connection test ይጠቀሙ፦

1. ወደ **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** ይሂዱ።
2. **Test Connection** የሚለውን ይጫኑ።
3. ስኬት መልዕክት (success message) የሚያረጋግጠው ፕልጊኑ ወደ CyberPanel API መድረስ እና በትክክል መታረም (authenticate) እንደሚችል ነው።

## እንዴት ይሰራል {#how-it-works}

### የዶሜን ካርታ (Domain Mapping) {#domain-mapping}

አንድ ዶሜን በUltimate Multisite ሲካረታ፦

1. ውህደቱ ወደ `/api/createWebsite` በCyberPanel hostዎ ላይ የ`POST` ጥያቄ ይልካል።
2. CyberPanel ለዶሜኑ በቅንብሩ ውስጥ ባለው package ስር አዲስ ቨርቹዋል ሆስት ይፈጥራል።
3. የዶክመንት ሥር (document root) ወደ የWordPress network root directoryዎ እንዲጠቁም ተደርጓል።
4. የዶሜን ካርታ ሲወገድ፣ ውህደቱ የቨርቹዋል ሆስቱን ለማጽዳት `/api/deleteWebsite`ን ይጠራል።

### auto-SSL {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL` እውነት (true) ከሆነ፦

1. ቨርቹዋል ሆስቱ ከተፈጠረ በኋላ፣ ውህደቱ ለዶሜኑ `/api/issueSSL`ን ይጠራል።
2. CyberPanel menggunakan ACME HTTP-01 challenge በመጠቀም የLet's Encrypt ሰርተፍኬት ይጠይቃል።
3. ሰርተፍኬቱ ያለ ጊዜው በCyberPanel በራስ-ሰር ይታደሳል።

> **ጠቃሚ ማሳሰቢያ:** Let's Encrypt ዶሜኑን ማረጋገጥ (validate) ከቻለ በፊት DNS ሙሉ በሙሉ ወደ የserverዎ IP address መሰራጨት አለበት (fully propagated)። ካርታ ከተደረገ በኋላ ወዲያውኑ የSSL መስጠት ካልተሳካ፣ ለDNS ስርጭት ይጠብቁ እና በCyberPanel dashboard ውስጥ በ**SSL** > **Manage SSL** ስር SSLን እንደገና ይጀምሩ።

### www Subdomain {#www-subdomain}

በDomain Mapping settingsዎ ውስጥ **Auto-create www subdomain** ከተበራረገ፣ ውህደቱ ለ`www.<domain>` ቨርቹዋል ሆስት አሊያስ ይፈጥራል፣ እና auto-SSL በርቶ ከሆነ፣ አፖክስ (apex) እና www ሁለቱንም ስሪቶች የሚሸፍን ሰርተፍኬት ይሰጣል።

### የኢሜይል አቅጣጫ ሰጪዎች (Email Forwarders) {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon ሲንቀሳቀስ፣ CyberPanel ደንበኛ የኢሜይል አቅጣጫ ሰጪዎችን (email forwarders) መስጠት ይችላል። አቅጣጫ ሰጪዎች መልዕክቶችን ሙሉ የሜይል ሳጥን ሳይፈጥሩ ከአንድ የዶሜን አድራሻ ወደ ሌላ የኢንቦክስ ይመራሉ። ይህ ለ`info@customer-domain.test` ወይም `support@customer-domain.test` ባሉ አሊያስዎች ጠቃሚ ነው።

ለደንበኞች አቅጣጫ ሰጪዎችን ከመስጠትዎ በፊት፦

1. ከላይ የተጠቀሱት የCyberPanel constants ተዋቅረዋል እና የግንኙነት ምርመራው አልፏል ማረጋገጥ።
2. በEmails addon settings ውስጥ የCyberPanel email providerን ያብሩ።
3. አቅጣጫ ሰጪውን ከመፍጠርዎ በፊት የደንበኛው ዶሜን በCyberPanel ውስጥ መኖሩን ያረጋግጡ።
4. በproduction plans ላይ ከመቅረብዎ በፊት የሙከራ አቅጣጫ ሰጪ ይፍጠሩ እና መልዕክት ይልኩልበት።

የአቅጣጫ ሰጪ መፍጠር ካልተሳካ፣ በመጀመሪያ የUltimate Multisite activity logsን ይፈትሹ፣ ከዚያም በCyberPanel ውስጥ የምንጩ ዶሜን መኖሩን እና የAPI ተጠቃሚው የኢሜይል አስተዳደር ስልጣን እንዳለው ያረጋግጡ።

## የቅንብር ማጣቀሻ (Configuration Reference) {#configuration-reference}

| Constant | አስፈላጊ ነው? | Default | መግለጫ |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | አዎ | — | ወደ CyberPanel instanceዎ ሙሉ URL፣ ወደ port ተጨምሮ፣ ለምሳሌ። `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | አዎ | — | የCyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | አዎ | — | የCyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | አዎ | `Default` | ለአዳዲስ ቨርቹዋል ሆስቶች የሚመደብ የCyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | አይ | `true` | የዶሜን መፍጠር በኋላ የLet's Encrypt SSL ሰርተፍኬት እንዲሰጥ ያደርጋል |
| `WU_CYBERPANEL_PHP_VERSION` | አይ | `PHP 8.2` | ለአዳዲስ ቨርቹዋል ሆስቶች የPHP version (በCyberPanel ውስጥ በተጫነው version መመሳሰል አለበት) |
| `WU_CYBERPANEL_EMAIL` | አይ | — | ለSSL ሰርተፍኬት ምዝገባ የሚያገለግል የእውቂያ ኢሜይል |

## አስፈላጊ ማሳሰቢያዎች {#important-notes}

- የCyberPanel API የsession-based token authenticationን ይጠቀማል። ውህደቱ በየAPI ጥሪው የtoken አግኝተኝነትን በራስ-ሰር ይይዛል።
- የCyberPanel admin accountዎ ድረ-ገጾችን ለመፍጠር እና ለማጥፋት ስልጣን ሊኖረው ይገባል።
- CyberPanel በነባሪነት በport `8090` ላይ ይሰራል። የserverዎ ፋየርዎል ከተጠቀመ፣ ይህ port ከWordPress application server ሊደርስበት መሆኑን ያረጋግጡ።
- ውህደቱ የDNS recordsን አያስተዳድርም። በUltimate Multisite ውስጥ ዶሜኑን ካርታ ከማድረግዎ በፊት የዶሜን DNS ወደ የserverዎ IP address መ 指ት አለበት።
- OpenLiteSpeed (OLS) የሚጠቀሙ ከሆነ፣ ከቨርቹዋል ሆስት ለውጦች በኋላ የgraceful restart በራስ-ሰር ይከሰታል። በእጅ ጣልቃ መግባት አያስፈልግም።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- የserverዎ ፋየርዎል በport `8090` ክፍት መሆኑን ያረጋግጡ።
- የ`WU_CYBERPANEL_HOST` ዋጋ ትክክለኛውን protocol (`https://`) እና port ይይዘዋል ማረጋገጥ።
- የCyberPanel SSL ሰርተፍኬትዎ ትክክለኛ መሆኑን ያረጋግጡ፤ self-signed certificates የTLS verification failures ሊያስከትሉ ይችላሉ። `WU_CYBERPANEL_VERIFY_SSL`ን ወደ `false` ማስቀመጥ የሚገባው በታመኑ private network environments ብቻ ነው።

### Authentication Errors {#authentication-errors}

- የ`WU_CYBERPANEL_USERNAME` እና `WU_CYBERPANEL_PASSWORD` ትክክለኛ መሆናቸውን በCyberPanel ውስጥ በቀጥታ በመግባት ያረጋግጡ።
- CyberPanel በተደጋጋሚ የውድቀት የመግቢያ ሙከራዎች በኋላ አካውንቶችን ይዘጋል። መቆለፊያዎች ከተከሰቱ በCyberPanel ውስጥ **Security** > **Brute Force Monitor** ላይ ይፈትሹ።

### Domain Not Created {#domain-not-created}

- የUltimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) ውስጥ የAPI error messages ይፈትሹ።
- በ`WU_CYBERPANEL_PACKAGE` ውስጥ የተገለጸው package በCyberPanel ውስጥ መኖሩን ያረጋግጡ (**Packages** > **List Packages** )።
- ዶሜኑ ቀድሞ በCyberPanel ውስጥ እንደ website መመዝገቡን አረጋግጡ — የduplicate website መፍጠር ስህተት ይመልሳል።

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- DNS ሙሉ በሙሉ ስርጭት እንደተደረገ ያረጋግጡ: `dig +short your-domain.com` የserverዎ IP መመለስ አለበት።
- Let's Encrypt የrate limits ያስቀምጣል። በአንድ ዶሜን ላይ ብዙ ሰርተፍኬቶችን በቅርቡ ከሰጡ፣ ከመሞከርዎ በፊት ይጠብቁ።
- የሰርተፍኬት መስጠት ስህተቶች ዝርዝር ለማየት በ**Logs** > **Error Logs** ስር የCyberPanel SSL logsን ይፈትሹ።
- እንደ አማራጭ፣ SSLን በCyberPanel በራስ-ሰር መስጠት ይችላሉ፦ **SSL** > **Manage SSL** > ዶሜኑን ይምረጡ > **Issue SSL**።

## ማጣቀሻዎች (References) {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
