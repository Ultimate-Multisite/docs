---
title: Fandaharam-potoana an-tserasina ho maimaim-po ny AI Agent
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Ny skjema **Settings → Advanced** ao Gratis AI Agent manome fanaovana fanamboarana ho an'ny mpitantana (administrator) ireo fampifandraisana ao ambadiko izay nampidirina tamin'ny v1.5.0. Ity pejy ity dia mamintina ny sehatry ny **Feedback Endpoint** sy ny endrika tokony ho azy.

## Fidirana amin'ny Settings

1. Ao anatin'ny WordPress admin, mandehana any amin'ny **Gratis AI Agent → Settings**.
2. Tsindrio ny tabilao **Advanced**.

## Fametrahana Feedback Endpoint

Ny feedback endpoint dia mandray fangatahana POST avy amin'ny AI agent rehefa misy mpampiasa manome hevitra (feedback) amin'ny alalan'ny bokotra "thumbs-down", ny banner auto-prompt, na ny baiko `/report-issue`.

| Champ | Famaritana |
|---|---|
| **Feedback Endpoint URL** | Ny URL izay mandray ny fametrahana feedback ho HTTP POST requests miaraka amin'ny JSON body. |
| **Feedback API Key** | Token bearer izay alefa ao anatin'ny `Authorization` header avy amin'ny fangatahana feedback tsirairay. Avelao ho botra-bary raha tsy mitaky fanamarinana (authentication) ny endpoint anareo. |

### JSON Payload tokony ho voalaza

Ny feedback endpoint anareo dia tsy maintsy mandray JSON body izay ahitana ireo sehatra manaraka:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Ny valiny dia diso momba ny vidiny.",
  "triage_category": "factual_error"
}
```

Mety misy sehatra hafa ao anatin'ny payload arakaraka ny toe-javatra iainana (conversation context).

### Valiny `triage_category`

Ny layer fampandahatra (triage) an'ny AI dia manome iray amin'ireto valiny ireto ho an'ny `triage_category` alohan'ny famoahana ny payload:

| Valiny | Hevitra |
|---|---|
| `factual_error` | Ny asistantina dia nanome fampahalalana tsy marina momba ny zava-misy. |
| `unhelpful_answer` | Marina ara-teknika ny valiny nefa tsy nampiasa an'izany ho ilaina. |
| `inappropriate_content` | Ny valiny dia ahitana votoaty izay tokony tsy haseho amin'ny mpampiasa. |
| `other` | Tsy mifanaraka amin'ny sokajy fantatra ny feedback. |

### Fanamarinana (Authentication)

Raha ny endpoint anao mitaky fanamarinana (authentication), avereno ny fampidirana **Feedback API Key** amin'ilay bearer token anao. Ny agent dia mandefa izao:

```
Authorization: Bearer <your-api-key>
```

Raha tsy misy valiny eo amin'ny fampidirana **Feedback API Key**, dia tsy hisy `Authorization` header no alefa.

### Fanakana ny Fanangonana Feedback

Avelao ho lafo (blank) ireo fampidirana **Feedback Endpoint URL** sy **Feedback API Key**. Ny bokotra "thumbs-down" sy ny interface feedback dia ho hita amin'ny mpampiasa, fa tsy hisy fametrahana ny fangatahana amin'ny serivisy ivelany.

## Brave Search API Key

Eo amin'ny tabilao **Advanced** koa, ny fampidirana **Brave Search API Key** dia mamela ny fahaizana mitady an-tserasera [Internet Search](../configuration/internet-search).

| Fampidirana | Famaritana |
|---|---|
| **Brave Search API Key** | Ny API key avy amin'ny dashboard mpamorona Brave Search. Ilaina mba hampandehanana ny fikarohana an-tserasera ao amin'ny asistantin'ny AI. |

Ny anaran'ilay fampidirana dia misy rohy azo tsapain-tanana mankany amin'ny pejy fanatanterahana Brave Search API. Avelao ho lafo mba hanakana ny fikarohana an-tserasera.

Jereo ny [Internet Search](../configuration/internet-search) ho an'ny antontan-taratasy ho an'ny mpampiasa momba ity fahaizana ity.

## Feature Flags

Nampidirina koa tamin'ny v1.9.0, ny tabilao **Settings → Feature Flags** dia manome "toggle switches" (fanovana) ho an'ny fiasa safidy. Ny flag tsirairay dia azo ampiasaina na tsy ampiasaina eo amin'ny tambajotra rehetra; tsy misy fanitsiana isaky ny toerana amin'izao fotoana izao.

### Fidirana ao amin'ny Feature Flags

1. Ao amin'ny WordPress admin, mandehana any **Gratis AI Agent → Settings**.
2. Tsindrio ny tabilao **Feature Flags**.

### Access Control Flags

| Flag | Default | Famaritana |
|---|---|---|
| **Apetra ho Administrator** | Off | Rehefa voalana, ireo mpampiasa manana ny anjara toerana `administrator` ihany no afaka manokatra ny panel chat an'ny AI Agent. Ireo anjara toerana hafa dia hahita hafatra hoe "Mifandraisa amin'ny administrator" izy ireo. |
| **Apetra ho Network Admins** | Off | Rehefa voasokajy eo amin'ny tambajotra multisite, ny Super Admin ihany no afaka mampiasa ilay agent. Ny admin an'ny toerana tsirairay dia voafetra. Raha misy roa ao anatin'izany, ity dia manana lanja ambony kokoa noho ny "Apetra ho Administrator". |
| **Asorahina Fidirana ho Subscriber** | Off | Rehefa voasokajy eo amin'ny fampiasana azy, ireo mpampiasa manana ny anjara toerana `subscriber` dia afaka mampiasa ny interface chat fa voafetra amin'ny fahaizana mamaky ihany (tsy azo mamorona lahatsoratra na manova setings). |
| **Apetra ho Non-Members** | Off | Mifandray amin'ny sata membership an'ny Ultimate Multisite. Rehefa voasokajy, dia tsy hita ny chat ireo toerana izay tsy manana fandraisana anjara (membership) mavitrika. |

### Branding Flags

| Flag | Default | Famaritana |
|---|---|---|
| **Apetra ny "Powered by Gratis AI Agent" Footer** | Off | Manala ilay tsipika famantarana marika hita eo amin'ny farany an'ilay chat widget. Taviana ho an'ny fampiasana mitovy (white-label deployments). |
| **Anaran'ny Agent Manokana** | *(vazio)* | Manolo ny "Gratis AI Agent" fa anarana vokatra anao ao amin'ny lamba fanombohana chat sy ny menu admin. Avelao ho vao tsy misy raha tianao hampiasa ilay default. |
| **Apetra ny Agent Picker** | Off | Rehefa voasokajy, dia tsy afaka mifindra eo anelanelan'ireo agent dimy efa ao anatin'ny rafitra ny mpampiasa. Ny agent iainana dia voafetra amin'izay voatendry ho default ao amin'Settings → General. |
| **Fampiasana Site Icon ho Chat Avatar** | Off | Manolo ilay sary AI default eo amin'ny lamba fanombohana chat ho sary an'ny tranonkala WordPress (azo atao eo ambanin'Appearance → Customize → Site Identity). |

### Fampiharana Fiovana

Tsindrio ny **Save Settings** aorian'ny fanova na fanovana ny flag iray. Ny fiovana dia miasa avy hatrany — tsy mila manadio cache na mamerina ny plugin ianao.
