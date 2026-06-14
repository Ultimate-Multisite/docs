---
title: Libreng Setting sa AI Agent
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Libreng AI Agent Settings

Ang screen nga **Settings → Advanced** sa Gratis AI Agent naghatag og configuration para sa administrator level sa mga backend integrations nga giintroduce sa v1.5.0. Kini nga page nagdokumento sa mga field sa **Feedback Endpoint** ug ang ilang gipaabot nga format.

## Pag-access sa Settings

1. Sa WordPress admin, adto sa **Gratis AI Agent → Settings**.
2. I-click ang tab nga **Advanced**.

## Feedback Endpoint Configuration

Ang feedback endpoint makadawat og POST requests gikan sa AI agent kanunay kung adunay user nga magsumite og feedback pinaagi sa thumbs-down button, sa auto-prompt banner, o sa `/report-issue` command.

| Field | Deskripsyon |
|---|---|
| **Feedback Endpoint URL** | Ang URL nga makadawat sa mga submission sa feedback isip HTTP POST requests uban ang JSON body. |
| **Feedback API Key** | Usa ka bearer token nga gihatag sa `Authorization` header sa matag feedback request. Biyaan kini nga walay sulod kung ang imong endpoint dili nangin nagkinahanglan og authentication. |

### Gipaabot nga JSON Payload

Kinahanglan dawaton sa imong feedback endpoint ang JSON body nga adunay labing menos kining mga field:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Ang tubag sayop bahin sa presyo.",
  "triage_category": "factual_error"
}
```

Posible nga adunay dugang mga field sa payload depende sa konteksto sa panagsultian.

### Mga Kahulogan sa `triage_category` Values

Ang AI triage layer maghatag og usa sa mosunod nga mga value ngadto sa `triage_category` sa dili pa ipadala ang payload:

| Value | Kahulogan |
|---|---|
| `factual_error` | Ang assistant naghatag og sayop nga impormasyon bahin sa kamatuoran. |
| `unhelpful_answer` | Ang tubag tama teknikal apan wala makatabang. |
| `inappropriate_content` | Ang tubag adunay sulod nga dili angay ipakita sa mga user. |
| `other` | Ang feedback wala magtugma sa usa ka nailhan nga kategorya. |

### Authentication

Kung ang imong endpoint nagkinahanglan og authentication, i-set ang field nga **Feedback API Key** sa imong bearer token. Ang agent magpadala ni:

```
Authorization: Bearer <your-api-key>
```

Kung walay laman ang field nga **Feedback API Key**, walay `Authorization` header ang ipadala.

### Pag-disable sa Feedback Collection

I-iwanan og blanko ang parehong field nga **Feedback Endpoint URL** ug **Feedback API Key**. Ang thumbs-down button ug feedback UI magpabilin nga makita sa mga user, apan ang mga submission dili ipadala sa bisan unsang external service.

## Brave Search API Key

Aron usab sa tab nga **Advanced**, ang field nga **Brave Search API Key** naghatag og abilidad sa [Internet Search](../configuration/internet-search).

| Field | Deskripsyon |
|---|---|
| **Brave Search API Key** | Ang imong API key gikan sa Brave Search developer dashboard. Gikinahanglan aron ma-enable ang internet search sa AI assistant. |

Ang label sa field naglakip og clickable link ngadto sa Brave Search API sign-up page. I-iwanan og blanko aron ma-disable ang internet search.

Tan-awa ang [Internet Search](../configuration/internet-search) para sa dokumentasyon alang sa end-user bahin niining feature.

## Feature Flags

Gidugang usab sa v1.9.0, ang tab nga **Settings → Feature Flags** naghatag og toggle switches para sa optional functionality. Ang matag flag kay enabled o disabled sa tibuok network; wala pa'y per-site override niini karon.

### Pag-access sa Feature Flags

1. Sa WordPress admin, adto sa **Gratis AI Agent → Settings**.
2. I-click ang tab nga **Feature Flags**.

### Access Control Flags

| Flag | Default | Deskripsyon |
|---|---|---|
| **Restrict to Administrators** | Off | Kung naka-on, ang mga user na may `administrator` role lang ang makakapagbukas ng AI Agent chat panel. Ang ibang roles naman ay makakakita lang ng mensaheng "Makipag-ugnay sa inyong administrator". |
| **Restrict to Network Admins** | Off | Kapag naka-on ito sa multisite network, ang mga Super Admin lang ang pwedeng gumamit ng agent. Bawal ang individual site admins. Mas unahon ito kaysa sa "Restrict to Administrators" kung pareho silang naka-on. |
| **Allow Subscriber Access** | Off | Kung naka-on, ang mga user na may `subscriber` role pwede gamitin ang chat interface pero limitado lang sila sa pagbasa (walay makakagawa og post o mag-change og settings). |
| **Disable for Non-Members** | Off | Nag-integrate kini sa membership status sa Ultimate Multisite. Kapag naka-on, itago ang chat para sa mga sites nga wala'y aktibong membership. |

### Branding Flags

| Flag | Default | Deskripsyon |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Tangtangon ni ang linya sa branding nga makita sa ibabaw sa chat widget. Gi-rekomenda kini para sa mga white-label deployment. |
| **Custom Agent Name** | *(blank)* | Mapulihan ni ang default nga label nga "Gratis AI Agent" sa chat header ug admin menu ng inyong kaugalingong product name. Biyaan og blank kung gusto ninyo gamiton ang default. |
| **Hide Agent Picker** | Off | Kung naka-on, dili na pwede ang mga user nga mag-switch tali sa lima ka built-in agents. Ang kasamtang agent kay i-fix sa bisan unsa ang gi-configure isip default sa Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Mapulihan ni ang default AI icon sa chat widget header ng WordPress site icon (i-set kini ubos sa Appearance → Customize → Site Identity). |

### Pag-apply sa mga Kaayohan

I-click ang **Save Settings** human mag-toggle og bisan unsang flag. Ang mga kaayohan kay molihok dayon — walay kinahanglan nga i-flush ang cache o i-reactivate ang plugin.
