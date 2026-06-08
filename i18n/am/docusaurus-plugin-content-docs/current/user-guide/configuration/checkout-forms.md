---
title: የክፍያ ቅጾች
sidebar_position: 19
_i18n_hash: b7b1bf89a2997f8916c9f3a3a2cb255b
---
# የቼክአውት ቅጾች

የቼክአውት ቅጾች አዳዲስ ደንበኞችን ለመሳብ በሚደረጉ የተለያዩ ሙከራዎች ጊዜ ቀላል እና ተጣጣፊ መንገድ ነው።

Ultimate Multisite 2.0 የቼክአውት ቅጽ አርታኢ (Checkout Form editor) ያቀርባል፤ ይህም የተለያዩ መስኮችን (fields)፣ የሚቀርቡ ምርቶችን (products) እና ሌሎችንም በመጠቀም ቃላተም የፈለጉትን ያህል ቅጾችን እንድትፈጥሩ ያስችልዎታል።

ይህንን ባህሪ ለመጠቀም፣ በግራ በኩል ባለው የቼክአውት ቅጾች (Checkout Forms) ሜኑ ላይ ይሂዱ።

![Checkout Forms list](/img/config/checkout-forms-list.png)

በዚህ ገጽ ላይ የፈጠሯቸውን የቼክአውት ቅጾች በሙሉ ማየት ይችላሉ።

የዝርዝር ሰንጠረዡ (list table) **ሁኔታ (Status)** የሚል ዓምድ ስላለው እያንዳንዱ ቅጽ ለደንበኞች ተገ disponible መሆኑን ማረጋገጥ ይችላሉ።

| Status | Meaning |
|---|---|
| **Active** | ቅጹ በየትኛውም ቦታ shortcode ወይም የንብረት ገጹ (registration page) ከተለጠፈበት ቦታ ሊሠራ ይችላል። |
| **Inactive** | ቅጹ ተቀምጧል ነገር ግን ተበጅቷል። ቅጹን እንደገና እስኪያነሳው ድረስ ደንበኞች ሊጨርሱበት አይችሉም። |

በተለይ የቅጾችን ረቂቅ (draft) ወይም የወቅት (seasonal) ቅጾች ከሚገኙት በሥራ ላይ ካሉ ቅጾች ጋር ሲያቆዩ፣ የሕዝብ ምዝገባ ፍሰት (public registration flow) ከመቀየራቱ በፊት የሁኔታ ዓምድን ይጠቀሙ።

አዲስ ለመፍጠር ከገጹ በላይ ባለው ቦታ ላይ "Add Checkout Form" ብለው ይጫኑ።

ከእነዚህ ሶስት አማራጮች አንዱን እንደ መነሻ ቦታ መምረጥ ይችላሉ፡ single step (አንድ ደረጃ)፣ multi-step (ብዙ ደረጃ) ወይም blank (ባዶ)። ከዚያም፣ ወደ አርታኢ ለመሄድ ይጫኑ።

**single step** ወይም **multi-step**ን እንደ መነሻ ቦታ ሲመርጡ፣ የቅጽ አብነት (form template) አሁን በቅድፋት **Template Selection** መስክን ያካትታል። ይህ መስክ ደንበኞች በምዝገባ ሂደት ውስጥ የትኛውን የጣቢያ አብነት (site template) መምረጥ እንደሚችሉ ያስችላል። ቦታ ላይ ሊተውት ይችላሉ፣ ማስወገድ ይችላሉ፣ ወይም በአርታኢ ውስጥ ካሉ ሌሎች መስኮች ጋር እንደማንኛውም መስክ ቦታውን መቀየር ይችላሉ።

![Checkout Form editor](/img/config/checkout-form-editor.png)

