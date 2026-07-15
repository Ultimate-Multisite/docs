---
title: Mga Setting sa Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Mga Setting sa Gratis AI Agent

Ang **Settings → Advanced** nga screen sa Gratis AI Agent naghatag og administrator-level nga configuration para sa backend integrations. Kini nga panid nagdokumento sa feedback forwarding, mga yawe sa search provider, setup sa managed Superdav service, mga kontrol sa Google Calendar, mga setting sa TextBee SMS, ug network-wide nga feature flags.

## Pag-access sa Settings {#accessing-settings}

1. Sa WordPress admin, adto sa **Gratis AI Agent → Settings**.
2. I-klik ang **Advanced** nga tab.

## Configuration sa Feedback Endpoint {#feedback-endpoint-configuration}

Ang feedback endpoint modawat og POST requests gikan sa AI agent matag higayon nga ang user mosumite og feedback pinaagi sa thumbs-down button, auto-prompt banner, o `/report-issue` nga command.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Ang URL nga modawat og mga feedback submission isip HTTP POST requests nga adunay JSON body. |
| **Feedback API Key** | Usa ka bearer token nga ipadala sa `Authorization` header sa matag feedback request. Pasagdi nga blangko kung ang imong endpoint wala magkinahanglan og authentication. |

### Gilaom nga JSON Payload {#expected-json-payload}

Ang imong feedback endpoint kinahanglan modawat og JSON body nga adunay labing menos sa mosunod nga mga field:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Mahimong adunay dugang nga mga field sa payload depende sa context sa panag-istorya.

### Mga Value sa `triage_category` {#triagecategory-values}

Ang AI triage layer motudlo og usa sa mosunod nga mga value sa `triage_category` sa wala pa i-forward ang payload:

| Value | Meaning |
|---|---|
| `factual_error` | Ang assistant naghatag og sayop nga factual nga impormasyon. |
| `unhelpful_answer` | Ang tubag teknikal nga sakto apan dili mapuslanon. |
| `inappropriate_content` | Ang tubag adunay sulod nga dili angay ipakita sa mga user. |
| `other` | Ang feedback wala motakdo sa nailhan nga category. |

### Authentication {#authentication}

Kung ang imong endpoint nagkinahanglan og authentication, ibutang ang **Feedback API Key** nga field sa imong bearer token. Ang agent mopadala og:

```
Authorization: Bearer <your-api-key>
```

Kung ang **Feedback API Key** nga field walay sulod, walay `Authorization` header nga ipadala.

### Pag-disable sa Feedback Collection {#disabling-feedback-collection}

Pasagdi nga blangko ang parehong **Feedback Endpoint URL** ug **Feedback API Key** nga mga field. Ang thumbs-down button ug feedback UI magpabiling makita sa mga user, apan ang mga submission dili i-forward sa bisan unsang external service.

## Brave Search API Key {#brave-search-api-key}

Anaa usab sa **Advanced** nga tab, ang **Brave Search API Key** nga field mopagana sa [Internet Search](../configuration/internet-search) nga abilidad.

| Field | Description |
|---|---|
| **Brave Search API Key** | Ang imong API key gikan sa Brave Search developer dashboard. Gikinahanglan aron mapagana ang internet search sa AI assistant. |

Ang label sa field naglakip og clickable nga link ngadto sa Brave Search API sign-up page. Pasagdi nga blangko aron i-disable ang internet search.

Tan-awa ang [Internet Search](../configuration/internet-search) para sa end-user documentation bahin niini nga feature.

## Managed Superdav Service {#managed-superdav-service}

Ang Superdav AI Agent v1.18.0 nagdugang og managed Superdav service endpoints ug automatic connection provisioning para sa gisuportahang mga site. Gamita kini nga mga kontrol kung ang imong site kinahanglan mokonekta sa hosted provider imbes sa manual nga gi-configure nga service endpoint.

| Field | Description |
|---|---|
| **Managed Superdav Service** | Mopagana sa hosted Superdav service connection para sa gisuportahang mga site. |
| **Provision Connection** | Mosugod sa automatic endpoint ug credential provisioning. Gamita kini human makumpirma nga ang site kinahanglan mogamit sa managed provider. |
| **Service Endpoint / Connection Status** | Nagpakita sa kasamtangang endpoint o kahimtang sa connection human sa provisioning. |

Human sa provisioning, i-save ang settings ug i-verify ang connection status sa wala pa mosalig sa managed-service workflows. Kung mapakyas ang provisioning, repasuhon ang gipakitang retry guidance ug kumpirmaha nga ang site adunay permiso sa paggamit sa hosted provider.

## Google Calendar Configuration {#google-calendar-configuration}

Kung ang calendar features sa Superdav AI Agent v1.18.0 gipagana, ang agent makabasa sa gi-configure nga mga calendar ug mga detalye sa event. Ang calendar tools nakapokus sa pagbasa ug mapuslanon para sa schedule-aware reminders, attendee follow-up, ug contact matching.

| Field | Description |
|---|---|
| **Google Calendar Credentials** | Motipig sa credentials o token connection nga gikinahanglan aron mabasa ang calendar data. |
| **Calendar Selection** | Molimit kung unsang gi-configure nga mga calendar ang mahimong susihon sa agent. |
| **Calendar Connection Status** | Mokumpirma kung ang kasamtangang credentials makabasa ba sa mga calendar ug events. |

