---
title: የግብር አያያዝ
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# የግብር አያያዝ

Ultimate Multisite በዋናው plugin ውስጥ የግብር መሰብሰቢያ ሞጁል ስላለው፣ በፕላንዎ፣ በፓኬጅዎ እና በሰርቪስዎ ላይ የሽያጭ ግብር (sales taxes) መሰብሰብ ከፈለጉ፣ ምንም ተጨማሪ add-on መጫን ሳያስፈልግዎ በቀላሉ ማድረግ ይችላሉ።

በአውሮፓ የሚገኙ ኩባንያዎችን ስንመለከት፣ የVAT (የተጨመረ ቀጥተኛ ግብር) ተገዢነትን በተሻለ ሁኔታ ለመደገፍ የሚያስችሉ መሳሪያዎችን እና ባህሪያትን የሚያጨምር **add-on** እናቀርባለን።

Ultimate Multisite በኩል ለገበያ ባልሆነ አካል በኩል ግብሮችን አይሰበስብም ወይም አያስተላልፍም። እኛ የምናደርገው በግብይቱ ጊዜ ተገቢውን ግብር እንድትሰበስብ ብቻ መርዳት ነው። **ግብርን በራስዎ መክፈል አለብዎት።**

## የግብር መሰብሰብን ማብቃት

የግብር መሰብሰብ በቅድፋት (default) አይበቃም። ለማብቃት፣ ወደ **Ultimate Multisite > Settings > Taxes** በመሄድ እና Enable Taxes የሚለውን ማዘጋጀት (toggle) መጫን አለብዎት።

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

የግብር ቅንብሮች ሙሉ እይታ እነሆ፦

![Tax settings full page](/img/config/settings-taxes-full.png)

የግብር ቅንብሮችን ለግለሰብ ምርቶችም ማየት ይችላሉ፦

![Tax settings for products](/img/config/settings-taxes.png)

### በግብር ያልተካተተ vs. በግብር የተካተተ

በቅድፋት፣ ሁሉም የምርት ዋጋዎች በግብር ያልተካተቱ ናቸው። ይህ ማለት ግብሮች በምርት ዋጋ ውስጥ **አይካተቱም** ማለት ነው። አንድ ደንበኛ በየግዢው ላይ ግብር መክፈል እንዳለበት እናገኘዋለን፣ ግብሮችን ከጠቅላላው ዋጋ **በላይ** እናስቀምጣለን።

ግብሮች በምርት ዋጋዎ ውስጥ እንዲካተቱ ከፈለጉ፣ **Inclusive Tax** የሚለውን ቅንብር በማብቃት ይህንን ማድረግ ይችላሉ።

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

የቀየሩትን ቅንብሮች ማስቀመጥ (save) አይርሱ።

###

## የግብር መጠኖችን መፍጠር

የግብር መሰብሰብን ከaktyivate ካደረጉ በኋላ፣ በግብር መጠኖቻችን አርታኢ (tax rates editor) በመጠቀም ለተለያዩ ቦታዎች የግብር መጠኖችን መፍጠር ያስፈልግዎታል።

በየግብር ቅንብሮች ገጽ በኩል ባለው የጎን አሞሌ (sidebar) ላይ ባለው **Manage Tax Rates** ቁልፍ በመጫን አርታኢውን መድረስ ይችላሉ።

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

በየግብር መጠኖች አርታኢ ገጽ ላይ፣ በ**Add new Row** ቁልፍ በመጫን አዳዲስ የግብር መጠኖችን መጨመር ይችላሉ።

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

እያንዳንዱን የግብር መጠን **ርዕስ** (በደረሰኝ ላይ ጥቅም ላይ ይውላል) መስጠት ያስፈልግዎታል። ከዚያም ይህ ግብር የሚሰበሰብበትን **ሀገር** (አስፈላጊ ነው)፣ **ክልል** እና **ከተማ** (ሁለቱም አማራጭ ናቸው) መምረጥ ይችላሉ። በመጨረሻም፣ **በፐርሰንት የግብር መጠን** ይጨምሩ።

### የግብር ምድቦች (Tax Categories)

የተለያዩ የግብር መጠኖችን ለመጨመር በርካታ የግብር ምድቦችን መፍጠር ይችላሉ።

ለመፍጠር ይጫኑ **Add new Tax Category**፣ ከዚያ የምድብዎን ስም ይጻፉ እና **Create** ይጫኑ።

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

