---
title: Cilësimet e Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Cilësimet e Gratis AI Agent

Ekrani **Settings → Advanced** në Gratis AI Agent ofron konfigurim të nivelit të administratorit për integrimet backend. Kjo faqe dokumenton përcjelljen e feedback-ut, çelësat e ofruesve të kërkimit, konfigurimin e shërbimit të menaxhuar Superdav, kontrollet e Google Calendar, cilësimet e SMS-ve TextBee dhe feature flags në nivel rrjeti.

## Qasja te cilësimet {#accessing-settings}

1. Në administrimin e WordPress, shkoni te **Gratis AI Agent → Settings**.
2. Klikoni skedën **Advanced**.

## Konfigurimi i endpoint-it të feedback-ut {#feedback-endpoint-configuration}

Endpoint-i i feedback-ut merr kërkesa POST nga AI agent sa herë që një përdorues dërgon feedback përmes butonit thumbs-down, banner-it auto-prompt, ose komandës `/report-issue`.

| Fusha | Përshkrimi |
|---|---|
| **Feedback Endpoint URL** | URL-ja që merr dërgesat e feedback-ut si kërkesa HTTP POST me trup JSON. |
| **Feedback API Key** | Një bearer token i dërguar në `Authorization` header të çdo kërkese feedback-u. Lëreni bosh nëse endpoint-i juaj nuk kërkon autentikim. |

### Payload-i JSON i pritur {#expected-json-payload}

Endpoint-i juaj i feedback-ut duhet të pranojë një trup JSON me të paktën fushat e mëposhtme:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Fusha shtesë mund të jenë të pranishme në payload në varësi të kontekstit të bisedës.

### Vlerat e `triage_category` {#triagecategory-values}

Shtresa e triage-it të AI cakton një nga vlerat e mëposhtme te `triage_category` përpara se të përcjellë payload-in:

| Vlera | Kuptimi |
|---|---|
| `factual_error` | Asistenti dha informacion faktik të pasaktë. |
| `unhelpful_answer` | Përgjigjja ishte teknikisht e saktë, por jo e dobishme. |
| `inappropriate_content` | Përgjigjja përmbante përmbajtje që nuk duhet t’u shfaqet përdoruesve. |
| `other` | Feedback-u nuk përputhej me një kategori të njohur. |

### Autentikimi {#authentication}

Nëse endpoint-i juaj kërkon autentikim, vendosni fushën **Feedback API Key** në bearer token-in tuaj. Agent-i dërgon:

```
Authorization: Bearer <your-api-key>
```

Nëse fusha **Feedback API Key** është bosh, nuk dërgohet asnjë `Authorization` header.

### Çaktivizimi i mbledhjes së feedback-ut {#disabling-feedback-collection}

Lërini bosh të dyja fushat **Feedback Endpoint URL** dhe **Feedback API Key**. Butoni thumbs-down dhe UI i feedback-ut mbeten të dukshme për përdoruesit, por dërgesat nuk përcillen te asnjë shërbim i jashtëm.

## Brave Search API Key {#brave-search-api-key}

Po ashtu në skedën **Advanced**, fusha **Brave Search API Key** aktivizon aftësinë [Kërkimi në internet](../configuration/internet-search).

| Fusha | Përshkrimi |
|---|---|
| **Brave Search API Key** | Çelësi juaj API nga dashboard-i i zhvilluesve të Brave Search. Kërkohet për të aktivizuar kërkimin në internet në asistentin AI. |

Etiketa e fushës përfshin një lidhje të klikueshme drejt faqes së regjistrimit për Brave Search API. Lëreni bosh për të çaktivizuar kërkimin në internet.

Shihni [Kërkimi në internet](../configuration/internet-search) për dokumentacionin e përdoruesit fundor mbi këtë veçori.

