---
title: Գրանցել API ծայրակետը
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API endpoint

Այս տուտիում դուք կսովորեք, թե ինչպես օգտագործել Ultimate Multisite /register API ծայրակետը՝ ձեր ցանցի նոր հաճախորդի համար ամբողջ ներառման գործընթացը ստեղծելու համար և դա անել Zapier-ով։

Ծայրակետը օգտագործում է POST մեթոդը և կոչվում է URL-ով՝ _**https://yoursite.com/wp-json/wu/v2/register**_։ Այս կանչի ընթացքում ձեր ցանցում կկատարվեն 4 գործընթացներ.

  * Ստեղծվում է նոր WordPress օգտվող կամ դրա բնութագրումը օգտվող ID-ով։

  * Ստեղծվում է Ultimate Multisite-ի նոր Հաճախորդ կամ դրա բնութագրումը հաճախորդի ID-ով։

  * Ստեղվում է WordPress ցանցի վրա նոր սայթ։

  * Վերջում ստեղծվում է Ultimate Multisite-ի նոր Ապրանք (Membership)։

Այս գործընթացի համար ձեզ անհրաժեշտ կլինեն ձեր API մուտքային տվյալները (credentials)։ Դրանք ստանալու համար գնացեք ձեր ցանցի ադմինիստրատորի պանելին, գնացեք **Ultimate Multisite > Settings** > **API & Webhooks**, և փնտրեք API Settings բաժինը։

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Ահա API կարգավորումների ամբողջական տեսքը.

![API settings full page](/img/config/settings-api-full.png)

Ընտրեք **Enable API** և ստացեք ձեր API մուտքային տվյալները։

Այժմ եկեք ուսումնասիրենք ծայրակետը և այնուհետև Zapier-ում ստեղծենք գրանցման գործողություն (registration action)։

## Endpoint body parameters

Եկեք տեսանելի դարձնենք մինիմալ տեղեկատվության ամփոփումը, որը պետք է ուղարկենք ծայրակետին։ Այս հոդվածի վերջում կտեսնեք ամբողջական կանչը (call-ը)։

### Customer

Սա տեղեկատվությունն է, որը անհրաժեշտ է User-ը և Ultimate Multisite-ի Հաճախորդին ստեղծելու գործընթացի համար.

"customer_id" : integer

Ձեր ցանցում ստեղծված հաճախորդի ID-ն ուղարկելը հնարավոր է։ Եթե այն չի ներկայացվել, ներքևում տրված տեղեկությունները կօգտագործվեն նոր հաճախորդ և WordPress օգտատեր ստեղծելու համար։ Օգտատեր ID-ն կարելի է ուղարկել նույն ձևով, ինչպես հաճախորդի ID-ն։

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Մասնակցություն (Membership)**

Այս օբյեկտում մեզ միայն Մասնակցության կարգավիճակն է անհրաժեշտ։

