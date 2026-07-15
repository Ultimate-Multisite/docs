---
title: Cael eich talu
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Cael eich Talu (v2)

_**NODYN PWYSIG: Mae'r erthygl hon yn cyfeirio at Ultimate Multisite fersiwn 2.x.**_

Mae gan Ultimate Multisite system aelodaeth a bilio fewnol. Er mwyn i'n system bilio weithredu, rydym wedi integreiddio'r pyrth talu mwyaf cyffredin a ddefnyddir mewn e-fasnach. Y pyrth talu diofyn yn Ultimate Multisite yw _Stripe_ , _PayPal_ , a Thaliad â Llaw. Gallwch hefyd ddefnyddio _WooCommerce_ , _GoCardless_ a _Payfast_ i dderbyn taliadau drwy osod eu hychwanegion priodol.

## Gosodiadau Sylfaenol {#basic-settings}

Gallwch ffurfweddu unrhyw un o'r pyrth talu hyn o dan osodiadau talu Ultimate Multisite. Gallwch ddod o hyd iddo drwy fynd i **Ultimate Multisite menu > Settings > Payments.**

![Tudalen gosodiadau taliadau yn Ultimate Multisite yn dangos y panel Taliadau](/img/config/payments-settings-page.png)

Cyn i chi sefydlu eich porth talu, edrychwch ar y gosodiadau talu sylfaenol y gallwch eu ffurfweddu:

**Gorfodi adnewyddu awtomati** **g:** Bydd hyn yn sicrhau y bydd y taliad yn ailadrodd yn awtomatig ar ddiwedd pob cylch bilio yn dibynnu ar yr amlder bilio a ddewisodd y defnyddiwr.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Mae Ultimate Multisite v2.13.0 yn gwirio a oes gan y porth gweithredol gymhwyster adnewyddu ailddefnyddiadwy cyn cadw aelodaeth gylchol gydag adnewyddu awtomatig wedi'i alluogi. Gall cymhwyster adnewyddu fod yn danysgrifiad porth, cytundeb bilio, tocyn vault wedi'i gadw, neu ddull talu ailddefnyddiadwy cyfatebol. Os yw'r porth yn adrodd nad oes cymhwyster defnyddiadwy yn bodoli, mae Ultimate Multisite yn cadw'r aelodaeth ond yn diffodd adnewyddu awtomatig ac yn cofnodi'r cyflwr cymhwyster coll fel y gall gweinyddwr neu lif cymorth ofyn i'r cwsmer ail-awdurdodi taliad cyn y dyddiad adnewyddu.

Mae hyn yn atal aelodaeth rhag ymddangos fel petai'n adnewyddu'n awtomatig pan all y porth gasglu taliadau untro yn unig. Dylai hychwanegion porth gadarnhau bod taliadau cylchol yn storio cymhwyster ailddefnyddiadwy, yn enwedig pan fo'r porth yn cefnogi cipio untro a moddau talu vault/tanysgrifiad.

