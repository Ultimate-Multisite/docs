---
title: Веб хукови
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Prvi pogled na webhooks (v2)

_**PAŽNJA: Napomena da ova funkcija ili članak služe naprednim korisnicima.**_

**Webhook** je način da aplikacija ili softver kao što je Ultimate Multisite pruži drugi aplikacijama informacije u realnom vremenu. Webhook isporučuje podatke ili *payload* druge aplikaciji kako se događaj dešava, što znači da **dobijate podatke odmah**.

Ovo je korisno ako vam treba integrisati ili preneti određene podatke iz Ultimate Multisite u drugi CRM ili sistem svaki put kada se pokrene neki događaj. Na primer, morate poslati ime i e-mail adresu korisnika na mailing list svaki put kada se kreira novi nalog za korisnika.

## Kako kreirati webhook {#how-to-create-a-webhook}

Da biste kreirali webhook, idite na svoju admin dashboard mreže. Kliknite na **Ultimate Multisite > Webhooks > Add New Webhook.**

![Prazna lista webhooks sa dugmetom Dodaj novi webhook](/img/admin/webhooks-list-empty.png)

Zatim možete uređivati konfiguraciju webhooka:

![Form za dodavanje novog webhooka sa poljima Ime, Događaja i URL-a](/img/admin/webhook-add-modal.png)

Prilikom kreiranja novog webhooka dobićete ćeš informacije poput **Ime, URL-a** i **Događaja (Event)**. Možeš koristiti bilo koje ime koje želiš za svoj webhook. Najvažnija polja su URL i Event.

![Interfejs za uređivanje webhooka koji prikazuje polje URL-a i pregled *payload*-a](/img/admin/webhook-url-field.png)

URL je **endpoint ili odredište** kome Ultimate Multisite šalje **payload ili podatke**. To je aplikacija koja će primiti te podatke.

Zapier je najčešće rešenje koje korisnici koriste da bi integracija sa trećim strankama bila lakša. Bez platforme poput Zapiera, moraćete ručno da kreirate prilagođenu funkciju koja će uhvatiti podatke i obraditi ih. Pročitajte ovaj članak o **korišćenju Ultimate Multisite webhooka sa Zapierom.**

U ovom članku ćemo pogledati osnovni koncept kako funkcioniše webhook i koje su događaje dostupni u Ultimate Multisite. Koristićemo treću stranu uslugu pod nazivom [requestbin.com](https://requestbin.com/). Ova stranica će nam omogućiti da kreiramo endpoint i uhvatimo payload bez pisanja koda. _**Ograničenje: sve što ona radi je da nam pokaže da su podaci primljeni.**_ Neće se vršiti nijedno obrađivanje niti bilo kakva akcija na payload.

Idite na [requestbin.com](https://requestbin.com/) i kliknite na Create Request Bin (Kreiraj request bin).

Nakon klika na tu dugme, dobićete upit da se ulogujete ako već imate nalog ili da se registrujete. Ako već imate nalog, automatski vas će preusmeriti na njihovu dashboard. Na njihovoj dashboard-u odmah ćete videti endpoint ili URL koji možete koristiti za kreiranje vašeg Ultimate Multisite webhooka.

Preuzmite URL i vratite se u Ultimate Multisite. Postavite endpoint u polje URL i izaberite događaj iz padajućeg menija. U ovom primeru, ćemo izabrati **Payment Received** (Plaćanje primljeno).

Ovaj događaj se aktivira svaki put kada korisnik obavi plaćanje. Sva dostupna događanja, njihovo opisivanje i payload-ovi su navedeni na dnu stranice. Kliknite na dugme **Add New Webhook** (Dodaj novi webhook) da biste sačuvali webhook.

![Padajući meni za događaje webhuka sa izabranim Payment Received](/img/admin/webhook-event-picker.png)

Sada možemo poslati test događaj na endpoint kako bismo videli da li je kreirani webhook funkcionalan. Možemo to uraditi klikom na **Send Test Event** (Pošalji test događaj) ispod webhuka koji smo kreirali.

![Lista webhuka koja prikazuje jedan podešen webhook i akciju Send Test](/img/admin/webhooks-list-populated.png)

Ovo prikazuje prozor sa potvrdom da je test uspešan.

![Rezultat testa događaja webhuka nakon slanja testnog payload-a](/img/admin/webhook-test-result.png)

Vratimo se na sajt _Requestbin_ i vidaćemo da je payload primljen koji sadrži neku testnu podatke.

Ovo je osnovni princip kako rade webhookovi i endpoint-ovi. Ako želite da kreirate sopstveni endpoint, moraćete da napravite sopstvenu funkciju koja će obrađivati podatke koje dobijate od Ultimate Multisite.
