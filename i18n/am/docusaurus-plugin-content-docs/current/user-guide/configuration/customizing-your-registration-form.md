---
title: የምዝገባ ቅጹን ማበጀት
sidebar_position: 17
_i18n_hash: b0e3b7cddd099b4260e5cf01fead8685
---
# የመመዝገቢያ ቅጹን ማበጀት

በWordPress መድረክ ላይ የተገነቡ ከሌሎች የSaaS ድረ-ገጾች የተለየ የራሳችሁን ድረ-ገጽ ለመፍጠር፣ Ultimate Multisite በ**Checkout Forms** ባህሪያችን አማካኝነት የመመዝገቢያ እና የመግባት (login) ገጾችን እንዲያበጁ ያስችላችኋል።

አዳዲስ ደንበኞችን ለመሳብ የተለያዩ አቀራረቦችን ለመሞከር ቀላል እና ተጣጣፊ መንገድ ቢሆኑም፣ እነዚህ ቅጾች በአብዛኛው የሚጠቀሙበት ቦታ ግላዊ የሆኑ የመመዝገቢያ ቅጾችን መፍጠር ነው። ይህ ጽሑፍ እንዴት እንደምትችሉ የሚያሳይ ነው።

## የመግባት እና የመመዝገቢያ ገጾች፡

Ultimate Multisite ሲጫን፣ በዋና ድረ-ገጽዎ ላይ በራስ-ሰር የቅጾችን የመግባት እና የመመዝገቢያ ገጾችን ይፈጥራል። እነዚህን መነሻ ገጾች በማንኛውም ጊዜ ወደ **Ultimate Multisite > Settings > Login & Registration** ገጽ በመሄድ መቀየር ይችላሉ።

![Login and Registration settings page](/img/config/settings-general.png)

የመግባት እና የመመዝገቢያ ቅንብሮች ሙሉ እይታ እነሆ፡

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

በ**Login & Registration** ገጽ ላይ ማበጀት የሚችሉትን እያንዳንዱን አማራጭ እንመልከት፡

*   **Enable registration:** ይህ አማራጭ በኔትወርክዎ ላይ የመመዝገቢያ አገልግሎትን ማብቅ ወይም ማጥፋት ይችላል። ከተሰቀለ (toggled off) ከሆነ፣ ደንበኞች ወደ ምርቶቻችሁ መመዝገብ እና መመዘክር አይችሉም።

*   **Enable email verification:** ይህ አማራጭ ከተቀየረ (toggled on)፣ ነፃ ዕቅድ ወይም የሙከራ ጊዜ ያለው ክፍያ ዕቅድ ለሚመዘገቡ ደንበኞች የማረጋገጫ ኢሜይል ይደርሳቸዋል፣ እና ድረ-ገጾቻቸው እንዲፈጠሩ የማረጋገጫ ሊንኩን መጫን ይኖርባቸዋል።

*   **Default registration page:** ይህ የመመዝገቢያው መነሻ ገጽ ነው። ይህ ገጽ በድረ-ገጽዎ ላይ መታተም አለበት እና የመመዝገቢያ ቅጽ (checkout form ተብሎም ይታወቃል) ሊኖረው ይገባል—እዚህ ላይ ደንበኞች ምርቶቻችሁን ይመዘገባሉ። ስንት የመመዝገቢያ ገጾችን እና የቅጾችን መፍጠር እንደሚፈልጉ ሁሉ፣ የቅጾችን shortcode በየመመዝገቢያው ገጽ ላይ ማስቀመጥዎን ብቻ ያስታውሱ፣ ካልሆነ ግን አይታይም።

*   **Use custom login page:** ይህ አማራጭ መነሻው የwp-login.php ገጽ ካልሆነ ሌላ የተበጀ የመግቢያ ገጽ እንድትጠቀሙ ያስችላል። ይህ አማራጭ ከተቀየረ (toggled on)፣ በ**Default login page** አማራጭ (በታች በቀኝ) ላይ የትኛው ገጽ ለመግባት ጥቅም ላይ እንደሚውል መምረጥ ይችላሉ።

*   **Obfuscate the original login url (wp-login.php)** : መጀመሪያ የነበረውን የመግቢያ URL ለመደበቅ ከፈለጉ፣ ይህን አማራጭ ማብራት ይችላሉ። ይህ ብሩት-ፎርስ ጥቃቶችን ለመከላከል ጠቃሚ ነው። ይህ አማራጭ ከተቀየረ (enabled)፣ ተጠቃሚው መጀመሪያውን የwp-login.php ሊንክ ለመድረስ ሲሞክር Ultimate Multisite 404 ስህተት ያሳያል።

