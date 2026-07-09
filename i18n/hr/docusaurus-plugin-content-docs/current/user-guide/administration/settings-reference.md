---
title: Referenca postavki
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referenca postavki

Ova stranica prati postavke koje utječu na svakodnevnu administraciju i nedavne promjene ponašanja u Ultimate Multisite.

## Ostale opcije

Područje **Ostale opcije** pojavljuje se pod **Ultimate Multisite > Settings > Login & Registration**.

| Postavka | Opis |
|---|---|
| **Omogući Jumper** | Prikazuje alat Jumper za brzu navigaciju u administracijskom području. Upotrijebite ga za izravan prelazak na zaslone Ultimate Multisite, mrežne objekte i podržana administracijska odredišta. Onemogućite ga ako ne želite da ovaj prečac bude vidljiv. |

## Prijavljivanje pogrešaka i telemetrija

Prethodna postavka uključivanja prijavljivanja pogrešaka uklonjena je sa stranice postavki. Anonimna telemetrija je onemogućena i ne postoji UI preklopnik za njezino omogućavanje.

Ako održavate interne runbookove ili snimke zaslona za stranicu postavki, uklonite reference na staro polje uključivanja prijavljivanja pogrešaka kako administratori ne bi tražili postavku koja više nije prisutna.

## Postavke uvoza/izvoza

Kartica postavki **Import/Export** opisuje koje postavke kontrolira i izravno povezuje na **Ultimate Multisite > Site Export** za arhive siteova i mreže. Upotrijebite karticu postavki za konfiguraciju uvoza/izvoza, upotrijebite **Tools > Export & Import** za tijek rada izvoza/uvoza jednog sitea, a alat Site Export upotrijebite kada vam je potrebna potpuna arhiva Network Export.

## Upozorenje o saldu Domain Seller HostAfrica

Kada je addon Domain Seller povezan s HostAfrica, mrežni administratori sada vide odbacivo upozorenje o niskom saldu kada je saldo reseller Account prenizak za pouzdanu registraciju domena ili obradu obnove.

Tretirajte ovu obavijest kao operativno upozorenje: nadoplatite HostAfrica reseller saldo prije prihvaćanja dodatnih plaćenih registracija domena, zatim se vratite na postavke Domain Seller ili zaslon za praćenje domena kako biste potvrdili da se registracije i obnove mogu normalno nastaviti.

## Postavke konektora AI pružatelja

Postavke konektora AI pružatelja sada izlažu samo podržane skupove OAuth Accounta:

| Pružatelj | Tijek postavljanja |
|---|---|
| **Anthropic Max** | Povežite jedan ili više Anthropic Max Accounta pomoću OAuth gumba. Upotrijebite ručni rezervni OAuth postupak kada sandboxed preglednik ne može automatski dovršiti preusmjeravanje. |
| **OpenAI ChatGPT/Codex** | Povežite ChatGPT Accounte kroz isti tijek rada OAuth skupa. Operacije podržane konektorom mogu koristiti ChatGPT Codex pozive alata nakon što je Account povezan. |
| **Google AI Pro** | Povežite Google AI Pro Accounte putem OAutha, zatim osvježite konektor ako se popis Accounta ne ažurira odmah. |

Cursor Pro više nije podržani pružatelj. Uklonite stare interne snimke zaslona, runbookove ili korake onboardinga koji spominju polja za postavljanje Cursor Pro ili putanje konektora.

Pri dodavanju ili uklanjanju Accounta pružatelja, unesite valjanu adresu e-pošte za Account koji se osvježava ili briše i spremite postavke pružatelja prije testiranja operacija koje podržava konektor.
