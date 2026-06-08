---
title: የድረገጽ አብነቶች
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# የጣቢያ አብነቶች (Site Templates) (v2)

_**ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው። version 1.x እየተጠቀሙ ከሆነ፣ እባክዎ ይህንን ጽሑፍ ይመልከቱ።**_

በUltimate Multisite የፕሪሚየም ኔትወርክ ስንፈጥር የምንፈልገው ነገር ቢኖር፣ ለደንበኞቻችን ድረ-ገጾችን በሚፈጥሩበት ጊዜ ብዙ አማራጮችን እና ተጣጣፊነትን እየሰጠን፣ በተቻለ መጠን ብዙ ሂደቶችን በራስ-ሰር ማስኬድ ነው። ይህን ሚዛን ለመጠበቅ ቀላል መንገድ የUltimate Multisite Site Templatesን ባህሪ መጠቀም ነው።

## Site Template ምንድነው?

ስሙ እንደሚያመለክተው፣ Site Template ማለት በኔትወርክዎ ውስጥ አዳዲስ ድረ-ገጾችን በሚፈጥሩበት ጊዜ እንደ መሰረት (base) ሊውል የሚችል የተዘጋጀ ድረ-ገጽ (boilerplate site) ነው።

ይህ ማለት መሰረታዊ ድረ-ገጽ መፍጠር፣ የተለያዩ plugins ማብራት፣ ንቁ የሆነ theme መምረጥ እና በፈለጉት መንገድ ማበጀት ይችላሉ። ከዚያም ደንበኛዎ አዲስ አካውንት ሲፈጥር፣ ምንም ትርጉም ባልሰጠው ይዘት ባለው መደበኛ WordPress ድረ-ገጽ ከመቀበል ይልቅ፣ ሁሉም ማበበጅ እና ይዘት ቀድሞ በቦታው ባሉበት የመሰረታዊ ድረ-ገጽ ቅጂ ይቀበላል።

ይህ ድንቅ ይመስላል፣ ግን አዲስ site template እንዴት እፈጥራለሁ? በጣም ቀላል ነው።

## አዲስ Site Template መፍጠር እና ማርትዕ

Site Templates በኔትወርክዎ ውስጥ ያሉ መደበኛ ድረ-ገጾች ናቸው። አዲስ template ለመፍጠር በቀላሉ ወደ **Network Admin > Ultimate Multisite > Sites > Add Site** መሄድ ይችላሉ።

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

ይህ የሞዳል መስኮት (modal window) ይከፍታል፣ እዚያም **Site title, Site Domain/path,** እና **Site type** እንዲያስገቡ ይጠይቃል። በ**Site Type** መውረድ በሚችል ሜዳ (drop-down field) ውስጥ **Site Template** መምረጥዎን ያረጋግጡ።

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

የsite template መግለጫን (description) እንዲሁ ማየት ይችላሉ፦

![Site template description](/img/config/site-template-description.png)

በቅጹ (form) የታችኛው ክፍል ላይ፣ **Copy Site** የሚል መቀያየር (toggle switch) ታያላችሁ። ይህ ደግሞ አዲስ site template ከሌላ የsite template በመነሳት እንዲፈጥሩ ያስችልዎታል፣ ይህም ከባዶ site template ከመፍጠር ይልቅ ጊዜ እንዲቆጥቡ ይረዳዎታል።

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### የSite Template ይዘቶችን ማበጀት

የsite templateዎን ይዘት ለማበጀት፣ በቀላሉ ወደ የዳሽቦርድ ፓነሉ በመሄድ የሚያስፈልጉትን ለውጦች ማድረግ ይችላሉ። አዳዲስ ፖስቶችን፣ ገጾችን መፍጠር፣ plugins ማብራት እና ንቁ የሆነ theme መቀየር ይችላሉ። አልፎ ተርፎም ወደ Customizer በመሄድ ሁሉንም ዓይነት የማበጀት አማራጮችን መቀየር ይችላሉ።

![Site template edit interface](/img/config/site-template-edit.png)

እነዚህ ሁሉ መረጃዎች ደንበኛ አዲስ site template በመጠቀም አዲስ ድረ-ገጽ ሲፈጥር ይገለበጣሉ።

### የላቀ አማራጮች (Advanced Options)

የተወሰነ የኮድ አጠቃቀም እውቀት ካለዎት፣ የSearch and Replace APIን በመጠቀም አዲሱ ድረ-ገጽ ከተፈጠረ በኋላ መረጃዎችን በራስ-ሰር መተካት ይችላሉ። ይህ ለምሳሌ በAbout page ላይ የኩባንያ ስም መተካት፣ በContact page ላይ የኢሜይል አድራሻ መተካት ወዘተ ባሉ ነገሮች 유용 ነው።

### Site Templatesን መጠቀም

እሺ፣ የተለያዩ ዲዛይኖች፣ themes እና ቅንብሮች ባሉ ብዙ Site Templates ፈጥረዋል። አሁን በኔትወርክዎ ውስጥ እንዴት አጋርነት እንዲፈጥሩ ታደርጋላችሁ?

