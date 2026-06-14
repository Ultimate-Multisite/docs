---
title: Gaelau'r talu
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Cyflawio (v2)

_**NOTYNCHOLER: Mae'r ailainau hyn mae'n cyfeiriaddu i Ultimate Multisite ffurfenn 2.x.**_

Mae Ultimate Multisite gyda system o chwarae a chyflogi yn ei gynnwys. I fod ystafell chyflogi ein system yn weithio, rydyn ni wedi cyfuno'r gwyllyddau peobolion cyffredinol a ddefnyddir mewn e-commerce. Mae'r gwyllyddau chyflogi cyffredinol yn Ultimate Multisite yn _Stripe_, _PayPal_ a Chyflawd Manwl (Manual Payment). Gallwch hefyd defnyddio _WooCommerce_, _GoCardless_ a _Payfast_ i derbyn y cyflogau gan ddefnyddio'r add-ons eu cyffredinol.

## Cysyniadau Gymraegol (Basic Settings)

Gallwch gyfarfynnu unrhyw un o'r gwyllyddau chyflogi hyn yn ôl cysyniadau chyflogi Ultimate Multisite. Gallwch chi ddod i'r lle hwn gan fynd i **Ultimate Multisite menu > Settings > Payments.**

![Pagadu chyflogi mewn Ultimate Multisite yn dangos y panel Chyflawd](/img/config/payments-settings-page.png)

Cynaf i'r chwarae eich gwyllydd chyflogi, osaiwch aros y cysyniadau chyflogi gymraegol sy gallwch gyfarfynnu:

**Force auto-rene w:** Bydd hyn yn sicr bod y cyflog yn cael ei dychwilio'n awt yn ôl ar ddiwedd pob cyfrifau chyflogi yn ôl y ffurfyn chyflogi a ddewiswyd gan yborydd.

<!-- Screenshot unavailable: Cysyniad Force Auto-Renew ar y pagadu chyflogi -->

Mae Ultimate Multisite v2.13.0 yn gweld pwyll wrth y gwyllydd cyflwynig i gael cyd-derbyn newidiad (renewal credential) ar gyfer y cyflogau a chwarae amrywiol cyn cadw'r chyflogi ddefnyddiol gyda auto-renewal yn cael ei wneud. Gallai newidiad (credential) fod yn cyflwyniad gwyllydd, cytiad chyflogi, token vault wedi'i cadw, neu ffurfyn chyflogi amrywiol sy'n ddefnyddiol. Os mae'r chwarae yn rhoi adrodd bod nid oes unrhyw newidiad ddefnyddiol sydd ar gael, mae Ultimate Multisite yn cadw y cyflwyniad ond mae auto-renewal yn cael ei wneud yn ôl a mae'r cyfystam o ddefnyddio'r chyflawd yn cael ei recordio fel cyflwr missing-credential i'r admin neu ffordd cefnogaeth i gael y cytuned o'r cyd-derbyn y cyflog cyn dyddiad y newidiad.

Mae hyn yn gwarchod i ddarganfod bod y cyfrifol (membership) yn dangos bod yn ail-gynalio'n awt (auto-renew) pan gall y gateway llwybr yn cyfathogh pmoda phaidau unigol. Rhaid i add-ons y gateway sicrwydd bod y cyfrifolau allweddol yn storio credential refrymiol, yn enwedig pan mae'r gateway yn chynllunio am ymodau phaidau unigol a fmoda phaidau wedi'u storio/cyfrifol (vaulted/subscription).

