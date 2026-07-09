---
title: Litlhophiso tsa Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Ditlhophiso tsa Gratis AI Agent

Skrine sa **Ditlhophiso → Tse tsoetseng pele** ho Gratis AI Agent se fana ka tlhophiso ya boemo ba motsamaisi bakeng sa dikgokahanyo tsa karolo e ka morao. Leqephe lena le ngola ka ho fetisetsa maikutlo, dinotlolo tsa bafani ba patlo, tlhophiso ya tshebeletso ya Superdav e laolwang, ditaolo tsa Google Calendar, ditlhophiso tsa SMS tsa TextBee, le difolakha tsa ditshebetso tse sebetsang netwekeng yohle.

## Ho fihlella Ditlhophiso

1. Ho tsamaiso ya WordPress, eya ho **Gratis AI Agent → Ditlhophiso**.
2. Tobetsa tab ya **Tse tsoetseng pele**.

## Tlhophiso ya Ntlha ya Pheletso ya Maikutlo

Ntlha ya pheletso ya maikutlo e amohela dikopo tsa POST tse tswang ho AI agent neng kapa neng ha mosebedisi a romela maikutlo ka konopo ya monwana o supang tlase, bannere ya kgothaletso ya boiketsetso, kapa taelo ya `/report-issue`.

| Lebala | Tlhaloso |
|---|---|
| **URL ya Ntlha ya Pheletso ya Maikutlo** | URL e amohelang dithomello tsa maikutlo jwalo ka dikopo tsa HTTP POST tse nang le mmele wa JSON. |
| **Feedback API Key** | bearer token e romelwang ho `Authorization` header ya kopo ka nngwe ya maikutlo. Tlohela ho se na letho haeba ntlha ya hao ya pheletso e sa hloke netefatso. |

### Moroalo wa JSON o Lebelletsweng

Ntlha ya hao ya pheletso ya maikutlo e tlameha ho amohela mmele wa JSON o nang le bonyane mabala a latelang:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Mabala a eketsehileng a ka ba teng morwalong wa data ho ya ka moelelo wa puisano.

### Ditekanyetso tsa `triage_category`

Lera la AI la ho hlopha le abela e nngwe ya ditekanyetso tse latelang ho `triage_category` pele le fetisetsa moroalo wa data:

| Boleng | Moelelo |
|---|---|
| `factual_error` | Mothusi o fane ka tlhahisoleseding ya nnete e fosahetseng. |
| `unhelpful_answer` | Karabo e ne e nepahetse ka botekgeniki empa e se molemo. |
| `inappropriate_content` | Karabo e ne e na le dikahare tse sa lokelang ho bontshwa basebedisi. |
| `other` | Maikutlo ha a a lekana le sehlopha se tsejwang. |

### Netefatso

Haeba ntlha ya hao ya pheletso e hloka netefatso, beha lebala la **Feedback API Key** ho bearer token ya hao. Agent e romela:

```
Authorization: Bearer <your-api-key>
```

Haeba lebala la **Feedback API Key** le se na letho, ha ho `Authorization` header e romelwang.

### Ho Tima Pokello ya Maikutlo

Tlohela mabala a **URL ya Ntlha ya Pheletso ya Maikutlo** le **Feedback API Key** a se na letho. Konopo ya monwana o supang tlase le UI ya maikutlo di dula di bonahala ho basebedisi, empa dithomello ha di fetisetswe tshebeletsong efe kapa efe ya kantle.

## Brave Search API Key

Hape ho tab ya **Tse tsoetseng pele**, lebala la **Brave Search API Key** le bulela bokgoni ba [Patlo ya Inthanete](../configuration/internet-search).

| Lebala | Tlhaloso |
|---|---|
| **Brave Search API Key** | Senotlolo sa hao sa API se tswang ho dashboard ya bahlahisi ba Brave Search. Se a hlokahala ho bulela patlo ya inthanete ho mothusi wa AI. |

Leibole ya lebala e kenyelletsa sehokelo se tobetsehang se isang leqepheng la ho ingodisa la Brave Search API. Tlohela ho se na letho ho tima patlo ya inthanete.

Sheba [Patlo ya Inthanete](../configuration/internet-search) bakeng sa ditokomane tsa basebedisi ba qetelo mabapi le tshebetso ena.

## Tshebeletso ya Superdav e Laolwang

