---
title: Cloudways Integration
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## አጠቃላይ እይታ (Overview) {#overview}
Cloudways በDigitalOcean፣ AWS፣ Google Cloud እና ሌሎችንም የመሳሰሉ የተለያዩ የክላውድ ሰሪዎችን (cloud providers) ላይ WordPress ድረ-ገጾችን እንድትሰርጽ የሚያስችል የሚተዳደር የክላውድ ሆስቲንግ መድረክ ነው። ይህ integration ደግሞ በUltimate Multisite እና በCloudways መካከል የዶሜን ስም (domain) መረጃዎችን በራስ-ሰር ማመሳሰል (automatic domain syncing) እና የSSL ሰርተፍኬት አስተዳደርን ያስችላል።

## ባህሪያት (Features) {#features}
- በራስ-ሰር የዶሜን ስም መመሳሰል (Automatic domain syncing)
- የSSL ሰርተፍኬት አስተዳደር (SSL certificate management)
- ለተጨማሪ ዶሜኖች ድጋፍ (Support for extra domains)
- ለSSL ሰርተፍኬቶች የDNS ማረጋገጫ (DNS validation)

## የሚያስፈልጉ ነገሮች (Requirements) {#requirements}
የሚከተሉት constant ቋሚዎች በ`wp-config.php` ፋይልዎ ውስጥ መገለጽ አለባቸው።

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

በተጨማሪም፣ በፈለጉት መሰረት የሚከተለውን መግለጽ ይችላሉ።

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## የማስጫ መመሪያዎች (Setup Instructions) {#setup-instructions}

### 1. የCloudways API መለያዎችን ማግኘት (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

1. ወደ Cloudways dashboardዎ ይግቡ።
2. ወደ "Account" > "API Keys" ይሂዱ።
3. የAPI key የሌለዎት ከሆነ አዲስ ይፍጠሩ።
4. ኢሜል አድራሻዎን እና የAPI keyዎን ይቅዱ።

### 2. የሰርቨር እና የአፕሊኬሽን IDዎችን ማግኘት (Get Your Server and Application IDs) {#2-get-your-server-and-application-ids}

