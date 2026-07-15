---
title: Povratne informacije korisnika i prijavljivanje problema
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Povratne informacije i izvještavanje o problemima

Gratis AI Agent v1.5.0 uvodi ugrađen sistem za prikupljanje povratnih informacija i izvještavanje o problemima, koji omogućava krajnjim korisnicima da označavaju odgovore kao nekorisne ili da izvještavaju o problemima direktno iz chat interfejsa. Ovaj sistem uključuje upravljanje pristankom, automatsnu naredbu za izvještavanje i asistirano triiranje (triage) na backendu.

## Dugme "Ne sviđa mi se" (Thumbs-Down Button) {#thumbs-down-button}

Svaka poruka koju pošalje AI asistent prikazuje **dugme "Ne sviđa mi se"** (👎). Kada korisnik klikne na to dugme, može označiti odgovor kao nekorisan ili netačan.

- Dugme se pojavljuje pri prelasku mišem (hover) pored svake poruke asistenta.
- Klikom se otvara **Modal za pristanak na povratne informacije (Feedback Consent Modal)**.
- Povratna informacija je povezana sa niti razgovora i specifičnom porukom.

## Modal za pristanak na povratne informacije (Feedback Consent Modal) {#feedback-consent-modal}

Kada korisnik klikne na dugme "Ne sviđa mi se", pojavljuje se modal za pristanak prije nego što se bilo kakvi podaci pošalju. Modal:

- Objašnjava koje informacije će biti prikupljene (izvjerda razgovora, kontekst preglednika).
- Traži od korisnika potvrdu da pristaje na dijeljenje ovih podataka.
- Pruža polje za slobodan tekst kako bi korisnik opisao šta je pošlo po zlu.
- Nudi opciju **Otkaži (Cancel)** da se zatvori bez slanja.

Nije snimljena nijedna povratna informacija dok korisnik eksplicitno ne potvrdi.

## Banner za povratne informacije iz auto-prompta (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Na kraju razgovora, asistent može prikazati **banner za povratne informacije iz auto-prompta** — neupadljiv poruku koja pita da li je sesija bila korisna.

Ovaj banner se automatski pojavljuje na osnovu dužine i heuristika ishoda razgovora. Povezan je na isti tok povratnih informacija kao i dugme "Ne sviđa mi se". Korisnici mogu zatvoriti banner bez pružanja povratnih informacija.

## Komanda `/report-issue` (Slash Command) {#report-issue-slash-command}

Korisnici mogu pokrenuti tok povratnih informacija direktno ukucavši `/report-issue` u polje za unos chata. Ova komanda:

- Odmah otvara Modal za pristanak na povratne informacije.
- Pre-popunja polje opisa kontekstom trenutnog razgovora.
- Omogućava korisnicima da dodaju dodatne detalje prije slanja.

Komanda `/report-issue` je dostupna u svim modovima chata (inline, floating widget, full-screen).

## Asistirano triiranje (AI-Assisted Triage) {#ai-assisted-triage}

Poslano izvještavanje se usmjerava na AI triiranje sloj koji:

- Kategorizira izvještaj (činjenica o grešci, nekorisan odgovor, neprimjeren sadržaj, itd.).
- Prilaže relevantne metapodatke razgovora.
- Proslijedi sažetak triiranja na konfigurirani **Feedback Endpoint** (vidjeti [Settings > Advanced](#settings-advanced)).

Ovo smanjuje vrijeme ručne revizije jer prvo ističe najkritičnije probleme.

## Settings > Advanced {#settings-advanced}

Da biste omogućili backend za povratne informacije, konfigurišite sljedeća polja pod **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL koji prima POST zahtjeve sa učutkovima povratnih informacija (JSON). |
| **Feedback API Key** | Bearer token koji se šalje u `Authorization` zaglavlje za autentifikaciju slanja povratnih informacija. |

Pustite oba polja prazna da biste onemogućili prikupljanje povratnih informacija. Individualna dugmad za povratne informacije ostaju vidljiva korisnicima, ali se podaci neće proslijediti.

:::tip
Feedback endpoint mora prihvatiti JSON tijelo sa najmanje poljima: `message_id`, `conversation_id`, `feedback_text` i `triage_category`. Pogledajte dokumentaciju vašeg endpoint provajdera za očekivani shema.
:::
