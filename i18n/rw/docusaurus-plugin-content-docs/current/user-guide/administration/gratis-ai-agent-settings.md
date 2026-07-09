---
title: Igenamiterere rya Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Igenamiterere

Ekrani ya **Settings → Advanced** muri Gratis AI Agent itanga igenamiterere ryo ku rwego rw’umuyobozi ku bw’imikoranire ya backend. Uru rupapuro rusobanura kohereza feedback, imfunguzo z’abatanga ishakisha, igenamigambi rya serivisi ya Superdav icungwa, igenzura rya Google Calendar, igenamiterere rya TextBee SMS, n’ibirango by’imikorere bikora kuri network yose.

## Kugera kuri Settings

1. Muri admin ya WordPress, jya kuri **Gratis AI Agent → Settings**.
2. Kanda tab ya **Advanced**.

## Igenamiterere rya Feedback Endpoint

Feedback endpoint yakira ibisabwa bya POST biva kuri AI agent igihe cyose umukoresha atanze feedback anyuze kuri buto ya thumbs-down, banner ya auto-prompt, cyangwa command ya `/report-issue`.

| Umwanya | Ibisobanuro |
|---|---|
| **Feedback Endpoint URL** | URL yakira feedback submissions nk’ibisabwa bya HTTP POST bifite umubiri wa JSON. |
| **Feedback API Key** | Bearer token yoherezwa muri `Authorization` header ya buri feedback request. Bireke ubusa niba endpoint yawe idasaba authentication. |

### JSON Payload Itegerejwe

Feedback endpoint yawe igomba kwemera umubiri wa JSON ufite nibura imirima ikurikira:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Imirima y’inyongera ishobora kuba iri muri payload bitewe n’imiterere y’ikiganiro.

### Indangagaciro za `triage_category`

Igice cya AI triage giha `triage_category` imwe mu ndangagaciro zikurikira mbere yo kohereza payload:

| Agaciro | Icyo bisobanura |
|---|---|
| `factual_error` | Assistant yatanze amakuru y’ukuri atari yo. |
| `unhelpful_answer` | Igisubizo cyari cyo mu buryo bwa tekiniki ariko nticyari ingirakamaro. |
| `inappropriate_content` | Igisubizo cyarimo ibikubiyemo bitagombye kwerekanwa ku bakoresha. |
| `other` | Feedback ntiyahuje n’icyiciro kizwi. |

### Authentication

Niba endpoint yawe isaba authentication, shyira umwanya wa **Feedback API Key** kuri bearer token yawe. Agent yohereza:

```
Authorization: Bearer <your-api-key>
```

Niba umwanya wa **Feedback API Key** ari ubusa, nta `Authorization` header yoherezwa.

### Guhagarika Ikusanywa rya Feedback

Siga imirima yombi ya **Feedback Endpoint URL** na **Feedback API Key** ubusa. Buto ya thumbs-down na feedback UI bikomeza kugaragara ku bakoresha, ariko submissions ntizoherezwa kuri serivisi iyo ari yo yose yo hanze.

## Brave Search API Key

No kuri tab ya **Advanced**, umwanya wa **Brave Search API Key** ufungura ubushobozi bwa [Ishakisha rya Internet](../configuration/internet-search).

| Umwanya | Ibisobanuro |
|---|---|
| **Brave Search API Key** | API key yawe ivuye kuri dashboard y’abateza imbere ya Brave Search. Irakenewe kugira ngo ufungure ishakisha rya internet muri AI assistant. |

Ikirango cy’umwanya kirimo link ikandikika ijya ku rupapuro rwo kwiyandikisha rwa Brave Search API. Bireke ubusa kugira ngo uhagarike ishakisha rya internet.

Reba [Ishakisha rya Internet](../configuration/internet-search) ku nyandiko zigenewe abakoresha ba nyuma zerekeye iyi mikorere.

## Serivisi ya Superdav Icungwa

