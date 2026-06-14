---
title: Marrja të Pagimeve
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Marrja (v2)

_**SHËNIM I RËTHM: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Ultimate Multisite ka një sistem të integruar për anëtarësim dhe faturim. Për që sistemi ynë i faturimit të funksionojë, ne kemi integruar më të përdorur gateway-t e pagesave që përdoren në e-commerce. Gateway-t e pagesave standard në Ultimate Multisite janë _Stripe_, _PayPal_ dhe Pagesa Manuale. Ju mund të përdorni gjithashtu _WooCommerce_, _GoCardless_ dhe _Payfast_ duke instaluar add-on-ët e tyre për të marrë pagesat.

## Cila janë Cilësimet Bazë

Ju mund të konfigurosh çdo prej këtyre gateway-ve të pagesave në cilësimet e pagesave të Ultimate Multisite. Ju mund ta gjeni duke shkuar te **Ultimate Multisite menu > Settings > Payments.**

![Pagja e cilësimeve të pagesave në Ultimate Multisite që tregon paneli i Pagesave](/img/config/payments-settings-page.png)

Para se të vendosni gateway-n tuaj të pagesave, ju lutem shikoni cilësimet bazë të pagesave që mund të konfigurosh:

**Force auto-rene** **w:** Kjo do të sigurojë që pagesa do të përsëriten automatikisht në fund të çdo cikli faturimi duke u bazuar në frekuencën e faturimit që ka zgjedhur përdoruesi.

<!-- Screenshot unavailable: Cilësimi i ndryshueshëm Force Auto-Renew në faqen e cilësimeve të pagesave -->

Ultimate Multisite v2.13.0 kontrollon nëse gateway-ja aktive ka një kredencial rifillimi të përdorur para se të ruhet një anëtarësim i përsëritur me auto-refill aktiv. Një kredencial rifillimi mund të jetë një abonim gateway, një marrëveshje faturimi, një token vault të ruajtur ose një metodë e pagesave e përdorur e përsëritur ekvivalente. Nëse gateway-ja raporton se nuk ka asnjë kredencial të përdorur, Ultimate Multisite ruaj anëtarinë por i ndalon auto-refill dhe regjiston gjendjen e kredencialit të munguar në mënyrë që një administrator ose fluksi i mbështetjes mund t'i kërkojë klientit të riautorizojë pagesën para datës së rifillimit.

Kjo pengonjone ndalmon që një anëtarje të mos shfaqet si auto-rikuperim kur porta (gateway) mund të mblidhet vetëm pagesa me pagues të vetëm. Shtesat e portës duhet të konfirmojnë se proceset e paguesve të përsëritura ruajnë një kredencial që mund të përdoret, veçanërisht kur porta mbështet si mode për marrje të vetme dhe si mode pagese me depozit (vaulted) ose abonim.

**Lejoni provimet pa metodë pagese** **metoda:** Me këtë opsion aktiv, klienti juaj nuk do të duhet të shtojë asnjë informacion financiar gjatë procesit të regjistrimit. Kjo do të nevojitet vetëm kur periudha e provimit piqet.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Dërgo invoice pas konfirmimit të pagesës:** Ky ju jep opsionin nëse dëshironi apo jo të dërgoni një fakturë pas pagesës. Vëreni se përdoruesit do të kenë akses në historikun e tyre të pagesave në dashboard-in e subsite-s së tyre. Kjo opsion nuk vlen për Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema numërore e fakturës:** Këtu, mund të zgjidhni ose një kod referencë pagese ose një skemë numërore sekvenciale. Nëse vendosni të përdorni një kod referencë pagese për fakturat tuaja, nuk keni nevojë të konfigurojuni asgjë. Nëse zgjidhni të përdorni një skemë numërore sekvenciale, do të duhet të konfiguroshini **numrin e fakturës tjetër** (Ky numër do të përdoret si numri i fakturës për fakturën tjetër që gjenerohet në sistem. Ai rritet me një herë çdo herë që krijohet një fakturë e re. Mund ta ndryshoni dhe ta ruani për të rikuperuar numrin sekvencial të fakturës në një vlerë specifike) dhe **prefuxin e numrit të fakturës**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ku ku gjendet gateway-t:

Mund të vendosni payment gateways në të njëjtën faqe ( **Ultimate Multisite > Settings > Payments**). Poshtë **active payment gateways**, do të keni të lejoni të shihni: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ dhe _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Kemi një artikull dedikuar për çdo payment gateway që do t'ju udhëzojë në hapat e konfigurimit të tij, i cili mund ta gjeni në lidhjet më poshtë.

Mund të shihni dhe redaktoni detajet e pagesës:

![Payment edit interface](/img/admin/payment-edit.png)

Këtu është një pamje e plotë e faqes së redaktimit të pagesës:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Këtu gjendet edhe një pamje e plotë e cilësimeve të payment gateway-ve:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Konfigurimi i gateway-t Stripe**