1. በCloudways dashboardዎ ውስጥ ወደ "Servers" ይሂዱ።
2. የWordPress multisiteዎ የተስተናገደበትን ሰርቨር ይምረጡ።
3. የServer ID በURL ውስጥ ይታያል፡ `https://platform.cloudways.com/server/{SERVER_ID}`
4. ወደ "Applications" ይሂዱ እና የWordPress applicationዎን ይምረጡ።
5. የApp ID በURL ውስጥ ይታያል፡ `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. constant ቋሚዎችን በwp-config.php ውስጥ መጨመር (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

የሚከተሉትን constant ቋሚዎች ወደ `wp-config.php` ፋይልዎ ይጨምሩ።

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

በተጨማሪ፣ በmultisiteዎ ኔትወርክ ውጪ (external) የሆኑ እና ሁልጊዜ በCloudways aliases ዝርዝር ውስጥ መቆየት ያለባቸው ተጨማሪ ዶሜኖች ካሉዎት፡

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning የራስዎን ኔትወርክ ዋይልድካርድ (wildcard) አይጨምሩ
በ`WU_CLOUDWAYS_EXTRA_DOMAINS` ውስጥ `*.your-network.com` (ወይም የራስዎ ኔትወርክ ማንኛውንም የsubdomain pattern) **አይጨምሩ**። ይህ ለምን እንደሚያስቀር የሚገልጽ ዝርዝርን ለማየት [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) ላይ ይመልከቱ።
:::

### 4. integration ን ማብራት (Enable the Integration) {#4-enable-the-integration}

1. በWordPress adminዎ ውስጥ ወደ Ultimate Multisite > Settings ይሂዱ።
2. ወደ "Domain Mapping" tab ይጓዙ።
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏቸው።
4. የCloudways integration ን ያብሩ።
5. "Save Changes" የሚለውን ይጫኑ።

## እንዴት ይሰራል (How It Works) {#how-it-works}

### የዶሜን መመሳሰል (Domain Syncing) {#domain-syncing}

አንድ ዶሜን በUltimate Multisite ሲመዘገብ (mapped):

1. integration አሁን የተመዘገቡትን ሁሉንም ዶሜኖች ያገኛል።
2. አዲሱን ዶሜን ወደ ዝርዝሩ ይጨምራል (በተግባራዊ ከሆነ የwww ስሪት ጋር)።
3. የተሟላውን ዝርዝር በAPI በCloudways ይልካል።
4. Cloudways ለapplicationዎ የዶሜን aliases ዝርዝርን ያዘምናል (updates)።

ማስታወሻ፡ Cloudways API እያንዳንዱን ዶሜን ሲጨምሩ ወይም ሲያስወግዱ ሳይሆን፣ ሁልጊዜ የተሟላውን የዶሜን ዝርዝር መላክ ይጠይቃል።

### የSSL ሰርተፍኬት አስተዳደር (SSL Certificate Management) {#ssl-certificate-management}

ዶሜኖች ከተመሳሰሉ በኋላ:

1. integration የትኞቹ ዶሜኖች ወደ ሰርቨርዎ የሚመ 指 የDNS records እንዳላቸው ይፈትሻል።
2. እነዚህን ዶሜኖች የLet's Encrypt SSL ሰርተፍኬቶችን እንዲልኩ Cloudwaysን ጥያቄ ይልካል።
3. Cloudways የSSL ሰርተፍኬት አወጣጥን (issuance) እና መጫኑን (installation) ይይዛል።

integration ሁልጊዜ **መደበኛ** (non-wildcard) Let's Encrypt ሰርተፍኬቶችን ከCloudways ይጠይቃል። በ`WU_CLOUDWAYS_EXTRA_DOMAINS` ውስጥ የዋይልድካርድ pattern ከተሰጠ፣ መሪው `*.` ከSSL ጥያቄው በፊት ይወገዳል — ዋይልድካርዱ ራሱ በዚህ integration አይጫንም። በCloudways ላይ የዋይልድካርድ ሰርተፍኬት ለመጠቀም በራስዎ መጫን አለብዎት፣ ነገር ግን ይህ የሚያደርጉት በየዶሜኑ ላይ የሚደረገውን Let's Encrypt አወጣጥ ይከለክላል (pitfall በታች ይመልከቱ)።

## ተጨማሪ ዶሜኖች (Extra Domains) {#extra-domains}

የ`WU_CLOUDWAYS_EXTRA_DOMAINS` constant ተጨማሪ **ውጫዊ** (external) ዶሜኖች ሁልጊዜ በCloudways application aliases ዝርዝር ውስጥ መቆየት እንዳለባቸው ያስችላል። የሚከተሉትን ለመጠቀም ይጠቀሙበት፡

- በUltimate Multisite ያልተተዳደሩ ውጫዊ ዶሜኖች (ለምሳሌ ተመሳሳይ Cloudways application የሚጋራ የተለየ የግብይት ድረ-ገጽ)
- በapplication aliases ዝርዝር ውስጥ እንዲቆዩ የሚፈለጉ የተቆሙ (Parked) ወይም የstaging ዶሜኖች

ይህ constant የራስዎን ኔትወርክ የsubdomain wildcard (ለምሳሌ `*.your-network.com`) **አይጠቀሙ**። የዋይልድካርድ SSL pitfall በታች ይመልከቱ።

## አስፈላጊ — የዋይልድካርድ SSL ችግር (Important — Wildcard SSL Pitfall) {#important--wildcard-ssl-pitfall}

Cloudways's መደበኛ setupን ሲከተሉ የሚፈጠረው የተለመደ ስህተት በ`WU_CLOUDWAYS_EXTRA_DOMAINS` ውስጥ `*.your-network.com` የመሳሰሉ ዋይልድካርድን መጨመር፣ ወይም ለዚያ ዋይልድካርድ በCloudways በራሱ የSSL ሰርተፍኬት መጫን ነው።

**ይህን ካደረጉ፣ Ultimate Multisite የሚያመጣቸውን በየተጠቃሚው ዶሜን (per-tenant custom domains) ላይ የLet's Encrypt ሰርተፍኬቶችን Cloudways ለመስጠት ይከራከራል።** Cloudways እያንዳንዱ ጊዜ በapplication ላይ ያለውን ንቁ SSL ሰርተፍኬት ይተካዋል፣ እና በapplication ላይ ቀድሞ የነበረ ዋይልድካርድ ሰርተፍኬት integration ላይ ጥገኛ የሆነውን በየዶሜኑ ላይ የሚደረገውን Let's Encrypt አወጣጥ ይከለክላል።

### ለUltimate Multisite ኔትወርክ የሚመከር የCloudways SSL setup {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. በCloudways application's **SSL Certificate** tab ውስጥ፣ **መደበኛ Let's Encrypt ሰርተፍኬት** ብቻ ይጫኑ። ይህም `your-network.com` እና `www.your-network.com`ን ብቻ ይሸፍናል — **ዋይልድካርድ አይደለም**።
2. `*.your-network.com` (ወይም የራስዎ ኔትወርክ ማንኛውንም የsubdomain pattern) በ`WU_CLOUDWAYS_EXTRA_DOMAINS` ውስጥ **አይጨምሩ**። ይህ constant ለ**ውጫዊ** ዶሜኖች ብቻ ይያዙት።
3. የsubsites እንዲሰሩ የየተጠቃሚውን የsubdomain wildcard በ**DNS** ደረጃ ብቻ ይፍጠሩ (ለ`*.your-network.com` ወደ Cloudways server IP የሚያመለክት `A` record)። ለግለሰብ የተመዘገቡ ዶሜኖች SSL ከዚያ በintegration በLet's Encrypt በራስ-ሰር ይሰጣሉ።

የተጠቃሚዎች የcustom ዶሜኖች በSSL ሳይገኙ ከተቀሩ፣ የCloudways SSL tabን ይፈትሹ። እዚያ ዋይልድካርድ ሰርተፍኬት (በእጅ የተጫነ፣ ወይም `*.your-network.com` የሚሸፍን) ካለ፣ ያስወግዱት፣ ለዋናው የኔትወርክ ዶሜን ብቻ መደበኛ Let's Encrypt ሰርተፍኬት እንደገና ይስጡ፣ እና ከ`WU_CLOUDWAYS_EXTRA_DOMAINS` ማንኛውንም ዋይልድካርድ entry ያስወግዱ። ከዚያ የዶሜን መመሳሰልን እንደገና ይጀምሩ (re-trigger) (ወይም በሚቀጥለው ጊዜ ይጠብቁ) እና integration በየዶሜኑ ላይ ሰርተፍኬቶችን መስጠት ይጀምራል።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### የAPI ግንኙነት ችግሮች (API Connection Issues) {#api-connection-issues}
- ኢሜል አድራሻዎ እና የAPI keyዎ ትክክል መሆናቸውን ያረጋግጡ።
- የሰርቨር እና የአፕሊኬሽን IDዎ ትክክል መሆናቸውን ያረጋግጡ።
- የCloudways accountዎ አስፈላጊውን ፈቃድ (permissions) እንዳለው ያረጋግጡ።

### የSSL ሰርተፍኬት ችግሮች (SSL Certificate Issues) {#ssl-certificate-issues}
- Cloudways ሰርተፍኬቶችን ከመስጠትዎ በፊት ዶሜኖች ወደ ሰርቨርዎ የሚመ 指 ትክክለኛ የDNS records ሊኖራቸው ይገባል።
- integration ሰርተፍኬቶችን ከመጠየቁ በፊት የDNS records መኖራቸውን ያረጋግጣል።
- የSSL ሰርተፍኬቶች እየተሰጡ না ከሆነ፣ ዶሜኖቹ ወደ ሰርቨርዎ IP አድራሻ በትክክል እየጠቆሙ መሆናቸውን ያረጋግጡ።
- **የተጠቃሚው ዶሜን በSSL ሳይገኝ ተጣብቋል?** የCloudways application's SSL Certificate tabን ይፈትሹ። ዋይልድካርድ ሰርተፍኬት (በእጅ የተጫነ፣ ወይም `*.your-network.com` የሚሸፍን) ንቁ ከሆነ፣ Cloudways ለግለሰብ የተመዘገቡ ዶሜኖች Let's Encrypt ሰርተፍኬቶችን አይሰጥም። መደበኛ Let's Encrypt ሰርተፍኬት ብቻ ይተኩት ይህም ዋናውን የኔትወርክ ዶሜን (`your-network.com`, `www.your-network.com`) ብቻ ይሸፍን፣ እና ከ`WU_CLOUDWAYS_EXTRA_DOMAINS` ማንኛውንም ዋይልድካርድ entry ያስወግዱ። ከዚያ የዶሜን መመሳሰልን እንደገና ይጀምሩ (re-trigger) (ወይም በሚቀጥለው ጊዜ ይጠብቁ) እና integration በየዶሜኑ ላይ ሰርተፍኬቶችን መጠየቅ ይጀምራል።

### ዶሜን አልተጨመረም (Domain Not Added) {#domain-not-added}
- የUltimate Multisite logs ውስጥ የत्र kesalahan መልዕክቶችን ይፈትሹ።
- ዶሜኑ ቀድሞ በCloudways ውስጥ አለመጨመሩን ያረጋግጡ።
- የCloudways planዎ እየጨመሩባቸው ያሉትን የዶሜን ብዛት ይደግጋል (supports) መሆኑን ያረጋግጡ።
