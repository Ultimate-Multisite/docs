---
title: የዶሜን ምርቶች እና ዋጋ
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# የዶሜን ምርቶች እና ዋጋ አወጣጥ {#domain-products-and-pricing}

የዶሜን ምርቶች ዋጋ አወጣጥን፣ TLDsን፣ WHOIS ግላዊነትን እና የአቅራቢ ምርጫን የሚቆጣጠሩበት መንገድ ናቸው። እያንዳንዱ የዶሜን ምርት ተጨማሪ **Domain Settings** ታብ ያለው መደበኛ Multisite Ultimate ምርት ነው።

## የዶሜን ምርት መፍጠር {#creating-a-domain-product}

1. ወደ **Network Admin › Ultimate Multisite › Products** ይሂዱ
2. **Add New** ላይ ይጫኑ
3. የምርት አይነትን ወደ **Domain** ያዘጋጁ
4. የ**Domain Settings** ታብን ያቅዱ (ከዚህ በታች ይመልከቱ)
5. ያስቀምጡ (Save)

የዶሜን ምርቶች በምርት ዝርዝር ውስጥ በሐምራዊ **Domain** ባጅ ይታያሉ፣ እና በ**Domain Products** ታብ በመጠቀም መጣራት ይችላሉ።

## የዶሜን ቅንብሮች ታብ (Domain settings tab) {#domain-settings-tab}

### አቅራቢ (Provider) {#provider}

ይህ ምርት መመዝገቢያን የትኛው ሬጅስትራ (registrar) እንደሚይዝ ይምረጡ። በDomain Seller settings ውስጥ በተቀመጠው ዓለም አቀፍ **Default provider** ላይ ይሠራል።

### የሚደገፉ TLDs (Supported TLDs) {#supported-tlds}

**የሁሉም ዶሜን የሚሰራ ምርት (catch-all product)** ለመፍጠር ባዶ ይተው። ይህ ምርት በሌላ ምርት ያልተጣጣሙ ሁሉንም TLDs ላይ ይሠራል።

**የTLD-ተኮር ምርት (TLD-specific product)** ለመፍጠር የ쉼 (comma) የተከፋፈሉ TLDs ዝርዝር ያስገቡ (ለምሳሌ፣ `.com, .net, .org`)። ይህ ምርት በተጠቀሱት ቅጥያዎች ላይ ብቻ ይሠራል።

**የምርት መጣራት እንዴት እንደሚሰራ:** ደንበኛ ዶሜን ሲፈልግ፣ ተጨማሪው ምርት በጣም የተለየውን የሚጠይቅ ምርት ይመርጣል። በTLD ዝርዝሩ ውስጥ `.com` ያለው ምርት ከሁሉም ዶሜን የሚሰራ ምርት ይበልጥ ቅድሚያ ይሰጠዋል። ምንም TLD-ተኮር ምርት ካልተጣጣረ፣ ሁሉም ዶሜን የሚሰራው ምርት ጥቅም ላይ ይውላል። ምንም ምርቶች ባይኖሩ፣ የዶሜን ፍለጋ አይታይም።

### የዋጋ ጭማሪ አይነት (Markup type) {#markup-type}

የችርቻሮ ዋጋዎ ከጅምላ ወጪ (wholesale cost) እንዴት እንደሚሰላ የሚቆጣጠሩ ሦስት ሁነታዎች አሉ።

| ሁነታ (Mode) | እንዴት ይሰራል (How it works) |
|---|---|
| **በፐርሰንት (Percentage)** | በጅምላ ወጪ ላይ መቶኛ ይጨምራል። በ10 ዶላር የጅምላ ዶሜን ላይ 20% ጭማሪ 12 ዶላር ይሰጣል። |
| **ቋሚ ጭማሪ (Fixed markup)** | ቋሚ የዶላር መጠን ይጨምራል። በ10 ዶላር ዶሜን ላይ 5 ዶላር ጭማሪ 15 ዶላር ይሰጣል። |
| **ቋሚ ዋጋ (Fixed price)** | የጅምላ ወጪን ሙሉ በሙሉ ችላ ይላል። ሁልጊዜ የሚያስገቡትን መጠን ይይዛል። |

### መግቢያ ዋጋ (Introductory pricing) {#introductory-pricing}

የቅናሽ የመጀመሪያ ዓመት ዋጋ ለመስጠት ያንቁ። ከተለመደው **Renewal price** (ከዓመት 2 ወዲያ) ጋር የተለየ **Introductory price** (የዓመት 1 ዋጋ) ያዘጋጁ። ደንበኛው በቼክአውት ወቅት ሁለቱንም ዋጋዎች እንዲያየው ያደርጋል፣ ስለዚህ በታደሰበት ጊዜ ምን እንደሚጠብቅ ያውቃል።

