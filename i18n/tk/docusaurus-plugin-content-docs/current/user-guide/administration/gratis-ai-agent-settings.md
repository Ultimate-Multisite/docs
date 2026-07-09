---
title: Gratis AI Agent Sazlamalary
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Sazlamalary {#gratis-ai-agent-settings}

Gratis AI Agent-de **Settings → Advanced** ekrany backend integrasiýalary üçin administrator derejesindäki konfigurasiýany üpjün edýär. Bu sahypa feedback ugratmagy, gözleg üpjün ediji açarlaryny, dolandyrylýan Superdav hyzmat sazlamasyny, Google Calendar dolandyryşlaryny, TextBee SMS sazlamalaryny we tor boýunça aýratynlyk baýdaklaryny resminamalaşdyrýar.

## Sazlamalara girmek {#accessing-settings}

1. WordPress admin-de **Gratis AI Agent → Settings** bölümine gidiň.
2. **Advanced** goýmasyna basyň.

## Feedback endpoint konfigurasiýasy {#feedback-endpoint-configuration}

Feedback endpoint AI agent ulanyjy thumbs-down düwmesi, awtomatik-prompt banner ýa-da `/report-issue` buýrugy arkaly feedback iberende POST haýyşlaryny kabul edýär.

| Meýdan | Düşündiriş |
|---|---|
| **Feedback Endpoint URL** | JSON body bilen HTTP POST haýyşlary hökmünde feedback tabşyryklaryny kabul edýän URL. |
| **Feedback API Key** | Her feedback haýyşynyň `Authorization` header-inde iberilýän bearer token. Endpoint-iňiz autentifikasiýa talap etmeýän bolsa, boş goýuň. |

### Garaşylýan JSON payload {#expected-json-payload}

Feedback endpoint-iňiz azyndan aşakdaky meýdanlary bolan JSON body kabul etmeli:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Söhbet kontekstine baglylykda payload içinde goşmaça meýdanlar bolup biler.

### `triage_category` bahalary {#triagecategory-values}

AI triage gatlagy payload-y ugratmazdan öň `triage_category` üçin aşakdaky bahalardan birini belleýär:

| Baha | Manysy |
|---|---|
| `factual_error` | Kömekçi nädogry fakt maglumatyny berdi. |
| `unhelpful_answer` | Jogap tehniki taýdan dogrydy, ýöne peýdaly däldi. |
| `inappropriate_content` | Jogap ulanyjylara görkezilmeli däl mazmuny öz içine aldy. |
| `other` | Feedback belli bir kategoriýa gabat gelmedi. |

### Autentifikasiýa {#authentication}

Endpoint-iňiz autentifikasiýa talap edýän bolsa, **Feedback API Key** meýdanyny bearer token-iňiz bilen dolduryň. Agent şuny iberýär:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** meýdany boş bolsa, `Authorization` header iberilmeýär.

### Feedback ýygnamagy öçürmek {#disabling-feedback-collection}

**Feedback Endpoint URL** we **Feedback API Key** meýdanlarynyň ikisini hem boş goýuň. Thumbs-down düwmesi we feedback UI ulanyjylar üçin görünýän bolup galýar, ýöne tabşyryklar hiç bir daşarky hyzmata ugradylmaýar.

## Brave Search API Key {#brave-search-api-key}

Şeýle hem **Advanced** goýmasynda **Brave Search API Key** meýdany [Internet gözleg](../configuration/internet-search) ukybyny işjeňleşdirýär.

| Meýdan | Düşündiriş |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-dan API açaryňyz. AI kömekçide internet gözlegini işjeňleşdirmek üçin zerur. |

Meýdan belligi Brave Search API hasaba alyş sahypasyna basyp bolýan linki öz içine alýar. Internet gözlegini öçürmek üçin boş goýuň.

Bu aýratynlyk boýunça ahyrky ulanyjy resminamasy üçin [Internet gözleg](../configuration/internet-search) serediň.

## Dolandyrylýan Superdav hyzmaty {#managed-superdav-service}

Superdav AI Agent v1.18.0 goldanýan saýtlar üçin dolandyrylýan Superdav hyzmat endpoint-lerini we awtomatik birikme üpjün edilişini goşýar. Saýtyňyz el bilen konfigurirlenen hyzmat endpoint-iň ýerine hosted üpjün edijä birikmeli bolanda şu dolandyryşlary ulanyň.

| Meýdan | Düşündiriş |
|---|---|
| **Managed Superdav Service** | Goldanýan saýtlar üçin hosted Superdav hyzmat birikmesini işjeňleşdirýär. |
| **Provision Connection** | Awtomatik endpoint we şahsyýet maglumatlary üpjün edilişini başlaýar. Saýtyň dolandyrylýan üpjün edijini ulanmalydygyny tassyklanyňyzdan soň muny ulanyň. |
| **Service Endpoint / Connection Status** | Üpjin edilişden soň häzirki endpoint-i ýa-da birikme ýagdaýyny görkezýär. |

Üpjin edilişden soň sazlamalary ýatda saklaň we dolandyrylýan-hyzmat iş akymlaryna bil baglamazdan öň birikme ýagdaýyny barlaň. Üpjin ediliş başa barmasa, görkezilen gaýtadan synanyşmak görkezmelerini gözden geçiriň we saýtyň hosted üpjün edijini ulanmaga rugsadynyň bardygyny tassyklaň.

## Google Calendar konfigurasiýasy {#google-calendar-configuration}

Superdav AI Agent v1.18.0 calendar aýratynlyklary işjeňleşdirilende, agent konfigurirlenen calendar-lary we waka jikme-jikliklerini okap bilýär. Calendar gurallary okamak ugrukdyrylandyr we tertipden habarly ýatlatmalar, gatnaşyjylary yzarlamak we kontakt laýyklygyny tapmak üçin peýdalydyr.

| Meýdan | Düşündiriş |
|---|---|
| **Google Calendar Credentials** | Calendar maglumatlaryny okamak üçin zerur bolan şahsyýet maglumatlaryny ýa-da token birikmesini saklaýar. |
| **Calendar Selection** | Agent-iň barlap biljek konfigurirlenen calendar-laryny çäklendirýär. |
| **Calendar Connection Status** | Häzirki şahsyýet maglumatlarynyň calendar-lary we wakalary okap bilýändigini tassyklaýar. |

Calendar şahsyýet maglumatlaryny agent-e gerek bolan calendar-lar bilen çäklendiriň. Ýagdaý möhleti geçen token-i görkezýän bolsa, şahsyýet maglumatlaryny täzeden birikdiriň ýa-da çalşyň.

## TextBee SMS habarnamalary {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 konfigurirlenen habarnama iş akymlary üçin SMS üpjün ediji hökmünde TextBee goşýar. SMS habarnamalary duýgur ýa-da ulanyja gönükdirilen habarlar üçin adam tassyklama geçelgeleri bilen bile ulanylmalydyr.

| Meýdan | Düşündiriş |
|---|---|
| **TextBee API Key** | TextBee SMS üpjün edijisine iberilýän haýyşlary autentifikasiýa edýär. |
| **TextBee Device / Sender** | Üpjin ediji talap edende, çykýan habarlar üçin ulanylýan TextBee iberijisini ýa-da enjamyny saýlaýar. |
| **SMS Notifications Enabled** | Tassyklanan iş akymlaryna tekst-habar habarnamalaryny ibermäge rugsat berýär. SMS iberilmeginiň öňüni almak üçin öçürilen goýuň. |

Synag habaryny diňe administratoryň eýeçiligindäki belgä iberiň, soň meýilleşdirilen ýa-da gatnaşyjylara gönükdirilen ýatlatmalary işjeňleşdirmezden öň tassyklama-geçelge häsiýetini tassyklaň.

## Aýratynlyk baýdaklary {#feature-flags}

Şeýle hem v1.9.0-da girizilen **Settings → Feature Flags** goýmasy goşmaça funksiýalar üçin toggle wyklýuçatellerini üpjün edýär. Her baýdak tor boýunça ýa işjeň, ýa-da öçürilen bolýar; häzirki wagtda her-saýt boýunça aýratyn üýtgetme ýok.

### Aýratynlyk baýdaklaryna girmek {#accessing-feature-flags}

1. WordPress admin-de **Gratis AI Agent → Settings** bölümine gidiň.
2. **Feature Flags** goýmasyna basyň.

### Elýeterlilik dolandyryş baýdaklary {#access-control-flags}

| Baýdak | Deslapky | Düşündiriş |
|---|---|---|
| **Administratorlar bilen çäklendir** | Öçük | Işledilende, diňe `administrator` roly bolan ulanyjylar AI Agent söhbet panelini açyp biler. Beýleki ähli rollar ýerine "Administratoryňyz bilen habarlaşyň" habaryny görer. |
| **Network Admins bilen çäklendir** | Öçük | Multisite ulgamynda işledilende, agentden diňe Super Admins peýdalanyp biler. Aýry-aýry sahypa adminleri bloklanýar. Ikisi-de işledilen bolsa, "Administratorlar bilen çäklendir" sazlamasyndan ileri tutulýar. |
| **Subscriber elýeterliligine rugsat ber** | Öçük | Işledilende, `subscriber` roly bolan ulanyjylar söhbet interfeýsini ulanyp biler, emma diňe okamak mümkinçilikleri bilen çäklendirilýär (ýazgy döretmek ýa-da sazlamalary üýtgetmek ýok). |
| **Agza däl ulanyjylar üçin öçür** | Öçük | Ultimate Multisite agzalyk ýagdaýy bilen utgaşýar. Işledilende, işjeň agzalygy bolmadyk sahypalar üçin söhbet gizlenýär. |

### Brending baýdaklary {#branding-flags}

| Baýdak | Deslapky | Düşündiriş |
|---|---|---|
| **"Powered by Gratis AI Agent" aşaky ýazgysyny gizle** | Öçük | Söhbet widgetiniň aşagynda görkezilýän brending salgylanma setirini aýyrýar. White-label ýerleşdirmeler üçin maslahat berilýär. |
| **Ýörite agent ady** | *(boş)* | Söhbet sözbaşysyndaky we admin menýusyndaky deslapky "Gratis AI Agent" belligini öz önüm adyňyz bilen çalyşýar. Deslapkyny ulanmak üçin boş goýuň. |
| **Agent saýlaýjyny gizle** | Öçük | Işledilende, ulanyjylar içindäki bäş agentiň arasynda geçip bilmez. Häzirki agent Settings → General bölüminde deslapky hökmünde düzülenine berkidilýär. |
| **Söhbet awatary hökmünde sahypa nyşanyny ulan** | Öçük | Söhbet widgetiniň sözbaşysyndaky deslapky AI nyşanyny WordPress sahypa nyşany bilen çalyşýar (Appearance → Customize → Site Identity astynda bellenýär). |

### Awtomatlaşdyrma howpsuzlyk baýdaklary {#automation-safety-flags}

Superdav AI Agent v1.18.0 has howpsuz awtomatlaşdyrma işleýişleri üçin adam tassyklama geçelgelerini we ýatlatma ýazgylaryny girizýär. Bu dolandyryşlar gurnalan bukja baglylykda aýratynlyk baýdaklarynda ýa-da giňişleýin awtomatlaşdyrma sazlamalarynda peýda bolup biler.

| Baýdak | Deslapky | Düşündiriş |
|---|---|---|
| **Adam tassyklamasy talap edilýär** | Maslahat berilýär: açyk | Duýgur awtomatlaşdyrmalary ygtyýarly ulanyjy teklip edilýän hereketi gözden geçirip tassyklaýança saklaýar. |
| **Ýatlatmalaryň gaýtalanmagyny öňüni almak** | Açyk | Gaýtadan synanyşyklar ýa-da meýilleşdirilen işleýişler gaýtalanýan bildirişleri ibermez ýaly iberilen ýatlatmalary ýazga alýar. |
| **Calendar gurallaryny işjeňleşdir** | Düzülýänçä öçük | Agente düzülen Google kalendarlaryny we wakalaryny okamaga rugsat berýär. |
| **SMS bildirişlerini işjeňleşdir** | Düzülýänçä öçük | Maglumatlar saklanandan soň tassyklanan iş akymlaryna TextBee SMS bildirişlerini ibermäge rugsat berýär. |

### Üýtgeşmeleri ulanmak {#applying-changes}

Islendik baýdagy üýtgedeniňizden soň **Sazlamalary sakla** düwmesine basyň. Üýtgeşmeler derrew güýje girýär — cache arassalamak ýa-da plugin-i täzeden işjeňleşdirmek talap edilmeýär.
