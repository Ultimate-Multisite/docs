---
title: Urugero rwa Agente rwa AI rwayo
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Icyo Settings ya AI Agent

Icyo screen ya **Settings → Advanced** in Gratis AI Agent yitanga uburyo bwo gukoresha ibyerekeye n'ubwujyanye bw'ibyo byashyizwe mu v1.5.0. Ururu rw'inyandiko rishobora kwerekana ibye ya **Feedback Endpoint** n'uburyo bwo kuyigira.

## Gukoresha Settings

1. Mu WordPress admin, gukora ku **Gratis AI Agent → Settings**.
2. Gukora kuri tab ya **Advanced**.

## Kuyigisha Feedback Endpoint

Feedback endpoint yitanga POST requests ku gihe AI agent yitanga ibyo abantu bafungura feedback binyuze mu button ya thumbs-down, auto-prompt banner, cyangwa command `/report-issue`.

| Field | Uburyo bw'ibyo byerekana |
|---|---|
| **Feedback Endpoint URL** | URL yitanga feedback ku gihe bitanga HTTP POST requests n'ubwoko bwa JSON. |
| **Feedback API Key** | bearer token wishyizwe mu `Authorization` header ya request yose y'ibyo byerekana feedback. Yabara nk'ibyo (leave blank) niba endpoint yawe itagira uburyo bwo gukoresha authentication. |

### Ubwoko bw'ubwoko bwa JSON (Expected JSON Payload)

