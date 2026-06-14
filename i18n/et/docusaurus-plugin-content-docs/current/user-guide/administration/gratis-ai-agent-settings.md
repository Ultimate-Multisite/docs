---
title: Tasuta AI agenti seadistused
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Sätted

**Settings → Advanced** ekranni Gratis AI Agenti annab administraatorile taseme konfiguratsiooni tagasi-lõpule jõudnud backendi integreerimist, mis on lisatud versioonist v1.5.0 alates. See lehe kirjeldab **Feedback Endpoint** väljakohasti ja nende ootatud formati.

## Sätted külastamine

1. WordPress administraatoris minige **Gratis AI Agent → Settings**.
2. Klõpsake **Advanced** tabile.

## Feedback Endpoint konfiguratsioon

Feedback endpoint saab POST-vaateid AI agentilt iga kord, kui kasutaja annab tagasiannet "thumbs-down" nupuga, automootoril banneriga või `/report-issue` käskuga.

| Väljakohast | Kirjeldus |
|---|---|
| **Feedback Endpoint URL** | URL, mis saab feedbacki sisse jaotuseid HTTP POST-vaateid JSON-t kehaega. |
| **Feedback API Key** | Bearer token, mida saadatakse iga feedbacki vaate headeris `Authorization`. Jätke tühja, kui teie endpoint ei nõua autentimist. |

### Ootatud JSON laadimine (Payload)

Teie feedback endpoint peab olema võimlik vastu JSON kehaega, mis sisaldab vähemalt järgmisi väljakohasti:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Vastus oli vääras algude kohta.",
  "triage_category": "factual_error"
}
```

Lisaväljakohasti võivad laadimises olla sõltuvalt jalgse kontekstist lisakohasti.

### `triage_category` väärtused

AI triaži laagri annab `triage_category`-le järgmise väärtuse enne laadimise:

| Väärtus | Tulemuse |
|---|---|
| `factual_error` | Assistent on antnud vääristud fakti. |
| `unhelpful_answer` | Vastus oli tehniliselt õige, kuid ei olnud kasulik. |
| `inappropriate_content` | Vastuses oli sisu, mida ei peaks näitamise kasutajatele. |
| `other` | Feedback ei vastanud teada oleva kategori. |

### Autentifitseerimine

Kui teie endpoint nõuab autentimist, lugege **Feedback API Key** välja ja seadistage sellel välja oma bearer token. Agent lähevad:

```
Authorization: Bearer <your-api-key>
```

Kui **Feedback API Key** valik on tühj, ei lähedi `Authorization` headerit saata.

### Feedbacki kogumise vaimutus

Püühkind **Feedback Endpoint URL** ja **Feedback API Key** väljak. Käsi alla painik ja feedback-liitub on kasutajatele nähtav, kuid esitus ei ole edasi ühelgi välja laenud teenusele.

## Brave Search API Key

Samuti **Advanced** tabis leiate **Brave Search API Key** valiku, mis aktiveerib [Internet Search](https://your-site.com/configuration/internet-search) võimaluse interneti otsingule.

| Valik | Kirjeldus |
|---|---|
| **Brave Search API Key** | Kui teie API key on Brave Search arendaja dashboardist. See on vajalik interneti otsingu aktiveerimiseks AI-assistentis. |

Valiku pealkirjal on klikkav link Brave Search API registreerimise lehelile. Püühkind tühjaks, et interneti otsing lülitakse välja.

Vaadake [Internet Search](https://your-site.com/configuration/internet-search) endkasutajate dokumentatsiooni selle funktsioonist.

## Feature Flags (Funktsioonilülitused)

Lisaks lisatud v1.9.0 versiooniga, **Settings → Feature Flags** tab pakub lülitusi valikuvõtmevalikute jaoks abikaudu olevaid funktsioone aktiveerimiseks või deaktiveerimiseks. Iga flag on nii aktiivne kui deaktiveeritud kogu võrku; praegu ei ole sellele kohta ühelgi eripälist üleüldise lülitust.

### Feature Flagsi kasutamine

1. WordPress administratiivis asendil minige **Gratis AI Agent → Settings**.
2. Klõpsake **Feature Flags** tabile.

### Access Control Flags (Käsimise kontrolliflagid)

| Flag | Default | Kirjeldus |
|---|---|---|
| **Piiratud administratoridele** | Off | Kun see on sisse, saan ainult kasutajad `administrator` rolliga avada AI Agenti chati paneli. Kõik muutuvad teised rollid näevad "Kontaktige administraatorit" -viisia. |
| **Piiratud võrkuadministraatoridele** | Off | Kun see on sisse multisite-võrgustel, saan ainult Super Admins kasutada agenti. Individuaalsed veebilehtadministraatorid on blokeeritud. See on esmeks prioriteetiks "Piiratud administratoridele" kui mõlemad on sisse. |
| **Luba abendikute kasutamine** | Off | Kun see on sisse, saan `subscriber` rolliga olevad kasutajad kasutada chati liitkonda, kuid nende võimalused on ainult lugemise jaoks (ei ole võimalik sisu luua ega seadistusi muuta). |
| **Võrdige välja mitte-liikmepoolest** | Off | Integreerub Ultimate Multisite liiklusstatusiga. Kun see on sisse, chati nähtavus on varjatud veebilehedelt, millel ei ole aktiivset liiklust. |

### Brändi liigutajad (Branding Flags)

| Flag | Default | Kirjeldus |
|---|---|---|
| **Piirata "Gratis AI Agent" jaluseid** | Off | Eemaldab brändi tunnustamise linja, mis näed chati widgeti all. Soovitatav valik valimiseks (white-label) veebilehedel. |
| **Kohapeine agenti nimi** | *(tühj)* | Asendab pooltoleva "Gratis AI Agent" etiketti chati ülekirjanduslikus ja administraatoripaneelis oma oma toote nimega. Jätke tühjaks, et kasutada pooltolevat nime. |
| **Piirata agenti valik** | Off | Kun see on sisse, kasutajad ei saa vahetada viidenduse all olevate viisikute vahel. Praegune agent on kinnitatud sellele, mida seadistus General → Settings-is poolt määratud oletuseks. |
| **Kasuta veebilehe ikooni chati avatarina** | Off | Asendab chati ülekirjanduslikus pooltoleva AI-ikoon WordPressi veebilehe ikooniga (seadistus Appearance → Customize → Site Identity). |

### Muutuste kasutamine

Lülitage **Save Settings** pärast iga liigutaja aktiveerimist. Muud on kohe jõustatud – ei vaja kaashuhtlust või plugin-i uuesti aktivateerimist.
