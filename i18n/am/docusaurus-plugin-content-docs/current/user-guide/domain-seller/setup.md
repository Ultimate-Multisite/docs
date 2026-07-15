---
title: ማዋቀር እና የአቅራቢ ውቅር
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# የDomain ሻጭ፦ ማዋቀር እና የአቅራቢ ውቅር

የDomain ሻጭ addon በሚያስፈልጉ ደረጃዎች ሁሉ የሚመራዎትን የማዋቀር wizard ይዞ ይመጣል። ይህ ገጽ የwizard ፍሰትን እና በኋላ አቅራቢዎችን እንዴት ማዋቀር ወይም እንደገና ማዋቀር እንደሚቻል ይሸፍናል።

## መስፈርቶች {#requirements}

- **Multisite Ultimate** v2.4.12 ወይም ከዚያ በላይ፣ በኔትወርክ የነቃ
- **PHP** 7.4+
- ቢያንስ ለአንድ የሚደገፍ ሬጅስትራር የAPI ማረጋገጫ መረጃዎች

## የመጀመሪያ ማስኬጃ ማዋቀር wizard {#first-run-setup-wizard}

plugin-ን በኔትወርክ ለመጀመሪያ ጊዜ ሲያነቁ የማዋቀር wizard በራሱ ይጀምራል። እንዲሁም በማንኛውም ጊዜ ከ**Network Admin › Ultimate Multisite › Domain Seller Setup** ይገኛል።

### ደረጃ 1 — አቅራቢ ይምረጡ {#step-1--choose-a-provider}

ሊያገናኙት የሚፈልጉትን ሬጅስትራር ይምረጡ። የሚደገፉ አማራጮች፦

| አቅራቢ | የDNS አስተዳደር | የWHOIS ግላዊነት |
|---|---|---|
| OpenSRS | አዎ | አዎ |
| Namecheap | አይ | አዎ (WhoisGuard፣ ነፃ) |
| HostAfrica | አዎ | አዎ (የID ጥበቃ) |
| Openprovider | አዎ | አዎ |
| Hostinger | ለተስተናገዱ domains በዋናው Hostinger domain mapping በኩል | አዎ |
| GoDaddy | አይ | አይ |
| ResellerClub | አዎ | አይ |
| NameSilo | አይ | አይ |
| Enom | አዎ | አይ |

### ደረጃ 2 — ማረጋገጫ መረጃዎችን ያስገቡ {#step-2--enter-credentials}

እያንዳንዱ አቅራቢ የተለያዩ የማረጋገጫ መስኮች አሉት፦

**OpenSRS** — የተጠቃሚ ስም እና የግል ቁልፍ (ከOpenSRS Reseller Control Panel)

**Namecheap** — የተጠቃሚ ስም እና API key (ከAccount › Tools › API Access)

**HostAfrica** — የDomains Reseller API endpoint እና ማረጋገጫ መረጃዎች ከHostAfrica የreseller ሞጁል። የተለየ sandbox endpoint በአሁኑ ጊዜ አልተመዘገበም፤ ቀጥታ ምዝገባዎችን ከማስኬድ በፊት በደህና የንባብ-ብቻ ምርመራዎች ይፈትኑ።

**Openprovider** — የAPI መዳረሻ የነቃለት የተጠቃሚ ስም እና የይለፍ ቃል። አማራጭ sandbox ሁነታ የOpenprovider sandbox API ይጠቀማል፣ እና አማራጭ ነባሪ የደንበኛ handle ለምዝገባዎች እንደገና ሊጠቀም ይችላል።

**Hostinger** — ከዋናው Hostinger ውህደት የተጋራው Hostinger hPanel API token። ተመሳሳይ token ዋናውን domain mapping እና የDomain ሻጭ ምዝገባ ክዋኔዎችን ያንቀሳቅሳል።

**GoDaddy** — API key እና secret (ከdeveloper.godaddy.com)

**ResellerClub** — Reseller ID እና API key (ከResellerClub control panel)

