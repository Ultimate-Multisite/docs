---
title: Mga Setting ng Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Mga Setting ng Gratis AI Agent

Ang screen na **Settings → Advanced** sa Gratis AI Agent ay nagbibigay ng configuration na pang-administrator para sa mga backend integration. Idinodokumento ng pahinang ito ang pagpapasa ng feedback, mga key ng search provider, setup ng pinamamahalaang serbisyo ng Superdav, mga kontrol ng Google Calendar, mga setting ng TextBee SMS, at mga feature flag sa buong network.

## Pag-access sa Settings

1. Sa WordPress admin, pumunta sa **Gratis AI Agent → Settings**.
2. I-click ang tab na **Advanced**.

## Configuration ng Feedback Endpoint

Tumatanggap ang feedback endpoint ng mga POST request mula sa AI agent tuwing nagsusumite ng feedback ang isang user sa pamamagitan ng thumbs-down button, auto-prompt banner, o command na `/report-issue`.

| Field | Paglalarawan |
|---|---|
| **Feedback Endpoint URL** | Ang URL na tumatanggap ng mga isinumiteng feedback bilang mga HTTP POST request na may JSON body. |
| **Feedback API Key** | Isang bearer token na ipinapadala sa `Authorization` header ng bawat feedback request. Iwanang blangko kung hindi nangangailangan ng authentication ang iyong endpoint. |

### Inaasahang JSON Payload

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

### Mga Value ng `triage_category`

Nagtatalaga ang AI triage layer ng isa sa mga sumusunod na value sa `triage_category` bago ipasa ang payload:

| Value | Kahulugan |
|---|---|
| `factual_error` | Nagbigay ang assistant ng maling impormasyong batay sa katotohanan. |
| `unhelpful_answer` | Tama ang tugon sa teknikal na aspeto ngunit hindi kapaki-pakinabang. |
| `inappropriate_content` | Naglaman ang tugon ng content na hindi dapat ipakita sa mga user. |
| `other` | Hindi tumugma ang feedback sa isang kilalang kategorya. |

### Authentication

Kung nangangailangan ng authentication ang iyong endpoint, itakda ang field na **Feedback API Key** sa iyong bearer token. Ipinapadala ng agent ang:

```
Authorization: Bearer <your-api-key>
```

Kung walang laman ang field na **Feedback API Key**, walang ipinapadalang `Authorization` header.

### Pag-disable ng Pangongolekta ng Feedback

Iwanang blangko ang parehong field na **Feedback Endpoint URL** at **Feedback API Key**. Mananatiling nakikita ng mga user ang thumbs-down button at feedback UI, ngunit hindi ipapasa ang mga isinumite sa anumang external service.

## Brave Search API Key

Nasa tab ding **Advanced**, pinapagana ng field na **Brave Search API Key** ang kakayahang [Internet Search](../configuration/internet-search).

| Field | Paglalarawan |
|---|---|
| **Brave Search API Key** | Ang iyong API key mula sa Brave Search developer dashboard. Kinakailangan upang paganahin ang internet search sa AI assistant. |

May kasamang naki-click na link ang label ng field papunta sa pahina ng pag-sign up para sa Brave Search API. Iwanang blangko upang i-disable ang internet search.

Tingnan ang [Internet Search](../configuration/internet-search) para sa dokumentasyon ng end-user tungkol sa feature na ito.

## Pinamamahalaang Serbisyo ng Superdav

Nagdaragdag ang Superdav AI Agent v1.18.0 ng mga pinamamahalaang Superdav service endpoint at awtomatikong provisioning ng connection para sa mga suportadong site. Gamitin ang mga kontrol na ito kapag dapat kumonekta ang iyong site sa hosted provider sa halip na sa isang manu-manong naka-configure na service endpoint.

| Field | Paglalarawan |
|---|---|
| **Managed Superdav Service** | Pinapagana ang hosted Superdav service connection para sa mga suportadong site. |
| **Provision Connection** | Sinisimulan ang awtomatikong provisioning ng endpoint at credential. Gamitin ito pagkatapos kumpirmahing dapat gamitin ng site ang managed provider. |
| **Service Endpoint / Connection Status** | Ipinapakita ang kasalukuyang endpoint o estado ng connection pagkatapos ng provisioning. |

Pagkatapos ng provisioning, i-save ang settings at beripikahin ang estado ng connection bago umasa sa mga managed-service workflow. Kung nabigo ang provisioning, suriin ang ipinakitang gabay sa muling pagsubok at kumpirmahing may pahintulot ang site na gamitin ang hosted provider.

## Configuration ng Google Calendar

Kapag pinagana ang mga feature ng calendar ng Superdav AI Agent v1.18.0, mababasa ng agent ang mga naka-configure na calendar at detalye ng event. Ang mga tool ng calendar ay nakatuon sa pagbabasa at kapaki-pakinabang para sa mga paalalang may kaalaman sa iskedyul, follow-up sa attendee, at pagtutugma ng contact.

| Field | Paglalarawan |
|---|---|
| **Google Calendar Credentials** | Iniimbak ang mga credential o token connection na kinakailangan upang mabasa ang data ng calendar. |
| **Calendar Selection** | Nililimitahan kung aling mga naka-configure na calendar ang maaaring suriin ng agent. |
| **Calendar Connection Status** | Kinukumpirma kung nababasa ng kasalukuyang mga credential ang mga calendar at event. |

