---
title: Besplatni AI agent podešavanja
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Podešavanja Gratis AI Agent-a

Ekran **Settings → Advanced** u Gratis AI Agent-u pruža konfiguraciju na nivou administratora za backend integracije koje su uvedene u v1.5.0. Ova stranica dokumentuje polja **Feedback Endpoint** i njihov očekivani format.

## Pristup podešavanjima

1. U WordPress adminu, idite na **Gratis AI Agent → Settings**.
2. Kliknite na karticu **Advanced**.

## Konfiguracija Feedback Endpoint-a

Feedback endpoint prima POST zahtjeve od AI agenta svaki put kada korisnik pošalje povratnu informaciju putem dugmeta za "dislike" (palac ka dole), bannera za automatski prompt, ili komande `/report-issue`.

| Polje | Opis |
|---|---|
| **Feedback Endpoint URL** | URL koji prima podneske povratnih informacija kao HTTP POST zahtjeve sa JSON tijelom. |
| **Feedback API Key** | Bearer token koji se šalje u `Authorization` zaglavlje svakog zahtjeva za povratne informacije. Ostavite prazno ako vaš endpoint ne zahtijeva autentifikaciju. |

### Očekivano JSON opterećenje (Payload)

Vaš feedback endpoint mora prihvatiti JSON tijelo sa najmanje sljedećim poljima:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Odgovor je bio netačan u vezi s cijenama.",
  "triage_category": "factual_error"
}
```

Dodatna polja mogu biti prisutna u opterećenju zavisno od konteksta razgovora.

### Vrijednosti `triage_category`

AI triage sloj dodjeljuje jednu od sljedećih vrijednosti polju `triage_category` prije proslijeđivanja opterećenja:

| Vrijednost | Značenje |
|---|---|
| `factual_error` | Asistent je dao netačne faktičke informacije. |
| `unhelpful_answer` | Odgovor je tehnički ispravan, ali nije koristan. |
| `inappropriate_content` | Odgovor je sadržavao sadržaj koji ne bi trebalo biti prikazan korisnicima. |
| `other` | Povratna informacija nije odgovarala poznatoj kategoriji. |

### Autentifikacija

Ako vaš endpoint zahtijeva autentifikaciju, postavite polje **Feedback API Key** na vaš bearer token. Agent šalje:

```
Authorization: Bearer <your-api-key>
```

Ako je polje **Feedback API Key** prazno, ne šalje se `Authorization` zaglavlje.

### Onemogućavanje prikupljanja povratnih informacija

Ostavite polja **Feedback Endpoint URL** i **Feedback API Key** prazna. Dugme za "dislike" i UI za povratne informacije ostaju vidljivi korisnicima, ali podnesci se ne proslijeđuju nikakvoj eksternoj usluzi.

## Brave Search API Key

Također na kartici **Advanced**, polje **Brave Search API Key** omogućava sposobnost [Internet Search](../configuration/internet-search).

| Polje | Opis |
|---|---|
| **Brave Search API Key** | Vaš API ključ sa Brave Search developer dashboard-a. Neophodan za omogućavanje pretraživanja interneta u AI asistentu. |

Naziv polja uključuje klikovni link na stranicu za prijavu za Brave Search API. Ostavite prazno da biste onemogućili pretraživanje interneta.

Pogledajte [Internet Search](../configuration/internet-search) za dokumentaciju za krajnjeg korisnika o ovoj značajnosti.

## Feature Flags

Takođe uvedeno u v1.9.0, kartica **Settings → Feature Flags** pruža prekidače za opcionalnu funkcionalnost. Svaki flag je ili globalno uključen ili isključen; trenutno nema nadjačavanja po lokaciji.

### Pristup Feature Flags-ovima

1. U WordPress adminu, idite na **Gratis AI Agent → Settings**.
2. Kliknite na karticu **Feature Flags**.

### Flags za kontrolu pristupa (Access Control Flags)

| Flag | Default | Opis |
|---|---|---|
| **Restrict to Administrators** | Off | Kada je uključen, samo korisnici sa ulogom `administrator` mogu otvoriti chat panel AI agenta. Sve ostale uloge vide poruku "Kontaktirajte svog administratora". |
| **Restrict to Network Admins** | Off | Kada je uključen na multisite mreži, samo Super Admini mogu koristiti agent. Individualni site admini su blokirani. Ima prioritet nad "Restrict to Administrators" ako su oba uključena. |
| **Allow Subscriber Access** | Off | Kada je uključen, korisnici sa ulogom `subscriber` mogu koristiti chat interfejs, ali su ograničeni na samo čitanje (bez kreiranja postova ili promjena postavki). |
| **Disable for Non-Members** | Off | Integrisano sa statusom članstva Ultimate Multisite. Kada je uključen, chat je skriven za sajtove koji nemaju aktivno članstvo. |

### Flags za brendiranje (Branding Flags)

| Flag | Default | Opis |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Uklanja liniju atribucije brenda koja se prikazuje na dnu chat widget-a. Preporučuje se za white-label implementacije. |
| **Custom Agent Name** | *(blank)* | Zamjenjuje podrazumevani naziv "Gratis AI Agent" u zaglavlju chata i admin meniju imenom vašeg proizvoda. Ostavite prazno da biste koristili podrazumevani. |
| **Hide Agent Picker** | Off | Kada je uključen, korisnici ne mogu prebacivati između pet ugrađenih agenata. Trenutni agent je fiksiran na ono što je konfigurisano kao podrazumevano u Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Zamjenjuje podrazumevan AI ikonama u zaglavlju chat widget-a sa ikonom sajta WordPressa (postavljeno pod Appearance → Customize → Site Identity). |

### Primjena promjena

Kliknite na **Save Settings** nakon prebacivanja bilo kog flag-a. Promjene stupaju na snagu odmah — nije potrebno brisanje keša niti reaktiviranje plugin-a.
