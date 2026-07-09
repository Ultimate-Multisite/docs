---
title: Socruithe Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Socruithe Gratis AI Agent

Soláthraíonn an scáileán **Socruithe → Ardleibhéal** in Gratis AI Agent cumraíocht ar leibhéal riarthóra le haghaidh comhtháthuithe inneall cúil. Déanann an leathanach seo doiciméadú ar chur ar aghaidh aiseolais, eochracha soláthraithe cuardaigh, socrú seirbhíse bainistithe Superdav, rialtáin Google Calendar, socruithe SMS TextBee, agus bratacha gnéithe ar fud an líonra.

## Rochtain ar Shocruithe

1. Sa riarthóir WordPress, téigh chuig **Gratis AI Agent → Socruithe**.
2. Cliceáil an cluaisín **Ardleibhéal**.

## Cumraíocht Chríochphointe Aiseolais

Faigheann an críochphointe aiseolais iarratais POST ón ngníomhaire AI gach uair a chuireann úsáideoir aiseolas isteach tríd an gcnaipe ordóg síos, an meirge leide uathoibríoch, nó an t-ordú `/report-issue`.

| Réimse | Cur síos |
|---|---|
| **URL Chríochphointe Aiseolais** | An URL a fhaigheann aighneachtaí aiseolais mar iarratais HTTP POST le corp JSON. |
| **Feedback API Key** | bearer token a sheoltar sa `Authorization` header de gach iarratas aiseolais. Fág bán é mura dteastaíonn fíordheimhniú ó do chríochphointe. |

### Ualach JSON a bhfuiltear ag súil leis

Ní mór do do chríochphointe aiseolais glacadh le corp JSON leis na réimsí seo a leanas ar a laghad:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

D’fhéadfadh réimsí breise a bheith san ualach ag brath ar chomhthéacs an chomhrá.

### Luachanna `triage_category`

Sannann an tsraith triáise AI ceann de na luachanna seo a leanas do `triage_category` sula gcuirtear an t-ualach ar aghaidh:

| Luach | Brí |
|---|---|
| `factual_error` | Chuir an cúntóir faisnéis fhíorasach mhícheart ar fáil. |
| `unhelpful_answer` | Bhí an freagra ceart go teicniúil ach ní raibh sé úsáideach. |
| `inappropriate_content` | Bhí ábhar sa fhreagra nár cheart a thaispeáint d’úsáideoirí. |
| `other` | Níor mheaitseáil an t-aiseolas catagóir aitheanta. |

### Fíordheimhniú

Má theastaíonn fíordheimhniú ó do chríochphointe, socraigh an réimse **Feedback API Key** chuig do bearer token. Seolann an gníomhaire:

```
Authorization: Bearer <your-api-key>
```

Má tá an réimse **Feedback API Key** folamh, ní sheoltar aon `Authorization` header.

### Bailiú Aiseolais a Dhíchumasú

Fág na réimsí **URL Chríochphointe Aiseolais** agus **Feedback API Key** bán araon. Fanann an cnaipe ordóg síos agus an Chomhéadan úsáideora aiseolais infheicthe d’úsáideoirí, ach ní chuirtear aighneachtaí ar aghaidh chuig aon seirbhís sheachtrach.

## Brave Search API Key

Ar an gcluaisín **Ardleibhéal** freisin, cumasaíonn an réimse **Brave Search API Key** an cumas [Cuardach Idirlín](../configuration/internet-search).

| Réimse | Cur síos |
|---|---|
| **Brave Search API Key** | Do eochair API ó Dashboard forbróirí Brave Search. Tá sí riachtanach chun cuardach idirlín a chumasú sa chúntóir AI. |

Tá nasc inchliceáilte ar leathanach cláraithe Brave Search API san áireamh i lipéad an réimse. Fág bán é chun cuardach idirlín a dhíchumasú.

Féach [Cuardach Idirlín](../configuration/internet-search) le haghaidh doiciméadú úsáideora deiridh ar an ngné seo.

## Seirbhís Bhainistithe Superdav