"membership" { "status" : "string", // մեկը «pending», «active», «trialing», «expired», «on-hold», «canceled» է },

### **Ապրանքներ (Products)**

Ապրանքներին տրվում է զանգված՝ ձեր ցանցի մեկ կամ մի քանի արտադրանքի ID-ներով։ զգուշացեք, որ այս endpoint-ը արտադրանք չի ստեղծում։ Ավելի լավ հասկանալու համար ստեղծման endpoint-ի մասին ստուգեք Ultimate Multisite-ի համապատասխան փաստաթղթերը։

**"products" : [1,2],**

### **Վճարում (Payment)**

Ինչպես Մասնակցության դեպքում, մեզ միայն կարգավիճակն է անհրաժեշտ։

**"payment" { "status" : "string", // մեկը «pending», «completed», «refunded», «partially-refunded», «partially-paid», «failed», «canceled» է },**

### **Կայք (Site)**

Եվ որպեսզի ավարտենք, մեզ անհրաժեշտ է կայքի URL-ը և վերնագիրը՝ երկուսն էլ Site օբյեկտի ներսում։

**"site" : { "site_url" : "string", "site_title" : "string" }**

`register` endpoint-ի արդյունքը կլինի զանգված՝ նոր ստեղծված մասնակցության տեղեկություններով։

## Գործողություն ստեղծել Zapier-ում (Creating an action in Zapier)

Այս նոր և ավելի ամուր հաշվի ստեղծման endpoint-ի ներդրման հետ դուք կստանաք Zapier-ում նոր գործողություն։

Ինչո՞ւ ճանաչում եք, թե ինչպես օգտագործել և հավատալ այն ամենին, ինչ առաջարկում է Zapier-ի նոր տարբերակը։ Ավելի ուսումնասիրեք այստեղ։ (link?)

### Գործողություն ստեղծել

Google Forms-ի հետ Zapier-ը կապելու համար՝ գրանցման ինտերֆեյսի օգտագործումը ավելի լավ պատկերացնելու համար, ստեղծենք Google Forms-ի հետ ինտեգրացիա։ Ամեն անգամ, երբ այս ձևանման բազան լրացվում է և տվյալները պահվում են ձևանման պատասխանների թերթում, Ultimate Multisite ցանցում կստեղծվի նոր անդամակցություն։

Google Forms-ում ստեղծեք մի ձևանման բազա՝ մինիմալ դաշտերով, որոնք անհրաժեշտ են ցանցում նոր անդամակցություն ստեղծելու համար։

<!-- Կարող է չկան պատկերներ. Google Forms ձևանման բազա՝ նոր անդամակցություն ստեղծելու դաշտերով -->

Այնուհետև Zapier-ում ստեղծեք նոր Zap և կապեք ստեղծված ձևանման բազան Google-ի հետ, որտեղ պահվում է տվյալները։

<!-- Կարող է չկան պատկերներ. Zapier-ի հրահանգի կոնֆիգուրացիա՝ կապված Google Forms սփրեդշետի հետ -->

Արդեն դա անել եք։ Google Forms ձևանման բազան կապված է Zapier-ի հետ և պատրաստ է ինտեգրվելու ցանցի հետ։ Այժմ շարունակենք գործողության (Action) մասին, որը կստացվի այն հրահանգից (Trigger), որը Google Forms-ը բացառիկ ամեն անգամ լրացվելիս առաջ է տալիս։

Գտեք Ultimate Multisite-ի նոր app-ը և ընտրեք այն։ Այս տեսակի Zap-ի համար ընտրեք Register տարբերակը։

<!-- Կարող է չկան պատկերներ. Zapier-ի գործողության ընտրություն՝ Ultimate Multisite app-ով Register տարբերակը -->

Այս առաջին քայլից հետո, ընտրեք այն հաշվարկը (account), որը կկապվի այս Zap-ի հետ։<!-- Կարող է չկան պատկերներ. Ultimate Multisite-ի համար Zapier-ի հաշվի կապման քայլ -->

Սա ամենակրիտիկական մասն է ամբողջ գործընթացի։ Մենք պետք է համապատասխանեցնենք Google Forms-ից ստացված դաշտերը Register endpoint-ի համար անհրաժեշտ մինիմալ դաշտերին, ինչպես նկարագրված են այս հոդրիի նախորդ բաժնում։

Այս օրինակում մեզ միայն անհրաժեշտ է կոնֆիգուրացնել ցուցադրական (username), email, գաղտնաբառ (password), անունը և կայքի URL-ը։ Մնացածը նախապես որոշված է այնպես, որ Google Forms-ով ստեղծվող բոլոր անդամակցությունները հետևեն նույն ապրանքային և կարգավիճակի օրինաչափությանը։

<!-- Կտորը հասանելի չէ. Zapier-ի դաշտերի քարտեզագրումը Google Forms-ի և Ultimate Multisite գրանցման վերջնական կետի միջև -->

Տվյալները սահմանելուց հետո անցեք վերջին թեստին։ Վերջին էկրանին կարող եք տեսնել բոլոր դաշտերը, որոնք ուղարկվելու են endpoint-ին, դրանց համապատասխան տեղեկությունները և այն դաշտերը, որոնք կուղարկվեն դատարկ։<!-- Կտորը հասանելի չէ. Zapier-ի թեստի էկրանը՝ բոլոր դաշտերի ուղարկման համար գրանցման endpoint-ին -->

Թեսեք ձեր նոր Zap-ը և այն պետք է հաջողությամբ ավարտվի։ Եթե որևէ սխալ առաջանայում է, ստուգեք բոլոր դաշտերը և համոզվեք, որ դրանք ուղարկվում են ճիշտ։ Քանի որ շատ տեղեկություն կա, որոշ բան կարող է անտեսվել։

### Ամբողջ endpoint-ի պարամետրերը

Ահա ամբողջ կանչը և դաշտերի բոլոր հնարավորությունները, որոնք կարող են ուղարկվել։

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // մեկը կարող է լինել «pending», «active», «trialing», «expired», «on-hold», «cancelled» "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // մեկը կարող է լինել «pending», «completed», «refunded», «partially-refunded», «partially-paid», «failed», «cancelled» }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
