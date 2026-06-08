---
title: Libreng AI Agent Settings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Mga Setting ng Gratis AI Agent

Ang screen na **Settings → Advanced** sa Gratis AI Agent ay nagbibigay ng mga setting para sa administrator para sa mga backend integrations na ipinakilala sa v1.5.0. Idinodokumento ng pahinang ito ang mga field ng **Feedback Endpoint** at ang inaasahang format nito.

## Pag-access sa Settings

1. Sa WordPress admin, pumunta sa **Gratis AI Agent → Settings**.
2. I-click ang tab na **Advanced**.

## Pag-configure ng Feedback Endpoint

Ang feedback endpoint ay tumatanggap ng mga POST request mula sa AI agent tuwing magpapadala ng feedback ang user gamit ang thumbs-down button, ang auto-prompt banner, o ang `/report-issue` command.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Ang URL na tumatanggap ng mga feedback submission bilang HTTP POST requests na may JSON body. |
| **Feedback API Key** | Isang bearer token na ipinapadala sa `Authorization` header ng bawat feedback request. Iwanang blangko kung hindi nangangailangan ng authentication ang endpoint mo. |

### Inaasahang JSON Payload

Dapat tumanggap ang feedback endpoint mo ng JSON body na may hindi bababa sa mga sumusunod na field:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Mali ang sagot tungkol sa pagpepresyo.",
  "triage_category": "factual_error"
}
```

Maaari ring mayroong mga karagdagang field sa payload depende sa konteksto ng pag-uusap.

### Mga Halaga ng `triage_category`

Ang AI triage layer ay nagtatalaga ng isa sa mga sumusunod na halaga sa `triage_category` bago ipasa ang payload:

| Value | Meaning |
|---|---|
| `factual_error` | Nagbigay ang assistant ng maling impormasyon. |
| `unhelpful_answer` | Tama ang sagot sa teknikal na paraan ngunit hindi kapaki-pakinabang. |
| `inappropriate_content` | Naglalaman ang sagot ng nilalaman na hindi dapat ipakita sa mga user. |
| `other` | Hindi tumugma ang feedback sa anumang kilalang kategorya. |

### Authentication

Kung nangangailangan ng authentication ang endpoint mo, itakda ang **Feedback API Key** field sa iyong bearer token. Ang agent ay nagpapadala ng:

```
Authorization: Bearer <your-api-key>
```

Kung blangko ang **Feedback API Key** field, walang `Authorization` header ang ipapadala.

### Pag-disable ng Feedback Collection

Iwanang blangko ang **Feedback Endpoint URL** at **Feedback API Key** fields. Ang thumbs-down button at feedback UI ay mananatiling nakikita ng mga user, ngunit hindi ipapasa ang mga submission sa anumang external service.

## Brave Search API Key

Sa **Advanced** tab din, ang **Brave Search API Key** field ay nagpapagana sa kakayahang [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | Ang iyong API key mula sa Brave Search developer dashboard. Kinakailangan ito para ma-enable ang internet search sa AI assistant. |

Ang label ng field ay may kasamang clickable link patungo sa Brave Search API sign-up page. Iwanang blangko para i-disable ang internet search.

Tingnan ang [Internet Search](../configuration/internet-search) para sa dokumentasyon para sa end-user tungkol sa feature na ito.

## Feature Flags

Ipinakilala rin sa v1.9.0, ang **Settings → Feature Flags** tab ay nagbibigay ng mga toggle switch para sa mga optional functionality. Ang bawat flag ay maaaring i-enable o i-disable sa buong network; wala pang per-site override sa kasalukuyan.

### Pag-access sa Feature Flags

1. Sa WordPress admin, pumunta sa **Gratis AI Agent → Settings**.
2. I-click ang **Feature Flags** tab.

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Kapag naka-enable, ang mga user na may `administrator` role lang ang makakapagbukas ng AI Agent chat panel. Ang lahat ng ibang role ay makakakita ng mensaheng "Contact your administrator" sa halip. |
| **Restrict to Network Admins** | Off | Kapag naka-enable sa isang multisite network, ang Super Admins lang ang maaaring gumamit ng agent. Ang mga individual site admin ay haharangan. Mas mataas ang prayoridad nito kaysa sa "Restrict to Administrators" kung pareho silang naka-enable. |
| **Allow Subscriber Access** | Off | Kapag naka-enable, ang mga user na may `subscriber` role ay maaaring gumamit ng chat interface ngunit limitado sa read-only abilities (walang paggawa ng post o pagbabago ng settings). |
| **Disable for Non-Members** | Off | Nakakonekta ito sa membership status ng Ultimate Multisite. Kapag naka-enable, itatago ang chat para sa mga site na walang aktibong membership. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Tinatanggal nito ang linya ng branding attribution na ipinapakita sa ilalim ng chat widget. Inirerekomenda para sa white-label deployments. |
| **Custom Agent Name** | *(blank)* | Pinapalitan nito ang default na label na "Gratis AI Agent" sa chat header at admin menu ng pangalan ng sarili mong produkto. Iwanang blangko para gamitin ang default. |
| **Hide Agent Picker** | Off | Kapag naka-enable, hindi maaaring magpalit ang mga user sa limang built-in agents. Ang kasalukuyang agent ay nakapako sa anumang naka-configure bilang default sa Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Pinapalitan nito ang default na AI icon sa chat widget header ng site icon ng WordPress (itinatakda sa Appearance → Customize → Site Identity). |

### Pag-apply ng Pagbabago

I-click ang **Save Settings** pagkatapos i-toggle ang anumang flag. Ang mga pagbabago ay agad na magkakabisa — hindi na kailangan ng cache flush o plugin reactivation.
