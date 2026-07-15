---
title: Kliëntterugvoer en Probleemrapportage
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Klant-terugvoer en Probleemverslagdoening

Gratis AI Agent v1.5.0 stel 'n ingeboude terugvoer- en probleemverslagdoeningsstelsel bekend wat eindgebruikers toelaat om onhelpbare antwoorde te merk en probleme direk vanaf die klets-koppelvlak te rapporteer. Hierdie stelsel sluit toestemmingsbestuur, 'n outomatiese verslagdoeningsbevel, en AI-geassisteerde triasie op die agtergrond in.

## Duim-Na-Neer-Knoppie {#thumbs-down-button}

Elke boodskap wat deur die AI-assistent gestuur word, wys 'n **duim-na-neer** (👎) knoppie. Wanneer 'n gebruiker hierop klik, kan hulle 'n antwoord merk as onhelpbaar of onkorrek.

- Die knoppie verskyn op hover langs elke assistentboodskap.
- Klik daarop open die **Feedback Consent Modal** (Toestemmings-modale).
- Die terugvoer word gekoppel aan die gesprekdraad en die spesifieke boodskap.

## Feedback Consent Modal {#feedback-consent-modal}

Wanneer 'n gebruiker op die duim-na-neer-knoppie klik, verskyn 'n toestemmings-modale voordat enige data gestuur word. Die modale:

- Verduidelik watter inligting ingesamel sal word (gespreksuitsnede, browserkonteks).
- Vra die gebruiker om te bevestig dat hulle toestemming gee om hierdie data te deel.
- Verskaf 'n vrye-teksveld vir die gebruiker om te beskryf wat verkeerd gegaan het.
- Bied 'n **Cancel**-opsie om te kanselleer sonder om te indien.

Geen terugvoer word opgeneem totdat die gebruiker eksplisiet bevestig het.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Aan die einde van 'n gesprek kan die assistent 'n **auto-prompt feedback banner** wys — 'n nie-opdringerige boodskap wat vra of die sessie nuttig was.

Hierdie banner verskyn outomaties op grond van gesprekslengte en uitkomsheuristiek. Dit skakel na dieselfde terugvoerproses as die duim-na-neer-knoppie. Gebruikers kan die banner ignoreer sonder om terugvoer te gee.

## /report-issue Slash Command {#report-issue-slash-command}

Gebruikers kan die terugvoerproses direk aktiveer deur `/report-issue` in die klets-invoer in te tik. Hierdie bevel:

- Open die Feedback Consent Modal onmiddellik.
- Vul die beskrywingsveld vooraf met konteks oor die huidige gesprek.
- Laat gebruikers ekstra besonderhede byvoeg voordat hulle indien.

Die `/report-issue` bevel is beskikbaar in alle kletsmodusse (inline, floating widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

Ingediende terugvoer word na 'n AI-triasie-laag gerouteer wat:

- Die verslag kategoriseer (feitelike fout, onhelpbare antwoord, ongepaste inhoud, ens.).
- Relevante gespreksmetadata heg.
- Die triasie-opsomming na die gekonfigureerde **Feedback Endpoint** stuur (sien [Settings > Advanced](#settings-advanced)).

Dit verminder handmatige hersieningstyd deur die mees kritieke probleme eers te bring.

## Settings > Advanced {#settings-advanced}

Om die terugvoer-agtergrond te aktiveer, konfigureer die volgende velde onder **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Die URL wat POST-versoeke met terugvoer-ladinge (JSON) ontvang. |
| **Feedback API Key** | Bearer token wat in die `Authorization`-kop gestuur word vir die outentisering van terugvoer-indienings. |

Laat beide velde leeg om terugvoer-insameling te dekaktiveer. Individuele terugvoer-knoppies bly vir gebruikers sigbaar, maar indienings sal nie vorentoe gestuur word nie.

:::tip
Die terugvoer-endpoint moet 'n JSON-liggaam aanvaar met ten minste die velde `message_id`, `conversation_id`, `feedback_text`, en `triage_category`. Raadpleeg u endpoint-verskaffer se dokumentasie vir die verwagte skema.
:::
