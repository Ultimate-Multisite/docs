---
title: Izicwangciso ze-Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Iisetingi ze-Gratis AI Agent {#gratis-ai-agent-settings}

Isikrini se-**Iisetingi → Ezihambele phambili** kwi-Gratis AI Agent sinika ulungiselelo lwenqanaba lomlawuli kudibaniso lwangasemva. Eli phepha lichaza ukuthunyelwa kwengxelo, izitshixo zababoneleli bokukhangela, useto lwenkonzo ye-Superdav elawulwayo, ulawulo lwe-Google Calendar, iisetingi ze-TextBee SMS, kunye neeflegi zeempawu kwinethiwekhi yonke.

## Ukufikelela kwiiSetingi {#accessing-settings}

1. Kulawulo lwe-WordPress, yiya ku-**Gratis AI Agent → Iisetingi**.
2. Cofa ithebhu ethi **Ezihambele phambili**.

## Ulungiselelo lwe-Endpoint yeNgxelo {#feedback-endpoint-configuration}

I-endpoint yengxelo ifumana izicelo ze-POST ezivela kwi-AI agent nanini na xa umsebenzisi engenisa ingxelo ngeqhosha le-thumbs-down, ibhena ye-auto-prompt, okanye umyalelo othi `/report-issue`.

| Indawo | Inkcazelo |
|---|---|
| **I-URL ye-Endpoint yeNgxelo** | I-URL efumana ungeniso lwengxelo njengezicelo ze-HTTP POST ezinomzimba we-JSON. |
| **Feedback API Key** | I-bearer token ethunyelwa kwi-`Authorization` header yesicelo ngasinye sengxelo. Yishiye ingenanto ukuba i-endpoint yakho ayifuni ukuqinisekiswa. |

### Umthwalo we-JSON olindelekileyo {#expected-json-payload}

I-endpoint yakho yengxelo kufuneka yamkele umzimba we-JSON onobuncinane bezi ndawo zilandelayo:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Iindawo ezongezelelweyo zinokubakho kumthwalo ngokuxhomekeke kumxholo wencoko.

### Amaxabiso e-`triage_category` {#triagecategory-values}

Umaleko we-AI triage wabela elinye lamaxabiso alandelayo ku-`triage_category` phambi kokuthumela umthwalo:

| Ixabiso | Intsingiselo |
|---|---|
| `factual_error` | Umncedisi unike ulwazi oluyinyani olungachanekanga. |
| `unhelpful_answer` | Impendulo ibichanekile ngobugcisa kodwa ingaluncedo. |
| `inappropriate_content` | Impendulo ibiqulethe umxholo ongafanele ukuboniswa kubasebenzisi. |
| `other` | Ingxelo ayihambelananga nodidi olwaziwayo. |

### Ukuqinisekiswa {#authentication}

Ukuba i-endpoint yakho ifuna ukuqinisekiswa, seta indawo ye-**Feedback API Key** ibe yi-bearer token yakho. I-agent ithumela:

```
Authorization: Bearer <your-api-key>
```

Ukuba indawo ye-**Feedback API Key** ayinanto, akukho `Authorization` header ithunyelwayo.

### Ukukhubaza Ukuqokelelwa kweNgxelo {#disabling-feedback-collection}

Shiya zombini iindawo ze-**I-URL ye-Endpoint yeNgxelo** kunye ne-**Feedback API Key** zingenanto. Iqhosha le-thumbs-down kunye ne-UI yengxelo zihlala zibonakala kubasebenzisi, kodwa ungeniso aluthunyelwa kuyo nayiphi na inkonzo yangaphandle.

## Brave Search API Key {#brave-search-api-key}

Kwakhona kwithebhu ethi **Ezihambele phambili**, indawo ye-**Brave Search API Key** yenza isakhono se-[Ukukhangela kwi-Intanethi](../configuration/internet-search).

| Indawo | Inkcazelo |
|---|---|
| **Brave Search API Key** | Isitshixo sakho se-API esivela kwi-dashboard yabaphuhlisi ye-Brave Search. Siyafuneka ukuze kuvulwe ukukhangela kwi-intanethi kumncedisi we-AI. |

Ilebhile yendawo iquka ikhonkco elicofekayo kwiphepha lokubhalisela i-Brave Search API. Yishiye ingenanto ukuze ukhubaze ukukhangela kwi-intanethi.

Bona [Ukukhangela kwi-Intanethi](../configuration/internet-search) ukuze ufumane uxwebhu lwabasebenzisi bokugqibela ngale mpawu.

## Inkonzo ye-Superdav Elawulwayo {#managed-superdav-service}

I-Superdav AI Agent v1.18.0 yongeza ii-endpoint zenkonzo ye-Superdav elawulwayo kunye nolungiselelo oluzenzekelayo lonxibelelwano kwiisayithi ezixhaswayo. Sebenzisa olu lawulo xa isayithi yakho kufuneka iqhagamshele kumboneleli osingathiweyo endaweni ye-endpoint yenkonzo elungiselelwe ngesandla.

| Indawo | Inkcazelo |
|---|---|
| **Inkonzo ye-Superdav Elawulwayo** | Ivumela uqhagamshelwano lwenkonzo ye-Superdav esingathiweyo kwiisayithi ezixhaswayo. |
| **Lungiselela Uqhagamshelwano** | Iqalisa ulungiselelo oluzenzekelayo lwe-endpoint kunye neenkcukacha zokuqinisekisa. Sebenzisa oku emva kokuqinisekisa ukuba isayithi kufuneka isebenzise umboneleli olawulwayo. |
| **I-Endpoint yeNkonzo / Isimo soQhagamshelwano** | Ibonisa i-endpoint yangoku okanye isimo soqhagamshelwano emva kolungiselelo. |

Emva kolungiselelo, gcina iisetingi uze uqinisekise isimo soqhagamshelwano phambi kokuxhomekeka kwiinkqubo zomsebenzi zenkonzo elawulwayo. Ukuba ulungiselelo luyasilela, jonga isikhokelo sokuzama kwakhona esibonisiweyo uze uqinisekise ukuba isayithi inemvume yokusebenzisa umboneleli osingathiweyo.

## Ulungiselelo lwe-Google Calendar {#google-calendar-configuration}

Xa iimpawu zekhalenda ze-Superdav AI Agent v1.18.0 zivuliwe, i-agent inokufunda iikhalenda ezilungiselelweyo kunye neenkcukacha zeziganeko. Izixhobo zekhalenda zijolise ekufundeni kwaye ziluncedo kwizikhumbuzo eziqwalasela ishedyuli, ukulandela abazimasi, kunye nokutshatisa abafowunelwa.

| Indawo | Inkcazelo |
|---|---|
| **Iinkcukacha zokuqinisekisa ze-Google Calendar** | Igcina iinkcukacha zokuqinisekisa okanye uqhagamshelwano lwe-token olufunekayo ukufunda idatha yekhalenda. |
| **Ukukhethwa kweKhalenda** | Inciphisa ukuba zeziphi iikhalenda ezilungiselelweyo i-agent enokuzijonga. |
| **Isimo soQhagamshelwano lweKhalenda** | Iqinisekisa ukuba iinkcukacha zokuqinisekisa zangoku zinokufunda iikhalenda neziganeko. |

Gcina iinkcukacha zokuqinisekisa zekhalenda zilinganiselwe kwiikhalenda ezifunwa yi-agent. Qhagamshela kwakhona okanye ujikelezise iinkcukacha zokuqinisekisa ukuba isimo sibonisa i-token ephelelweyo.

## Izaziso ze-TextBee SMS {#textbee-sms-notifications}

I-Superdav AI Agent v1.18.0 yongeza i-TextBee njengomboneleli we-SMS kwiinkqubo zomsebenzi zezaziso ezilungiselelweyo. Izaziso ze-SMS kufuneka zidibaniswe namasango okuvunywa ngumntu kwimiyalezo ebuthathaka okanye ejolise kubasebenzisi.

| Indawo | Inkcazelo |
|---|---|
| **TextBee API Key** | Iqinisekisa izicelo kumboneleli we-TextBee SMS. |
| **Isixhobo se-TextBee / Umthumeli** | Ikhetha umthumeli okanye isixhobo se-TextBee esisetyenziswa kwimiyalezo ephumayo, xa oko kufunwa ngumboneleli. |
| **Izaziso ze-SMS Zivuliwe** | Ivumela iinkqubo zomsebenzi ezivunyiweyo ukuba zithumele izaziso zomyalezo wombhalo. Yishiye ikhubaziwe ukunqanda ukuthunyelwa kwe-SMS. |

Thumela umyalezo wovavanyo kuphela kwinombolo ephethwe ngumlawuli, emva koko uqinisekise ukuziphatha kwesango lokuvunywa phambi kokuvula izikhumbuzo ezicwangcisiweyo okanye ezijolise kubazimasi.

## Iiflegi zeMpawu {#feature-flags}

Kwakhona zaziswa kwi-v1.9.0, ithebhu ethi **Iisetingi → Iiflegi zeMpawu** inika amaqhosha okuvula/ukuvala ukusebenza okukhethwayo. Iflegi nganye ivuliwe okanye ikhubaziwe kwinethiwekhi yonke; akukho kugqitha ngokwesayithi ngeli xesha.

### Ukufikelela kwiiFlegi zeMpawu {#accessing-feature-flags}

1. Kulawulo lwe-WordPress, yiya ku-**Gratis AI Agent → Iisetingi**.
2. Cofa ithebhu ethi **Iiflegi zeMpawu**.

### Iiflegi zoLawulo lokuFikelela {#access-control-flags}

| Iflegi | Ehlala ikho | Inkcazelo |
|---|---|---|
| **Nciphisa kuBalawuli** | Icimile | Xa ivuliwe, ngabasebenzisi abanendima ye-`administrator` kuphela abanokuvula iphaneli yencoko ye-AI Agent. Zonke ezinye iindima zibona umyalezo othi "Qhagamshelana nomlawuli wakho" endaweni yoko. |
| **Nciphisa kuBalawuli beNethiwekhi** | Icimile | Xa ivuliwe kwinethiwekhi ye-multisite, ngoo-Super Admins kuphela abanokusebenzisa i-agent. Abalawuli besayithi nganye bayavalwa. Iba phambili kune-"Nciphisa kuBalawuli" ukuba zombini zivuliwe. |
| **Vumela Ufikelelo lwababhalisi** | Icimile | Xa ivuliwe, abasebenzisi abanendima ye-`subscriber` banokusebenzisa ujongano lwencoko kodwa bancitshiselwe kwizakhono zokufunda kuphela (akukho kudalwa kweposi okanye utshintsho lweesetingi). |
| **Khubaza kwabangengoMalungu** | Icimile | Idibanisa nesimo sobulungu se-Ultimate Multisite. Xa ivuliwe, incoko iyafihlwa kwiisayithi ezingenabumelungu obusebenzayo. |

### Iiflegi zeBranding {#branding-flags}

| Iflegi | Ehlala ikho | Inkcazelo |
|---|---|---|
| **Fihla iFooter ethi "Powered by Gratis AI Agent"** | Icimile | Isusa umgca wokunxulumanisa i-branding oboniswe ezantsi kwewijethi yencoko. Kuyacetyiswa kufakelo lwe-white-label. |
| **Igama le-Agent eliLungiselelweyo** | *(akukho nto)* | Itshintsha ilebhile engagqibekanga ethi "Gratis AI Agent" kwintloko yencoko nakwimenyu yolawulo ngegama lakho lemveliso. Yishiye ingenanto ukuze kusetyenziswe engagqibekanga. |
| **Fihla uMkhethi we-Agent** | Icimile | Xa ivuliwe, abasebenzisi abanakutshintsha phakathi kwee-agent ezintlanu ezakhelwe ngaphakathi. I-agent yangoku imiselwe koko kulungiselelwe njengokungagqibekanga ku-Iisetingi → Ngokubanzi. |
| **Sebenzisa i-Icon yeSayithi njenge-Avatar yeNcoko** | Icimile | Itshintsha i-icon ye-AI engagqibekanga kwintloko yewijethi yencoko nge-icon yesayithi ye-WordPress (esetwe phantsi koBonakalo → Yenza Ngokwezifiso → Isazisi seSayithi). |

### Iiflegi zoKhuseleko lwe-Automation {#automation-safety-flags}

I-Superdav AI Agent v1.18.0 yazisa amasango okuvunywa ngumntu kunye neerekhodi zezikhumbuzo ukuze iinkqubo ze-automation zikhuseleke ngakumbi. Olu lawulo lunokuvela kwiiflegi zeempawu okanye kwiisetingi ezihambele phambili ze-automation, kuxhomekeke kwiphakheji efakiweyo.

| Iflegi | Ehlala ikho | Inkcazelo |
|---|---|---|
| **Funa Ukuvunywa nguMntu** | Kucetyiswa ukuba kuvulwe | Imisa ii-automation ezibuthathaka de umsebenzisi ogunyazisiweyo ahlole aze aqinisekise isenzo esicetywayo. |
| **Ukuthintela Ukuphindaphindwa kwezikhumbuzo** | Ivuliwe | Irekhoda izikhumbuzo ezithunyelweyo ukuze ukuzama kwakhona okanye iinkqubo ezicwangcisiweyo zingathumeli izaziso eziphindwe kabini. |
| **Vula Izixhobo zeKhalenda** | Icimile de ilungiselelwe | Ivumela i-agent ukuba ifunde iikhalenda neziganeko ze-Google ezilungiselelweyo. |
| **Vula Izaziso ze-SMS** | Icimile de ilungiselelwe | Ivumela iinkqubo zomsebenzi ezivunyiweyo ukuba zithumele izaziso ze-TextBee SMS emva kokuba iinkcukacha zokuqinisekisa zigciniwe. |

### Ukusebenzisa Utshintsho {#applying-changes}

Cofa **Gcina Iisetingi** emva kokutshintsha nayiphi na iflegi. Utshintsho luqala ukusebenza kwangoko — akukho kucoca i-cache okanye ukuvuselelwa kwakhona kwe-plugin okufunekayo.
