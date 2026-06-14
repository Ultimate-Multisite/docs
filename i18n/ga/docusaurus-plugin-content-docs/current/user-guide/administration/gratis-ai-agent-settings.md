---
title: Céad Míne AI Agent Settings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Cailteanna AI Agent

Is é **Settings → Advanced** i Gratis AI Agent a chur ar chuidiúcháin le chuid administratorí chun cur isteach na gcríochtaí de bhfintithe (integrations) a bhí ag cur isteach i v1.5.0. Déanann an cur chuimne seo ar na feidhm **Feedback Endpoint** agus ar foirme a bheith ag cur isteach.

## Aistriú le Cailteanna

1. I admin WordPress, rag thar **Gratis AI Agent → Settings**.
2. Cliom ar tab **Advanced**.

## Cur chuimne Feedback Endpoint

Taispeann an feedback endpoint cruthaitheacha POST (POST requests) ó chuid AI agent ag cur isteach chun feedback a chur in áit ag úsáid ormhaí: nút an nút-down, an banner auto-prompt, nó an command `/report-issue`.

| Field | Cur chuimne |
|---|---|
| **Feedback Endpoint URL** | An URL a thaispeann cur chuimne feedback mar POST requests HTTP le body JSON. |
| **Feedback API Key** | Un bearer token a chur in `Authorization` header de chuid cur chuimne feedback. Déan an t-am leat seachaint an bhfíne am chun an endpoint agat níl ag teacht ar athchuidiúcháin (authentication). |

### Payload JSON Aistrithe

Is féidir leis an feedback endpoint a ghlacadh body JSON le caithfidh sé ag cur isteach na feidhm seo:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "An cuid a bhí an t-aistriú an-bhunaithe ar na gnáthacha.",
  "triage_category": "factual_error"
}
```

Leatagann feidhm eile ag cur isteach i payload ag cur chuimne ag cur isteach ag cur chuimne a bhí ag cur chuimne ag cur isteach ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne a bhí ag cur chuimne

Má tá an endpoint a thugann athbhreithniú, déan an **Feedback API Key** ar do bearer token. An agent a bheith goint:

```
Authorization: Bearer <your-api-key>
```

Má tá an **Feedback API Key** field óla, ní bheidh aon header `Authorization` a bheith ag bheith.

### An t-aonadh Cloghaíocht Feedback (Disabling Feedback Collection)

Déan an **Feedback Endpoint URL** agus an **Feedback API Key** fields óla. Beidh an nút an t-aonadh (thumbs-down button) agus an UI feedback agat ar na oifig, ach ní bheidh aon rud a bheith ag cur isteach i ngach seirbhís oifiriúil.

## Brave Search API Key

Ar an chúlam **Advanced** (Advanced tab), féachfaidh an **Brave Search API Key** field an fáil ar [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | An API key atá agat ó chuid dashboard develtar Brave Search. Is cinnte go haghaidh internet search i ngach aistriú (AI assistant). |

Tá an teangail ar an fhoinm ag cur link áit chun an cur chuimhne (sign-up) develtar Brave Search a bheith agat. Déan an t-aonadh óla chun internet search a thoilfidh.

Féach ar [Internet Search](../configuration/internet-search) ar na n-eolas de chuid uile ar an fáil seo.

## Feature Flags (Cloghaíocht Feichar)

Ag cur isteach go dtí v1.9.0, cur isteach an **Settings → Feature Flags** tab a sholáir switch-eolaí (toggle switches) do fhaointe oifiriúla. Tá gach flag ag bheith acuánaithe nó ag cur isteach ar an chéad chuid na ngrúpa; níl aon rud a bheith ag cur isteach ar an site seo anois.

### Aistriú Feature Flags

1. I an admin WordPress, cur isteach go **Gratis AI Agent → Settings**.
2. Cliom ar an tab **Feature Flags**.

### Cloghaíocht Control (Access Control Flags)

| Flag | Default | Onde a Dlíon |
|---|---|---|
| **Restrict to Administrators** | Off | Nu lá tá ar fáil, ach an t-aontaitheoirí (administrator) an cur chuig an panel chat AI cheana féin. Sin é an t-aontaitheoirí eile a fheicinn an meán "Contact your administrator". |
| **Restrict to Network Admins** | Off | Nu tá ar fáil ar na ngrúpaite (multisite network), ach níl aon duine Super Admin a bheith ag úsáid an agent. Tá an t-aontaitheoirí site eile bloctha. Tá sé iartas ar "Restrict to Administrators" má tá de dual ar bith ar fáil. |
| **Allow Subscriber Access** | Off | Nu tá ar fáil, ach leat do chuid isabhailte (subscriber) úsáid an cur chuig ach níl féidir leo é a chur inscríbeadh nó athrú na rathacha. |
| **Disable for Non-Members** | Off | Tá sé iartas le státis isabháil ar Ultimate Multisite. Nu tá ar fáil, ach níl cheana féin an chat ar fáil ar na site sin níl ag cur chuig isabháil activ. |

### Flaganna Branda (Branding Flags)

| Flag | Default | Onde a Dlíon |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Tá an línte branda a bhaineann leat arint an t-aontail cheana féin. Is é seo ar fáil chun deploiements a chur ar fáil le chuid chuid. |
| **Custom Agent Name** | *(blank)* | Leat an teangail "Gratis AI Agent" ar an cur chuig agus ar an meá admin go dtí an teangail atá agat. Déan sé blank chun an teangail de-fháil a úsáid. |
| **Hide Agent Picker** | Off | Nu tá ar fáil, ní féidir leat athrú idir na caite (agents) a bhaineann leat. Tá an agent atá ar fáil ag cur chuig ar an chuid atá ar fáil iarrachtaithe mar de-fháil ar Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Nu tá ar fáil, níl aon icon AI de-fháil ar an cur chuig cheana féin; is féidir leat a chur in áit an icon site WordPress (a bhaint ag cur chuig Appearance → Customize → Site Identity). |

### Aistriú Changúcháin (Applying Changes)

Cliceáil ar **Save Settings** tar éifeachtach tar éifeachtach ar chomh cheana féin. Tá tharraingt an t-aontaitheoirí ag cur chuig an chéad a bhaint amach — níl aon fhágáil cache nó athrú plugin ar fáil.