በመሰረቱ፣ አሁን ሊጠቀሙባቸው የሚችሉ ሁለት አቀራረቦች አሉ (በአንድ ጊዜ ሳይሆን):

  * ለእያንዳንዱ Planዎ አንድ Site Template ማያያዝ

**ወይም**

  * ደንበኞች በራሳቸው ጊዜ ሲመዘገቡ site templates እንዲመርጡ መፍቀድ።

#### ሁነኛ 1: Site Template መመደብ (Assign Site Template)

በዚህ ሁነታ፣ ደንበኞች አካውንት ሲፈጥሩ template መምረጥ አይችሉም፣ ይልቁንም እርስዎ ለእያንዳንዱ Plan ምን template ጥቅም ላይ መዋል እንዳለበት ይወስናሉ።

ይህ ለማድረግ፣ ወደ **Ultimate Multisite > Products > Edit** መሄድ ያስፈልግዎታል።

![Edit product to assign site template](/img/config/product-site-templates.png)

ይህ ወደ **Edit Product** ገጽ ይወስድዎታል። በ**Product Options** ክፍል ውስጥ፣ **Site template** የሚል ታብ (tab) አግኝተው ከውርርድ ሜዳ (drop-down field) ውስጥ **Assign Site** **Template** አማራጭ ይምረጡ። ይህ የሚገኙ የsite templates ዝርዝርን ያሳየዎታል እና ለምርቱ ብቻ የተመደበ አንድ site template እንዲመርጡ ያስችልዎታል።

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### ሁነኛ 2: የሚገኙ Site Templates እንዲመርጡ ማድረግ (Choose Available Site Template)

በዚህ ሁነታ፣ ደንበኞች በምዝገባ ሂደት ጊዜ ምርጫ ይሰጣቸዋል። በምርቱ ቅንብሮች ስር የሰጣችሁን የተለያዩ site templates መምረጥ ይችላሉ። በተመረጠው ምርት ስር ሊመርጡ የሚችሉትን site templates ለመገደብ አማራጭ አለዎት። ይህ ለእያንዳንዱ ምርት የተለያዩ የsite templates ስብስቦችን እንዲኖራችሁ ያስችላል፣ ይህም ለከፍተኛ ዋጋ ባለው ምርት የተለያዩ ተግባራትን እና ባህሪያትን ለማጉላት ተስማሚ ነው።

በ**Edit Product** ገጽ ላይ። በ**Product Options** ክፍል ውስጥ፣ **Site template** የሚል ታብ አግኝተው ከውርርድ ሜዳ ውስጥ **Choose Available Site Template** አማራጭ ይምረጡ። ይህ የሚገኙ የsite templates ዝርዝርን ያሳየዎታል እና ሊገኝ የሚፈልጉትን site template እንዲመርጡ ያስችልዎታል። ይህን ማድረግ የሚችሉት የባህሪውን (Behavior) በመምረጥ ነው፦ site template በዝርዝሩ ውስጥ እንዲካተት ከፈለጉ **Available** ይምረጡ። site template እንደ አማራጭ እንዳይታይ ከፈለጉ **Not Available** ይምረጡ። እና ከተዘረዘሩት site templates ውስጥ አንዱ መነሻ (default) እንዲሆን ከፈለጉ **Pre-selected** ይምረጡ።

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### መደበኛ ሁነታ (Default Mode): በCheckout form ላይ የsite template ምርጫ

ሁሉም site templatesዎ በምዝገባ ጊዜ እንዲገኙ ከፈለጉ፣ ወይም እያንዳንዱን የምትፈጥሩበት ምርት ስር site templates መመደብ ወይም መግለጽ ተጨማሪ ስራ እንደማይፈልጉ ከተሰማዎት። በምትኩ site template ምርጫን በ**Checkout Form**ዎ ላይ ማዘጋጀት ይችላሉ። ይህን ለማድረግ፣ ወደ **Ultimate Multisite > Checkout Forms** መሄድ ብቻ ያስፈልግዎታል። ከዚያም በቅንብሩ (form) ላይ **Edit** የሚለውን ይጫኑ።

![Checkout forms list page](/img/config/checkout-forms-list.png)

ይህ ወደ **Edit Checkout Form** ገጽ ይወስድዎታል። **Template Selection** የሚል መስክ አግኝተው በሱ ስር **Edit** የሚለውን ይጫኑ።

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

የሞዳል መስኮት ይከፈታል። በ**Template Sites** መስክ ውስጥ በምዝገባ ጊዜ እንዲገኙ የሚፈልጓቸውን ሁሉንም site templates መምረጥ እና መዘርዘር ይችላሉ። ከዚህ ስትገልጹት የsite templates፣ ተጠቃሚው የትኛውንም ምርት ቢመርጥም ምንም ሳይቀየር ይገኛሉ።

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### የSite Template አማራጮች (Site Template Options)

በUltimate Multisite settings ስር ማብራት ወይም ማጥፋት የሚችሏቸው ሌሎች የsite templates ተግባራት አሉ።

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Template Switching መፍቀድ (Allow Template Switching)

