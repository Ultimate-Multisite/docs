---
title: cPanel ማዋሃድ
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ውህደት (Integration)

## አጠቃላይ እይታ (Overview)
cPanel ብዙ የዌብ ሆስቲንግ አገልግሎት ሰጪዎች (shared and dedicated hosting providers) የሚጠቀሙበት በጣም ታዋቂ የዌብ ሆስቲንግ ቁጥጥር ፓነል ነው። ይህ ውህደት (integration) Ultimate Multisite እና cPanel መካከል የዶሜን መመሳሰልን በራስ-ሰር ያደርጋል፤ ይህም የዶሜን አሊያሶች (domain aliases) እና ንዑስ ዶሜኖች (subdomains) ወደ cPanel አካውንትዎ በራስ-ሰር እንዲጨመሩ ያስችልዎታል።

## ባህሪያት (Features)
- በcPanel ውስጥ የaddon domain በራስ-ሰር መፍጠር
- በcPanel ውስጥ የንዑስ ዶሜን በራስ-ሰር መፍጠር (ለsubdomain multisite ጭነቶች)
- የዶሜን ማዛመል ሲሰረዝ የዶሜን መጥፋት

## መስፈርቶች (Requirements)
የሚከተሉት ቋሚ ተለዋዋጮች (constants) በ`wp-config.php` ፋይልዎ ውስጥ መገለጽ አለባቸው።

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

በተጨማሪም፣ በቅንብራቱ መሰረት የሚከተሉትን መግለጽ ይችላሉ፦

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## የማስጫ መመሪያዎች (Setup Instructions)

### 1. የcPanel መለያ መረጃዎን ያግኙ (Get Your cPanel Credentials)

1. የcPanel የተጠቃሚ ስምዎን እና የይለፍ ቃልዎን ከሆስቲንግ ሰጪዎ ያግኙ።
2. የcPanel ሆስትዎን ይወስኑ (በአብዛኛው ጊዜ `cpanel.yourdomain.com` ወይም `yourdomain.com:2083` ይሆናል።)

### 2. ቋሚ ተለዋዋጮችን ወደ wp-config.php ይጨምሩ (Add Constants to wp-config.php)

የሚከተሉትን ቋሚ ተለዋዋጮች ወደ `wp-config.php` ፋይልዎ ይጨምሩ፦

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

በቅንብራቱ መሰረት የፖርት እና የሥር ዳይሬክቶሪን ማበጀት ይችላሉ፦

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. ውህደቱን ያንቁ (Enable the Integration)

1. በWordPress አድሚንዎ ውስጥ፣ ወደ Ultimate Multisite > Settings ይሂዱ።
2. ወደ "Domain Mapping" ትር (tab) ይጓዙ።
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏቸው።
4. የcPanel ውህደትን ያንቁ (Enable)።
5. "Save Changes" የሚለውን ይጫኑ።

## እንዴት ይሰራል? (How It Works)

### Addon Domains (ተጨማሪ ዶሜኖች)

በUltimate Multisite ውስጥ አንድ ዶሜን ሲመዘገብ (mapped)፦

1. ውህደቱ ዶሜኑን እንደ addon domain ለመጨመር ወደ cPanel API ጥያቄ ይልካል።
2. ዶሜኑ ወደ ዋናው ዳይሬክቶሪዎ እንዲያመለክት (point) ይዘጋጃል።
3. የዶሜን ማዛመል ሲሰረዝ፣ ውህደቱ addon domainን ከcPanel ያጠፋዋል።

### Subdomains (ንዑስ ዶሜኖች)

ለsubdomain multisite ጭነቶች፣ አዲስ ድረ-ገጽ ሲፈጠር፦

1. ውህደቱ ከሙሉ ዶሜን ውስጥ የንዑስ ዶሜን ክፍሉን አውጥቶ ይመረምራል።
2. ንዑስ ዶሜኑን ለመጨመር ወደ cPanel API ጥያቄ ይልካል።
3. ንዑስ ዶሜኑ ወደ ዋናው ዳይሬክቶሪዎ እንዲያመለክት ይዘጋጃል።

## አስፈላጊ ማስታወሻዎች (Important Notes)

- ውህደቱ ከcPanel አካውንትዎ ጋር ለመገናኘት የcPanel's API2ን ይጠቀማል።
- የcPanel አካውንትዎ addon domains እና subdomains የመጨመር ስልጣን ሊኖረው ይገባል።
- አንዳንድ የሆስቲንግ ሰጪዎች ሊፈጥሩ የሚችሉባቸው addon domains ወይም subdomains ብዛት ሊገድቡ ይችላሉ።
- ውህደቱ የDNS ውቅረትን (configuration) አያስተዳድርም፤ ዶሜኖችን ወደ የሰርቨርዎ IP አድራሻ ማመልከት አሁንም ያስፈልግዎታል።

## ችግር መፍታት (Troubleshooting)

### የAPI ግንኙነት ችግሮች (API Connection Issues)
- የcPanel የተጠቃሚ ስም እና የይለፍ ቃል ትክክል መሆናቸውን ያረጋግጡ።
- የcPanel ሆስት ትክክል እና ተደራሽ መሆኑን ያረጋግጡ።
- የcPanel አካውንትዎ አስፈላጊውን ስልጣን እንዳለው ያረጋግጡ።
- ሆስቱን ሙሉ URL በመጠቀም ለመሞከር ይሞክሩ (ለምሳሌ፣ `https://cpanel.yourdomain.com`)።

### ዶሜን አልተጨመረም (Domain Not Added)
- የUltimate Multisite መዝገቦችን (logs) ለስህተት መልዕክቶች (error messages) ይፈትሹ።
- ዶሜኑ ቀድሞውንም በcPanel ውስጥ አለመጨመሩን ያረጋግጡ።
- የcPanel አካውንትዎ ለaddon domains ወይም subdomains ገደብ ላይ እንደደረሰ ያረጋግጡ።

### የSSL ሰርተፍኬት ችግሮች (SSL Certificate Issues)
- ውህደቱ የSSL ሰርተፍኬት አወጣጥን አያስተዳድርም።
- ለዶሜኖንዎ የSSL ሰርተፍኬት ለማውጣት የcPanel's SSL/TLS tools ወይም AutoSSL ባህሪን መጠቀም ያስፈልግዎታል።
- አማራጭ በሆነ መንገድ፣ ከcPanel's AutoSSL ጋር Let's Encryptን የመሳሰሉ አገልግሎቶችን መጠቀም ይችላሉ።
