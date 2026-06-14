---
title: Argyngolau ystref AI Agent
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Cyd-gynnigol AI Agent Settings

Mae'r gaeaf **Settings → Advanced** yn y ddefnyddiwr administrator i sicrwyllau backend a ddefnyddiatwyd yn v1.5.0. Mae'r peidiad hwn yn nodi'r ffeidiad **Feedback Endpoint** a ffurf y mae angen eu cyflwyno.

## Cyffurfio'r Settings

1. Yn yr admin WordPress, mynd i **Gratis AI Agent → Settings**.
2. Clic ar y tab **Advanced**.

## Cyflwyniad Feedback Endpoint

Mae'r feedback endpoint yn derbyn cyflwyniadau POST o'r AI agent pan mae dyn yn cyflwyno feedback drwy'r bot dros-gwyn, y banner auto-prompt, neu'r bwrdd `/report-issue`.

| Ffurf | Disgrif |
|---|---|
| **Feedback Endpoint URL** | Y URL syderir cyflwyniadau feedback fel cyflwyniadau HTTP POST gyda bodle JSON. |
| **Feedback API Key** | Token bearer a ddarganfod yn cael ei anfon mewn header `Authorization` o bob cyflwyniad feedback. Rwy'n gadael yn gwbl os nad yw eich endpoint yn angen cybedd. |

### Payload JSON Awestaethol

Rhaid i'ch feedback endpoint dderbyn bodle JSON gyda'r ffurfau canlynol fel arnaf:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Mae'r ateb yn anghyffredol am y cyfathrebu.",
  "triage_category": "factual_error"
}
```

Gall ffurfau addysg fod ar gael yn y bodle yn ôl y cyd-fyddiad.

### Gwirionedd `triage_category`

Mae'r llawer triage AI yn cyflwyno un o'r gyflymion canlynol i `triage_category` قبل ychwanegu'r bodle:

| Gwirionedd | Cyfieithiad |
|---|---|
| `factual_error` | Mae'r gynhelid wedi rhoi wybodaeth ffurfiol anghyffredol. |
| `unhelpful_answer` | Roedd y ateb yn siaradol ar gonedd ond nid oedd yn ddefnyddiol. |
| `inappropriate_content` | Roedd y ateb yn cynnwys cynnwys sydd ei fod yn cael ei dangos i'r benodau. |
| `other` | Nid oedd y feedback yn cyflwyno canlyniad a gaelog. |

### Cybedd

Os eich endpoint yn rheoli ar gyfer cyfeiriad (authentication), rhoi'r field **Feedback API Key** i'ch bearer token. Mae'r agent yn anfon:

```
Authorization: Bearer <your-api-key>
```

Os oes y field **Feedback API Key** yn gwbl, nid cael unrhyw header `Authorization` yn cael ei anfon.

### Dysgu Cyfathrebu Feedback (Disabling Feedback Collection)

Rhaid i chi gwrthod both y fieldau **Feedback Endpoint URL** a **Feedback API Key**. Bydd y bot o ddeall (thumbs-down button) a'r UI cyfathrebu yn parhau i'r benodolion, ond nid cael y cyflwyniadau wedi'u anfon i unrhyw gwasanaeth extern.

## Brave Search API Key

 hefyd ar y tab **Advanced**, mae'r field **Brave Search API Key** yn sylwi ar gyfer y fäith [Internet Search](../configuration/internet-search).

| Field | Disgrif |
|---|---|
| **Brave Search API Key** | Ychwanegwch API key o'ch dashboard dewelwyr Brave Search. Mae angen i'r cyfathrebu y chwilio ar gyfer y internet yn ei gael yn y asiantwr AI. |

Mae'r enw ffield yn cynnwys linc cyffredinol i wefan cyflwyniad API Brave Search. Rhaid i chi ei gwbl i dysgu'r chwilio ar gyfer y internet.

Gweld [Internet Search](../configuration/internet-search) am ddefnyddwyr ar gyfer y fäith hwnnw.

## Feature Flags (Ffrainau Ffäith)

Mae'n cael ei gyflwyno hefyd yn v1.9.0, mae'r tab **Settings → Feature Flags** yn rhoi gwychiau (toggle switches) i weithedhion allweddol. Mae pob ffrwidiad yn cael ei gael neu ddisgwylio arall-lein; nid oes unrhyw gyfathrebu per-site ar gyfer hynny ar hyn o bryd.

### Cyffurfio Feature Flags

1. Yn y admin WordPress, mynd i **Gratis AI Agent → Settings**.
2. Clic ar y tab **Feature Flags**.

### Ffrainau Cyflwrdd (Access Control Flags)

| Flag | Default | Disgrifiad |
|---|---|---|
| **Restryd i Administratorionau** | Off | Panwrdd, panwrddau gyda'r rôl `administrator` dim ond gallwch gwneud cyflwyniad y panel chat AI Agent. Mae pob rôl arall yn gweld mwynhau "Contact your administrator". |
| **Restryd i Administratorion Cyd-gynllt** | Off | Panwrdd yn rheini'r cyd-gynllt, dim ond Super Admins gallwch ddefnyddio'r agent. Mae adminau o'r safle unig wedi'u blacio. Mae'n gael priodul ar "Restrict to Administrators" os oes yma'n cael eu chwarae allan. |
| **Cynllaw Gysylltiad Subscriberion** | Off | Panwrdd gyda'r rôl `subscriber` gallwch ddefnyddio'r cyfathrebu, ond mae eich gallu yn cael eu hanesyddau (nad oes unrhyw creu post neu newid setegau). |
| **Tystyr i Non-Members** | Off | Mae'n gysylltiedig â statws cyd-gynllt Ultimate Multisite. Panwrdd yn cael ei tystyr os nad oes gan y safle unrhyw cyd-gynllt weithredol. |

### Flagau Brandeau (Branding Flags)

| Flag | Default | Disgrifiad |
|---|---|---|
| **Tystyr "Powered by Gratis AI Agent" Footer** | Off | Yn tystyr y llinell brandeu a ddarlledu ar ben y widget chat. Mae'n cael ei roi i ddefnyddio am gyflwyniadau gyda chwarae gwaith (white-label). |
| **Enw Agent Custom** | *(blank)* | Mae'r enw "Gratis AI Agent" yn cael ei wneud yn lleol y cyfeiriad chat a'r menu admin gyda'r enw eich produs. Rhaid i'w gadael yn llwyr i ddefnyddio'r enw defnyddiol. |
| **Tystyr Ymddangos Site fel Avatar Chat** | Off | Mae'n cael ei wneud y cyfathrebu AI ar ben y hedfanau chat gyda'r cyfathrebu safle WordPress (a fydd yn cael ei setio o dan Appearance → Customize → Site Identity). |

### Cyflwyniad Grŵpau (Applying Changes)

Clicwch ar **Save Settings** ar ôl i chwarae unrhyw flag. Mae'r newidiadau yn gael eu cyflawni yn gyflym — nid oes angen i ddifynnu cache neu ddefnyddio'r plugin eto.
