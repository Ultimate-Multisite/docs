---
title: GridPane ማዋሃድ
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ውህደት

## አጠቃላይ እይታ
GridPane ለከባድ የWordPress ባለሙያዎች የተሰራ ልዩ የWordPress ሆስቲንግ መቆጣጠሪያ ፓነል ነው። ይህ ውህደት Ultimate Multisite እና GridPane መካከል የዶሜን ሲንክንጎን (domain syncing) እና የSSL ሰርቲፊኬት አስተዳደርን በራስ-ሰር ያደርጋል።

## ባህሪያት
- በራስ-ሰር የዶሜን ሲንክንጎን
- የSSL ሰርቲፊኬት አስተዳደር
- የSUNRISE constant በራስ-ሰር መቅረጽ

## መስፈርቶች
የሚከተሉት constantዎች በ`wp-config.php` ፋይልዎ ውስጥ መገለጽ አለባቸው፦

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## የመጫን መመሪያዎች

### 1. የGridPane API መለያዎችን ማግኘት

1. ወደ GridPane dashboardዎ ይግቡ
2. ወደ "Settings" > "API" ይሂዱ
3. ቀድሞ ካላገኙ የAPI key ይፍጠሩ
4. የAPI keyዎን ይቅዱ

### 2. የሰርቨር እና የሳይት IDዎችን ማግኘት

1. በGridPane dashboardዎ ውስጥ ወደ "Servers" ይሂዱ
2. የWordPress multisiteዎ የትኛው ሰርቨር ላይ እንደተጫነ ይምረጡ
3. የServer IDን ይጻፉ (በURL ላይ ወይም በሰርቨር ዝርዝር ገጽ ላይ ይታያል)
4. ወደ "Sites" ይሂዱ እና የWordPress ሳይትዎን ይምረጡ
5. የSite IDን ይጻፉ (በURL ላይ ወይም በሳይት ዝርዝር ገጽ ላይ ይታያል)

### 3. constantዎችን ወደ wp-config.php መጨመር

የሚከተሉትን constantዎች ወደ `wp-config.php` ፋይልዎ ይጨምሩ፦

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. ውህደቱን ማብራት

1. በWordPress adminዎ ውስጥ Ultimate Multisite > Settings ይሂዱ
2. ወደ "Domain Mapping" ታብ ይጓዙ
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏጉ
4. የGridPane ውህደትን ያብሩ
5. "Save Changes" የሚለውን ይጫኑ

## እንዴት ይሰራል

አንድ ዶሜን በUltimate Multisite ሲመዘገብ (mapped):

1. ውህደቱ ዶሜኑን ወደ ሳይትዎ ለመጨመር የGridPane API ላይ ጥያቄ ይልካል።
2. GridPane የSSL ሰርቲፊኬት አቅርቦትን በራስ-ሰር ይይዛል።
3. የዶሜን መመዝገቢያ ሲሰረዝ፣ ውህደቱ ዶሜኑን ከGridPane ያጠፋዋል።

ውህደቱ በተጨማሪም ለዶሜን መመዝገቢያ በትክክል እንዲሰራ የሚያስፈልገውን የSUNRISE constant በ`wp-config.php` ፋይልዎ ውስጥ በራስ-ሰር ይይዛል።

## የSUNRISE Constant አስተዳደር

የGridPane ውህደት ልዩ ባህሪው በGridPane የራሱ የዶሜን መመዝገቢያ ስርዓት ከሚፈጠረው ግጭት ለመከላከል በ`wp-config.php` ውስጥ ያለውን የSUNRISE constant በራስ-ሰር ወደ ቀድሞ ሁኔታው (reverts) መመለስ ነው። ይህ ሁለቱም ስርዓቶች ያለ ችግር እንዲሰሩ ያረጋግጣል።

## ችግር መፍታት

### የAPI ግንኙነት ችግሮች
- የAPI keyዎ ትክክል መሆኑን ያረጋግጡ
- የሰርቨር እና የሳይት IDዎች ትክክል መሆናቸውን ያረጋግጡ
- የGridPane አካውንትዎ የሚያስፈልጉትን ፈቃዶች እንዳሉት ያረጋግጡ

### የSSL ሰርቲፊኬት ችግሮች
- GridPane የSSL ሰርቲፊኬቶችን ለመስጠት ጊዜ ሊወስድ ይችላል
- ዶሜኖዎቻችሁ ወደ የሰርቨርዎ IP አድራሻ በትክክል እየጠቆሙ መሆናቸውን ያረጋግጡ
- ለሳይትዎ የGridPane SSL ቅንብሮችን ይፈትሹ

### ዶሜን አለመጨመር
- የUltimate Multisite መዝገቦችን (logs) ለስህተት መልዕክቶች ይፈትሹ
- ዶሜኑ ቀድሞ በGridPane አለመጨመሩን ያረጋግጡ
- የዶሜንዎ DNS መዝገቦች በትክክል ተዋቅረዋል መሆናቸውን ያረጋግጡ