## Shërbimi i menaxhuar Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 shton endpoint-e të shërbimit të menaxhuar Superdav dhe provisionim automatik të lidhjes për sajte të mbështetura. Përdorni këto kontrolle kur sajti juaj duhet të lidhet me ofruesin e hostuar në vend të një endpoint-i shërbimi të konfiguruar manualisht.

| Fusha | Përshkrimi |
|---|---|
| **Managed Superdav Service** | Aktivizon lidhjen me shërbimin e hostuar Superdav për sajte të mbështetura. |
| **Provision Connection** | Nis provisionimin automatik të endpoint-it dhe kredencialeve. Përdoreni këtë pasi të konfirmoni se sajti duhet të përdorë ofruesin e menaxhuar. |
| **Service Endpoint / Connection Status** | Shfaq endpoint-in aktual ose gjendjen e lidhjes pas provisionimit. |

Pas provisionimit, ruani cilësimet dhe verifikoni gjendjen e lidhjes përpara se të mbështeteni te rrjedhat e punës të shërbimit të menaxhuar. Nëse provisionimi dështon, rishikoni udhëzimet e shfaqura për riprovim dhe konfirmoni që sajti ka leje për të përdorur ofruesin e hostuar.

## Konfigurimi i Google Calendar {#google-calendar-configuration}

Kur veçoritë e kalendarit të Superdav AI Agent v1.18.0 janë të aktivizuara, agent-i mund të lexojë kalendarët e konfiguruar dhe detajet e ngjarjeve. Mjetet e kalendarit janë të orientuara drejt leximit dhe janë të dobishme për kujtesa të ndërgjegjshme për orarin, ndjekje me pjesëmarrësit dhe përputhje kontaktesh.

| Fusha | Përshkrimi |
|---|---|
| **Google Calendar Credentials** | Ruan kredencialet ose lidhjen me token që kërkohet për të lexuar të dhënat e kalendarit. |
| **Calendar Selection** | Kufizon cilët kalendarë të konfiguruar mund të inspektojë agent-i. |
| **Calendar Connection Status** | Konfirmon nëse kredencialet aktuale mund të lexojnë kalendarë dhe ngjarje. |

Mbajini kredencialet e kalendarit të kufizuara vetëm te kalendarët që i nevojiten agent-it. Rilidhni ose rrotulloni kredencialet nëse statusi tregon një token të skaduar.

## Njoftimet SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 shton TextBee si ofrues SMS për rrjedha pune të konfiguruara njoftimesh. Njoftimet SMS duhet të shoqërohen me porta miratimi njerëzor për mesazhe sensitive ose të drejtuara përdoruesve.

| Fusha | Përshkrimi |
|---|---|
| **TextBee API Key** | Autentikon kërkesat te ofruesi SMS TextBee. |
| **TextBee Device / Sender** | Zgjedh dërguesin ose pajisjen TextBee të përdorur për mesazhet dalëse, kur kërkohet nga ofruesi. |
| **SMS Notifications Enabled** | Lejon rrjedhat e miratuara të punës të dërgojnë njoftime me mesazhe tekst. Lëreni të çaktivizuar për të parandaluar dërgimet SMS. |

Dërgoni një mesazh prove vetëm te një numër në pronësi të administratorit, pastaj konfirmoni sjelljen e portës së miratimit përpara se të aktivizoni kujtesa të planifikuara ose të drejtuara pjesëmarrësve.

## Feature Flags {#feature-flags}

Të prezantuara gjithashtu në v1.9.0, skeda **Settings → Feature Flags** ofron çelësa toggle për funksionalitet opsional. Çdo flag është ose i aktivizuar ose i çaktivizuar në të gjithë rrjetin; aktualisht nuk ka override për çdo sajt.

### Qasja te Feature Flags {#accessing-feature-flags}

1. Në administrimin e WordPress, shkoni te **Gratis AI Agent → Settings**.
2. Klikoni skedën **Feature Flags**.

### Access Control Flags {#access-control-flags}

