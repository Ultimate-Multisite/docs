---
title: Հարկերի մշակում
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Հարկերի մշակում (Tax Handling)

Ultimate Multisite-ի հիմնական պլագինում արդեն կա հարկեր հավաքագրելու մոդուլ, ուստի եթե ձեր պլանների, փաթեթների և ծառայությունների վրա վաճառքի հարկերը հավաքագրելու կարիք ունեք, դա հեշտությամբ կարող եք անել՝ առանց որևէ add-on տեղադրելու։

Եվրոպայում գտնվող ընկերությունների համար մենք առաջարկում ենք **add-on**, որը ավելի լավ է **աջակցում VAT** համապատասխանությանը՝ ավելի լավ գործիքներ և հնարավորություններով։

Ultimate Multisite-ը ձեր փոխแทน վճարումները կամ հարկերը հարկային մարմինների անունից չի ներկայացնում կամ վճարում է; մենք պարզապես օգնում ենք ձեզ համապատասխան հարկերը հավաքագրել գործարքի ժամանակ։ **Ձեզ դեռ անհրաժեշտ է ինքներդ վճարել հարկերը:**

## Հարկերի հավաքագրման թույլատրում (Enabling Tax Collection)

Հարկերի հավաքագրումը լռելյայն չի 켜վում։ Այն 켜նելու համար անհրաժեշտ է գնալ **Ultimate Multisite > Settings > Taxes** և ապա 켜նել Enable Taxes կարգավորումը (toggle)։

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Ահա հարկերի կարգավորումների ամբողջական տեսքը.

![Tax settings full page](/img/config/settings-taxes-full.png)

Դուք նաև կարող եք տեսնել որոշակի արտադրանքների համար հարկերի կարգավորումները.

![Tax settings for products](/img/config/settings-taxes.png)

### Հարկերով բացառված vs. Հարկերով ներառված (Tax excluded vs. Tax included)

Լռելյայն, ձեր բոլոր արտադրանքների գները հարկերից բացառված են, ինչը նշանակում է, որ հարկերը **չեն ներառվում** արտադրանքի գնում։ Եթե մենք որոշենք, որ հաճախորդը պետք է վճարի հարկեր տվյալ գնման համար, մենք ավելացնում ենք հարկերը **հիմնական գումարից**։

Եթե ցանկանում եք, որ հարկերը ներառվեն ձեր արտադրանքի գնում, դա կարող եք անել՝ 켜նելով Inclusive Tax (Ներառված հարկ) կարգավորումը։

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Մոռացեք փոփոխությունները **պահել**։

###

## Հարկային դրույքների ստեղծում (Creating Tax Rates)

Հարկերի հավաքագրումը 켜նելուց հետո ձեզ անհրաժեշտ կլինի մեր հարկային դրույքների խմբագրի միջոցով սահմանել հարկային դրույքներ՝ տվյալ վայրերի համար։

Դուք կարող եք մուտք գործել խմբագրիչը՝ հղում կատարելով աջ բջիջի Tax settings էջի **Manage Tax Rates** (Կառավարել հարկային դրույքները) ღილակին։

![Tax Rates-ի կառավարման հղում կարգավորումների էջի Tax Rates պանելում](/img/config/settings-taxes-manage-rates.png)

Tax rates-ի խմբագրման էջում կարող եք նոր Tax Rates ավելացնել՝ սեղմելով **Add new Row** (Ավելացնել նոր տող) ღილակը։

![Tax rates editor-ի աղյուսակը Add new Row ღილակով վերևում](/img/config/tax-rates-editor.png)

Յուրաքանչյուր Tax Rate-ին անհրաժեշտ է տալ **title** (օգտագործվում է հաշվիվների համար)։ Այնուհետև կարող եք ընտրել **country** (պարտադիր), **state** և **city** (երկուսն էլ կամընտրական), որտեղ այս հարկը կվճարվի։ Ի վերջո, ավելացրեք **tax rate in percents** (հարկային դրույքը տոկոսներով)։

### Tax Categories (Հարկային Կատեգորիաներ)

Դուք կարող եք ստեղծել մի քանի Tax Categories՝ տարբեր տեսակի արտադրանքների համար տարբեր հարկային դրույքներ ավելացնելու համար։

Սեղմեք **Add new Tax Category** (Ավելացնել նոր Tax Category)՝ ձեր կատեգորիայի անունը գրելով և սեղմելով **Create** (Ստեղծել)։

![Tax Categories-ի ավելացման ღილակը tax rates editor-ի վերևում](/img/config/tax-categories-add.png)

![Tax Category Name-ի մուտքային դաշտը category-ի ստեղծման modal-ում](/img/config/tax-categories-create-modal.png)

Կատեգորիաներով անցնելու համար սեղմեք **Switch** (Փոխել) և ընտրեք այն կատեգորիան, որին ցանկանում եք նոր հարկեր ավելացնել։