*   **Force synchronous site publication:** ደንበኛ በኔትወርክ ላይ ምርት ከተመዘገበ በኋላ፣ አዲሱ የሚጠበቀው (pending) ድረ-ገጽ ወደ እውነተኛ የኔትወርክ ድረ-ገጽ መለወጥ አለበት። የማተም ሂደት በJob Queue አማካኝነት፣ በራስ-ሰር (asynchronously) ይከሰታል። ይህ አማራጭ በማብራት፣ መመዝገቢያው በሚደረግበት ጥያቄ ውስጥ የማተም ሂደት እንዲካተት ያደርጋል።

አሁን፣ ለመግባት እና ለመመዝገብ ሂደት አሁንም ጠቃሚ የሆኑ ሌሎች አማራጮችን እንይ። እነዚህ በዚሁ Login & registration ገጽ ላይ ከ**Other options** በታች ቀጥለዋል።

*   **Default role:** ይህ ደንበኞች የመመዝገቢያ ሂደት በኋላ በድረ-ገጽዎ ላይ የሚያገኙት ሚና (role) ነው።

*   **Enable Jumper:** በአስተዳዳሪው አካባቢ (admin area) የJumper shortcutን ያብራል። Jumper አስተዳዳሪዎች ሁሉንም ሜኑዎች ሳይቃኙ ወደ Ultimate Multisite ስክሪኖች፣ የኔትወርክ ነገሮች እና ሌሎች የሚደገፉ መዳረሻዎች በፍጥነት እንዲዘሉ ያስችላል። ይህ ፈጣን የማሰስ መሳሪያ ከአስተዳዳሪው በይነገጽ መደበቅ እንደሚፈልጉ ከሆነ ያጥፉት።

*   **Add users to the main site as well:** ይህ አማራጭ ከተቀየረ (enabled)፣ ተጠቃሚው የመመዝገቢያ ሂደት በኋላ ወደ ኔትወርክዎ ዋና ድረ-ገጽም ይጨመራል። ይህን አማራጭ ካበራችሁ፣ ተጠቃሚዎቹን በድረ-ገጽዎ ላይ የ**default role** ለማስቀመጥ አማራጭም በታች ይታያል።

*   **Enable multiple accounts:** ተጠቃሚዎች በተመሳሳይ የኢሜይል አድራሻ በኔትወርክዎ ውስጥ ባሉ የተለያዩ ድረ-ገጾች ላይ አካውንት እንዲይዙ ይፈቅዳል። ይህ አማራጭ ካልተቀየረ (off)፣ ደንበኞች በተመሳሳይ የኢሜይል አድራሻ በኔትወርክዎ ላይ በሚሰሩ ሌሎች ድረ-ገጾች ላይ አካውንት መፍጠር አይችሉም።

በመመዝገብ እና በመግባት ሂደት ሊያበጁ የሚችሉ ሁሉም አማራጮች እነዚህ ናቸው! ማስተካከያዎችን ካጠናቀቁ በኋላ ቅንብሮቻችሁን ማስቀመጥን አይርሱ።

## በርካታ የመመዝገቢያ ቅጾችን መጠቀም፡

Ultimate Multisite 2.0 የቅጾች አርታኢ (checkout form editor) አለው። ይህ አርታኢ ስንት ቅጾችን እንደሚፈልጉ፣ በተለያዩ መስኮቶች (fields)፣ በየሚቀርቡ ምርቶች ወዘተ ለመፍጠር ያስችላችኋል።

የመግባት እና የመመዝገቢያ ገጾች ሁለቱም በshortcodes ተሰርቀዋል፡ የመግቢያ ገጽ ላይ **[wu_login_form]** እና የመመዝገቢያ ገጽ ላይ **[wu_checkout]**። የመመዝገቢያ ገጽን በቅጾችን በመገንባት ወይም በመፍጠር በበለጠ ማበጀት ይችላሉ።

ይህንን ባህሪ ለመድረስ፣ በግራ በኩል ባለው የሜኑ ባር ላይ ወደ **Checkout Forms** ይሂዱ።

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

በዚህ ገጽ ላይ የፈጠራችሁን ሁሉንም የቅጾች ዝርዝር ማየት ትችላላችሁ።

አዲስ ለመፍጠር ከፈለጉ፣ በገጹ ላይ ካለው በላይ ባለው **Add Checkout Form** ላይ ብቻ ይጫኑ።

ከእነዚህ ሶስት አማራጮች አንዱን እንደ መነሻ ነጥብ መምረጥ ይችላሉ፡ single step (አንድ ደረጃ)፣ multi-step (ብዙ ደረጃ) ወይም blank (ባዶ)። ከዚያ፣ ወደ **Go to the Editor** ይጫኑ።

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

