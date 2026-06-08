---
title: RunCloud Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud መዋሃድ

## አጠቃላይ እይታ (Overview)
RunCloud በክላውድ ላይ የተመሰረተ የሰርቨር አስተዳደር መድረክ (cloud-based server management platform) ሲሆን፣ በዚህ አማካኝነት በራሳቸው ክላውድ ሰርቨሮች ላይ የዌብ አፕሊኬሽኖችን በቀላሉ ማስጀመር እና ማስተዳደር ይችላሉ። ይህ መዋሃድ (integration) በUltimate Multisite እና በRunCloud መካከል የዶሜይን ሲንክ (domain syncing) እና የSSL ሰርቲፊኬት አስተዳደርን በራስ-ሰር ያደርጋል።

## ባህሪያት (Features)
- በራስ-ሰር የዶሜይን ሲንክ (Automatic domain syncing)
- የSSL ሰርቲፊኬት አስተዳደር (SSL certificate management)
- ማッピングዎች ሲሰረዙ የዶሜይን መጥፋት (Domain removal when mappings are deleted)

## የሚያስፈልጉ ነገሮች (Requirements)
የሚከተሉት ቋሚዎች (constants) በ`wp-config.php` ፋይልዎ ውስጥ መገለጽ አለባቸው፦

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## የማስጫን መመሪያዎች (Setup Instructions)

### 1. የRunCloud API መለያዎችን ማግኘት (Get Your RunCloud API Credentials)

1. ወደ RunCloud dashboardዎ ይግቡ።
2. ወደ "User Profile" (በላይኛው ቀኝ ጥግ ላይ ባለው የፕሮፋይል ስዕልዎ ላይ ይጫኑ) ይሂዱ።
3. ከምናሌው ውስጥ "API" ይምረጡ።
4. እስካሁን ካላገኙት ከሆነ "Generate API Key" የሚለውን ይጫኑ።
5. የAPI Key እና የAPI Secretዎን ይቅዱ።

### 2. የሰርቨር እና የApp ID ማግኘት (Get Your Server and App IDs)

1. በRunCloud dashboardዎ ውስጥ ወደ "Servers" ይሂዱ።
2. የWordPress multisiteዎ የተስተናገደበትን ሰርቨር ይምረጡ።
3. የServer ID በURL ውስጥ ይታያል፦ `https://manage.runcloud.io/servers/{SERVER_ID}`
4. ወደ "Web Applications" ይሂዱ እና የWordPress አፕሊኬሽንዎን ይምረጡ።
5. የApp ID በURL ውስጥ ይታያል፦ `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. ቋሚዎችን (Constants) ወደ wp-config.php መጨመር

የሚከተሉትን ቋሚዎች (constants) ወደ `wp-config.php` ፋይልዎ ይጨምሩ፦

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. መዋሃዱን (Integration) ማብራት

1. በWordPress adminዎ ውስጥ ወደ Ultimate Multisite > Settings ይሂዱ።
2. ወደ "Domain Mapping" ታብ ይጓዙ።
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏቸው።
4. የRunCloud መዋሃድ (integration) ያብሩ።
5. "Save Changes" የሚለውን ይጫኑ።

## እንዴት ይሰራል (How It Works)

በUltimate Multisite ውስጥ አንድ ዶሜይን ሲመዘገብ (mapped):

1. መዋሃዱ (integration) ዶሜይንን ወደ አፕሊኬሽኑዎ ለመጨመር ወደ RunCloud's API ጥያቄ ይልካል።
2. ዶሜይኑ በተሳካ ሁኔታ ከተጨመረ፣ መዋሃዱ የSSL ሰርቲፊኬቶችን እንደገና ያስቀምጣል።
3. የዶሜይን ማッピング ሲሰረዝ፣ መዋሃዱ ዶሜይኑን ከRunCloud ያጠፋዋል።

ለsubdomain ጭነቶች፣ አዲሱ ድረ-ገጽ ወደ ኔትዎርክዎ ሲጨመር መዋሃዱ በRunCloud ውስጥ የsubdomains መፈጠርን በራስ-ሰር ይይዛል።

## ችግር ፈቺ (Troubleshooting)

### የAPI ግንኙነት ችግሮች (API Connection Issues)
- የAPI መለያዎችዎ ትክክል መሆናቸውን ያረጋግጡ።
- የሰርቨር እና የApp IDዎ ትክክል መሆናቸውን ያረጋግጡ።
- የRunCloud አካውንትዎ አስፈላጊውን ፈቃድ (permissions) እንዳለው ያረጋግጡ።

### የSSL ሰርቲፊኬት ችግሮች (SSL Certificate Issues)
- RunCloud የSSL ሰርቲፊኬቶችን ለመስጠት ጊዜ ሊወስድ ይችላል።
- ዶሜይኖችዎ በትክክል ወደ የሰርቨርዎ IP አድራሻ እየጠቆሙ መሆናቸውን ያረጋግጡ።
- ለአፕሊኬሽኑዎ የRunCloud SSL ቅንብሮችን ይፈትሹ።

### ዶሜይን ያልተጨመረ (Domain Not Added)
- ለማንኛውም የስህተት መልዕክት (error messages) የUltimate Multisite logsን ይፈትሹ።
- ዶሜይኑ ቀድሞውንም በRunCloud ውስጥ አለመጨመሩን ያረጋግጡ።
- የRunCloud ዕቅድዎ (plan) ብዙ ዶሜይኖችን እንደሚደግፍ ያረጋግጡ።