በተለባዕነት፣ ከዚህ በታች ባለው ስሙ ላይ በመጫን ቀድሞ የነበሯቸውን ቅጾች ማርትዕ ወይም መቅዳት ይችላሉ። እዚያም የቅጹን shortcode የመቅዳት ወይም የቅጹን የማጥፋት አማራጮችን ያገኛሉ።

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### የቼክአውት ቅጽ አርታኢ አጠቃላይ እይታ

የቼክአውት ቅጽ አርታኢ የምዝገባ ቅጾችን ለመገንባት ሁሉን አቀፍ መድረክ ይሰጣል። የአርታኢ አቀማመጥ አጠቃላይ እይታ እነሆ፡

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### የቼክአውት ቅጽ ማርትዕ

የተለያዩ ዓላማዎች መሠረት የቼክአውት ቅጾችን መፍጠር ይችላሉ። በዚህ ምሳሌ ላይ የምንሠራው ምዝገባ ቅጽ ነው።

ወደ የቼክአውት ቅጽ አርታኢ ከሄዱ በኋላ፣ ለቅጹ ስም ይስጡት (ይህ ለውስጣዊ ማጣቀሻ ብቻ ጥቅም ላይ ይውላል) እና slug (ለምሳሌ shortcodes ለመፍጠር የሚያገለግል) ይስጡት።

![Checkout Form editor](/img/config/checkout-form-editor.png)

ቅጾች በደረጃዎች (steps) እና መስኮች (fields) የተሠሩ ናቸው። አዲስ የቼክአውት ደረጃ ለመጨመር "Add New Checkout Step" ብለው መጫን ይችላሉ።

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

በሞዳል መስኮት (modal window) የመጀመሪያው ትብሌ ላይ፣ የቅጹን ደረጃ ይዘት ይሙሉ። ID፣ ስም እና መግለጫ ይስጡት። እነዚህ ነገሮች በአብዛኛው ለውስጣዊ አገልግሎት ብቻ ጥቅም ላይ ይውላሉ።

![Checkout form step](/img/config/checkout-form-step.png)

በቀጣይ፣ የደረጃውን ታይነት (visibility) ያዘጋጁ። "Always show" (ሁልጊዜ አሳይ)፣ "Only show for logged in users" (ለግባ የሆኑ ተጠቃሚዎች ብቻ አሳይ) ወይም "Only show for guests" (ለጎብኚዎች ብቻ አሳይ) ውስጥ መምረጥ ይችላሉ።

![Checkout form step](/img/config/checkout-form-step.png)

በመጨረሻም፣ የደረጃውን ስልት (step style) ያዘጋጁ። እነዚህ አማራጮች አማራጭ መስኮች ናቸው።

![Checkout form step](/img/config/checkout-form-step.png)

አሁን፣ በመጀመሪያው ደረጃ ላይ መስኮችን መጨመር ጊዜው ደርሷል። "Add New Field" ብለው በመጫን እና የፈለጉትን የክፍል አይነት በመምረጥ ይጀምሩ።

![Checkout form step with fields](/img/config/checkout-form-step.png)

እያንዳንዱ መስክ መሞላ የሚያስፈልጉ የተለያዩ መለኪያዎች አሉት። ለዚህ የመጀመሪያ ምዝገባ፣ "Username" መስኩን እንመርጣለን።

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

የሚያስፈልጉትን ያህል ደረጃዎችን እና መስኮችን መጨመር ይችላሉ። ደንበኞችዎ እንዲመርጡ ምርቶችን ለማሳየት የPricing Table fieldን ይጠቀሙ። ደንበኞችዎ አብነት እንዲመርጡ ከፈለጉ፣ Template Selection fieldን ይጨምሩ። እና የመሳሰሉት።

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**ማስታወሻ:** username, email, password, site title, site URL, order summary, payment, እና submit button የቼክአውት ቅጽ ለመፍጠር የግድ የሚያስፈልጉ መስኮች ናቸው።_

