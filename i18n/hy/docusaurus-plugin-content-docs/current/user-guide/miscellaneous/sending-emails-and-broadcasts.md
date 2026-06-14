---
title: Էլ-փոստեր և բազմաթիվ ուղարկումներ
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Էլ․ փոստեր ու բազմաֆունկցիոնալ հաղորդումներ (v2)

_**ԿԱՐԵՎՈՐ ՆՇՈՒՄ. Այս հոդվածը վերաբերում է Ultimate Multisite-ի 2.x տարբերակին։**_

Ultimate Multisite-ը ներառում է մի հնարավորություն, որով դուք կարող եք շփվել ձեր հաճախորդների հետ՝ ուղարկելով էլ․ փոստեր թիրախային օգտվող մեկ կամ խմբի անձին կամ ուղարկելով ծանուցումներ նրանց ადմին պաստարոնի վրա հաղորդումների համար՝ հայտարարություններ տարածելու համար։

## Ավելացրեք ადմին ծանուցումներ ձեր հաճախորդների դաշտարկներին Broadcast-ների միջոցով

Ultimate Multisite broadcast-ի օգտագործման միջոցով, կարող եք **админ ծանուցումներ** (admin notices) ավելացնել ձեր օգտվող ենթադիր կայքի ადմին պաստարոնի դաշտարկին։

Սա չափազանց օգտակար է, եթե ձեզ անհրաժեշտ է հայտարարություն տալու համար, ինչպես համակարգային ծառայության թարմացում կամ նոր արտադրանքներ կամ ծառայություններ առաջարկել ձեր գոյություն ունեցող օգտվողներին։ Ահենապես կանաչի ձեր օգտվողի դաշտարկում ადմին ծանուցումը։

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Ադմին ծանուցում սկսելու համար գնացեք ձեր ցանցի ადմին պաստարոնի դաշտարկին և **Ultimate Multisite** մենյուի ներքո կգտնեք **Broadcasts** տարբերակը։

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Կարող եք նաև խմբագրել գոյություն ունեցող broadcast-ները.

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Այս էջից սեղմեք վերևում **Add Broadcast** (Ավելացնել Broadcast) կոճակը։

Սա բաց կտուցի Add broadcast մոդալ պատուհանը, որտեղ կարող եք ընտրել, թե ինչ տեսակի broadcast եք ուզում ուղարկել։

Շարունակեք ընտրել **Message** (Հաղորդագրություն) և սեղմեք **Next Step** (Հաջորդ քայլ) կոճակը։

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Հաջորդ պատուհանը կհարցնի ձեզ՝ ընտրելով **Target customer** (Թիրախային հաճախորդ) կամ **Target product** (Թիրախային արտադրանք)։ Խնդրում նկատի ունեցեք, որ կարող եք ընտրել մի քանիստ օգտվողներ կամ մի քանի արտադրանք։

Օգտատերերի հաշիվ կամ արտադրանք փնտրելու համար պետք է տեքստի մեջ բառը սկսել տպել մուտքագրման դաշտում։

**Message type** (संदेशի տեսակ) դաշտում կարող եք ընտրել հայտարարության գույնը։ Սա ընդգծում է ձեր հաղորդագրության շտապությունը։

Այնուհետև կարող եք սեղմել **Next Step** (Հաջորդ քայլ)։

![Message broadcast-ի թիրախային հաճախորդների, թիրախային արտադրանքի և հաղորդագրության տեսակի դաշտերը Message broadcast-ի համար](/img/admin/broadcast-message-targets.png)

Հաջորդ պատուհանն այն վայրն է, որտեղ կարող եք սկսել ձեր հաղորդագրությունը կազմել՝ մուտքագրելով թեմայի և բովանդակության/հաղորդագրության տեքստը, որը ցանկանում եք ուղարկել օգտատերերին։

![Compose-ի քայլի վրա Message broadcast-ի թեմայի և բովանդակի խմբագրիչ](/img/admin/broadcast-edit.png)

Ձեր հաղորդագրությունը ստեղծելուց հետո կարող եք սեղմել **Send** (Ուղարկել) կոճակը։

Եվ ավ, դա ամենը։ Адмінի հայտարարությունը անմիջապես կհայտնվի ձեր օգտատիրոջ դաշտում։

## Ուղարկեք էլ․ նամակներ ձեր հաճախորդներին

Ultimate Multisite broadcast-ի միջոցով կարող եք էլ․ նամակ ուղարկել ձեր օգտատերերին։ Ձեզ կա տարբերակ՝ էլ․ նամակը ուղարկել միայն որոշակի օգտատերերին կամ թիրախավորել հատուկ օգտատերերի խումբը՝ հիմնվելով այն արտադրանքի կամ պլանի վրա, ի ներքո որի են նրանք բաժանված։

Էլ․ նամակի բազմապատառ ուղարկելու համար գնացեք ձեր network admin dashboard-ին և Ultimate Multisite մենյուի տակ կտեսնեք Broadcast տարբերակը։

![Broadcasts list page used as the starting point for an email broadcast-ի օգտագործման էջ](/img/admin/broadcasts-list.png)

Այս էջից սեղմեք վերևում գտնվող **Add broadcast** (Ավելացնել բազմապատառ) կոճակը։

Սա կբացի Add broadcast մոդալ պատուհանը, որտեղ կարող եք ընտրել, թե ինչ տեսակի բազմապատառ ուղարկել։ Շարունակեք ընտրել **Email** (Էլ․ նամակ) և սեղմեք **Next Step** կոճակը։

