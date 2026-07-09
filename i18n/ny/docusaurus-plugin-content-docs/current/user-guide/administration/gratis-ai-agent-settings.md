---
title: Zokonda za Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Zokonda za Gratis AI Agent

Tsamba la **Zokonda → Zapamwamba** mu Gratis AI Agent limapereka kasinthidwe ka mulingo wa woyang'anira wa maulumikizidwe a backend. Tsambali limafotokoza kutumiza ndemanga, makiyi a opereka kusaka, kukhazikitsa ntchito yoyendetsedwa ya Superdav, zowongolera za Google Calendar, zokonda za SMS za TextBee, ndi ma feature flags a pa netiweki yonse.

## Kupeza Zokonda

1. Mu WordPress admin, pitani ku **Gratis AI Agent → Zokonda**.
2. Dinani tabu ya **Zapamwamba**.

## Kasinthidwe ka Feedback Endpoint

Feedback endpoint imalandira zopempha za POST kuchokera kwa AI agent nthawi iliyonse wogwiritsa ntchito akatumiza ndemanga kudzera pa batani la thumbs-down, banner ya auto-prompt, kapena lamulo la `/report-issue`.

| Gawo | Kufotokozera |
|---|---|
| **Feedback Endpoint URL** | URL yomwe imalandira zotumiza za ndemanga ngati zopempha za HTTP POST zokhala ndi thupi la JSON. |
| **Feedback API Key** | bearer token yotumizidwa mu `Authorization` header ya pempho lililonse la ndemanga. Siyani chopanda kanthu ngati endpoint yanu sifuna kutsimikizira. |

### JSON Payload Yoyembekezeredwa

Feedback endpoint yanu iyenera kuvomereza thupi la JSON lokhala ndi magawo osachepera awa:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Magawo owonjezera angakhalepo mu payload kutengera nkhani ya zokambirana.

### Makhalidwe a `triage_category`

Gawo la AI triage limapereka chimodzi mwa makhalidwe otsatirawa ku `triage_category` musanatumize payload:

| Mtengo | Tanthauzo |
|---|---|
| `factual_error` | Wothandizira anapereka chidziwitso cholakwika cha zenizeni. |
| `unhelpful_answer` | Yankho linali lolondola mwaukadaulo koma silinali lothandiza. |
| `inappropriate_content` | Yankho linali ndi zomwe siziyenera kuwonetsedwa kwa ogwiritsa ntchito. |
| `other` | Ndemanga sinagwirizane ndi gulu lodziwika. |

### Kutsimikizira

Ngati endpoint yanu imafuna kutsimikizira, ikani gawo la **Feedback API Key** kukhala bearer token yanu. Agent imatumiza:

```
Authorization: Bearer <your-api-key>
```

Ngati gawo la **Feedback API Key** lili lopanda kanthu, palibe `Authorization` header yomwe imatumizidwa.

### Kuzimitsa Kusonkhanitsa Ndemanga

Siyani magawo onse a **Feedback Endpoint URL** ndi **Feedback API Key** opanda kanthu. Batani la thumbs-down ndi UI ya ndemanga zimakhalabe zowoneka kwa ogwiritsa ntchito, koma zotumiza sizitumizidwa ku ntchito iliyonse yakunja.

## Brave Search API Key

Komanso pa tabu ya **Zapamwamba**, gawo la **Brave Search API Key** limathandiza luso la [Kusaka pa Intaneti](../configuration/internet-search).

| Gawo | Kufotokozera |
|---|---|
| **Brave Search API Key** | API key yanu kuchokera ku Brave Search developer dashboard. Imafunika kuti kuthandize kusaka pa intaneti mu AI assistant. |

Chizindikiro cha gawoli chimaphatikizapo ulalo wodinika wopita ku tsamba lolembetsa la Brave Search API. Siyani chopanda kanthu kuti muzimitse kusaka pa intaneti.

Onani [Kusaka pa Intaneti](../configuration/internet-search) kuti mupeze zolemba za ogwiritsa ntchito omaliza za mbali imeneyi.

## Ntchito Yoyendetsedwa ya Superdav

Superdav AI Agent v1.18.0 imawonjezera ma endpoint a ntchito yoyendetsedwa ya Superdav ndi kupereka kulumikizana kodzidzimutsa kwa ma site othandizidwa. Gwiritsani ntchito zowongolera izi pamene site yanu iyenera kulumikizana ndi provider wolandilidwa m'malo mwa service endpoint yokonzedwa pamanja.