Limitahi ang calendar credentials ngadto lamang sa mga calendar nga gikinahanglan sa agent. Ikonekta pag-usab o ilisi ang credentials kung ang status nagpakita og expired token.

## TextBee SMS Notifications {#textbee-sms-notifications}

Ang Superdav AI Agent v1.18.0 nagdugang sa TextBee isip SMS provider para sa gi-configure nga notification workflows. Ang SMS notifications kinahanglan ipares sa human approval gates para sa sensitibo o user-facing nga mga mensahe.

| Field | Description |
|---|---|
| **TextBee API Key** | Mo-authenticate sa mga request ngadto sa TextBee SMS provider. |
| **TextBee Device / Sender** | Mopili sa TextBee sender o device nga gamiton para sa outgoing messages, kung gikinahanglan sa provider. |
| **SMS Notifications Enabled** | Motugot sa approved workflows nga mopadala og text-message notifications. Pasagdi nga disabled aron mapugngan ang SMS sends. |

Pagpadala og test message ngadto lamang sa numero nga tag-iya sa administrator, unya kumpirmaha ang approval-gate behaviour sa wala pa paganahon ang scheduled o attendee-facing reminders.

## Feature Flags {#feature-flags}

Gipaila usab sa v1.9.0, ang **Settings → Feature Flags** nga tab naghatag og toggle switches para sa optional nga functionality. Ang matag flag mahimong enabled o disabled sa tibuok network; walay per-site override karong panahona.

### Pag-access sa Feature Flags {#accessing-feature-flags}

1. Sa WordPress admin, adto sa **Gratis AI Agent → Settings**.
2. I-klik ang **Feature Flags** nga tab.

### Access Control Flags {#access-control-flags}

| Flag | Default | Deskripsyon |
|---|---|---|
| **Limitahan sa Administrators** | Off | Kung gi-enable, ang mga tiggamit lang nga adunay `administrator` role ang makabukas sa AI Agent chat panel. Ang tanang ubang role makakita hinuon ug mensahe nga "Kontaka ang imong administrator". |
| **Limitahan sa Network Admins** | Off | Kung gi-enable sa usa ka multisite network, ang Super Admins lang ang makagamit sa agent. Ang tagsa-tagsa ka mga site admin gibabagan. Mas molabaw kini sa "Limitahan sa Administrators" kung pareho silang gi-enable. |
| **Tugoti ang Subscriber Access** | Off | Kung gi-enable, ang mga tiggamit nga adunay `subscriber` role makagamit sa chat interface apan limitado sa read-only nga mga abilidad (walay paghimo ug post o mga kausaban sa settings). |
| **I-disable para sa Dili-Miyembro** | Off | Nag-integrate sa Ultimate Multisite membership status. Kung gi-enable, gitago ang chat para sa mga site nga walay aktibong membership. |

### Mga Branding Flag {#branding-flags}

| Flag | Default | Deskripsyon |
|---|---|---|
| **Itago ang "Powered by Gratis AI Agent" Footer** | Off | Gitangtang ang branding attribution line nga gipakita sa ubos sa chat widget. Girekomenda para sa white-label nga mga deployment. |
| **Custom Agent Name** | *(blank)* | Gipulihan ang default nga "Gratis AI Agent" label sa chat header ug admin menu sa imong kaugalingong ngalan sa produkto. Pasagdi nga blank aron gamiton ang default. |
| **Itago ang Agent Picker** | Off | Kung gi-enable, ang mga tiggamit dili makabalhin tali sa lima ka built-in nga agents. Ang kasamtangang agent gitakda sa bisan unsang gi-configure isip default sa Settings → General. |
| **Gamita ang Site Icon isip Chat Avatar** | Off | Gipulihan ang default nga AI icon sa chat widget header sa WordPress site icon (gi-set ubos sa Appearance → Customize → Site Identity). |

### Mga Automation Safety Flag {#automation-safety-flags}

Ang Superdav AI Agent v1.18.0 nagpaila ug human approval gates ug reminder records para sa mas luwas nga automation runs. Kini nga mga kontrol mahimong makita sa feature flags o advanced automation settings, depende sa na-install nga package.

| Flag | Default | Deskripsyon |
|---|---|---|
| **Kinahanglan ang Human Approval** | Girekomenda nga on | Gipahunong ang sensitibo nga mga automation hangtod nga ang usa ka awtorisadong tiggamit mosusi ug mokumpirma sa gisugyot nga aksyon. |
| **Reminder Deduplication** | On | Nagtala sa gipadalang mga reminder aron ang retries o naka-iskedyul nga runs dili magpadala ug doble nga mga pahibalo. |
| **I-enable ang Calendar Tools** | Off hangtod ma-configure | Gitugotan ang agent nga mobasa sa gi-configure nga Google calendars ug events. |
| **I-enable ang SMS Notifications** | Off hangtod ma-configure | Gitugotan ang approved workflows nga magpadala ug TextBee SMS notifications human ma-save ang credentials. |

### Pag-apply sa mga Kausaban {#applying-changes}

I-click ang **Save Settings** human i-toggle ang bisan unsang flag. Ang mga kausaban moepekto dayon — walay gikinahanglan nga cache flush o plugin reactivation.
