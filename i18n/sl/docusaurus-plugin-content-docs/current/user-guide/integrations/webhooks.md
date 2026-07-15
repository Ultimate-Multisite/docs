---
title: Webhooki
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Prvi pogled na webhooks (v2)

_**POZOR: Opomba, da je ta funkcija ali članek namenjen naprednim uporabnikom.**_

**Webhook** je način, kako aplikacija ali softver kot je Ultimate Multisite omogoča drugim aplikacijam prenos podatkov v realnem času. Webhook pošlje podatke ali *payload* druge aplikaciji takoj, kar pomeni, da **dobijete podatke trenutno.**

To je koristno, če potrebujete integrirati ali prenašati določene podatke iz Ultimate Multisite v drugi CRM ali sistem vsakrat ko se sproži kakšen dogodek. Na primer, morate poslati ime in e-poštni naslov uporabnika na mailing list vsakrat ko se ustvarja nov račun uporabnika.

## Kako ustvariti webhook {#how-to-create-a-webhook}

Da bi ustvarili webhook, gre do vaše admin dashboard za omrežje (network admin dashboard). Kliknite na **Ultimate Multisite > Webhooks > Dodaj novi webhook.**

![Prazna stran z seznamom webhooks s gumbom Dodaj novi webhook](/img/admin/webhooks-list-empty.png)

Zahtevamo lahko konfigurirate webhook:

![Obraznik za dodaj novo webhook z polji Name, Event in URL](/img/admin/webhook-add-modal.png)

Ko ustvarjate novi webhook se od vas bo zahtevala informacije kot so **Ime, URL** in **Dogodek (Event)**. Lahko uporabite kakvo ime za svoj webhook. Najpomembnejša polja so URL in Dogodek (Event).

![Spremer za urejanje webhooks, ki prikazuje polje URL in pregled *payload*](/img/admin/webhook-url-field.png)

URL je **endpoint ali destinacija**, na katere Ultimate Multisite pošlje **payload ali podatke**. To je aplikacija, ki bo prejela podatke.

Zapier je najpogostejša rešitev, ki jo uporabljajo uporabniki za olajšanje integracije z tretji strankami (3rd party application). Brez platforme kot je Zapier boste morali ručno ustvariti prilagočeno funkcijo, ki bo prejela podatke in jih obdelala. Pogledajte ta članek o tem, **kako uporabljati Ultimate Multisite webhook z Zapierjem.**

V v tem članku bomo pogledali osnovno pojmovanje, kako deluje webhook in kakšni so na voljo dogodki v Ultimate Multisite. Za to bomo uporabili tretji strani spletni strani, ki je [requestbin.com](https://requestbin.com/). Ta stran nam bo omogočila ustvarjanje endpointa in sprejemanje podatkov (payload) brez kodiranja. _**Opozorilo: vse, kar bo naredila, je samo pokazati, da so podatki prebrani.**_ Na payload se ne bo opravil nobene obdelave ali kakršne koli akcije.

Idi na [requestbin.com](https://requestbin.com/) in klikni na Create Request Bin (Ustvari request bin).

Po kliku na to gumb, te bo vprašal, če imaš že račun ali se prijavi. Če imaš že račun te bo takoj peljal na njihov dashboard. Na njihovem dashboardu boš takoj videl endpoint ali URL, ki ga lahko uporabiš za ustvarjanje svojega Ultimate Multisite webhooka.

Sprejmi URL in se vrni v Ultimate Multisite. Postavi endpoint v polje URL in izberi dogodek (event) iz spiska. V tem primer izberemo **Payment Received** (Plačilo prejema).

Ta dogodek se sproži vsakrat, ko uporabnik opravi plačilo. Vsi na voljo dogodki, njihovo opisanje in payload so navedeni na dnu strani. Klikni na gumb **Add New Webhook** (Dodaj novi webhook), da ga shranite.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Zdaj lahko pošljemo testno dogodko endpointu, da vidimo, ali deluje webhook, ki ga smo ustvarili. To lahko naredimo, kliknjo na **Send Test Event** (Pošlji testno dogodko) pod webhookom, ki ga smo ustvarili.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

To prikazuje okno za potrditev, da je test uspešen.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Slovenija: Če se vrnemo na spletno mesto _Requestbin_ bomo videli, da je vsebina (payload) prejela z nekaterimi testnimi podatki.

To je osnovni princip kako deluje webhook in endpointi. Če želite ustvariti lasten endpoint, boste morali ustvariti lastno funkcijo za obdelavo podatkov, ki jih prejmete od Ultimate Multisite.
