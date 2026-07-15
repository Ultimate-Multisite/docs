---
title: Ntọala Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Nhazi Gratis AI Agent

Ihuenyo **Settings → Advanced** na Gratis AI Agent na-enye nhazi ọkwa onye nchịkwa maka njikọta backend. Peeji a na-akọwa iziga feedback n’ihu, igodo ndị na-enye ọchụchọ, nhazi ọrụ Superdav a na-elekọta, njikwa Google Calendar, nhazi TextBee SMS, na ọkọlọtọ njirimara gbasara netwọkụ niile.

## Ịnweta Settings {#accessing-settings}

1. Na WordPress admin, gaa na **Gratis AI Agent → Settings**.
2. Pịa taabụ **Advanced**.

## Nhazi Endpoint Feedback {#feedback-endpoint-configuration}

Endpoint feedback na-anata arịrịọ POST sitere n’aka AI agent mgbe ọ bụla onye ọrụ nyefere feedback site na bọtịnụ thumbs-down, banner auto-prompt, ma ọ bụ iwu `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL nke na-anata nnyefe feedback dị ka arịrịọ HTTP POST nwere ahụ JSON. |
| **Feedback API Key** | bearer token a na-eziga na `Authorization` header nke arịrịọ feedback ọ bụla. Hapụ ya oghere ma ọ bụrụ na endpoint gị achọghị authentication. |

### Payload JSON A Na-atụ Anya {#expected-json-payload}

Endpoint feedback gị ga-anabata ahụ JSON nwere opekata mpe fields ndị a:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Fields ndị ọzọ nwere ike ịdị na payload dabere na ọnọdụ mkparịta ụka.

### Uru `triage_category` {#triagecategory-values}

Akụkụ triage AI na-etinye otu n’ime uru ndị a na `triage_category` tupu iziga payload n’ihu:

| Value | Meaning |
|---|---|
| `factual_error` | Assistant nyere ozi eziokwu na-ezighi ezi. |
| `unhelpful_answer` | Nzaghachi ahụ ziri ezi n’ụzọ teknụzụ mana ọ baghị uru. |
| `inappropriate_content` | Nzaghachi ahụ nwere ọdịnaya ekwesịghị igosi ndị ọrụ. |
| `other` | Feedback ahụ adabaghị na category a maara. |

### Authentication {#authentication}

Ọ bụrụ na endpoint gị chọrọ authentication, tinye field **Feedback API Key** ka ọ bụrụ bearer token gị. Agent na-eziga:

```
Authorization: Bearer <your-api-key>
```

Ọ bụrụ na field **Feedback API Key** tọgbọ chakoo, a gaghị eziga `Authorization` header.

### Igbanyụọ Nchịkọta Feedback {#disabling-feedback-collection}

Hapụ fields **Feedback Endpoint URL** na **Feedback API Key** abụọ ahụ oghere. Bọtịnụ thumbs-down na UI feedback ka na-apụta n’ihu ndị ọrụ, mana a naghị eziga nnyefe ọ bụla n’ọrụ mpụga.

## Brave Search API Key {#brave-search-api-key}

Ọzọkwa na taabụ **Advanced**, field **Brave Search API Key** na-eme ka ikike [Ọchụchọ Ịntanetị](../configuration/internet-search) rụọ ọrụ.

| Field | Description |
|---|---|
| **Brave Search API Key** | API key gị sitere na dashboard onye nrụpụta Brave Search. Achọrọ ya iji mee ka ọchụchọ ịntanetị rụọ ọrụ n’ime AI assistant. |

Akara field ahụ gụnyere njikọ a pụrụ ịpị gaa na peeji ndebanye aha Brave Search API. Hapụ oghere iji gbanyụọ ọchụchọ ịntanetị.

Lee [Ọchụchọ Ịntanetị](../configuration/internet-search) maka akwụkwọ nkọwa onye ọrụ ikpeazụ gbasara njirimara a.

## Ọrụ Superdav A Na-elekọta {#managed-superdav-service}

Superdav AI Agent v1.18.0 na-agbakwunye endpoints ọrụ Superdav a na-elekọta na provisioning njikọ akpaaka maka saịtị ndị akwadoro. Jiri njikwa ndị a mgbe saịtị gị kwesịrị ijikọ na provider a na-host kama endpoint ọrụ e haziri aka.

| Field | Description |
|---|---|
| **Managed Superdav Service** | Na-eme ka njikọ ọrụ Superdav a na-host rụọ ọrụ maka saịtị ndị akwadoro. |
| **Provision Connection** | Na-amalite provisioning endpoint na credential akpaaka. Jiri nke a mgbe ị kwadoro na saịtị ahụ kwesịrị iji provider a na-elekọta. |
| **Service Endpoint / Connection Status** | Na-egosi endpoint dị ugbu a ma ọ bụ ọnọdụ njikọ mgbe provisioning gachara. |

Mgbe provisioning gachara, chekwaa settings ma nyochaa ọnọdụ njikọ tupu ịdabere na usoro ọrụ managed-service. Ọ bụrụ na provisioning dara, nyochaa nduzi retry egosiri ma kwado na saịtị ahụ nwere ikike iji provider a na-host.

## Nhazi Google Calendar {#google-calendar-configuration}

Mgbe agbanyere njirimara kalenda Superdav AI Agent v1.18.0, agent nwere ike ịgụ kalenda ahaziri na nkọwa event. Ngwaọrụ kalenda bụ nke na-elekwasị anya n’ịgụ ma baa uru maka ncheta maara usoro oge, iso ndị bịara emume soro, na imekọrịta kọntaktị.

| Field | Description |
|---|---|
| **Google Calendar Credentials** | Na-echekwa credentials ma ọ bụ njikọ token achọrọ iji gụọ data kalenda. |
| **Calendar Selection** | Na-amachi kalenda ahaziri nke agent nwere ike nyochaa. |
| **Calendar Connection Status** | Na-akwado ma credentials dị ugbu a nwere ike ịgụ kalenda na events. |

Debe credentials kalenda ka ha bụrụ naanị kalenda agent chọrọ. Jikọọ ọzọ ma ọ bụ gbanwee credentials ma ọ bụrụ na status na-egosi token gwụrụla.

## Ịma Ọkwa TextBee SMS {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 na-agbakwunye TextBee dị ka provider SMS maka usoro ọrụ ịma ọkwa ahaziri. Ekwesịrị ijikọ ịma ọkwa SMS na ọnụ ụzọ nkwado mmadụ maka ozi ndị dị nro ma ọ bụ ndị na-eche ndị ọrụ ihu.

| Field | Description |
|---|---|
| **TextBee API Key** | Na-eme authentication arịrịọ gaa na provider TextBee SMS. |
| **TextBee Device / Sender** | Na-ahọrọ sender ma ọ bụ ngwaọrụ TextBee eji maka ozi na-apụ apụ, mgbe provider chọrọ ya. |
| **SMS Notifications Enabled** | Na-ekwe ka workflows akwadoro ziga ịma ọkwa ozi ederede. Hapụ ya ka ọ gbanyụọ iji gbochie iziga SMS. |

Ziga ozi nnwale naanị na nọmba onye nchịkwa nwe ya, mgbe ahụ kwado omume approval-gate tupu ịgbanye ncheta e zubere n’oge ma ọ bụ nke na-eche ndị bịara emume ihu.

## Ọkọlọtọ Njirimara {#feature-flags}

E webatakwara ya na v1.9.0, taabụ **Settings → Feature Flags** na-enye toggle switches maka ọrụ nhọrọ. Flag ọ bụla ma ọ bụ agbanyere ya ma ọ bụ agbanyụrụ ya n’ogo netwọkụ niile; enweghị override kwa saịtị n’oge a.

### Ịnweta Feature Flags {#accessing-feature-flags}

1. Na WordPress admin, gaa na **Gratis AI Agent → Settings**.
2. Pịa taabụ **Feature Flags**.

### Ọkọlọtọ Njikwa Nweta {#access-control-flags}

| Flag | Ndabere | Nkọwa |
|---|---|---|
| **Kpọchie naanị nye Administrators** | Off | Mgbe agbanyere ya, naanị ndị ọrụ nwere ọrụ `administrator` nwere ike imeghe panel nkata AI Agent. Ọrụ ndị ọzọ niile na-ahụ ozi "Kpọtụrụ administrator gị" kama. |
| **Kpọchie naanị nye Network Admins** | Off | Mgbe agbanyere ya na netwọkụ multisite, naanị Super Admins nwere ike iji agent ahụ. A na-egbochi admins saịtị n'otu n'otu. Ọ na-ebute ụzọ karịa "Kpọchie naanị nye Administrators" ma ọ bụrụ na agbanyere ha abụọ. |
| **Kwe ka Subscriber Nweta Ya** | Off | Mgbe agbanyere ya, ndị ọrụ nwere ọrụ `subscriber` nwere ike iji ihu nkata mana a na-amachi ha n'ikike ịgụ naanị (enweghị imepụta post ma ọ bụ mgbanwe ntọala). |
| **Gbanyụọ maka Ndị Na-abụghị Members** | Off | Na-ejikọta na ọnọdụ membership Ultimate Multisite. Mgbe agbanyere ya, a na-ezo nkata maka saịtị ndị na-enweghị membership dị ire. |

### Flag Akara Njirimara {#branding-flags}

| Flag | Ndabere | Nkọwa |
|---|---|---|
| **Zoo Footer "Powered by Gratis AI Agent"** | Off | Na-ewepụ ahịrị nkwupụta branding a na-egosi n'ala chat widget. A na-akwado ya maka mbipụta white-label. |
| **Aha Agent Omenala** | *(oghere)* | Na-eji aha ngwaahịa gị dochie akara ndabere "Gratis AI Agent" na header nkata na menu admin. Hapụ ya oghere iji jiri ndabere. |
| **Zoo Agent Picker** | Off | Mgbe agbanyere ya, ndị ọrụ enweghị ike ịgbanwe n'etiti agents ise e wuru n'ime ya. Agent dị ugbu a na-anọgide na nke a haziri dị ka ndabere na Settings → General. |
| **Jiri Akara Saịtị dị ka Avatar Nkata** | Off | Na-eji akara saịtị WordPress (edobere n'okpuru Appearance → Customize → Site Identity) dochie akara AI ndabere na header chat widget. |

### Flag Nchekwa Automation {#automation-safety-flags}

Superdav AI Agent v1.18.0 na-ewebata ọnụ ụzọ nkwado mmadụ na ndekọ ncheta maka ịrụ automation n'enweghị ihe egwu. Njikwa ndị a nwere ike ịpụta na feature flags ma ọ bụ ntọala automation dị elu, dabere na ngwugwu etinyere.

| Flag | Ndabere | Nkọwa |
|---|---|---|
| **Chọọ Nkwado Mmadụ** | Akwadoro ka ọ dị on | Na-akwụsịtụ automations dị mkpa ruo mgbe onye ọrụ enyere ikike nyochara ma kwado ihe a tụrụ aro ime. |
| **Mwepụ Ncheta Ugboro Abụọ** | On | Na-edekọ ncheta ezipụrụ ka nnwale ọzọ ma ọ bụ ọsọ a haziri oge ghara izipu ọkwa ugboro abụọ. |
| **Kwado Ngwaọrụ Kalenda** | Off ruo mgbe ahaziri ya | Na-ekwe ka agent gụọ kalenda Google na ihe omume ahaziri. |
| **Kwado Ọkwa SMS** | Off ruo mgbe ahaziri ya | Na-ekwe ka workflows akwadoro zipu ọkwa TextBee SMS mgbe echekwara credentials. |

### Itinye Mgbanwe {#applying-changes}

Pịa **Chekwaa Ntọala** mgbe ịgbanwechara flag ọ bụla. Mgbanwe na-amalite ozugbo — achọghị cache flush ma ọ bụ imegharịa plugin.