በተለዋዋጭነት፣ ቀድሞ የነበራችሁን ቅጾች በማንሳት ወይም በመቅዳት (duplicate) በስሙ ከታች ባሉት አማራጮች ማርትዕ ወይም መቅዳት ይችላሉ። እዚያም የቅጹን shortcode የመቅዳት ወይም የቅጹን የማጥፋት አማራጮችን ያገኛሉ።

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

single step ወይም multi-step ከመረጣችሁ፣ የቅጹ አጠቃላይ ደረጃዎች እንዲሰሩ ቀድሞ ተሞልቶ (pre-populated) ይሆናል። ከዚያ፣ ከፈለጋችሁ፣ ተጨማሪ ደረጃዎችን መጨመር ትችላላችሁ።

### የቅጾች አርታኢን ማርትዕ (Editing a Checkout Form):

ከዚህ በፊት እንደተናገርነው፣ ለተለያዩ ዓላማዎች የቅጾችን አርታኢ መፍጠር ይችላሉ። በዚህ ምሳሌ የመመዝገቢያ ቅጽ ላይ እናስሰራለን።

ወደ የቅጾች አርታኢ በመሄድ፣ ለቅጹ ስም (ይህ ለውስጣዊ ማጣቀሻ ብቻ ጥቅም ላይ ይውላል) እና slug (ለምሳሌ shortcodes ለመፍጠር የሚያገለግል) ስጡት።

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

ቅጾች የሚሠሩት በደረጃዎች (steps) እና መስኮቶች (fields) ነው። አዲስ ደረጃ ለመጨመር በ**Add New Checkout Step** ላይ መጫን ይችላሉ።

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

በሞዳል መስኮት የመጀመሪያው ትብሌ (tab) ላይ፣ የቅጹን ደረጃ ይዘት ይሙሉ። መለያ (ID)፣ ስም እና መግለጫ ይስጡት። እነዚህ ነገሮች በአብዛኛው ለውስጣዊ አገልግሎት ብቻ ጥቅም ላይ ይውላሉ።

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

በቀጣይ፣ የደረጃውን ታይነት (visibility) ያዘጋጁ። በ**Always show**፣ **Only show for logged in users** ወይም **Only show for guests** መካከል መምረጥ ይችላሉ።

![Checkout step visibility options](/img/config/checkout-form-step.png)

በመጨረሻም፣ የደረጃውን ስታይል (style) ያዘጋጁ። እነዚህ አማራጮች አማራጭ ናቸው።

![Checkout step style configuration](/img/config/checkout-form-step.png)

አሁን፣ በመጀመሪያ ደረጃችን መስኮቶችን መጨመር ጊዜው ደርሷል። በ**Add New Field** ላይ ብቻ በመጫን እና የፈለጋችሁትን የክፍል አይነት መምረጥ ይችላሉ።

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

እያንዳንዱ መስክ መሙላት ያለበት የተለያየ መለኪያዎች አሉት። ለዚህ የመጀመሪያ ክፍል፣ የ**Username** መስኩን እንመርጣለን።

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

የሚያስፈልጋችሁን ስንት ደረጃዎች እና መስኮቶች መጨመር ትችላላችሁ። ደንበኞቻችሁ እንዲመርጡ ምርቶችን ለማሳየት የPricing Table fieldን ይጠቀሙ። ደንበኞቻችሁ ቴምፕሌት እንዲመርጡ ከፈለጋችሁ፣ የTemplate Selection fieldን ይጨምሩ። እና የመሳሰሉት።

_**ማስታወሻ:** የቅጾችን አርታኢ ከፈጠራችሁ በኋላ ምርት ከፈጠራችሁ፣ ምርቱን በPricing table ክፍል ውስጥ መጨመር ያስፈልጋል። ካልጨመራችሁ፣ ምርቱ በመመዝገቢያ ገጽ ላይ ለደንበኞቻችሁ አይታይም።_

_**ማስታወሻ 2:** username, email, password, site title, site URL, order summary, payment, እና submit button የቅጾችን አርታኢ ለመፍጠር የሚያስፈልጉ የግዴታ መስኮቶች ናቸው።_

በየቅጾች አርታኢዎ ላይ ስትሰሩ፣ ደንበኞቻችሁ ቅጹን እንዴት እንደሚያዩ ለማየት ሁልጊዜ የPreview ቁልፍን መጠቀም ይችላሉ። እንዲሁም እንደ ነባር ተጠቃሚ ወይም ጎብኝ ተራ ይችላል።

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

