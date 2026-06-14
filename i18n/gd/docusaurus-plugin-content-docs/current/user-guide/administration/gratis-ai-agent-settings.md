---
title: Rannachais AI Agent fadaidh
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Settings AI Agent Grátis

An **Settings → Advanced** screen in Gratis AI Agent le cungrannach airson co-chùrsain chùrsain-a-steach (administrator-level configuration) airson co-chluasadh a tha wedi' sgaidh anns an v1.5.0. A gun seann seo a tha a' sgrùdadh na feidheil **Feedback Endpoint** agus fòmach air a tha a' gineadh.

## Co-chlaidh Settings

1. I admin WordPress, rinn gu **Gratis AI Agent → Settings**.
2. Clicke ar tab **Advanced**.

## Co-chluasadh Feedback Endpoint

Tha an feedback endpoint a tharann de dhòigh POST requests a' sgàil airson an AI agent gu sònraich gu bheil seann a' chlàradh (thumbs-down button), bannar auto-prompt, no comadh `/report-issue`.

| Field | Aonnsaigh |
|---|---|
| **Feedback Endpoint URL** | An URL a tharann de dhòigh co-chluasadh a' sgail gu HTTP POST requests le seann JSON body. |
| **Feedback API Key** | Tòisich air a tharann is dòigh bearer token anns an `Authorization` header a chùrsain a' chlàradh (feedback request) a chùrsain. Tòisich air a bhith fada air a tha thu endpoint agad a de uileidheachd a' gineadh. |

### Payload JSON Aonnsaigh

Mus eirinn an feedback endpoint agad, mus am fòmach JSON le co-chluasadh a tha a' gineadh:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Bha an tairmheas air an t-uisge a' sgail.",
  "triage_category": "factual_error"
}
```

Leum a tha fòmach eile ag obair anns an payload a' gineadh a' leidheachadh a' chùrsain.

### Airgead `triage_category`

Tha an slàinte AI a tharann aon de na fòmach uile seo air `triage_category` a' sgail gu bheil e a' chlàradh (payload) a' sgàil:

| Value | Aonnsaigh |
|---|---|
| `factual_error` | Bha an àiteach a' sgail de fòighinn-fòighinn airneachdach. |
| `unhelpful_answer` | Bha an tairmheas airneachdach gu tecnicach ach ann an t-uisge. |
| `inappropriate_content` | Bha an tairmheas a' gineadh seann a tha thu a' sgail do chùrsain. |
| `other` | Bha an feedback a' leumh a' sgail air co-chluasadh a tha a' fada. |

### Aonnsaigh (Authentication)

Tha thuair a tha eich endpoint a'igeirich a tha aithreachadh, rinn an fhadraidh **Feedback API Key** gu eòganach (bearer token) agad. A' thann an agent:

```
Authorization: Bearer <your-api-key>
```

Tha an **Feedback API Key** a'igeirich a tha a'igeirich, níl aon `Authorization` header a thann.

### A' guthachadh leatachadh (Disabling Feedback Collection)

Latha an **Feedback Endpoint URL** agus an **Feedback API Key** gu eòganach. Tha an t-aon-fhaighinn (thumbs-down button) agus an UI fhadraidh a'igeirich airson na h-uilean, ach níl aon fhadraidh a thann air a' chluaintean a tha a'igeirich.

## Brave Search API Key

Tha an **Brave Search API Key** aig an tab **Advanced** gu sònach, a tha a'igeirich a tha a'igeirich [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | An API key agad a' ghràdhachdaireachd Brave Search. Tha e aithreachaich airson a bhith a'igeirich internet search anns an AI assistant. |

Tha an t-aon-fhaighinn a'igeirich a tha le link a'igeirich gu pàipear sign-up API Brave Search. Latha an fhadraidh a'igeirich airson internet search.

Sealltainn [Internet Search](../configuration/internet-search) airson dacdaireachd uileach air an fhadraidh seo.

## Feature Flags

Tha e a' guthachadh gu sònach anns an v1.9.0, tha an tab **Settings → Feature Flags** a'igeirich tòrchaidhean (toggle switches) airson fhaighinn fhaighinn optional. Tha ch each flag a'igeirich a tha a'igeirich air an t-àiteach; tha e a'igeirich a tha a'igeirich ann an t-àiteach, tha e a'igeirich a tha a'igeirich ann an t-àiteach.

### A' ghlacadh Feature Flags (Accessing Feature Flags)

1. I WordPress admin, rinn gu **Gratis AI Agent → Settings**.
2. Cluich air an tab **Feature Flags**.

### Flaggaid airson raonachadh a' chluaintean (Access Control Flags)

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Nuairinn a' chluarachadh do chluarachair. Nuair a tha seo a' tòiseachadh, faic an uisgeulachais leat a bhith ag fhaigh air an panel chat AI Agent gu sònraichte. Tha ealainn eile a' chluarachadh a' cleachdadh "Contact do do chluarachair". |
| **Restrict to Network Admins** | Off | Nuair a tha seo a' tòiseachadh ar seòd multisite, tha Super Admins a' cleachdadh an agent gu sònraichte. Tha adhirinne site a' chluarachadh. Tha ealainn eile a' chluarachadh a' cleachdadh "Restrict to Administrators" a' chluarachadh air seòd multisite, agus tha seo a' tòiseachadh an uisgeulais. |
| **Allow Subscriber Access** | Off | Nuair a tha seo a' tòiseachadh, caithedh na h-uilean leat a bhith ag fhaigh air an interface chat ach tha thu a' chluarachadh (no tha eadar-dheargadh postachnadh no atharrachadh seòilchnaichean). |
| **Disable for Non-Members** | Off | Tha e a' ghnàthachadh le statantachd membership Ultimate Multisite. Nuair a tha seo a' tòiseachadh, tha an chat a' chluarachadh airson sitean a chanachd beatha (membership) a tha thu a' cleachdadh. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | A' chluarachadh an línte a' chluarachadh a tha a' tòiseachadh a' chluarachadh a tha a' cleachdadh. Tha ealainn leat a' cleachdadh airson deploiements leat a' chluarachadh. |
| **Custom Agent Name** | *(blank)* | A' chluarachadh an "Gratis AI Agent" a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a' chluarachadh a'