Feedback endpoint yawe itabaho ubwoko bwa JSON kandi yitanga ibyo byiza:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Icyemezo ryari ririmo ku gihe cyo gukoresha.",
  "triage_category": "factual_error"
}
```

Icyemezo cy'ibyo byiza cyashobora kuba cyangwa cyitanga mu payload kenshi kenshi kuri conversation.

### Ibyerekeye `triage_category`

Tanga ya triage ya AI itanga uburyo bwo gukoresha ibyo byo mu `triage_category` mbere y'ibyo byerekana:

| Value | Uburyo bw'ibyo byerekana |
|---|---|
| `factual_error` | Umunyamakuru yashyize amakuru atari yiza. |
| `unhelpful_answer` | Icyemezo cyari cyiza mu gice cyangwa cyane cyane, ariko cyabaho ubushobozi bwo gukoresha. |
| `inappropriate_content` | Icyemezo cyari cyitanga ibyo byashobora kwerekana ku bantu. |
| `other` | Feedback yari itagira uburyo bw'ibyo byerekana. |

### Authentication

Nta wako uburyo bwo ko uburyo bwa endpoint yawe rwayo umuvugizi (authentication) ukenewe, wifashisha ishusho ry'Feedback API Key ku token yawe mu bearer. Umuvugizi utangira:

```
Authorization: Bearer <your-api-key>
```

Nta ko ishusho ry'Feedback API Key rwayo rihagaragara, nta `Authorization` header itangirwa.

### Kugaragaza Gukoresha Feedback (Disabling Feedback Collection)

Raba ishusho ry'Feedback Endpoint URL n'ishusho ry'Feedback API Key mu buryo bwo gushyira umuvugizi (blank). Icyemezo cy'thumbs-down n'umwujaji w'feedback bishobora kuboneka kuri users, ariko ubushobozi bwo gufata uburyo bw'feedback bishobora kwitwa ku service yakuriye.

## Brave Search API Key

Mu gihe cy'Advanced tab, ishusho ry'Brave Search API Key rihagaragara ubushobozi bwo gukoresha Internet Search (Internet Search) mu [configuration/internet-search](https://yourdomain.com/configuration/internet-search).

| Ishusho | Uburyo bw'ishusho |
|---|---|
| **Brave Search API Key** | Icyemezo cy'API key yawe y'Brave Search ku dashboard ya developer. Riho cyo gukoresha Internet Search mu AI assistant. |

Ishusho ry'label rwayo rihagaragara link itangiraho kuri Brave Search API sign-up page. Raba ishusho (blank) kugira ngo ugaragaze Internet Search.

Bona [Internet Search](../configuration/internet-search) ku buryo bwo kwandika umuvugizi w'end-user ku feature y'ibyo.

## Feature Flags

Iyi nshya mu v1.9.0, ishusho ry'Settings → Feature Flags rihagaragara toggle switches (izindi ndimi zikoresha gukora/gushyira) kugira ngo uburyo bwo gukora cyangwa gufata umuvugizi (optional functionality). Icyemezo cyose cyangwa kigomba gukorwa mu gice; nta gukoresha kuri site runaka ku gihe cy'ibyo.

### Gukoresha Feature Flags

1. Mu WordPress admin, gukora **Gratis AI Agent → Settings**.
2. Gukoresha ishusho ry'Feature Flags.

### Access Control Flags

| Flag | Default | Maagambo |
|---|---|---|
| **Gukwibwa kuri Administrators** | Off | Iyo igikorwa cyangwa ikoreshwa, gusa abantu bafite uburenganzira bwa `administrator` bashobora gukoresha panel ya chat ya AI Agent. Abantu benshi bindi bakoresha uburyo bwo kuvuga "Kontakira administrator w'ubwoko". |
| **Gukwibwa kuri Network Admins** | Off | Iyo igikorwa cyangwa ikoreshwa mu gukoresha multisite network, Super Admins gusa bashobora gukoresha agent. Abantu bafite uburenganzira bwo site benshi bakwibwa. Icyo kigomba kwizera cyane ku "Gukwibwa kuri Administrators" niba byose bifite. |
| **Kugabanya Uburyo bwa Subscriber** | Off | Iyo igikorwa cyangwa ikoreshwa, abantu bafite uburenganzira bwa `subscriber` bashobora gukoresha interface ya kuvuga ariko bakwibwa ku buryo bw'ubwumvikane (batagashobora gukora posts cyangwa guhindura ibindi). |
| **Kugabanya kuri Non-Members** | Off | Iyo igikorwa cyangwa ikoreshwa, igice cy'amasezerano ya Ultimate Multisite kigomba kwizera. Iyo igikorwa cyangwa uburyo bwo kuvuga bishobora gukwibwa ku site zitagira uburenganzira bw'ubwumvikane. |

### Branding Flags (Icyemezo cyo Gukoresha Ubwoko)

| Flag | Default | Maagambo |
|---|---|---|
| **Kugabanya "Powered by Gratis AI Agent" Footer** | Off | Iyo igikorwa cyangwa ikoreshwa, igice cy'ubwoko (branding) kigomba kwibwa ku mwera w'amasezerano ya chat. Icyo gikoreshwa cyane mu gukoresha uburyo bwo kuvuga "white-label". |
| **Umuco wa Agent** | *(blank)* | Iyo igikorwa cyangwa ikoreshwa, igice cy'ubwoko (branding) kigomba kwibwa n'izina rya product ryawe mu chat header na menu ya admin. Kugabanya kugira uburyo bwo kuvuga "Gratis AI Agent" gusa, ushobora guhagarara. |
| **Kugabanya Agent Picker** | Off | Iyo igikorwa cyangwa ikoreshwa, abantu batagashobora gukoresha ibindi agent bizwi mu gice cy'amasezerano (five built-in agents). Agent y'ubwoko bishobora gukoresha igomba kwizera ku gihe cyo kumenya mu Settings → General. |
| **Gukoresha Site Icon nk'Avatar ya Chat** | Off | Iyo igikorwa cyangwa ikoreshwa, uburyo bwo kuvuga AI (icon) mu chat header kigomba kwibwa n'ubwoko bw'site ya WordPress (kigomba gukorwa mu Appearance → Customize → Site Identity). |

### Gukoresha Uburyo Bwo Kumenya (Applying Changes)

Gukoresha **Save Settings** nyuma yuko wamutseza cyangwa ugiye ku flag yose. Uburyo bwo kuvuga bishobora gukorwa mu gihe cy'ubwoko bw'ibindi byiza — nta kigomba kwitera cache cyangwa gukoresha plugin cyangwa ikoranabuhanga.