| Gawo | Kufotokozera |
|---|---|
| **Ntchito Yoyendetsedwa ya Superdav** | Imathandiza kulumikizana kwa hosted Superdav service kwa ma site othandizidwa. |
| **Pereka Kulumikizana** | Imayambitsa kupereka endpoint ndi zitsimikizo modzidzimutsa. Gwiritsani ntchito izi mutatsimikizira kuti site iyenera kugwiritsa ntchito provider yoyendetsedwa. |
| **Service Endpoint / Mkhalidwe wa Kulumikizana** | Imawonetsa endpoint yapano kapena mkhalidwe wa kulumikizana pambuyo popereka. |

Pambuyo popereka, sungani zokonda ndi kutsimikizira mkhalidwe wa kulumikizana musanadalire ma workflow a managed-service. Ngati kupereka kwalephera, onaninso malangizo obwerezanso omwe awonetsedwa ndipo tsimikizirani kuti site ili ndi chilolezo chogwiritsa ntchito provider wolandilidwa.

## Kasinthidwe ka Google Calendar

Pamene mbali za kalendala za Superdav AI Agent v1.18.0 zathandizidwa, agent imatha kuwerenga makalendala okonzedwa ndi tsatanetsatane wa zochitika. Zida za kalendala zimayang'ana pa kuwerenga ndipo ndi zothandiza pa zikumbutso zoganizira ndandanda, kutsatira opezeka, ndi kufananitsa ma contact.

| Gawo | Kufotokozera |
|---|---|
| **Zitsimikizo za Google Calendar** | Zimasunga zitsimikizo kapena kulumikizana kwa token komwe kumafunika kuti kuwerenge deta ya kalendala. |
| **Kusankha Kalendala** | Kumachepetsa makalendala okonzedwa omwe agent ingayang'ane. |
| **Mkhalidwe wa Kulumikizana kwa Kalendala** | Kumatsimikizira ngati zitsimikizo zapano zingawerenge makalendala ndi zochitika. |

Sungani zitsimikizo za kalendala zochepa ku makalendala omwe agent imafuna. Lumikizaninso kapena sinthani zitsimikizo ngati mkhalidwe ukuwonetsa token yomwe yatha ntchito.

## Zidziwitso za SMS za TextBee

Superdav AI Agent v1.18.0 imawonjezera TextBee ngati provider wa SMS wa ma workflow a zidziwitso okonzedwa. Zidziwitso za SMS ziyenera kuphatikizidwa ndi zipata zovomerezedwa ndi munthu pa mauthenga okhudza zinthu zachinsinsi kapena owonekera kwa ogwiritsa ntchito.

| Gawo | Kufotokozera |
|---|---|
| **TextBee API Key** | Imatsimikizira zopempha ku provider wa TextBee SMS. |
| **TextBee Device / Wotumiza** | Imasankha wotumiza kapena chipangizo cha TextBee chogwiritsidwa ntchito pa mauthenga otuluka, ngati provider akufuna. |
| **Zidziwitso za SMS Zathandizidwa** | Zimalola ma workflow ovomerezedwa kutumiza zidziwitso za mameseji. Siyani zolepheretsedwa kuti mupewe kutumiza SMS. |

Tumizani uthenga woyesa kokha ku nambala ya woyang'anira, kenako tsimikizirani khalidwe la approval-gate musanayambitse zikumbutso zokonzedwa kapena zowonekera kwa opezeka.

## Feature Flags

Komanso zoyambitsidwa mu v1.9.0, tabu ya **Zokonda → Feature Flags** imapereka masiwichi osinthira magwiridwe antchito osankha. Flag iliyonse imakhala yathandizidwa kapena yolepheretsedwa pa netiweki yonse; palibe kusintha kwa pa site payekha panthawiyi.

### Kupeza Feature Flags

1. Mu WordPress admin, pitani ku **Gratis AI Agent → Zokonda**.
2. Dinani tabu ya **Feature Flags**.

### Ma Flag a Kuwongolera Mwayi

