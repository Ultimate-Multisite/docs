---
title: Postavke besplatnog AI agenta
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Postavke za AI Agenta

Ekran **Postavke → Napredno** u Gratis AI Agentu pruža konfiguraciju na administrativnom nivou za integracije u backend koje su uvedene u verziji v1.5.0. Ova stranica dokumentira polja **Feedback Endpointa** i njihov očekivani format.

## Pristup Postavkama

1. U WordPress adminu, idite na **Gratis AI Agent → Postavke**.
2. Kliknite na karticu **Napredno (Advanced)**.

## Konfiguracija Feedback Endpointa

Feedback endpoint prima POST zahtjeve od AI agenta svaki put kada korisnik pošalje povratnu informaciju putem gumba "palac nadole", banner-a za automatski prompt ili komande `/report-issue`.

| Polje | Opis |
|---|---|
| **Feedback Endpoint URL** | URL koji prima povratne informacije kao HTTP POST zahtjev s JSON tijelom. |
| **Feedback API Key** | Bearer token koji se šalje u zaglavlju `Authorization` svakog zahtjeva za povratnu informaciju. Ostavite prazno ako vaš endpoint ne zahtijeva autentifikaciju. |

### Očekivano JSON Tijelo (Payload)

Vaš feedback endpoint mora prihvatiti JSON tijelo s barem sljedećim poljima:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Odgovor je bio pogrešan u vezi s cijenama.",
  "triage_category": "factual_error"
}
```

Dodatna polja mogu biti prisutna u tijelu ovisno o kontekstu razgovora.

### Vrijednosti `triage_category`

AI sloj za trijage dodjeljuje jednu od sljedećih vrijednosti polju `triage_category` prije proslijeđivanja tijela:

| Vrijednost | Značenje |
|---|---|
| `factual_error` | Asistent je dao pogrečne činjenice. |
| `unhelpful_answer` | Odgovor je tehnički ispravan, ali nije koristan. |
| `inappropriate_content` | Odgovor je sadržavao sadržaj koji ne bi trebao biti prikazan korisnicima. |
| `other` | Povratna informacija se ne poklapa s poznatom kategorijom. |

### Autentifikacija

Ako vaš endpoint zahtijeva autentifikaciju, postavite polje **Feedback API Key** na svoj bearer token. Agent šalje:

```
Authorization: Bearer <vaša-api-ključ>
```

Ako je polje **Feedback API Key** prazno, nikakav `Authorization` header se ne šalje.

### Uključivanje prikupljanja povratnih informacija (Disabling Feedback Collection)

Ostavite oba polja **Feedback Endpoint URL** i **Feedback API Key** prazna. Dugme s palcem nadole i UI za povratne informacije ostaju vidljivi korisnicima, ali podaci se ne proslijeđuju nikakvom vanjskom usluzi.

## Brave Search API Key

Također na kartici **Advanced**, polje **Brave Search API Key** omogućuje [Internet Search](../configuration/internet-search) mogućnost pretraživanja interneta.

| Polje | Opis |
|---|---|
| **Brave Search API Key** | Vaša API ključ od Brave Search developer dashboarda. Potrebno za omogućavanje pretraživanja interneta u AI asistentu. |

Oznaka polja uključuje klikabilni link na stranicu za registraciju Brave Search API-ja. Ostavite prazno da biste onemogućili pretraživanje interneta.

Pogledajte [Internet Search](../configuration/internet-search) za dokumentaciju za krajnje korisnike o ovoj značajci.

## Feature Flags (Flags za značajke)

Također uvedena u verziji v1.9.0, kartica **Settings → Feature Flags** pruža prekidače za opcionalne funkcije. Svaki flag je uključen ili isključen na cijelom sustavu; trenutno nema mogućnosti nadoknadnje na nivou pojedine stranice (per-site override).

### Pristup Feature Flags-u

1. U WordPress adminu, idite na **Gratis AI Agent → Settings**.
2. Kliknite na karticu **Feature Flags**.

### Flags za kontrolu pristupa

| Flag | Default | Opis |
|---|---|---|
| **Ograniči na Administratora** | Ista (Off) | Kada je uključeno, samo korisnici s ulogom `administrator` mogu otvoriti chat panel AI Agent-a. Svi drugi su prikazuju poruku "Kontaktirajte administratora". |
| **Ograniči na Mrežne Administrecne** | Ista (Off) | Kada je uključeno na mreži multisite, samo Super Admini mogu koristiti agent. Individualni admini sitova su blokirani. Premaje se nad "Ograniči na Administratora" ako su oba uključena. |
| **Dozvoli Pristup Pretplatnicima** | Ista (Off) | Kada je uključeno, korisnici s ulogom `subscriber` mogu koristiti chat interfejs, ali su ograničeni na čitanje (nemaju mogućnost kreiranja postova ili promjene postavki). |
| **Onemogući za Nečlanice** | Ista (Off) | Integrira se s statusom članstva Ultimate Multisite. Kada je uključeno, chat je skriven za siteove koji nemaju aktivno članstvo. |

### Flags za Brendiranje

| Flag | Default | Opis |
|---|---|---|
| **Sakrij Footer "Powered by Gratis AI Agent"** | Ista (Off) | Uklanja liniju brendiranja prikazanu na dnu chat widgeta. Preporučeno za white-label implementacije. |
| **Prilagoditi Naziv Agenta** | *(prazno)* | Zamjenjuje podrazmjeni label "Gratis AI Agent" u zaglavlju chata i admin meniju s vašim imenom proizvoda. Ostavite prazno da biste koristili podrazmjenu opciju. |
| **Sakrij Odabir Agenta** | Ista (Off) | Kada je uključeno, korisnici ne mogu prebacivati između pet ugrađenih agenata. Trenutni agent je fiksiran na ono što je postavljeno kao podrazmjerno u Postavkama → Opće. |
| **Koristi Ikonicu Sitea kao Avatar Chata** | Ista (Off) | Zamjenjuje podrazmjenu AI ikonu u zaglavlju chat widgeta s WordPress ikonom sita (postavite pod Appearance → Customize → Site Identity). |

### Primjena Promjena

Kliknite na **Save Settings** nakon uključivanja bilo kojeg flags. Promjene stupaju na snagu odmah — ne treba čišćenje cache-a niti ponovno aktiviranje plugin-a.
