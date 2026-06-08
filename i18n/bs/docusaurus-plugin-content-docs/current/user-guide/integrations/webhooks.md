---
title: Webhookovi
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# Prvi pogled na webhook-ove (v2)

_**PAŽNJA: Imajte na umu da je ovaj članak ili funkcija namijenjena naprednim korisnicima.**_

**Webhook** je način na koji aplikacija ili softver poput Ultimate Multisite može pružiti drugim aplikacijama informacije u stvarnom vremenu. Webhook dostavlja podatke ili opterećenje (payload) drugim aplikacijama kako se događaj dešava, što znači da **dobijate podatke odmah.**

Ovo je korisno ako trebate integrirati ili proslijediti određene podatke iz Ultimate Multisite u drugi CRM ili sistem svaki put kada se dogodi neki događaj. Na primjer, možda morate poslati ime i e-mail adresu korisnika u listu za mailing svaki put kada se kreira novi korisnički račun.

## Kako kreirati webhook

Da biste kreirali webhook, idite na administratorski dashboard vaše mreže. Kliknite na **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

Zatim možete urediti konfiguraciju webhook-a:

![Webhook edit interface](/img/admin/webhook-edit.png)

Kada kreirate novi webhook, bit ćete traženi za informacije kao što su **Ime (Name), URL** i **Događaj (Event)**. Možete koristiti bilo koje ime koje želite za svoj webhook. Najvažnija polja su URL i Događaj.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL je **odredište ili destinacija** na koju će Ultimate Multisite poslati **opterećenje ili podatke (payload)**. To je aplikacija koja će primiti podatke.

Zapier je najčešće rješenje koje korisnici koriste kako bi im bilo lakše integrirati sa aplikacijama trećih strana. Bez platforme poput Zapier-a, morat ćete ručno kreirati prilagođenu funkciju koja će uhvatiti podatke i obraditi ih. Pogledajte ovaj članak o **korištenju Ultimate Multisite webhook-a sa Zapier-om.**

U ovom članku, pogledat ćemo osnovni koncept kako webhook funkcionira i događaje dostupne u Ultimate Multisite-u. Koristit ćemo eksternu stranicu nazvanu [requestbin.com](https://requestbin.com/). Ova stranica nam omogućit će da kreiramo odredište i uhvatimo opterećenje bez pisanja koda. _**Odricanje od odgovornosti: sve što će to učiniti je pokazati da su podaci primljeni.**_ Neće biti obrade niti bilo kakve akcije izvršene na opterećenju.

Idite na [requestbin.com](https://requestbin.com/) i kliknite na Create Request Bin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Nakon klika na taj gumb, tražit će vas da se prijavite ako već imate račun ili da se registrirate. Ako već imate račun, vodiće vas direktno na njihov dashboard. Na njihovom dashboardu, odmah ćete vidjeti odredište ili URL koje možete koristiti prilikom kreiranja vašeg Ultimate Multisite webhook-a.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

Nanesite URL i vratite se na Ultimate Multisite. Postavite odredište u polje URL i odaberite događaj iz padajućeg izbornika. U ovom primjeru, odabirat ćemo **Payment Received (Primljen plaćanje)**.

Ovaj događaj se pokreće svaki put kada korisnik izvrši plaćanje. Svi dostupni događaji, njihovi opisi i opterećenja navedeni su na dnu stranice. Kliknite na gumb **Add New Webhook** da sačuvate webhook.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

Sada možemo poslati test događaj na odredište kako bismo vidjeli radi li webhook koji smo kreirali. Možemo to učiniti klikom na **Send Test Event** ispod webhook-a koji smo kreirali.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Ovo prikazuje prozor potvrde koji kaže da je test uspješan.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Sada, ako se vratimo na stranicu _Requestbin_, vidjet ćemo da je opterećenje primljeno i da sadrži neke test podatke.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Ovo je osnovni princip kako webhook-ovi i odredišta funkcioniraju. Ako planirate kreirati prilagođeno odredište, morat ćete kreirati prilagođenu funkciju za obradu podataka koje primite iz Ultimate Multisite-a.
