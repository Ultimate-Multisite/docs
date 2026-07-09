---
title: Klientų atsiliepimai ir problemų pranešimas
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Klientų atsiliepimai ir problemų pranešimas {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 įdalo įdaila įtrauktą sistemą, kuri leidžia vartotojams pateikti atsiliepimus ir pranešti apie problemas tiesiogiai iš čatis antraukimo svetainės. Ši sistema apima sutikimų valdymą, automatinį pranešimo komandą ir AI pagalba su triagavimu backend'e.

## 👍 Apsaukia (Thumbs-Down) mygtukas {#thumbs-down-button}

Kiekvienas pateiktas AI asistento žinutė rodo **apsaucia (thumbs-down)** mygtuką (👎). Kai vartotojas jis spausčia, jis gali pažymėti atsakymą kaip nepagalvusingą arba neteisingą.

- Mygtukas pasirodo pergaudojant prie kiekvienos asistento žinutės.
- Spausčiant jis atidaro **Sutikimų valdymų modalu (Feedback Consent Modal)**.
- Apsiliepimas susijęs su pokalbio srautu ir konkrečia žinute.

## Sutikimų valdymų modalas (Feedback Consent Modal) {#feedback-consent-modal}

Kai vartotojas spausčia apsaucia mygtuką, prieš bet kokios duomenys nebus išsiųsti sutikimų valdymas modalas. Modalas:

- Paaiškinama, kokią informaciją bus surinkta (pokalbio ištrauka, naršinio kontekstas).
- Prašo vartotoją patvirtinti, kad sutikau su šio duomenų dalinimo.
- Teikia laisvą tekstinį laukelį, kur vartotojas gali aprašyti, kas nutiko.
- Siūlo **Atšaukti (Cancel)** opsiją, kuri leidžia atsirasti be pateikimo.

Apsiliepimas ne registruojamas, kol vartotojas juos nurodytai patvirtina.

## Automatinis pranešimo žinutės banneris (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Pokalbio pabaigoje asistentas gali atsidaryti **automatinį pranešimo žinutės bannerį** – neįsivaidinę pranešimą, klausimą, ar sesija buvo naudinga.

Šis banner pasirodo automatiškai pagal pokalbio ilgesnį ir rezultato kriterijus. Jis susijęs su tą pačia atsiliepimų dalinimo procesą kaip apsaucia mygtukas. Vartotojai gali atsirasti be pateikimo, jei nenaudojasi pranešimu.

## /report-issue skaitmeninė komanda (Slash Command) {#report-issue-slash-command}

Vartotojai gali tiesiogiai įveikti atsiliepimų dalinimo procesą, įvykdant `/report-issue` komandą čatis antraukimo svetainės įvestyje. Ši komanda:

Atidui iškart atidaro Apie진inkimo (Feedback Consent Modal).
Prieš pateikdami pranešimą, aprašymo laukelis yra užpildytas kontekstu apie dabartinį pokalbį.
Tai leidžia vartotojams pridėti papildomą detales prieš siuntant.

`/report-issue` komanda yra gyvena visuose pokalbo režimuose (inline, plaukštinė widgetis, visi ekrano).

## AI-priešyra {#ai-assisted-triage}

Pateiktas atsiliepimas yra siunamas į AI triažo laisą, kuris:

- Kategorizuojasi pranešimą (faktycinis klaida, nepagalvavantis atsakymas, netinkamas turinys ir t.t.).
- Pridėti reikiamą pokalbio metadatumą.
- Siunčia triažo santrauklą nustatytam **Feedback Endpoint** (pamatykite [Settings > Advanced](#settings-advanced)).

Tai sumažina manuos peržiūros laiko, pirmiausia atskleidžiant reikšmingiausius problemas.

## Settings > Advanced {#settings-advanced}

Kad įjungti atsiliepimų backendą, nustatykite šiuos laukus po **Gratis AI Agent → Settings → Advanced**:

| Laikas | Aprašymas |
|---|---|
| **Feedback Endpoint URL** | URL, kuras priima POST užklausas su atsiliepimų įkrovymais (JSON). |
| **Feedback API Key** | Bearer token, siuntamas `Authorization` header'ui atsižvelgti į atsiliepimų pateikimą. |

Palikykite visus laukus tuis, kad išjungtumėte atsiliepimų rinkimą. Individualūs atsiliepimų mygtukai liks matomi vartotojams, bet siuntimai nebus siunami.

:::tip
Atsiliepimų endpoint turi priimti JSON kūdį su kitais laukais, tokiais kaip `message_id`, `conversation_id`, `feedback_text` ir `triage_category`. Pamatykite savo endpointo tiekėjo dokumentaciją dėl tikėtos schemos.
:::
