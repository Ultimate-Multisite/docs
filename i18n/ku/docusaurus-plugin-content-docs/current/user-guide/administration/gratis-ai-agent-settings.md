---
title: Mîhengên Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Mîhengên Gratis AI Agent

Dîmendera **Settings → Advanced** di Gratis AI Agent de veavakirina asta rêveberiyê ji bo girêdanên backend pêşkêş dike. Ev rûpel şandina feedback, kilîdên dabînkerên lêgerînê, sazkirina xizmeta birêvebirî ya Superdav, kontrolên Google Calendar, mîhengên SMS yên TextBee, û alayên taybetmendiyan ên hemû torê belge dike.

## Gihîştina Settings {#accessing-settings}

1. Di rêveberiya WordPress de, biçin **Gratis AI Agent → Settings**.
2. Li ser tabloya **Advanced** bitikînin.

## Veavakirina Endpoint a Feedback {#feedback-endpoint-configuration}

Endpoint a feedback daxwazên POST ji AI agent werdigire dema ku bikarhêner bi riya bişkoka thumbs-down, pankarta auto-prompt, an fermana `/report-issue` feedback dişîne.

| Qad | Danasîn |
|---|---|
| **Feedback Endpoint URL** | URL ku şandinên feedback wek daxwazên HTTP POST bi laşek JSON werdigire. |
| **Feedback API Key** | bearer token ku di `Authorization` header a her daxwaza feedback de tê şandin. Heke endpoint a we piştrastkirinê nehewce dike, vala bihêlin. |

### Barkirina JSON a Tê Hêvîkirin {#expected-json-payload}

Endpoint a feedback a we divê laşek JSON bi herî kêm qadên jêrîn qebûl bike:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Li gorî çarçoveya axaftinê, dibe ku qadên din jî di payload de hebin.

### Nirxên `triage_category` {#triagecategory-values}

Qata triage a AI berî şandina payload yek ji nirxên jêrîn dide `triage_category`:

| Nirx | Wate |
|---|---|
| `factual_error` | Alîkar agahiyeke rastiyî ya şaş pêşkêş kir. |
| `unhelpful_answer` | Bersiv ji aliyê teknîkî ve rast bû lê bikêr nehat. |
| `inappropriate_content` | Bersiv naverokek hebû ku divê ji bikarhêneran re neyê nîşandan. |
| `other` | Feedback bi kategoriyeke naskirî re nehat hev. |

### Piştrastkirin {#authentication}

Heke endpoint a we piştrastkirinê hewce dike, qada **Feedback API Key** wek bearer token a xwe saz bikin. Agent dişîne:

```
Authorization: Bearer <your-api-key>
```

Heke qada **Feedback API Key** vala be, tu `Authorization` header nayê şandin.

### Neçalakirina Komkirina Feedback {#disabling-feedback-collection}

Her du qadên **Feedback Endpoint URL** û **Feedback API Key** vala bihêlin. Bişkoka thumbs-down û navrûya feedback ji bikarhêneran re xuya dimînin, lê şandin ji bo tu xizmeta derve nayê şandin.

## Brave Search API Key {#brave-search-api-key}

Herwiha li ser tabloya **Advanced**, qada **Brave Search API Key** şiyana [Lêgerîna Înternetê](../configuration/internet-search) çalak dike.

| Qad | Danasîn |
|---|---|
| **Brave Search API Key** | API key a we ji dashboard a pêşvebir a Brave Search. Ji bo çalakkirina lêgerîna înternetê di alîkarê AI de pêwîst e. |

Etîketa qadê girêdaneke ku dikare bê tikandin ji bo rûpela tomarkirina Brave Search API dihewîne. Ji bo neçalakirina lêgerîna înternetê vala bihêlin.

Ji bo belgeya bikarhênerê dawî li ser vê taybetmendiyê, binêrin [Lêgerîna Înternetê](../configuration/internet-search).

