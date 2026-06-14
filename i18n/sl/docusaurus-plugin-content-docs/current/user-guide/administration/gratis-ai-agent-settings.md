---
title: Nastavitve besplatnega AI agenta
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Nastavitve AI Agent

Ekrin **Settings → Advanced** v Gratis AI Agent om vam omogoča konfiguracijo na administrativni ravni za integracije, ki so uvedene v verziji v1.5.0. Ta stran dokumentira polja **Feedback Endpoint** in njihovo pričakovano formatiranje.

## Dostop do nastavitve

1. V WordPress adminu gre do **Gratis AI Agent → Settings**.
2. Kliknite na tab **Advanced**.

## Konfiguracija Feedback Endpoint-a

Feedback endpoint prejema POST zahteve od AI agenta vsakrat, ko uporabnik pošlje povratne informacije preko gumba z donosno (thumbs-down), bannerja avtomatske predpovedi ali komande `/report-issue`.

| Polje | Opis |
|---|---|
| **Feedback Endpoint URL** | URL ki prejema podatke o povratni informaciji kot HTTP POST zahteve z JSON telesom. |
| **Feedback API Key** | Bearer token, ki se pošlje v zaglavju `Authorization` vsakratnega zahtevka za povratno informacijo. Če vaš endpoint ne zahteva avtorizacije, ga pustite praznim. |

### Pričakovan JSON Payload

Vaš feedback endpoint mora sprejeti JSON teleso z vsaj naslednjimi polji:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Odgovor je bil neimenovan o cenah.",
  "triage_category": "factual_error"
}
```

Dodatna polja lahko v payloadu obstajajo, odvisno od konteksta razpovedi.

### Vrednosti `triage_category`

AI sloj za triagiranje dodeli eno od naslednje vrednosti polju `triage_category` pred prenosom payload-a:

| Vrednost | pomen |
|---|---|
| `factual_error` | Asistent je priložil neimenovane podatke. |
| `unhelpful_answer` | Odgovor je tehnično pravilno, vendar ni koristnega. |
| `inappropriate_content` | Odgovor vsebuje vsebino, ki ne sme biti prikazana uporabnikom. |
| `other` | Povratna informacija ni ustrezna poznati kategoriji. |

### Avtorizacija

Če je vaš endpoint za zahtevo autentifikacije, nastavite polje **Feedback API Key** na svoj bearer token. Agent pošlje:

```
Authorization: Bearer <your-api-key>
```

Če je polje **Feedback API Key** prazno, se ne pošlje nikakšen `Authorization` header.

### Uporaba Feedback Skladišča (Disabling Feedback Collection)

Prazno ostavite oba polja: **Feedback Endpoint URL** in **Feedback API Key**. Gumb za ocenjevanje zanj (thumbs-down button) in interfejs za povratne informacije ostaneta vidni uporabnikom, vendar se podatki ne prenašajo na nobeno zunanje storitev.

## Brave Search API Key

Tako tudi na tabu **Advanced** je polje **Brave Search API Key** omogočeno možnost spletnega iskanja [Internet Search](../configuration/internet-search).

| Polje | Opis |
|---|---|
| **Brave Search API Key** | Vaša API ključ iz razdelka za razvijalce Brave Search. Nujno je, da bi bilo spletno iskanje v AI asistentu omogočeno. |

Oznaka polja vsebuje klikabilno povezavo na stran za registracijo API-ja Brave Search. Prazno ostavite, če želite onemogočiti spletno iskanje.

Za dokumentacijo za končne uporabnike o tej funkciji se ogledajte v [Internet Search](../configuration/internet-search).

## Feature Flags (Spremembe funkcij)

Tako je uvedeno tudi v verziji v1.9.0, tab **Settings → Feature Flags** omogoča preklicne preklopnike za opcionalno funkcionalnost. Vsak flag je na celotni mreži enableiran ali onemogočen; trenutno ni možnosti nadomeščanja po lokaciji (per-site override).

### Dostop do Feature Flags

1. V WordPress adminu, idite na **Gratis AI Agent → Settings**.
2. Kliknite na tab **Feature Flags**.

### Flag za kontrola dostopa

| Flag | Default | Opis |
|---|---|---|
| **Omejkanje za administratorje** | Izhračen (Off) | Ko je vklopljeno, lahko samo uporabniki z vlogo `administrator` odprejo panel za chat AI Agent. Vsi drugi vlogi vidijo sporočilo "Kontaktirajte vašega administratorja". |
| **Omejkanje na mrežne administratorje** | Izhračen (Off) | Ko je vklopljeno na mreži multisite, lahko uporabljajo agent le Super Admini. Administratorji posameznih strani so blokirani. To ima prednost nad "Omejkanjem za administratorje", če sta oba vključena. |
| **Določitev dostopa za naročnike** | Izhračen (Off) | Ko je vklopljeno, uporabniki z vlogo `subscriber` lahko uporabljajo chat interfejs, vendar so omejeni na samo brskanje (ne morejo ustvarjati postov ali spremembati nastavitve). |
| **Omejitev za nečlanice** | Izhračen (Off) | Integrira se z statusom članstva Ultimate Multisite. Ko je vklopljeno, chat je skriven za strani, ki niso aktivno članstva. |

### Omejke blagovne znamke (Branding Flags)

| Flag | Default | Opis |
|---|---|---|
| **Skrivanje podododka "Powered by Gratis AI Agent"** | Izhračen (Off) | Odstranja oznako blagovne znamke, ki se prikazuje na dnu chat widgeta. Priporočamo za white-label uporabe. |
| **Splošna ime agenta** | *(prazno)* | Zamenja standardno označbo "Gratis AI Agent" v naslovu čata in admin meniju z vašim imenom izdelka. Ostavite prazno, če želite uporabiti standardno. |
| **Skrivanje izberavnika agentov** | Izhračen (Off) | Ko je vklopljeno, uporabniki ne morejo prelaziti med petimi vgrajenimi agenti. Trenutni agent je fiksiran na to, kar je postavljeno kot zadnje nastavitve v Settings → General. |
| **Uporaba ikone strani kot avatara čata** | Izhračen (Off) | Zamenja standardno AI ikono v naslovu chat widgeta z WordPress ikono stran (postavljena pod Appearance → Customize → Site Identity). |

### Uporaba sprememb

Kliknite na **Save Settings** (Shrani nastavitve) po preprečnem vključenju vsake slike. Spremembe se trenutno aktivirajo — ni potrebno čistiti cache ali ponovno aktivirati plugin.
