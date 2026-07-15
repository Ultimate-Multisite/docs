---
title: Postavke Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Postavke Gratis AI Agent

Ekran **Settings → Advanced** u Gratis AI Agent pruža konfiguraciju administratorskog nivoa za backend integracije. Ova stranica dokumentuje prosljeđivanje povratnih informacija, ključeve pružalaca pretrage, postavljanje upravljane Superdav usluge, Google Calendar kontrole, TextBee SMS postavke i oznake funkcija na nivou mreže.

## Pristup postavkama {#accessing-settings}

1. U WordPress administraciji idite na **Gratis AI Agent → Settings**.
2. Kliknite karticu **Advanced**.

## Konfiguracija endpointa za povratne informacije {#feedback-endpoint-configuration}

Endpoint za povratne informacije prima POST zahtjeve od AI agenta svaki put kada korisnik pošalje povratnu informaciju putem dugmeta thumbs-down, banera za automatski upit ili komande `/report-issue`.

| Polje | Opis |
|---|---|
| **Feedback Endpoint URL** | URL koji prima slanja povratnih informacija kao HTTP POST zahtjeve s JSON tijelom. |
| **Feedback API Key** | bearer token poslan u `Authorization` headeru svakog zahtjeva za povratne informacije. Ostavite prazno ako vaš endpoint ne zahtijeva autentifikaciju. |

### Očekivani JSON sadržaj {#expected-json-payload}

Vaš endpoint za povratne informacije mora prihvatiti JSON tijelo s najmanje sljedećim poljima:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Dodatna polja mogu biti prisutna u sadržaju ovisno o kontekstu razgovora.

### Vrijednosti `triage_category` {#triagecategory-values}

AI sloj za trijažu dodjeljuje jednu od sljedećih vrijednosti za `triage_category` prije prosljeđivanja sadržaja:

| Vrijednost | Značenje |
|---|---|
| `factual_error` | Asistent je pružio netačne činjenične informacije. |
| `unhelpful_answer` | Odgovor je bio tehnički tačan, ali nije bio koristan. |
| `inappropriate_content` | Odgovor je sadržavao sadržaj koji se ne bi trebao prikazivati korisnicima. |
| `other` | Povratna informacija nije odgovarala poznatoj kategoriji. |

### Autentifikacija {#authentication}

Ako vaš endpoint zahtijeva autentifikaciju, postavite polje **Feedback API Key** na svoj bearer token. Agent šalje:

```
Authorization: Bearer <your-api-key>
```

Ako je polje **Feedback API Key** prazno, `Authorization` header se ne šalje.

### Onemogućavanje prikupljanja povratnih informacija {#disabling-feedback-collection}

Ostavite i polje **Feedback Endpoint URL** i polje **Feedback API Key** praznima. Dugme thumbs-down i UI za povratne informacije ostaju vidljivi korisnicima, ali slanja se ne prosljeđuju nijednoj vanjskoj usluzi.

## Brave Search API Key {#brave-search-api-key}

Također na kartici **Advanced**, polje **Brave Search API Key** omogućava sposobnost [Internet pretraga](../configuration/internet-search).

| Polje | Opis |
|---|---|
| **Brave Search API Key** | Vaš API ključ iz Brave Search developer dashboarda. Potreban je za omogućavanje internet pretrage u AI asistentu. |

Oznaka polja uključuje link na koji se može kliknuti do stranice za registraciju za Brave Search API. Ostavite prazno za onemogućavanje internet pretrage.

Pogledajte [Internet pretraga](../configuration/internet-search) za dokumentaciju za krajnje korisnike o ovoj funkciji.

## Upravljana Superdav usluga {#managed-superdav-service}

Superdav AI Agent v1.18.0 dodaje upravljane endpointove Superdav usluge i automatsko obezbjeđivanje veze za podržane sajtove. Koristite ove kontrole kada se vaš sajt treba povezati s hostovanim pružaocem umjesto s ručno konfiguriranim endpointom usluge.

| Polje | Opis |
|---|---|
| **Managed Superdav Service** | Omogućava vezu s hostovanom Superdav uslugom za podržane sajtove. |
| **Provision Connection** | Pokreće automatsko obezbjeđivanje endpointa i vjerodajnica. Koristite ovo nakon što potvrdite da sajt treba koristiti upravljanog pružaoca. |
| **Service Endpoint / Connection Status** | Prikazuje trenutni endpoint ili stanje veze nakon obezbjeđivanja. |

Nakon obezbjeđivanja, sačuvajte postavke i provjerite status veze prije oslanjanja na tokove rada upravljane usluge. Ako obezbjeđivanje ne uspije, pregledajte prikazane smjernice za ponovni pokušaj i potvrdite da sajt ima dozvolu za korištenje hostovanog pružaoca.

## Konfiguracija Google Calendar {#google-calendar-configuration}

Kada su funkcije kalendara Superdav AI Agent v1.18.0 omogućene, agent može čitati konfigurirane kalendare i detalje događaja. Alati kalendara su usmjereni na čitanje i korisni su za podsjetnike svjesne rasporeda, praćenje učesnika i podudaranje kontakata.

| Polje | Opis |
|---|---|
| **Google Calendar Credentials** | Pohranjuje vjerodajnice ili vezu tokena potrebnu za čitanje podataka kalendara. |
| **Calendar Selection** | Ograničava koje konfigurirane kalendare agent smije pregledati. |
| **Calendar Connection Status** | Potvrđuje mogu li trenutne vjerodajnice čitati kalendare i događaje. |

