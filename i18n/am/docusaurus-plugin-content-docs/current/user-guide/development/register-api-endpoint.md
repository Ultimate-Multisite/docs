---
title: API Endpointን መመዝገብ
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# የUltimate Multisite መመዝገቢያ API endpoint

በዚህ ትምህርት፣ በZapier እንዴት እንደሚሰራ በመጠቀም በአዲስ ደንበኛዎ (customer) ወደ ኔትዎ (network) ሙሉ የመመዝገቢያ ሂደት (onboarding process) የሚፈጥሩበትን የUltimate Multisite /register API endpoint አጠቃቀም ይማራሉ።

ይህ endpoint የPOST methodን ይጠቀማል እና በ _**https://yoursite.com/wp-json/wu/v2/register**_ የሚለው URL ይጠራል። በዚህ ጥሪ ውስጥ፣ በኔትዎ ውስጥ 4 ሂደቶች ይከናወናሉ፦

*   አዲስ የWordPress ተጠቃሚ ወይም በየተጠቃሚ መለያ ቁጥር (user ID) የሚታወቅ ተጠቃሚ ይፈጠራል።

*   አዲስ የUltimate Multisite ደንበኛ ወይም በየደንበኛ መለያ ቁጥር (customer ID) የሚታወቅ ደንበኛ ይፈጠራል።

*   በWordPress ኔትዎ ላይ አዲስ ድረ-ገጽ (site) ይፈጠራል።

*   በመጨረሻም፣ አዲስ የUltimate Multisite አባልነት (Membership) ይፈጠራል።

ይህንን ሂደት ለማከናወን፣ የAPI መለያዎችዎ (API credentials) ያስፈልጉዎታል። ለማግኘት፣ ወደ የኔትዎ አስተዳዳሪ ፓነል (network admin panel) ይሂዱ፣ ወደ **Ultimate Multisite > Settings** > **API & Webhooks** ይጓዙ፣ እና በAPI Settings ክፍል ውስጥ ይፈልጉ።

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

የAPI ቅንብሮች ሙሉ እይታ እነሆ፦

![API settings full page](/img/config/settings-api-full.png)

**Enable API** የሚለውን ይምረጡ እና የAPI መለያዎችዎን ያግኙ።

አሁን፣ endpointን እንቃኝ እና ከዚያ በZapier ውስጥ የመመዝገቢያ እርምጃ (registration action) እንፈጥራለን።

## የendpoint የሰውነት መለኪያዎች (Endpoint body parameters) {#endpoint-body-parameters}

ወደ endpoint ምን ያህል ዝቅተኛ መረጃ መላክ እንዳለብን አጠቃላይ እይታ እንስጥ። በዚህ ጽሑፍ መጨረሻ ላይ ሙሉ ጥሪውን ያገኛሉ።

### ደንበኛ (Customer) {#customer}

ይህም ተጠቃሚውን (User) እና የUltimate Multisite ደንበኛን (Customer) የመፍጠር ሂደት የሚያስፈልገው መረጃ ነው፦

"customer_id" : integer