**NameSilo** — API key (ከnamesilo.com › Account › API Manager)

**Enom** — Account ID እና API token

ቀጥታ ከመሄድ በፊት በአቅራቢው የሙከራ አካባቢ ለመፈተን በሚገኝበት ቦታ **Sandbox mode** ይምረጡ።

### ደረጃ 3 — ግንኙነቱን ይፈትኑ {#step-3--test-the-connection}

**Test Connection** ይጫኑ። wizard ማረጋገጫ መረጃዎችን እና ግንኙነትን ለማረጋገጥ ቀላል የAPI ጥሪ ይልካል። ከመቀጠልዎ በፊት ማንኛውንም የማረጋገጫ መረጃ ችግኝ ያስተካክሉ።

### ደረጃ 4 — TLDs ያስመጡ {#step-4--import-tlds}

ከተገናኘው አቅራቢ ሁሉንም የሚገኙ TLDs እና የጅምላ ዋጋ ለመሳብ **Import TLDs** ይጫኑ። ይህ በdomain ምርቶች የሚጠቀሙበትን የTLD ዝርዝር ይሞላል። ትልቅ የTLD ካታሎግ ላላቸው አቅራቢዎች ማስመጣቱ 30–60 ሰከንዶች ሊወስድ ይችላል።

TLDs እንዲሁም በተያዘ የcron ስራ በኩል በቀን አንድ ጊዜ በራስ-ሰር እንደገና ይሰምራሉ።

### ደረጃ 5 — የdomain ምርት ይፍጠሩ {#step-5--create-a-domain-product}

wizard 10% ትርፍ ያለው ነባሪ ሁሉን-የሚይዝ የdomain ምርት ይፈጥራል። ይህንን ምርት ወዲያውኑ ማርትዕ ወይም መዝለል እና ምርቶችን በእጅ በ**Ultimate Multisite › Products** ስር መፍጠር ይችላሉ።

ሙሉውን የምርት ውቅር መመሪያ ለማየት [የDomain ምርቶች እና ዋጋ አወጣጥ](./domain-products) ይመልከቱ።

---

## አቅራቢን እንደገና ማዋቀር {#reconfiguring-a-provider}

ወደ **Network Admin › Ultimate Multisite › Settings › Domain Seller** ይሂዱ (ወይም በplugin ዝርዝር ውስጥ **Settings** ይጫኑ)።

የቅንብሮች ገጽ የሚከተሉትን ይዟል፦

- **Enable domain selling** — ሙሉ ባህሪውን ያብሩ/ያጥፉ
- **Default provider** — ለdomain ፍለጋዎች እና አዲስ ምርቶች የሚጠቀም አቅራቢ
- **Max TLDs per search** — ደንበኛ ሲፈልግ ስንት TLDs እንደሚፈተሹ፤ ከፍ ያሉ እሴቶች ተጨማሪ አማራጮችን ያሳያሉ ነገር ግን ዝግ ናቸው
- **Availability cache duration** — የመገኘት እና የዋጋ ውጤቶችን ምን ያህል ጊዜ cache እንደሚደረግ፤ ዝቅተኛ እሴቶች የበለጠ ትክክለኛ ናቸው ነገር ግን የAPI ጥሪዎችን ይጨምራሉ
- **Manage domain products** — ወደ ምርቶች ዝርዝር ፈጣን አገናኝ
- **Configure providers** — አቅራቢዎችን ለመጨመር ወይም እንደገና ለማዋቀር Integration Wizard ይከፍታል

### ሁለተኛ አቅራቢ መጨመር {#adding-a-second-provider}

**Configure providers** ይጫኑ እና ለአዲሱ ሬጅስትራር wizard-ን እንደገና ያስኬዱ። ብዙ አቅራቢዎችን በአንድ ጊዜ ማዋቀር ይችላሉ። እያንዳንዱን የdomain ምርት ለተወሰነ አቅራቢ ይመድቡ፣ ወይም በነባሪው ላይ ይተዉት።