በየቼክአውት ቅጽዎ ላይ እየሠሩ ሲሆኑ፣ ደንበኞችዎ ቅጹን እንዴት እንደሚመለከቱ ለማየት ሁልጊዜ የPreview (ቅድመ እይታ) ቁልፍን መጠቀም ይችላሉ። እንዲሁም እንደ ቀድሞ ተጠቃሚ ወይም እንደ ጎብኚነት መታየትን መቀያየር ይችላሉ።

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

በመጨረሻም፣ በAdvanced Options ላይ የ"Thank You" ገጽ መልዕክት ማዋቀር፣ የለውጥ መጠንን ለመከታተል ስኒፕበቶች (snippets) መጨመር፣ ለቼክአውት ቅጽዎ የባለቤትነት CSS መጨመር ወይም ወደ የተወሰኑ አገሮች ብቻ መገደብ ይችላሉ።

![Advanced Options](/img/config/checkout-form-advanced.png)

በተጨማሪም፣ በይስ የው కుልም (right column) ላይ ባለው አማራጭ በመቀየር የቼክአውት ቅጽዎን በእጅ ማብራት ወይም ማጥፋት፣ ወይም ቅጹን በቋሚነት ማስወገድ ይችላሉ።

![Active toggle](/img/config/checkout-form-active.png)

ቅጽ ለማጥፋት፣ በቅጽ አክሽንስ (form actions) ውስጥ ያለውን የማጥፋት አማራጭ ይጫኑ፡

![Checkout form delete option](/img/config/checkout-form-delete.png)

የቼክአውት ቅጽዎን ማስቀመጥ አይርሱ!

![Save button](/img/config/checkout-form-save.png)

የቅጹን shortcode ለማግኘት "Generate Shortcode" ብለው በመጫን በሞዳል መስኮት ላይ የሚታየውን ውጤት ይቅዱ።

![Save button with shortcode](/img/config/checkout-form-save.png)

### የዋጋ ሰንጠረዥ መስክ (The Pricing Table Field)

የ**Pricing Table** መስክ ደንበኞች ዕቅድ እንዲመርጡ በቼክአውት ቅጹ ላይ ምርቶቻችሁን ያሳያል። ይህንን መስክ ሲያርትዑ፣ በርካታ አማራጮችን ማዋቀር ይችላሉ፡

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

የዋጋ ሰንጠረዡ በገጽ መጀመሪያ (frontend) ምዝገባ ቅጽ ላይ የሚታየው በዚህ መንገድ ነው፡

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

*   **Products**: ምን ምርቶችን ማሳየት እና በምን ቅደም ተከተል ማሳየት እንደሚቻል ይምረጡ።
*   **Force Different Durations**: ሲበራ፣ ሁሉም ምርቶች በአሁኑ ጊዜ በተመረጠው የክፍያ ጊዜ ተዛማጅ የዋጋ ልዩነት ባይኖራቸውም ይታያሉ። ሲጠፋ (በቅድፋት)፣ በተመረጠው ጊዜ ልዩነት ባልያዙ ምርቶች ይደበቃሉ።
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
*   **Hide when Pre-Selected**: በ URL በኩል ዕቅድ ቀድሞ ከተመረጠ የዋጋ ሰንጠረዡን ይደብቃል። (ለምሳሌ: `/register/premium`)።
*   **Pricing Table Template**: ለዋጋ ሰንጠረዡ የእይታ አብነት (visual template) ይምረጡ (Simple List, Legacy, ወዘተ)።

በቅጹ የሚያስፈልጉ መስኮች ሳይጨርሱ በPricing Table ውስጥ ምርት ካضاف፣ አርታኢው አሁን ማስጠንቀቂያ ያሳያል። ለሥራ ላይ የዋና ምዝገባ ቅጽ ለውጥዎችን ከመለጠፍ ወይም ከመስቀል በፊት የጠፋውን የሚያስፈልገው መስክ ለመጨመር ይህንን ማስጠንቀቂያ ይጠቀሙ።

### የጊዜ ምርጫ መቀያየር መጨመር (Adding a Period Selection Toggle)

