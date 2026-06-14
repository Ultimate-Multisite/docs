---
title: Gratis AI Agenta Estonoj
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Libera AI Agent Parametrajn

La skrin **Settings → Advanced** en Gratis AI Agent donas administrator-nivel konfiguracion por backend integracioj introducitaj en v1.5.0. Esta lua pagina dokumentas la kampeloj de la **Feedback Endpoint** kaj sian esperita formato.

## Aliri al Parametrajn

1. En la WordPress admin, diru al **Gratis AI Agent → Settings**.
2. Kliku surti la tab **Advanced**.

## Konfiguracio de Feedback Endpointo

La feedback endpoint rice POST petojn de la AI agent kiam iu submetas feedback per la butono "thumbs-down", la auto-prompt banner, aŭ la komando `/report-issue`.

| Campo | Deskribado |
|---|---|
| **Feedback Endpoint URL** | La URL kiu ricevas feedback submetoj kiel HTTP POST petojn kun JSON corpo. |
| **Feedback API Key** | Un bearer token sendita en la `Authorization` header de ĉiu feedback peto. Laboru blanka, se via endpoint ne postulas autentifikadon. |

### Esperita JSON Payload

Via feedback endpoint devas akcepti JSON korpon kun almenaŭ la seguenti kampoj:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "La respondo estis malbona pri preco.",
  "triage_category": "factual_error"
}
```

Alian kampoj povas esti prezentita en la payload dependante de la konteksto de la konversacio.

### Valoj de `triage_category`

La AI triage capa donas unu el la sekvaj valoj al `triage_category` antaŭ transmeti la payload:

| Valo | Signifo |
|---|---|
| `factual_error` | La asistanto donis maljustan fakton informojn. |
| `unhelpful_answer` | La respondo estis teknike ĝusta, sed ne utile. |
| `inappropriate_content` | La respondo enhavis konton, kiun ne devas esti montrita al uzantoj. |
| `other` | La feedback ne coincidis kun konata kategorio. |

### Autentifikado

Se ies vostra endpoint autentikaciu bezrequiri, statuante lajnujejte lajoną **Feedback API Key** la vostra bearer token. Agenṭo pradod:

```
Authorization: Bearer <votre-api-key>
```

Jei lajnuja **Feedback API Key** lajuna, ne si pradod linko `Authorization`.

### Dezaktivado Kolektojo Feedbacko

Palikite obie lajonas **Feedback Endpoint URL** kaj **Feedback API Key** vakansaj. La butono "thumbs-down" kaj la feedback UI restas vidblajnda por uzantoj, sed submisioj ne estas transsenditaj al iu ajpa eksteraj servoj.

## Brave Search API Key

Aŭ ankaŭ sur la lajnu **Advanced** tab, la lajnu **Brave Search API Key** permesas la [Internet Search](../configuration/internet-search) kapablon.

| Lajon | Deskribcio |
|---|---|
| **Brave Search API Key** | Via API key de la Brave Search developer dashboardo. Requisite por aktivi la internet search en la AI asisto. |

La etiketado de la lajnu inkluzas klakablablan linkon al la registriĝo de Brave Search API paĝo. Palikite vakansaj por dezaktivado de internet search.

Vidu [Internet Search](../configuration/internet-search) por dokumento por uzantoj pri ĉi tiu funkcio.

## Feature Flags

Aŭ introducit en v1.9.0, la lajnu **Settings → Feature Flags** tab provizas switchojn por opcionaj funkcioj. Ĉiu flag estas akivebla aŭ dezaktivita per la tuta reron; ne ekzistas super-site override en tiu momento.

### Aliri al Feature Flags

1. En la WordPress admino, direte **Gratis AI Agent → Settings**.
2. Klikite sur la tabon **Feature Flags**.

### Access Control Flags

| Flag | Default | Deskripsio |
|---|---|---|
| **Restrikti al Administratoroj** | Off | Kurui aktiv, tik vartojai со `administrator` ruolo povas ofiĉi la AI Agent chato paneli. Valtraj aliaj ruolo vidas mensaĝon "Kontaktiu sian administratoron". |
| **Restrikti al Rete Administratoj** | Off | Kurui aktiv sur rete multisite, tik Super Administratoroj povas uzi agenton. Individua sitio administratoj estas blokitaj. Tio predigas superan pri "Restrikti al Administratoroj", se amba estas aktivaj. |
| **Permiti Abonanto-akceson** | Off | Kurui aktiv, vartoj со `subscriber` ruolo povas uzi la chata interfacon, sed ili estas limigita al legeta funkcio (sen poste'o kreo aŭ ŝanĝoj de ŝanĝoj). |
| **Disabiliti por Ne-Membraj** | Off | Integrita kun statuso de membrajo de Ultimate Multisite. Kurui aktiv, chato estas malaperata por sitoj, kiuj ne havas aktivan membrajon. |

### Branding Flagoj

| Flag | Default | Deskripsio |
|---|---|---|
| **Malaperi "Powered by Gratis AI Agent" Footer** | Off | Eliminus la identigita linion, kiun oni vidas al baz de la chata widget. Rekomendas por deplojoj sen markado (white-label). |
| **Personalia Agena Nom** | *(blank)* | Subti la defaultaj "Gratis AI Agent" etiketojn en la chata ĉedaro kaj admin menuko per vian propran produkto nomon. Laboru blanke por uzi la defaulton. |
| **Malaperi Agenan Selekton** | Off | Kurui aktiv, vartoj ne povas ŝanĝi inter la kvin konstruita agenoj. La aktuala agentejo estas fixita al tio, kion oni konfigura kiel default en Settings → General. |
| **Uzi Sitio-ikonon kiel Chata Avataro** | Off | Kurui aktiv, subti la defaultan AI ikone en la chata widget ĉedaro per la WordPress sitio-ikonon (definita sub Appearance → Customize → Site Identity). |

### Modifigi Changojn

Klaknu sur **Save Settings** post kiam vi ŝanĝas kial iu flag. Changoj fariĝas efektivej tuteblame — ne bezonas flush de cache aŭ reaktivaĵon de plugino.
