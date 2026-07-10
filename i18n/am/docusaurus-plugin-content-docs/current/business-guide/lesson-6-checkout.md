---
title: ትምህርት 6፡ የመመዝገቢያ ተሞክሮ
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# ትምህርት 6፡ የመመዝገቢያ ልምድ {#lesson-6-the-signup-experience}

የክፍያ ሂደት (checkout flow) ፍላጎት ወደ ገቢ የሚቀየረውበት ቦታ ነው። ግራ የሚያጋባ ወይም አጠቃላይ የሆነ የመመዝገቢያ ሂደት ደንበኞችን ያሳጣል። የልዩ ዘርፍ (niche-specific) የሆነ፣ የደንበኞቹን ቋንቋ የሚናገር እና ቀላል የሚሰማቸው ሂደት ደንበኞችን ወደ ደጋፊዎችነት ይለውጣል።

## የት ቆምን ነበር {#where-we-left-off}

FitSite ቀድሞውኑ ቴምፕሌቶች እና ዕቅዶች ተዘጋጅተዋል። አሁን ደግሞ የጂም ባለቤቶችን ወደ ክፍያ የሚከፍሉ ደንበኞች የሚቀይረው የመመዝገቢያ እና የክፍያ ልምድን እንገነባዋለን።

## የመመዝገቢያ ሂደቱን መረዳት {#understanding-the-registration-flow}

የUltimate Multisite የክፍያ ቅጾች ሙሉ በሙሉ ሊበጁ የሚችሉ ባለ ብዙ ደረጃ ቅጾች ናቸው። ለFitSite ደግሞ የሚከተሉትን የሚያከናውን ሂደት እንፈልጋለን፦

1. ለየጤና ስቱዲዮ ንግዶች የተሰራ ስሜት እንዲሰጥ
2. የሚያስፈልገውን ብቻ እንዲሰበስብ
3. ደንበኛው በተቻለ ፍጥነት ወደሚሰራ ድረ-ገጽ እንዲደርስ

ሙሉ ቴክኒካዊ ማጣቀሻ ለማግኘት [የመመዝገቢያ ሂደቱን](/user-guide/configuration/the-registration-flow) ይመልከቱ።

## የFitSite የክፍያ ዲዛይን {#designing-the-fitsite-checkout}

ወደ **Ultimate Multisite > Checkout Forms** ይሂዱ እና አዲስ ቅጽ ይፍጠሩ።

### ደረጃ 1፡ ዕቅድ መምረጥ (Plan Selection) {#step-1-plan-selection}

የየጤና ስቱዲዮ ባለቤት በመጀመሪያ የሚያየው ነገር ዕቅዶቹ መሆን አለባቸው፣ እና እነዚህም በሚረዱት ቋንቋ መቅረብ አለባቸው።

- **Pricing Table** field ይጨምሩ
- ሁሉንም የFitSite ዕቅዶች እንዲያሳይ ያቅዱት
- በትምህርት 5 የጻፉት የዕቅድ መግለጫዎች እዚህ ይታያሉ — እነዚህ ቴክኒካዊ ባህሪያት ሳይሆኑ የየጤና ንግድ ፍላጎቶችን የሚያነቱ መሆናቸውን ያረጋግጡ።

:::tip ልዩ ዘርፍ ቋንቋ አስፈላጊ ነው
"1 GB ማከማቻ" ለጂም ባለቤት ምንም ማለት አይደለም። "ለሙያዊ የየጤና ስቱዲዮ ድረ-ገጽ የሚያስፈልግዎ ሁሉ" ግን ሁሉንም ነገር ማለት ነው። የዕቅድ መግለጫዎችን በደንበኛዎ ቋንቋ ይጻፉ።
:::

### ደረጃ 2፡ ቴምፕሌት መምረጥ (Template Selection) {#step-2-template-selection}

ዕቅድ ከተመረጠ በኋላ፣ ደንበኛው የጀማሪ ቴምፕሌቱን ይመርጣል።

- **Template Selection** field ይጨምሩ
- የሚገኙት ቴምፕሌቶች ደንበኛው የመረጠውን ዕቅድ መሰረት አድርገው ይጣተቃሉ (በትምህርት 5 ተዋቅሯል)
- እያንዳንዱ ቴምፕሌት የየጤና ስቱዲዮን የሚያሳይ ቅድመ እይታ ምስል ሊኖረው ይገባል።

### ደረጃ 3፡ አካውንት መፍጠር (Account Creation) {#step-3-account-creation}

ይህንን አነስተኛ ያድርጉት። የሚከተሉትን ብቻ ይሰብስቡ፦

- የኢሜል አድራሻ
- የይለፍ ቃል
- የስቱዲዮ/የንግድ ስም (ይህ የድረ-ገጹ ስም ይሆናል)

በመመዝገቢያ ጊዜ የማያስፈልጉዎትን መረጃ አይጠይቁ። እያንዳንዱ ተጨማሪ field የሽግግር መጠንን ይቀንሳል።

### ደረጃ 4፡ የድረ-ገጽ ዝግጅት (Site Setup) {#step-4-site-setup}

