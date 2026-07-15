---
title: ServerPilot ማዋሃድ
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# የServerPilot ውህደት

## አጠቃላይ እይታ {#overview}
ServerPilot በDigitalOcean፣ Amazon፣ Google ወይም በማንኛውም ሌላ የሰርቨር አቅራቢ ላይ WordPress እና ሌሎች PHP ድረ-ገጾችን ለማስተናገጅ የሚያገለግል የደመና አገልግሎት ነው። ይህ ውህደት Ultimate Multisite እና ServerPilot መካከል የዶሜን መመሳሰልን (domain syncing) እና የSSL ሰርቲፊኬት አስተዳደርን በራስ-ሰር ያደርጋል።

## ባህሪያት {#features}
- በራስ-ሰር የዶሜን መመሳሰል
- በLet's Encrypt አማካይነት የSSL ሰርቲፊኬት አስተዳደር
- በራስ-ሰር የSSL እድሳት

## የሚያስፈልጉ ነገሮች {#requirements}
በ`wp-config.php` ፋይልዎ ውስጥ የሚከተሉት constantዎች መገለጽ አለባቸው፦

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## የማስገቢያ መመሪያዎች {#setup-instructions}

### 1. የServerPilot API መለያ መረጃዎችን ማግኘት {#1-get-your-serverpilot-api-credentials}
1. ወደ ServerPilot dashboardዎ ይግቡ
2. ወደ "Account" > "API" ይሂዱ
3. እስካሁን ካላገኙት የAPI key አዲስ ይፍጠሩ
4. Client ID እና API Keyዎን ይቅዱ

### 2. የApp IDዎን ማግኘት {#2-get-your-app-id}
1. በServerPilot dashboardዎ ውስጥ ወደ "Apps" ይሂዱ
2. የWordPress multisiteዎ የተስተናገደበትን መተግበሪያ (app) ይምረጡ
3. የApp ID በ URL ውስጥ ይታያል፦ `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. constantዎችን ወደ wp-config.php መጨመር {#3-add-constants-to-wp-configphp}
የሚከተሉትን constantዎች ወደ `wp-config.php` ፋይልዎ ይጨምሩ፦

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. ውህደቱን ማብራት {#4-enable-the-integration}
1. በWordPress adminዎ ውስጥ ወደ Ultimate Multisite > Settings ይሂዱ
2. ወደ "Domain Mapping" ታብ ይጓዙ
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏቸው
4. የServerPilot ውህደትን ያብሩ
5. "Save Changes" የሚለውን ይጫኑ

## እንዴት ይሰራል {#how-it-works}
### የዶሜን መመሳሰል (Domain Syncing) {#domain-syncing}

በUltimate Multisite ውስጥ አንድ ዶሜን ሲመዘገብ፦

1. ውህደቱ ወቅታዊ የዶሜን ዝርዝሮችን ከServerPilot ያገኛል
2. አዲሱን ዶሜን ወደ ዝርዝሩ ይጨምራል (የwww ስሪት ካለ አብሮ)
3. የተሻሻለውን ዝርዝር በAPI በኩል ወደ ServerPilot ይልካል።
4. ServerPilot ለተግባርዎ (application) የዶሜን ዝርዝሩን ያዘምናል

### የSSL ሰርቲፊኬት አስተዳደር {#ssl-certificate-management}
ዶሜኖች ከተመሳሰሉ በኋላ፦

1. ውህደቱ በራስ-ሰር AutoSSLን ለተግባርዎ ያብራራል
2. ServerPilot የSSL ሰርቲፊኬት አሰጣጥ እና መጫንን በLet's Encrypt አማካይነት ይቆጣጠራል
3. ServerPilot የSSL ሰርቲፊኬቶችን በራስ-ሰር እድሳትም ይቆጣጠራል

## የSSL ሰርቲፊኬት ማረጋገጫ {#ssl-certificate-verification}
ServerPilot የSSL ሰርቲፊኬቶችን ለመስጠት እና ለመጫን ጊዜ ሊወስድ ስለሚችል፣ ውህደቱ የSSL ሰርቲፊኬት ማረጋገጫ ሙከራዎችን ብዛት እንዲጨምር ተዋቅሯል። በነባሪነት እስከ 5 ጊዜ ይሞክራል፣ ነገር ግን ይህንን በfilters በመጠቀም ማስተካከል ይቻላል።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### የAPI ግንኙነት ችግሮች {#api-connection-issues}
- የClient ID እና API Keyዎ ትክክል መሆናቸውን ያረጋግጡ
- የApp IDዎ ትክክል መሆኑን ያረጋግጡ
- የServerPilot accountዎ አስፈላጊውን ፈቃድ (permissions) እንዳለው ያረጋግጡ

### የSSL ሰርቲፊኬት ችግሮች {#ssl-certificate-issues}
- ServerPilot ሰርቲፊኬቶችን ከመስጠቱ በፊት ዶሜኖች ወደ ሰርቨርዎ የሚመራ ትክክለኛ DNS record ሊኖራቸው ይገባል
- የSSL ሰርቲፊኬቶች ካልተሰጡ፣ ዶሜኖቹ ወደ የሰርቨርዎ IP አድራሻ በትክክል እየጠቆሙ መሆናቸውን ያረጋግጡ
- ServerPilot ሰርቲፊኬቶችን ለመስጠት እና ለመጫን ጊዜ ሊወስድ ይችላል (በተለምዶ 5-15 ደቂቃ)

### ዶሜን አለመጨመር {#domain-not-added}
- በUltimate Multisite logs ውስጥ የत्र kesalahan መልዕክቶችን ይፈትሹ
- ዶሜኑ ቀድሞ በServerPilot ካልተጨመረ መሆኑን ያረጋግጡ
- የServerPilot planዎ እያጨመሩት ያሉትን የዶሜን ብዛት እንደሚደግፍ ያረጋግጡ

### የዶሜን ማስወገድ {#domain-removal}
- በአሁኑ ጊዜ፣ የServerPilot API 개별 ዶሜኖችን የማስወገድ መንገድ አይሰጥም።
- በUltimate Multisite ውስጥ የዶሜን መመደብ (domain mapping) ሲወገድ፣ ውህደቱ የተወገደውን ዶሜን ለማስቀረት የዶሜን ዝርዝሩን በServerPilot ያዘምናል
