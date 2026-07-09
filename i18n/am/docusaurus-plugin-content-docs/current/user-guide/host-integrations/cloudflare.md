---
title: Cloudflare ውህደት
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration {#cloudflare-integration}

## አጠቃላይ እይታ (Overview) {#overview}
Cloudflare መሪ የይዘት አቅርቦት ኔትወርክ (CDN) እና የደህንነት አቅራቢ ሲሆን ድረ-ገጾችን ለመጠበቅ እና ፍጥነታቸውን ለማሳደግ ይረዳል። ይህ አገናኝ (integration) Ultimate Multisite እና Cloudflare መካከል በራስ-ሰር የዶሜን አስተዳደርን ያስችላል። በተለይም ለንዑስ ስብስብ ድር ጣቢያ (subdomain multisite) ተከላዎች በጣም ጠቃሚ ነው።

## ባህሪያት (Features) {#features}
- በCloudflare ውስጥ የንዑስ ስብስብ በራስ-ሰር መፍጠር
- በCloudflare የሚያልፍ (Proxied) የንዑስ ስብስብ ድጋፍ
- የDNS መዝገብ አስተዳደር
- በUltimate Multisite አስተዳሚ ውስጥ የተሻሻለ የDNS መዝገብ ማሳያ

## የሚያስፈልጉ ነገሮች (Requirements) {#requirements}
የሚከተሉት ቋሚ ተለዋዋጮች (constants) በ`wp-config.php` ፋይልዎ ውስጥ መገለጽ አለባቸው።

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## የማስጫ መመሪያዎች (Setup Instructions) {#setup-instructions}

### 1. የCloudflare API Keyዎን ማግኘት {#1-get-your-cloudflare-api-key}
1. ወደ Cloudflare dashboardዎ ይግቡ።
2. ወደ "My Profile" (በላይኛው ቀኝ ጥግ ላይ ባለው ኢሜልዎ ላይ ይጫኑ) ይሂዱ።
3. ከምናሌው ውስጥ "API Tokens" ይምረጡ።
4. የሚከተሉትን ፈቃዶች (permissions) ባላቸው አዲስ API token ይፍጠሩ፦
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. የAPI tokenዎን ይቅዱ።

### 2. የZone IDዎን ማግኘት {#2-get-your-zone-id}
1. በCloudflare dashboardዎ ውስጥ፣ ሊጠቀሙበት የሚፈልጉትን ዶሜን ይምረጡ።
2. የZone ID በ"Overview" ትር ውስጥ፣ በቀኝ በኩል ባለው የ"API" ክፍል ውስጥ ይታያል።
3. የZone IDን ይቅዱ።

### 3. ቋሚ ተለዋዋጮችን ወደ wp-config.php መጨመር {#3-add-constants-to-wp-configphp}
የሚከተሉትን ቋሚ ተለዋዋጮች (constants) ወደ `wp-config.php` ፋይልዎ ይጨምሩ፦

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. አገናኙን ማብራት (Enable the Integration) {#4-enable-the-integration}
1. በWordPress adminዎ ውስጥ፣ ወደ Ultimate Multisite > Settings ይሂዱ።
2. ወደ "Domain Mapping" ትር ይጓዙ።
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏቸው።
4. የCloudflare integrationን ያብሩ።
5. "Save Changes" የሚለውን ይጫኑ።

## እንዴት ይሰራል (How It Works) {#how-it-works}

### የንዑስ ስብስብ አስተዳደር (Subdomain Management) {#subdomain-management}
በንዑስ ስብስብ ድር ጣቢያ ተከላ ውስጥ አዲስ ድረ-ገጽ ሲፈጠር፦
1. አገናኙ (integration) ለንዑስ ስብስብ ድር ጣቢያ (subdomain) የCNAME መዝገብ ለመጨመር ወደ Cloudflare's API ጥያቄ ይልካል።
2. በነባሪነት (by default) ንዑስ ስብስቡ በCloudflare እንዲያልፍ (proxied) ተዘጋጅቷል (ይህ በfilters ሊቀየር ይችላል)።
3. ድረ-ገጽ ሲሰረዝ፣ አገናኙ (integration) ንዑስ ስብስቡን ከCloudflare ያጠፋዋል።

### የDNS መዝገብ ማሳያ (DNS Record Display) {#dns-record-display}
አገናኙ (integration) በUltimate Multisite አስተዳሚ ውስጥ የDNS መዝገብ ማሳያውን የሚሻሻለው በሚከተሉት አማካይነት ነው፦
1. የDNS መዝገቦችን በቀጥታ ከCloudflare የሚያስገቡ ነው።
2. መዝገቦቹ የሚያልፉ (proxied) መሆናቸውን ወይስ እንዳልሆነ ያሳያል።
3. ስለ DNS መዝገቦቹ ተጨማሪ መረጃ ያሳያል።

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}
**Cloudflare Custom Hostnames** (ከዚህ በፊት "Cloudflare for SaaS" ተብሎ ይጠራል) የCloudflare ባህሪ ሲሆን ደንበኞችዎ በየራሳቸው ዶሜን በSSL በየንዑስ ስብስብ ድር ጣቢያዎ ኔትወርክ ላይ እንዲጠቀሙ ያስችላል። Cloudflare የSSL ሰርተፍኬት አሰጣጥ እና እድሳት (renewal) ለእያንዳንዱ የቅጽል ዶሜን በራስ-ሰር ስለሚያስተዳድር፣ ይህ ለCloudflare የሚያልፉ (proxied) የዶሜን-የተመዘገቡ (domain-mapped) Multisite ተከላዎች በጣም ይመከራል።

### ከመደበኛው Cloudflare integration እንዴት ይለያል {#how-it-differs-from-the-standard-cloudflare-integration}
| | መደበኛ integration | Cloudflare Custom Hostnames |
|---|---|---|
| **ዓላማ** | ለንዑስ ስብስቦች የDNS መዝገቦችን በራስ-ሰር ይፈጥራል | በCloudflare የሚያልፍ (managed) የቅጽል ዶሜን (custom)ን ያስችላል |
| **ለማን ይመከራል** | የንዑስ ስብስብ Multisite | የዶሜን-የተመዘገበ Multisite |
| **SSL** | በተናጥል ይተዳደራል | በCloudflare በራስ-ሰር ይተዳደራል |

### Cloudflare Custom Hostnames ማዘጋጀት {#setting-up-cloudflare-custom-hostnames}
1. በCloudflare dashboardዎ ውስጥ፣ ለዋና ዶሜንዎ የzone ክፍሉን ይክፈቱ።
2. ወደ **SSL/TLS > Custom Hostnames** ይሂዱ።
3. ወደ የሰርቨርዎ IP ወይም የቅጽል ስም (hostname) የሚያመለክት የfallback origin ይጨምሩ።
4. በUltimate Multisite ውስጥ ለተመዘገቡ ለእያንዳንዱ የደንበኛ ዶሜን፣ በCloudflare ውስጥ የCustom Hostname መግቢያ ይጨምሩ። ይህን እርምጃ በCloudflare API በመጠቀም በራስ-ሰር ማድረግ ይችላሉ።
5. የደንበኛው DNS ወደ ኔትወርክዎ ከተመላከተ በኋላ Cloudflare ለእያንዳንዱ የቅጽል ስብስብ ስም (custom hostname) የTLS ሰርተፍኬቶችን ያሰጣል እና ያድሳል።

ሙሉ የAPI ማጣቀሻ (reference) ለማግኘት [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) ይመልከቱ።

:::note Terminology update
ከUltimate Multisite v2.6.1 ጀምሮ፣ ይህ ባህሪ በሁሉም የፕልጊን ቅንብሮች እና መለያዎች ውስጥ **Cloudflare Custom Hostnames** ተብሎ ይጠራል። ቀደምት ስሪቶች "Cloudflare for SaaS" የሚለውን ስም ይጠቀሙ ነበር፣ ይህም የCloudflare መሰረታዊ የምርት ስም ነው።
:::

## አስፈላጊ ማሳሰቢያዎች (Important Notes) {#important-notes}
ከCloudflare የቅርብ ጊዜ ዝማኔዎች አንጻር፣ የwildcard proxying አሁን ለሁሉም ደንበኞች ይገኛል። ይህ ማለት መደበኛው የCloudflare DNS integration ከዚህ በፊት ከነበረው በላይ ለንዑስ ስብስብ Multisite ተከላዎች ወሳኝ አይደለም፣ ምክንያቱም በቀላሉ በCloudflare ውስጥ የwildcard DNS መዝገብ መፍጠር ይችላሉ።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### የAPI ግንኙነት ችግሮች (API Connection Issues) {#api-connection-issues}
- የAPI tokenዎ ትክክል መሆኑን እና አስፈላጊውን ፈቃድ እንዳለው ያረጋግጡ።
- የZone IDዎ ትክክል መሆኑን ያረጋግጡ።
- የCloudflare አካውንትዎ አስፈላጊውን ፈቃድ እንዳለው ያረጋግጡ።

### ንዑስ ስብስብ አልተጨመረም (Subdomain Not Added) {#subdomain-not-added}
- የUltimate Multisite logs ውስጥ የत्र kesalahan መልዕክቶችን (error messages) ይፈትሹ።
- ንዑስ ስብስቡ ቀድሞ በCloudflare አለመጨመሩን ያረጋግጡ።
- የCloudflare ዕቅድዎ እየፈጠሩት ያሉትን የDNS መዝገቦች ብዛት እንደሚደግፍ ያረጋግጡ።

### የProxying ችግሮች (Proxying Issues) {#proxying-issues}
- ንዑስ ስብስቦች እንዳያልፉ (not proxied) ከፈለጉ፣ `wu_cloudflare_should_proxy` filterን መጠቀም ይችላሉ።
- አንዳንድ ባህሪያት ሲያልፉ (proxied) በትክክል ላይሰሩ ይችላሉ (ለምሳሌ፣ የተወሰኑ የWordPress admin ተግባራት)።
- ለadmin ገጾች የcache-ን ለማለፍ Cloudflare's Page Rules መጠቀምን ያስቡ።