Panatilihing limitado ang calendar credentials sa mga calendar na kailangan ng agent. Muling kumonekta o mag-rotate ng credentials kung ipinapakita ng status na expired na ang token.

## Mga Notification sa TextBee SMS

Nagdaragdag ang Superdav AI Agent v1.18.0 ng TextBee bilang SMS provider para sa mga naka-configure na notification workflow. Dapat ipares ang mga SMS notification sa mga human approval gate para sa mga sensitibo o user-facing na mensahe.

| Field | Paglalarawan |
|---|---|
| **TextBee API Key** | Nag-a-authenticate ng mga request sa TextBee SMS provider. |
| **TextBee Device / Sender** | Pinipili ang TextBee sender o device na ginagamit para sa mga papalabas na mensahe, kapag kinakailangan ng provider. |
| **SMS Notifications Enabled** | Pinapayagan ang mga aprubadong workflow na magpadala ng mga text-message notification. Panatilihing disabled upang maiwasan ang pagpapadala ng SMS. |

Magpadala ng test message lamang sa numerong pagmamay-ari ng administrator, pagkatapos ay kumpirmahin ang asal ng approval-gate bago paganahin ang mga naka-iskedyul o attendee-facing na paalala.

## Mga Feature Flag

Ipinakilala rin sa v1.9.0, nagbibigay ang tab na **Settings → Feature Flags** ng mga toggle switch para sa opsyonal na functionality. Ang bawat flag ay enabled o disabled sa buong network; wala pang per-site override sa kasalukuyan.

### Pag-access sa Mga Feature Flag

1. Sa WordPress admin, pumunta sa **Gratis AI Agent → Settings**.
2. I-click ang tab na **Feature Flags**.

### Mga Access Control Flag

| Flag | Default | Paglalarawan |
|---|---|---|
| **Limitahan sa Administrators** | Off | Kapag naka-enable, tanging mga user na may `administrator` na role ang makakapagbukas ng AI Agent chat panel. Ang lahat ng ibang role ay makakakita sa halip ng mensaheng "Makipag-ugnayan sa iyong administrator." |
| **Limitahan sa Network Admins** | Off | Kapag naka-enable sa isang multisite network, tanging Super Admins ang makakagamit ng agent. Hinaharangan ang mga admin ng indibidwal na site. Mas nangingibabaw ito kaysa sa "Limitahan sa Administrators" kung parehong naka-enable. |
| **Pahintulutan ang Subscriber Access** | Off | Kapag naka-enable, ang mga user na may `subscriber` na role ay makakagamit ng chat interface ngunit limitado sa read-only na kakayahan (walang paggawa ng post o pagbabago ng settings). |
| **I-disable para sa Mga Hindi Miyembro** | Off | Nakikipag-integrate sa status ng membership ng Ultimate Multisite. Kapag naka-enable, nakatago ang chat para sa mga site na walang aktibong membership. |

### Mga Branding Flag

| Flag | Default | Paglalarawan |
|---|---|---|
| **Itago ang "Powered by Gratis AI Agent" na Footer** | Off | Tinatanggal ang linyang attribution ng branding na ipinapakita sa ibaba ng chat widget. Inirerekomenda para sa mga white-label deployment. |
| **Custom na Pangalan ng Agent** | *(blangko)* | Pinapalitan ang default na label na "Gratis AI Agent" sa chat header at admin menu ng sarili mong pangalan ng produkto. Iwang blangko upang gamitin ang default. |
| **Itago ang Agent Picker** | Off | Kapag naka-enable, hindi makakapagpalipat-lipat ang mga user sa limang built-in na agent. Ang kasalukuyang agent ay nakapirmi sa anumang naka-configure bilang default sa Settings → General. |
| **Gamitin ang Site Icon bilang Chat Avatar** | Off | Pinapalitan ang default na AI icon sa header ng chat widget ng WordPress site icon (itinakda sa ilalim ng Appearance → Customize → Site Identity). |

### Mga Flag sa Kaligtasan ng Automation

Ang Superdav AI Agent v1.18.0 ay nagpapakilala ng mga human approval gate at reminder record para sa mas ligtas na mga automation run. Maaaring lumitaw ang mga kontrol na ito sa feature flags o advanced automation settings, depende sa naka-install na package.

| Flag | Default | Paglalarawan |
|---|---|---|
| **Kailangan ng Human Approval** | Inirerekomendang naka-on | Pinapahinto muna ang mga sensitibong automation hanggang masuri at makumpirma ng isang awtorisadong user ang iminungkahing aksyon. |
| **Reminder Deduplication** | On | Nagtatala ng mga naipadalang reminder upang ang mga retry o naka-schedule na run ay hindi magpadala ng dobleng notification. |
| **I-enable ang Calendar Tools** | Off hanggang ma-configure | Pinapayagan ang agent na basahin ang mga naka-configure na Google calendar at event. |
| **I-enable ang SMS Notifications** | Off hanggang ma-configure | Pinapayagan ang mga naaprubahang workflow na magpadala ng TextBee SMS notification pagkatapos ma-save ang credentials. |

### Paglalapat ng Mga Pagbabago

I-click ang **Save Settings** pagkatapos i-toggle ang anumang flag. Agad na magkakabisa ang mga pagbabago — hindi kailangan ng cache flush o muling pag-activate ng plugin.
