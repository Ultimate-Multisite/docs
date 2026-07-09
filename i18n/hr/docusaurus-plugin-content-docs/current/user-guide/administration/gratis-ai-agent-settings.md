---
title: Postavke Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Postavke Gratis AI Agent {#gratis-ai-agent-settings}

Zaslon **Postavke → Napredno** u Gratis AI Agent pruža administratorsku konfiguraciju za pozadinske integracije. Ova stranica dokumentira prosljeđivanje povratnih informacija, ključeve pružatelja pretraživanja, postavljanje upravljane Superdav usluge, kontrole za Google Calendar, TextBee SMS postavke i mrežne oznake značajki.

## Pristup postavkama {#accessing-settings}

1. U WordPress administraciji idite na **Gratis AI Agent → Postavke**.
2. Kliknite karticu **Napredno**.

## Konfiguracija krajnje točke za povratne informacije {#feedback-endpoint-configuration}

Krajnja točka za povratne informacije prima POST zahtjeve od AI agenta kad god korisnik pošalje povratnu informaciju putem gumba palac dolje, bannera s automatskim upitom ili naredbe `/report-issue`.

| Polje | Opis |
|---|---|
| **URL krajnje točke za povratne informacije** | URL koji prima slanja povratnih informacija kao HTTP POST zahtjeve s JSON tijelom. |
| **Feedback API Key** | bearer token poslan u `Authorization` headeru svakog zahtjeva za povratne informacije. Ostavite prazno ako vaša krajnja točka ne zahtijeva autentifikaciju. |

### Očekivani JSON sadržaj {#expected-json-payload}

Vaša krajnja točka za povratne informacije mora prihvatiti JSON tijelo s najmanje sljedećim poljima:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

U sadržaju mogu biti prisutna dodatna polja, ovisno o kontekstu razgovora.

### Vrijednosti `triage_category` {#triagecategory-values}

AI sloj za trijažu dodjeljuje jednu od sljedećih vrijednosti za `triage_category` prije prosljeđivanja sadržaja:

| Vrijednost | Značenje |
|---|---|
| `factual_error` | Asistent je pružio netočne činjenične informacije. |
| `unhelpful_answer` | Odgovor je bio tehnički točan, ali nije bio koristan. |
| `inappropriate_content` | Odgovor je sadržavao sadržaj koji se ne bi smio prikazati korisnicima. |
| `other` | Povratna informacija nije odgovarala poznatoj kategoriji. |

### Autentifikacija {#authentication}

Ako vaša krajnja točka zahtijeva autentifikaciju, postavite polje **Feedback API Key** na svoj bearer token. Agent šalje:

```
Authorization: Bearer <your-api-key>
```

Ako je polje **Feedback API Key** prazno, `Authorization` header se ne šalje.

### Onemogućavanje prikupljanja povratnih informacija {#disabling-feedback-collection}

Ostavite polja **URL krajnje točke za povratne informacije** i **Feedback API Key** praznima. Gumb palac dolje i sučelje za povratne informacije ostaju vidljivi korisnicima, ali slanja se ne prosljeđuju nijednoj vanjskoj usluzi.

## Brave Search API Key {#brave-search-api-key}

Također na kartici **Napredno**, polje **Brave Search API Key** omogućuje mogućnost [Internetsko pretraživanje](../configuration/internet-search).

| Polje | Opis |
|---|---|
| **Brave Search API Key** | Vaš API ključ s nadzorne ploče za razvojne programere Brave Search. Potrebno za omogućavanje internetskog pretraživanja u AI asistentu. |

Oznaka polja uključuje poveznicu na koju se može kliknuti za stranicu prijave za Brave Search API. Ostavite prazno za onemogućavanje internetskog pretraživanja.

Pogledajte [Internetsko pretraživanje](../configuration/internet-search) za dokumentaciju za krajnje korisnike o ovoj značajci.

## Upravljana Superdav usluga {#managed-superdav-service}

Superdav AI Agent v1.18.0 dodaje krajnje točke upravljane Superdav usluge i automatsku dodjelu veza za podržane web-lokacije. Koristite ove kontrole kada se vaša web-lokacija treba povezati s hostiranim pružateljem umjesto s ručno konfiguriranom krajnjom točkom usluge.

| Polje | Opis |
|---|---|
| **Upravljana Superdav usluga** | Omogućuje vezu s hostiranom Superdav uslugom za podržane web-lokacije. |
| **Dodijeli vezu** | Pokreće automatsku dodjelu krajnje točke i vjerodajnica. Koristite ovo nakon potvrde da web-lokacija treba upotrebljavati upravljanog pružatelja. |
| **Krajnja točka usluge / Status veze** | Prikazuje trenutačnu krajnju točku ili stanje veze nakon dodjele. |

Nakon dodjele spremite postavke i provjerite status veze prije oslanjanja na tijekove rada upravljane usluge. Ako dodjela ne uspije, pregledajte prikazane upute za ponovni pokušaj i potvrdite da web-lokacija ima dopuštenje za upotrebu hostiranog pružatelja.

## Konfiguracija Google Calendar {#google-calendar-configuration}

Kada su značajke kalendara Superdav AI Agent v1.18.0 omogućene, agent može čitati konfigurirane kalendare i pojedinosti događaja. Kalendarski alati usmjereni su na čitanje i korisni su za podsjetnike svjesne rasporeda, naknadno praćenje sudionika i povezivanje kontakata.

| Polje | Opis |
|---|---|
| **Vjerodajnice za Google Calendar** | Pohranjuje vjerodajnice ili vezu tokena potrebnu za čitanje kalendarskih podataka. |
| **Odabir kalendara** | Ograničava koje konfigurirane kalendare agent smije pregledavati. |
| **Status veze kalendara** | Potvrđuje mogu li trenutačne vjerodajnice čitati kalendare i događaje. |

Ograničite vjerodajnice kalendara na kalendare koji su agentu potrebni. Ponovno povežite ili rotirajte vjerodajnice ako status označava istekao token.

## TextBee SMS obavijesti {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 dodaje TextBee kao SMS pružatelja za konfigurirane tijekove rada obavijesti. SMS obavijesti trebaju biti uparene s ljudskim odobrenjima za osjetljive poruke ili poruke usmjerene prema korisnicima.

| Polje | Opis |
|---|---|
| **TextBee API ključ** | Autentificira zahtjeve prema TextBee SMS pružatelju. |
| **TextBee uređaj / pošiljatelj** | Odabire TextBee pošiljatelja ili uređaj koji se upotrebljava za odlazne poruke, kada to pružatelj zahtijeva. |
| **SMS obavijesti omogućene** | Dopušta odobrenim tijekovima rada slanje obavijesti tekstualnim porukama. Ostavite onemogućeno kako biste spriječili SMS slanja. |

Pošaljite testnu poruku samo na broj u vlasništvu administratora, zatim potvrdite ponašanje odobrenja prije omogućavanja zakazanih podsjetnika ili podsjetnika usmjerenih prema sudionicima.

## Oznake značajki {#feature-flags}

Također uvedena u v1.9.0, kartica **Postavke → Oznake značajki** pruža prekidače za neobaveznu funkcionalnost. Svaka je oznaka omogućena ili onemogućena na razini cijele mreže; trenutačno nema nadjačavanja po web-lokaciji.

### Pristup oznakama značajki {#accessing-feature-flags}

1. U WordPress administraciji idite na **Gratis AI Agent → Postavke**.
2. Kliknite karticu **Oznake značajki**.

### Oznake kontrole pristupa {#access-control-flags}

| Oznaka | Zadano | Opis |
|---|---|---|
| **Ograniči na administratore** | Isključeno | Kada je omogućeno, samo korisnici s ulogom `administrator` mogu otvoriti AI Agent chat panel. Sve ostale uloge umjesto toga vide poruku "Kontaktirajte svog administratora". |
| **Ograniči na mrežne admine** | Isključeno | Kada je omogućeno na multisite mreži, samo Super Admins mogu koristiti agenta. Administratori pojedinačnih stranica su blokirani. Ima prednost nad "Ograniči na administratore" ako su obje opcije omogućene. |
| **Dopusti pristup pretplatnicima** | Isključeno | Kada je omogućeno, korisnici s ulogom `subscriber` mogu koristiti chat sučelje, ali su ograničeni na mogućnosti samo za čitanje (bez stvaranja objava ili promjena postavki). |
| **Onemogući za nečlanove** | Isključeno | Integrira se sa statusom članstva Ultimate Multisite. Kada je omogućeno, chat je skriven za stranice koje nemaju aktivno članstvo. |

### Oznake brendiranja {#branding-flags}

| Oznaka | Zadano | Opis |
|---|---|---|
| **Sakrij podnožje "Powered by Gratis AI Agent"** | Isključeno | Uklanja redak s atribucijom brenda prikazan na dnu chat widgeta. Preporučuje se za white-label implementacije. |
| **Prilagođeni naziv agenta** | *(prazno)* | Zamjenjuje zadanu oznaku "Gratis AI Agent" u zaglavlju chata i administratorskom izborniku vašim vlastitim nazivom proizvoda. Ostavite prazno za korištenje zadanog. |
| **Sakrij odabir agenta** | Isključeno | Kada je omogućeno, korisnici ne mogu prebacivati između pet ugrađenih agenata. Trenutačni agent je fiksiran na ono što je konfigurirano kao zadano u Postavke → Općenito. |
| **Koristi ikonu stranice kao avatar chata** | Isključeno | Zamjenjuje zadanu AI ikonu u zaglavlju chat widgeta ikonom WordPress stranice (postavlja se pod Izgled → Prilagodi → Identitet stranice). |

### Oznake sigurnosti automatizacije {#automation-safety-flags}

Superdav AI Agent v1.18.0 uvodi kontrolne točke ljudskog odobrenja i zapise podsjetnika za sigurnije izvođenje automatizacije. Te kontrole mogu se pojaviti u oznakama značajki ili naprednim postavkama automatizacije, ovisno o instaliranom paketu.

| Oznaka | Zadano | Opis |
|---|---|---|
| **Zahtijevaj ljudsko odobrenje** | Preporučeno uključeno | Pauzira osjetljive automatizacije dok ovlašteni korisnik ne pregleda i potvrdi predloženu radnju. |
| **Deduplikacija podsjetnika** | Uključeno | Bilježi poslane podsjetnike kako ponovni pokušaji ili zakazana izvođenja ne bi slali duplicirane obavijesti. |
| **Omogući alate kalendara** | Isključeno dok se ne konfigurira | Omogućuje agentu čitanje konfiguriranih Google kalendara i događaja. |
| **Omogući SMS obavijesti** | Isključeno dok se ne konfigurira | Omogućuje odobrenim tijekovima rada slanje TextBee SMS obavijesti nakon spremanja vjerodajnica. |

### Primjena promjena {#applying-changes}

Kliknite **Spremi postavke** nakon uključivanja ili isključivanja bilo koje oznake. Promjene stupaju na snagu odmah — nije potrebno pražnjenje predmemorije ni ponovna aktivacija plugina.
