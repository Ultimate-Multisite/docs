---
title: Referenca za postavke
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referenca postavki

Ova stranica prati postavke koje utječu na svakodnevnu administraciju i nedavne promjene ponašanja u Ultimate Multisite.

## Ostale opcije

Obitelj **Ostale opcije** se nalazi pod **Ultimate Multisite > Settings > Login & Registration**.

| Postavka | Opis |
|---|---|
| **Enable Jumper** (Omogućite Jumper) | Prikazuje alat brzog navigiranja Jumpera u admin području. Koristite ga za direktno preskakanje na Ultimate Multisite stranice, mrežne objekte i podržane odredište za admin panel. Isključite ga ako ne želite da je ovaj skraćenica vidljiva. |

## Izvješćivanje o greškama i telemetrija

Postavka za prijavu problema s greškama koju smo ranije imali na stranici postavki je uklonjena. Anonimna telemetrija je isključena i nema UI prekidača za njeno uključivanje.

Ako održavate interne runbooks ili snimke zaslona za stranicu postavki, uklonite reference na staru opciju prijavu problema s greškama kako bi administratori ne tražili postavku koja više nije dostupna.

## Postavke za uvoz/izvoz (Import/Export)

Tab **Postavke za uvoz/izvoz** opisuje koje postavke kontrolira i direktno povezuje se sa **Ultimate Multisite > Site Export** za arhive stranice i mreže. Koristite tab postavki za konfiguraciju uvoza/izvoza, koristite **Tools > Export & Import** za rad s jednoslojsnim izvozom/uvozom, a alat Site Export koristite kada vam je potreban kompletan arhivski izvoz Mreže (Network Export).

## Postavke konektora AI provajdera

Postavke konektora AI provajdera sada prikazuju samo podržane skupine OAuth računa:

| Provednik | Proces podešavanja |
|---|---|
| **Anthropic Max** | Povežite jednu ili više računa Anthropic Max putem gumba za OAuth. Koristite ručni fallback za OAuth kada sandbox preglednik ne može automatski završiti redirekciju. |
| **OpenAI ChatGPT/Codex** | Povežite račune ChatGPT putem istog radnog toka (workflow) OAuth-a. Operacije koje podržavaju konektor mogu koristiti alate poput ChatGPT Codex nakon što je račun povezan. |
| **Google AI Pro** | Povežite Google AI Pro račune putem OAuth-a, a zatim osvježite konektor ako se popis računa ne ažurira odmah. |

Cursor Pro više nije podržani provednik. Uklonite stare interne snimke zaslona (screenshots), runbooks ili korake za uvod koji spominju podešavanja Cursor Pro ili putanje konektora.

Prilikom dodavanja ili uklanjanja računa provjerenog provednika, unesite važeću e-mail adresu za račun koji se osvježava ili briše i spremite postavke provednika prije testiranja operacija koje su podržane konektorom.
