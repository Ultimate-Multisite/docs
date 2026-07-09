---
title: Stillingar Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Stillingar Gratis AI Agent

Skjárinn **Stillingar → Ítarlegt** í Gratis AI Agent veitir stillingar á stjórnandastigi fyrir bakendatengingar. Þessi síða skjalfestir áframsendingu endurgjafar, lykla fyrir leitaraðila, uppsetningu á stýrðri Superdav þjónustu, stýringar fyrir Google Calendar, TextBee SMS-stillingar og eiginleikafána fyrir allt netið.

## Að opna stillingar

1. Í WordPress stjórnborðinu, farðu í **Gratis AI Agent → Stillingar**.
2. Smelltu á flipann **Ítarlegt**.

## Stilling endurgjafarendapunkts

Endurgjafarendapunkturinn tekur á móti POST-beiðnum frá AI-agentinum í hvert sinn sem notandi sendir inn endurgjöf með þumal-niður hnappinum, sjálfvirka ábendingaborðanum eða `/report-issue` skipuninni.

| Reitur | Lýsing |
|---|---|
| **Vefslóð endurgjafarendapunkts** | Vefslóðin sem tekur á móti endurgjöf sem HTTP POST-beiðnum með JSON-meginmáli. |
| **Feedback API Key** | bearer token sem er sent í `Authorization` header hverrar endurgjafarbeiðni. Skildu eftir autt ef endapunkturinn þinn krefst ekki auðkenningar. |

### Vænt JSON-álag

Endurgjafarendapunkturinn þinn verður að samþykkja JSON-meginmál með að minnsta kosti eftirfarandi reitum:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Aukareitir kunna að vera til staðar í álaginu eftir samhengi samtalsins.

### Gildi fyrir `triage_category`

AI-flokkunarlagið úthlutar einu af eftirfarandi gildum til `triage_category` áður en álagið er sent áfram:

| Gildi | Merking |
|---|---|
| `factual_error` | Aðstoðarmaðurinn veitti rangar staðreyndaupplýsingar. |
| `unhelpful_answer` | Svarið var tæknilega rétt en ekki gagnlegt. |
| `inappropriate_content` | Svarið innihélt efni sem ætti ekki að vera sýnt notendum. |
| `other` | Endurgjöfin passaði ekki við þekktan flokk. |

### Auðkenning

Ef endapunkturinn þinn krefst auðkenningar skaltu stilla reitinn **Feedback API Key** á bearer token-inn þinn. Agentinn sendir:

```
Authorization: Bearer <your-api-key>
```

Ef reiturinn **Feedback API Key** er tómur er enginn `Authorization` header sendur.

### Að slökkva á söfnun endurgjafar

Skildu bæði reitina **Vefslóð endurgjafarendapunkts** og **Feedback API Key** eftir auða. Þumal-niður hnappurinn og endurgjafarviðmótið haldast sýnileg notendum, en innsendingar eru ekki sendar áfram til neinnar ytri þjónustu.

## Brave Search API Key

Einnig á flipanum **Ítarlegt** virkjar reiturinn **Brave Search API Key** eiginleikann [Internet Search](../configuration/internet-search).

| Reitur | Lýsing |
|---|---|
| **Brave Search API Key** | API-lykillinn þinn úr þróunarborði Brave Search. Nauðsynlegt til að virkja internetleit í AI-aðstoðarmanninum. |

Merki reitsins inniheldur smellanlegan tengil á skráningarsíðu Brave Search API. Skildu eftir autt til að slökkva á internetleit.

Sjá [Internet Search](../configuration/internet-search) fyrir skjöl fyrir endanotendur um þennan eiginleika.

## Stýrð Superdav þjónusta

Superdav AI Agent v1.18.0 bætir við stýrðum Superdav þjónustuendapunktum og sjálfvirkri úthlutun tenginga fyrir studdar vefsíður. Notaðu þessar stýringar þegar vefsvæðið þitt ætti að tengjast hýsta þjónustuaðilanum í stað handstillts þjónustuendapunkts.

| Reitur | Lýsing |
|---|---|
| **Stýrð Superdav þjónusta** | Virkjar tengingu við hýstu Superdav þjónustuna fyrir studdar vefsíður. |
| **Úthluta tengingu** | Ræsir sjálfvirka úthlutun endapunkts og auðkenna. Notaðu þetta eftir að hafa staðfest að vefsvæðið eigi að nota stýrða þjónustuaðilann. |
| **Þjónustuendapunktur / tengingarstaða** | Sýnir núverandi endapunkt eða tengingarstöðu eftir úthlutun. |

Eftir úthlutun skaltu vista stillingar og staðfesta tengingarstöðuna áður en þú treystir á verkflæði stýrðrar þjónustu. Ef úthlutun mistekst skaltu skoða leiðbeiningar um endurtilraun sem birtast og staðfesta að vefsvæðið hafi heimild til að nota hýsta þjónustuaðilann.

## Stilling Google Calendar

Þegar dagatalseiginleikar Superdav AI Agent v1.18.0 eru virkjaðir getur agentinn lesið stillt dagatöl og upplýsingar um viðburði. Dagatalsverkfæri eru lesmiðuð og gagnleg fyrir áminningar sem taka mið af dagskrá, eftirfylgni með þátttakendum og samsvörun tengiliða.

| Reitur | Lýsing |
|---|---|
| **Google Calendar auðkenni** | Geymir auðkennin eða token-tenginguna sem þarf til að lesa dagatalsgögn. |
| **Val dagatals** | Takmarkar hvaða stilltu dagatöl agentinn má skoða. |
| **Tengingarstaða dagatals** | Staðfestir hvort núverandi auðkenni geti lesið dagatöl og viðburði. |

