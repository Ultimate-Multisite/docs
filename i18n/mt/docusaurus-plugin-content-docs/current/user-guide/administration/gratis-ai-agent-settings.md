---
title: Issettjar ta’ Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Settings ta' Gratis AI Agent

L-iskrin **Settings → Advanced** f'Gratis AI Agent jipprovdi konfigurazzjoni fil-livell ta' amministratur għal integrazzjonijiet tal-backend. Din il-paġna tiddokumenta t-trażmissjoni ta' feedback, iċ-ċwievet tal-fornitur tat-tiftix, is-setup tas-servizz Superdav immaniġġjat, il-kontrolli ta' Google Calendar, is-settings tal-SMS ta' TextBee, u feature flags fuq in-network kollu.

## Aċċess għas-Settings

1. Fl-amministrazzjoni ta' WordPress, mur **Gratis AI Agent → Settings**.
2. Ikklikkja t-tab **Advanced**.

## Konfigurazzjoni tal-Endpoint tal-Feedback

L-endpoint tal-feedback jirċievi talbiet POST mill-aġent tal-AI kull meta utent jibgħat feedback permezz tal-buttuna thumbs-down, il-banner auto-prompt, jew il-kmand `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Il-URL li jirċievi s-sottomissjonijiet tal-feedback bħala talbiet HTTP POST b'korp JSON. |
| **Feedback API Key** | bearer token mibgħut fl-`Authorization` header ta' kull talba ta' feedback. Ħallih vojt jekk l-endpoint tiegħek ma jeħtieġx awtentikazzjoni. |

### Payload JSON Mistenni

L-endpoint tal-feedback tiegħek irid jaċċetta korp JSON b'mill-inqas l-oqsma li ġejjin:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Jistgħu jkunu preżenti oqsma addizzjonali fil-payload skont il-kuntest tal-konverżazzjoni.

### Valuri ta' `triage_category`

Is-saff tat-triage tal-AI jassenja wieħed mill-valuri li ġejjin lil `triage_category` qabel ma jittrażmetti l-payload:

| Value | Meaning |
|---|---|
| `factual_error` | L-assistent ipprovda informazzjoni fattwali żbaljata. |
| `unhelpful_answer` | It-tweġiba kienet teknikament korretta iżda mhux utli. |
| `inappropriate_content` | It-tweġiba kien fiha kontenut li m'għandux jintwera lill-utenti. |
| `other` | Il-feedback ma qabilx ma' kategorija magħrufa. |

### Awtentikazzjoni

Jekk l-endpoint tiegħek jeħtieġ awtentikazzjoni, issettja l-qasam **Feedback API Key** għall-bearer token tiegħek. L-aġent jibgħat:

```
Authorization: Bearer <your-api-key>
```

Jekk il-qasam **Feedback API Key** ikun vojt, ma jintbagħat l-ebda `Authorization` header.

### Diżattivazzjoni tal-Ġbir tal-Feedback

Ħalli ż-żewġ oqsma **Feedback Endpoint URL** u **Feedback API Key** vojta. Il-buttuna thumbs-down u l-UI tal-feedback jibqgħu viżibbli għall-utenti, iżda s-sottomissjonijiet ma jiġux trażmessi lil xi servizz estern.

## Brave Search API Key

Ukoll fuq it-tab **Advanced**, il-qasam **Brave Search API Key** jattiva l-abbiltà [Tiftix fuq l-Internet](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | Iċ-ċavetta API tiegħek mid-dashboard tal-iżviluppaturi ta' Brave Search. Meħtieġa biex jiġi attivat it-tiftix fuq l-internet fl-assistent tal-AI. |

It-tikketta tal-qasam tinkludi link li tista' tikklikkja fuqu għall-paġna ta' reġistrazzjoni tal-Brave Search API. Ħallih vojt biex tiddiżattiva t-tiftix fuq l-internet.

Ara [Tiftix fuq l-Internet](../configuration/internet-search) għad-dokumentazzjoni għall-utenti finali dwar din il-karatteristika.

## Servizz Superdav Immaniġġjat

Superdav AI Agent v1.18.0 iżid endpoints tas-servizz Superdav immaniġġjat u provisioning awtomatiku tal-konnessjoni għal siti appoġġjati. Uża dawn il-kontrolli meta s-sit tiegħek għandu jikkonnettja mal-fornitur ospitat minflok endpoint tas-servizz ikkonfigurat manwalment.

| Field | Description |
|---|---|
| **Managed Superdav Service** | Jattiva l-konnessjoni mas-servizz Superdav ospitat għal siti appoġġjati. |
| **Provision Connection** | Jibda provisioning awtomatiku tal-endpoint u tal-kredenzjali. Uża dan wara li tikkonferma li s-sit għandu juża l-fornitur immaniġġjat. |
| **Service Endpoint / Connection Status** | Juri l-endpoint attwali jew l-istat tal-konnessjoni wara l-provisioning. |

Wara l-provisioning, salva s-settings u vverifika l-istatus tal-konnessjoni qabel ma tiddependi fuq workflows tas-servizz immaniġġjat. Jekk il-provisioning ifalli, irrevedi l-gwida ta' prova mill-ġdid murija u kkonferma li s-sit għandu permess juża l-fornitur ospitat.

## Konfigurazzjoni ta' Google Calendar

Meta l-karatteristiċi tal-kalendarju ta' Superdav AI Agent v1.18.0 ikunu attivati, l-aġent jista' jaqra kalendarji kkonfigurati u dettalji tal-avvenimenti. L-għodod tal-kalendarju huma orjentati lejn il-qari u huma utli għal tfakkiriet konxji tal-iskeda, follow-up mal-parteċipanti, u tqabbil tal-kuntatti.

| Field | Description |
|---|---|
| **Google Calendar Credentials** | Jaħżen il-kredenzjali jew il-konnessjoni tat-token meħtieġa biex tinqara d-data tal-kalendarju. |
| **Calendar Selection** | Jillimita liema kalendarji kkonfigurati l-aġent jista' jispezzjona. |
| **Calendar Connection Status** | Jikkonferma jekk il-kredenzjali attwali jistgħux jaqraw kalendarji u avvenimenti. |

Żomm il-kredenzjali tal-kalendarju limitati għall-kalendarji li l-aġent jeħtieġ. Erġa' qabbad jew ibdel il-kredenzjali jekk l-istatus jindika token skadut.

## Notifiki SMS ta' TextBee

Superdav AI Agent v1.18.0 iżid TextBee bħala fornitur tal-SMS għal workflows tan-notifiki kkonfigurati. In-notifiki SMS għandhom jiġu akkoppjati ma' punti ta' approvazzjoni umana għal messaġġi sensittivi jew immirati lejn l-utenti.

| Field | Description |
|---|---|
| **TextBee API Key** | Jawtentika talbiet lill-fornitur tal-SMS TextBee. |
| **TextBee Device / Sender** | Jagħżel il-mittent jew l-apparat TextBee użat għal messaġġi ħerġin, meta meħtieġ mill-fornitur. |
| **SMS Notifications Enabled** | Jippermetti lil workflows approvati jibagħtu notifiki b'messaġġi testwali. Ħallih diżattivat biex tevita li jintbagħtu SMS. |

Ibgħat messaġġ tat-test biss lil numru proprjetà ta' amministratur, imbagħad ikkonferma l-imġiba tal-punt ta' approvazzjoni qabel tattiva tfakkiriet skedati jew immirati lejn il-parteċipanti.

## Feature Flags

Introdotta wkoll f'v1.9.0, it-tab **Settings → Feature Flags** tipprovdi swiċċijiet toggle għal funzjonalità fakultattiva. Kull flag huwa jew attivat jew diżattivat fuq in-network kollu; bħalissa m'hemm l-ebda override għal kull sit.

### Aċċess għall-Feature Flags

1. Fl-amministrazzjoni ta' WordPress, mur **Gratis AI Agent → Settings**.
2. Ikklikkja t-tab **Feature Flags**.

### Flags tal-Kontroll tal-Aċċess

| Bandiera | Default | Deskrizzjoni |
|---|---|---|
| **Illimita għall-Amministraturi** | Mitfi | Meta jkun attivat, utenti biss bir-rwol `administrator` jistgħu jiftħu l-panel taċ-chat tal-AI Agent. Ir-rwoli l-oħra kollha jaraw messaġġ "Ikkuntattja lill-amministratur tiegħek" minflok. |
| **Illimita għall-Amministraturi tan-Network** | Mitfi | Meta jkun attivat fuq network multisite, Super Admins biss jistgħu jużaw l-agent. L-amministraturi ta’ siti individwali jiġu mblukkati. Jieħu preċedenza fuq "Illimita għall-Amministraturi" jekk it-tnejn ikunu attivati. |
| **Ħalli Aċċess għas-Subscriber** | Mitfi | Meta jkun attivat, utenti bir-rwol `subscriber` jistgħu jużaw l-interface taċ-chat iżda jkunu limitati għal kapaċitajiet ta’ qari biss (l-ebda ħolqien ta’ posts jew bidliet fis-settings). |
| **Itfi għal Min Mhux Membri** | Mitfi | Jintegra mal-istatus ta’ sħubija ta’ Ultimate Multisite. Meta jkun attivat, iċ-chat jinħeba għal siti li m’għandhomx sħubija attiva. |

### Bnadar tal-Branding

| Bandiera | Default | Deskrizzjoni |
|---|---|---|
| **Aħbi l-Footer "Powered by Gratis AI Agent"** | Mitfi | Ineħħi l-linja ta’ attribuzzjoni tal-branding murija fil-qiegħ tal-widget taċ-chat. Rakkomandat għal implimentazzjonijiet white-label. |
| **Isem tal-Agent Personalizzat** | *(vojt)* | Jissostitwixxi t-tikketta default "Gratis AI Agent" fil-header taċ-chat u fil-menu tal-admin bl-isem tal-prodott tiegħek. Ħallih vojt biex tuża d-default. |
| **Aħbi l-Picker tal-Agent** | Mitfi | Meta jkun attivat, l-utenti ma jistgħux jaqilbu bejn il-ħames agents inkorporati. L-agent attwali jkun fiss għal dak li jkun ikkonfigurat bħala d-default f’Settings → General. |
| **Uża l-Ikona tas-Sit bħala Avatar taċ-Chat** | Mitfi | Jissostitwixxi l-ikona default tal-AI fil-header tal-widget taċ-chat bl-ikona tas-sit WordPress (issettjata taħt Appearance → Customize → Site Identity). |

### Bnadar tas-Sigurtà tal-Awtomazzjoni

Superdav AI Agent v1.18.0 jintroduċi porti ta’ approvazzjoni umana u rekords ta’ tfakkiriet għal eżekuzzjonijiet ta’ awtomazzjoni aktar siguri. Dawn il-kontrolli jistgħu jidhru fil-feature flags jew fis-settings avvanzati tal-awtomazzjoni, skont il-pakkett installat.

| Bandiera | Default | Deskrizzjoni |
|---|---|---|
| **Jeħtieġ Approvazzjoni Umana** | Rakkomandat mixgħul | Iwaqqaf temporanjament awtomazzjonijiet sensittivi sakemm utent awtorizzat jirrevedi u jikkonferma l-azzjoni proposta. |
| **Deduplicazzjoni tat-Tfakkiriet** | Mixgħul | Jirreġistra tfakkiriet mibgħuta sabiex tentattivi mill-ġdid jew eżekuzzjonijiet skedati ma jibagħtux notifiki duplikati. |
| **Attiva l-Għodod tal-Kalendarju** | Mitfi sakemm jiġi kkonfigurat | Jippermetti lill-agent jaqra kalendarji u avvenimenti Google kkonfigurati. |
| **Attiva Notifiki SMS** | Mitfi sakemm jiġi kkonfigurat | Jippermetti workflows approvati jibagħtu notifiki SMS ta’ TextBee wara li l-kredenzjali jiġu ssejvjati. |

### Applikazzjoni tal-Bidliet

Ikklikkja **Save Settings** wara li taqleb kwalunkwe bandiera. Il-bidliet jidħlu fis-seħħ immedjatament — ma huwiex meħtieġ cache flush jew riattivazzjoni tal-plugin.
