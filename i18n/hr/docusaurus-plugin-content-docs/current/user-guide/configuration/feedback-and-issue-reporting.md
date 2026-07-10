---
title: Povratne informacije od kupaca i prijavljivanje problema
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Povratne informacije i prijavljivanje problema {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 ugrađuje sustav za povratne informacije i prijavljivanje problema koji omogućuje krajnjim korisnicima da označavaju nekorisne odgovore i direktno prijave probleme iz chat sučelja. Ovaj sustav uključuje upravljanje pristankom (consent management), automatsnu naredbu za prijavu i AI-pomoćatni triž (triage) na pozadini.

## Dugme "Ne" (Thumbs-Down Button) {#thumbs-down-button}

Svakoj poruci koju pošalje AI asistent prikazuje se dugme **"Ne"** (👎). Kada korisnik klikne na njega, može označiti odgovor kao nekorisan ili pogrešan.

- Dugme se pojavljuje pri prelasku miša preko svakog poruke asistenta.
- Klikom ga otvara se **Modal za pristanak na povratne informacije** (Feedback Consent Modal).
- Povratna informacija povezuje se s niti razgovora i specifičnom porukom.

## Modal za pristanak na povratne informacije {#feedback-consent-modal}

Kada korisnik klikne na dugme "Ne", prije nego što bilo kakva podaci budu poslani, pojavljuje se modal za pristanak. Ovaj modal:

- Objašnjava kakve informacije će biti prikupljene (izvod razgovora, kontekst preglednika).
- Pita korisnika da potvrdi da pristaje na dijeljenje tih podataka.
- Pruža polje za slobodan tekst kako bi korisnik mogao opisati što je pogriješilo.
- Nudi opciju **Odbij** (Cancel) da se zatvori bez slanja.

Povratna informacija se ne zapisuje dok korisnik eksplicitno potvrdi.

## Banner s automatskom povratnom informacijom {#auto-prompt-feedback-banner}

Na kraju razgovora, asistent može prikazati **banner s automatskom povratnom informacijom** — neinvazivnu poruku koja pita je li sesija bila korisna.

Ovaj banner se pojavljuje automatski na temelju duljine razgovora i heuristike ishoda. Povezuje se sa istim tokovima povratne informacije kao i dugme "Ne". Korisnici mogu zatvoriti banner bez davanja povratnih informacija.

## Komanda /report-issue {#report-issue-slash-command}

Korisnici mogu direktno pokrenuti tok povratne informacije tako što ukucaju `/report-issue` u polje za unos chata. Ova naredba:

Otvara se prozor za pristanak na povratne informacije odmah.
Predpopunjava polje opisa kontekstom o trenutnoj razgovoru.
Omogućuje korisnicima dodavanje dodatnih detalja prije slanja.

Komanda `/report-issue` je dostupna u svim načinima chata (inline, floating widget, full-screen).

## AI-Assisted Triage (AI pomoć pri klasifikaciji) {#ai-assisted-triage}

Slanak povratne informacije proslijeđen je sloju za AI klasifikaciju koji:

- Kategorizira izvještaj (stvarnu grešku, nekorisnu odgovor, neprikladno sadržaj itd.).
- Prilaže relevantne podatke o razgovoru.
- Proslijedi sažetak klasifikacije konfiguriiranom **Feedback Endpointu** (pogledajte [Settings > Advanced](#settings-advanced)).

Ovo smanjuje vrijeme ručnog pregleda jer najvažnije probleme prvo ispliva na površinu.

## Settings > Advanced {#settings-advanced} (Postavke > Napredno) {#settings--advanced}

Da biste omogućili backend za povratne informacije, konfigurišajte sljedeće polja pod **Gratis AI Agent → Settings → Advanced**:

| Polje | Opis |
|---|---|
| **Feedback Endpoint URL** | URL koji prima POST zahtjeve s payloadovima povratnih informacija (JSON). |
| **Feedback API Key** | Bearer token koji se šalje u zaglavlju `Authorization` za autentifikaciju slanja povratnih informacija. |

Ostavite oba polja prazna da biste onemogućili prikupljanje povratnih informacija. Pojedinačni gumbi za povratne informacije ostaju vidljivi korisnicima, ali se podaci neće proslijediti dalje.

:::tip
Feedback endpoint mora primati JSON tijelo s barem poljima `message_id`, `conversation_id`, `feedback_text` i `triage_category`. Pogledajte dokumentaciju svog dobavljača endpointa za očekivanu strukturu podataka (schema).
