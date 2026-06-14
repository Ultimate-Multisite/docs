---
title: Libreng Setting ng AI Agent
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Libreng Setting ng AI Agent

Ang screen na **Settings → Advanced** sa Gratis AI Agent ay nagbibigay ng configuration para sa mga backend integrations na ipinakilala sa v1.5.0. Ang page na ito ay nagdedetalye tungkol sa mga field ng **Feedback Endpoint** at ang inaasahang format nito.

## Pag-access sa Settings

1. Sa WordPress admin, pumunta sa **Gratis AI Agent → Settings**.
2. I-click ang tab na **Advanced**.

## Configuration ng Feedback Endpoint

Ang feedback endpoint ay tumatanggap ng POST requests mula sa AI agent tuwing magsusumite ang isang user ng feedback gamit ang thumbs-down button, ang auto-prompt banner, o ang command na `/report-issue`.

| Field | Deskripsyon |
|---|---|
| **Feedback Endpoint URL** | Ang URL na tumatanggap ng mga feedback submission bilang HTTP POST requests na may JSON body. |
| **Feedback API Key** | Isang bearer token na ipinapadala sa `Authorization` header ng bawat request para sa feedback. Iwanan itong walang laman kung ang iyong endpoint ay hindi nangangailangan ng authentication. |

### Inaasahang JSON Payload

Ang feedback endpoint mo ay dapat tumanggap ng JSON body na may kahit ang mga sumusunod na fields:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Mali ang sagot tungkol sa presyo.",
  "triage_category": "factual_error"
}
```

Maaaring may mga karagdagang fields sa payload depende sa konteksto ng usapan.

### Mga Halaga ng `triage_category`

Ang AI triage layer ay magtatalaga ng isa sa mga sumusunod na halaga sa `triage_category` bago ipasa ang payload:

| Halaga | Kahulugan |
|---|---|
| `factual_error` | Nagbigay ang assistant ng maling impormasyon. |
| `unhelpful_answer` | Ang sagot ay tama teknikal pero hindi kapaki-pakinabang. |
| `inappropriate_content` | Ang tugon ay naglalaman ng nilalaman na hindi dapat ipakita sa mga user. |
| `other` | Hindi tumugma ang feedback sa anumang kilalang kategorya. |

### Authentication

Kung ang iyong endpoint ay nangangailangan ng authentication, itakda ang field na **Feedback API Key** sa iyong bearer token. Ang agent ay magpapadala nito:

```
Authorization: Bearer <your-api-key>
```

Kung ang field na **Feedback API Key** ay walang laman, walang `Authorization` header ang ipapadala.

### Pagpapahinto ng Koleksyon ng Feedback

Hayaan ang mga field na **Feedback Endpoint URL** at **Feedback API Key** na walang laman. Ang thumbs-down button at feedback UI ay mananatiling nakikita ng mga user, ngunit hindi ipapasa ang mga submission sa anumang external service.

## Brave Search API Key

Sa tab na **Advanced**, ang field na **Brave Search API Key** ang nagbibigay-daan para gamitin ang kakayahang [Internet Search](../configuration/internet-search).

| Field | Deskripsyon |
|---|---|
| **Brave Search API Key** | Ang iyong API key mula sa Brave Search developer dashboard. Kinakailangan ito para i-enable ang internet search sa AI assistant. |

Ang label ng field ay mayroong clickable link patungo sa Brave Search API sign-up page. Hayaan itong walang laman para hindi ma-enable ang internet search.

Tingnan ang [Internet Search](../configuration/internet-search) para sa dokumentasyon para sa end-user tungkol sa feature na ito.

## Feature Flags

Inilugod din sa v1.9.0, ang tab na **Settings → Feature Flags** ay nagbibigay ng mga toggle switch para sa mga opsyon o feature na pwedeng i-on o i-off. Ang bawat flag ay naka-enable (ginagamit) o naka-disable (hindi ginagamit) sa buong network; wala pang per-site override sa ngayon.

### Pag-access sa Feature Flags

1. Sa WordPress admin, pumunta ka sa **Gratis AI Agent → Settings**.
2. I-click ang tab na **Feature Flags**.

### Mga Flag para sa Access Control

| Flag | Default | Deskripsyon |
|---|---|---|
| **Ilimitahan sa mga Administrator** | Off | Kapag naka-enable ito, ang mga user na may `administrator` role lang ang pwedeng magbukas ng AI Agent chat panel. Ang ibang roles ay makakakita ng mensaheng "Makipag-ugnayan sa iyong administrator" imbes na iyon. |
| **Ilimitahan sa Network Admins** | Off | Kapag naka-enable ito sa isang multisite network, ang mga Super Admin lang ang pwedeng gumamit ng agent. Ang individual site admins ay hindi papayagan. Mas mataas ang prayoridad nito kaysa sa "Restrict to Administrators" kung pareho silang naka-on. |
| **Payagan ang Access ng Subscriber** | Off | Kapag naka-enable ito, ang mga user na may `subscriber` role ay pwedeng gumamit ng chat interface pero limitado sila sa read-only abilities (walang paggawa ng post o pagbabago ng settings). |

| **I-disable para sa mga Hindi Miyembro** | Off | Nakikipag-ugnay sa membership status ng Ultimate Multisite. Kapag naka-enable ito, itatago ang chat para sa mga site na walang aktibong membership. |

### Mga Flag ng Branding

| Flag | Default | Deskripsyon |
|---|---|---|
| **Itago ang "Powered by Gratis AI Agent" Footer** | Off | Tinatanggal nito ang linya ng pagkilala sa branding na nakikita sa ibaba ng chat widget. Inirerekomenda ito para sa mga white-label deployment. |
| **Custom Agent Name** | *(walang laman)* | Palitan nito ang default na label na "Gratis AI Agent" sa header ng chat at menu ng admin gamit ang sarili mong pangalan ng produkto. Iwanang walang laman kung gusto mo gamitin ang default. |
| **Itago ang Agent Picker** | Off | Kapag naka-enable ito, hindi makakapagpalit ang mga user sa limang built-in na agent. Ang kasalukuyang agent ay nakapirmi sa anumang itinakda bilang default sa Settings → General. |
| **Gamitin ang Site Icon Bilang Chat Avatar** | Off | Pinapalitan nito ang default na icon ng AI sa header ng chat widget ng WordPress site icon (it itinakda sa Appearance → Customize → Site Identity).

### Paglalapat ng mga Pagbabago

I-click ang **Save Settings** pagkatapos mong i-toggle ang anumang flag. Agad itong magiging epekto—hindi na kailangan ng cache flush o muling pag-activate ng plugin.
