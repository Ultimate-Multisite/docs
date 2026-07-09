---
title: Izilungiselelo ze-Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Izilungiselelo ze-Gratis AI Agent {#gratis-ai-agent-settings}

Isikrini esithi **Izilungiselelo → Okuthuthukisiwe** ku-Gratis AI Agent sinikeza ukucushwa kwezinga lomlawuli kokuhlanganiswa kwangemuva. Leli khasi libhala ukudluliselwa kwempendulo, okhiye babahlinzeki bosesho, ukusethwa kwesevisi ye-Superdav ephethwe, izilawuli ze-Google Calendar, izilungiselelo ze-TextBee SMS, namafulegi ezici asebenza kuyo yonke inethiwekhi.

## Ukufinyelela Izilungiselelo {#accessing-settings}

1. Ku-admin ye-WordPress, iya ku-**Gratis AI Agent → Izilungiselelo**.
2. Chofoza ithebhu ethi **Okuthuthukisiwe**.

## Ukucushwa kwe-Endpoint Yempendulo {#feedback-endpoint-configuration}

I-endpoint yempendulo ithola izicelo ze-POST ezivela ku-AI agent noma nini lapho umsebenzisi ethumela impendulo ngenkinobho yesithupha phansi, ibhena yokwazisa okuzenzakalelayo, noma umyalo othi `/report-issue`.

| Inkambu | Incazelo |
|---|---|
| **I-URL ye-Endpoint Yempendulo** | I-URL ethola ukuthunyelwa kwempendulo njengezicelo ze-HTTP POST ezinomzimba we-JSON. |
| **Feedback API Key** | I-bearer token ethunyelwa ku-`Authorization` header yesicelo ngasinye sempendulo. Shiya kungenalutho uma i-endpoint yakho ingadingi ukuqinisekiswa. |

### Umthwalo we-JSON Olindelekile {#expected-json-payload}

I-endpoint yakho yempendulo kufanele yamukele umzimba we-JSON onezinkambu ezilandelayo okungenani:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Izinkambu ezengeziwe zingase zibe khona kumthwalo kuye ngomongo wengxoxo.

### Amanani e-`triage_category` {#triagecategory-values}

Isendlalelo sokuhlunga se-AI sinikeza elinye lamanani alandelayo ku-`triage_category` ngaphambi kokudlulisa umthwalo:

| Inani | Incazelo |
|---|---|
| `factual_error` | Umsizi unikeze ulwazi lwamaqiniso olungalungile. |
| `unhelpful_answer` | Impendulo ibiyiyo ngokobuchwepheshe kodwa ingasizi. |
| `inappropriate_content` | Impendulo ibiqukethe okuqukethwe okungafanele kuboniswe kubasebenzisi. |
| `other` | Impendulo ayifananga nesigaba esaziwayo. |

### Ukuqinisekiswa {#authentication}

Uma i-endpoint yakho idinga ukuqinisekiswa, setha inkambu ethi **Feedback API Key** ibe yi-bearer token yakho. I-agent ithumela:

```
Authorization: Bearer <your-api-key>
```

Uma inkambu ethi **Feedback API Key** ingenalutho, akukho `Authorization` header ethunyelwayo.

### Ukukhubaza Ukuqoqwa Kwempendulo {#disabling-feedback-collection}

Shiya zombili izinkambu ezithi **I-URL ye-Endpoint Yempendulo** kanye ne-**Feedback API Key** zingenalutho. Inkinobho yesithupha phansi ne-UI yempendulo zihlala zibonakala kubasebenzisi, kodwa okuthunyelwayo akudluliselwa kunoma iyiphi isevisi yangaphandle.

## Brave Search API Key {#brave-search-api-key}

Futhi kuthebhu ethi **Okuthuthukisiwe**, inkambu ethi **Brave Search API Key** inika amandla ikhono le-[Usesho Lwe-Inthanethi](../configuration/internet-search).

| Inkambu | Incazelo |
|---|---|
| **Brave Search API Key** | Ukhiye wakho we-API ovela ku-dashboard yonjiniyela ye-Brave Search. Uyadingeka ukuze kunikwe amandla usesho lwe-inthanethi kumsizi we-AI. |

Ilebula yenkambu ifaka isixhumanisi esichofozekayo ekhasini lokubhalisela i-Brave Search API. Shiya kungenalutho ukuze ukhubaze usesho lwe-inthanethi.

Bheka [Usesho Lwe-Inthanethi](../configuration/internet-search) ukuthola imibhalo yabasebenzisi bokugcina mayelana nalesi sici.

## Isevisi ye-Superdav Ephethwe {#managed-superdav-service}

Superdav AI Agent v1.18.0 yengeza ama-endpoint esevisi ye-Superdav ephethwe nokulungiselela ukuxhumeka okuzenzakalelayo kumasayithi asekelwayo. Sebenzisa lezi zilawuli lapho isayithi lakho kufanele lixhume kumhlinzeki ophethwe esikhundleni se-endpoint yesevisi ecushwe ngesandla.

| Inkambu | Incazelo |
|---|---|
| **Isevisi ye-Superdav Ephethwe** | Inika amandla ukuxhumeka kwesevisi ye-Superdav esingathiwe kumasayithi asekelwayo. |
| **Lungiselela Ukuxhumeka** | Iqala ukulungiselela okuzenzakalelayo kwe-endpoint nemininingwane yokungena. Sebenzisa lokhu ngemva kokuqinisekisa ukuthi isayithi kufanele lisebenzise umhlinzeki ophethwe. |
| **I-Endpoint Yesevisi / Isimo Sokuxhumeka** | Ibonisa i-endpoint yamanje noma isimo sokuxhumeka ngemva kokulungiselela. |

Ngemva kokulungiselela, londoloza izilungiselelo bese uqinisekisa isimo sokuxhumeka ngaphambi kokuthembela ekugelezeni komsebenzi kwesevisi ephethwe. Uma ukulungiselela kwehluleka, buyekeza isiqondiso sokuzama futhi esibonisiwe bese uqinisekisa ukuthi isayithi linemvume yokusebenzisa umhlinzeki osingathiwe.

## Ukucushwa kwe-Google Calendar {#google-calendar-configuration}

Lapho izici zekhalenda ze-Superdav AI Agent v1.18.0 zinikwe amandla, i-agent ingafunda amakhalenda acushiwe nemininingwane yemicimbi. Amathuluzi ekhalenda agxile ekufundeni futhi awusizo ezikhumbuzweni eziqonda uhlelo, ekulandeleleni abahambele umcimbi, nasekuqondaniseni oxhumana nabo.

| Inkambu | Incazelo |
|---|---|
| **Imininingwane Yokungena ye-Google Calendar** | Igcina imininingwane yokungena noma ukuxhumeka kwethokheni okudingekayo ukufunda idatha yekhalenda. |
| **Ukukhethwa Kwekhalenda** | Ikhawulela ukuthi yimaphi amakhalenda acushiwe i-agent engawahlola. |
| **Isimo Sokuxhumeka Kwekhalenda** | Iqinisekisa ukuthi imininingwane yokungena yamanje ingakwazi yini ukufunda amakhalenda nemicimbi. |

Gcina imininingwane yokungena yekhalenda ikhawulelwe kumakhalenda adingwa yi-agent. Xhuma kabusha noma ujikelezise imininingwane yokungena uma isimo sibonisa ithokheni ephelelwe yisikhathi.

## Izaziso ze-TextBee SMS {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 yengeza i-TextBee njengomhlinzeki we-SMS wokugeleza komsebenzi kwezaziso okucushiwe. Izaziso ze-SMS kufanele zihambisane namasango okugunyazwa ngumuntu emilayezweni ebucayi noma ebhekiswe kubasebenzisi.

| Inkambu | Incazelo |
|---|---|
| **TextBee API Key** | Iqinisekisa izicelo kumhlinzeki we-TextBee SMS. |
| **Idivayisi / Umthumeli we-TextBee** | Ikhetha umthumeli noma idivayisi ye-TextBee esetshenziselwa imilayezo ephumayo, lapho kudingwa khona ngumhlinzeki. |
| **Izaziso ze-SMS Zinikiwe Amandla** | Ivumela ukugeleza komsebenzi okugunyaziwe ukuthumela izaziso zemiyalezo yombhalo. Shiya kukhubaziwe ukuze uvimbele ukuthunyelwa kwe-SMS. |

Thumela umlayezo wokuhlola kuphela enombolweni ephethwe umlawuli, bese uqinisekisa ukuziphatha kwesango lokugunyaza ngaphambi kokunika amandla izikhumbuzo ezihleliwe noma ezibhekiswe kwababambe iqhaza.

## Amafulegi Ezici {#feature-flags}

Futhi kwethulwa ku-v1.9.0, ithebhu ethi **Izilungiselelo → Amafulegi Ezici** inikeza amaswishi okuvula nokuvala ukusebenza ongakukhetha. Ifulegi ngalinye linikwe amandla noma likhubaziwe kuyo yonke inethiwekhi; akukho ukweqa kwendawo ngayinye ngalesi sikhathi.

### Ukufinyelela Amafulegi Ezici {#accessing-feature-flags}

1. Ku-admin ye-WordPress, iya ku-**Gratis AI Agent → Izilungiselelo**.
2. Chofoza ithebhu ethi **Amafulegi Ezici**.

### Amafulegi Okulawula Ukufinyelela {#access-control-flags}

| Ifulegi | Okuzenzakalelayo | Incazelo |
|---|---|---|
| **Khawulela Kubalawuli** | Kuvaliwe | Uma kunikwe amandla, abasebenzisi kuphela abanendima ethi `administrator` abangavula iphaneli yengxoxo ye-AI Agent. Zonke ezinye izindima zibona umlayezo othi "Xhumana nomlawuli wakho" esikhundleni salokho. |
| **Khawulela Kubalawuli Benethiwekhi** | Kuvaliwe | Uma kunikwe amandla kunethiwekhi ye-multisite, ama-Super Admins kuphela angasebenzisa i-agent. Abalawuli bamasayithi ngamanye bayavinjwa. Kuthatha kuqala kunokuthi "Khawulela Kubalawuli" uma kokubili kunikwe amandla. |
| **Vumela Ukufinyelela Kwababhalisile** | Kuvaliwe | Uma kunikwe amandla, abasebenzisi abanendima ethi `subscriber` bangasebenzisa i-interface yengxoxo kodwa bakhawulelwe kumakhono okufunda kuphela (akukho ukudalwa kokuthunyelwe noma izinguquko zezilungiselelo). |
| **Khubaza Kwabangewona Amalungu** | Kuvaliwe | Kuhlanganisa nesimo sobulungu be-Ultimate Multisite. Uma kunikwe amandla, ingxoxo iyafihlwa kumasayithi angenabo ubulungu obusebenzayo. |

### Amafulegi Okubhrenda {#branding-flags}

| Ifulegi | Okuzenzakalelayo | Incazelo |
|---|---|---|
| **Fihla Unyaweni othi "Powered by Gratis AI Agent"** | Kuvaliwe | Kususa umugqa wokubalulwa kwebhrendi oboniswa ezansi kwe-widget yengxoxo. Kunconywa ekusetshenzisweni kwe-white-label. |
| **Igama Le-Agent Elenziwe Ngokwezifiso** | *(akunalutho)* | Kushintsha ilebula ezenzakalelayo ethi "Gratis AI Agent" ekhanda lengxoxo nakumenyu ye-admin ngegama lakho lomkhiqizo. Shiya kungenalutho ukuze usebenzise okuzenzakalelayo. |
| **Fihla Isikhethi se-Agent** | Kuvaliwe | Uma kunikwe amandla, abasebenzisi abakwazi ukushintsha phakathi kwama-agent amahlanu akhelwe ngaphakathi. I-agent yamanje igxiliswa kulokho okucushwe njengokuzenzakalelayo ku-Izilungiselelo → Okuvamile. |
| **Sebenzisa Isithonjana Sesayithi njenge-Avatar Yengxoxo** | Kuvaliwe | Kushintsha isithonjana se-AI esizenzakalelayo ekhanda le-widget yengxoxo ngesithonjana sesayithi le-WordPress (esisethwe ngaphansi kokuthi Ukubukeka → Enza Ngokwezifiso → Ubuwena Besayithi). |

### Amafulegi Okuphepha Kokuzenzakalela {#automation-safety-flags}

Superdav AI Agent v1.18.0 yethula amasango okugunyazwa ngumuntu namarekhodi ezikhumbuzo ukuze ukusebenza okuzenzakalelayo kuphephe kakhudlwana. Lezi zilawuli zingase zivele kumafulegi ezici noma kuzilungiselelo ezithuthukisiwe zokuzenzakalela, kuye ngephakheji efakiwe.

| Ifulegi | Okuzenzakalelayo | Incazelo |
|---|---|---|
| **Dinga Ukugunyazwa Ngumuntu** | Kunconywa kuvuliwe | Kumisa ukuzenzakalela okubucayi kuze kube yilapho umsebenzisi ogunyaziwe ebuyekeza futhi eqinisekisa isenzo esihlongozwayo. |
| **Ukususa Ukuphindaphinda Kwezikhumbuzo** | Kuvuliwe | Kurekhoda izikhumbuzo ezithunyelwe ukuze ukuzama futhi noma ukusebenza okuhleliwe kungathumeli izaziso eziphindaphindiwe. |
| **Nika Amandla Amathuluzi Ekhalenda** | Kuvaliwe kuze kucushwe | Kuvumela i-agent ukufunda amakhalenda nemicimbi ye-Google ecushiwe. |
| **Nika Amandla Izaziso ze-SMS** | Kuvaliwe kuze kucushwe | Kuvumela ukugeleza komsebenzi okugunyaziwe ukuthumela izaziso ze-TextBee SMS ngemva kokuthi imininingwane yokungena isilondoloziwe. |

### Ukusebenzisa Izinguquko {#applying-changes}

Chofoza **Londoloza Izilungiselelo** ngemva kokushintsha noma yiliphi ifulegi. Izinguquko ziqala ukusebenza ngokushesha — akukho ukuhlanzwa kwe-cache noma ukuvuselelwa kwe-plugin okudingekayo.