| Chizindikiro | Chokhazikika | Kufotokozera |
|---|---|---|
| **Chepetsani kwa Administrators** | Off | Ikayatsidwa, ogwiritsa ntchito okhawo omwe ali ndi udindo wa `administrator` ndi amene angatsegule gulu la macheza la AI Agent. Maudindo ena onse amaona uthenga wakuti "Lumikizanani ndi administrator wanu" m'malo mwake. |
| **Chepetsani kwa Network Admins** | Off | Ikayatsidwa pa netiweki ya multisite, Super Admins okha ndi amene angagwiritse ntchito agent. Admins a masaiti payekha amatsekedwa. Imakhala patsogolo pa "Chepetsani kwa Administrators" ngati zonse ziwiri zayatsidwa. |
| **Lolani Subscriber Access** | Off | Ikayatsidwa, ogwiritsa ntchito omwe ali ndi udindo wa `subscriber` angagwiritse ntchito mawonekedwe a macheza koma amangokhala ndi kuthekera kowerenga kokha (palibe kupanga zolemba kapena kusintha makonzedwe). |
| **Letsani kwa Osakhala Mamembala** | Off | Imalumikizana ndi udindo wa umembala wa Ultimate Multisite. Ikayatsidwa, macheza amabisika kwa masaiti omwe alibe umembala wogwira ntchito. |

### Zizindikiro za Branding

| Chizindikiro | Chokhazikika | Kufotokozera |
|---|---|---|
| **Bisani Mzere Wapansi wa "Powered by Gratis AI Agent"** | Off | Imachotsa mzere wa chizindikiro cha umwini womwe umawonekera pansi pa widget ya macheza. Zimalimbikitsidwa pa kukhazikitsa kwa white-label. |
| **Dzina la Agent Lokonzedwa Mwamakonda** | *(chopanda kanthu)* | Imalowetsa m'malo mwa chizindikiro chokhazikika cha "Gratis AI Agent" pamutu wa macheza ndi menyu ya admin ndi dzina lanu la product. Siyani chopanda kanthu kuti mugwiritse ntchito chokhazikika. |
| **Bisani Chosankhira Agent** | Off | Ikayatsidwa, ogwiritsa ntchito sangathe kusintha pakati pa agents asanu omangidwamo. Agent wapano amakhazikika pa chilichonse chomwe chakonzedwa ngati chokhazikika mu Settings → General. |
| **Gwiritsani Ntchito Chizindikiro cha Saiti ngati Chat Avatar** | Off | Imalowetsa m'malo mwa chizindikiro chokhazikika cha AI pamutu wa widget ya macheza ndi chizindikiro cha saiti ya WordPress (chokhazikitsidwa pansi pa Appearance → Customize → Site Identity). |

### Zizindikiro za Chitetezo cha Automation

Superdav AI Agent v1.18.0 imabweretsa zipata zovomerezedwa ndi munthu komanso zolemba za zikumbutso kuti ma automation aziyenda motetezeka. Zowongolera izi zingawonekere mu zizindikiro za feature kapena makonzedwe apamwamba a automation, kutengera phukusi lomwe layikidwa.

| Chizindikiro | Chokhazikika | Kufotokozera |
|---|---|---|
| **Funikirani Chivomerezo cha Munthu** | Zimalimbikitsidwa kuyatsidwa | Imayimitsa kaye ma automation okhudzika mpaka wogwiritsa ntchito wololedwa awunikire ndi kutsimikizira chochita chomwe chaperekedwa. |
| **Kuchotsa Zobwerezabwereza pa Zikumbutso** | On | Imalemba zikumbutso zomwe zatumizidwa kuti kuyesanso kapena mayendedwe okonzedwa zisatumize zidziwitso zobwerezabwereza. |
| **Yatsani Zida za Calendar** | Off mpaka zitakonzedwa | Imalola agent kuwerenga ma calendar ndi zochitika za Google zomwe zakonzedwa. |
| **Yatsani Zidziwitso za SMS** | Off mpaka zitakonzedwa | Imalola mayendedwe ovomerezedwa kutumiza zidziwitso za TextBee SMS pambuyo poti credentials zasungidwa. |

### Kugwiritsa Ntchito Zosintha

Dinani **Save Settings** mutasintha chizindikiro chilichonse. Zosintha zimayamba kugwira ntchito nthawi yomweyo — palibe kuflush cache kapena kuyatsanso plugin komwe kumafunika.