### WHOIS ግላዊነት (WHOIS privacy) {#whois-privacy}

በዚህ ምርት የተመዘገቡ ዶሜኖች WHOIS ግላዊነት ጥበቃ የሚሰጥበትን ሁኔታ ይቆጣጠራል።

| ቅንብር (Setting) | ባህሪ (Behaviour) |
|---|---|
| **የተሰረዘ (Disabled)** | WHOIS ግላዊነት በጭራሽ አይቀርብም ወይም አይበራም። |
| **ሁልጊዜ ይካተታል (Always Included)** | WHOIS ግላዊነት በምዝገባ ጊዜ በነጻ በራስ-ሰር ይበራል። |
| **የደንበኛ ምርጫ (Customer Choice)** | በቼክአውት ወቅት የቼክቦክስ ይታያል። **Privacy price** በየዓመቱ እንዲከፈል ያዘጋጁ፣ ወይም በነጻ ለመስጠት በ$0 ትተውት። |

ለ Namecheap፣ WHOIS ግላዊነት WhoisGuard (ሁልጊዜ ነጻ)ን ይጠቀማል። ለ OpenSRS ደግሞ OpenSRS privacy service (በጅምላ ሊከፈል ይችላል)ን ይጠቀማል።

---

## TLD ማስመጣት እና ማመሳሰል (TLD import and sync) {#tld-import-and-sync}

የዶሜን ምርቶች ከተገናኘው አቅራቢ የሚገኝ የእውነተኛ ጊዜ የጅምላ ዋጋ ያሳያሉ። ይህ እንዲሰራ፣ TLDs መቅዳት አለባቸው።

- **በእጅ ማመሳሰል (Manual sync):** Settings › Domain Seller › Sync TLDs (በአቅራቢ)
- **በራስ-ሰር ማመሳሰል (Automatic sync):** በሁሉም የተዋቀሩ አቅራቢዎች ላይ በየቀኑ በስኬጁል የተደረገ cron job ይሰራል።

ከማመሳሰሉ በኋላ፣ ወደ ማንኛውም የዶሜን ምርት የDomain Settings ታብ በመሄድ፣ የሚገኙ TLDs እና የአሁኑ የጅምላ ዋጋቸውን ለማየት TLD pickerን ይጠቀሙ።

---

## በራስ-ሰር እድሳት (Auto-renewal) {#auto-renewal}

የዶሜን እድሳት ከደንበኛው የአባልነት ሁኔታ ጋር የተያያዘ ነው፡

- የአባልነት ጊዜ ሲታደስ እና ዶሜን ሲገናኝ፣ የዶሜን እድሳት በራስ-ሰር በவரிሰት (queued) ውስጥ ይገባል
- የእድሳት ሙከራዎች የደንበኛው ንቁ የክፍያ መግቢያ (payment gateway) ይጠቀማሉ
- ያልተሳኩ እድሳት በኤክስፖኔንሺያል ባክኦፍ (exponential backoff) በራስ-ሰር ይሞከራሉ።
- ለስኬታማ እድሳት፣ ለውድቀቶች እና ለሚመጡ ጊዜያት የኢሜይል ማሳሰቢያዎች ይላካሉ።

የዶሜን የህይወት ዑደት ክስተቶች የኢሜይል አብነት መለያዎች (Email template IDs):

| ክስተት (Event) | Template ID |
|---|---|
| ዶሜን ተመዝግቧል (Domain registered) | `domain_registered` |
| ዶሜን ታድሷል (Domain renewed) | `domain_renewed` |
| እድሳት አልተሳካም (Renewal failed) | `domain_renewal_failed` |
| ዶሜን በቅርቡ ሊያልቅ ነው (Domain expiring soon) | `domain_expiring_soon` |

---

## አስተዳሚ፡ በእጅ የዶሜን ምዝገባ (Admin: Manual domain registration) {#admin-manual-domain-registration}

ደንበኛ በቼክአውት ሳይሄድ ዶሜን ለመመዝገብ፡

1. ወደ **Network Admin › Ultimate Multisite › Register Domain** ይሂዱ
2. ደንበኛውን ይምረጡ እና የዶሜን ስሙን ያስገቡ
3. የregistrant የእውቂያ ዝርዝሮችን ይሙሉ (ስም፣ አድራሻ፣ ስልክ)
4. **Register** ላይ ይጫኑ

የዶሜን መዝገብ ተፈጥሮ ለደንበኛው አካውንት ይገናኛል።
