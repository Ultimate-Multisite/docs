---
title: Hostinger (hPanel) ውህደት
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) ውህደት

## አጠቃላይ እይታ {#overview}

Hostinger ታዋቂ የዌብ ሆስቲንግ አገልግሎት ሰጪ ሲሆን፣ ዘመናዊ የቁጥጥር ፓነል (control panel) ስም hPanel አለው። የUltimate Multisite Hostinger ውህደት (integration) በUltimate Multisite እና በHostinger hPanel መካከል የዶሜን መመሳሰልን በራስ-ሰር ያደርጋል፤ ይህም የዶሜን ካርታዎችን (domain mappings) እና የንዑስ ዶሜኖችን (subdomains) በቀጥታ ከWordPress አድሚንዎ እንዲያስተዳድሩ ያስችላል።

## ባህሪያት {#features}

- በhPanel ውስጥ የተጨማሪ ዶሜን (addon domain) በራስ-ሰር መፍጠር
- በhPanel ውስጥ የንዑስ ዶሜን በራስ-ሰር መፍጠር (ለsubdomain multisite ጭነቶች)
- የዶሜን ካርታዎች ሲሰረዙ ዶሜን መጥፋት
- ከhPanel የዶሜን አስተዳደር API ጋር ያለችግር መገናኘት

## የሚያስፈልጉ ነገሮች {#requirements}

የHostinger ውህደትን ለመጠቀም የሚከተሉትን ያስፈልግዎታል፦

1. የhPanel መዳረሻ ያለው Hostinger አካውንት
2. ከHostinger የተገኘ የAPI 토큰 (API token)
3. በ`wp-config.php` ፋይልዎ ውስጥ የሚከተሉት ቋሚ ተለዋዋጮች (constants) መገለጽ አለባቸው፦

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

