---
title: Saitunan Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Saitunan Gratis AI Agent

Allon **Settings → Advanced** a cikin Gratis AI Agent yana ba da daidaitawar matakin mai gudanarwa don haɗin backend. Wannan shafi yana rubuta tura feedback, maɓallan masu samar da bincike, saitin sabis na Superdav da ake sarrafawa, sarrafawar Google Calendar, saitunan TextBee SMS, da feature flags na dukkan network.

## Shiga Saituna

1. A cikin admin na WordPress, je zuwa **Gratis AI Agent → Settings**.
2. Danna shafin **Advanced**.

## Daidaitawar Feedback Endpoint

Feedback endpoint yana karɓar buƙatun POST daga AI agent duk lokacin da mai amfani ya aika feedback ta maɓallin thumbs-down, banner na auto-prompt, ko umarnin `/report-issue`.

| Fili | Bayani |
|---|---|
| **Feedback Endpoint URL** | URL da ke karɓar aika feedback a matsayin buƙatun HTTP POST tare da jikin JSON. |
| **Feedback API Key** | bearer token da ake aikawa a cikin `Authorization` header na kowace buƙatar feedback. Bar shi fanko idan endpoint ɗinka ba ya buƙatar tantancewa. |

### JSON Payload da Ake Sa Ran Samu

Feedback endpoint ɗinka dole ne ya karɓi jikin JSON tare da aƙalla filaye masu zuwa:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Ƙarin filaye na iya kasancewa a cikin payload gwargwadon mahallin tattaunawa.

### Darajojin `triage_category`

Matakin triage na AI yana sanya ɗaya daga cikin darajoji masu zuwa ga `triage_category` kafin tura payload:

| Daraja | Ma’ana |
|---|---|
| `factual_error` | Mataimakin ya bayar da bayanin gaskiya da ba daidai ba. |
| `unhelpful_answer` | Amsar daidai ce a fasaha amma ba ta da amfani. |
| `inappropriate_content` | Amsar ta ƙunshi abun ciki da bai kamata a nuna wa masu amfani ba. |
| `other` | Feedback ɗin bai dace da sanannen rukuni ba. |

### Tantancewa

Idan endpoint ɗinka yana buƙatar tantancewa, saita filin **Feedback API Key** zuwa bearer token ɗinka. Agent ɗin yana aikawa:

```
Authorization: Bearer <your-api-key>
```

Idan filin **Feedback API Key** fanko ne, ba a aika `Authorization` header ba.

### Kashe Tattara Feedback

Bar filayen **Feedback Endpoint URL** da **Feedback API Key** duka fanko. Maɓallin thumbs-down da UI na feedback suna ci gaba da bayyana ga masu amfani, amma ba a tura abubuwan da aka aika zuwa kowane sabis na waje.

## Brave Search API Key

Haka kuma a shafin **Advanced**, filin **Brave Search API Key** yana kunna ikon [Binciken Intanet](../configuration/internet-search).

| Fili | Bayani |
|---|---|
| **Brave Search API Key** | API key ɗinka daga dashboard na masu haɓaka Brave Search. Ana buƙata don kunna binciken intanet a cikin mataimakin AI. |

Lakabin filin yana ƙunshe da hanyar haɗi da za a iya dannawa zuwa shafin rajistar Brave Search API. Bar shi fanko don kashe binciken intanet.

Duba [Binciken Intanet](../configuration/internet-search) don takardun masu amfani na ƙarshe game da wannan fasali.

## Sabis na Superdav da Ake Sarrafawa

Superdav AI Agent v1.18.0 yana ƙara endpoints na sabis na Superdav da ake sarrafawa da samar da haɗi ta atomatik ga shafuka masu tallafi. Yi amfani da waɗannan sarrafawa lokacin da shafinka ya kamata ya haɗu da hosted provider maimakon endpoint na sabis da aka daidaita da hannu.

| Fili | Bayani |
|---|---|
| **Managed Superdav Service** | Yana kunna haɗin hosted Superdav service ga shafuka masu tallafi. |
| **Provision Connection** | Yana fara samar da endpoint da credential ta atomatik. Yi amfani da wannan bayan tabbatar da cewa shafin ya kamata ya yi amfani da managed provider. |
| **Service Endpoint / Connection Status** | Yana nuna endpoint na yanzu ko yanayin haɗi bayan provisioning. |

Bayan provisioning, adana saituna kuma tabbatar da connection status kafin dogaro da workflows na managed-service. Idan provisioning ya kasa, duba jagorar sake gwadawa da aka nuna kuma tabbatar shafin yana da izinin amfani da hosted provider.

## Daidaitawar Google Calendar

Lokacin da aka kunna fasalolin calendar na Superdav AI Agent v1.18.0, agent ɗin zai iya karanta calendars da aka daidaita da cikakkun bayanan events. Kayan aikin calendar suna karkata ga karatu kuma suna da amfani don tunatarwa masu sanin jadawali, bin sawun attendee, da daidaita contact.

| Fili | Bayani |
|---|---|
| **Google Calendar Credentials** | Yana adana credentials ko haɗin token da ake buƙata don karanta bayanan calendar. |
| **Calendar Selection** | Yana takaita waɗanne calendars da aka daidaita agent ɗin zai iya dubawa. |
| **Calendar Connection Status** | Yana tabbatar ko credentials na yanzu na iya karanta calendars da events. |

