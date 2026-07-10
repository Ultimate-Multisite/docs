---
title: Mga Setting ng Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Mga Setting ng Gratis AI Agent {#gratis-ai-agent-settings}

Ang screen na **Settings → Advanced** sa Gratis AI Agent ay nagbibigay ng pang-administrator na configuration para sa mga backend integration. Idinodokumento ng pahinang ito ang pagpapasa ng feedback, mga key ng search provider, setup ng pinamamahalaang Superdav service, mga kontrol ng Google Calendar, mga setting ng TextBee SMS, at mga feature flag sa buong network.

## Pag-access sa Settings {#accessing-settings}

1. Sa WordPress admin, pumunta sa **Gratis AI Agent → Settings**.
2. I-click ang tab na **Advanced**.

## Configuration ng Feedback Endpoint {#feedback-endpoint-configuration}

Tumatanggap ang feedback endpoint ng mga POST request mula sa AI agent tuwing nagsusumite ng feedback ang isang user sa pamamagitan ng thumbs-down button, auto-prompt banner, o command na `/report-issue`.

| Field | Paglalarawan |
|---|---|
| **Feedback Endpoint URL** | Ang URL na tumatanggap ng mga feedback submission bilang mga HTTP POST request na may JSON body. |
| **Feedback API Key** | Isang bearer token na ipinapadala sa `Authorization` header ng bawat feedback request. Iwanang blangko kung hindi nangangailangan ng authentication ang iyong endpoint. |

### Inaasahang JSON Payload {#expected-json-payload}

Dapat tumanggap ang iyong feedback endpoint ng JSON body na may hindi bababa sa mga sumusunod na field:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Maaaring may karagdagang mga field sa payload depende sa konteksto ng pag-uusap.

### Mga Value ng `triage_category` {#triagecategory-values}

Nagtatalaga ang AI triage layer ng isa sa mga sumusunod na value sa `triage_category` bago ipasa ang payload:

| Value | Kahulugan |
|---|---|
| `factual_error` | Nagbigay ang assistant ng maling impormasyong factual. |
| `unhelpful_answer` | Tama sa teknikal na aspeto ang tugon ngunit hindi kapaki-pakinabang. |
| `inappropriate_content` | Naglaman ang tugon ng content na hindi dapat ipakita sa mga user. |
| `other` | Hindi tumugma ang feedback sa isang kilalang kategorya. |

### Authentication {#authentication}

Kung nangangailangan ng authentication ang iyong endpoint, itakda ang field na **Feedback API Key** sa iyong bearer token. Ipinapadala ng agent ang:

```
Authorization: Bearer <your-api-key>
```

Kung walang laman ang field na **Feedback API Key**, walang ipinapadalang `Authorization` header.

### Pag-disable ng Pagkolekta ng Feedback {#disabling-feedback-collection}

Iwanang blangko ang parehong field na **Feedback Endpoint URL** at **Feedback API Key**. Mananatiling nakikita ng mga user ang thumbs-down button at feedback UI, ngunit hindi ipapasa ang mga submission sa anumang panlabas na service.

## Brave Search API Key {#brave-search-api-key}

Nasa tab ding **Advanced**, pinapagana ng field na **Brave Search API Key** ang kakayahang [Internet Search](../configuration/internet-search).

| Field | Paglalarawan |
|---|---|
| **Brave Search API Key** | Ang iyong API key mula sa developer dashboard ng Brave Search. Kinakailangan upang paganahin ang internet search sa AI assistant. |

Kasama sa label ng field ang isang clickable na link papunta sa sign-up page ng Brave Search API. Iwanang blangko upang i-disable ang internet search.

Tingnan ang [Internet Search](../configuration/internet-search) para sa dokumentasyon ng end-user tungkol sa feature na ito.

## Pinamamahalaang Superdav Service {#managed-superdav-service}

Nagdaragdag ang Superdav AI Agent v1.18.0 ng mga pinamamahalaang Superdav service endpoint at awtomatikong connection provisioning para sa mga sinusuportahang site. Gamitin ang mga kontrol na ito kapag dapat kumonekta ang iyong site sa hosted provider sa halip na sa isang manu-manong naka-configure na service endpoint.

| Field | Paglalarawan |
|---|---|
| **Managed Superdav Service** | Pinapagana ang hosted Superdav service connection para sa mga sinusuportahang site. |
| **Provision Connection** | Sinisimulan ang awtomatikong endpoint at credential provisioning. Gamitin ito pagkatapos kumpirmahing dapat gamitin ng site ang pinamamahalaang provider. |
| **Service Endpoint / Connection Status** | Ipinapakita ang kasalukuyang endpoint o estado ng connection pagkatapos ng provisioning. |

Pagkatapos ng provisioning, i-save ang settings at beripikahin ang connection status bago umasa sa mga workflow ng pinamamahalaang service. Kung mabigo ang provisioning, suriin ang ipinapakitang gabay sa muling pagsubok at kumpirmahing may pahintulot ang site na gamitin ang hosted provider.

## Configuration ng Google Calendar {#google-calendar-configuration}

Kapag naka-enable ang mga feature ng calendar sa Superdav AI Agent v1.18.0, mababasa ng agent ang mga naka-configure na calendar at detalye ng event. Ang mga tool ng calendar ay nakatuon sa pagbabasa at kapaki-pakinabang para sa mga paalalang may kamalayan sa iskedyul, follow-up sa attendee, at pagtutugma ng contact.

| Field | Paglalarawan |
|---|---|
| **Google Calendar Credentials** | Iniimbak ang mga credential o token connection na kinakailangan upang mabasa ang data ng calendar. |
| **Calendar Selection** | Nililimitahan kung aling mga naka-configure na calendar ang maaaring suriin ng agent. |
| **Calendar Connection Status** | Kinukumpirma kung mababasa ng kasalukuyang mga credential ang mga calendar at event. |

Panatilihing limitado ang mga credential ng calendar sa mga calendar na kailangan ng agent. Muling kumonekta o mag-rotate ng mga credential kung ipinapahiwatig ng status na expired ang token.

## Mga Notification sa TextBee SMS {#textbee-sms-notifications}

Nagdaragdag ang Superdav AI Agent v1.18.0 ng TextBee bilang SMS provider para sa mga naka-configure na notification workflow. Dapat ipares ang mga SMS notification sa mga gate ng pag-apruba ng tao para sa mga sensitibo o nakaharap sa user na mensahe.

| Field | Paglalarawan |
|---|---|
| **TextBee API Key** | Nag-a-authenticate ng mga request sa TextBee SMS provider. |
| **TextBee Device / Sender** | Pinipili ang TextBee sender o device na gagamitin para sa mga papalabas na mensahe, kapag kinakailangan ng provider. |
| **SMS Notifications Enabled** | Pinapayagan ang mga naaprubahang workflow na magpadala ng mga notification na text message. Iwanang disabled upang maiwasan ang pagpapadala ng SMS. |

Magpadala ng test message lamang sa numerong pag-aari ng administrator, pagkatapos ay kumpirmahin ang gawi ng approval-gate bago i-enable ang mga naka-iskedyul o nakaharap sa attendee na paalala.

## Mga Feature Flag {#feature-flags}

Ipinakilala rin sa v1.9.0, ang tab na **Settings → Feature Flags** ay nagbibigay ng mga toggle switch para sa opsyonal na functionality. Ang bawat flag ay alinman sa enabled o disabled sa buong network; walang per-site override sa ngayon.

### Pag-access sa Mga Feature Flag {#accessing-feature-flags}

1. Sa WordPress admin, pumunta sa **Gratis AI Agent → Settings**.
2. I-click ang tab na **Feature Flags**.

### Mga Flag ng Access Control {#access-control-flags}

| Flag | Default | Paglalarawan |
|---|---|---|
| **Limitahan sa Administrators** | Off | Kapag naka-enable, tanging mga user na may `administrator` role lang ang makakapagbukas ng panel ng chat ng AI Agent. Ang lahat ng ibang role ay makakakita na lang ng mensaheng "Makipag-ugnayan sa iyong administrator." |
| **Limitahan sa Network Admins** | Off | Kapag naka-enable sa isang multisite network, tanging Super Admins lang ang makakagamit ng agent. Naka-block ang mga admin ng indibidwal na site. Mas inuuna ito kaysa "Limitahan sa Administrators" kung parehong naka-enable. |
| **Payagan ang Access ng Subscriber** | Off | Kapag naka-enable, magagamit ng mga user na may `subscriber` role ang chat interface ngunit limitado sila sa read-only na mga kakayahan (walang paggawa ng post o pagbabago ng mga setting). |
| **I-disable para sa Hindi Miyembro** | Off | Sumasama sa status ng membership ng Ultimate Multisite. Kapag naka-enable, nakatago ang chat para sa mga site na walang aktibong membership. |

### Mga Flag sa Branding {#branding-flags}

| Flag | Default | Paglalarawan |
|---|---|---|
| **Itago ang Footer na "Powered by Gratis AI Agent"** | Off | Inaalis ang linya ng attribution ng branding na ipinapakita sa ibaba ng chat widget. Inirerekomenda para sa mga deployment na white-label. |
| **Custom na Pangalan ng Agent** | *(blangko)* | Pinapalitan ang default na label na "Gratis AI Agent" sa header ng chat at admin menu ng sarili mong pangalan ng produkto. Iwanang blangko para gamitin ang default. |
| **Itago ang Agent Picker** | Off | Kapag naka-enable, hindi makakalipat ang mga user sa pagitan ng limang built-in na agent. Ang kasalukuyang agent ay naka-fix sa anumang naka-configure bilang default sa Settings → General. |
| **Gamitin ang Icon ng Site bilang Chat Avatar** | Off | Pinapalitan ang default na AI icon sa header ng chat widget ng icon ng WordPress site (itinakda sa Appearance → Customize → Site Identity). |

### Mga Flag sa Kaligtasan ng Automation {#automation-safety-flags}

Ipinapakilala ng Superdav AI Agent v1.18.0 ang mga gate para sa pag-apruba ng tao at mga tala ng paalala para sa mas ligtas na pagpapatakbo ng automation. Maaaring lumitaw ang mga kontrol na ito sa mga feature flag o advanced automation settings, depende sa naka-install na package.

| Flag | Default | Paglalarawan |
|---|---|---|
| **Kailangan ng Pag-apruba ng Tao** | Inirerekomendang naka-on | Pansamantalang hinihinto ang sensitibong mga automation hanggang marepaso at makumpirma ng awtorisadong user ang iminungkahing aksyon. |
| **Pag-deduplicate ng Paalala** | On | Itinatala ang mga naipadalang paalala upang hindi magpadala ng dobleng notification ang mga retry o naka-schedule na pagpapatakbo. |
| **I-enable ang Calendar Tools** | Off hanggang ma-configure | Pinapayagan ang agent na basahin ang mga naka-configure na Google calendar at event. |
| **I-enable ang Mga SMS Notification** | Off hanggang ma-configure | Pinapayagan ang mga naaprubahang workflow na magpadala ng TextBee SMS notification matapos ma-save ang credentials. |

### Paglalapat ng mga Pagbabago {#applying-changes}

I-click ang **Save Settings** pagkatapos i-toggle ang anumang flag. Agad na magkakabisa ang mga pagbabago — hindi kailangan ng cache flush o muling pag-activate ng plugin.