## Xizmeta Birêvebirî ya Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 endpointên xizmeta birêvebirî ya Superdav û dabînkirina girêdanê ya otomatîk ji bo malperên piştgirîkirî zêde dike. Dema ku divê malpera we li şûna endpoint a xizmetê ya bi destan veavakirî bi dabînkerê mêvandarkirî ve were girêdan, van kontrolan bikar bînin.

| Qad | Danasîn |
|---|---|
| **Managed Superdav Service** | Girêdana xizmeta Superdav a mêvandarkirî ji bo malperên piştgirîkirî çalak dike. |
| **Provision Connection** | Dabînkirina endpoint û agahiyên nasnameyê ya otomatîk dest pê dike. Piştî piştrastkirina ku divê malper dabînkerê birêvebirî bikar bîne, vê bikar bînin. |
| **Service Endpoint / Connection Status** | Piştî dabînkirinê endpoint a niha an rewşa girêdanê nîşan dide. |

Piştî dabînkirinê, mîhengan tomar bikin û berî piştrastkirina karûbarên xizmeta birêvebirî rewşa girêdanê kontrol bikin. Heke dabînkirin bi ser nekeve, rêberiya dubareceribandinê ya nîşandêr binirxînin û piştrast bikin ku malper destûr heye dabînkerê mêvandarkirî bikar bîne.

## Veavakirina Google Calendar {#google-calendar-configuration}

Dema ku taybetmendiyên salnameyê yên Superdav AI Agent v1.18.0 çalak bin, agent dikare salnameyên veavakirî û hûrgiliyên bûyeran bixwîne. Amûrên salnameyê xwendin-navend in û ji bo bibîrxistinên bi zanîna demjimêrê, şopandina beşdaran, û hevberkirina têkiliyan bikêr in.

| Qad | Danasîn |
|---|---|
| **Google Calendar Credentials** | Agahiyên nasnameyê an girêdana token a ji bo xwendina daneyên salnameyê pêwîst tomar dike. |
| **Calendar Selection** | Sînor dike ka agent dikare kîjan salnameyên veavakirî kontrol bike. |
| **Calendar Connection Status** | Piştrast dike ka agahiyên nasnameyê yên niha dikarin salname û bûyeran bixwînin an na. |

Agahiyên nasnameyê yên salnameyê tenê bi salnameyên ku agent pêwîst dike re sînordar bihêlin. Heke rewş nîşan dide ku token qediyaye, dîsa girêbidin an agahiyên nasnameyê biguherînin.

## Agahdarkirinên SMS yên TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 TextBee wek dabînkerê SMS ji bo rêxistinên agahdarkirinê yên veavakirî zêde dike. Agahdarkirinên SMS divê ji bo peyamên hestyar an yên ku bikarhêner dibînin bi dergehên pejirandina mirovî re werin hevkirin.

| Qad | Danasîn |
|---|---|
| **TextBee API Key** | Daxwazan ji bo dabînkerê SMS yê TextBee piştrast dike. |
| **TextBee Device / Sender** | Dema ku dabînker hewce dike, şandêr an amûra TextBee ya ji bo peyamên derketî tê hilbijartin. |
| **SMS Notifications Enabled** | Destûr dide rêxistinên pejirandî agahdarkirinên peyama nivîskî bişînin. Ji bo astengkirina şandina SMS neçalak bihêlin. |

Peyameke ceribandinê tenê ji hejmareke ku aîdî rêveber e re bişînin, paşê berî çalakkirina bibîrxistinên plansazkirî an yên ber bi beşdaran ve çûyî, tevgera dergehên pejirandinê piştrast bikin.

## Alayên Taybetmendiyan {#feature-flags}

Herwiha di v1.9.0 de hatine nasandin, tabloya **Settings → Feature Flags** guhartokên vekirin/girtinê ji bo karîgeriyên bijarte pêşkêş dike. Her ala an li hemû torê çalak e an neçalak e; di vê demê de tune ye ku ji bo her malperê cuda were sererastkirin.

### Gihîştina Feature Flags {#accessing-feature-flags}

1. Di rêveberiya WordPress de, biçin **Gratis AI Agent → Settings**.
2. Li ser tabloya **Feature Flags** bitikînin.

### Alayên Kontrola Gihîştinê {#access-control-flags}

