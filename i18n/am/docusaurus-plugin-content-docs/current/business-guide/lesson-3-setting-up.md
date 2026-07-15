---
title: ትምህርት 3፡ የእርስዎን ኔትወርክ ማዘጋጀት
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# የኔትዎርክዎን ማዋቀር ትምህርት 3

ለመገንባት ጊዜው ደርሷል። በዚህ ትምህርት ውስጥ Ultimate Multisiteን ይጫናሉ እንዲሁም የFitSite ኔትዎርክ መሠረትን ያዋቅራሉ። እዚህ የሚደረግ እያንዳንዱ ውሳኔ በየጤና (fitness) ዘርፍ ላይ ተመስርቶ ነው።

## የት ቆምን ነበር? {#where-we-left-off}

የእኛ የገበያ ክፍል (niche) የጤና ስቱዲዮዎችን መረጥን እና እድሉን አረጋግጠናል (validated)። አሁን ያንን ሀሳብ ወደሚሰራ መድረክ እናቀልጣዋለን።

## የሆስቲንግ ምርጫዎ {#choosing-your-hosting}

የሆስቲንግ ምርጫዎ ለአንድ የድረ-ገጽ (single website) ከመሆን ይልቅ ለየገበያ ክፍል (niche platform) የበለጠ አስፈላጊ ነው። አንድ ድረ-ገጽ እየሰሩ አይደለም—አስደናቂ የሆኑ ወይም በመቶዎች የሚቆጠሩ ድረ-ገጾችን የሚያስተናግድ ኔትዎርክ እየሰሩ ነው።

### ምን መፈለግ አለብዎት? {#what-to-look-for}

- **WordPress Multisite ድጋፍ**: ሁሉም የሆስቲንግ ሰጪዎች multisiteን በአግባቡ አይይዙም።
- **Wildcard SSL**: በsubdomain ላይ የተመሰረቱ ኔትዎርኮች (subdomain-based networks) ወሳኝ ነው።
- **የሚሰፋ ሀብቶች (Scalable resources)**: ሳይቀየር (without migrating) ለማደግ ቦታ ያስፈልግዎታል።
- **Ultimate Multisite ውህደት (integration)**: አውቶማቲክ የዶሜን ካርታ አወጣጥ (domain mapping) እና SSL ጉልህ የሥራ ጥረትን ያቆማል።

### የሚመከር አካሄድ {#recommended-approach}

ከ[Compatible Providers](/user-guide/host-integrations/closte) ዝርዝር ውስጥ የሆስቲንግ ሰጪን ይምረጡ። እነዚህ ከUltimate Multisite ጋር ተፈትнены ሲሆን ለዶሜን ካርታ አወጣጥ እና ለSSL አውቶማቲክነት የሚያስፈልጉዎትን ውህደቶች ይሰጣሉ።

ለFitSite፣ የsubdomain configuration እንጠቀማለን። ይህ ማለት የደንበኞች ድረ-ገጾች በመጀመሪያ ደረጃ `studioname.fitsite.com` በሚል ይታያሉ፣ ከዚያም በፈቃደኝነት የራሳቸውን ዶሜን ሊያገናኙ ይችላሉ።

## WordPress Multisite መጫን {#installing-wordpress-multisite}

የWordPress Multisite installation ከሌለዎት:

1. WordPressን በየሆስቲንግ ሰጪዎ ላይ ይጫኑ።
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) መመሪያውን ይከተሉ።
3. ሲጠየቁ **subdomain** configuration ይምረጡ።

:::tip ለምን Subdomains?
Subdomains ለእያንዳንዱ የደንበኛ ድረ-ገጽ የራሱን ልዩ አድራሻ (`studio.fitsite.com`) ይሰጣሉ እንጂ የፓዝ (path) አያደርጉም (`fitsite.com/studio`)። ይህ ለደንበኞችዎ ይበልጥ ሙያዊ ነው እንዲሁም የpermalinks ግጭቶችን ያስወግዳል። ዝርዝር ንጽጽር ለማግኘት [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ይመልከቱ።
:::

## Ultimate Multisite መጫን {#installing-ultimate-multisite}

እባክዎ [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) መመሪያውን በመከተል የሚከተሉትን ያድርጉ፦

1. የplugin ን በመላው ኔትዎርክ ላይ ይጫኑ እና ያንቀሳቅሱ (activate)።
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) ያሂዱ።

በsetup wizard ውስጥ፣ የFitSite nicheን አእምሮዎ ውስጥ ይያዙ፦

