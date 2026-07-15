---
title: Zapier ինտեգրում
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-ը Zapier-ի հետ ინტეგრირება

Մեկ հոդվածում մենք քննարկել էինք [Webhooks](webhooks.md)-ը և դրանց օգտագործումը երրորդ կողմի այլ ծրագրերի հետ համատեղելիության համար։

Webhooks-ի օգտագործումը մի փոքր բարդ է, քանի որ այն պահանջում է կոդավորման առաջադեմ գիտելիքներ և տվյալների (payloads) հավաքելու ճշգրտություն։ **Zapier**-ը դա անելու մի մեթոդ է։

Zapier-ը համատեղելիությամբ ունի 5000-ից ավելի հավելվածներ, ինչը հեշտացնում է տարբեր ծրագրերի միջև հաղորդակցությունը։

Դուք կարող եք ստեղծել **Triggers** (սրահներ)՝ դրանք աշխատեն այն պահին, երբ ձեր ցանցում տեղի են ունենում իրադարձություններ (օրինակ՝ հաշիվ է ստեղծվում և առաջացնում `account_create` իրադարձությունը) կամ **Actions** (գործողություններ)՝ ձեր ցանցում արձագանքելու արտաքին իրադարձություններին (օրինակ՝ Ultimate Multisite ցանցում նոր անդամի հաշիվ ստեղծել)։

Սա հնարավոր է, քանի որ **Ultimate Multisite Zapier-ի triggers** և actions-ները աշխատում են [REST API](https://developer.ultimatemultisite.com/api/docs/) միջոցով։

## Ինչպես սկսել {#how-to-start}

Նախ, փնտրեք Ultimate Multisite-ը Zapier-ի հավելվածների ցուցակում։ Համենայն այլընտրանքային տարբերակի համար կարող եք սեղմել [այս հղումը](https://zapier.com/apps/wp-ultimo/integrations)։

Գնացեք ձեր dashboard-ին և ձախ ဘոիդերի (sidebar)-ում **+** **Create Zap** կոճակը սեղմեք՝ նոր Zap ստեղծելու համար։

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Դուք կանցնեք Zap-ի ստեղծման էջ։

Փնտրվող դաշտում գրեք "wp ultimo"։ Սեղմեք՝ **Beta** տարբերակը ընտրելու համար։

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Մեր հավելվածը ստորագրելուց հետո, ընտրեք հասանելի իրադարձությունը՝ **New Ultimate Multisite Event** (Նոր Ultimate Multisite իրադարձություն)։

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Այժմ մենք պետք է Zapier-ին տրամադրենք հասանելիություն **Ձեր ցանցի** համար։ **Sign in** (Մուտք գործել) սեղմելը կբացի նոր պատուհան, որը կպահանջի **API credentials** (API մուտքային տվյալներ)։

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Ձեր ցանցի ադմին պանելին (network admin panel) գնացեք և անցեք **Ultimate Multisite > Settings** > **API & Webhooks**-ով՝ API Կարգավորումների (API Settings) բաժինը։

Ընտրեք **Enable API** տարբերակը, քանի որ այս կապի աշխատելու համար դա պարտադիր է։

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Օգտագործեք API Key և API Secret դաշտերի վրա գտնվող **Copy to Clipboard** պատկերակը՝ այդ արժեքները տեղադրելու համար ինտեգրացիայի էկրանին։

URL դաշտում տեղադրեք ձեր ցանցի ամբողջ URL-ը, ներառյալ պրոտոկոլը (HTTP կամ HTTPS)։

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Շարունակելու հաջորդ քայլին անցնելու համար սեղմեք **Yes, Continue** կոճակը։ Եթե ամեն ինչ ճիշտ է, ձեզ նոր կապված հաշվով կողմից գրավվեք։ Ստեղծելու համար նոր trigger-ի (սփրինգի) սեղմեք **Continue**։

## Ինչպես ստեղծել նոր Trigger {#how-to-create-a-new-trigger}

Հաշվիքը կապված լինելուց հետո կարող եք տեսնել հասանելի իրադարձությունները (events)։ Այս դասընթացի համար եկեք ընտրենք **payment_received** իրադարձությունը։

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Իրբ իրադարձությունը ընտրվի և սեղմեք **continue**, կհայտնվի **test step** (փորձարկման քայլ)։

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Այս փուլում Zapier կստուգի, թե արդյոք ձեր Zap-ը կարող է **հանել տվյալ payload-ը այդ իրադարձության համար**։ Նույն տեսակի ապագա իրադարձություններում նույն կառուցվածքով տեղեկություն կուղարկվի։

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Մեր 튜토리ալում թեստը **հաջողությամբ կատարվել է** և վերադարձրել է պայմանագրի օրինակային տվյալները։ Այս օրինակային տվյալները մեզ կօգնեն ուղեցողի ճանապարհին՝ գործողություններ ստեղծելիս։ Ձեր trigger-ը արդեն ստեղծված է և պատրաստ է այլ հավելվածների հետ կապելու համար։

## Ինչպես ստեղծել Actions (Գործողություններ) {#how-to-create-actions}

Actions-ը օգտագործում է այլ triggers-ից տվյալներ՝ ձեր ցանցում նոր մուտքագրումներ ստեղծելու համար։

**Action step-ի ստեղծման ժամանակ** դուք կընտրեք Ultimate Multisite **Beta**-ն և **Create Items on Ultimate Multisite** տարբերակը։

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Հաջորդ քայլում դուք կկարողանաք կամ ստեղծել ձեր ինտենտիֆիկացիան (authentication), ինչպես մեն արեցինք **Ինչպես սկսել**-ում, կամ ընտրել արդեն ստեղծված ինտենտիֆիկացիա։ Այս 튜토리ալում մենք կընտրենք նախկին ստեղծված միայն այն ինտենտիֆիկացիան։

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action-ի կարգավորումը (Setting up the Action) {#setting-up-the-action}

Սա **action-ի հիմնական քայլն** է, և այստեղ բաները մի փոքր տարբեր են։ Առաջին տվյալը, որը կընտրեք, կլինի **Item** (Աիտեմը)։ Item-ը ձեր ցանցի **տվյալների մոդելն** է՝ օրինակ՝ **Customers (Հաճախորդներ), Payments (Վճարումներ), Sites (Կայքեր), Emails (Էլ-փոստեր)** և այլն։

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Աիտեմը ընտրելիս, ձևը **կազմակերպվի՝ ներառելով ընտրված աիտեմի համար անհրաժեշտ և կարևոր չլինող դաշտերը**։

Օրինակ, երբ ընտրում եք **Customer (Հաճախորդ)** աիտեմը, ձևի դաշտերը կներառեն ամեն ինչ, որն անհրաժեշտ է նոր Customer ստեղծելու համար ցանցում։

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Բոլոր **պարտադիր (required)** տեղերը լրացնելու և continue-ին սեղմելուց հետո վերջին էկրանը կցույց տա ձեզ լրացված դաշտերը և այն դաշտերը, որոնք չեն լրացվել։

![Zapier գործողության թեստի պատկեր՝ լրացված և չլրացված դաշտերը ցուցադրում](/img/admin/webhooks-list.png)

Հիմնական թեստը հաջողությամբ ավարտվեց, որպեսզի ձեր գործողությունը կոնֆիգուրացվի։ Նաև կարևոր է ստուգել ձեր ցանցում, արդյոք տարրը ստեղծվել է ձեր գործողության թեստով։