**Caniatáu treialon heb ddull talu:** Gyda'r opsiwn hwn wedi'i alluogi ni fydd rhaid i'ch cleient ychwanegu unrhyw wybodaeth ariannol yn ystod y broses gofrestru. Dim ond pan fydd y cyfnod treialu yn dod i ben y bydd hyn yn ofynnol.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Anfon anfoneb ar gadarnhad taliad:** Mae hyn yn rhoi opsiwn i chi a ddylid anfon anfoneb ar ôl taliad ai peidio. Sylwch y bydd gan ddefnyddwyr fynediad at eu hanes talu o dan eu Dashboard is-safle. Nid yw'r opsiwn hwn yn berthnasol i'r Porth â Llaw.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Cynllun rhifo anfonebau:** Yma, gallwch ddewis naill ai cod cyfeirnod talu neu gynllun rhifau dilyniannol. Os dewiswch ddefnyddio cod cyfeirnod talu ar gyfer eich anfonebau, nid oes angen i chi ffurfweddu unrhyw beth. Os dewiswch ddefnyddio cynllun rhifau dilyniannol, bydd angen i chi ffurfweddu'r **rhif anfoneb nesaf** (Bydd y rhif hwn yn cael ei ddefnyddio fel rhif yr anfoneb ar gyfer yr anfoneb nesaf a gynhyrchir ar y system. Mae'n cynyddu o un bob tro y caiff anfoneb newydd ei chreu. Gallwch ei newid a'i gadw i ailosod rhif dilyniannol yr anfoneb i werth penodol) a'r **rhagddodiad rhif anfoneb.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ble i ddod o hyd i'r pyrth: {#where-to-find-the-gateways}

Gallwch sefydlu'r pyrth talu ar yr un dudalen ( **Ultimate Multisite > Settings > Payments**). Yn union o dan **pyrth talu gweithredol** , byddwch yn gallu gweld: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ a _Manual_.

![Adran Pyrth Talu Gweithredol yn rhestru Stripe, Stripe Checkout, PayPal a Manual](/img/config/payments-active-gateways.png)

Mae gennym erthygl benodol ar gyfer pob porth talu a fydd yn eich tywys drwy'r camau i'w sefydlu, ac fe'i gallwch ddod o hyd iddi drwy'r dolenni isod.

Gallwch weld a golygu manylion talu:

![Rhyngwyneb golygu taliad](/img/admin/payment-edit.png)

Dyma olwg lawn ar y dudalen golygu taliad:

![Rhyngwyneb llawn golygu taliad](/img/admin/payment-edit-full.png)

Dyma hefyd olwg lawn ar osodiadau'r pyrth talu:

![Tudalen lawn gosodiadau pyrth talu](/img/config/settings-payments-gateways-full.png)

**Sefydlu porth Stripe**

**Sefydlu porth PayPal**** **

**Sefydlu taliadau â llaw**

Nawr, os ydych am ddefnyddio _WooCommerce_ , _GoCardless_ neu _Payfast_ fel eich porth talu, bydd angen i chi **osod a ffurfweddu eu hychwanegion**.

### Sut i osod yr ychwanegyn WooCommerce: {#how-to-install-the-woocommerce-add-on}

Rydym yn deall nad yw _Stripe_ a _PayPal_ ar gael mewn rhai gwledydd, sy'n cyfyngu neu'n rhwystro defnyddwyr Ultimate Multisite rhag defnyddio ein plugin yn effeithiol. Felly crëwyd ychwanegyn gennym i integreiddio _WooCommerce,_ sy'n plugin e-fasnach poblogaidd iawn. Creodd datblygwyr ledled y byd hychwanegion i integreiddio pyrth talu gwahanol iddo. Gwnaethom fanteisio ar hyn i ehangu'r pyrth talu y gallwch eu defnyddio gyda system bilio Ultimate Multisite.

_**PWYSIG:** Mae Ultimate Multisite: WooCommerce Integration yn gofyn bod WooCommerce wedi'i actifadu o leiaf ar eich prif safle._

Yn gyntaf, ewch i'r dudalen hychwanegion. Gallwch ddod o hyd iddi drwy fynd i **Ultimate Multisite > Settings**. Dylech weld y tabl **Ychwanegion**. Cliciwch ar **Gwiriwch ein Hychwanegion**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Ar ôl clicio ar **Gwiriwch ein Hychwanegion** , cewch eich ailgyfeirio i'r dudalen hychwanegion. Yma gallwch ddod o hyd i holl hychwanegion Ultimate Multisite. Cliciwch ar ychwanegyn **Ultimate Multisite: WooCommerce Integration**.

![Tudalen hychwanegion yn rhestru ychwanegion Ultimate Multisite gan gynnwys WooCommerce Integration](/img/addons/addons-page.png)

Bydd ffenestr yn ymddangos gyda manylion yr ychwanegyn. Cliciwch ar **Gosod Nawr**.

<!-- Sgrinlun ddim ar gael: deialog manylion ychwanegyn Ultimate Multisite WooCommerce Integration gyda botwm Gosod Nawr -->

Ar ôl i’r gosodiad orffen, cewch eich ailgyfeirio i dudalen yr ategion. Yma, cliciwch ar **Galluogi ar y Rhwydwaith** a bydd yr ychwanegyn WooCommerce yn cael ei alluogi ar eich rhwydwaith.

<!-- Sgrinlun ddim ar gael: tudalen ategion gyda’r ddolen Galluogi ar y Rhwydwaith ar gyfer ychwanegyn WooCommerce Integration -->

Ar ôl ei alluogi, os nad yw’r ategyn WooCommerce gennych wedi’i osod a’i alluogi ar eich gwefan o hyd, byddwch yn derbyn atgoffa.

<!-- Sgrinlun ddim ar gael: hysbysiad gweinyddol yn atgoffa’r gweinyddwr i osod a galluogi’r ategyn WooCommerce -->

I ddarllen mwy am yr ychwanegyn WooCommerce Integration, **cliciwch yma**.

### Sut i osod yr ychwanegyn GoCardless: {#how-to-install-the-gocardless-add-on}

Mae’r camau i osod yr ychwanegyn _GoCardless_ bron yr un fath â’r ychwanegyn _WooCommerce_. Ewch i dudalen yr ychwanegion a dewiswch yr ychwanegyn **Ultimate Multisite: GoCardless Gateway**.

<!-- Sgrinlun ddim ar gael: tudalen ychwanegion gyda’r ychwanegyn Ultimate Multisite GoCardless Gateway wedi’i amlygu -->

Bydd ffenestr yr ychwanegyn yn ymddangos. Cliciwch ar **Gosod Nawr**.

<!-- Sgrinlun ddim ar gael: deialog manylion ychwanegyn Ultimate Multisite GoCardless Gateway gyda botwm Gosod Nawr -->

Ar ôl i’r gosodiad orffen, cewch eich ailgyfeirio i dudalen yr ategion. Yma, cliciwch ar **Galluogi ar y Rhwydwaith** a bydd yr ychwanegyn _GoCardless_ yn cael ei alluogi ar eich rhwydwaith.

<!-- Sgrinlun ddim ar gael: tudalen ategion gyda’r ddolen Galluogi ar y Rhwydwaith ar gyfer ychwanegyn GoCardless Gateway -->

I ddysgu sut i ddechrau gyda gateway _GoCardless_, **darllenwch yr erthygl hon**.

### Sut i osod yr ychwanegyn Payfast: {#how-to-install-the-payfast-add-on}

Ewch i dudalen yr ychwanegion a dewiswch yr ychwanegyn **Ultimate Multisite: Payfast Gateway**.

<!-- Sgrinlun ddim ar gael: tudalen ychwanegion gyda’r ychwanegyn Ultimate Multisite Payfast Gateway wedi’i amlygu -->

Bydd ffenestr yr ychwanegyn yn ymddangos. Cliciwch ar **Gosod Nawr.**

<!-- Sgrinlun ddim ar gael: deialog manylion ychwanegyn Ultimate Multisite Payfast Gateway gyda botwm Gosod Nawr -->

Ar ôl i’r gosodiad orffen, cewch eich ailgyfeirio i dudalen yr ategion. Yma, cliciwch ar **Galluogi ar y Rhwydwaith** a bydd yr ychwanegyn _Payfast_ yn cael ei alluogi ar eich rhwydwaith.

<!-- Sgrinlun ddim ar gael: tudalen ategion gyda’r ddolen Galluogi ar y Rhwydwaith ar gyfer ychwanegyn Payfast Gateway -->
