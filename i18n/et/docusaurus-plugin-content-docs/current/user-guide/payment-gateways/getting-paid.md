---
title: Tasu saamine
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Tasu saamine (v2) {#getting-paid-v2}

_**OLULINE MÄRKUS: see artikkel käsitleb Ultimate Multisite versiooni 2.x.**_

Ultimate Multisite sisaldab sisseehitatud liikmesuse ja arvelduse süsteemi. Meie arveldussüsteemi toimimiseks oleme integreerinud levinumad e-kaubanduses kasutatavad makselüüsid. Ultimate Multisite vaikimisi makselüüsid on _Stripe_ , _PayPal_ ja käsitsi makse. Maksete vastuvõtmiseks saad kasutada ka _WooCommerce_ , _GoCardless_ ja _Payfast_ lahendusi, paigaldades nende vastavad lisad.

## Põhiseaded {#basic-settings}

Saad kõiki neid makselüüse seadistada Ultimate Multisite maksete seadetes. Leiad need, minnes jaotisse **Ultimate Multisite menüü > Seaded > Maksed.**

![Maksete seadete leht Ultimate Multisite-is, kus on näha maksete paneel](/img/config/payments-settings-page.png)

Enne makselüüsi seadistamist vaata palun üle põhilised makseseaded, mida saad seadistada:

**Sunni automaatne uuenda** **mine:** See tagab, et makse kordub automaatselt iga arveldustsükli lõpus vastavalt kasutaja valitud arveldussagedusele.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kontrollib enne automaatse uuendamisega korduva liikmesuse salvestamist, kas aktiivsel lüüsil on taaskasutatav uuendamise mandaat. Uuendamise mandaat võib olla lüüsi tellimus, arvelduskokkulepe, salvestatud vault token või samaväärne taaskasutatav makseviis. Kui lüüs teatab, et kasutatavat mandaati pole olemas, salvestab Ultimate Multisite liikmesuse, kuid lülitab automaatse uuendamise välja ja registreerib puuduva mandaadi oleku, et administraator või tugiprotsess saaks paluda kliendil makse enne uuendamise kuupäeva uuesti autoriseerida.

See takistab liikmesusel näimast automaatselt uuenevana, kui lüüs saab koguda ainult ühekordseid makseid. Lüüsilisad peaksid kinnitama, et korduvad kassaprotsessid salvestavad taaskasutatava mandaadi, eriti kui lüüs toetab nii ühekordset makse kogumist kui ka vault-/tellimuspõhiseid makseviise.

**Luba prooviperioode ilma makse** **viisita:** Kui see valik on lubatud, ei pea sinu klient registreerimisprotsessi ajal lisama finantsteavet. Seda nõutakse alles siis, kui prooviperiood lõpeb.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Saada arve makse kinnitamisel:** See annab võimaluse valida, kas saata pärast makset arve või mitte. Pane tähele, et kasutajatel on ligipääs oma makseajaloole nende alamsaidi Dashboardil. See valik ei kehti käsitsi lüüsi kohta.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Arve nummerdamise skeem:** Siin saad valida kas makse viitekoodi või järjestikuse numbri skeemi. Kui valid arvete jaoks makse viitekoodi kasutamise, ei pea sa midagi seadistama. Kui valid järjestikuse numbri skeemi, pead seadistama **järgmise arve numbri** (seda numbrit kasutatakse süsteemis järgmise loodava arve arvenumbrina. Iga kord, kui luuakse uus arve, suurendatakse seda ühe võrra. Saad seda muuta ja salvestada, et lähtestada arvete järjestikune number kindlale väärtusele) ja **arvenumbri prefiksi.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kust lüüse leida: {#where-to-find-the-gateways}

Saad makselüüse seadistada samal lehel ( **Ultimate Multisite > Seaded > Maksed**). Otse **aktiivsete makselüüside** all näed: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ja _Manual_.

![Aktiivsete makselüüside jaotis, kus on loetletud Stripe, Stripe Checkout, PayPal ja Manual](/img/config/payments-active-gateways.png)

Meil on iga makselüüsi jaoks eraldi artikkel, mis juhendab sind selle seadistamise sammudes; need leiad allolevatelt linkidelt.

Saad vaadata ja muuta makse üksikasju:

![Makse muutmise liides](/img/admin/payment-edit.png)

Siin on makse muutmise lehe täielik vaade:

![Makse muutmise täielik liides](/img/admin/payment-edit-full.png)

Siin on ka makselüüside seadete täielik vaade:

![Makselüüside seadete täielik leht](/img/config/settings-payments-gateways-full.png)

**Stripe lüüsi seadistamine**

**PayPal lüüsi seadistamine**** **

**Käsitsi maksete seadistamine**

Kui soovid nüüd kasutada makselüüsina _WooCommerce_ , _GoCardless_ või _Payfast_ lahendust, pead **paigaldama ja seadistama nende lisad**.

### Kuidas paigaldada WooCommerce lisa: {#how-to-install-the-woocommerce-add-on}

Mõistame, et _Stripe_ ja _PayPal_ ei ole mõnes riigis saadaval, mis piirab või takistab Ultimate Multisite kasutajatel meie pluginat tõhusalt kasutada. Seetõttu lõime lisa _WooCommerce,_ integreerimiseks, mis on väga populaarne e-kaubanduse plugin. Arendajad üle maailma on loonud lisasid erinevate makselüüside integreerimiseks sellesse. Kasutasime seda ära, et laiendada makselüüside valikut, mida saad Ultimate Multisite arveldussüsteemiga kasutada.

_**OLULINE:** Ultimate Multisite: WooCommerce Integration nõuab, et WooCommerce oleks aktiveeritud vähemalt sinu põhisaidil._

Kõigepealt mine palun lisade lehele. Leiad selle, minnes jaotisse **Ultimate Multisite > Seaded**. Peaksid nägema tabelit **Lisad**. Klõpsa valikul **Vaata meie lisasid**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Pärast valikul **Vaata meie lisasid** klõpsamist suunatakse sind lisade lehele. Siit leiad kõik Ultimate Multisite lisad. Klõpsa lisal **Ultimate Multisite: WooCommerce Integration**.

![Lisade leht, kus on loetletud Ultimate Multisite lisad, sealhulgas WooCommerce Integration](/img/addons/addons-page.png)

Avaneb aken lisamooduli üksikasjadega. Klõpsake lihtsalt **Paigalda kohe**.

<!-- Ekraanipilt pole saadaval: Ultimate Multisite WooCommerce Integration lisamooduli üksikasjade dialoog nupuga Paigalda kohe -->

Pärast paigalduse lõppu suunatakse teid pluginate lehele. Siin klõpsake lihtsalt **Aktiveeri võrgustikus** ja WooCommerce lisamoodul aktiveeritakse teie võrgustikus.

<!-- Ekraanipilt pole saadaval: pluginate leht lingiga Aktiveeri võrgustikus WooCommerce Integration lisamooduli jaoks -->

Pärast selle aktiveerimist, kui teil pole WooCommerce pluginat oma veebisaidil ikka veel paigaldatud ja aktiveeritud, saate meeldetuletuse.

<!-- Ekraanipilt pole saadaval: administraatori teade, mis tuletab meelde WooCommerce plugina paigaldamist ja aktiveerimist -->

WooCommerce Integration lisamooduli kohta lisateabe lugemiseks **klõpsake siin**.

### Kuidas paigaldada GoCardless lisamoodul: {#how-to-install-the-gocardless-add-on}

_GoCardless_ lisamooduli paigaldamise sammud on peaaegu samad nagu _WooCommerce_ lisamooduli puhul. Minge lisamoodulite lehele ja valige **Ultimate Multisite: GoCardless Gateway** lisamoodul.

<!-- Ekraanipilt pole saadaval: lisamoodulite leht esile tõstetud Ultimate Multisite GoCardless Gateway lisamooduliga -->

Avaneb lisamooduli aken. Klõpsake **Paigalda kohe**.

<!-- Ekraanipilt pole saadaval: Ultimate Multisite GoCardless Gateway lisamooduli üksikasjade dialoog nupuga Paigalda kohe -->

Pärast paigalduse lõppu suunatakse teid pluginate lehele. Siin klõpsake lihtsalt **Aktiveeri võrgustikus** ja _GoCardless_ lisamoodul aktiveeritakse teie võrgustikus.

<!-- Ekraanipilt pole saadaval: pluginate leht lingiga Aktiveeri võrgustikus GoCardless Gateway lisamooduli jaoks -->

Et teada saada, kuidas _GoCardless_ makseväravaga alustada, **lugege seda artiklit**.

### Kuidas paigaldada Payfast lisamoodul: {#how-to-install-the-payfast-add-on}

Minge lisamoodulite lehele ja valige **Ultimate Multisite: Payfast Gateway** lisamoodul.

<!-- Ekraanipilt pole saadaval: lisamoodulite leht esile tõstetud Ultimate Multisite Payfast Gateway lisamooduliga -->

Avaneb lisamooduli aken. Klõpsake **Paigalda kohe.**

<!-- Ekraanipilt pole saadaval: Ultimate Multisite Payfast Gateway lisamooduli üksikasjade dialoog nupuga Paigalda kohe -->

Pärast paigalduse lõppu suunatakse teid pluginate lehele. Siin klõpsake lihtsalt **Aktiveeri võrgustikus** ja _Payfast_ lisamoodul aktiveeritakse teie võrgustikus.

<!-- Ekraanipilt pole saadaval: pluginate leht lingiga Aktiveeri võrgustikus Payfast Gateway lisamooduli jaoks -->
