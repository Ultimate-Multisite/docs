---
title: Web hookovi
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Prvi pogled na webhooks (v2) {#a-first-look-on-webhooks-v2}

_**PAŽNJA: Napomena da ova značajka ili članak služe naprednim korisnicima.**_

**Webhook** je način da aplikacija ili softver poput Ultimate Multisite pruži druge aplikacijama informacije u stvarnom vremenu. Webhook isporučuje podatke ili payloadove drugim aplikacijama čim se događaj pojavi, što znači da **dobijate podatke odmah**.

Ovo je korisno ako vam treba integrirati ili proslijediti određene podatke iz Ultimate Multisite u drugi CRM ili sustav svaki put kada se pokrene neki događaj. Na primjer, trebate poslati ime i e-mail adresu korisnika na mailing list svaki put kada se kreira novi korisnički račun.

## Kako napraviti webhook {#how-to-create-a-webhook}

Da biste kreirali webhook, idite na svoj admin dashboard mreže. Kliknite na **Ultimate Multisite > Webhooks > Dodaj novi webhook.**

![Stranica s popisom praznih webhooks s gumbom Dodaj novi webhook](/img/admin/webhooks-list-empty.png)

Zatim možete uređivati konfiguraciju webhooka:

![Form za dodavanje novog webhooka s poljima Ime, Događaja i URL](/img/admin/webhook-add-modal.png)

Prilikom kreiranja novog webhooka bit će vam postavljena pitanja kao što su **Ime, URL** i **Događaj (Event)**. Možete koristiti bilo koje ime koje želite za svoj webhook. Najvažnija polja su URL i Događaj.

![Slijepa interfejs za uređivanje webhooka koja prikazuje polje URL-a i pregled payload-a](/img/admin/webhook-url-field.png)

URL je **endpoint ili odredište** kome Ultimate Multisite šalje **payload ili podatke**. To je aplikacija koja će primiti te podatke.

Zapier je najčešće rješenje koje korisnici koriste kako bi integracija s trećim stranama bila lakša. Bez platforme poput Zapiera, morat ćete ručno kreirati prilagođenu funkciju koja će uhvatiti podatke i obraditi ih. Pogledajte ovaj članak o **korištenju Ultimate Multisite webhooka s Zapierom.**

U ovom članku ćemo pogledati osnovni koncept kako funkcionira webhook i koje događaje su dostupna u Ultimate Multisite. Koristit ćemo treću stranu [requestbin.com](https://requestbin.com/). Ova stranica nam omogućuje da stvorimo endpoint i uhvatimo payload bez pisanja koda. _**Ograničenje: sve što će to učiniti je prikazati nam da je podaci primljeni.**_ Ne bit će obrade niti bilo kakve akcije na payloadu.

Idite na [requestbin.com](https://requestbin.com/) i kliknite na Create Request Bin (Stvori request bin).

Nakon klika na tu dugme, tražit će od vas prijavu ako već imate račun ili registraciju. Ako već imate račun, automatski ćete biti preusmjereni na njihovu dashboard. Na njihovoj dashboard-u odmah ćete vidjeti endpoint ili URL koji možete koristiti za kreiranje vašeg Ultimate Multisite webhooka.

Preuzmite URL i vratite se u Ultimate Multisite. Postavite endpoint u polje URL i odaberite događaj iz padajućeg biranja. U ovom primjeru, odabrat ćemo **Payment Received** (Primljen plaćanje).

Ovaj događaj se aktivira svaki put kada korisnik obavi plaćanje. Sva dostupna događanja, njihovo opisivanje i payloadovi su navedeni na dnu stranice. Kliknite na dugme **Add New Webhook** (Dodaj novi webhook) kako biste spremili webhook.

![Padajući izbornik događaja webhooka s odabranim Payment Received](/img/admin/webhook-event-picker.png)

Sada možemo poslati test događaj na endpoint da vidimo je li webhook koji smo kreirali funkcionalan. To možemo učiniti klikom na **Send Test Event** (Pošalji test događaj) ispod webhooka koji smo kreirali.

![Lista webhooka koja prikazuje jedan konfigurirani webhook i akciju Send Test](/img/admin/webhooks-list-populated.png)

Ovo prikazuje prozor za potvrdu da je test bio uspješan.

![Rezultat test događaja webhooka nakon slanja testnog payloada](/img/admin/webhook-test-result.png)

Vratimo se na web stranicu _Requestbin_ i vidjet ćete da je payload (podaci) primljen s nekim testnim podacima.

Ovo je osnovni princip kako rade webhookovi i endpointi. Ako želite kreirati vlastiti endpoint, trebat će vam napraviti vlastitu funkciju koja će obrađivati podatke koje dobivate od Ultimate Multisite-a.
