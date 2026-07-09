---
title: Gratis AI Agent Marongero
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Settings

Chidzitiro che **Settings → Advanced** mu Gratis AI Agent chinopa kugadzirisa kwechikamu chemutungamiriri kwekubatanidzwa kwebackend. Peji rino rinotsanangura kutumira feedback, makiyi evanopa kutsvaga, kugadzwa kwesevhisi yeSuperdav inotarisirwa, zvidzoro zveGoogle Calendar, marongero eTextBee SMS, uye feature flags dzinoshanda panetwork yose.

## Kuwana Settings

1. MuWordPress admin, enda ku **Gratis AI Agent → Settings**.
2. Dzvanya tab ye **Advanced**.

## Kugadzirisa Feedback Endpoint

Feedback endpoint inogamuchira zvikumbiro zvePOST kubva kuAI agent pese apo mushandisi paanotumira feedback kuburikidza nebhatani rethumbs-down, auto-prompt banner, kana murairo we`/report-issue`.

| Field | Tsananguro |
|---|---|
| **Feedback Endpoint URL** | URL inogamuchira kutumirwa kwefeedback sezvikumbiro zveHTTP POST zvine muviri weJSON. |
| **Feedback API Key** | bearer token inotumirwa mu`Authorization` header yechikumbiro chimwe nechimwe chefeedback. Siya chisina chinhu kana endpoint yako isingadi authentication. |

### JSON Payload Inotarisirwa

Feedback endpoint yako inofanira kugamuchira muviri weJSON une minda inotevera zvirinani:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Mimwe minda inogona kuvapo mupayload zvichienderana nemamiriro ehurukuro.

### Kukosha kwe`triage_category`

Chikamu cheAI triage chinopa chimwe chezvikosha zvinotevera ku`triage_category` chisati chatumira payload mberi:

| Kukosha | Zvinoreva |
|---|---|
| `factual_error` | Mubatsiri akapa ruzivo rwechokwadi rusiri rwakarurama. |
| `unhelpful_answer` | Mhinduro yakanga yakarurama pahunyanzvi asi isingabatsiri. |
| `inappropriate_content` | Mhinduro yaiva nezvirimo zvisingafaniri kuratidzwa kuvashandisi. |
| `other` | Feedback haina kuenderana nechikamu chinozivikanwa. |

### Authentication

Kana endpoint yako ichida authentication, isa munda we **Feedback API Key** kubearer token yako. Agent inotumira:

```
Authorization: Bearer <your-api-key>
```

Kana munda we **Feedback API Key** usina chinhu, hapana `Authorization` header inotumirwa.

### Kudzima Kuunganidzwa kweFeedback

Siya minda ye **Feedback Endpoint URL** ne **Feedback API Key** isina chinhu. Bhatani rethumbs-down nefeedback UI zvinoramba zvichionekwa kuvashandisi, asi kutumirwa hakupfuurirwi kune chero sevhisi yekunze.

## Brave Search API Key

Zvakare patab ye **Advanced**, munda we **Brave Search API Key** unogonesa kugona kwe[Internet Search](../configuration/internet-search).

| Field | Tsananguro |
|---|---|
| **Brave Search API Key** | API key yako kubva kuBrave Search developer dashboard. Inodiwa kuti ugonese kutsvaga paindaneti muAI assistant. |

Label yemunda inosanganisira link inodzvanyiwa inoenda kupeji rekunyoresa reBrave Search API. Siya chisina chinhu kuti udzime kutsvaga paindaneti.

Ona [Internet Search](../configuration/internet-search) kuti uwane zvinyorwa zvevashandisi vekupedzisira pamusoro pechinhu ichi.

## Managed Superdav Service

Superdav AI Agent v1.18.0 inowedzera managed Superdav service endpoints nekupihwa kwekubatana otomatiki kumasaiti anotsigirwa. Shandisa zvidzoro izvi kana saiti yako ichifanira kubatana kumupi anogamuchirwa panzvimbo pe service endpoint yakagadziriswa nemaoko.

| Field | Tsananguro |
|---|---|
| **Managed Superdav Service** | Inogonesa kubatana kweSuperdav service inogamuchirwa kumasaiti anotsigirwa. |
| **Provision Connection** | Inotanga kupihwa kweendpoint nezvitupa otomatiki. Shandisa izvi mushure mekusimbisa kuti saiti inofanira kushandisa mupi anotarisirwa. |
| **Service Endpoint / Connection Status** | Inoratidza endpoint iripo kana mamiriro ekubatana mushure mekupihwa. |

Mushure mekupihwa, chengetedza settings uye simbisa mamiriro ekubatana usati wavimba nema workflow e managed-service. Kana kupihwa kukatadza, ongorora nhungamiro yekuedzazve inoratidzwa uye simbisa kuti saiti ine mvumo yekushandisa mupi anogamuchirwa.

## Kugadzirisa Google Calendar

Kana maficha ecalendar eSuperdav AI Agent v1.18.0 akagoneswa, agent inogona kuverenga makarenda akagadziriswa uye ruzivo rwezviitiko. Zvishandiso zveCalendar zvakanyanya kutarisana nekuverenga uye zvinobatsira kuzviyeuchidzo zvinoziva purogiramu, kutevera vanopinda, uye kuenzanisa vanobatika.

| Field | Tsananguro |
|---|---|
| **Google Calendar Credentials** | Inochengeta credentials kana token connection inodiwa kuverenga data rekarenda. |
| **Calendar Selection** | Inoganhurira kuti ndeapi makarenda akagadziriswa anogona kuongororwa neagent. |
| **Calendar Connection Status** | Inosimbisa kana credentials dzazvino dzichikwanisa kuverenga makarenda nezviitiko. |