Superdav AI Agent v1.18.0 e eketsa dintlha tsa pheletso tsa tshebeletso ya Superdav e laolwang le ho fana ka kgokahanyo ka boiketsetso bakeng sa disaete tse tshehetswang. Sebedisa ditaolo tsena ha saete ya hao e lokela ho hokela ho mofani ya tshwerweng ho ena le ntlha ya pheletso ya tshebeletso e hlophisitsweng ka letsoho.

| Lebala | Tlhaloso |
|---|---|
| **Tshebeletso ya Superdav e Laolwang** | E bulela kgokahanyo ya tshebeletso ya Superdav e tshwerweng bakeng sa disaete tse tshehetswang. |
| **Fana ka Kgokahanyo** | E qala ho fana ka ntlha ya pheletso le dintlha tsa boitsebahatso ka boiketsetso. Sebedisa sena ka mora ho netefatsa hore saete e lokela ho sebedisa mofani ya laolwang. |
| **Ntlha ya Pheletso ya Tshebeletso / Boemo ba Kgokahanyo** | E bontsha ntlha ya pheletso ya jwale kapa boemo ba kgokahanyo ka mora ho fana. |

Ka mora ho fana, boloka ditlhophiso mme o netefatse boemo ba kgokahanyo pele o itshetleha ka ditsamaiso tsa tshebetso tsa tshebeletso e laolwang. Haeba ho fana ho hloleha, lekola tataiso ya ho leka hape e bontshitsweng mme o netefatse hore saete e na le tumello ya ho sebedisa mofani ya tshwerweng.

## Tlhophiso ya Google Calendar

Ha ditshebetso tsa khalendara tsa Superdav AI Agent v1.18.0 di butswe, agent e ka bala dikhalendara tse hlophisitsweng le dintlha tsa diketsahalo. Disebediswa tsa khalendara di shebane le ho bala mme di molemo bakeng sa dikgopotso tse elang kemiso hloko, ho latela bankakarolo, le ho bapisa mabitso a kgokahanyo.

| Lebala | Tlhaloso |
|---|---|
| **Dintlha tsa Boitsebahatso tsa Google Calendar** | Di boloka dintlha tsa boitsebahatso kapa kgokahanyo ya token e hlokahalang ho bala data ya khalendara. |
| **Kgetho ya Khalendara** | E lekanyetsa hore na ke dikhalendara dife tse hlophisitsweng tseo agent e ka di hlahlobang. |
| **Boemo ba Kgokahanyo ya Khalendara** | E netefatsa hore na dintlha tsa boitsebahatso tsa jwale di ka bala dikhalendara le diketsahalo. |

Boloka dintlha tsa boitsebahatso tsa khalendara di lekanyeditswe feela ho dikhalendara tseo agent e di hlokang. Hokela hape kapa potoloha dintlha tsa boitsebahatso haeba boemo bo bontsha token e feletsweng ke nako.

## Ditsebiso tsa SMS tsa TextBee

Superdav AI Agent v1.18.0 e eketsa TextBee jwalo ka mofani wa SMS bakeng sa ditsamaiso tsa tshebetso tsa ditsebiso tse hlophisitsweng. Ditsebiso tsa SMS di lokela ho kopanngwa le dikgoro tsa tumello ya motho bakeng sa melaetsa e hlokolosi kapa e tobaneng le basebedisi.

| Lebala | Tlhaloso |
|---|---|
| **TextBee API Key** | E netefatsa dikopo ho mofani wa SMS wa TextBee. |
| **Sesebediswa sa TextBee / Moromelli** | E kgetha moromelli kapa sesebediswa sa TextBee se sebediswang bakeng sa melaetsa e tswang, ha ho hlokahala ke mofani. |
| **Ditsebiso tsa SMS di Butswe** | E dumella ditsamaiso tsa tshebetso tse amohetsweng ho romela ditsebiso tsa melaetsa ya mongolo. Tlohela di timilwe ho thibela dithomello tsa SMS. |

Romela molaetsa wa teko feela nomorong e nang le motsamaisi, ebe o netefatsa boitshwaro ba kgoro ya tumello pele o bulela dikgopotso tse hlophisitsweng kapa tse tobaneng le bankakarolo.

## Difolakha tsa Ditshebetso

Hape e hlahisitswe ho v1.9.0, tab ya **Ditlhophiso → Difolakha tsa Ditshebetso** e fana ka diswitjhi tsa ho bulela kapa ho tima tshebetso ya boikgethelo. Folakha ka nngwe e ka ba e butswe kapa e timilwe netwekeng yohle; ha ho na phetoho e ikgethileng bakeng sa saete ka nngwe nakong ena.

