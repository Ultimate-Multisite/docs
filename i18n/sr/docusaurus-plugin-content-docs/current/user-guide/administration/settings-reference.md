---
title: Referenca za podešavanja
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referenca podešavanja

Ova stranica prati podešavanja koja utiču na svakodnevnu administraciju i nedavne promene ponašanja u Ultimate Multisite-u.

## Ostale opcije

Obrazac **Ostale opcije** se nalazi pod **Ultimate Multisite > Settings > Login & Registration**.

| Podešavanje | Opis |
|---|---|
| **Enable Jumper** (Omogućavanje Jumpera) | Prikazuje alat brzog navigacije Jumper u admin delu. Koristite ga da direktno pređete na ekrane Ultimate Multisite-a, mrežne objekte i podržane destinacije za admin. Isključite ga ako ne želite da ovaj skraćenica bude vidljiva. |

## Izveštavanje o greškama i telemetrija

Podešavanje prethodnog opcije za prijavu grešaka je uklonjeno sa stranice podešavanja. Anonimna telemetrija je isključena i nema UI prekidača da je uključite.

Ako održavate interne runbooks ili snimke ekrana za stranicu podešavanja, uklonite reference na staru opciju prijavljivanja grešaka tako da administratori ne traže podešavanje koje više nije prisutno.

## Podešavanja uvoza/izvoza (Import/Export)

Tab **Import/Export** opisuje koja podešavanja kontroliše i direktno povezuje se sa **Ultimate Multisite > Site Export** za arhive sajta i mreže. Koristite tab podešavanja za konfiguraciju uvoza/izvoza, koristite **Tools > Export & Import** za rad sa uvozom/izvozom pojedinačnog sajta, a alat Site Export koristite kada vam je potreban kompletan arhivski izvoz Mreže (Network Export).

## Podešavanja konektora AI provajdera

Podešavanja konektora AI provajdera sada prikazuju samo podržane bazne grupe OAuth naloga:

| Pruver | Proces podešavanja |
|---|---|
| **Anthropic Max** | Povežite jedan ili više naloga Anthropic Max putem dugmeta OAuth. Koristite ručnu opciju OAuth kao rezervni plan ako sandboxed pregledač ne može automatski završiti preusmeravanje. |
| **OpenAI ChatGPT/Codex** | Povežite nalog za ChatGPT kroz isti radni tok (workflow) OAuth. Operacije koje podržava konektor mogu koristiti alate ChatGPT Codex nakon što je nalog povezan. |
| **Google AI Pro** | Povežite naloge Google AI Pro putem OAuth-a, a zatim osvežite konektor ako se lista naloga ne ažurira odmah. |

Cursor Pro više nije podržan kao pružaoc. Uklonite stare interne snimke ekrana, runbookove ili korake za uvod koji spominju podešavanja Cursor Pro ili putanje konektora.

Prilikom dodavanja ili uklanjanja naloga pružaoca, unesite važeću e-mail adresu za nalog koji se osvežava ili briše i sačuvajte postavke pružaoca pre testiranja operacija koje zavise od konektora.