ይህ አማራጭን ማብራት ደንበኞች አካውንት እና site ከተፈጠረ በኋላ በምዝገባ ሂደት ወቅት የመረጡትን template እንዲቀይሩ ያስችላል። ይህ ለደንበኛ እይታ ጠቃሚ ነው፣ ምክንያቱም በኋላ ላይ የመጀመሪያ ምርጫቸው ለተለየ ፍላጎታቸው ምርጥ እንዳልሆነ ከተረዳ፣ template እንዲመርጡ ያስችላቸዋል።

#### ተጠቃሚዎች የራሳቸውን Site template አድርገው እንዲጠቀሙ መፍቀድ (Allow Users to use their Site as templates)

የsubsite ተጠቃሚዎች የራሳቸውን ድረ-ገጽ በመገንባት እና በማበጀት ጊዜ አሳልፈዋል፣ ስለዚህ በኔትወርክዎ ላይ ሌላ subsite ሲፈጥሩ እንደ site template አንዱ ሊገለብጡት ይፈልጉ ይሆናል። ይህ አማራጭ ይህን እንዲያሳኩ ያስችላቸዋል።

#### Template ሲገለበጥ ሚዲያ መቅዳት (Copy Media on Template Duplication)

ይህ አማራጭን መምረጥ የtemplate site ላይ የተ上传 ሚዲያ ወደ አዲስ በተፈጠረው site ይገለበጣል። ይህ በአንዲት Plan ላይ ሊተካ ይችላል።

#### **የSite Templatesን ከ search engines እንዳይሰርጉ መከላከል (Prevent Search Engines from indexing Site Templates)**

በዚህ ጽሑፍ እንደተብራራው የsite templates መሰረታዊ ቢሆኑም የኔትወርክዎ አካል ናቸው፣ ይህም ማለት ለ search engines እንዲገኙ አሁንም ይገኛሉ። ይህ አማራጭ site templates እንዲደበቁ ያስችልዎታል፣ ስለዚህ search engines ሊሰርጉ አይችሉም።

## Site Templatesን በራስ-ሰር መፈለግ እና መተካት (auto search-and-replace) በማስጨመር መሙላት

በUltimate Multisite በጣም ኃይለኛ ባህሪያት አንዱ በምዝገባ ቅጽ ላይ መዘረዝ የጽሑፍ፣ ቀለም እና የመምረጥ መስኮቶችን የመጨመር ችሎታ ነው። ያንን መረጃ ስንሰበስብ፣ በምርጫው የsite template ውስጥ ባሉ የተወሰኑ ክፍሎች ውስጥ ይዘትን ለመሙላት ልንጠቀምበት እንችላለን። ከዚያም አዲሱ site ሲታተም፣ Ultimate Multisite ቦታዎችን (placeholders) በምዝገባ ወቅት በተገባው ትክክለኛ መረጃ ይተካዋል።

ለምሳሌ፣ በምዝገባ ወቅት የend-user የኩባንያ ስም እንዲያገኙ እና የኩባንያውን ስም በhomepage ላይ በራስ-ሰር ማስቀመጥ ከፈለጉ። በtemplate site homepageዎ ላይ፣ ከታች ባለው ምስል ላይ እንደሚታየው ቦታዎችን (placeholders) መጨመር አለብዎት (placeholders በሁለት ኩርባ ብራሴልስ - {{placeholder_name}} - መከበብ አለባቸው)።

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

ከዚያም፣ ያንን መረጃ ለመያዝ በcheckout formዎ ላይ የሚመሳሰል የምዝገባ መስክ መጨመር ይችላሉ፦

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

ደንበኛዎ በምዝገባ ወቅት ያንን መስክ መሙላት ይችላል።

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite ከዚያም ቦታዎችን በደንበኛው ባቀረበው መረጃ በራስ-ሰር ይተካዋል።

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "በቦታዎች የተሞላ template" ችግርን መፍታት

ይህ ሁሉ በጣም ጥሩ ነው፣ ግን የሚያጋጥመን የሚያምራ ችግር አለ፦ አሁን የsite templatesዎ - ደንበኞቻችን ሊጎበኙ የሚችሉበት - ብዙ ትርጉም የማይሰጡ አስቀያሚ ቦታዎች ተሞልተዋል።

ይህንን ለመፍታት፣ ለቦታዎቹ የውሸት ዋጋዎችን (fake values) የማዘጋጀት አማራጭ እናቀርባለን፣ እና ደንበኞች ሲጎበኙ በtemplate sites ላይ ይዘታቸውን ለማፈለግ እና ለመተካት እነዚህን ዋጋዎች እንጠቀማለን።

የtemplate placeholders አርታኢ (editor) ላይ ለመድረስ ወደ **Ultimate Multisite > Settings > Sites** በመሄድ፣ ከዚያም በጎን አሞሌው (sidebar) ላይ **Edit Placeholders** ሊንክን መጫን ይችላሉ።

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

ይህ ወደ placeholders ይዘት አርታኢ (content editor) ይወስድዎታል፣ እዚያም placeholders እና ለእነሱ የሚሆኑ ይዘቶችን መጨመር ይችላሉ።

![Template placeholders content editor](/img/config/settings-sites.png)
