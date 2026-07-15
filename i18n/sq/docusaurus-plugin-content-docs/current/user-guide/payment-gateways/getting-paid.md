---
title: Marrja e pagesës
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Marrja e pagesave (v2)

_**SHËNIM I RËNDËSISHËM: Ky artikull i referohet Ultimate Multisite versionit 2.x.**_

Ultimate Multisite ka një sistem të integruar anëtarësimi dhe faturimi. Që sistemi ynë i faturimit të funksionojë, kemi integruar portat më të zakonshme të pagesave të përdorura në tregtinë elektronike. Portat e parazgjedhura të pagesave në Ultimate Multisite janë _Stripe_ , _PayPal_ , dhe Pagesa Manuale. Mund të përdorni gjithashtu _WooCommerce_ , _GoCardless_ dhe _Payfast_ për të marrë pagesa duke instaluar add-on-et e tyre përkatëse.

## Cilësimet bazë {#basic-settings}

Mund të konfiguroni cilëndo nga këto porta pagesash te cilësimet e pagesave të Ultimate Multisite. Mund ta gjeni duke shkuar te **menuja Ultimate Multisite > Settings > Payments.**

![Faqja e cilësimeve të pagesave në Ultimate Multisite që shfaq panelin e Pagesave](/img/config/payments-settings-page.png)

Para se të konfiguroni portën tuaj të pagesave, ju lutemi hidhini një sy cilësimeve bazë të pagesave që mund të konfiguroni:

**Detyro auto-rin** **ovimin:** Kjo do të sigurojë që pagesa të përsëritet automatikisht në fund të çdo cikli faturimi, në varësi të frekuencës së faturimit që përdoruesi ka zgjedhur.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kontrollon nëse porta aktive ka një kredencial të ripërdorshëm rinovimi para se të ruajë një anëtarësim përsëritës me auto-rinovim të aktivizuar. Një kredencial rinovimi mund të jetë një abonim i portës, marrëveshje faturimi, token i ruajtur në vault, ose metodë e barasvlershme pagese e ripërdorshme. Nëse porta raporton se nuk ekziston asnjë kredencial i përdorshëm, Ultimate Multisite e ruan anëtarësimin, por çaktivizon auto-rinovimin dhe regjistron gjendjen e mungesës së kredencialit, që një administrator ose rrjedhë mbështetjeje t’i kërkojë klientit të riautorizojë pagesën para datës së rinovimit.

Kjo parandalon që një anëtarësim të duket sikur rinovohet automatikisht kur porta mund të mbledhë vetëm pagesa njëherëshe. Add-on-et e portave duhet të konfirmojnë që checkout-et përsëritëse ruajnë një kredencial të ripërdorshëm, veçanërisht kur porta mbështet si kapje njëherëshe, ashtu edhe mënyra pagese të ruajtura në vault/abonim.

