---
title: Pregled Administracije
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Pregledavanje admin panela

Ultimate Multisite tebe cilja da bude što jednostavniji i samoprocetljiviji, ali s toliko moćnim alatom može pomoći u vođenju vodiča kroz njega. Prođimo kroz admin stranice kako bismo ti pomogli da se smestiš.

## Dashboard (Podešavanje) {#dashboard}

Ultimate Multisite **Dashboard** prikazuje osnovne izveštaje i analitiku, uključujući prihode, aktivnosti sajtova, rast članstva, broje posetilaca i geografske podatke.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Evo kompletnog pregleda dashboarda:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

I donji deo dashboarda:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Evo i kompletnog pregleda network dashboarda:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Checkout Forms (Forme za plaćanje) {#checkout-forms}

**Checkout Forms** ti daju fleksibilnost da kreiraš prilagođene stranice za registraciju. Možeš prilagoditi polja, umetnuti prilagođene klase i skripte, kao i ograničiti pristup na osnovu zemlje ili lokacije posetilaca.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Products (Proizvodi) {#products}

Sekcija **Products** je mesto gde kreiraš različite planove, pakete i usluge za tvoju mrežu. Definiši cene, frekvencije fakturisanja te limite i kvote na nivou proizvoda.

![Products list](/img/admin/products-list.png)

## Memberships (Članstva) {#memberships}

Stranica **Memberships** prikazuje sve pretplate u tvojoj mreži. Pregledaj i uređuj detalje pretplate, uključujući planove, proizvode, iznose fakturisanja i frekvencije, istoriju plaćanja te vremenske oznake.

![Memberships list](/img/admin/memberships-list.png)

## Payments (Plaćanja) {#payments}

Stranica **Plaćanja** pruža brz pregled istorije plaćanja po celoj vašoj mreži, sa detaljnim informacijama o transakcijama uključujući specifične proizvode i iznose.

![Payments list](/img/admin/payments-list.png)

## Klijenti {#customers}

Stranica **Klijenti** prikazuje sve članove registrovane u vašoj mreži sa osnovnim korisničkim informacijama kao što su ime, e-mail adresa, poslednji prijavljeni datum i link "prebaci se na" za prijavljivanje na njihov subsajt.

![Customers list](/img/admin/customers-list.png)

## Sajtovi {#sites}

Stranica **Sajtovi** navodi sve subsajtove u vašoj mreži, uključujući šablone sajtova i sajmove vlasnika klijenata. Lako upravljajte mapiranim domenima, limitima i kvotama, pluginovima i temama, kao i predlošcima za slike sajtova (thumbnails).

![Sites list](/img/admin/sites-list.png)

## Domeni {#domains}

Stranica **Domena** posvećena je prilagođenim domenima mapiranim na subsajtove. Kao super administrator, možete ručno dodavati ili mapirati prilagođene imena domena i pregledavati DNS zapise i logove.

![Domains list](/img/admin/domains-list.png)

## Kodovi Popusta {#discount-codes}

**Kodovi Popusta** omogućavaju da kreirate kupon kodove za ponudu popusta vašim krajnjim korisnicima. Navedite vrednost popusta i cilj određene korisnike ili grupe.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Obaveštenja (Broadcasts) {#broadcasts}

**Obaveštenja (Broadcasts)** je alat za distribuciju najava ili slanje privatnih poruka korisnicima vaših subsajtova. Cilj određene grupe korisnika na osnovu plana ili proizvoda na koji su pretplatnici.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Podešavanja {#settings}

Stranica **Podešavanja** je mesto gde konfigurirate Ultimate Multisite — podešavanja registracije, plaćanja, API i webhooks, mapiranje domena i druge integracije.

Lista podeš trenutno podržanih skupina OAuth provajdera: Anthropic Max, OpenAI ChatGPT/Codex i Google AI Pro. Svaki kartica provajdera omogućava super administratorima da povežu naloge, osveže sačuvane naloge, uklone naloge po e-mailu i koriste ručni fallback putem OAuth kada sandboxed okruženje blokira preusmeravanje pregledača. Opcije podešavanja za Cursor Pro su uklonjene iz admin panela.

Nalogi ChatGPT/Codex podržavaju korišćenje alata podržano konektorom gde operacija dozvoljava alate, tako da se radni tokovi administratora koji zavise od operacija podržanih konektorom mogu koristiti ponašanje alata Codex nakon povezivanja naloga OpenAI.

![Settings page](/img/admin/settings-general.png)

Evo kompletnog pregleda stranice sa opcijama za opšte podešavanja:

![Settings general full page](/img/admin/settings-general-full.png)

I stranice za e-mail podešavanja:

![Settings emails full page](/img/admin/settings-emails-full.png)

I stranice za plaćanja:

![Settings payments full page](/img/admin/settings-payments-full.png)

I donji deo stranice za plaćanja:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

I stranica za podešavanja sajtova:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Events (Događaji) {#events}

Stranica **Events** čuva zapis svih događaja i logova u vašoj mreži. Prati aktivnosti kao što su promene plana, registracije i drugi pokreti — korisno za praćenje vaše multisite.

![Events list](/img/admin/events-list.png)

## Webhooks (Webhookovi) {#webhooks}

**Webhooks** vam omogućavaju da dostavite podatke drugoj aplikaciji. Korisno je za slanje podataka iz Ultimate Multisite na platforme kao što su Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
