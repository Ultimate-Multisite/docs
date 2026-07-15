---
title: ብዙ ጣቢያዎች የማቋቋም መመሪያ
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# የብዙ-ጣቢያ (Multisite) የማዋቀር አስማሚ

Ultimate Multisite ተብሎ የሚጠራው በውስጥ የተገጠመ አስማሚ (wizard) ሲሆን፣ መደበኛ የWordPress ጭነትን ወደ WordPress Multisite ኔትወርክ በራስ-ሰር ይለውጣል። ይህ ደግሞ የ`wp-config.php` ፋይልን በእጅ የመቀየር ወይም የዳታቤዝ ትዕዛዞችን የማስኬድ አስፈላጊነትን ያስወግዳል።

:::tip
የWordPress ጭንልዎ ቀድሞውንም እንደ Multisite ኔትወርክ እየሰራ ከሆነ፣ ይህን ደረጃ ሙሉ በሙሉ መዝለል ይችላሉ። አስማሚው Multisite እስካልተበራ ድረስ ብቻ ነው የሚታየው።
:::

## አስማሚው መቼ ይታያል? {#when-does-the-wizard-appear}

Ultimate Multisiteን በመደበኛ (በMultisite ያልሆነ) የWordPress ጭነት ላይ ሲያነሳሱ፣ ፕለጊኑ Multisite አልተበራም ብሎ በመገንዘብ፣ ወደ መደበኛው የማዋቀር አስማሚ ከመሄዱ ይልቅ ወዲያውኑ ወደ Multisite Setup Wizard ይመራዎታል።

እንዲሁም በቀጥታ በ **WP Admin > Ultimate Multisite > Multisite Setup** ላይ መድረስ ይችላሉ።

## ቅድመ ሁኔታዎች {#prerequisites}

አስማሚውን ከመስኬድዎ በፊት፣ የሚከተሉትን ማረጋገጥዎን ያረጋግጡ፦

- በWordPress ጭንልዎ ላይ **የአስተዳዳሪ (administrator) መዳረሻ** ሊኖርዎት ይገባል
- የሰርቨሩ `wp-config.php` ፋይል በዌብ ሰርቨሩ **ሊጻፍበት (writable)** መቻል አለበት
- የፋይሎችዎ እና የዳታቤዝዎ **የቅርብ ጊዜ ምትኬ (backup)** ሊኖርዎት ይገባል

:::warning
አስማሚው የ`wp-config.php` ፋይልዎን ይለውጣል እንዲሁም አዳዲስ የዳታቤዝ ሰንጠረዦችን ይፈጥራል። ሁልጊዜ ከመቀጠልዎ በፊት ምትኬ መፍጠርዎን ያረጋግጡ።
:::

## ደረጃ 1፡ እንኳን ደህና መጡ (Welcome) {#step-1-welcome}

የመጀመሪያው ስክሪን የWordPress Multisite ምን እንደሆነ እና አስማሚው ምን እንደሚያደርግ ያብራራል፦

- በWordPress ውቅረት ውስጥ የMultisiteን ባህሪ ማብራት
- አስፈላጊ የኔትወርክ የዳታቤዝ ሰንጠረዦችን መፍጠር
- አስፈላጊ የmultisite ቋሚዎችን (constants) በ`wp-config.php` ላይ መጨመር
- Ultimate Multisiteን በኔትወርክ ውስጥ ማብራት (Network-activate)

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

ለመቀጠል **Continue** የሚለውን ይጫኑ።

## ደረጃ 2፡ የኔትወርክ ውቅረት (Network Configuration) {#step-2-network-configuration}

ይህ ደረጃ የኔትወርክ ቅንብሮችዎን እንዲያዋቅሩ ይጠይቃል።

### የጣቢያ አወቃቀር (Site Structure) {#site-structure}

የኔትወርክ ጣቢያዎችዎ እንዴት እንደሚደራጁ ይምረጡ፦

- **Sub-domains** (የንዑስ-ዶሜን) (የሚመከር) — ጣቢያዎች የራሳቸውን የንዑስ-ዶሜን ያገኛሉ፣ ለምሳሌ፡ `site1.yourdomain.com`
- **Sub-directories** (የንዑስ-ዳይሬክቶሪ) — ጣቢያዎች እንደ መስመሮች ይፈጠራሉ፣ ለምሳሌ፡ `yourdomain.com/site1`

