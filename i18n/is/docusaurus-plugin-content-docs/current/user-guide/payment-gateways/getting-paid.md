---
title: Fá innsköpun
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Getting Paid (v2)

_**VIKTIG LÝSING: Þessi grein er að vísara til Ultimate Multisite útgáfu 2.x.**_

Ultimate Multisite hefur innbyggt kerfi fyrir lán og reikninga. Til að reikningskerfið okkar verki sé, havemdu við það mest almennlegust betalingsgerðir sem eru notaðar í e-commerce. Standard betalingsgerðir í Ultimate Multisite eru _Stripe_, _PayPal_ og Handamennbetun (Manual Payment). Þú getur notað einnig _WooCommerce_, _GoCardless_ og _Payfast_ til að fá betalingar með því að installa þeirra viðbótagerðir.

## Grundleggjandi innstillingar

Þú getur hleitt einhver af þessum betalingsgerðum undir innstillingum betalingskerfisins í Ultimate Multisite. Þú getur finnt það með því að ferðast yfir **Ultimate Multisite menu > Settings > Payments.**

![Sida fyrir innstillingar betalingskerfisins í Ultimate Multisite sem sýnir panelinn fyrir betalingar](/img/config/payments-settings-page.png)

Fyrir að þú settur upp betalingsgerðina þína, skoðaðu almennlegar innstillingar betalingskerfisins sem þú getur hleitt:

**Force auto-rene** **w:** Þetta mun tryggja að betalingin verki á sjálfvirka hátt í endanlegu endanlegt á hvert reikningshlið, eftir að nota upphaflega valinn reikningartíma.

<!-- Screenshot unavailable: Innstilling til að fjarljóta Sjálfvirkni uppspötnandi betalingar á síninni -->

Ultimate Multisite v2.13.0 skilar því eftir því hvort aktiv gerðin hafi meðferðarheiti fyrir uppspötnandi viðgerðarann (renewal credential) áður en hún hefur lagt upp sjálfvirka lán og uppspötnandi betalingu. Viðgerðarheiti getur verið skýrðning gerðar, reikningssamþykki, frosinn vörðartoken eða jafnvel övrött betalingshætt fyrir uppspötnanda. Ef gerðin segir að ekki verið sé nánast notað heiti, lagar Ultimate Multisite lánið en sláttar sjálfvirka lán og skýrðar tilstandina þar sem heitið er glámt, svo að stjórnari eða støðuþjónustu geti fótlegt viðskiptavininn um að athuga betalingssamþykki fyrir endanlegur ákvörðun.

Þetta hindrar inn membership frá að sjálfskynja sig sem á vöxtu með því að gateway-inn geti að nota einnbliks betalningar. Gateway add-ons verða að staðfest að uppspöngum fyrir afturbetald (recurring checkouts) sé stóð í að lagast við ákveðna greiðslum, sérstaklega þegar gateway-inn stendurðar framleiðilega einbliksbetalningu og skráðir betalningar í vöxtulistum/skráningum.

**Leita fyrir prófanir án betalningsrétt:** **Við þessari möguleika á að veita prófanir án betalningsrétts** þurfa ekki viðkomandi ekki að bæta fínansupplýsingum í skráningu. Þetta krefst bara einnu sinni eftir að prófanarmið er laukið.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Senda faktu á staðfestingu betalningar:** Þessi möguleiki gefur þér val um hvort þú vilji sendja faktu eftir að betalningin sé staðfest. Skilyrði er að notendur ná til að sjá betalningshistorikuna sína undir dashboard-inn fyrir subsite sín. Þessi möguleiki skilar ekki við Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema númerunar faktu:** Hér geturðu velja eða betalningsrétt (payment reference code) eða séri á eftirskipti númerum (sequential number scheme). Ef þú væri að nota betalningsrétt fyrir faktuð, þá þarft ekki að setja upp nýtt. Ef þú væri að nota séri á eftirskipti númerum, þá þurftu að setja upp **næsta faktu númer** (Þetta númerinn verður notið sem faktu númer fyrir næst faktuð í systeminu. Það aukast um eina hverju sinni nýtt faktu er skráð. Þú getur breytt það og lagt farið til að setja séri á eftirskipti númerum upphaflega gildi) og **faktu númeran fyrir fram.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Næsta faktuurinnúmer og faktuurinnúmerforskráninga sýnast þegar Sekventur númer er valdið -->