### Ho fihlella Difolakha tsa Ditshebetso

1. Ho tsamaiso ya WordPress, eya ho **Gratis AI Agent → Ditlhophiso**.
2. Tobetsa tab ya **Difolakha tsa Ditshebetso**.

### Difolakha tsa Taolo ya Phihlello

| Folaga | Ya kamehla | Tlhaloso |
|---|---|---|
| **Thibela ho Administrators** | E timme | Ha e butswe, ke basebedisi feela ba nang le karolo ya `administrator` ba ka bulang phanele ya puisano ya AI Agent. Dikarolo tse ding tsohle di bona molaetsa wa "Ikgokahanye le motsamaisi wa hao" sebakeng sa yona. |
| **Thibela ho Network Admins** | E timme | Ha e butswe marangrang a multisite, ke Super Admins feela ba ka sebedisang agent. Batsamaisi ba site ka bonngwe ba thibetswe. E ba ka hodimo ho "Thibela ho Administrators" haeba bobedi di butswe. |
| **Dumella Phihlello ya Subscriber** | E timme | Ha e butswe, basebedisi ba nang le karolo ya `subscriber` ba ka sebedisa sebopeho sa puisano empa ba lekanyeditswe ho bokgoni ba ho bala feela (ha ho bopi ba poso kapa diphetoho tsa disetting). |
| **Tima bakeng sa Bao e seng Ditho** | E timme | E hokahana le boemo ba botho ba Ultimate Multisite. Ha e butswe, puisano e patilwe bakeng sa di-site tse se nang botho bo sebetsang. |

### Difolaga tsa Branding

| Folaga | Ya kamehla | Tlhaloso |
|---|---|---|
| **Pata Maoto a "Powered by Gratis AI Agent"** | E timme | E tlosa mola wa kamohelo ya branding o bontshwang tlase ho widget ya puisano. E kgothaletswa bakeng sa diphatlalatso tsa white-label. |
| **Lebitso la Agent le Ikgethileng** | *(ha ho letho)* | E nkela leibole ya kamehla ya "Gratis AI Agent" hloohong ya puisano le lenaneng la admin ka lebitso la sehlahiswa sa hao. E tlohele e se na letho ho sebedisa ya kamehla. |
| **Pata Kgetho ya Agent** | E timme | Ha e butswe, basebedisi ba ke ke ba fetola pakeng tsa di-agent tse hlano tse hahilweng ka hare. Agent ya jwale e tiisitswe ho eng kapa eng e hlophisitsweng e le ya kamehla ho Settings → General. |
| **Sebedisa Letshwao la Site e le Avatar ya Puisano** | E timme | E nkela letshwao la kamehla la AI hloohong ya widget ya puisano ka letshwao la site ya WordPress (le behilweng tlasa Appearance → Customize → Site Identity). |

### Difolaga tsa Polokeho ya Automation

Superdav AI Agent v1.18.0 e hlahisa dikgoro tsa tumello ya motho le direkoto tsa dikhopotso bakeng sa ho tsamaisa automation ka polokeho e kgolo. Ditaolo tsena di ka hlaha ho difolaga tsa dikarolo kapa disetting tsa automation tse tsoetseng pele, ho ya ka package e kentsweng.

| Folaga | Ya kamehla | Tlhaloso |
|---|---|---|
| **Hloka Tumello ya Motho** | E kgothaletswa hore e bulehe | E emisa di-automation tse hlokolosi ho fihlela mosebedisi ya dumelletsweng a hlahloba le ho netefatsa ketso e sisintsweng. |
| **Ho Tlosa Phetapheto ya Dikhopotso** | E butswe | E rekota dikhopotso tse rometsweng e le hore diteko hape kapa ditshebetso tse rerilweng di se ke tsa romela ditsebiso tse phetwang. |
| **Bulela Disebediswa tsa Khalendara** | E timme ho fihlela e hlophiswa | E dumella agent ho bala dikhalendara le diketsahalo tsa Google tse hlophisitsweng. |
| **Bulela Ditsebiso tsa SMS** | E timme ho fihlela e hlophiswa | E dumella mekgwa ya mosebetsi e amohetsweng ho romela ditsebiso tsa TextBee SMS ka mora hore mangolo a netefatso a bolokwe. |

### Ho Kenya Diphetoho Tshebetsong

Tobetsa **Save Settings** ka mora ho fetola folaga efe kapa efe. Diphetoho di qala ho sebetsa hanghang — ha ho hlokahale ho hlakola cache kapa ho kenya plugin hape.
