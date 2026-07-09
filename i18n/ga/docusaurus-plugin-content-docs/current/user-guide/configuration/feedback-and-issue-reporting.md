---
title: Féidhm Ógreachais agus Déanamh Rincí Gaelach
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback Óglaigh agus Déanamh Roinnítíochta Eolas {#customer-feedback--issue-reporting}

Is é AI Agent grátis v1.5.0 ag cur isteach ró-ghníomhú (feedback) agus déanamh roinnítíochta eolas a bhaineann leat, a leas do chuidaithe end-users a chur in áit na héifeachtach ar na tapa agus a chur ar fáil próiseanna go díreach ó chuid chat interface. Is é an raon seo ag cur iad ar bhealach chun cur isteach (consent management), command roinnítíochta automatach, agus triage le feidhm AI ar an seachtain.

## Button Thumbs-Down {#thumbs-down-button}

Tá **button thumbs-down** (👎) ag tairgseáil ar chuid na méid a chur in áit an AI assistant a bheita. Nuair a bhfaidh cur iad ar é, leagan an chuidaithe go díreach mar unna a bheith an foirme nó an-dúil.

- Tá an button ag tairgseáil ar hover leat ar chuid na méid a chur in áit.
- Nuair a bhfaidh cur iad ar é, léiríonn sé an **Feedback Consent Modal**.
- Is é an feedback ag cur iad ar an seachtain atá ag cur isteach agus ar an meid a bheith ag cur iad ar é.

## Feedback Consent Modal {#feedback-consent-modal}

Nuair a bhfaidh cur iad ar button thumbs-down, tairgseála consent modal ag tairgseáil prima ar aon cheann de data a chur in áit. An modal:

- Déanann sé an t-aonach faoi cheangailte (conversation excerpt), context browser a chur in áit.
- Nélcronna an chuidaithe chun cur iad ar fáil go hagreachas is é seo a chur in áit.
- Tugann sé leat fáil féin (free-text field) chun a chur in áit an t-aonach a bheith ag cur isteach.
- Tugann sé option **Cancel** chun é a ghluthadh gan a chur ar fáil.

Níl aon feedback ag cur iad ar fáil go léir go leann go dtí a chur in áit an chuidaithe go díreach.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Ar deireadh cheann, is féidir leis an assistant a chur in áit **auto-prompt feedback banner** — meán a bhaineann ag cur isteach (non-intrusive message) ag iarraidh a bheith foirme an seachtain.

Tairgseála seo tairgseáil go dtí an chuidaithe ar an t-aonach agus an t-aonach atá ag cur iad ar é. Is féidir leat an banner a ghluthadh gan a chur ar fáil feedback.

## /report-issue Slash Command {#report-issue-slash-command}

Is féidir leis na chuidaithe a chur in áit an seachtain go díreach ar bhealach chun cur isteach (feedback flow) ag teastaigh `/report-issue` i bhfíne chat input. Is é an command seo:

Lánsa an Modal Cionas (Feedback Consent) ag curte.
Pre-populeann an fáil ar an fhaisnéis le contexta faoi chuid cuid deatachúil.
Cén fáth aithmheas níos éasca do chuid úsáidor iad a chur in áit a bhaint amach go dtí a chur in áit.

Tá an curte `/report-issue` ar fáil i gcónaí chat (inline, widget ag teacht, full-screen).

## Triage le cúdmacht AI {#ai-assisted-triage}

Bíonn fhaisnéis a chur in áit ag curtha ar chuid triage AI atá:

- Aoscolta an raointe (e.g., tréimhse fearchana, caipteoir níos éasca, curte n-éadachúil, etc.).
- Aoscolta meatáirí fhaisnéis a bhaineann leat.
- Aoscolta an curte triage go dtí an **Feedback Endpoint** a chur in áit (fáine [Settings > Advanced](#settings-advanced)).

Is é seo an t-amach ar an t-aonachais manual ag curtha iad a bhaint amach ar na máshanna is ábhartha ar an chéad.

## Settings > Advanced {#settings-advanced}

Le aithmheas an backend fhaisnéis, curtha an tairgse seo ar an fáil i gcónaí **Gratis AI Agent → Settings → Advanced**:

| Field | Aonachais |
|---|---|
| **Feedback Endpoint URL** | An URL a bhfaidh curte POST le payload fhaisnéis (JSON). |
| **Feedback API Key** | Token Bearer a chur in `Authorization` header chun a bheith ar fáil do chuid curte fhaisnéis. |

Déan an duine na fáil seo go bhfáinne a chur in áit an curte fhaisnéis. Bhíonn curte fhaisnéis individual ag teacht ar úsáidoracht, ach níl féidir iad a chur in áit.

:::tip
Is gcurte fhaisnéis is féidir é a ghlacadh le body JSON le caithfidh sé 'message_id', 'conversation_id', 'feedback_text', agus 'triage_category'. Fáine an daccamaí ar an chuid curte fhaisnéis a bhaineann leis an schema a bheith ag teacht.
:::