Ograničite vjerodajnice kalendara na kalendare koji su agentu potrebni. Ponovo se povežite ili rotirajte vjerodajnice ako status ukazuje na istekao token.

## TextBee SMS obavještenja {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 dodaje TextBee kao SMS pružaoca za konfigurirane tokove rada obavještenja. SMS obavještenja treba upariti s kontrolnim tačkama ljudskog odobrenja za osjetljive poruke ili poruke usmjerene korisnicima.

| Polje | Opis |
|---|---|
| **TextBee API Key** | Autentificira zahtjeve prema TextBee SMS pružaocu. |
| **TextBee Device / Sender** | Odabire TextBee pošiljaoca ili uređaj koji se koristi za odlazne poruke, kada to zahtijeva pružalac. |
| **SMS Notifications Enabled** | Omogućava odobrenim tokovima rada slanje obavještenja tekstualnim porukama. Ostavite onemogućeno kako biste spriječili slanje SMS-a. |

Pošaljite testnu poruku samo na broj u vlasništvu administratora, zatim potvrdite ponašanje kontrolne tačke odobrenja prije omogućavanja zakazanih podsjetnika ili podsjetnika usmjerenih učesnicima.

## Oznake funkcija {#feature-flags}

Također uvedena u v1.9.0, kartica **Settings → Feature Flags** pruža prekidače za uključivanje/isključivanje opcionalne funkcionalnosti. Svaka oznaka je ili omogućena ili onemogućena na nivou cijele mreže; trenutno ne postoji nadjačavanje po sajtu.

### Pristup oznakama funkcija {#accessing-feature-flags}

1. U WordPress administraciji idite na **Gratis AI Agent → Settings**.
2. Kliknite karticu **Feature Flags**.

### Oznake kontrole pristupa {#access-control-flags}

| Oznaka | Zadano | Opis |
|---|---|---|
| **Ograniči na administratore** | Isključeno | Kada je omogućeno, samo korisnici s ulogom `administrator` mogu otvoriti panel za razgovor AI Agent. Sve ostale uloge umjesto toga vide poruku "Kontaktirajte svog administratora". |
| **Ograniči na Network Admins** | Isključeno | Kada je omogućeno na multisite mreži, samo Super Admins mogu koristiti agenta. Administratori pojedinačnih stranica su blokirani. Ima prednost nad "Ograniči na administratore" ako su obje opcije omogućene. |
| **Dozvoli pristup pretplatnicima** | Isključeno | Kada je omogućeno, korisnici s ulogom `subscriber` mogu koristiti interfejs za razgovor, ali su ograničeni na mogućnosti samo za čitanje (bez kreiranja objava ili promjena postavki). |
| **Onemogući za nečlanove** | Isključeno | Integriše se sa statusom članstva Ultimate Multisite. Kada je omogućeno, razgovor je skriven za stranice koje nemaju aktivno članstvo. |

### Oznake brendiranja {#branding-flags}

| Oznaka | Zadano | Opis |
|---|---|---|
| **Sakrij "Powered by Gratis AI Agent" podnožje** | Isključeno | Uklanja liniju atribucije brendiranja prikazanu na dnu widgeta za razgovor. Preporučuje se za white-label implementacije. |
| **Prilagođeni naziv agenta** | *(prazno)* | Zamjenjuje zadanu oznaku "Gratis AI Agent" u zaglavlju razgovora i admin meniju vašim vlastitim nazivom proizvoda. Ostavite prazno za korištenje zadane vrijednosti. |
| **Sakrij birač agenta** | Isključeno | Kada je omogućeno, korisnici ne mogu prebacivati između pet ugrađenih agenata. Trenutni agent je fiksiran na ono što je konfigurirano kao zadano u Postavke → Opće. |
| **Koristi ikonu stranice kao avatar razgovora** | Isključeno | Zamjenjuje zadanu AI ikonu u zaglavlju widgeta za razgovor WordPress ikonom stranice (postavljenom pod Izgled → Prilagodi → Identitet stranice). |

### Oznake sigurnosti automatizacije {#automation-safety-flags}

Superdav AI Agent v1.18.0 uvodi kontrolne tačke ljudskog odobrenja i zapise podsjetnika za sigurnije pokretanje automatizacija. Ove kontrole mogu se pojaviti u oznakama funkcija ili naprednim postavkama automatizacije, ovisno o instaliranom paketu.

| Oznaka | Zadano | Opis |
|---|---|---|
| **Zahtijevaj ljudsko odobrenje** | Preporučeno uključeno | Pauzira osjetljive automatizacije dok ovlašteni korisnik ne pregleda i potvrdi predloženu radnju. |
| **Dedupliciranje podsjetnika** | Uključeno | Bilježi poslane podsjetnike kako ponovni pokušaji ili zakazana pokretanja ne bi slali duple obavijesti. |
| **Omogući alate kalendara** | Isključeno dok se ne konfiguriše | Omogućava agentu čitanje konfigurisanih Google kalendara i događaja. |
| **Omogući SMS obavijesti** | Isključeno dok se ne konfiguriše | Omogućava odobrenim radnim tokovima slanje TextBee SMS obavijesti nakon što se vjerodajnice sačuvaju. |

### Primjena promjena {#applying-changes}

Kliknite **Sačuvaj postavke** nakon uključivanja ili isključivanja bilo koje oznake. Promjene stupaju na snagu odmah — nije potrebno čišćenje keša ili ponovno aktiviranje plugin-a.
