---
title: WP Engine ማዋሃድ
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine ውህደት

## አጠቃላይ እይታ
WP Engine ለዎርድፕረስ ድረ-ገጾች የተሻሻለ አፈጻጸም፣ ደህንነት እና መስፋፋት የሚያቀርብ የፕሪሚየም የተስተካከለ (managed) የዎርድፕረስ ሆስቲንግ መድረክ ነው። ይህ ውህደት (integration) በUltimate Multisite እና በWP Engine መካከል የዶሜን መመሳሰልን በራስ-ሰር ያደርጋል።

## ባህሪያት
- በራስ-ሰር የዶሜን መመሳሰል
- ለብዙ ድረ-ገጽ (multisite) ተከላዎች የንዑስ ዶሜን ድጋፍ
- ከWP Engine ነባር ሥርዓቶች ጋር ያለችግር ውህደት

## መስፈርቶች
ይህ ውህደት በWP Engine ላይ እየሰሩ እንደሆነ በራስ-ሰር ይለያል እና በተገጠመው የWP Engine API ይጠቀማል። የWP Engine ፕልጋይኑ ከተጫነ እና በትክክል ከተዋቀረ ምንም ተጨማሪ ቅንብር አያስፈልግም።

ሆኖም፣ ውህደቱን በእጅዎ ማዋቀር ካለብዎ፣ ከ`wp-config.php` ፋይልዎ ውስጥ ከሚከተሉት የማናቸው የማስተካከያ ቁጥሮች (constants) አንዱን መግለጽ ይችላሉ፦

```php
define('WPE_APIKEY', 'your_api_key'); // ተመራጭ ዘዴ
// ወይስ
define('WPE_API', 'your_api_key'); // አማራጭ ዘዴ
```

## የማዋቀር መመሪያዎች

### 1. የWP Engine ፕልጋይን ማረጋገጥ

በWP Engine ላይ እየሰሩ ከሆነ፣ የWP Engine ፕልጋይኑ ቀድሞውኑ መጫን እና መነቃቃት አለበት። የሚከተሉትን ያረጋግጡ፦

1. የWP Engine ፕልጋይኑ ንቁ (active) መሆኑ
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ፋይሉ መኖሩ

### 2. ውህደቱን ማብራት

1. በWordPress አድሚንዎ ውስጥ፣ ወደ Ultimate Multisite > Settings ይሂዱ።
2. ወደ "Domain Mapping" ትር መሄድ።
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏቸው።
4. የWP Engine ውህደትን ያብሩ።
5. "Save Changes" የሚለውን ይጫኑ።

## እንዴት ይሰራል

### የዶሜን መመሳሰል (Domain Syncing)

አንድ ዶሜን በUltimate Multisite ሲመዘገብ (mapped)፦

1. ውህደቱ ዶሜኑን ወደ WP Engine ተከላዎ ለመጨመር የWP Engine APIን ይጠቀማል።
2. WP Engine የዶሜን ቅንብርን እና የSSL ሰርተፍኬት አወጣጥን ይቆጣጠራል።
3. የዶሜን መመዝገቢያ ሲሰረዝ፣ ውህደቱ ዶሜኑን ከWP Engine ያጠፋዋል።

### የንዑስ ዶሜን ድጋፍ (Subdomain Support)

ለንዑስ ዶሜን ብዙ ድረ-ገጽ ተከላዎች፦

1. አዲስ ድረ-ገጽ ሲፈጠር፣ ውህደቱ እያንዳንዱን ንዑስ ዶሜን ወደ WP Engine ይጨምረዋል።
2. WP Engine የንዑስ ዶሜን ቅንብርን ይቆጣጠራል።
3. ድረ-ገጽ ሲሰረዝ፣ ውህደቱ ንዑስ ዶሜኑን ከWP Engine ያጠፋዋል።

## አስፈላጊ ማስታወሻዎች

### Wildcard Domains
ለንዑስ ዶሜን ብዙ ድረ-ገጽ ተከላዎች፣ እያንዳንዱን በግል መጨመር ሳያስፈልግ ሁሉም ንዑስ ዶሜኖች እንዲሰሩ የዋይልድ卡ርድ ዶሜን (wildcard domain) ቅንብር እንዲጠየቁ ከWP Engine ድጋፍ ጋር መገናኘት ይመከራል።

### SSL Certificates
WP Engine በዚህ ውህደት በኩል ለተጨመሩ ሁሉም ዶሜኖች የSSL ሰርተፍኬት አወጣጥ እና እድሳት በራስ-ሰር ይቆጣጠራል። ተጨማሪ ቅንብር አያስፈልግም።

## ችግር መፍታት (Troubleshooting)

### የAPI ግንኙነት ችግሮች
- የWP Engine ፕልጋይኑ ንቁ እና በትክክል ተዋቅሯል ወይስ ያረጋግጡ።
- የAPI ቁልፉን በእጅዎ ከገለጹ፣ ትክክል መሆኑን ያረጋግጡ።
- በAPI ላይ ችግር ካጋጠመዎት የWP Engine ድጋፍን ያነጋግሩ።

### ዶሜን አልተጨመረም
- በማንኛ የስህተት መልዕክት (error messages) ላይ የUltimate Multisite መዝገቦችን (logs) ይፈትሹ።
- ዶሜኑ ቀድሞውኑ በWP Engine ላይ አለመጨመሩን ያረጋግጡ።
- የWP Engine ዕቅድዎ እየጨመሩባቸው ያሉትን የዶሜን ብዛት ይደግፋል ወይስ ያረጋግጡ።

### የንዑስ ዶሜን ችግሮች
- ንዑስ ዶሜኖች የማይሰሩ ከሆነ፣ የዋይልድ卡ርድ ዶሜን ቅንብር እንዲጠየቁ የWP Engine ድጋፍን ያነጋግሩ።
- ዋናው ዶሜን እና ንዑስ ዶሜኖች የDNS ቅንብሮችዎ በትክክል ተዋቅረዋል ወይስ ያረጋግጡ።
