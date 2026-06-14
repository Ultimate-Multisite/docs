---
title: Tasuta
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Tasuta kasutamine (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Ultimate Multisite on sissejuhatatud jälgimiskontrolli ja lahendamise süsteemiga. Et meie lahendus töötaks, oleme integreerinud e-kaubanduslikuks levinud kõige levinumate maksukättesaiste. Ultimate Multisite poolt oletust maksukättesaiste on _Stripe_, _PayPal_ ja Manuaalne makseviis. Saate ka kasutada _WooCommerce'i_, _GoCardlessi_ ja _Payfasti_ makside saamiseks, installides nende vastavaid lisamooduseid (add-ons).

## Põhitingsed seadistused

Saate konfigurida ühtestest needest maksukättesaist Ultimate Multisite maksusseadistustes. Sa saate selle leida minnes **Ultimate Multisite menü > Seaded > Makside**.

![Makside seadistuste lehekülje Ultimate Multisites peal näitlikult makside paneeli](/img/config/payments-settings-page.png)

Enne konfigurates oma maksukättesaista, vaadige üle põhitõhised maksiseadistused, mida saate konfigurida:

**Force auto-rene** **w:** See tagab, et maks on automaatselt uuesti käivitub iga lahenduse tsükli lõpuks sõltuvalt kasutaja valitud lahenduse sagedustest.

<!-- Screenshot unavailable: Force Auto-Renew lülituste seadistus Makside seadistuste leheküljel -->

Ultimate Multisite v2.13.0 kontrollib, kas aktiivne lahendus on korduvuse uuesti kasutatav krediitiga enne korduvuse jälgimiskontrolli sisse salvestamist automaatselt uuesti käivitusega. Uuesti kasutatav krediit võib olla lahenduse subskriptioon, maksukett, salvestatud vault token või vastav uuesti kasutatav makseviis. Kui lahendus annab teada, et ei ole kasutatavat krediiti, salvestab Ultimate Multisite jälgimiskontrolli kuid lülitab automaatselt uuesti käivituse ja registreerib puudusaeguse, nii et administraator või toetuse protsess saab küsimata kliendilt makse kinnitamist enne uuesti käivitamise kuupäjät.

See, see, et vältib, et ühenduse auto-uudutamise näitamist, kui veebipaik (gateway) saab ainult kordkõige maksude koguda. Veebipaikute lisamoodulid peaksid kinnitama, et korduvate makside korral salvestatakse uudishaldusväärne (credential), eriti siis, kui veebipaik toetab nii kordkõige võtmist kui ka vaultitud/subskriptioonimaksude meetode.

**Luba proovikogud maksutrimmata:** See valik aktiveerides ei nõua teie kliendilt registreerimise ajal finantsi teavet lisamist. See on vajalik ainult siis, kui proovikogukord lõpeb.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Lõpulemiseks makse pärast kinnitamist:** See annab teil võimaluse välja otsustada, kas te lahendate maksutest pärast seda, kui makse on tehtud. Pöörake tähelepanu sellele, et kasutajad saavad oma maksutähtisregistri (payment history) oma subsite dashboardi all. See valik ei kehtestu Manuaalse veebipaikute jaoks (Manual Gateway).

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Lõpulemiseks makse numbrustik:** Siin saate välja valida kas maksutähtisviide koodi või ümberpaigutatud (sequential number scheme) numbrustikuga. Kui te valite maksutähtisviide koodi, ei vaja te midagi konfigurida. Kui te valite ümberpaigutatud numbrustikuga, peate konfigurates **järgmisel laskumise numbri** (See number kasutatakse järgmise järjestikuna genereeritud laskumise numbrina süsteemis. See suureneb üheksiga iga kord, kui uus laskumine luuakse. Saate seda muuta ja salvestada, et taaskälla laskumise numbrustik peetaks konkreetse väärtuse). ning **lõpulemiseks makse prefiksi**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kasi leidaid gateway'id:

Tas on võimalik paigutada maksukontakte (payment gateways) samalelt lehel (**Ultimate Multisite > Settings > Payments**). **Active payment gateways** allpool näha järgmiselt: _Stripe_, _Stripe_ Checkout, _PayPal_ ja _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Meil on eraldatud artiklid iga maksukontakte kohta, mis juhatavad teid selle paigutamise sammude läbiki, mida saate leida allpool olevate linkide kaudu.

Tas on võimalik vaadata ja muuta maksutädet:

![Payment edit interface](/img/admin/payment-edit.png)

Siin on täielik nähtus maksutädet muutmise lehel:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Siin on ka täielik nähtus maksukontakte seadistustele:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway'i paigutamine**

**PayPal gateway'i paigutamine**** **

**Manuaalsete maksude paigutamine**

Nüüd, kui soovite kasutada _WooCommerce_, _GoCardless_ või _Payfast_ oma maksukontaktina, peate **paigutama ja konfigurates nende add-onid**.

### Kuidas WooCommerce add-on paigutada:

Meil on teadlikud sellest, et _Stripe_ ja _PayPal_ ei ole saadaval mõnades riikides, mis piiravad või hindavad Ultimate Multisite kasutajate efektiivset kasutamist meie pluginiga. Seetõttu ootame meile add-onid, mis integreerivad _WooCommerce_, mis on väga populaarne e-commerce plugin. Maailma eri suurustel arendajad on luune add-onid sellega integratsiooni jaoks erinevate maksukontaktide. Meil on kasutanud seda võimalust laiendada maksukontakte, mida saate kasutada Ultimate Multisite lahenduses.

**TÄHTIS:** Ultimate Multisite: WooCommerce'i integreerimine nõuab, et WooCommerce ole aktiivne vähemalt teie pealiste veebilehel.

Ennenda, külastage lisamooduse lehte. Seda saate leida minema **Ultimate Multisite > Settings** läbi. Näete siin **Add-ons** tabelit. Klõpsake **Check our Add-ons** (Kontrollige meie lisamoodusi) välja.

<!-- Screenshot unavailable: Add-ons table on Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Klõpsates **Check our Add-ons** välja, teeks teile ülesviidend WooCommerce'i lisamooduste lehele. Siin leiate kõik Ultimate Multisite lisamoodused. Klõpsake **Ultimate Multisite: WooCommerce Integration** (Ultimate Multisite: WooCommerce integreerimine) lisamoodust.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Iga klikkuse korral ilmub akn, kus on lisamooduse üksikasjad. Klõpsake lihtsalt **Install Now** (Installeeri nüüd).

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Installeerimise lõpuni teeks teile suunatakse pluginide lehel. Siin klõpsake lihtsalt **Network Activate** (Aktiivige võrku), ja WooCommerce lisamoodus aktiivub teie võrkuses.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Aktiiviseerimise pärast, kui teil veebilehel ei ole veel installitud ja aktiivne WooCommerce plugin, saate teile meeldivu.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Lisainformatsioonide lugemiseks **klõpsake siin**.

### Kuidas GoCardless lisamoodust installida:

_GoCardless_ lisamise samuti nagu _WooCommerce_ lisamise. Minum add-ons lehel ja valige **Ultimate Multisite: GoCardless Gateway** lisus.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Väljas avab lisusaru. Klõpsake **Install Now** (Installeer nüüd).

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Installeerimise pärast seda suunatakse teid pluginide lehele. Siis klõpsake lihtsalt **Network Activate** (Võrreva aktiveerimine), ja _GoCardless_ lisus aktiveerub teie võrku.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Kuidas alustada kasutama _GoCardless_ gateway't, **luge seda artiklit**.

### Kuidas installida Payfast lisus:

Minum add-ons lehele ja valige **Ultimate Multisite: Payfast Gateway** lisus.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Väljas avab lisusaru. Klõpsake **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Installeerimise pärast seda suunatakse teid pluginide lehele. Siis klõpsake lihtsalt **Network Activate**, ja _Payfast_ lisus aktiveerub teie võrku.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
