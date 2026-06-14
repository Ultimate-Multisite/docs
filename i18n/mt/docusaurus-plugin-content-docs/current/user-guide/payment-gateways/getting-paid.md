---
title: Approvat għall-pagamenti
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Appuntament (v2)

_**NOTA IMPORTANTI: Dan dan l-artiklu huwa riferitu għall Ultimate Multisite bizzjoni 2.x.**_

L-Ultimate Multisite għandu sistema integrata ta membership u fatturament. Biex sistema fatturamentiet tanna tafla, naħna integrat il-gateway tal-pagamenti li huma l-piżżi ewlenin li jomm użati fil-e-commerce. Il-gateway tal-pagamenti diġitali (default) f Ultimate Multisite huma _Stripe_, _PayPal_ u Pagament Manuali. Tista' uża wkoll _WooCommerce_, _GoCardless_ u _Payfast_ bixogħdu il-add-ons tagħhom biex tirċievi l-pagamenti.

## I-Settings Basi

Tista' tsetConfiga qed li għandek din il-gateway tal-pagamenti taħt is-settings tal-pagamenti f Ultimate Multisite. Tista' tgħallimha billi tmur għal **Ultimate Multisite menu > Settings > Payments.**

![Pagina tal-settings tal-pagamenti f Ultimate Multisite li tiffra pannell tal-Payments](/img/config/payments-settings-page.png)

Qabel ma tsetConfiga l-gateway tal-pagamenti tiegħek, jekk jogħġbok tqed il-settings bazi ta pagament li tista' tsetConfiga:

**Force auto-rene** **w:** Dan jassuru li l-pagament se jintarrekwi awtomatikka fl-aħħar tal-kiklu tal-fatturament, b'mod dipendenti minn frekwenza tal-fatturament li l-user ha segwitu.

<!-- Screenshot unavailable: Toggle setting Force Auto-Renew fuq la pagina tal-settings tal-pagamenti -->

L-Ultimate Multisite v2.13.0 tqesser jekk il-gateway attivi għandu kredjent ta rinnovament riutilizzabbli qabel ma jsir l-membership ricorrenti b'auto-rinnovament attivatu. Kredjent ta rinnovament huwa suscripzjoni tal-gateway, akkord tal-fatturament, token vault salvet, jew metodu pagament riutilizzabbli equivalenti. Jekk il-gateway jgħid li ma għandu xejx kredjent li jista' użat, l-Ultimate Multisite tsetConfiga l-membership iżda taħalli l-auto-rinnovament u tirrekordja l-stato tal-kredjent miftuħ, biex amministratur jew flusso di support jgħid lil il-customer li jgħin it-autorizza l-pagament malli qabel data rinnovament.

This impedisce li membership li juri appaie li auto-renew meta l-gateway li jistgħu kollha pagamenti ta tempo waħda. Il gateway add-ons għandhom konfermà li checkout ricorrenti jipprovvdu kredjent reusabbli, speċjalment meta il-gateway jirriżwiet sia cattura ta tempo waħda u metodi ta pagament vaultati/subscription.

