---
title: Վեբ հուկներ
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks-ի Առաջին Նայումը (v2)

_**Ուշադրություն. Նշում. Այս հնարավորությունը կամ հոդվածը նախատեսված է առաջադեմ օգտվողների համար։**_

**Webhook**-ը մի մեխանիզմ է, որով Ultimate Multisite-ի նման այլแอปพลิเคชันները կարող են իրական ժամանակում տեղեկություն հասցնել մյուսแอปพลิเคชันներին։ Webhook-ը տվյալները կամ պայմանավորվածքները (payloads) փոխանցում են այլแอปพลิเคชันներին իրենց առաջացման ժամանակ, ինչը նշանակում է, որ դուք **միջանկյալ տվյալներ ստանում եք անմիջապես**։

Սա օգտակար է, եթե ձեզ անհրաժեշտ է Ultimate Multisite-ից տվյալներ փոխանցել մեկ այլ CRM կամ համակարգին յուրաքանչյուր իրադարձության դեպքում, երբ առաջանում է մի իրադարձություն։ Օրինակ, ձեզ անհրաժեշտ է յուրաքանչյուր նոր օգտվող հաշիվ ստեղծելիս ուղարկել օգտվողի անունը և էլ. փոստի հասցեն մեկ փոստային ցուցակին։

## Webhook-ի ստեղծումը {#how-to-create-a-webhook}

Webhook ստեղծելու համար գնացեք ձեր network admin dashboard-ին։ Սեղմեք **Ultimate Multisite > Webhooks > Add New Webhook**-ի վրա։

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Այնուհետև կարող եք խմբագրել webhook-ի կոնֆիգուրացիան.

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Նոր webhook ստեղծելիս ձեզ կհարցնեն **Անուն, URL** և **Իրադարձություն (Event)** տվյալներ։ Կարող եք օգտագործել ցանկացած անուն ձեր webhook-ի համար։ Ամենակարևոր դաշտերը URL-ն և Event-ն են։

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL-ը **փոխանցման կետն է (endpoint)** կամ այն վերջնական կետը, որտեղ Ultimate Multisite-ը կուղարկի **պայմանավորվածքները (payloads) կամ տվյալները**։ Սա այնแอปพลิเคชันն է, որը կստանա տվյալները։

Zapier-ը ամենատարածված լուծումն է, որ օգտվողներն օգտագործում են երրորդ կողմիแอปพลิเคషన్‌ների հետ ինտեգրացիան հեշտացնելու համար։ Zapier-ի նման մի պլատֆորմի առանց, ձեզ անհրաժեշտ կլինի ձեռքով ստեղծել հատուկ ֆունկցիա, որը կկողմնորոշի տվյալները և կմշակի դրանք։ Տես այս հոդվածը՝ **ինչպես օգտագործել Ultimate Multisite webhook-ը Zapier-ի հետ**։

Այս հոդվածում մենք կքննարկենք webhook-ի հիմնական գաղափարը և Ultimate Multisite-ում առկա իրադարձությունները։ Մենք կօգտագործենք երրորդ կողմի կայք՝ [requestbin.com](https://requestbin.com/)։ Այս կայքում մենք կարող ենք ստեղծել endpoint և հավաքել payload-ը առանց ծածկագրի։ _**Հեռախոշում. այն միայն կցույց տա, որ տվյալները ստացվել են։**_ Payload-ի վրա ոչ մի մշակում կամ գործողություն չի կատարվի։

Գնացեք [requestbin.com](https://requestbin.com/) և սեղմեք Create Request Bin-ը (Ստեղծել Request Bin)։

Այդ կոճակը սեղմելուց հետո այն ձեզ կհարցնի, արդյոք ունեք հաշիվ, թե՞ գրանցվել։ Եթե ունեք հաշիվ, այն вас անմիջապես կուղղի դեպի իրենց dashboard-ը։ Նրանց dashboard-ում դուք անմիջապես կտեսնեք endpoint-ը կամ URL-ը, որը կարող եք օգտագործել Ultimate Multisite webhook ստեղծելիս։

Շարունակեք պատճենել URL-ը և վերադառնալ Ultimate Multisite-ին։ Endpoint-ը տեղադրեք URL դաշտում և ընտրեք իրադարձություն (event) գցումից։ Այս օրինակում մենք կընտրենք **Payment Received** (Վճարում ստացվել է)։

Այս իրադարձությունը տեղի է ունենում ցանկացած պահի, երբ օգտվողը վճարում է կատարում։ Առկա բոլոր իրադարձությունները, դրանց նկարագրությունները և payload-ները գտնվում են էջի ներքևում։ Webhook-ը պահելու համար սեղմեք **Add New Webhook** (Ավելացնել նոր webhook) կոճակը։

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Այժմ մենք կարող ենք փորձնական իրադարձություն ուղարկել endpoint-ին՝ տեսնելու համար, թե արդյոք ստեղծած webhook-ը աշխատում է։ Մենք կարող ենք դա անել՝ սեղմելով Create Webhook-ի ներքևում **Send Test Event** (Ուղարկել փորձնական իրադարձություն) կոճակը։

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Սա ցույց է տալիս հաստատման պատուհան, որ փորձնական գործողությունը հաջող է։

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Հա՛ մեր հետ կապված _Requestbin_ ծառայության վերադարձին դիտելով, կարելի է տեսնել, որ պայմանագրի (payload) ընդունվել է՝ ներառելով մի քանի թեստային տվյալներ։

Սա հիմնական սկզբունքն է այն, թե ինչպես են աշխատում webhook-ները և endpoints-ները։ Եթե դուք սեփական endpoint (մի հատուկ կետ) ստեղծելու մտադրություն ունեք, ապա Ultimate Multisite-ից ստացված տվյալները մշակելու համար ձեզ անհրաժեշտ է սեփական ֆունկցիա (custom function) ստեղծել։