Superdav AI Agent v1.18.0 yongeramo endpoints za serivisi ya Superdav icungwa n’itangwa ry’umuyoboro ryikora ku mbuga zishyigikiwe. Koresha aya magenamigambi igihe urubuga rwawe rugomba kwihuza n’utanga serivisi yakiriwe aho gukoresha service endpoint yagenwe intoki.

| Umwanya | Ibisobanuro |
|---|---|
| **Managed Superdav Service** | Ifungura umuyoboro wa serivisi ya Superdav yakiriwe ku mbuga zishyigikiwe. |
| **Provision Connection** | Itangiza gutegura endpoint n’ibyangombwa byikora. Koresha ibi nyuma yo kwemeza ko urubuga rugomba gukoresha umutanga serivisi ucungwa. |
| **Service Endpoint / Connection Status** | Yerekana endpoint iriho ubu cyangwa uko umuyoboro uhagaze nyuma yo gutegura. |

Nyuma yo gutegura, bika igenamiterere kandi ugenzure uko umuyoboro uhagaze mbere yo kwishingikiriza ku mikorere ya managed-service. Niba gutegura binaniwe, suzuma amabwiriza yo kongera kugerageza yerekanwe kandi wemeze ko urubuga rufite uburenganzira bwo gukoresha umutanga serivisi yakiriwe.

## Igenamiterere rya Google Calendar

Iyo imikorere ya calendar ya Superdav AI Agent v1.18.0 ifunguye, agent ishobora gusoma calendars zagenwe n’ibisobanuro by’ibikorwa. Ibikoresho bya calendar bishingiye ku gusoma kandi ni ingirakamaro ku nzibutso zishingiye kuri gahunda, gukurikirana abitabiriye, no guhuza contacts.

| Umwanya | Ibisobanuro |
|---|---|
| **Google Calendar Credentials** | Bibika credentials cyangwa token connection ikenewe kugira ngo isome amakuru ya calendar. |
| **Calendar Selection** | Bigabanya calendars zagenwe agent yemerewe gusuzuma. |
| **Calendar Connection Status** | Byemeza niba credentials ziriho ubu zishobora gusoma calendars n’ibikorwa. |

Komeza credentials za calendar zigarukira kuri calendars agent ikeneye. Ongera uhuze cyangwa uhindure credentials niba status igaragaza token yarangiye.

## TextBee SMS Notifications

Superdav AI Agent v1.18.0 yongeramo TextBee nk’utanga SMS ku mikorere y’imenyesha yagenwe. SMS notifications zigomba kujyanishwa n’amarembo yo kwemeza n’umuntu ku butumwa bworoshye cyangwa bugenewe abakoresha.

| Umwanya | Ibisobanuro |
|---|---|
| **TextBee API Key** | Yemeza requests zijya ku mutanga TextBee SMS. |
| **TextBee Device / Sender** | Ihitamo sender cyangwa device ya TextBee ikoreshwa ku butumwa busohoka, igihe bisabwa n’utanga serivisi. |
| **SMS Notifications Enabled** | Yemerera workflows zemejwe kohereza text-message notifications. Bisige bifunze kugira ngo uburizemo kohereza SMS. |

Ohereza ubutumwa bw’igerageza gusa kuri nimero ifitwe n’umuyobozi, hanyuma wemeze imyitwarire y’irembo ryo kwemeza mbere yo gufungura inzibutso ziteganyijwe cyangwa zigenewe abitabiriye.

## Feature Flags

Nanone byatangijwe muri v1.9.0, tab ya **Settings → Feature Flags** itanga toggle switches z’imikorere y’inyongera. Buri flag iba ifunguye cyangwa ifunze kuri network yose; nta per-site override ihari muri iki gihe.

### Kugera kuri Feature Flags

1. Muri admin ya WordPress, jya kuri **Gratis AI Agent → Settings**.
2. Kanda tab ya **Feature Flags**.

### Ibimenyetso by’Igenzura ry’Uburenganzira

