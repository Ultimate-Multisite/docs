---
title: Kev teeb tsa Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Kev Teeb Tsa Gratis AI Agent

Nplooj **Kev Teeb Tsa → Qib Siab** hauv Gratis AI Agent muab kev teeb tsa qib tus tswj hwm rau kev txuas nrog backend. Nplooj no piav txog kev xa lus teb rov qab mus tom ntej, cov yuam sij ntawm tus muab kev tshawb nrhiav, kev teeb tsa managed Superdav service, cov kev tswj Google Calendar, kev teeb tsa TextBee SMS, thiab cov chij nta siv thoob network.

## Nkag Mus Rau Kev Teeb Tsa {#accessing-settings}

1. Hauv WordPress admin, mus rau **Gratis AI Agent → Kev Teeb Tsa**.
2. Nyem lub tab **Qib Siab**.

## Kev Teeb Tsa Qhov Chaw Txais Lus Teb Rov Qab {#feedback-endpoint-configuration}

Qhov chaw txais lus teb rov qab txais POST requests los ntawm AI agent txhua zaus tus neeg siv xa lus teb rov qab los ntawm lub pob thumbs-down, daim auto-prompt banner, lossis lo lus txib `/report-issue`.

| Daim teb | Kev piav qhia |
|---|---|
| **Feedback Endpoint URL** | URL uas txais cov kev xa lus teb rov qab ua HTTP POST requests nrog JSON body. |
| **Feedback API Key** | Ib bearer token uas xa hauv `Authorization` header ntawm txhua qhov feedback request. Cia khoob yog tias koj endpoint tsis tas yuav muaj authentication. |

### JSON Payload Uas Cia Siab Tias Yuav Tau Txais {#expected-json-payload}

Koj qhov chaw txais lus teb rov qab yuav tsum txais tau JSON body uas muaj tsawg kawg cov teb hauv qab no:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Tej zaum yuav muaj cov teb ntxiv nyob hauv payload nyob ntawm lub ntsiab lus ntawm kev sib tham.

### Cov Nqi `triage_category` {#triagecategory-values}

AI triage layer muab ib qho ntawm cov nqi hauv qab no rau `triage_category` ua ntej xa payload mus tom ntej:

| Nqi | Lub ntsiab lus |
|---|---|
| `factual_error` | Tus assistant muab cov ntaub ntawv tseeb tsis raug. |
| `unhelpful_answer` | Lo lus teb raug raws txheej txheem tab sis tsis pab tau. |
| `inappropriate_content` | Lo lus teb muaj cov ntsiab lus uas tsis tsim nyog qhia rau cov neeg siv. |
| `other` | Lus teb rov qab tsis phim ib pawg uas paub lawm. |

### Authentication {#authentication}

Yog tias koj endpoint xav tau authentication, teeb daim teb **Feedback API Key** rau koj bearer token. Tus agent xa:

```
Authorization: Bearer <your-api-key>
```

Yog tias daim teb **Feedback API Key** khoob, yuav tsis xa `Authorization` header.

### Kaw Kev Sau Lus Teb Rov Qab {#disabling-feedback-collection}

Cia ob daim teb **Feedback Endpoint URL** thiab **Feedback API Key** khoob. Lub pob thumbs-down thiab feedback UI tseem pom rau cov neeg siv, tab sis cov kev xa yuav tsis raug xa mus rau ib qho kev pabcuam sab nraud twg.

## Brave Search API Key {#brave-search-api-key}

Nyob rau lub tab **Qib Siab** thiab, daim teb **Brave Search API Key** qhib peev xwm [Kev Tshawb Nrhiav Hauv Internet](../configuration/internet-search).

| Daim teb | Kev piav qhia |
|---|---|
| **Brave Search API Key** | Koj API key los ntawm Brave Search developer dashboard. Yuav tsum muaj kom qhib kev tshawb nrhiav internet hauv AI assistant. |

Daim ntawv cim teb muaj ib qhov link uas nyem tau mus rau nplooj sau npe Brave Search API. Cia khoob kom kaw kev tshawb nrhiav internet.

Saib [Kev Tshawb Nrhiav Hauv Internet](../configuration/internet-search) rau ntaub ntawv rau tus neeg siv kawg txog qhov nta no.

## Managed Superdav Service {#managed-superdav-service}

Superdav AI Agent v1.18.0 ntxiv managed Superdav service endpoints thiab kev npaj connection tsis siv tes rau cov site uas txhawb nqa. Siv cov kev tswj no thaum koj site yuav tsum txuas rau tus hosted provider es tsis yog manually configured service endpoint.

| Daim teb | Kev piav qhia |
|---|---|
| **Managed Superdav Service** | Qhib qhov hosted Superdav service connection rau cov site uas txhawb nqa. |
| **Provision Connection** | Pib npaj endpoint thiab credential tsis siv tes. Siv qhov no tom qab paub meej tias site yuav tsum siv managed provider. |
| **Service Endpoint / Connection Status** | Qhia endpoint tam sim no lossis connection state tom qab provisioning. |

Tom qab provisioning, khaws kev teeb tsa thiab xyuas kom meej qhov connection status ua ntej cia siab rau managed-service workflows. Yog provisioning ua tsis tiav, xyuas cov lus qhia rov sim uas pom ntawd thiab paub meej tias site muaj cai siv hosted provider.

## Kev Teeb Tsa Google Calendar {#google-calendar-configuration}

Thaum cov nta calendar ntawm Superdav AI Agent v1.18.0 raug qhib, tus agent nyeem tau cov calendars uas teeb tseg thiab cov ntsiab lus event. Calendar tools yog hom nyeem xwb thiab pab tau rau reminders uas paub sijhawm, kev follow-up rau attendee, thiab kev phim contact.

