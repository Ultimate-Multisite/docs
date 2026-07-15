---
title: Զեղչային կոդերի ստեղծում
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Discount Codes Ստեղծում (v2)

_**ԿԱՐԵՎՈՐ ՆՇեշտ. Այս հոդվածը վերաբերում է Ultimate Multisite-ի 2.x տարբերակին։**_

Ultimate Multisite-ով կարող եք ստեղծել զեղչային կոդեր՝ ձեր հաճախորդներին առաջարկելու նվազեցում իրենց բաժանարարների վրա։ Դրանք ստեղծելը շատ է հեշտ։

## Զեղչային Կոդերի Ստեղծում և Խմբագրում {#creating-and-editing-discount-codes}

Զեղչային կոդի ստեղծման կամ խմբագրման համար գնացեք **Ultimate Multisite > Discount Codes**-ին։

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Այստեղ ունենաք այն զեղչային կոդերի ցուցակը, որոնք արդեն ստեղծել եք։

Կարող եք սեղմել **Add Discount Code** (Ավելացնել Զեղչային Կոդ)՝ նոր կուպոն ստեղծելու համար, կամ կարող եք խմբագրել այն կոդերը, որոնք գոյություն ունեն՝ դրանց վրա մանրամասնով շարժվելով և սեղմելով **Edit** (Խմբագրել)։

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Դուք կանցնեք այն էջը, որտեղ կստեղծեք կամ խմբագրեք ձեր կուպոնի կոդը։ Այս օրինակում մենք նորը ստեղծելու ենք։

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Եկեք դիտարկենք այստեղ առկա կարգավորումները.

**Enter Discount Code:** Սա պարզապես ձեր զեղչային կոդի անունն է։ Սա այն կոդը չէ, որը հաճախորդները պետք է օգտագործեն գանձման ձևաթուղթում (checkout form)։

**Description:** Այստեղ կարող եք կարճ նկարագրել, թե ինչի համար է այս կուպոնը։

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Կարող եք նաև տեսնել զեղչային կոդը՝ ակտիվ (active) կամ անակտիվ (inactive) վիճակում.

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Այստեղ է, որ դուք սահմանում եք այն կոդը, որը հաճախորդները պետք է մուտքագրեն գանձման ժամանակ։

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Զեղչ:** Այստեղ կարող եք սահմանել ձեր զեղչ կոդի համար **պարզ տոկոսադրույք** կամ **ֆիքսված գումար**.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Կիրառելիության վերաբերյալ (Apply to renewals):** Եթե այս տարբերակը անջատված է, ապա այս զեղչ կոդը կկիրառվի միայն **առաջին վճարման համար**: Մնացած բոլոր վճարումներում զեղչ չի լինի։ Եթե այս տարբերակը միացված է, ապա զեղչ կոդը գործելու է բոլոր հետագա վճարումների համար։

**Սահմանագրման վճարի զեղչ (Setup fee discount):** Եթե այս տարբերակը անջատված է, կուպոն կկիրառի **ոչ մի զեղչ սահմանման վճարի** համար։ Եթե այս տարբերակը միացված է, ապա կարող եք սահմանել (տոկոսադրույք կամ ֆիքսված գումար), որը կկիրառվի ձեր պլանների սահմանման վճարի համար։

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Անշուշտ (Active):** Մասնակիորեն ակտիվացրեք կամ անջատեք այս կուպոն կոդը։

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**Առաջադեմ տարբերակներում (Advanced Options)**, մենք ունենք հետևյալ կարգավորումները.

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Օգտագործման սահմանափակում (Limit uses):**

  * **Օգտագործումներ (Uses):** Այստեղ կարող եք տեսնել, թե քանի անգամ է օգտագործվել զեղչ կոդը։

  * **Առավելագույն օգտագործումներ (Max uses):** Սա սահմանափակում է այն անգամների քանակը, որքան կարող են օգտագործել օգտվողները այս զեղչ կոդը։ Օրինակ, եթե այստեղ տեքեք 10, կուպոնը կարող է օգտագործվել միայն 10 անգամ։ Այս սահմանից հետո կուպոն կոդը այլևս չի կարելի օգտագործել։

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Սկզբնական և վավերացման ամսաթվեր:** Այստեղ ունեք տարբերակ՝ ձեր կուպոնին սկզբնական և/կամ վերջնական ամսաթի դնելու։

![Discount code-dates fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Ամսագիր սահմանափակում:** Եթե ապահովեք **Select products** (Ընտրել արտադրանքները) տարբերակը, ձեզ կցուցադրվեն բոլոր ձեր արտադրանքները։ Ձեզ հնարավորություն կտա ձեռքով ընտրել (միացնել կամ անջատել) այն արտադրանքը, որը կարող է ընդունել այս կուպոնային կոդը։ Այն արտադրանքները, որոնք անջատված են այստեղ, չեն փոխվի, եթե ձեր հաճախորդները փորձեն օգտագործել այս կուպոնային կոդը դրա համար։

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Բոլոր այս տարբերակները սահմանելուց հետո, սեղմեք **Save Discount Code** (Պահպանել կուպոնային կոդը)՝ ձեր կուպոնը պահելու համար և ավարտելով գործողությունը։

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Կուպոնն այժմ գտնվում է ձեր ցուցակում, և հենց այստեղից կարող եք սեղմել՝ **edit** (փոփոխել) կամ **delete** (Ջնջել)։

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### URL պարամետրերի օգտագործումը: {#using-url-parameters}

Եթե ցանկանում եք ձեր գնային աղյուսակները կոնկրետացնել կամ ձեր կայքի համար հիանալի կուպոնային կոդի էջ կառուցել և ավտոմատ կերպով կիրառել զեղչը ձեր գնումների ձևաչափում (checkout form)՝ դա կարող եք անել URL պարամետրերի միջոցով։

Նախ, ձեզ անհրաժեշտ է ստանալ ձեր պլանի կիսվող հղումը (shareable link)։ Դա անելու համար գնացեք **Ultimate Multisite > Products**-ի և ընտրեք մի պլան։

Սեղմեք **Click to Copy Shareable Link** (Սեղմել՝ կիսվող հղումը պատճենելու համար) կոճակը։ Սա ձեզ կտա այս հատուկ պլանի կիսվող հղումը։ Մեր դեպքում տրված կիսվող հղումը հետևյալն էր [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)։

![Product page with shareable link button](/img/config/products-list.png)

Ձեր զեղչ կոդը այս հատուկ պլանին կիրառելու համար, բավական է URL-ի մեջ **?discount_code=XXX** պարամետրերը ավելացնել։ Այստեղ **XXX**-ը կլինի ձեր կուպոնի կոդը։

Մեր օրինակում մենք կկիրառենք կուպոն կոդը **50OFF** այս հատուկ արտադրանքի վրա։

Այս հատուկ պլանի և 50OFF զեղչ կոդի կիրառման URL-ը կտեսնի հետևյալ տեսքով. [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