- **Site title**: ከደረጃ 3 በተገባው የስቱዲዮ ስም አስቀድሞ ይሙሉት (Pre-fill)
- **Site URL**: ከየስቱዲዮ ስም በራስ-ሰር ይፍጠራል (ለምሳሌ፣ `ironworks.fitsite.com`)

### ደረጃ 5፡ ክፍያ (Payment) {#step-5-payment}

- **Payment** field ይጨምሩ
- የክፍያ መግቢያ በርዎን (payment gateway) ያቅዱት ([Stripe](/user-guide/payment-gateways/stripe) ለደንበኝነት ክፍያ (subscription billing) ይመከራል)
- በትምህርት 5 የትዕዛዝ ጭማሪ (order bumps) ከፈጠሩ፣ ከክፍያ ደረጃ በፊት **Order Bump** field ይጨምሩ።

### ደረጃ 6፡ ማረጋገጫ (Confirmation) {#step-6-confirmation}

- የማረጋገጫ መልዕክቱን በየጤና ስቱዲዮ ቋንቋ ያበጁት።
- ምሳሌ፡ "የየጤና ስቱዲዮ ድረ-ገጽዎ እየተሰራ ነው። በጥቂት ሰከንዶች ውስጥ ወደ አዲሱ ድረ-ገጽዎ ይመራሉ።"

## የጊዜ ክፍተት መምረጥ መቀያየር (Period Selection Toggle) መጨመር {#adding-a-period-selection-toggle}

በዕቅዶችዎ ውስጥ የዋጋ ልዩነቶችን (ወርሃዊ বনাম ዓመታዊ) ከሰሩ፣ ደንበኞች በክፍያ ጊዜዎች መካከል እንዲቀያየሩ የሚያስችል **Period Selection** field ወደ የክፍያ ቅጹ ይጨምሩ። መመሪያዎችን ለማግኘት [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) ይመልከቱ።

## ክፍያ ማዋቀር (Configuring Payment) {#configuring-payment}

የክፍያ መግቢያ በር ገና ካልሰሩ:

1. ወደ **Ultimate Multisite > Settings > Payment Gateways** ይሂዱ።
2. [የStripe ማዋቀር መመሪያ](/user-guide/payment-gateways/stripe) ወይም የሚመርጡትን መግቢያ በር ይከተሉ።
3. ሙሉ የክፍያ ሂደቱን በየሙከራ ክፍያ (test payment) ይፈትኑ።

ገንዘቦች ወደ አካውንትዎ እንዴት እንደሚፈስ ለማወቅ [Getting Paid](/user-guide/payment-gateways/getting-paid) ይመልከቱ።

## ሂደቱን መፈተሽ (Testing the Flow) {#testing-the-flow}

ከቀጠሉ በፊት፣ ሙሉ የሙከራ መመዝገቢያ ያጠናቅቁ፦

1. የክፍያ ቅጹን በግል/በማይታወቅ (incognito/private) ብራውዘር መስኮት ይክፈቱ።
2. ዕቅድ ይምረጡ።
3. ቴምፕሌት ይምረጡ።
4. አካውንት ይፍጠሩ።
5. ክፍያውን ያጠናቅቁ (የሙከራ ሁነታን ይጠቀሙ)።
6. ድረ-ገጹ በተገቢው ቴምፕሌት መፈጠሩን ያረጋግጡ።

የሚከተሉትን ያረጋግጡ፦

- [ ] የዕቅድ መግለጫዎች ግልጽ እና ለልዩ ዘርፉ የተበጁ መሆናቸው
- [ ] የቴምፕሌት ቅድመ እይታዎች ለየጤና ተስማሚ ዲዛይኖችን ማሳየታቸው
- [ ] የድረ-ገጹ URL ከየስቱዲዮ ስም በትክክል መፈጠሩ
- [ ] ክፍያው በተሳካ ሁኔታ መከናወኑ
- [ ] ደንበኛው በተመረጠው ቴምፕሌት ላይ በሚሰራ ድረ-ገጽ መድረሱ
- [ ] የማረጋገጫ ኢሜይሎች የየጤና ስቱዲዮ ቋንቋን መጠቀም

## የFitSite ኔትወርክ እስካሁን {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## በዚህ ትምህርት የሠራነው {#what-we-built-this-lesson}

- ለየጤና ስቱዲዮ ባለቤቶች የተበጀ **ባለ ብዙ ደረጃ የክፍያ ቅጽ**
- በመመዝገቢያ ሂደት ውስጥ በየዘርፉ የተበጀ ቋንቋ
- **አነስተኛ ግጭት** — አስፈላጊ የሆኑ fields ብቻ፣ ወደሚሰራ ድረ-ገጽ ፈጣን መንገድ
- በሙከራ ማረጋገጫ የተደገፈ **የክፍያ ውህደት**
- ከዕቅድ ምርጫ እስከ የሚሰራ ድረ-ገጽ ድረስ የተፈተነ **ከመጀመሪያ እስከ መጨረሻ ሂደት**

---

**ቀጣይ:** [ትምህርት 7፡ የእራስዎ ማድረግ (Making It Yours)](lesson-7-branding) — መድረኩን በራሱ ስም (white-label) እና FitSiteን እንደ ብራንድ መመሥረት።