Haltu dagatalsauðkennum takmörkuðum við þau dagatöl sem agentinn þarf. Tengdu aftur eða endurnýjaðu auðkenni ef staðan gefur til kynna útrunnið token.

## TextBee SMS-tilkynningar

Superdav AI Agent v1.18.0 bætir TextBee við sem SMS-þjónustuaðila fyrir stillt tilkynningaverkflæði. SMS-tilkynningar ættu að vera paraðar við mannleg samþykktarhlið fyrir viðkvæm skilaboð eða skilaboð sem snúa að notendum.

| Reitur | Lýsing |
|---|---|
| **TextBee API-lykill** | Auðkennir beiðnir til TextBee SMS-þjónustuaðilans. |
| **TextBee tæki / sendandi** | Velur TextBee sendanda eða tæki sem er notað fyrir útgående skilaboð, þegar þjónustuaðilinn krefst þess. |
| **SMS-tilkynningar virkjaðar** | Leyfir samþykktum verkflæðum að senda textaskilaboðatilkynningar. Hafðu óvirkt til að koma í veg fyrir SMS-sendingar. |

Sendu prófunarskilaboð aðeins á númer í eigu stjórnanda og staðfestu síðan hegðun samþykktarhliða áður en þú virkjar tímasettar áminningar eða áminningar sem snúa að þátttakendum.

## Eiginleikafánar

Einnig kynnt í v1.9.0, flipinn **Stillingar → Eiginleikafánar** veitir rofa fyrir valfrjálsa virkni. Hver fáni er annaðhvort virkur eða óvirkur fyrir allt netið; engin yfirskrift fyrir hvert vefsvæði er til staðar sem stendur.

### Að opna eiginleikafána

1. Í WordPress stjórnborðinu, farðu í **Gratis AI Agent → Stillingar**.
2. Smelltu á flipann **Eiginleikafánar**.

### Aðgangsstýringarfánar

| Flagg | Sjálfgefið | Lýsing |
|---|---|---|
| **Takmarka við stjórnendur** | Slökkt | Þegar virkjað geta aðeins notendur með `administrator` hlutverkið opnað AI Agent spjallborðið. Öll önnur hlutverk sjá í staðinn skilaboðin „Hafðu samband við stjórnandann þinn“. |
| **Takmarka við netstjórnendur** | Slökkt | Þegar virkjað á multisite-neti geta aðeins Super Admins notað agentinn. Stjórnendur einstakra vefja eru útilokaðir. Hefur forgang fram yfir „Takmarka við stjórnendur“ ef bæði eru virkjuð. |
| **Leyfa aðgang áskrifenda** | Slökkt | Þegar virkjað geta notendur með `subscriber` hlutverkið notað spjallviðmótið en takmarkast við lesaðgang (engin færslusmíði eða breytingar á stillingum). |
| **Slökkva fyrir þá sem eru ekki meðlimir** | Slökkt | Samþættist við aðildarstöðu Ultimate Multisite. Þegar virkjað er spjall falið fyrir vefi sem eru ekki með virka aðild. |

### Vörumerkingarflögg

| Flagg | Sjálfgefið | Lýsing |
|---|---|---|
| **Fela „Powered by Gratis AI Agent“ í fæti** | Slökkt | Fjarlægir vörumerkingartilvísunarlínuna sem birtist neðst í spjallgræjunni. Mælt með fyrir white-label uppsetningar. |
| **Sérsniðið agent-nafn** | *(autt)* | Kemur í stað sjálfgefna merkisins „Gratis AI Agent“ í spjallhausnum og admin-valmyndinni með þínu eigin vöruheiti. Skildu autt eftir til að nota sjálfgefið. |
| **Fela agent-val** | Slökkt | Þegar virkjað geta notendur ekki skipt á milli fimm innbyggðu agentanna. Núverandi agent er fastur við það sem er stillt sem sjálfgefið í Settings → General. |
| **Nota vefikon sem spjall-avatar** | Slökkt | Kemur í stað sjálfgefna AI-táknsins í haus spjallgræjunnar með WordPress vefikoninu (stillt undir Appearance → Customize → Site Identity). |

### Öryggisflögg sjálfvirkni

Superdav AI Agent v1.18.0 kynnir samþykkishlið manna og áminningarskrár fyrir öruggari keyrslur sjálfvirkni. Þessar stýringar kunna að birtast í eiginleikaflöggum eða háþróuðum sjálfvirknistillingum, eftir því hvaða pakki er uppsettur.

| Flagg | Sjálfgefið | Lýsing |
|---|---|---|
| **Krefjast samþykkis manns** | Mælt með virkt | Stöðvar viðkvæma sjálfvirkni þar til heimilaður notandi fer yfir og staðfestir fyrirhugaða aðgerð. |
| **Afritunarvörn áminninga** | Virkt | Skráir sendar áminningar svo endurtilraunir eða áætlaðar keyrslur sendi ekki tvíteknar tilkynningar. |
| **Virkja dagatalstæki** | Slökkt þar til stillt | Leyfir agentinum að lesa stillt Google-dagatöl og viðburði. |
| **Virkja SMS-tilkynningar** | Slökkt þar til stillt | Leyfir samþykktum verkflæðum að senda TextBee SMS-tilkynningar eftir að auðkenni hafa verið vistuð. |

### Að beita breytingum

Smelltu á **Save Settings** eftir að hafa kveikt eða slökkt á einhverju flaggi. Breytingar taka gildi strax — engin hreinsun skyndiminnis eða endurvirkjun plugins er nauðsynleg.