![Add broadcast մոդալի պատուհանը՝ Email տարբերակը ընտրված է](/img/admin/broadcast-add-email.png)

Հաջորդ պատուհանը կհարցնի ձեզ **Target customer** (Թիրախային հաճախորդ) կամ **Target product** (Թիրախային արտադրանք)։ Նկատի ունեցեք, որ կարող եք ընտրել մի քանիսը օգտատերներից կամ մի քանի արտադրանք։

Օգտատերերի կամ արտադրանքի համար որոնում կատարելու համար պետք է բառը սկսեք տպել դաշտի մեջ։

Երբ ընտրեք ձեր թիրախային լսարանը, կարող եք սեղմել **Next Step**-ին։

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Հաջորդ պատուհանում Դուք կարող եք սկսել ձեր էլ. փոստը կազմել՝ մուտքագրելով թեմայի և այն բովանդակության/հաղորդագրության տեքստը, որը ցանկանում եք ուղարկել օգտատերերին։

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Ձեր հաղորդագրությունը ստեղծելուց հետո կարող եք սեղմել **Send** կոճակը։

Եվ այսպես է հեշտ ուղարկել էլ. փոստ ձեր վերջնական օգտատերերին՝ օգտագործելով broadcast-ի (բազմաթիվ ուղարկում) ֆունկցիան։

## Систем էլ. փոստեր (System emails)

Ultimate Multisite-ում սիստեմական էլ. փոստերը դրանք **ավտոմատ հուշումներն** են, որոնք համակարգը ուղարկում է որոշակի գործողությունների հետ անցնելուց հետո՝ նման կերպ ինչպես գրանցում, վճարում, ադաման մ్యాփինգ և այլն։ Այս էլ. փոստերը կարելի է խմբագրել կամ փոփոխել Ultimate Multisite-ի կարգավորումներից։ Նա նաև հագատված է մի ֆունկցիայով, որը թույլ կտա ձեզ վերադարձնել և ներմուծել գոյություն ունեցող կարգավորումները մեկ այլ Ultimate Multisite տեղադրումից։

### Վերադարձնել և ներմուծել (Resetting & Importing)

Նոր Ultimate Multisite տարբերակներն, ինչպես նաև add-ons-ը, ժամանակ առ ժամանակ կարող են գրանցել նոր էլ. փոստեր։

Կոնֆլիկտներից և այլ խնդիրներից խուսափելու համար **մենք ավտոմատ չեն ավելացնել նոր էլ. տիպեր որպես Систем էլ. փոստեր ձեր տեղադրման մեջ**, եթե դրանք կարևոր չեն տվյալ ֆունկցիայի ճիշտ աշխատանքի համար։

Այնուամենայնիվ, սուպեր ադմինները և ասոնտներ կարող են ներմուծել այս նոր գրանցված էլ. փոստերը՝ օգտագործելով importer tool-ը (ներմուծման գործիք)։ Այս գործընթացը կստեղծի նոր սիստեմական էլ. փոստ՝ նոր էլ. տիպի բովանդակությամբ և կոնֆիգուրացիայով, ինչը թույլ է տալիս սուպեր ադմինին իրենց ցանկացած փոփոխություններ կատարել կամ դրանք պահել այնպես, ինչպես են։

#### Ինչպես ներմուծել սիստեմական էլ. փոստերը

Ultimate Multisite ayarlarına gidin ve **Emails** sekmesine tıklayın.

![Ultimate Multisite ayarlarındaki Emails sekmesi, Sistem E-postaları bölümünü gösteriyor](/img/config/settings-emails-tab.png)

Ardından, yan menüden **Customize System Emails** düğmesine tıklayın.

<!-- Screenshot unavailable: Sistem E-Postaları yan panelindeki Customize System Emails butonu -->

Sistem E-postaları sayfasında en üstte **Reset & Import** eylem düğmesini göreceksiniz. Bu düğmeye tıkladığınızda, import ve sıfırlama modal penceresi açılacaktır.

![Sistem E-Postaları yönetim sayfasındaki Reset veya Import eylem düğmesi](/img/admin/system-emails-reset-import.png)

Daha sonra, hangi sistem e-postalarının içe aktarılabileceğini görmek için Import Emails seçeneklerini açıp kapatabilirsiniz.

<!-- Screenshot unavailable: Import Emails seçenekleri genişletilmiş olan Reset ve Import modalı -->

#### Sistem E-postalarını Sıfırlama

Bazen, belirli bir e-posta şablonuna yaptığınız değişikliklerin artık işe yaramadığını fark edebilir ve onu **varsayılan durumuna** sıfırlamak isteyebilirsiniz.

Bu durumlarda iki seçeneğiniz var: sistem e-postasını doğrudan silebilir ve yukarıdaki talimatları kullanarak tekrar içe aktarabilirsiniz - bu, gönderim metriklerini ve diğer şeyleri sileceği için bu yöntem en az tercih edilen yöntemdir.

Veya o e-posta şablonunu sıfırlamak için **Reset & Import tool**'u kullanabilirsiniz.

Bir e-posta şablonunu sıfırlamak için yukarıdaki adımları izleyerek Reset & Import aracına ulaşabilir ve ardından **Reset** seçeneğini açıp varsayılan içeriğe geri döndürmek istediğiniz e-postaları seçebilirsiniz.

<!-- Screenshot unavailable: Reset ve Import seçenekleri genişletilmiş olan Reset E-postalarını gösteren modal -->