Ka iyakance calendar credentials zuwa calendars da agent ɗin ke buƙata kawai. Sake haɗawa ko juya credentials idan status ya nuna token ya ƙare.

## Sanarwar TextBee SMS

Superdav AI Agent v1.18.0 yana ƙara TextBee a matsayin mai samar da SMS don workflows na sanarwa da aka daidaita. Ya kamata a haɗa sanarwar SMS da ƙofofin amincewar mutum don saƙonni masu muhimmanci ko waɗanda masu amfani za su gani.

| Fili | Bayani |
|---|---|
| **TextBee API Key** | Yana tantance buƙatu zuwa mai samar da TextBee SMS. |
| **TextBee Device / Sender** | Yana zaɓar TextBee sender ko na’urar da ake amfani da ita don saƙonni masu fita, idan provider ya buƙata. |
| **SMS Notifications Enabled** | Yana ba da damar workflows da aka amince da su su aika sanarwar saƙon rubutu. Bar shi a kashe don hana aikawar SMS. |

Aika saƙon gwaji kawai zuwa lambar da mai gudanarwa ya mallaka, sannan tabbatar da halayyar ƙofar amincewa kafin kunna tunatarwa da aka tsara ko waɗanda attendees za su gani.

## Feature Flags

Haka kuma an gabatar da su a v1.9.0, shafin **Settings → Feature Flags** yana ba da maɓallan toggle don aikin zaɓi. Kowane flag ko dai a kunne yake ko a kashe yake a dukkan network; babu override na kowane shafi a wannan lokaci.

### Shiga Feature Flags

1. A cikin admin na WordPress, je zuwa **Gratis AI Agent → Settings**.
2. Danna shafin **Feature Flags**.

### Flags na Sarrafa Shiga

| Alama | Tsoho | Bayani |
|---|---|---|
| **Takaita ga Administrators** | A kashe | Idan an kunna, masu amfani masu rawar `administrator` kawai za su iya buɗe panel ɗin tattaunawa na AI Agent. Duk sauran rawa za su ga saƙon "Tuntuɓi administrator ɗinka" maimakon haka. |
| **Takaita ga Network Admins** | A kashe | Idan an kunna a kan hanyar sadarwar multisite, Super Admins kawai za su iya amfani da agent. Ana toshe admins na shafuka ɗaya-ɗaya. Yana da fifiko kan "Takaita ga Administrators" idan an kunna duka biyun. |
| **Ba da Damar Samun Masu Subscriber** | A kashe | Idan an kunna, masu amfani masu rawar `subscriber` za su iya amfani da interface ɗin tattaunawa amma an takaita su ga damar karantawa-kawai (ba ƙirƙirar post ko sauye-sauyen settings). |
| **Kashe ga Wadanda Ba Mambobi Ba** | A kashe | Yana haɗuwa da matsayin mambobci na Ultimate Multisite. Idan an kunna, ana ɓoye tattaunawa ga shafukan da ba su da mambobci mai aiki. |

### Alamomin Branding

| Alama | Tsoho | Bayani |
|---|---|---|
| **Ɓoye Footer ɗin "Powered by Gratis AI Agent"** | A kashe | Yana cire layin nuna branding da ake nunawa a ƙasan widget ɗin tattaunawa. Ana ba da shawara ga aiwatarwa na white-label. |
| **Sunan Agent na Musamman** | *(babu komai)* | Yana maye gurbin tsohon lakabin "Gratis AI Agent" a header ɗin tattaunawa da menu na admin da sunan product naka. A bar shi babu komai don amfani da tsoho. |
| **Ɓoye Agent Picker** | A kashe | Idan an kunna, masu amfani ba za su iya sauyawa tsakanin agents biyar da aka gina a ciki ba. Agent na yanzu yana kafe ga abin da aka saita a matsayin tsoho a Settings → General. |
| **Yi Amfani da Icon ɗin Shafi a matsayin Avatar na Tattaunawa** | A kashe | Yana maye gurbin tsohon icon na AI a header ɗin widget ɗin tattaunawa da icon ɗin shafin WordPress (wanda aka saita a ƙarƙashin Appearance → Customize → Site Identity). |

### Alamomin Tsaron Automation

Superdav AI Agent v1.18.0 yana gabatar da ƙofofin amincewar mutum da bayanan tunatarwa don gudanarwar automation mafi aminci. Waɗannan sarrafawa na iya bayyana a cikin feature flags ko manyan settings na automation, gwargwadon package da aka girka.

| Alama | Tsoho | Bayani |
|---|---|---|
| **Buƙaci Amincewar Mutum** | An ba da shawarar a kunne | Yana dakatar da automations masu muhimmanci har sai mai amfani da aka ba izini ya duba kuma ya tabbatar da aikin da aka gabatar. |
| **Reminder Deduplication** | A kunne | Yana adana tunatarwar da aka aika don retries ko scheduled runs kada su aika sanarwa iri ɗaya sau biyu. |
| **Kunna Kayan Aikin Calendar** | A kashe har sai an saita | Yana ba agent damar karanta calendars na Google da events da aka saita. |
| **Kunna Sanarwar SMS** | A kashe har sai an saita | Yana ba workflows da aka amince da su damar aika sanarwar SMS na TextBee bayan an adana credentials. |

### Aiwatar da Sauye-sauye

Danna **Save Settings** bayan kunna ko kashe kowace alama. Sauye-sauye suna fara aiki nan take — ba a buƙatar cache flush ko sake kunna plugin.