| Flamur | Parazgjedhja | Përshkrimi |
|---|---|---|
| **Kufizo te Administratorët** | Off | Kur aktivizohet, vetëm përdoruesit me rolin `administrator` mund të hapin panelin e bisedës së AI Agent. Të gjitha rolet e tjera shohin në vend të tij një mesazh "Kontaktoni administratorin tuaj". |
| **Kufizo te Network Admins** | Off | Kur aktivizohet në një rrjet multisite, vetëm Super Admins mund ta përdorin agjentin. Administratorët e site-eve individuale bllokohen. Ka përparësi ndaj "Kufizo te Administratorët" nëse të dyja janë të aktivizuara. |
| **Lejo aksesin për Subscriber** | Off | Kur aktivizohet, përdoruesit me rolin `subscriber` mund të përdorin ndërfaqen e bisedës, por kufizohen në aftësi vetëm për lexim (pa krijim postimesh ose ndryshime cilësimesh). |
| **Çaktivizo për joanëtarët** | Off | Integrohet me statusin e anëtarësimit të Ultimate Multisite. Kur aktivizohet, biseda fshihet për site-et që nuk kanë anëtarësim aktiv. |

### Flamujt e branding {#branding-flags}

| Flamur | Parazgjedhja | Përshkrimi |
|---|---|---|
| **Fshih Footer-in "Powered by Gratis AI Agent"** | Off | Heq rreshtin e atribuimit të branding që shfaqet në fund të widget-it të bisedës. Rekomandohet për vendosje white-label. |
| **Emri i personalizuar i agjentit** | *(bosh)* | Zëvendëson etiketën e parazgjedhur "Gratis AI Agent" në kokën e bisedës dhe menynë admin me emrin tuaj të produktit. Lëreni bosh për të përdorur parazgjedhjen. |
| **Fshih zgjedhësin e agjentit** | Off | Kur aktivizohet, përdoruesit nuk mund të kalojnë midis pesë agjentëve të integruar. Agjenti aktual fiksohet te ai që është konfiguruar si parazgjedhje te Settings → General. |
| **Përdor ikonën e site-it si avatar të bisedës** | Off | Zëvendëson ikonën e parazgjedhur të AI në kokën e widget-it të bisedës me ikonën e site-it WordPress (e vendosur te Appearance → Customize → Site Identity). |

### Flamujt e sigurisë së automatizimit {#automation-safety-flags}

Superdav AI Agent v1.18.0 prezanton porta miratimi nga njeriu dhe regjistra kujtuesish për ekzekutime më të sigurta të automatizimit. Këto kontrolle mund të shfaqen në flamujt e veçorive ose në cilësimet e avancuara të automatizimit, në varësi të paketës së instaluar.

| Flamur | Parazgjedhja | Përshkrimi |
|---|---|---|
| **Kërko miratim nga njeriu** | Rekomandohet i aktivizuar | Ndalon përkohësisht automatizimet e ndjeshme derisa një përdorues i autorizuar të shqyrtojë dhe të konfirmojë veprimin e propozuar. |
| **Dedublikimi i kujtuesve** | On | Regjistron kujtuesit e dërguar në mënyrë që riprovimet ose ekzekutimet e planifikuara të mos dërgojnë njoftime të dyfishta. |
| **Aktivizo mjetet e kalendarit** | Off derisa të konfigurohet | Lejon agjentin të lexojë kalendarët dhe ngjarjet e konfiguruara të Google. |
| **Aktivizo njoftimet SMS** | Off derisa të konfigurohet | Lejon rrjedhat e miratuara të punës të dërgojnë njoftime SMS TextBee pasi kredencialet të ruhen. |

### Zbatimi i ndryshimeve {#applying-changes}

Klikoni **Ruaj cilësimet** pasi të ndërroni cilindo flamur. Ndryshimet hyjnë në fuqi menjëherë — nuk kërkohet pastrim cache-i ose riaktivizim plugin-i.