በመጨረሻም፣ በ**Advanced Options** ላይ የ**Thank You** ገጽ መልዕክት ማዋቀር፣ የለውጥ ክትትል (conversion tracking) ለማስቀመጥ ስኒፕሌቶች መጨመር፣ ለየቅጾችዎ የCSS መጨመር ወይም ወደ የተወሰኑ አገሮች ብቻ መገደብ ይችላሉ።

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

በተጨማሪም፣ በየቅጾች አርታኢው በቀኝ በኩል ባለው አማራጭ ላይ በመጫን የቅጾችን አርታኢ በራስ-ሰር ማብቅ ወይም ማጥፋት፣ ወይም በቋሚነት ማስወገድ ይችላሉ።

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

የቅጾችን አርታኢ ማስቀመጥን አይርሱ!

![Save Checkout Form button](/img/config/checkout-form-save.png)

የቅጹን shortcode ለማግኘት በ**Generate Shortcode** ላይ በመጫን በሞዳል መስኮት ላይ የሚታየውን ውጤት መቅዳት ይችላሉ።

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**ማስታወሻ:** ይህንን shortcode የቅጾችን አርታኢዎ በውስጡ እንዲጨመርበት በመመዝገቢያ ገጽዎ ላይ ማስቀመጥ ያስፈልጋል።_

## በURL Parameters አማካኝነት ምርቶችን እና ቴምፕሌቶችን አስቀድሞ መምረጥ፡

ለمنتجاتዎ የተበጀ የዋጋ ሰንጠረዥ (pricing tables) መፍጠር ከፈለጉ እና ደንበኛዎ ከዋጋ ሰንጠረዥዎ ወይም የቴምፕሌት ገጽዎ ላይ የሚመርጠውን ምርት ወይም ቴምፕሌት በቅጾች አርታኢው አስቀድሞ መምረጥ ከፈለጉ፣ ይህንን ለማድረግ የURL parameters መጠቀም ይችላሉ።

### **ለዕቅዶች (For plans):**

ወደ **Ultimate Multisite > Products > Select a plan** ይሂዱ። በገጹ ላይ በላይኛው ክፍል ላይ **Click to copy Shareable Link** የሚል ቁልፍ ታያላችሁ። ይህንን የተወሰነ ዕቅድ በቅጾች አርታኢዎ ላይ አስቀድሞ ለመምረጥ ልትጠቀሙበት የምትችሉት ሊንክ ነው።

![Product page with shareable link button](/img/config/products-list.png)

ይህ የተጋራ ሊንክ ለ**ዕቅዶች (Plans)** ብቻ ትክክለኛ መሆኑን ልብ ይበሉ። ለፓኬጆች ወይም አገልግሎቶች የተጋራ ሊንክ መጠቀም አይችሉም።

### ለቴምፕሌቶች (For templates):

በቅጾች አርታኢዎ ላይ የድረ-ገጽ ቴምፕሌቶችን አስቀድሞ መምረጥ ከፈለጉ፣ በየመመዝገቢያ ገጽዎ URL ላይ የሚከተለውን parameter መጠቀም ይችላሉ፡ **?template_id=X**። "X" የሚለው በ**የድረ-ገጽ ቴምፕሌት ID ቁጥር** መተካት አለበት። ይህን ቁጥር ለማግኘት ወደ **Ultimate Multisite > Sites** ይሂዱ።

የሚፈልጉትን የድረ-ገጽ ቴምፕሌት በታች ባለው **Manage** ላይ ይጫኑ። የSITE ID ቁጥርን ታያላችሁ። ይህንን ቁጥር ለዚህ የተወሰነ የድረ-ገጽ ቴምፕሌት በቅጾች አርታኢዎ ላይ አስቀድሞ እንዲመረጥ ብቻ ይጠቀሙ። በጉዳያችን ላይ፣ የURL parameter የሚሆነው **?template_id=2** ይሆናል።

![Sites list showing site template ID](/img/config/site-templates-list.png)

የኔትወርክ ድረ-ገጻችን [**www.mynetwork.com**](http://www.mynetwork.com) እና የቅጾችን አርታኢያችን ያለው የመመዝገቢያ ገጽ በ**/register** ገጽ ላይ ይገኛል። ይህ የድረ-ገጽ ቴምፕሌት አስቀድሞ ከተመረጠበት ሙሉ የURL አድራሻ [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** ይሆናል።

እና ከፈለጋችሁ፣ ምርቶችን እና ቴምፕሌቶችን በቅጾች አርታኢዎ ላይ አስቀድሞ መምረጥ ትችላላችሁ። ማድረግ ያለባችሁ ሁሉ የዕቅዱን የተጋራ ሊንክ መቅዳት እና የቴምፕሌት parameterን መጨረሻ ላይ መለጠፍ ብቻ ነው። [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** እንደሚመስል ይሆናል።