በተጨማሪም፣ የሚከተለውን መግለጽ ይችላሉ፦

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // የዲፎልት API መድረሻ
```

## የማስጫ መመሪያዎች {#setup-instructions}

### 1. የHostinger API 토큰ዎን ይፍጠሩ {#1-generate-your-hostinger-api-token}

1. ወደ Hostinger አካውንትዎ ይግቡ እና hPanelን ይድረሱ።
2. ወደ **Account Settings** → **API Tokens** ይሂዱ።
3. **Create New Token** የሚለውን ይጫኑ።
4. ለቶከንዎ መግለጫ ስም ይስጡት (ለምሳሌ፦ "Ultimate Multisite")።
5. አስፈላጊውን ፈቃድ ይምረጡ፦
   - የዶሜን አስተዳደር (Domain management)
   - የንዑስ ዶሜን አስተዳደር (Subdomain management)
6. የተፈጠረውን ቶከን ይቅዱት እና በአስተማማኝ ቦታ ያስቀምጡት።

### 2. የAccount IDዎን ያግኙ {#2-find-your-account-id}

1. በhPanel ውስጥ ወደ **Account Settings** → **Account Information** ይሂዱ።
2. የAccount IDዎ በዚህ ገጽ ላይ ይታያል።
3. ይህን ID ለቀጣዩ እርምጃ ይቅዱት እና ያስቀምጡት።

### 3. ቋሚ ተለዋዋጮችን በwp-config.php ይጨምሩ {#3-add-constants-to-wp-configphp}

የሚከተሉትን ቋሚ ተለዋዋጮች (constants) ወደ `wp-config.php` ፋይልዎ ይጨምሩ፦

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

የHostinger አካውንትዎ የተለየ API መድረሻ (endpoint) የሚጠቀም ከሆነ፣ እራስዎ ማበጀት ይችላሉ፦

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. ውህደቱን ያንቁሩ {#4-enable-the-integration}

1. በWordPress አድሚንዎ ውስጥ ወደ **Ultimate Multisite > Settings** ይሂዱ።
2. ወደ **Domain Mapping** ትር ይሂዱ።
3. እስከ **Host Integrations** ድረስ ዝቅ ይሏቸው።
4. **Hostinger (hPanel)** ውህደትን ያንቁሩ።
5. **Save Changes** የሚለውን ይጫኑ።

## እንዴት ይሰራል {#how-it-works}

### የተጨማሪ ዶሜኖች (Addon Domains) {#addon-domains}

በUltimate Multisite ዶሜን ሲመድቡ (map)፦

1. ውህደቱ ዶሜኑን እንደ ተጨማሪ ዶሜን ለመጨመር ወደ Hostinger API ጥያቄ ይልካል።
2. ዶሜኑ ወደ ዋናው ዳይሬክቶሪዎ እንዲመራ (point) ይዘጋጃል።
3. የዶሜን ካርታ ሲሰረዝ፣ ውህደቱ በhPanel ውስጥ ያለውን ተጨማሪ ዶሜን በራስ-ሰር ያስወግዳል።

### የንዑስ ዶሜኖች (Subdomains) {#subdomains}

ለsubdomain multisite ጭነቶች፣ አዲስ ድረ-ገጽ ሲፈጠር፦

1. ውህደቱ ከሙሉ ዶሜን ውስጥ የንዑስ ዶሜን ክፍሉን አውጥቶ ይወስዳል።
2. የንዑስ ዶሜኑን ለመጨመር ወደ Hostinger API ጥያቄ ይልካል።
3. የንዑስ ዶሜኑ ወደ ዋናው ዳይሬክቶሪዎ እንዲመራ ይዘጋጃል።

## አስፈላጊ ማሳሰቢያዎች {#important-notes}

- ውህደቱ ከሂሳብዎ ጋር ለመገናኘት የHostinger REST APIን ይጠቀማል።
- የAPI 토큰ዎ ለዶሜን እና ለንዑስ ዶሜን አስተዳደር አስፈላጊ ፈቃዶች ሊኖሩት ይገባል።
- ውህደቱ የDNS ውቅረትን (configuration) አያስተዳድርም፤ ዶሜኖቹ ቀድሞ ወደ Hostinger አካውንትዎ መመራታቸውን ማረጋገጥ አለብዎት።
- የAPI ጥያቄዎች በHTTPS በኩል በአስተማማኝ ሁኔታ ይላካሉ።
- የAPI 토큰ዎን ደህንነት ይጠብቁ እና በፍጹም በይፋ አያጋሩ።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### የAPI ግንኙነት ችግሮች {#api-connection-issues}

- የAPI 토큰ዎ ትክክል መሆኑን እና ጊዜው አለማለቁን ያረጋግጡ።
- የAccount IDዎ ትክክል መሆኑን ያረጋግጡ።
- የAPI 토큰ዎ ለዶሜን አስተዳደር አስፈላጊ ፈቃዶች እንዳሉት ያረጋግጡ።
- የHostinger አካውንትዎ ንቁ መሆኑን እና በጥሩ ሁኔታ ላይ መሆኑን ያረጋግጡ።

### ዶሜን አልተጨመረም {#domain-not-added}

- የUltimate Multisite መዝገቦችን (logs) ለስህተት መልዕክቶች ይፈትሹ።
- ዶሜኑ ቀድሞ ወደ Hostinger አካውንትዎ አለመጨመሩን ያረጋግጡ።
- የHostinger አካውንትዎ ለተጨማሪ ዶሜኖች ገደብ ላይ እንደደረሰ ያረጋግጡ።
- ዶሜኑ በትክክል ወደ Hostinger nameservers መመራቱን ያረጋግጡ።

### የSSL ሰርተፍኬት ችግሮች {#ssl-certificate-issues}

- ውህደቱ የSSL ሰርተፍኬት አሰጣጥን አያስተዳድርም።
- Hostinger በአጠቃላይ በAutoSSL በኩል ነጻ የSSL ሰርተፍኬቶችን ይሰጣል።
- የSSL ሰርተፍኬቶችን በቀጥታ በhPanel ውስጥ በ**SSL/TLS** ስር ማስተዳደር ይችላሉ።
- አማራጭ በሆነ መንገድ፣ ከHostinger AutoSSL ባህሪ ጋር Let's Encryptን ይጠቀሙ።

## ድጋፍ (Support) {#support}

በHostinger ውህደት ላይ ተጨማሪ እርዳታ የሚያስፈልግዎ ከሆነ፣ እባክዎ ወደሚከተሉት ይመልከቱ፦

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