![Tax Category-ի ընտրության dropdown-ը՝ հասանելի կատեգորիաները ပြող տալով](/img/config/tax-categories-switch.png)

![Tax category selector dropdown-ը, որը ցույց է տալիս հասանելի կատեգորիաները](/img/config/tax-categories-select.png)

Դուք կարող եք որոշակի արտադրանքի համար սահմանել Tax Category՝ գնալով **Product edit page** (Արտադրանքի խմբագրման էջ) և այնուհետև Taxes (Հարկեր) ներդիրը։

![Product taxes tab-ը tax category-ով և taxable toggle-ով](/img/config/product-taxes.png)

Նույն էկրանին կարող եք անջատել **Is Taxable?** (Հաշվելի՞ է հարկը) տոպլիչը՝ Ultimate Multisite-ին ասելու, որ այս տվյալ արտադրանքի վրա չպետք է հարկեր հավաքվեն։

## European VAT Support (Եվրոպական ՎԱՏ Հỗ trợ)

Նախկար հիշեցնենք, մեր ունեն որպես լրացուցիչ (add-on) գործիք՝ ԵՄ հաճախորդների համար, ովքեր ունեն լրացուցիչ պահանջներ եվրոպական ԱԱՀ կանոնակարգերի պատճառով։

Մեր ԱԱՀ (VAT) գործիքները օգնում են հետևյալ կարևոր բաներում.

*   ԵՄ ԱԱՀ դրույքերը հեշտությամբ բեռնելը.
*   ԱԱՀ համարների հավաքագրում և վավերացում՝ նաև ԱԱՀ-ից բազատ ոլորտների (օրինակ՝ վավեր ԱԱՀ համարներով ընկերությունների) համար հետադարձ լիցքավորման (reverse charging) համակարգի իրականացում։

Այդ add-on-ը տեղադրելու համար գնացեք **Ultimate Multisite > Settings** և այնուհետև սեղմեք **Check our Add-ons** կողմնորոշման (sidebar) հղումը։

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Դուք կանցվեք մեր add-on-ների էջ։ Այնտեղ կարող եք փնտրել **Ultimate Multisite VAT add-on**-ը և տեղադրել այն։

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Այնուհետև գնացեք **Network Admin > Plugins** և այն activate (ակտիվացրեք) այդ add-on-ը ամբողջ ցանցում։

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Եթե վերադառնաք **Tax Settings** (Հարկային կարգավորումների) տաբին, կտեսնեք նոր տարբերակներ։ Բացեք **Enable VAT Support** (Ակտիվացնել ԱԱՀ-ի աջակցությունը) ընտրությունը՝ նոր ԱԱՀ գործիքները աշխատեցնելու համար։ Մի հերթին մի՛ մոռացեք ձեր կարգավորումները **저장ել** (save)։

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### ԱԱՀ դրույքերի ներբեռնում (Pulling on VAT Tax Rates)

Մեր ինտեգրացիան հավելում է այն գործիքը՝ ԵՄ անդամ պետությունների համար հարկային դրույքերը բեռնելու հնարավորությունը։ Սա կարելի է անել ԵՄ ԱԱՀ-ի աջակցությունը ապահովելուց հետո մուտք գործելով հարկային դրույքերի խմբագրման (tax rates editor) էջը։

Էջի ներքևում տեսն하실 կարող եք VAT-ի (Արավելագույն արժեքով հարկ) քաշման տարբերակները։ Ընտրելով գործ율ի տեսակը և սեղմելով **Update EU VAT Rates** կոճակը, համակարգը կներկայացնի և ավտոփոխ կուplավորի աղյուսակը՝ յուրաքանչյուր ԵՄ անդամ պետության համար հարկային դրույքները։ Այնուհետև բավական է այն պահպել։

![Update EU VAT Rates but. at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Դուք կարող եք նաև խմբագրել արժեքները՝ դրանք քաշելուց հետո։ Դա անելու համար պարզապես խմբագրեք այն տողը, որը ձեզ անհրաժեշտ է, և սեղմեք՝ նոր արժեքները պահպանելու համար։

### VAT-ի վավերացում (VAT Validation)

Երբ VAT-ի աջակցությունը 켜ված է Ultimate Multisite-ում, այն կավելացնի լրացուցիչ դաշտ գնման ձևաթղթի մեջ՝ հաշվարկային հասցեի դաշտից ներքև։ Այս դաշտը կհայտնվի միայն ԵՄ-ում գտնվող հաճախորդների համար։

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Այնուհետև Ultimate Multisite-ը կստուգի VAT-ի համարը և եթե այն վերադառնում է որպես վավեր, կկիրառվի հակառակ լիցքավորման մեխանիզմը (reverse charge mechanism), և այդ պատվերի համար հարկային դրույքը կսահմանվի 0%-ի։