**Permetti trial b'modi jew method:** Ma' dan opzjoni attivat, il-client tiegħek ma għandu tiddarba informazzjoni finanzjarja durante il proses ta registrazzjoni. Dan se jkun preżżiżat biss meta il-perjodu tal-trial jmur.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Trabbil l-fattura fuq konferm tal-pagament:** Dan jgħنك opzjoni jew le ttrabbil fattura dopo il pagament. Nota li l-utenti jkun maħtieġux a jidħlu fil-istoria tal-pagamenti tagħhom sotto dashboard ta subsite tagħhom. Dan opzjoni ma japplikax għall-Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema numru fattura:** Hawn, puoi selezxi jew kod referenza tal-pagament jew skema numri sequenti. Jekk tagħżel u tista tista uċċarju kod referenza tal-pagament għall-fatturi tagħhom, ma għandekx konfigurà xieħed. Jekk tagħżel u tista tista skema numri sequenti, għandek tista tista l-**num fattura sevju** (Dan il-num jkun użat bħala num fattura għall-fattura sevju prossma li giċċċa fuq il-sistema. Jiddeċċimentu b'واحد kull volta li tiddarba fattura sevju nuova. Puoi tista tista uċċarju it-tista tal-fattura sequenti għal valur speċifiku) u l-**prefiss num fattura**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Meħtieġ fejn tgħallma l-gateways:

Tista' tsetup il-payment gateways fl-istessna pagina ( **Ultimate Multisite > Settings > Payments**). Qabel minn il- **active payment gateways**, tista' tara: _Stripe_, _Stripe_ _Checkout_, _PayPal_ u _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Ilabbir għandna artikoli dedikati għal kada gateway ta payment li jgħandu biex tsetup, li tista' tgħallmahom filink sott'a.

Tista' tgħars u tġedda dettalji tal-payment:

![Payment edit interface](/img/admin/payment-edit.png)

Hawn huwa l-vista kollha taqiegħd il-payment edit page:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Hawn hija per vista kollha tal-settings tal-payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Tsetup il-gateway Stripe**

**Tsetup il-gateway PayPal**** **

**Tsetup il-pagamenti manuali**

Morn, jekk tista' uża _WooCommerce_, _GoCardless_ jew _Payfast_ bħala gateway ta payment tiegħek, għandek biex **tinstall u tgħallma l-add-ons tagħhom**.

### Come tinstall l-add-on tal-WooCommerce:

Nifhmu li _Stripe_ u _PayPal_ ma jkunux disponibbli f'paċi o dejjem tal-paċi li jħasslu limitaw jew jgħardu l-Ultimate Multisite users biex jgħandu b'mod effiċjenti fl-plugin tiegħene. Għandna għamna add-on biex nintegraw il- _WooCommerce_, li huwa plugin e-commerce molto popolari. L-developer ta' l-mond creatu add-ons biex integraw gateway ta payment differenti għalih. Nista' nistabbilixxu dan biex nespand il-payment gateways li tista' uża mal-sistema tal-billing tal-Ultimate Multisite.

_**IMPORTANTE:** L-Integrà tal-WooCommerce fil Ultimate Multisite għandha attivata l-WooCommerce fuq il-site primari tiegħek._

Fil-ewwel, jidher għall-pajs ta aċċess tal-add-ons. Tista' tgħallu fl-navigazzjoni **Ultimate Multisite > Settings**. Dovrhom tista' tara l-tavola tal-**Add-ons**. Klikka fuq **Check our Add-ons**.

<!-- Screenshot unavailable: Tavola tal-Add-ons fil-sidebar tal-Settings ta Ultimate Multisite مع link Check our Add-ons -->

Wara li tikkli fuq **Check our Add-ons**, titwaddir għall-pajs tal-add-ons. Hemm hemm l-għażla ta' add-ons ta' Ultimate Multisite kollha. Klikka fuq l-add-on **Ultimate Multisite: WooCommerce Integration**.

![Pajs tal-add-ons li jixegru l-add-ons ta' Ultimate Multisite inklużi WooCommerce Integration](/img/addons/addons-page.png)

Tidħselna finestra biex titwaddih il-dettalji tal-add-on. Klikka biss fuq **Install Now**.

<!-- Screenshot unavailable: Dialog dettalji add-on ta' Ultimate Multisite WooCommerce Integration مع bott Install Now -->

Wara li tsemma l-installazzjoni, titwaddir għall-pajs tal-plugins. Hemm hemm biss klikka fuq **Network Activate** u l-add-on ta' WooCommerce jitattivaw fuq nnetz tiegħek.

<!-- Screenshot unavailable: Pajs tal-plugins مع link Network Activate għall add-on WooCommerce Integration -->

Wara li titattiva, jekk ma tista'xxiex l-plugin ta' WooCommerce jitinstalli u jiattivaw fuq il-website tiegħek, titħallikom notifika.

<!-- Screenshot unavailable: Notifika tal-Admin li tiffaċċja l-administrator biex tistabbli u tiattiva l-plugin ta' WooCommerce -->

Biex tiqra aktar dwar l-add-on ta' WooCommerce Integration, **tikkli hemm**.

### Come installa l-add-on GoCardless:

Il-passi biex tinstall l-add-on _GoCardless_ huma quasi morli s'istessi biex tinstall l-add-on _WooCommerce_. Għid għall-pajs tal-add-ons u selezjonal il-add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Il-fenestra tal-add-on se tiffaqa. Klikka fuq **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Wara li l-install jkuna gwida, terġaġġati għall-pajs tal-plugins. Hemm, klikka fuq **Network Activate** u l-add-on _GoCardless_ se jiġi attivat fuq nnetz tiegħek.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Biex tiġi informat kif tikkontrolla l-gateway _GoCardless_, **qra dan l-artikolu**.

### Come tinstall l-add-on Payfast:

Għid għall-pajs tal-add-ons u selezjonal il-add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Il-fenestra tal-add-on se tiffaqa. Klikka fuq **Install Now.**

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Wara li l-install jkun gwida, terġaġġati għall-pajs tal-plugins. Hemm, klikka fuq **Network Activate** u l-add-on _Payfast_ se jiġi attivat fuq nnetz tiegħek.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