Chengeta calendar credentials dzakaganhurirwa kumakarenda anodikanwa neagent. Batanidzazve kana kutenderedza credentials kana status ichiratidza token yapera nguva.

## TextBee SMS Notifications

Superdav AI Agent v1.18.0 inowedzera TextBee semupi weSMS wema workflow ezviziviso akagadziriswa. SMS notifications dzinofanira kubatanidzwa nemagedhi ekubvumidzwa nemunhu pamashoko ane nyaya dzakachengeteka kana anoonekwa nevashandisi.

| Field | Tsananguro |
|---|---|
| **TextBee API Key** | Inoita authentication yezvikumbiro kuTextBee SMS provider. |
| **TextBee Device / Sender** | Inosarudza TextBee sender kana device inoshandiswa kumameseji anobuda, kana zvichidiwa nemupi. |
| **SMS Notifications Enabled** | Inobvumira ma workflow akatenderwa kutumira zviziviso zvemameseji eSMS. Siya zvakadzimwa kudzivirira kutumirwa kweSMS. |

Tumira meseji yekuyedza kunhamba iri yemutungamiriri chete, wobva wasimbisa maitiro egate rekubvumidza usati wagonesa zviyeuchidzo zvakarongwa kana zvinoonekwa nevanopinda.

## Feature Flags

Zvakare zvakaunzwa muv1.9.0, tab ye **Settings → Feature Flags** inopa maswitch ekubatidza nekudzima kwekushanda kunosarudzika. Flag imwe neimwe ingave yakagoneswa kana yakadzimwa panetwork yose; hapana override yepasaiti imwe panguva ino.

### Kuwana Feature Flags

1. MuWordPress admin, enda ku **Gratis AI Agent → Settings**.
2. Dzvanya tab ye **Feature Flags**.

### Access Control Flags

| Mureza | Default | Tsananguro |
|---|---|---|
| **Ganhurira kuVatariri** | Off | Kana zvagoneswa, vashandisi vane basa re`administrator` chete ndivo vanogona kuvhura panel yekutaura yeAI Agent. Mamwe mabasa ese anoona meseji inoti "Bata mutariri wako" pachinzvimbo. |
| **Ganhurira kuNetwork Admins** | Off | Kana zvagoneswa pa multisite network, Super Admins chete ndivo vanogona kushandisa agent. Vatariri vesaiti imwe neimwe vanovharirwa. Zvinotora nzvimbo yepamusoro pane "Ganhurira kuVatariri" kana zvese zvagoneswa. |
| **Bvumira Kupinda kweSubscriber** | Off | Kana zvagoneswa, vashandisi vane basa re`subscriber` vanogona kushandisa chat interface asi vanoganhurirwa kune kugona kwekuverenga chete (hapana kugadzira zvinyorwa kana kuchinja marongero). |
| **Dzima kuVasiri Nhengo** | Off | Inobatanidzwa neUltimate Multisite membership status. Kana zvagoneswa, chat inovanzwa kumasaiti asina membership inoshanda. |

### Mureza yeBranding

| Mureza | Default | Tsananguro |
|---|---|---|
| **Vanza Footer ye"Powered by Gratis AI Agent"** | Off | Inobvisa mutsara wekuzivisa branding unoratidzwa pazasi pechat widget. Zvinokurudzirwa pakushandisa kwewhite-label. |
| **Zita reAgent Rakagadziridzwa** | *(isina chinhu)* | Inotsiva label ye"Gratis AI Agent" iripo nekutanga muheader yechat uye admin menu nezita rechigadzirwa chako. Siya isina chinhu kuti ushandise default. |
| **Vanza Agent Picker** | Off | Kana zvagoneswa, vashandisi havagoni kuchinja pakati peagents shanu dzakavakirwa-mukati. Agent yazvino inosungirirwa kune chero yakagadziriswa se default muSettings → General. |
| **Shandisa Icon yeSaiti seChat Avatar** | Off | Inotsiva icon yeAI iripo nekutanga muheader yechat widget neWordPress site icon (yakaiswa pasi peAppearance → Customize → Site Identity). |

### Mureza yeKuchengetedzwa kweOtomatiki

Superdav AI Agent v1.18.0 inounza magedhi ekubvumidzwa nemunhu uye marekodhi ezviyeuchidzo kuitira kumhanya kweotomatiki kwakachengeteka. Zvidzori izvi zvinogona kuoneka mu feature flags kana advanced automation settings, zvichienderana nepackage yakaiswa.

| Mureza | Default | Tsananguro |
|---|---|---|
| **Dai Kubvumidzwa neMunhu** | Zvinokurudzirwa kuvhurwa | Inombomisa maautomation ane njodzi kusvikira mushandisi ane mvumo aongorora uye asimbisa chiito chakarongwa. |
| **Kubvisa Kudzokororwa kweZviyeuchidzo** | On | Inorekodha zviyeuchidzo zvakatumirwa kuitira kuti kuyedzazve kana kumhanya kwakarongwa kusatumire zviziviso zvakapetwa. |
| **Gonesa Calendar Tools** | Off kusvikira zvagadziriswa | Inobvumira agent kuverenga maGoogle calendars akagadziriswa nezviitiko. |
| **Gonesa SMS Notifications** | Off kusvikira zvagadziriswa | Inobvumira workflows dzakabvumidzwa kutumira TextBee SMS notifications mushure mekunge magwaro ekupinda achengetwa. |

### Kushandisa Shanduko

Dzvanya **Save Settings** mushure mekushandura chero mureza. Shanduko dzinotanga kushanda pakarepo — hapana cache flush kana plugin reactivation inodiwa.