Cuireann Superdav AI Agent v1.18.0 críochphointí seirbhíse bainistithe Superdav agus soláthar ceangail uathoibríoch leis do shuíomhanna tacaithe. Úsáid na rialtáin seo nuair ba cheart do do shuíomh ceangal leis an soláthraí óstáilte in ionad críochphointe seirbhíse atá cumraithe de láimh.

| Réimse | Cur síos |
|---|---|
| **Seirbhís Bhainistithe Superdav** | Cumasaíonn sé an ceangal seirbhíse óstáilte Superdav do shuíomhanna tacaithe. |
| **Soláthar Ceangail** | Tosaíonn sé soláthar uathoibríoch críochphointe agus dintiúr. Úsáid é seo tar éis a dheimhniú gur cheart don suíomh an soláthraí bainistithe a úsáid. |
| **Críochphointe Seirbhíse / Stádas Ceangail** | Taispeánann sé an críochphointe nó staid an cheangail reatha tar éis soláthair. |

Tar éis soláthair, sábháil na socruithe agus fíoraigh stádas an cheangail sula mbraitheann tú ar shreafaí oibre seirbhíse bainistithe. Má theipeann ar sholáthar, athbhreithnigh an treoir athiarrachta a thaispeántar agus deimhnigh go bhfuil cead ag an suíomh an soláthraí óstáilte a úsáid.

## Cumraíocht Google Calendar

Nuair a bhíonn gnéithe féilire Superdav AI Agent v1.18.0 cumasaithe, is féidir leis an ngníomhaire féilirí cumraithe agus sonraí imeachtaí a léamh. Tá uirlisí féilire dírithe ar léamh agus tá siad úsáideach do mheabhrúcháin atá feasach ar sceideal, obair leantach le lucht freastail, agus meaitseáil teagmhálaithe.

| Réimse | Cur síos |
|---|---|
| **Dintiúir Google Calendar** | Stórálann sé na dintiúir nó an ceangal token atá riachtanach chun sonraí féilire a léamh. |
| **Roghnú Féilire** | Cuireann sé teorainn leis na féilirí cumraithe ar féidir leis an ngníomhaire a iniúchadh. |
| **Stádas Ceangail Féilire** | Deimhníonn sé an féidir leis na dintiúir reatha féilirí agus imeachtaí a léamh. |

Coinnigh dintiúir féilire teoranta do na féilirí a theastaíonn ón ngníomhaire. Athcheangail nó rothlaigh dintiúir má léiríonn an stádas token imithe in éag.

## Fógraí SMS TextBee

Cuireann Superdav AI Agent v1.18.0 TextBee leis mar sholáthraí SMS do shreafaí oibre fógraí cumraithe. Ba cheart fógraí SMS a phéireáil le geataí faofa daonna le haghaidh teachtaireachtaí íogaire nó teachtaireachtaí os comhair úsáideoirí.

| Réimse | Cur síos |
|---|---|
| **Eochair API TextBee** | Fíordheimhníonn sí iarratais chuig soláthraí SMS TextBee. |
| **Gléas / Seoltóir TextBee** | Roghnaíonn sé an seoltóir nó an gléas TextBee a úsáidtear le haghaidh teachtaireachtaí amach, nuair a éilíonn an soláthraí é. |
| **Fógraí SMS Cumasaithe** | Ligeann sé do shreafaí oibre faofa fógraí teachtaireachta téacs a sheoladh. Fág díchumasaithe é chun seoltaí SMS a chosc. |

Seol teachtaireacht tástála chuig uimhir atá faoi úinéireacht riarthóra amháin, ansin deimhnigh iompar an gheata faofa sula gcumasaítear meabhrúcháin sceidealta nó meabhrúcháin os comhair lucht freastail.

## Bratacha Gnéithe

Tugadh isteach in v1.9.0 freisin, soláthraíonn an cluaisín **Socruithe → Bratacha Gnéithe** lasca scoránaithe le haghaidh feidhmiúlacht roghnach. Tá gach bratach cumasaithe nó díchumasaithe ar fud an líonra; níl aon sárú de réir suímh ann ag an am seo.

### Rochtain ar Bhratacha Gnéithe

1. Sa riarthóir WordPress, téigh chuig **Gratis AI Agent → Socruithe**.
2. Cliceáil an cluaisín **Bratacha Gnéithe**.

### Bratacha Rialaithe Rochtana