በኔትዎ ውስጥ የፈጠሩትን የደንበኛ መለያ ቁጥር (customer ID) መላክ ይቻላል። ካልተላከ፣ ከዚህ በታች ያለው መረጃ አዲስ ደንበኛ እና አዲስ የWordPress ተጠቃሚ ለመፍጠር ጥቅም ላይ ይውላል። የተጠቃሚው መለያ ቁጥር (user ID) እንዲሁ በተመሳሳይ መንገድ ሊላክ ይችላል።

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **አባልነት (Membership)** {#membership}

በዚህ object ውስጥ የሚያስፈልገን ብቸኛው መረጃ የአባልነት ሁኔታ (Membership Status) ብቻ ነው።

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" ከሚሉት አንዱ },

### **ምርቶች (Products)** {#products}

ምርቶች (Products) ከ1 ወይም ከዚያ በላይ የproduct ID በarray ይሰጣሉ። ጥንቃቄ ያድርጉ፣ ይህ endpoint ምርቶችን አይፈጥርም። ስለ ምርት የመፍጠር endpoint በተሻለ ለመረዳት የUltimate Multisite ሰነዶችን ይመልከቱ።

**"products" : [1,2],**

### ክፍያ (Payment) {#payment}

በአባልነት (Membership) ላይ እንደነበረው፣ ሁኔታው (status) ብቻ ያስፈልገናል።

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" ከሚሉት አንዱ },**

### ድረ-ገጽ (Site) {#site}

እና የሰውነት ክፍሉን ለመዝጋት፣ የድረ-ገጹን URL እና ርዕስ (Title)፣ ሁለቱም በSite object ውስጥ ያስፈልጉናል።

**"site" : { "site_url" : "string", "site_title" : "string" }**

የregister endpoint መመለስ አዲስ የተፈጠረውን የአባልነት መረጃ (membership information) የያዘ array ይሆናል።

## በZapier ውስጥ እርምጃ መፍጠር (Creating an action in Zapier) {#creating-an-action-in-zapier}

ይህ አዲሱ እና ጠንካራ የሆነ የखाታ መፍጠር endpoint በመመዝገቡ፣ በZapier ውስጥ አዲስ እርምጃ (action) ይደርስዎታል።

የZapier አዲሱ ስሪት የሚያቀርባቸውን ነገሮች እንዴት መጠቀም እና መደሰት እንደሚችሉ ያውቃሉ? እዚህ ይማሩ። (link?)

### እርምጃ መፍጠር (Creating an action) {#creating-an-action}

የመመዝገቢያ endpointን በZapier እንዴት መጠቀም እንደሚቻል በተሻለ ለማሳየት፣ ከGoogle Forms ጋር ውህደት (integration) እንፍጠር። ይህ ፎርም በየጊዜው ሲሞላ እና መረጃው በፎርሙ መልስ ወረቀት (answer sheet) ሲቀመጥ፣ በአልቲሜት መልቲሳይት ኔትዎ ውስጥ አዲስ አባልነት ይፈጠራል።

በGoogle Forms ውስጥ፣ በኔትዎ ውስጥ አዲስ አባልነት ለመፍጠር የሚያስፈልጉትን ዝቅተኛ መስኮች ባለው ፎርም ይፍጠሩ።

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

አሁን በZapier ውስጥ፣ አዲስ Zap ይፍጠሩ እና በGoogle Forms ውስጥ የተፈጠረውን ፎርም በዳታው በሚቀመጥበት የspreadsheet ጋር ያገናኙ።

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

ተከናውኗል! የGoogle Forms ፎርም በZapier ተገናኝቷል እና ከኔትዎ ጋር ለመዋሃድ ዝግጁ ነው። አሁን፣ Google Forms በየጊዜው ሲሞላ የሚያመጣውን Trigger የሚያስከትልበት Action ላይ እንቀጥል።

አዲሱን Ultimate Multisite app ፈልጉ እና ይምረጡ። ለዚህ አይነት Zap፣ **Register** የሚለውን አማራጭ ይምረጡ።

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

ከዚህ የመጀመሪያ እርምጃ በኋላ፣ ከዚህ Zap ጋር ሊገናኝ የሚገባውን አካውንት ይምረጡ።<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

ይህ የጠቅላላው ሂደት በጣም ስሜታዊ (sensitive) ክፍል ነው። ከGoogle Forms የመጡትን መስኮች (fields) ከዚህ ጽሑፍ ካለፈው ክፍል እንደታየው፣ ለregister endpoint የሚያስፈልጉትን ዝቅተኛ መስኮች ጋር ማዛመድ አለብን።

በዚህ ምሳሌ፣ የusername፣ የኢሜይል፣ የይለፍ ቃል፣ ስም እና የድረ-ገጽ URL ብቻ ማዋቀር አለብን። የተቀረው ሁሉ በቅድሚያ የተወሰነ (pre-determined) ስለሆነ፣ በዚህ Google Forms ላይ የሚፈጠሩ ሁሉም አባልነቶች ተመሳሳይ የproduct እና የstatus ስርዓተ-ጥለት (pattern) ይከተላሉ።

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

መረጃው ከተዘጋጀ በኋላ፣ ወደ የመጨረሻው ሙከራ ይቀጥሉ። በመጨረሻው ስክሪን፣ ወደ endpoint ምን መላክ እንደሚችል፣ የእያንዳንዱ መረጃ ምንነት እና ባዶ የሚላኩ መስኮች ሁሉ ማየት ይችላሉ።<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

አዲሱን Zapዎን ይሞክሩ እና በተሳካ ሁኔታ መጠናቀቅ አለበት። ማንኛውም ስህተት ከተፈጠረ፣ ሁሉንም መስኮች ይፈትሹ እና በትክክል እየተላኩ መሆናቸውን ያረጋግጡ። ብዙ መረጃ ስላለ፣ አንዳንድ ነገሮች ሊታዩ ይችላሉ።

### ሙሉ የendpoint መለኪያዎች (Complete endpoint parameters) {#complete-endpoint-parameters}

እዚህ ሙሉው ጥሪ እና ሊላኩ የሚችሉ ሁሉም የመስክ አማራጮች ተሰጥተዋል።

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" ከሚሉት አንዱ "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" ከሚሉት አንዱ }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
