---
title: Pregled administracijskog panela
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Pregledavanje Admin Panela

Ultimate Multisite teži da bude što jednostavniji i samoprocjicirajući, ali s tako moćnim alatom može pomoći u vođenju vodiča kroz sve stranice admina kako biste se smjestili. Prolazimo kroz administrativne stranice kako bismo vam pomogli da se osavijate.

## Dashboard (Prikaz) {#dashboard}

Ultimate Multisite **Dashboard** prikazuje osnovne izvještaje i analitiku, uključujući prihode, aktivnosti stranica, rast članstva, broj posjetitelja i geografske podatke.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Evo kompletnog prikaza dashboarda:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

I donji dio dashboarda:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Ovo je i kompletan prikaz mrežnog dashboarda:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Checkout Forms (Obrazac za plaćanje) {#checkout-forms}

**Checkout Forms** vam daju fleksibilnost da kreirate prilagođene stranice za registraciju. Možete prilagoditi polja, ugraditi vlastite klase i skripte te ograničiti pristup na temelju države ili lokacije posjetitelja.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Products (Proizvodi) {#products}

Sekcija **Products** je mjesto gdje kreirate različite planove, pakete i usluge za vašu mrežu. Definišite cijene, frekvencije fakturiranja te limite i kvote na razini proizvoda.

![Products list](/img/admin/products-list.png)

## Memberships (Članstva) {#memberships}

Stranica **Memberships** prikazuje sve pretplate u vašoj mreži. Pregledajte i uređujte detalje pretplate, uključujući planove, proizvode, iznose fakturiranja i frekvencije, povijest plaćanja te vremenske oznake.

![Memberships list](/img/admin/memberships-list.png)

## Payments (Plaćanja) {#payments}

Stranica za **Plaćanja** pruža brz pregled povijesti plaćanja po cijeloj vašoj mreži, s detaljnim informacijama o transakcijama uključujući specifične proizvode i iznose.

![Payments list](/img/admin/payments-list.png)

## Klijenti {#customers}

Stranica za **Klijente** prikazuje sve članove registrirane u vašoj mreži s osnovnim korisničkim informacijama kao što su ime, e-mail adresa, posljednji prijava i link "prebaci se na" za prijavu na njihov podnaslov.

![Customers list](/img/admin/customers-list.png)

## Site {#sites}

Stranica za **Site** navodi sve podnaslove u vašoj mreži uključujući predloške za siteove i siteove vlasništva klijenata. Lako upravljajte mapiranim domenima, ograničenjima i kvotama, pluginovima i temama, te minijaturnim prikazima siteova.

![Sites list](/img/admin/sites-list.png)

## Domeni {#domains}

Stranica za **Domene** posvećena prilagođenim domenima mapiranim na podnaslove. Kao super administrator, možete ručno dodavati ili mapirati prilagođene imena domena i pregledavati DNS zapise i logove.

![Domains list](/img/admin/domains-list.png)

## Kodovi popusta {#discount-codes}

**Kodovi popusta** omogućuju vam da kreirate kuponske kodove za ponudu popusta vašim krajnjim korisnicima. Odredite vrijednost popusta i ciljajte specifične korisnike ili grupe.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Obavijesti (Broadcasts) {#broadcasts}

**Obavijesti (Broadcasts)** je alat za distribuciju obavijesti ili slanje privatnih poruka korisnicima vaših podnaslova. Ciljajte specifične grupe korisnika na temelju plana ili proizvoda na koji su pretplatnici.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Postavke (Settings) {#settings}

Stranica za **Postavke** je mjesto gdje konfigurirate Ultimate Multisite — postavke registracije, plaćanja, API i webhooks, mapiranje domena i druge integracije.

Pode pronaći popis trenutno podržanih grupova OAuth provajdera: Anthropic Max, OpenAI ChatGPT/Codex i Google AI Pro. Svaki kartica provajdera omogućuje super administratorima povezivanje računa, osvežavanje sačuvanih računa, uklanjanje računa putem e-maila te korištenje ručnog fallback-a OAuth-a kada sandboxed okruženje blokira preusmjeravanje preglednika. Opcije podešavanja za Cursor Pro su uklonjene s admin panela.

Računi ChatGPT/Codex podržavaju korištenje alata podržanih konektorima gdje operacija dopušta alate, tako da admin radni tokovi koji ovisno su na operacijama podržanim konektorom mogu koristiti ponašanje alata Codex nakon što je račun OpenAI povezan.

![Settings page](/img/admin/settings-general.png)

Evo kompletnog pregleda stranice općih podešavanja:

![Settings general full page](/img/admin/settings-general-full.png)

I stranice za e-mail postavke:

![Settings emails full page](/img/admin/settings-emails-full.png)

I stranice za plaćanja:

![Settings payments full page](/img/admin/settings-payments-full.png)

I donji dio stranice za plaćanja:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

I stranice za site postavke:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Events (Događaji) {#events}

Stranica **Events** zadržava zapis svih događaja i logova u vašoj mreži. Prati aktivnosti poput promjena plana, registracije i drugih pokreta — korisno za praćenje vaše multisite instalacije.

![Events list](/img/admin/events-list.png)

## Webhooks (Webhookovi) {#webhooks}

**Webhooks** omogućuju vam slanje podataka u drugu aplikaciju. Korisno je za slanje podataka iz Ultimate Multisite na platforme poput Zapiera.

![Webhooks list](/img/admin/webhooks-list.png)