**Lejo prova pa** **metodë pagese:** Me këtë opsion të aktivizuar, klienti juaj nuk do të duhet të shtojë asnjë informacion financiar gjatë procesit të regjistrimit. Kjo do të kërkohet vetëm pasi të skadojë periudha e provës.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Dërgo faturë pas konfirmimit të pagesës:** Kjo ju jep një opsion nëse të dërgohet apo jo një faturë pas pagesës. Vini re se përdoruesit do të kenë qasje në historikun e tyre të pagesave nën dashboard-in e nënsajtit të tyre. Ky opsion nuk zbatohet për Portën Manuale.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema e numërimit të faturave:** Këtu, mund të zgjidhni ose një kod reference pagese, ose një skemë numrash rendorë. Nëse zgjidhni të përdorni një kod reference pagese për faturat tuaja, nuk keni nevojë të konfiguroni asgjë. Nëse zgjidhni të përdorni një skemë numrash rendorë, do t’ju duhet të konfiguroni **numrin e faturës së radhës** (Ky numër do të përdoret si numri i faturës për faturën e radhës të gjeneruar në sistem. Ai rritet me një sa herë që krijohet një faturë e re. Mund ta ndryshoni dhe ta ruani për të rivendosur numrin rendor të faturës në një vlerë specifike) dhe **prefiksin e numrit të faturës.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ku të gjeni portat: {#where-to-find-the-gateways}

Mund t’i konfiguroni portat e pagesave në të njëjtën faqe ( **Ultimate Multisite > Settings > Payments**). Menjëherë poshtë **portave aktive të pagesave** , do të mund të shihni: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ dhe _Manual_.

![Seksioni i Portave Aktive të Pagesave që liston Stripe, Stripe Checkout, PayPal dhe Manual](/img/config/payments-active-gateways.png)

Kemi një artikull të dedikuar për çdo portë pagese që do t’ju udhëzojë nëpër hapat e konfigurimit të saj, të cilin mund ta gjeni në lidhjet më poshtë.

Mund të shikoni dhe të redaktoni detajet e pagesës:

![Ndërfaqja e redaktimit të pagesës](/img/admin/payment-edit.png)

Ja një pamje e plotë e faqes së redaktimit të pagesës:

![Ndërfaqja e plotë e redaktimit të pagesës](/img/admin/payment-edit-full.png)

Ja gjithashtu një pamje e plotë e cilësimeve të portave të pagesave:

![Faqja e plotë e cilësimeve të portave të pagesave](/img/config/settings-payments-gateways-full.png)

**Konfigurimi i portës Stripe**

**Konfigurimi i portës PayPal**** **

**Konfigurimi i pagesave manuale**

Tani, nëse dëshironi të përdorni _WooCommerce_ , _GoCardless_ ose _Payfast_ si portën tuaj të pagesave, do t’ju duhet të **instaloni dhe konfiguroni add-on-et e tyre**.

### Si të instaloni add-on-in WooCommerce: {#how-to-install-the-woocommerce-add-on}

E kuptojmë që _Stripe_ dhe _PayPal_ nuk janë të disponueshme në disa vende, gjë që kufizon ose pengon përdoruesit e Ultimate Multisite ta përdorin në mënyrë efektive plugin-in tonë. Prandaj krijuam një add-on për të integruar _WooCommerce,_ që është një plugin shumë i popullarizuar për tregti elektronike. Zhvillues nga e gjithë bota krijuan add-on-e për të integruar porta të ndryshme pagesash me të. Ne përfituam nga kjo për të zgjeruar portat e pagesave që mund të përdorni me sistemin e faturimit të Ultimate Multisite.

_**E RËNDËSISHME:** Ultimate Multisite: WooCommerce Integration kërkon që WooCommerce të jetë i aktivizuar të paktën në sajtin tuaj kryesor._

Së pari, ju lutemi shkoni te faqja e add-on-eve. Mund ta gjeni duke shkuar te **Ultimate Multisite > Settings**. Duhet të shihni tabelën **Add-ons**. Klikoni te **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Pasi të klikoni te **Check our Add-ons** , do të ridrejtoheni te faqja e add-on-eve. Këtu mund të gjeni të gjitha add-on-et e Ultimate Multisite. Klikoni te add-on-i **Ultimate Multisite: WooCommerce Integration**.

![Faqja e add-on-eve që liston add-on-et e Ultimate Multisite, përfshirë WooCommerce Integration](/img/addons/addons-page.png)

Do të shfaqet një dritare me detajet e shtesës. Thjesht klikoni te **Instalo tani**.

<!-- Pamja e ekranit nuk është e disponueshme: dialogu i detajeve të shtesës Ultimate Multisite WooCommerce Integration me butonin Install Now -->

Pasi instalimi të përfundojë, do të ridrejtoheni te faqja e shtojcave. Këtu, thjesht klikoni te **Aktivizo në rrjet** dhe shtesa WooCommerce do të aktivizohet në rrjetin tuaj.

<!-- Pamja e ekranit nuk është e disponueshme: faqja e shtojcave me lidhjen Network Activate për shtesën WooCommerce Integration -->

Pasi ta aktivizoni, nëse ende nuk e keni shtojcën WooCommerce të instaluar dhe të aktivizuar në uebsajtin tuaj, do të merrni një kujtesë.

<!-- Pamja e ekranit nuk është e disponueshme: njoftim administratori që i kujton administratorit të instalojë dhe aktivizojë shtojcën WooCommerce -->

Për të lexuar më shumë rreth shtesës WooCommerce Integration, **klikoni këtu**.

### Si të instaloni shtesën GoCardless: {#how-to-install-the-gocardless-add-on}

Hapat për të instaluar shtesën _GoCardless_ janë pothuajse të njëjtë si për shtesën _WooCommerce_. Ju lutemi shkoni te faqja e shtesave dhe zgjidhni shtesën **Ultimate Multisite: GoCardless Gateway**.

<!-- Pamja e ekranit nuk është e disponueshme: faqja e shtesave me shtesën Ultimate Multisite GoCardless Gateway të theksuar -->

Dritarja e shtesës do të shfaqet. Klikoni te **Instalo tani**.

<!-- Pamja e ekranit nuk është e disponueshme: dialogu i detajeve të shtesës Ultimate Multisite GoCardless Gateway me butonin Install Now -->

Pasi instalimi të përfundojë, do të ridrejtoheni te faqja e shtojcave. Këtu, thjesht klikoni te **Aktivizo në rrjet** dhe shtesa _GoCardless_ do të aktivizohet në rrjetin tuaj.

<!-- Pamja e ekranit nuk është e disponueshme: faqja e shtojcave me lidhjen Network Activate për shtesën GoCardless Gateway -->

Për të mësuar si të filloni me gateway-n _GoCardless_, **lexoni këtë artikull**.

### Si të instaloni shtesën Payfast: {#how-to-install-the-payfast-add-on}

Shkoni te faqja e shtesave dhe zgjidhni shtesën **Ultimate Multisite: Payfast Gateway**.

<!-- Pamja e ekranit nuk është e disponueshme: faqja e shtesave me shtesën Ultimate Multisite Payfast Gateway të theksuar -->

Dritarja e shtesës do të shfaqet. Klikoni te **Instalo tani.**

<!-- Pamja e ekranit nuk është e disponueshme: dialogu i detajeve të shtesës Ultimate Multisite Payfast Gateway me butonin Install Now -->

Pasi instalimi të përfundojë, do të ridrejtoheni te faqja e shtojcave. Këtu, thjesht klikoni te **Aktivizo në rrjet** dhe shtesa _Payfast_ do të aktivizohet në rrjetin tuaj.

<!-- Pamja e ekranit nuk është e disponueshme: faqja e shtojcave me lidhjen Network Activate për shtesën Payfast Gateway -->
