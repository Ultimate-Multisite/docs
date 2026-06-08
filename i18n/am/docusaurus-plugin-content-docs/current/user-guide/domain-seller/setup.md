---
title: ዝግጅት እና የአቅራቢ ቅንብር
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# የዶሜን ሻጮች (Domain Seller): መቅረጽ እና የሰሪ (Provider) ቅንብር

የDomain Seller Addon በቅድሚያ የተዘጋጀ የቅንብር አስማሚ (setup wizard) አለው። ይህ አስማሚ የሚያስፈልጉትን እያንዳንዱን እርምጃ ይመራዎታል። ይህ ገጽ የአስማሚውን ሂደት እና በኋላ ላይ ሰሪዎችን (providers) እንዴት ማዋቀር ወይም እንደገና ማዋቀር እንደሚቻል ይዳስሳል።

## የሚያስፈልጉት ነገሮች (Requirements)

- **Multisite Ultimate** v2.4.12 ወይም ከዚያ በላይ፣ በኔትወርክ ደረጃ መفعيل (network-activated) መሆን አለበት።
- **PHP** 7.4+
- ቢያንስ ለአንድ የሚደገፍ ሬጅስትራ (registrar) የAPI መለያዎች (credentials)።

## የመጀመሪያ ጊዜ የቅንብር አስማሚ (First-run setup wizard)

የቅንብር አስማሚው ለመጀመሪያ ጊዜ በኔትወርክ ደረጃ ሲያነቃቁ (network-activate) በራስ-ሰር ይጀምራል። እንዲሁም በማንኛውም ጊዜ ከ **Network Admin › Ultimate Multisite › Domain Seller Setup** ውስጥ ሊገኝ ይችላል።

### ደረጃ 1 — ሰሪን ይምረጡ (Choose a provider)

ከማገናኘት የሚፈልጉትን ሬጅስትራ ይምረጡ። የሚደገፉ አማራጮች የሚከተሉት ናቸው፦

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### ደረጃ 2 — መለያዎችን ያስገቡ (Enter credentials)

እያንዳንዱ ሰሪ የተለያየ የቅንብር መስኮት አለው፦

**OpenSRS** — የተጠቃሚ ስም (Username) እና የግል ቁልፍ (private key) (ከOpenSRS Reseller Control Panel)

**Namecheap** — የተጠቃሚ ስም (Username) እና የAPI ቁልፍ (API key) (ከAccount › Tools › API Access)

**GoDaddy** — የAPI ቁልፍ (API key) እና ሚስጥ (secret) (ከdeveloper.godaddy.com)

**ResellerClub** — የሪሴለር መለያ ቁጥር (Reseller ID) እና የAPI ቁልፍ (API key) (ከResellerClub control panel)

**NameSilo** — የAPI ቁልፍ (API key) (ከnamesilo.com › Account › API Manager)

**Enom** — የሂሳብ መለያ ቁጥር (Account ID) እና የAPI ቶከን (API token)

ወደ አገልግሎት ከመስጠትዎ በፊት፣ በተቻለበት ቦታ ላይ፣ ሰሪው (provider) የፈተና አካባቢን (test environment) ለመፈተን **Sandbox mode**ን ያረጋግጡ።

### ደረጃ 3 — ግንኙነቱን ይፈትሹ (Test the connection)

**Test Connection** የሚለውን ይጫኑ። አስማሚው የክሬዲንሸል እና የግንኙነት ሁኔታን ለማረጋገጥ ቀላል የAPI ጥሪ ይልካል። ከመቀጠልዎ በፊት ማንኛውንም የክሬዲንሸል ችግር ያስተካክሉ።

### ደረጃ 4 — TLDs ማስመጣት (Import TLDs)

ከየተገናኘው ሰሪ ሁሉንም የሚገኙ TLDs እና የጅምላ ዋጋዎችን (wholesale pricing) ለማስገባት **Import TLDs** የሚለውን ይጫኑ። ይህ በዶሜን ምርቶች የሚያገለግል የTLD ዝርዝርን ይሞላል። ትልልቅ የTLD ካታሎግ ባላቸው ሰሪዎች ላይ ማስመጣቱ 30–60 ሰከንዶች ሊወስድ ይችላል።