| Ibendera | Mburabuzi | Ibisobanuro |
|---|---|---|
| **Gushyira ku Bagaragaza gusa** | Bizimye | Iyo bifunguye, abakoresha bafite uruhare rwa `administrator` gusa ni bo bashobora gufungura akanama k'ikiganiro ka AI Agent. Izindi nshingano zose zibona ubutumwa bwa "Menyesha umuyobozi wawe" aho kubifungura. |
| **Gushyira ku Bayobozi b'Urusobe gusa** | Bizimye | Iyo bifunguye ku rusobe rwa multisite, Super Admins gusa ni bo bashobora gukoresha agent. Abayobozi b'imbuga ku giti cyazo barabuzwa. Bigira ububasha kurusha "Gushyira ku Bagaragaza gusa" niba byombi bifunguye. |
| **Kwemerera Subscriber Kwinjira** | Bizimye | Iyo bifunguye, abakoresha bafite uruhare rwa `subscriber` bashobora gukoresha interineti y'ikiganiro ariko bagarukira ku bushobozi bwo gusoma gusa (nta kurema inyandiko cyangwa guhindura igenamiterere). |
| **Guhagarika ku Batari Abanyamuryango** | Bizimye | Bihuzwa na Ultimate Multisite membership status. Iyo bifunguye, ikiganiro gihishwa ku mbuga zidafite membership ikora. |

### Amabendera ya Branding

| Ibendera | Mburabuzi | Ibisobanuro |
|---|---|---|
| **Guhisha Footer ya "Powered by Gratis AI Agent"** | Bizimye | Bikuraho umurongo w'icyemezo cya branding ugaragara hasi kuri chat widget. Bisabwa ku ishyirwa mu bikorwa rya white-label. |
| **Izina rya Agent Ryihariye** | *(ubusa)* | Bisimbuza akamenyetso mburabuzi ka "Gratis AI Agent" kari mu mutwe w'ikiganiro no muri menu y'ubuyobozi n'izina ry'igicuruzwa cyawe. Bisige ubusa kugira ngo ukoreshe mburabuzi. |
| **Guhisha Agent Picker** | Bizimye | Iyo bifunguye, abakoresha ntibashobora guhinduranya hagati ya agents eshanu zubatswemo. Agent iriho iba yashyizwe ku cyashizweho nka mburabuzi muri Settings → General. |
| **Gukoresha Ikirango cy'Urubuga nka Chat Avatar** | Bizimye | Bisimbuza ikimenyetso mburabuzi cya AI kiri mu mutwe wa chat widget n'ikirango cy'urubuga rwa WordPress (gishyirwa munsi ya Appearance → Customize → Site Identity). |

### Amabendera y'Umutekano w'Ubwikorezi

Superdav AI Agent v1.18.0 izana amarembo yo kwemezwa n'umuntu n'inyandiko z'inyibutsa kugira ngo imikorere y'ubwikorezi igende neza kurushaho. Izi ngenzuzi zishobora kugaragara muri feature flags cyangwa mu igenamiterere ry'ubwikorezi ryateye imbere, bitewe na package yashyizwemo.

| Ibendera | Mburabuzi | Ibisobanuro |
|---|---|---|
| **Gusaba Kwemezwa n'Umuntu** | Birasabwa kuba bifunguye | Bihagarika automations zifite ingaruka kugeza umukoresha wemerewe asuzumye kandi akemeza igikorwa giteganyijwe. |
| **Kwirinda Inyibutsa Zisubiyemo** | Bifunguye | Bibika inyibutsa zoherejwe kugira ngo kugerageza kongera cyangwa imikorere iteganyijwe bitohereza imenyesha zisubiyemo. |
| **Gufungura Ibikoresho bya Calendar** | Bizimye kugeza bibonejwe | Byemerera agent gusoma calendars na events za Google zabonejwe. |
| **Gufungura SMS Notifications** | Bizimye kugeza bibonejwe | Byemerera workflows zemejwe kohereza TextBee SMS notifications nyuma y'uko credentials zibitswe. |

### Gushyira mu Bikora Impinduka

Kanda **Save Settings** nyuma yo guhindura ibendera iryo ari ryo ryose. Impinduka zitangira gukora ako kanya — nta gusiba cache cyangwa kongera gufungura plugin bikenewe.