| Bratach | Réamhshocrú | Cur síos |
|---|---|---|
| **Srianadh do Riarthóirí** | As | Nuair atá sé cumasaithe, ní féidir ach le húsáideoirí a bhfuil an ról `administrator` acu painéal comhrá AI Agent a oscailt. Feiceann gach ról eile teachtaireacht "Déan teagmháil le do riarthóir" ina ionad. |
| **Srianadh do Network Admins** | As | Nuair atá sé cumasaithe ar líonra ilshuíomhanna, ní féidir ach le Super Admins an agent a úsáid. Cuirtear bac ar riarthóirí suíomhanna aonair. Tá tosaíocht aige ar "Srianadh do Riarthóirí" má tá an dá cheann cumasaithe. |
| **Ceadaigh Rochtain do Subscriber** | As | Nuair atá sé cumasaithe, is féidir le húsáideoirí a bhfuil an ról `subscriber` acu an comhéadan comhrá a úsáid ach tá siad teoranta do chumais inléite amháin (gan cruthú postálacha ná athruithe socruithe). |
| **Díchumasaigh do Neamhbhaill** | As | Comhtháthaíonn sé le stádas ballraíochta Ultimate Multisite. Nuair atá sé cumasaithe, cuirtear comhrá i bhfolach do shuíomhanna nach bhfuil ballraíocht ghníomhach acu. |

### Bratacha Brandála

| Bratach | Réamhshocrú | Cur síos |
|---|---|---|
| **Folaigh Buntásc "Powered by Gratis AI Agent"** | As | Baineann sé an líne sannadh brandála a thaispeántar ag bun an ghiúirléid comhrá. Moltar é d’imlonnuithe lipéad bán. |
| **Ainm Saincheaptha Agent** | *(bán)* | Cuirtear d’ainm táirge féin in ionad an lipéid réamhshocraithe "Gratis AI Agent" i gceanntásc an chomhrá agus i roghchlár an riarthóra. Fág bán é chun an réamhshocrú a úsáid. |
| **Folaigh Roghnóir Agent** | As | Nuair atá sé cumasaithe, ní féidir le húsáideoirí aistriú idir na cúig agent ionsuite. Socraítear an agent reatha de réir cibé rud atá cumraithe mar an réamhshocrú i Socruithe → Ginearálta. |
| **Úsáid Deilbhín an tSuímh mar Abhatár Comhrá** | As | Cuirtear deilbhín shuíomh WordPress (socraithe faoi Appearance → Customize → Site Identity) in ionad an deilbhín AI réamhshocraithe i gceanntásc an ghiúirléid comhrá. |

### Bratacha Sábháilteachta Uathoibrithe

Tugann Superdav AI Agent v1.18.0 geataí faofa daonna agus taifid mheabhrúcháin isteach le haghaidh rith uathoibrithe níos sábháilte. D’fhéadfadh na rialuithe seo a bheith le feiceáil sna bratacha gné nó sna socruithe ard-uathoibrithe, ag brath ar an bpacáiste suiteáilte.

| Bratach | Réamhshocrú | Cur síos |
|---|---|---|
| **Éiligh Faomhadh Daonna** | Molta ann | Cuireann sé uathoibrithe íogaire ar sos go dtí go ndéanann úsáideoir údaraithe athbhreithniú agus dearbhú ar an ngníomh molta. |
| **Dí-dhúbláil Meabhrúchán** | Ann | Taifeadann sé meabhrúcháin seolta ionas nach seolann iarrachtaí arís nó rith sceidealaithe fógraí dúblacha. |
| **Cumasaigh Uirlisí Féilire** | As go dtí go gcumraítear | Ligeann sé don agent féilirí agus imeachtaí cumraithe Google a léamh. |
| **Cumasaigh Fógraí SMS** | As go dtí go gcumraítear | Ligeann sé do shreafaí oibre faofa fógraí SMS TextBee a sheoladh tar éis dintiúir a shábháil. |

### Athruithe a Chur i bhFeidhm

Cliceáil **Sábháil Socruithe** tar éis aon bhratach a scoránú. Tagann athruithe i bhfeidhm láithreach — ní theastaíonn glanadh taisce ná athghníomhachtú plugin.