:::note
የንዑስ-ዶሜን (sub-domains) ከመረጡ፣ ለዶሜንዎ **wildcard DNS** እና **wildcard SSL certificate** ማዋቀር ያስፈልግዎታል። አብዛኛዎቹ የWordPress አስተዳዳሪ ሆስቶች ይህንን በራስ-ሰር ይሰራሉ። ዝርዝር ንጽጽር ለማግኘት [Ultimate Multisite 101](./ultimate-multisite-101) ይመልከቱ።
:::

### የኔትወርክ ርዕስ (Network Title) {#network-title}

ለኔትወርክዎ ስም ያስገቡ። ይህ በቅጽበታዊ መልኩ በወቅታዊ የጣቢያዎ ርዕስ እና "Network" ተብሎ ተጨምሮ ይዘጋጃል። ይህንን በኋላ ከኔትወርክ ቅንብሮች ሊቀይሩት ይችላሉ።

### የኔትወርክ አስተዳዳሪ ኢሜይል (Network Admin Email) {#network-admin-email}

ለኔትወርክ አስተዳደር ማሳወቂያዎች የሚያገለግለው የኢሜይል አድራሻ። ይህ በወቅታዊ ተጠቃሚ የኢሜይል አድራሻ ላይ የተመሰረተ ነው።

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

ቦታዎቹን ከሞሉ በኋላ፣ ለመቀጠል **Continue** የሚለውን ይጫኑ።

## ደረጃ 3፡ መጫን (Installation) {#step-3-installation}

