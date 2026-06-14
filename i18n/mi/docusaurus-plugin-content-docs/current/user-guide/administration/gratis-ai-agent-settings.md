---
title: Whakawāhi Awhi AI Settings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Gratis AI Agent-o **Settings → Advanced** skrinni he wero whakamahi administrator-level configuration mō ngā whaiwhihi (integrations) e pātaka i v1.5.0. I roto i tēnei manawa, āwhina atu ahau ki te whakamārama i ngā fields o te **Feedback Endpoint** me te fōmai (format) e kaha ana ia.

## Whakarongo i ngā Settings

1. I roto i te WordPress admin, pahi ki **Gratis AI Agent → Settings**.
2. Klik i te tab **Advanced**.

## Configuration o te Feedback Endpoint

Ko te feedback endpoint e pēnei i te POST requests mai i te AI agent i roto i roto i ngā wā e whaiwhia te whakamārama o te mea whai whakaaro (feedback) e whaiwhia ai te user i te button o te thumbs-down, te auto-prompt banner, heta te command `/report-issue`.

| Field | Whakaraupoko |
|---|---|
| **Feedback Endpoint URL** | Ko te URL e pēnei i te POST requests mai i te feedback submissions me te body JSON. |
| **Feedback API Key** | He bearer token e pēnei i te `Authorization` header o every feedback request. Whakarongo ki te blank (blank) i te whakatū, ko te endpoint moero ana i te authentication. |

### Payload JSON E kaha ana ia

Me tino akcepti te feedback endpoint body JSON me ngā fields berikut:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

He pōmai (payload) whai whakaaro e taea te hoatu i runga i te context o te conversation.

### Ngā Whakarau `triage_category`

Ko te layer o triage o te AI e whai whakaaro i tēnei values ki `triage_category` mō te whakamahi i te payload:

| Value | He aha? |
|---|---|
| `factual_error` | Ko te assistant i hoatu information wairua (factual) e pēnei. |
| `unhelpful_answer` | Ko te response i tika anga, engari āhua kino ana. |
| `inappropriate_content` | Ko te response i whai whakaaro (content) e taea ona whakaatanga ki ngā user. |
| `other` | Ko te feedback i waenga i ngā category e pēnei. |

### Authentication

Māori:

Kia ora! Ko te mea nui, ko ahau e whakatipu i te whakamahi o tēnei dokumentation o WordPress.

Ko te mea nui, ko ahau e whakatipu i te whakamahi o tēnei dokumentation o WordPress.

Ko te mea nui, ko ahau e whakatipu i te whakamahi o tēnei dokumentation o WordPress.

Kia tino tika ana koe i te endpoint (tātai) o koe, he tino mōhio ki te authentication (whakawhanaungatanga), kia rite koe ki te **Feedback API Key** (Mahi Kōrero API Key). Whakarite tēnei field ki te bearer token o koe. Ko te agent e hoki ai:

```
Authorization: Bearer <your-api-key>
```

Kia pēnei, ko te **Feedback API Key** field heke ana, he kore header `Authorization` e hoki ai.

### Whakamutunga i te Hua Kōrero (Disabling Feedback Collection)

He rite ki te whakatū i te mea, he rite ki te whakamahi o tēnei dokumentation o WordPress.

Kia rite koe ki te **Feedback Endpoint URL** me te **Feedback API Key**, heke ana ngā field-a. Ko te button e whakaatu te pēpi (thumbs-down) me te UI o te kōrero (feedback UI) ka mau tonu mō ngā mea, engari ko ngā submission (whakawhiti) hei whai ake i te service e kore ana.

## Brave Search API Key

He rite ki te whakamahi o tēnei dokumentation o WordPress.

He rite ki te **Advanced** tab, he rite ki te **Brave Search API Key**, ka tino tika ana koe ki te [Internet Search](../configuration/internet-search) ability (whakawhiti i te whakatere i te internet).

| Field | Description |
|---|---|
| **Brave Search API Key** | Ko tō API key mai i te developer dashboard o Brave Search. He tino nui ana ki te whakamahi i te whakawhiti i te internet i te AI assistant. |

Ko te label o te field he pēpi (clickable link) ki te sign-up page o Brave Search API. Heke ana, he kore e whakatere i te internet.

Kia whakaaro i [Internet Search](../configuration/internet-search) mō ngā whakamārama mō te end-user (ngā mea whai tino) mō tēnei feature (whakawhiti).

## Feature Flags

He rite ki te whakamahi o tēnei dokumentation o WordPress.

He pōuri i v1.9.0, ko te tab **Settings → Feature Flags** ka mau tonu i ngā toggle switches mō ngā functionality (whakawhiti) e tika ana. He tino whakahou heke ana koe ki te network-wide; he kore override per-site (mō every site) i tēnei wā.

### Whakarongo i Feature Flags

1. I te WordPress admin, pahi ki **Gratis AI Agent → Settings**.
2. Click the tab **Feature Flags**.

### Access Control Flags

| Flag | Default | Whakarongo |
|---|---|---|
| **Restrict to Administrators** | Off | I roto i te whakatau, ko ngā aua e hoki ana ki te `administrator` role-ahei te whakawhiti i te panel chat o te AI Agent. Ngā aua katoa e hoki ana ki te "Contact your administrator" (Whakarongo ki a koe i tō administrator) he mea e whakaatu ana. |
| **Restrict to Network Admins** | Off | I roto i te whakatau, ko ngā Super Admin-ahei te whakamahi i te agent i te wā e hoki ana ki te multisite network. Ko ngā admin o te site katoa he whakawhiti. He tino nui ake (takes precedence) no te "Restrict to Administrators" (Whakarongo ki a koe i tō administrator) ko te whakatau e hoki ana ki te multisite. |
| **Allow Subscriber Access** | Off | I roto i te whakatau, ngā aua e hoki ana ki te `subscriber` role-ahei te whakamahi i te interface chat, engari he whakawhiti ki ngā mea e tika anō (read-only) (he mea e whakaiti i te mahi e whakaora posts ahau). |
| **Disable for Non-Members** | Off | He whai tikanga ana me te status membership o Ultimate Multisite. I roto i te whakatau, ko te chat he whakahaere ana mō ngā sites e hāpai i te membership (membership) e hoki ana ki te active. |

### Branding Flags

| Flag | Default | Whakarongo |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | He whakatū he whakaahua (branding attribution line) e hoki ana i te pētaki o te widget chat. He tino whakamārama ana mō ngā white-label deployments. |
| **Custom Agent Name** | *(blank)* | He whakakitu i te tītī "Gratis AI Agent" (Gratis AI Agent) i te header o te chat me te menu admin ki te ingoa o aua. Whakarongo ki te blank (blank) he tino whakamahi ana ko te default. |
| **Hide Agent Picker** | Off | I roto i te whakatau, ngā aua e hoki ana ki te five built-in agents (ngā agent katoa e hoki ana) he whakawhiti i waenga i aua. Ko te agent e hoki ana ko he tino tika (fixed) ki te mea e whakatika ana ana i te default i Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | He whakakitu i te icon o te site i te header o te chat widget, he whakakitu ana i te WordPress site icon (whakatika ana i te Appearance → Customize → Site Identity). |

### Applying Changes

Whakarongo ki **Save Settings** i roto i te toggling o ngā flag katoa. Ko ngā whakawhiti e hoki ana i te wā e hoki ana — he mea e hiahia ana ko te cache flush (whakawhiti cache) he tino nui ake (no required).
