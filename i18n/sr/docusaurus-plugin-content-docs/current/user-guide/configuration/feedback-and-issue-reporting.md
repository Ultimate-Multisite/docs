---
title: Povratne informacije od kupaca i prijavljivanje problema
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Povratne informacije i prijavljivanje problema

Gratis AI Agent v1.5.0 ugrađuje sistem za povratne informacije i prijavljivanje problema koji omogućava krajnjim korisnicima da označavaju nekorisne odgovore i direktno prijave probleme iz chata interfejsa. Ovaj sistem uključuje upravljanje saglasnošću, automatsnu komandu za prijavu i AI-pomoćatni triage na backendu.

## Dugme sa palcem nadole (Thumbs-Down Button)

Svak poruka koju pošalje AI asistent prikazuje dugme sa palcem nadole (👎). Kada korisnik klikne na njega, može označiti odgovor kao nekorisan ili pogrešan.

- Dugme se pojavljuje pri prelasku miša preko svakog poruke asistenta.
- Klikom ga otvara se **Modal za saglasnost za povratne informacije (Feedback Consent Modal)**.
- Povratna informacija je vezana za temu razgovora i specifičnu poruku.

## Modal za saglasnost za povratne informacije (Feedback Consent Modal)

Kada korisnik klikne na dugme sa palcem nadole, pojavi se modal za saglasnost pre nego što bilo kakva podaci budu poslati. Ovaj modal:

- Objašnjava kakve informacije će biti prikupljene (izvod razgovora, kontekst pregledača).
- Pita korisnika da potvrdi da pristaje na deljenje ovih podataka.
- Pruža polje za slobodno tekstualno pisanje gde korisnik može opisati šta je bilo pogrešno.
- Nudi opciju **Otkaži (Cancel)** da se zatvori bez slanja.

Povratna informacija se ne beleži dok korisnik eksplicitno potvrdi.

## Banner sa automatskom povratnom informacijom

Na kraju razgovora, asistent može prikazati **banner sa automatskom povratnom informacijom** — neinvazivnu poruku koja pita da li je sesija bila korisna.

Ovaj banner se pojavljuje automatski na osnovu dužine razgovora i heuristika ishoda. Povezuje se sa istim tok povratne informacije kao dugme sa palcem nadole. Korisnici mogu zatvoriti banner bez davanja povratne informacije.

## Komanda /report-issue Slash Command

Korisnici mogu direktno pokrenuti tok povratne informacije tako što ukucaju `/report-issue` u polje za unos chata. Ova komanda:

- Одмагује Модал за сагласност на примјерно trenutno.
- Предпрепоручује (pre-populates) полију у опису контекста текуће разговора.
- Омогућава корисницима да додају додатне детаље пре слања.

Команда `/report-issue` је доступна у свим чат модовима (inline, floating widget, full-screen).

## AI-Assisted Triage (Примарни приступ за класификацију)

Подате повратне информације се преучавају на слој AI триажа који:

- Класификује извештај (фактичну грешку, немоћан одговор, непоодговорно садржај и све слично).
- Приказује релевантне метаданке о разговорима.
- Преучава сажетак триажа на конфигурисани **Feedback Endpoint** (видети [Settings > Advanced](#settings-advanced)).

Ово смањује време ручне провере јер најкритичнији проблеми су први што се појављују.

## Settings > Advanced {#settings-advanced} (Подешавања > Напредности)

Да бисте омогућили backend за повратне информације, конфигуришу 다음 полија под **Gratis AI Agent → Settings → Advanced**:

| Поље | Опис |
|---|---|
| **Feedback Endpoint URL** (Адреса Feedback Endpoinita) | URL који прима POST захтеве са подацима за повратне информације у JSON формату. |
| **Feedback API Key** (API Кључ за повратне информације) | Bearer токен који се слаје у `Authorization` поља за аутентификацију примања повратних информација. |

Оставите оба поља празна да бисте искључили прикуп повратних информација. Индивидуални дугмићи за повратне информације остају видљиви корисницима, али слања неће бити преучавани.

:::tip
Feedback endpoint мора прихвати JSON тело са барем поља `message_id`, `conversation_id`, `feedback_text` и `triage_category`. Видећете документацију свог провајдера ендпоинта за очекивани счема (schema).