TLDs በየቀኑ አንድ ጊዜ በየጊዜው በሚሰራል የcron job አማካኝነት በራስ-ሰር ይመሳሰላሉ (re-synced)።

### ደረጃ 5 — የዶሜን ምርት መፍጠር (Create a domain product)

አስማሚው በ10% ጭማሪ (markup) የተዘጋጀ መደበኛ የዶሜን ምርት ይፈጥራል። ይህንን ምርት ወዲያውኑ ማርትዕ ይችላሉ ወይም መዝለል (skip) እና ምርቶችን በ**Ultimate Multisite › Products** ስር በእጅ መፍጠር ይችላሉ።

ሙሉ የምርት ቅንብር መመሪያን ለማግኘት [Domain Products and Pricing](./domain-products) ይመልከቱ።

---

## ሰሪን እንደገና ማዋቀር (Reconfiguring a provider)

ወደ **Network Admin › Ultimate Multisite › Settings › Domain Seller** ይሂዱ (ወይም በፕልጊን ዝርዝር ውስጥ **Settings** የሚለውን ይጫኑ)።

የቅንብር ገጹ የሚከተሉትን ይይዛል፦

- **Enable domain selling** — መላውን ባህሪ (feature) ለማብራት/ማጥፋት ያገለግላል።
- **Default provider** — ለዶሜን ፍለጋዎች እና አዳዲስ ምርቶች የሚያገለግለው ሰሪ።
- **Max TLDs per search** — ደንበኛ ሲፈልግ ስንት TLDs እንደሚፈትሽ፤ ከፍተኛ ዋጋ ያላቸው እሴቶች ብዙ አማራጮችን ያሳያሉ ግን ቀርፋፋ ናቸው።
- **Availability cache duration** — የአመራረት እና የዋጋ ውጤቶችን ለማስቀመጥ (cache) ምን ያህል ጊዜ ነው፤ ዝቅተኛ ዋጋ ያላቸው እሴቶች ይበልጥ ትክክለኛ ግን የAPI ጥሪዎችን ይጨምራሉ።
- **Manage domain products** — ወደ Products ዝርዝር የሚያስቸኩር ፈጣን ሊንክ።
- **Configure providers** — ሰሪዎችን ለመጨመር ወይም እንደገና ለማዋቀር ወደ Integration Wizard ይከፍታል።

### ሁለተኛ ሰሪ መጨመር (Adding a second provider)

**Configure providers** የሚለውን ይጫኑ እና ለአዲሱ ሬጅስትራ አስማሚውን እንደገና ያሂዱ። በአንድ ጊዜ ብዙ ሰሪዎችን ማዋቀር ይችላሉ። እያንዳንዱን የዶሜን ምርት በተወሰነ ሰሪ ላይ መመደብ ይችላሉ፣ ወይም በነባሪው (default) ላይ መተው ይችላሉ።

### TLDs በእጅ መመሳሰል (Syncing TLDs manually)

በቅንብር ገጹ ላይ፣ የቅንብር ሰሪ አጠገብ **Sync TLDs** የሚለውን ይጫኑ የቅርብ ጊዜውን ዋጋ ለማስገባት። ይህ ሰሪው የጅምላ ዋጋዎችን ካዘመነ ወይም አዳዲስ TLDs ከጨመረ በኋላ ጠቃሚ ነው።

---

## መዝገቦች (Logs)

እያንዳንዱ ሰሪ ለራሱ የሎግ ሰርጥ (log channel) ይጽፋል። መዝገቦቹ በ **Network Admin › Ultimate Multisite › Logs** ስር ይታያሉ፦

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | ሁሉም የንጽጽር ሙከራዎች (በስኬት እና በውድቀት) |
| `domain-seller-renewal` | የየጊዜው የንጽጽር ስራ ውጤቶች |
| `domain-seller-opensrs` | ጥሬ የOpenSRS API እንቅስቃሴ |
| `domain-seller-namecheap` | ጥሬ የNamecheap API እንቅስቃሴ |
| `domain-seller-godaddy` | ጥሬ የGoDaddy API እንቅስቃሴ |
| `domain-seller-resellerclub` | ጥሬ የResellerClub API እንቅስቃሴ |
| `domain-seller-namesilo` | ጥሬ የNameSilo API እንቅስቃሴ |
| `domain-seller-enom` | ጥሬ የEnom API እንቅስቃሴ |
