---
title: Referenca postavki
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referenca postavki {#settings-reference}

Ova stranica prati postavke koje utiču na svakodnevnu administraciju i nedavne promjene ponašanja u Ultimate Multisite.

## Ostale opcije {#other-options}

Područje **Ostale opcije** pojavljuje se pod **Ultimate Multisite > Settings > Login & Registration**.

| Postavka | Opis |
|---|---|
| **Omogući Jumper** | Prikazuje Jumper alat za brzu navigaciju u admin području. Koristite ga za direktan skok na Ultimate Multisite ekrane, mrežne objekte i podržana admin odredišta. Onemogućite ga ako ne želite da ova prečica bude vidljiva. |

## Prijavljivanje grešaka i telemetrija {#error-reporting-and-telemetry}

Prethodna postavka za uključivanje prijavljivanja grešaka uklonjena je sa stranice postavki. Anonimna telemetrija je onemogućena i ne postoji UI prekidač za njeno omogućavanje.

Ako održavate interne runbookove ili snimke ekrana za stranicu postavki, uklonite reference na staro polje za uključivanje prijavljivanja grešaka kako administratori ne bi tražili postavku koja više nije prisutna.

## Postavke uvoza/izvoza {#importexport-settings}

Kartica postavki **Import/Export** opisuje koje postavke kontroliše i direktno vodi na **Ultimate Multisite > Site Export** za arhive stranica i mreže. Koristite karticu postavki za konfiguraciju uvoza/izvoza, koristite **Tools > Export & Import** za tok rada izvoza/uvoza pojedinačne stranice, a koristite alat Site Export kada vam je potrebna potpuna Network Export arhiva.

## Upozorenje o saldu Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Kada je Domain Seller dodatak povezan s HostAfrica, mrežni administratori sada vide upozorenje o niskom saldu koje se može odbaciti kada je saldo reseller računa prenizak za pouzdanu registraciju domena ili obradu obnove.

Tretirajte ovu obavijest kao operativno upozorenje: dopunite HostAfrica reseller saldo prije prihvatanja dodatnih plaćenih registracija domena, zatim se vratite na postavke Domain Seller ili ekran za praćenje domena kako biste potvrdili da se registracije i obnove mogu normalno nastaviti.

## Postavke konektora AI provajdera {#ai-provider-connector-settings}

Postavke konektora AI provajdera sada prikazuju samo podržane skupove OAuth računa:

| Provajder | Tok podešavanja |
|---|---|
| **Anthropic Max** | Povežite jedan ili više Anthropic Max računa pomoću OAuth dugmeta. Koristite ručnu OAuth rezervnu opciju kada sandboxirani pretraživač ne može automatski završiti preusmjeravanje. |
| **OpenAI ChatGPT/Codex** | Povežite ChatGPT račune kroz isti tok rada OAuth skupa. Operacije koje podržava konektor mogu koristiti pozive ChatGPT Codex alata nakon što je račun povezan. |
| **Google AI Pro** | Povežite Google AI Pro račune kroz OAuth, zatim osvježite konektor ako se lista računa ne ažurira odmah. |

Cursor Pro više nije podržani provajder. Uklonite stare interne snimke ekrana, runbookove ili korake uvođenja koji spominju polja za podešavanje Cursor Pro ili putanje konektora.

Kada dodajete ili uklanjate račune provajdera, unesite važeću email adresu za račun koji se osvježava ili briše i sačuvajte postavke provajdera prije testiranja operacija podržanih konektorom.