## Hvar finna gateway-gerðir:

Þú getur sett upp betalingsgateway-gerðir á sama yfirskrifum ( **Ultimate Multisite > Settings > Payments**). Á stöðvar eftir **active payment gateways** sjáðu þú: _Stripe_, _Stripe_ Checkout, _PayPal_ og _Manual_.

![Sektion active Payment Gateways sýnandi Stripe, Stripe Checkout, PayPal og Manual](/img/config/payments-active-gateways.png)

Við haveðum sérstaka grein fyrir hverju betalingsgateway-gerði sem mun leiða þig í skrefum sett upp það, sem þú getur finna á linkjum hér að neðan.

Þú getur skoðað og breytt betalingsupplýsingar:

![Payment edit interface](/img/admin/payment-edit.png)

Hér er fullt sýn á faktuurbreytingasíðunni:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Hér er einnig fullt sýn á settum fyrir betalingsgateway-gerðir:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Sett upp Stripe gateway**

**Sett upp PayPal gateway**** **

**Sett upp mannvænt betalingar**

En nú, ef þú vilt nota _WooCommerce_, _GoCardless_ eða _Payfast_ sem betalingsgateway-gerðið þitt, þurfa þú að **installara og sett upp viðbótunum þeirra**.

### Hvernig installa WooCommerce viðbótann:

Við skiljum að _Stripe_ og _PayPal_ eru ekki tilfélög í nokkrum löndum sem takmarka eða hindra Ultimate Multisite notendur í að nota okkar pluginu á effektiv hátt. Því hefur við skiptum viðbót sett upp til að tengja _WooCommerce_, sem er mjög vinsætt e-commerce plugin. Uppbyggjendur allsvarða alda hafa skipti viðbót sett upp til að tengja þetta með öðrum betalingsgateway-gerðum. Við hefur notað þetta til að nýta það og breyta betalingsgateway-gerðum sem þú getur nota í reikningarsysteminu fyrir Ultimate Multisite.

**VIKTIG:** Ultimate Multisite: Inngang til WooCommerce krefst at WooCommerce er aktivert á að minnsta restur á hlutina þínum vísar.

Fyrst, ferðu í viðbótli-skýrslu (add-ons page). Þú getur tekið það með því að fara yfir **Ultimate Multisite > Settings**. Þar þarf þú að sjá **Add-ons** bảnginn. Klikka á **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Eftir að hafa klikkað á **Check our Add-ons**, verður þú leiðréttur til add-ons-skýrslunnar. Hér finnur þú allar Ultimate Multisite add-ons. Klikka á add-oninn **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Stöð ískipta (window) mun spyr upp með upplýsingum um add-oninn. Klikka bara á **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Eftir að installeringin er fullyð, verður þú leiðréttur til flugna (plugins) skýrslunnar. Hér klikka bara á **Network Activate** og WooCommerce add-oninn mun verið aktivert á netverk þínum.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Eftir að hafa aktivert það, ef þú hverjuð ekki enn WooCommerce plugininn sett og aktivert á vefsíðuna þinni, verður þú gettingur minning.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Til að lesa meira um add-oninn **klikka hér**.

### Hvernig nota GoCardless add-oninn:

All þættir til að installa _GoCardless_ add-oninn eru mjög eins og við _WooCommerce_ add-oninn. Skilyrðingast beistur yfir á add-ons síðuna og veldu **Ultimate Multisite: GoCardless Gateway** add-oninn.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Við munnið opna sig upp. Klikka á **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Eftir að installation er glað, mun þú verið leiðréttur yfir í plugins síðuna. Hér klikkaðu bara á **Network Activate** og _GoCardless_ add-oninn mun verið aktivert á netinu þínu.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Til að læra hvernig byrja með _GoCardless_ gateway, **lesi þetta grein**.

### Hvernig installa Payfast add-oninn:

Ganga yfir á add-ons síðuna og veldu **Ultimate Multisite: Payfast Gateway** add-oninn.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Við munnið opna sig upp. Klikka á **Install Now.**

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Eftir að installation er glað, mun þú verið leiðréttur yfir í plugins síðuna. Hér klikkaðu bara á **Network Activate** og _Payfast_ add-oninn mun verið aktivert á netinu þínu.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