**Rhaid i'w gael trial heb fmoda phaid:** gyda'r opsiwn hwn yn cael ei gyflwyno, nid yn ddeallai eich cleient dod o hyd i roi unrhyw wybodaeth argyfwngol yn ystod y cyfnod trial. Bydd hyn yn cael ei hanfod yn unig pan fydd y cyfnod trial wedi'i gweraidd.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Anfon ffurf gweithredol ar gyfer cyfathod phaid:** Mae hyn yn rhoi opsiwn i chi beth yw'r anfon ffurf gweithredol ar ôl y cyfathod phaid. Rhowch i gyd yn sylw bod y bydd y bywogion yn cael cadarnhau eu hanes phaid o hyd yn ddefnyddio eu dashboard ystod eu subsite. Mae'r opsiwn hwn nid yn golygu ar gyfer y Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Cyflenau cyfrifol ffurf gweithredol:** Yn y cyflenau hwn, gallwch ddewis rhan o cod refi phaid neu drefn cyfrifol. Os ydych chi'n gw milltu cod refi phaid ar gyfer eich ffurfiadau gweithredol, nid uedd yn angen i chi'n cyflwyno unrhyw beth. Os ydych chi'n gw milltu drefn cyfrifol, byddwch yn angen i chi'n cyflwyno'r **cyfrif ffurf gweithredol nesaf** (Bydd y cyfrif hwn yn cael ei ddefnyddio fel cyfrif ffurf gweithredol ar gyfer y ffurf gweithredol nesaf a dynnodd ar y system. Bydd yn cael ei gwella'r un pan fod y ffurf gweithredol newydd wedi'i creu. Gallwch ei newid ac ei storio i ddefnyddio'r cyfrif cyfrifol o'r ffurf gweithredol i ddarganfod yn gyflwyno'r unigol i'r ffurf gweithredol nesaf). a'r **prefysg cyfrif ffurf gweithredol**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Oilech chi'r gweithredigau:

Galluwch y gatewayau o ddarlun ar yr unill ( **Ultimate Multisite > Settings > Payments**). Ar ddefnyddio'r "active payment gateways" (gatewayau o ddarlun cyflwyniad) yn llwyr, byddwch yn gallu gweld: _Stripe_, _Stripe_ Checkout, _PayPal_ a _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Mae ein gweithrediad cyflawn ar gyfer pob gateway o ddarlun sydd yn rhoi'r cyfarwyddiadau i chi am ystafellu ei ddefnyddio, ac gallwch gweld nhw ar y lwybrau isodol ymlaen.

Gallwch gweld a redig ystafellau ymdrechion:

![Payment edit interface](/img/admin/payment-edit.png)

Dyma'r gweld cyfan o'r dogfenniad ymdrechion:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Dyma hefyd y gweld cyfan o'r setegau gatewayau o ddarlun:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Setegau'r gateway Stripe**

**Setegau'r gateway PayPal**** **

**Setegau'r ymdrechion manual**

Er mwyn gwneud ei ddefnyddio _WooCommerce_, _GoCardless_ neu _Payfast_ fel eich gateway o ddarlun, byddwch yn angen i chi **llwyddo â'u add-ons a setegio nhw**.

### Sut i llwytho'r add-on WooCommerce:

Rydyn ni'n deall bod _Stripe_ a _PayPal_ nid yn cael eu cyflwyno mewn rhai lleoedd sy'n hanwy neu'n gaelau'r defnyddwyr Ultimate Multisite i ddefnyddio'r plugin yn effeithiol. Felly, cyfathoghodd ni'r add-on i integreiddio _WooCommerce_, sydd yn plugin e-commerce iawn cyffredinol. Mae ddewyrwyr o'r byd wedi creu add-ons i integreiddio gatewayau o ddarlun cyfan gyda hi. Rwy'n cael ychwanegol hyn i gyflwyno'r gatewayau o ddarlun a gallwch ddefnyddio gyda'r system gweithredig Ultimate Multisite.

_**IMPORTANT:** Mae'r ychwanegiadau Ultimate Multisite yw'n angen i fod yn cael ei gweithredu ar WooCommerce ar gyfer y ffurfau eich siantref cyflym.</p>