**Konfigurimi i gateway-t PayPal**** **

**Konfigurimi i pagesave manuale**

Tani, nëse dëshironi të përdorni _WooCommerce_ , _GoCardless_ ose _Payfast_ si payment gateway juaj, do të duhet të **installoni dhe konfiguroshni add-on-et e tyre**.

### Si të instaloni add-on-in WooCommerce:

Kemi kuptuar se _Stripe_ dhe _PayPal_ nuk janë të disponueshme në disa vende që kufizojnë ose pengojnë përdorimin efektiv të pluginit tonë nga përdoruesit e Ultimate Multisite. Prandaj, ne keni krijuar një add-on për integrimin me _WooCommerce_, i cili është një plugin shumë popullor e e-commerce. Zhvilluesit në të gjithë botën kanë krijuar add-on-e për integrim me payment gateway-t të ndryshëm dhe me atë. Ne kemi shfrytëzuar këtë për të zgjeruar payment gateway-t që mund të përdorni me sistemin e faturimit Ultimate Multisite.

**ÇELUESI:** Ultimate Multisite: Integrimi me WooCommerce duhet të jetë aktiv në të paktën te faqja kryesore juaj.

Para se ndalesh, shko tek faqja e add-ons (përfshirjeve). Mund ta gjesh duke shkuar te **Ultimate Multisite > Settings**. Do të shohësh tabelën **Add-ons** (Përfshirjet). Kliko te **Check our Add-ons** (Kontrollo përfshirjet tona).

<!-- Screenshot unavailable: Tabela e add-ons në panelin e majtë i Ultimate Multisite me linkun Kontrollo përfshirjet tona -->

Pas klikimit te **Check our Add-ons**, do të kthehesh te faqja e add-ons. Këtu mund të gjesh të gjitha add-ons-et e Ultimate Multisite. Kliko te add-on i **Ultimate Multisite: WooCommerce Integration**.

![Faqja e add-ons që liston add-ons-et e Ultimate Multisite duke përfshir WooCommerce Integration](/img/addons/addons-page.png)

Do të hapet një dritare me detajet e add-onit. Mjaftueshëm kliko te **Install Now** (Instalo tani).

<!-- Screenshot unavailable: Dallimi i detajeve të add-onit Ultimate Multisite WooCommerce Integration me butonin Instalo tani -->

Pas instalimit, do të kthehesh te faqja e plugins-eve. Këtu, mjaftueshëm kliko te **Network Activate** (Aktivizo rrjetin) dhe add-on-i WooCommerce do të aktivizohet në rrjetin tuaj.

<!-- Screenshot unavailable: Faqja e plugins-eve me linkun Aktivizo rrjetin për add-on-in WooCommerce Integration -->

Pas aktivizimit, nëse ende nuk ke pluginin WooCommerce të instaluar dhe aktivizuar në faqen tuaj, do të marrësh një kujtesë.

<!-- Screenshot unavailable: Njoftim i adminit që e kujton administratorin të instaloje dhe aktivizoje pluginin WooCommerce -->

Për më shumë informacion rreth add-onit WooCommerce Integration, **klikoni këtu**.

### Si të instaloni add-on-in GoCardless:

Hapat e hapat për instalimin e add-onit _GoCardless_ është pothuajse i njëjtë si me add-onit _WooCommerce_. Shko në faqen e add-onve dhe zgjidh **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Faqja e add-onve me Ultimate Multisite GoCardless Gateway highlighted -->

Duket një dritare (window). Kliko në **Install Now**.

<!-- Screenshot unavailable: Deta dialogi i Ultimate Multisite GoCardless Gateway add-on me butonin Install Now -->

Pas përfundimit të instalimit, do të kthehesh automatikisht te faqja e plugin-eve (plugins page). Këtu, thjesht kliko në **Network Activate** dhe add-onit _GoCardless_ do të aktivizohet në rrjetin tuaj.

<!-- Screenshot unavailable: Faqja e plugin-eve me link Network Activate për add-on GoCardless Gateway -->

Për të mësuar se si të fillosh me gateway-n _GoCardless_, **lexo këtë artikull**.

### Si të instalohet add-onit Payfast:

Shko në faqen e add-onve dhe zgjidh **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Faqja e add-onve me Ultimate Multisite Payfast Gateway highlighted -->

Duket një dritare (window). Kliko në **Install Now.**

<!-- Screenshot unavailable: Deta dialogi i Ultimate Multisite Payfast Gateway add-on me butonin Install Now -->

Pas përfundimit të instalimit, do të kthehesh automatikisht te faqja e plugin-eve (plugins page). Këtu, thjesht kliko në **Network Activate** dhe add-onit _Payfast_ do të aktivizohet në rrjetin tuaj.

<!-- Screenshot unavailable: Faqja e plugin-eve me link Network Activate për add-on Payfast Gateway -->