ምድቦችን ለማየት፣ **Switch** የሚለውን ይጫኑ እና አዳዲስ ግብሮችን ሊጨምሩበት የሚፈልጉትን ምድብ ይምረጡ።

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

ለተወሰነ ምርት የግብር ምድብ ለማስቀመጥ፣ ወደ **Product edit page** በመሄድ እና ከዚያ ወደ Taxes ታብ መሄድ ይችላሉ።

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

በዚያው ስክሪን ላይ፣ Ultimate Multisite በዚያ በተሰጠው ምርት ግብር አለመሰብሰብ እንዳለበት ለማሳወቅ **Is Taxable?** የሚለውን ማዘጋጀት (toggle) ማጥፋት ይችላሉ።

## የአውሮፓ VAT ድጋፍ

ከዚህ በፊት እንደተጠቀሰው፣ በአውሮፓ VAT ደንቦች ምክንያት ተጨማሪ መስፈርቶች ላላቸው በEU የሚገኙ ደንበኞች የሚሆን add-on አለን።

የእኛ የVAT መሳሪያዎች በሚከተሉት ሁለት አስፈላጊ ነገሮች ይረዳሉ፦

*   የEU የVAT መጠኖችን በቀላሉ መጫን፤
*   የVAT ቁጥር መሰብሰብ እና ማረጋገጥ - እንዲሁም ለVAT ነፃ አካላት (እንደ ትክክለኛ የVAT ቁጥር ያላቸው ኩባንያዎች) የኋላ ክፍያ (reverse charging)።

ይህንን add-on ለመጫን፣ ወደ **Ultimate Multisite > Settings** በመሄድ ከዚያም በጎን አሞሌ ላይ ባለው **Check our Add-ons** ሊንክ ላይ መጫን ይችላሉ።

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

ወደ የadd-ons ገጻችን ይላካሉ። እዚያም **Ultimate Multisite VAT add-on** መፈለግ እና መጫን ይችላሉ።

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

ከዚያም፣ ወደ **Network Admin > Plugins** በመሄድ ያንን add-on በሁሉም የኔትወርክ ደረጃ ያንቁ።

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

ወደ **Tax Settings tab** ከተመለሱ፣ አዳዲስ አማራጮች ታይ ይሆናል። አዲሱን የVAT መሳሪያ ለማብቃት **Enable VAT Support** የሚለውን አማራጭ ያዘጋጁ (toggle)። የቅንብሮችዎን ማስቀመጥ (save) አይርሱ!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### የVAT የግብር መጠኖችን መሳብ (Pulling)

የእኛ ውህደት (integration) የሚጨምረው መሳሪያዎች አንዱ ለEU አባል ሀገራት የግብር መጠኖችን የመጫን ችሎታ ነው። ይህን ማድረግ የሚቻለው የEU VAT ድጋፍን ከaktyivate ካደረጉ በኋላ የግብር መጠኖች አርታኢ ገጽ በመጎብኘት ነው።

በገጹ ግርጌ፣ የVAT የመሳብ አማራጮችን ያያሉ። የጥቅም አይነት (rate type) በመምረጥ እና **Update EU VAT Rates** የሚለውን ቁልፍ በመጫን፣ የየEU አባል ሀገር የግብር መጠኖችን በራስ-ሰር የሚሞላውን ሰንጠረዥ ይጎትታል። ከዚያም፣ ማስቀመጥ (save) ብቻ ያስፈልግዎታል።

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

ከመሳባቸው በኋላ እሴቶቹን ማርትዕ (edit) ይችላሉ። ይህን ለማድረግ፣ የሚያስፈልግዎትን የሰንጠረዥ መስመር ብቻ አርትዕ ያድርጉ እና አዲሱን እሴቶች ለማስቀመጥ ይጫኑ።

### የVAT ማረጋገጫ (VAT Validation)

የVAT ድጋፍ ሲበቃ፣ Ultimate Multisite ከየሂሳብ አድራሻ (billing address) መስክ በታች በቼክአውት ቅጽ ላይ ተጨማሪ መስክ ይጨምራል። ይህ መስክ ለEU የሚገኙ ደንበኞች ብቻ ይታያል።

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite ከዚያ የVAT ቁጥሩን ያረጋግጣል (validate)። እና ትክክለኛ ከሆነ፣ የኋላ ክፍያ ዘዴ (reverse charge mechanism) ይተገበራል እና የግብር መጠኑ በዚያ ትዕዛዝ ላይ ወደ 0% ይቀመጣል።