ለመጀመር **Install** የሚለውን ቁልፍ ይጫኑ። አስማሚው አምስት በራስ-ሰር ደረጃዎችን በተከታታይ ያከናውናል፣ እያንዳንዱም እድገቱን በቅጽበታዊ መልኩ ያሳያል፦

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| ደረጃ (Step) | መግለጫ (Description) |
|------|-------------|
| **Enable Multisite** | `WP_ALLOW_MULTISITE` ቋሚን በ`wp-config.php` ላይ ይጨምራል |
| **Create Network** | የmultisite የዳታቤዝ ሰንጠረዦችን (`wp_site`, `wp_sitemeta`, `wp_blogs` ወዘተ) ይፈጥራል እና በኔትወርክ ውቅረትዎ ይሞላል |
| **Update Configuration** | የመጨረሻዎቹ የmultisite ቋሚዎችን በ`wp-config.php` ላይ ይጨምራል (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` ወዘተ) |
| **Fix Cookies** | ከማብራት በኋላ የማረጋገጫ ችግሮችን ለመከላከል የጣቢያ URL በኔትወርክ ሜታዳታ ውስጥ ትክክል መሆኑን ያረጋግጣል |
| **Network Activate Plugin** | Ultimate Multisite በጠቅላላው ኔትወርክ ውስጥ እንዲሰራ በኔትወርክ ደረጃ ያነሳሳዋል |

እያንዳንዱ ደረጃ ከእነዚህ ሁኔታዎች አንዱን ያሳያል፦

- **Pending** — እየጠበቀ ነው (Processing የሚጠብቅ)
- **Installing...** — እየሰራ ነው (በቅጽበት እየተሰራ)
- **Success!** — በተሳካ ሁኔታ ተጠናቅቋል
- **Error message** — ስህተት ተፈጥሯል (መልዕክቱ ችግሩን ይገልጻል)

ሁሉም ደረጃዎች በተሳካ ሁኔታ ከተጠናቀቁ በኋላ፣ ለእያንዳንዱ ንጥል አረንጓዴ "Success!" ሁኔታ ያያሉ፦

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

አስማሚው ከዚያ ወደ ማጠናቀቂያ ስክሪን በራስ-ሰር ይቀጥላል።

## ደረጃ 4፡ ማጠናቀቅ (Complete) {#step-4-complete}

መጫኑ ከተጠናቀቀ በኋላ፣ WordPress Multisite እንደተበራበት የሚያረጋግጥ የስኬት መልዕክት ያያሉ።

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

አሁን የWaaS መድረክዎን (የኩባንያ ዝርዝሮች፣ መደበኛ ይዘት፣ የክፍያ መግቢያዎች ወዘተ) ለማዋቀር Ultimate Multisite setup wizardን መቀጠል ይችላሉ።

:::note
የmultisite መጫን ከተጠናቀቀ በኋላ፣ አሳሽዎ በአዲስ በተበራው የኔትወርክ አስተዳዳሪ በኩል ወደ ሌላ ቦታ ይመራዎታል። የማረጋገጫ ኩኪዎች ለmultisite አካባቢ ስለሚሻሻሉ እንደገና መግባት ሊያስፈልግዎ ይችላል።
:::

## በእጅ የማዋቀር አማራጭ (Manual Setup Fallback) {#manual-setup-fallback}

አስማሚው ወደ `wp-config.php` ፋይልዎ መጻፍ ካልቻለ (በፋይል ፍቃዶች ወይም በሰርቨር ገደቦች ምክንያት)፣ በእጅ የሚጨምሩበትን ትክክለኛ ኮድ ያሳያል፦

1. ከ`/* That's all, stop editing! */` መስመር በላይ መጨመር ያለባቸው **የwp-config.php ቋሚዎች**
2. ለመረጡት የጣቢያ አወቃቀር (subdomain ወይም subdirectory) ተስማሚ የ**.htaccess rewrite rules**

በእጅ ለውጦቹን ከሰሩ በኋላ፣ ገጹን አድስ (refresh) ያድርጉ እና አስማሚው Multisite አሁን ንቁ መሆኑን ይገነዘባል።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### አስማሚው `wp-config.php` ሊጻፍበት እንደማይችል ይላል {#the-wizard-says-wp-configphp-is-not-writable}

የዌብ ሰርቨር ሂደት በ`wp-config.php` ፋይል ላይ የመጻፍ ፍቃድ ሊኖረው ይገባል። የሚከተሉትን ማድረግ ይችላሉ፦

- የፋይል ፍቃዶችን ጊዜያዊ በ`644` ወይም `666` መቀየር
- አስማሚው የሰጠውን በእጅ የማዋቀር አማራጭ መመሪያ መጠቀም
- የሆስቲንግ ሰሪዎን እርዳታ መጠየቅ

### ከማዋቀር በኋላ ጣቢያዎች ሊደረስባቸው የማይችሉ ሲሆኑ (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

የንዑስ-ዶሜን አወቃቀር ከመረጡ፣ ለዶሜንዎ **wildcard DNS** ማዋቀር ያስፈልግዎታል። የDNS መዝገብ ይጨምሩ፦

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

ይህንን እንዴት ማዋቀር እንደሚችሉ እርግጠኛ ካልሆኑ ከሆስቲንግ ሰሪዎ ጋር ያረጋግጡ።

### ከማዋቀር በኋላ የማረጋገጫ ችግሮች (Authentication issues) {#authentication-issues-after-setup}

ከmultisite setup በኋላ ከተውጣችሁ ወይም የኩኪ ስህተቶችን ካጋጠመዎት፦

1. የጣቢያውን የብራውዘር ኩኪዎች ያጽዱ
2. እንደገና በ`yourdomain.com/wp-login.php` ይግቡ
3. ችግሩ ከቀጠለ፣ `wp-config.php`ዎ `COOKIE_DOMAIN` ወደ `false` ሳይሆን መሆኑን ያረጋግጡ — ይህ በsubdomain multisite ጭነቶች ላይ የሚታወቅ ችግር ነው።

### በመጫን ወቅት አንድ ደረጃ ካልተሳካ {#a-step-failed-during-installation}

የመጫን ደረጃዎች አንዱ ስህተት ካሳየ፦

1. የታየውን የስህተት መልዕክት ይጻፉ
2. ወደ ውቅረት ደረጃ ተመልሰው እንደገና ይሞክሩ
3. ስህተቱ ከቀጠለ፣ ለበለጠ ዝርዝር የሰርቨሩን PHP error log ያረጋግጡ
4. ቀድሞውኑ የተጠናቀቁ ደረጃዎች በሚቀጥሉት ስራዎች ላይ ይዘልቃሉ (installer is idempotent)