| Nîşan | Standard | Şirove |
|---|---|---|
| **Bi tenê ji bo Administrators sînordar bike** | Off | Dema ku çalak be, tenê bikarhênerên bi rola `administrator` dikarin panela axaftina AI Agent vekin. Hemû rolên din li şûna wê peyama "Bi administratorê xwe re têkilî bike" dibînin. |
| **Bi tenê ji bo Network Admins sînordar bike** | Off | Dema ku li ser tora multisite çalak be, tenê Super Admins dikarin agent bikar bînin. Adminên malperên takekesî têne astengkirin. Heke herdu jî çalak bin, li ser "Bi tenê ji bo Administrators sînordar bike" pêşî digire. |
| **Destûra gihîştina Subscriber bide** | Off | Dema ku çalak be, bikarhênerên bi rola `subscriber` dikarin navrûya axaftinê bikar bînin, lê tenê bi şiyanên xwendinê ve têne sînordarkirin (afirandina nivîsê an guherandina mîhengan tune). |
| **Ji bo ne-Endaman neçalak bike** | Off | Bi rewşa endamtiya Ultimate Multisite re yek dibe. Dema ku çalak be, axaftin ji bo malperên ku endamtiyeke çalak tune ye tê veşartin. |

### Nîşanên Branding {#branding-flags}

| Nîşan | Standard | Şirove |
|---|---|---|
| **Footer-a "Powered by Gratis AI Agent" veşêre** | Off | Rêza danasîna brandingê ya ku li binê widget-a axaftinê tê nîşandan radike. Ji bo bicihkirinên white-label tê pêşniyarkirin. |
| **Navê Agent-ê Taybet** | *(vala)* | Nîşana standard a "Gratis AI Agent" di sernivîsa axaftinê û menuya admin de bi navê hilbera te diguherîne. Ji bo bikaranîna standard vala bihêle. |
| **Hilbijêrka Agent-ê veşêre** | Off | Dema ku çalak be, bikarhêner nikarin di navbera pênc agent-ên çêkirî de biguherin. Agent-a heyî li gorî ya ku wek standard di Settings → General de hatiye mîhengkirin sabît e. |
| **Îkona Malperê wek Avatar-a Axaftinê bikar bîne** | Off | Di sernivîsa widget-a axaftinê de îkona AI ya standard bi îkona malpera WordPress (di bin Appearance → Customize → Site Identity de tê mîhengkirin) diguherîne. |

### Nîşanên Ewlehiya Otomasyonê {#automation-safety-flags}

Superdav AI Agent v1.18.0 ji bo xebitandinên otomasyonê yên ewletir dergehên pejirandina mirovî û tomarên bîranînê dide destpêkirin. Ev kontrol dikarin li gorî pakêta sazkirî di nîşanên taybetmendiyan an mîhengên pêşketî yên otomasyonê de xuya bibin.

| Nîşan | Standard | Şirove |
|---|---|---|
| **Pejirandina Mirovî Pêwîst Bike** | Tê pêşniyarkirin ku çalak be | Otomasyonên hestyar rawestîne heta ku bikarhênerek destûrdar kiryara pêşniyarkirî binirxîne û piştrast bike. |
| **Dubare-nebûna Bîranînan** | On | Bîranînên şandî tomar dike da ku ceribandinên dubare an xebitandinên plansazkirî agahdariyên dubare neşînin. |
| **Amûrên Salnameyê Çalak Bike** | Off heta ku were mîhengkirin | Destûr dide agent ku salname û bûyerên Google yên mîhengkirî bixwîne. |
| **Agahdariyên SMS Çalak Bike** | Off heta ku were mîhengkirin | Destûr dide workflows-ên pejirandî ku piştî tomarkirina belgeyên nasnameyê agahdariyên TextBee SMS bişînin. |

### Sepandina Guherînan {#applying-changes}

Piştî guherandina her nîşanekê, li **Save Settings** bitikîne. Guherîn tavilê bandor dikin — paqijkirina cache an ji nû ve çalakkirina plugin pêwîst nîne.
