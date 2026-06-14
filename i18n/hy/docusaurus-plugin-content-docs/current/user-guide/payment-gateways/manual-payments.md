---
title: Ձեռքով վճարումների սահմանում
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# ձեռքով վճարումների կարգավորում (v2)

_**ԿԱՐԵՎՈՐ ՆՇՈՒՄ. Այս հոդվածը վերաբերում է Ultimate Multisite-ի 2.x տարբերակին։**_

Ձեռքով վճարումները միջոց են, որ դուք առաջարկում եք այլ վճարման մեթոդներ ձեր օգտվողների համար՝ եթե **Stripe** կամ **PayPal** հասանելի չեն նրանց համար։ Սա կարող լինել փոստային տեղափոխանուն (wire) կամ բանկային փոխանցում կամ Ձեր օգտվողների համար տեղականորեն հասանելի ցանկացած այլ վճարման մեթոդ։

## Ինչպես ապահովել ձեռքով վճարումները

Ձեռքով վճարումների կարգավորումը շատ հեշտ է։ Դուք պարզապես պետք է այն ապահովեք «Payment Gateways»-ի ներքո և մանրամասն ցուցումներ տաք, թե ինչպես պետք է օգտվողը կատարի վճարումը։

Նախ, գնացեք **Ultimate Multisite > Settings > Payments**-ին։ «Payment Gateways»-ի ներքո, միացրեք **Manual**-ը։ Դուք կտեսնեք, որ ձեզ կհայտնվի **Payment Instructions** (Վճարման ցուցումներ) բաժին։

Այս բաժնի մեջ ավելացրեք տեղեկություն, որը պետք է օգտվողը ներկայացնի վճարումը։ Սա կարող լինել ձեր բանկային հաշվի մանրամասները և ձեր էլ․փոստը, որպեսզի օգտվողը կարող է Ձեզ ուղարկել վճարման հաստատման հաղորդագրություն, օրինակ։

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ահա ձեռքով մուտքի կարգավորումների ինտերֆեյսը.

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Կարգավորելուց հետո պարզապես սեղմեք **Save Settings**-ը և ավարտվեց։ Երբ օգտվողները գրանցվում են ձեր ցանցում, նրանք կտեսնեն հաղորդագրություն, որով ասված է, որ կստանան Ձեր ցուցումները՝ գնումը շարունակելու համար։

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Եվ նրանք նաև կստանան հաղորդագրություն Ձեր **Thank You** էջում՝ վճարման ցուցումներով։

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Ձեռքով վճարումների հաստատում

Ձեռքով վճարումը հաստատելու համար գնացեք ձախ բջիջի **Payments** մենյու։ Այնտեղ կարող եք տեսնել ձեր ցանցի բոլոր վճարումները և դրանց մանրամասները, ներառյալ դրանց **status**-ը (상태)։ Ձեռքով կատարված վճարումը միշտ կունենա **Pending** (Սպասվում է) կարգավիճակը մինչև ձեր կողմից ձեռքով փոփոխելը։

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Մուտքագրեք վճարման էջը՝ սեղմելով **reference code** (հղման կոդը)։ Այս էջում ունեք բոլոր մանրամասները սպասվող վճարման համար, ինչպիսիք են reference ID-ն, արտադրանքները, ժամանակագրությունները և այլ բաներ։

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Աջ կոլոնում կարող եք փոխել վճարման կարգավիճակը։ Այն **Completed** (Ավարտված) դարձնելով և **Activate Membership** (Մասնակցության ակտիվացում) տարբերակը աշխուժացնելով, դուք թույլ կտաք ձեր հաճախորդի սայթին և նրա անդամակցությունը կմիացվի։

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