| Daim teb | Kev piav qhia |
|---|---|
| **Google Calendar Credentials** | Khaws credentials lossis token connection uas yuav tsum muaj los nyeem calendar data. |
| **Calendar Selection** | Txwv seb cov calendars uas teeb tseg twg tus agent tshuaj xyuas tau. |
| **Calendar Connection Status** | Paub meej tias credentials tam sim no puas nyeem tau calendars thiab events. |

Txwv calendar credentials rau cov calendars uas tus agent xav tau xwb. Txuas dua lossis rotate credentials yog tias status qhia tias token tag sijhawm lawm.

## TextBee SMS Notifications {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 ntxiv TextBee ua SMS provider rau cov notification workflows uas teeb tseg. SMS notifications yuav tsum muab phim nrog human approval gates rau cov lus uas rhiab lossis ntsib tus neeg siv.

| Daim teb | Kev piav qhia |
|---|---|
| **TextBee API Key** | Authenticates requests mus rau TextBee SMS provider. |
| **TextBee Device / Sender** | Xaiv TextBee sender lossis device uas siv rau cov lus xa tawm, thaum provider xav kom muaj. |
| **SMS Notifications Enabled** | Tso cai rau approved workflows xa text-message notifications. Cia kaw kom tiv thaiv tsis pub xa SMS. |

Xa ib lo lus sim mus rau tus xov tooj uas tus tswj hwm yog tus tswv xwb, ces paub meej approval-gate behaviour ua ntej qhib reminders uas teem sijhawm lossis ntsib attendees.

## Feature Flags {#feature-flags}

Kuj tau qhia hauv v1.9.0 thiab, lub tab **Kev Teeb Tsa → Feature Flags** muab toggle switches rau functionality xaiv tau. Txhua flag yog qhib lossis kaw thoob network; tam sim no tsis muaj per-site override.

### Nkag Mus Rau Feature Flags {#accessing-feature-flags}

1. Hauv WordPress admin, mus rau **Gratis AI Agent → Kev Teeb Tsa**.
2. Nyem lub tab **Feature Flags**.

### Access Control Flags {#access-control-flags}

| Chij | Default | Kev piav qhia |
|---|---|---|
| **Txwv rau Administrators xwb** | Off | Thaum qhib, tsuas yog cov neeg siv uas muaj lub luag hauj lwm `administrator` thiaj qhib tau lub AI Agent chat panel. Lwm lub luag hauj lwm yuav pom ib tsab lus "Hu rau koj tus administrator" xwb. |
| **Txwv rau Network Admins xwb** | Off | Thaum qhib rau ntawm ib lub multisite network, tsuas yog Super Admins thiaj siv tau tus agent. Cov admin ntawm ib lub site raug thaiv. Qhov no muaj feem ua ntej "Restrict to Administrators" yog tias ob qho tib si qhib. |
| **Tso cai rau Subscriber Access** | Off | Thaum qhib, cov neeg siv uas muaj lub luag hauj lwm `subscriber` siv tau lub chat interface tab sis raug txwv rau kev muaj peev xwm nyeem xwb (tsis muaj kev tsim post lossis hloov settings). |
| **Disable rau Non-Members** | Off | Sib xyaw nrog Ultimate Multisite membership status. Thaum qhib, chat yuav raug zais rau cov site uas tsis muaj membership tseem ua haujlwm. |

### Chij Branding {#branding-flags}

| Chij | Default | Kev piav qhia |
|---|---|---|
| **Zais "Powered by Gratis AI Agent" Footer** | Off | Tshem kab qhia branding attribution uas pom nyob hauv qab ntawm chat widget. Pom zoo rau kev siv white-label. |
| **Agent Name Kev Cai** | *(blank)* | Hloov daim paib default "Gratis AI Agent" hauv chat header thiab admin menu nrog koj lub npe product. Tso tseg kom blank yog xav siv default. |
| **Zais Agent Picker** | Off | Thaum qhib, cov neeg siv yuav hloov tsis tau ntawm tsib tus agents uas built-in. Tus agent tam sim no raug khi rau yam uas tau teeb ua default hauv Settings → General. |
| **Siv Site Icon ua Chat Avatar** | Off | Hloov lub AI icon default hauv chat widget header nrog lub WordPress site icon (teeb nyob rau Appearance → Customize → Site Identity). |

### Chij Kev Nyab Xeeb Automation {#automation-safety-flags}

Superdav AI Agent v1.18.0 qhia human approval gates thiab reminder records rau kev khiav automation kom nyab xeeb dua. Cov controls no yuav tshwm hauv feature flags lossis advanced automation settings, nyob ntawm package uas nruab lawm.

| Chij | Default | Kev piav qhia |
|---|---|---|
| **Yuav tsum muaj Human Approval** | Pom zoo kom qhib | Nres cov automations uas rhiab kom txog thaum ib tus neeg siv uas muaj cai tshuaj xyuas thiab lees paub qhov action uas npaj tseg. |
| **Reminder Deduplication** | On | Sau cia cov reminders uas tau xa kom retries lossis scheduled runs tsis txhob xa notifications rov ua dua. |
| **Qhib Calendar Tools** | Off kom txog thaum configured | Tso cai rau tus agent nyeem cov Google calendars thiab events uas tau configured. |
| **Qhib SMS Notifications** | Off kom txog thaum configured | Tso cai rau workflows uas tau approve xa TextBee SMS notifications tom qab credentials raug khaws cia. |

### Siv Cov Kev Hloov {#applying-changes}

Nyem **Save Settings** tom qab tig ib chij twg. Cov kev hloov pib siv tam sim ntawd — tsis tas flush cache lossis reactivate plugin.