- **Currency**: የየጤና ስቱዲዮ ደንበኞችዎ የሚጠቀሙበትን ምንዛሪ ያዘጋጁ።
- **Company name**: "FitSite" (ወይም የመረጡት የብራንድ ስም)።
- **Company logo**: የብራንድ አርማዎን ይስቀሉ። — ይህ በኢንቮይስ እና በኢሜይሎች ላይ ይታያል።

## ለየጤና ዘርፉ ማዋቀር (Configuring for the Fitness Niche) {#configuring-for-the-fitness-niche}

Ultimate Multisite ከተጫነ በኋላ፣ እነዚህን niche-specific የቅንብር ምርጫዎችን ያድርጉ፦

### አጠቃላይ ቅንብሮች (General Settings) {#general-settings}

ወደ **Ultimate Multisite > Settings** ይሂዱ እና የሚከተሉትን ያዋቅሩ፦

- **Site name**: FitSite
- **Default role**: Administrator — የየጤና ስቱዲዮ ባለቤቶች የየድረ-ገጽ ይዘታቸው ላይ ሙሉ ቁጥጥር ሊኖራቸው ስለሚገባ ነው።
- **Registration**: የuser registrationን ያንቀሳቅሱ (Enable)። ይህም የስቱዲዮ ባለቤቶች ራሳቸው እንዲመዘገቡ ያስችላል።

### የኢሜይል ቅንብር (Email Configuration) {#email-configuration}

የስርዓት ኢሜይሎችዎ የየገበያ ክፍልዎ (niche) ቋንቋ መናገር አለባቸው። ወደ **Ultimate Multisite > Settings > Emails** ይሂዱ እና ያበጁ፦

- አጠቃላይ የ"የእርስዎ አዲስ ድረ-ገጽ" ቋንቋን በየጤና ዘርፍ ተስማሚ መልዕክት ይተኩ።
- ምሳሌ የእንኳን ደስ ያለዎት ርዕስ (subject): "የየጤና ስቱዲዮ ድረ-ገጽዎ ዝግጁ ነው"
- ምሳሌ የእንኳን ደስ ያለዎት አካል (body): ስቱዲዮቸውን፣ ክፍላቸውን እና የየጤና ድረ-ገጽቸውን እንዴት መጀመር እንዳለባቸው ይጠቅሳል።

እነዚህን በLesson 8 (Customer Onboarding) ውስጥ እናሻሽላቸዋለን፣ ነገር ግን አሁን ስሜቱን ማዘጋጀት የመጀመሪያዎቹ የሙከራ ምዝገባዎች እንኳን niche-specific እንዲሆኑ ያደርጋል።

### የዶሜን ቅንብር (Domain Configuration) {#domain-configuration}

የተስማሚ የሆስቲንግ ሰጪን እየተጠቀሙ ከሆነ፣ አሁን የዶሜን ካርታ አወጣጥ (domain mapping) ያዋቅሩ፦

1. ወደ **Ultimate Multisite > Settings > Domain Mapping** ይሂዱ።
2. ለየሆስቲንግ ሰጪዎ የውህደት መመሪያውን ይከተሉ።
3. አዳዲስ subsites በራስ-ሰር SSL የሚያገኙ መሆናቸውን ይፈትሹ።

ይህም በሚቀጥለው ትምህርት የቴምፕሌቶችን እና የሙከራ ድረ-ገጾችን መፍጠር ስንጀምር ሁሉም ነገር ከመጀመሪያ እስከ መጨረሻ እንደሚሰራ ያረጋግጣል።

## የFitSite ኔትዎርክ እስከ አሁን {#the-fitsite-network-so-far}

በዚህ ትምህርት መጨረሻ ላይ፣ የሚከተለው የእርስዎ ነው፦

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## በዚህ ትምህርት የሠራነው {#what-we-built-this-lesson}

- በsubdomain mode ውስጥ የሚሰራ WordPress Multisite installation
- የFitSite ብራንዲንግ የተደረገበት Ultimate Multisite installation
- ለሚያድግ ኔትዎርክ የተዘጋጀ Hosting እና SSL
- ለየሆስቲንግ ሰጪዎ የተዘጋጀ Domain mapping
- ከመጀመሪያው ቀን ጀምሮ የተቋቋመ niche-specific የኢሜይል ስሜት

---

**ቀጣይ:** [Lesson 4: Building Niche Templates](lesson-4-templates) — የየጤና ስቱዲዮ ባለቤቶች በእርግጥ ሊጠቀሙበት የሚፈልጉ የድረ-ገጽ ቴምፕሌቶችን እንፈጥራለን።