በምርቶlarınız ላይ [Price Variations](creating-your-first-subscription-product#price-variations) ካዘጋጁ (ለምሳሌ ወርሃዊ እና ዓመታዊ ዋጋ)፣ በቼክአውት ቅጽዎ ላይ **Period Selection** መስክ መጨመር ይችላሉ። ይህ መስክ ደንበኞች በክፍያ ጊዜዎች መካከል እንዲቀያየሩ የሚያስችል መቀያየር (toggle) ያሳያል፣ እና የዋጋ ሰንጠረዡ በቅጽበት በቅጽበት ይዘምናል።

#### ደረጃ 1: በምርቶlarınız ላይ የዋጋ ልዩነቶችን ማዘጋጀት

የPeriod Selection fieldን ከመጨመርዎ በፊት፣ ምርቶlarınız የዋጋ ልዩነቶች (price variations) መዘጋጀታቸውን ያረጋግጡ። ወደ **Ultimate Multisite > Products** ይሂዱ፣ ምርት ያርትዑ፣ እና አማራጭ የክፍያ ጊዜዎችን ለመጨመር ወደ **Price Variations** ትብሌ ይሂዱ (ለምሳሌ ዓመታዊ በቅናሽ ዋጋ)።

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### ደረጃ 2: የPeriod Selection Fieldን ወደ ቼክአውት ቅጽዎ መጨመር

1.  ወደ **Ultimate Multisite > Checkout Forms** ይሂዱ እና የቼክአውት ቅጽዎን ያርትዑ።

2.  የ**Pricing Table** field ያለበት ደረጃ (step) ዝቅ ይሏና **Add new Field** ብለው ይጫኑ።

3.  በየመስክ አይነት ምርጫ ዳይሎግ ውስጥ፣ **Period Select** ብለው ይጫኑ።

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4.  የጊዜ አማራጮችን ያዘጋጁ። እያንዳንዱ አማራጭ የሚከተሉትን ይፈልጋል፡
    *   **Duration**: ቁጥር (ለምሳሌ: `1`)
    *   **Duration unit**: የጊዜ አይነት (Days, Weeks, Months, ወይም Years)
    *   **Label**: ደንበኞች የሚያዩት ጽሑፍ (ለምሳሌ: "Monthly", "Annual")

5.  በተጨማሪ የጊዜ ምርጫዎች ለመጨመር **+ Add Option** ብለው ይጫኑ። እነዚህ አማራጮች በምርቶlarınız ላይ ባዘጋጁት የዋጋ ልዩነቶች መመሳሰል አለባቸው።

![Period Selection field settings](/img/config/period-selection-field-settings.png)

በተጨማሪም የfield አማራጮችን በቀጥታ ማዋቀር ይችላሉ፡

![Period selection field options](/img/config/period-selection-field-options.png)

6.  **Period Selector Template** (Clean በቅድፋት ነው፣ ይህም ለበይበል ያለ CSS ዝግጁ የሆነ ቀላል የተዋቀረ መምረጥን ያሳያል) ይምረጡ።

7.  **Save Field** ብለው ይጫኑ።

#### ደረጃ 3: መስኩን ከዋጋ ሰንጠረዡ በላይ ማስቀመጥ

ለተጠቃሚው ምርጥ ተሞክሮ፣ የPeriod Selection field በቼክአውት ደረጃዎ ውስጥ ከPricing Table field **በፊት** መታየቱን ያረጋግጡ። በቼክአውት ቅጽ አርታኢ ውስጥ መስኮችን እንደገና ለማደራጀት መጎተት ይችላሉ። በዚህ መንገድ፣ ደንበኞች በመጀመሪያ የክፍያ ጊዜን ይመርጣሉ እና ከዚያ ለዚያ ጊዜ ዋጋዎችን ያያሉ።

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### በገጽ መጀመሪያ (Frontend) እንዴት እንደሚሰራ

በማዋቀርዎ ጊዜ፣ ወደ ምዝገባ ገጽዎ የሚመጡ ደንበኞች የጊዜ መምረጥ መቀያየሩን ከዋጋ ሰንጠረዡ በላይ ያያሉ። የተለያየ የክፍያ ጊዜ ሲጫኑ፡

*   የዋጋ ሰንጠረዡ ወዲያውኑ ለተመረጠው ጊዜ ዋጋዎችን ያሳያል (የገጽ ዳግም መጫን አያስፈልግም)።
*   በPricing Table field ላይ **Force Different Durations** ቢጠፋ፣ ለተመረጠው ጊዜ የዋጋ ልዩነት ባልያዙ ምርቶች ይደበቃሉ።
*   **Force Different Durations** ቢበራ፣ ምርቶች ለተመረጠው ጊዜ ልዩነት ባይኖራቸውም ሁሉም ይታያሉ (የመጀመሪያ ዋጋቸውን ያሳያሉ)።

#### በ URL በኩል የክፍያ ጊዜን ቀድመ መምረጥ

በተጨማሪም ምርት እና የክፍያ ጊዜን በ URL በኩል ቀድመ መምረጥ ይችላሉ። Ultimate Multisite እነዚህን የ URL አብነጣዎች ይደግፋል፡

*   `/register/premium` — "Premium" ምርቱን ብቻ ቀድመ ይመርጣል።
*   `/register/premium/12` — ምርቱን እና የ12 ወር ጊዜን ቀድመ ይመርጣል።
*   `/register/premium/1/year` — ምርቱን እና የ1 ዓመት ጊዜን ቀድመ ይመርጣል።

### የTemplate Selection Field

የ**Template Selection** field ደንበኞች በቼክአውት ወቅት የጣቢያ አብነት እንዲመርጡ ያስችላል። በአሁኑ ጊዜ በUltimate Multisite v2.6.1 ውስጥ በቅድፋት በ**single step** እና **multi-step** የቼክአውት ቅጽ አብነቶች ውስጥ ተካቷል።

#### መስኩን በእጅ መጨመር

ከv2.6.1 በፊት ከተፈጠረ ቅጽ ጋር እየሠሩ ከሆነ፣ ወይም ከባዶ አብነት ከጀመሩ:

1.  ወደ **Ultimate Multisite > Checkout Forms** ይሂዱ እና የቼክአውት ቅጽዎን ያርትዑ።
2.  የጣቢያ ዝርዝሮች የሚሰበሰቡበት ደረጃ ላይ፣ **Add new Field** ብለው ይጫኑ።
3.  ከየfield አይነት ዳይሎግ ውስጥ **Template Selection** ይምረጡ።
4.  የfieldን ያዘጋጁ፡
    *   **Label** — ደንበኞች ከየአብነት መረብ (template grid) በላይ የሚያዩት ርዕስ (ለምሳሌ: "የጣቢያ አብነት ይምረጡ")።
    *   **Required** — ደንበኞች ከመቀጠልዎ በፊት አብነት መምረጥ አለባቸው ወይ?

#### እንዴት እንደሚሰራ

ደንበኛ በቼክአውት ወቅት አብነት ሲመርጥ፣ Ultimate Multisite አዲሱን ጣቢያ ሲፈጥር ይጠቀማዋል። የሚታዩት አብነቶች ከ**Site Templates** ዝርዝርዎ (Ultimate Multisite > Site Templates) ይመጣሉ። ለደንበኞች እንደተገኘ ምልክት የተደረገባቸው አብነቶች ብቻ እዚህ ይታያሉ።

#### መስኩን ማስወገድ

የጣቢያ አብነቶችን አያቀርቡም ከሆነ፣ የTemplate Selection fieldን ከቅጽዎ ያስወግዱ። ደንበኞች ከዚያም በ**Ultimate Multisite > Settings > Site Templates** ስር የተዘጋጀውን ማንኛውንም መደበኛ አብነት ይቀበላሉ።