Cyfrifol, gof allan i'r lleoliad add-ons. Gallwch chi ddod i'r **Ultimate Multisite > Settings** i'w dod o hyd. Dodai chi gweld y tab **Add-ons**. Clic ar **Check our Add-ons**.

<!-- Screenshot unavailable: Tab add-ons ar y llawerau setegau Ultimate Multisite gyda link Check our Add-ons -->

Ar ôl clisi ar **Check our Add-ons**, byddwch yn cael chi ddirgoi i'r lleoliad add-ons. Yn y cyflym hwn, gallwch dod o hyd i'r holl add-ons Ultimate Multisite. Clic ar y add-on **Ultimate Multisite: WooCommerce Integration**.

![Lleoliad add-ons sy'n listi add-ons Ultimate Multisite gan gynnwys WooCommerce Integration](/img/addons/addons-page.png)

Bydd gweldwch un fenyw gyda'r cyflwyniadau y add-on. Clic dim ond ar **Install Now**.

<!-- Screenshot unavailable: Cyflwyniad feithiau add-on Ultimate Multisite WooCommerce gyda bot Install Now -->

Ar ôl i fod y chwarae wedi'i gwneud, bydd chi ddirgoi i'r lleoliad plugins. Yn y cyflym hwn, clisi dim ond ar **Network Activate** ac bydd y add-on WooCommerce yn cael ei gweithredu ar eich rheol.

<!-- Screenshot unavailable: Lleoliad plugins gyda'r link Network Activate ar gyfer y add-on WooCommerce Integration -->

Ar ôl i fod ei weithredu, os ydych chi nid oes gennych chi'r plugin WooCommerce wedi'i gweithredu a'i cael ei weithredu ar eich gwefan, byddwch yn cael eich amgofal.

<!-- Screenshot unavailable: Cyfeiriad admin sy'n amgofal y admin i gosod a weithredu'r plugin WooCommerce -->

I weld mwy am y add-on WooCommerce Integration, **clisi yma**.

### Sut i gosi'r add-on GoCardless:

Mae'r dystiadur i gael y modd yn ei chwarae yw misol fel y modd _WooCommerce_. Rhowchwch i'r peidiad o add-ons a wybylwch ar gyfer **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Peidiad o add-ons gyda'r modd Ultimate Multisite GoCardless Gateway wedi'i darlunio -->

Bydd y gwndwr y modd yn pop-up. Clic ar **Install Now**.

<!-- Screenshot unavailable: Ddeallau y modd Ultimate Multisite GoCardless Gateway gyda chwynnig Install Now -->

Ar ôl i'r chwarae diwedd, byddwch yn cael eich reiddirol i'r peidiad o plugins. Yn y cyfnod hwn, cliwch ar **Network Activate** ac fydd y modd _GoCardless_ wedi'i chwarae ar eich rheol.

<!-- Screenshot unavailable: Peidiad o plugins gyda'r linc Network Activate ar gyfer y modd GoCardless Gateway -->

I weld sut i entynnu gyda'r gateway _GoCardless_, **readwch ythis anfon**.

### Sut i chwarae'r modd Payfast:

Rhowchwch i'r peidiad o add-ons a wybylwch ar gyfer **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Peidiad o add-ons gyda'r modd Ultimate Multisite Payfast Gateway wedi'i darlunio -->

Bydd y gwndwr y modd yn pop-up. Clic ar **Install Now.**

<!-- Screenshot unavailable: Ddeallau y modd Ultimate Multisite Payfast Gateway gyda chwynnig Install Now -->

Ar ôl i'r chwarae diwedd, byddwch yn cael eich reiddirol i'r peidiad o plugins. Yn y cyfnod hwn, cliwch ar **Network Activate** ac fydd y modd _Payfast_ wedi'i chwarae ar eich rheol.

<!-- Screenshot unavailable: Peidiad o plugins gyda'r linc Network Activate ar gyfer y modd Payfast Gateway -->