### TLDs በእጅ ማሰምራት {#syncing-tlds-manually}

በቅንብሮች ገጽ ውስጥ የቅርብ ጊዜ ዋጋን ለመሳብ ከማንኛውም የተዋቀረ አቅራቢ አጠገብ **Sync TLDs** ይጫኑ። ይህ አንድ አቅራቢ የጅምላ ዋጋን ካዘመነ ወይም አዲስ TLDs ካከለ በኋላ ጠቃሚ ነው።

---

## መዝገቦች {#logs}

እያንዳንዱ አቅራቢ ወደ የራሱ የመዝገብ ቻናል ይጽፋል። መዝገቦች በ**Network Admin › Ultimate Multisite › Logs** ስር ሊታዩ ይችላሉ፦

| የመዝገብ ቻናል | ይዘቶች |
|---|---|
| `domain-seller-registration` | ሁሉም የምዝገባ ሙከራዎች (ስኬት እና ውድቀት) |
| `domain-seller-renewal` | የእድሳት ስራ ውጤቶች |
| `domain-seller-opensrs` | ጥሬ የOpenSRS API እንቅስቃሴ |
| `domain-seller-namecheap` | ጥሬ የNamecheap API እንቅስቃሴ |
| `domain-seller-hostafrica` | ጥሬ የHostAfrica API እንቅስቃሴ |
| `domain-seller-openprovider` | ጥሬ የOpenprovider API እንቅስቃሴ |
| `domain-seller-hostinger` | ጥሬ የHostinger API እንቅስቃሴ |
| `domain-seller-godaddy` | ጥሬ የGoDaddy API እንቅስቃሴ |
| `domain-seller-resellerclub` | ጥሬ የResellerClub API እንቅስቃሴ |
| `domain-seller-namesilo` | ጥሬ የNameSilo API እንቅስቃሴ |
| `domain-seller-enom` | ጥሬ የEnom API እንቅስቃሴ |

---

## የአቅራቢ ችሎታ ማስታወሻዎች {#provider-capability-notes}

ሁሉም የሬጅስትራር API ተመሳሳይ ክዋኔዎችን አያቀርቡም። addon የማይደገፉ ክዋኔዎችን በጸጥታ ከመውደቅ ይልቅ ለadmin ግልጽ የሆኑ ስህተቶችን ያሳያል።

- **HostAfrica** ፍለጋ፣ TLD/የዋጋ ማመሳሰል፣ ምዝገባ፣ እድሳት፣ ዝውውር፣ የnameserver ዝማኔዎች፣ DNS መዝገቦች፣ EPP ኮዶች፣ የregistrar ቁልፍ፣ እና ID ጥበቃን ጨምሮ በጣም ሰፊውን የቀጥታ የreseller የሥራ ፍሰት ይደግፋል።
- **Openprovider** በreseller ዋጋ የተመዘነ TLD ማመሳሰል፣ ምዝገባ፣ እድሳት፣ ዝውውሮች፣ የnameserver ዝማኔዎች፣ DNS ዞኖች፣ EPP ኮዶች፣ የregistrar ቁልፍ፣ እና WHOIS ግላዊነትን ይደግፋል። addon በራስ-ሰር የሚያድሰውን አጭር ጊዜ የሚቆይ bearer token በመጠቀም ማረጋገጫ ያደርጋል።
- **Hostinger** በተጋራ hPanel API token በኩል የመገኘት ፍለጋ፣ ምዝገባ፣ የportfolio ፍለጋ፣ የnameserver ዝማኔዎች፣ የregistrar ቁልፍ፣ እና WHOIS ግላዊነትን ይደግፋል። የHostinger የሕዝብ Domains API የreseller/wholesale ዋጋን፣ ወደ ውስጥ ዝውውርን፣ ግልጽ እድሳትን፣ ወይም የEPP-code ማግኛን አያቀርብም፤ እድሳቶች በራስ-እድሳት ብቻ ናቸው።
