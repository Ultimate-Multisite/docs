---
title: Agordoj de Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Agordoj

La ekrano **Agordoj → Altnivela** en Gratis AI Agent provizas administrant-nivelan agordon por backend-integriĝoj. Ĉi tiu paĝo dokumentas plusendadon de reagoj, ŝlosilojn de serĉprovizantoj, agordon de administrata Superdav-servo, regilojn de Google Calendar, SMS-agordojn de TextBee, kaj tutretajn funkciajn flagojn.

## Aliri Agordojn {#accessing-settings}

1. En la WordPress-administrilo, iru al **Gratis AI Agent → Agordoj**.
2. Alklaku la langeton **Altnivela**.

## Agordo de Reaga Finpunkto {#feedback-endpoint-configuration}

La reaga finpunkto ricevas POST-petojn de la AI agent kiam ajn uzanto sendas reagon per la dikfingro-malsupren-butono, la aŭtomata invita rubando, aŭ la komando `/report-issue`.

| Kampo | Priskribo |
|---|---|
| **URL de Reaga Finpunkto** | La URL kiu ricevas reagajn sendojn kiel HTTP POST-petojn kun JSON-korpo. |
| **Feedback API Key** | bearer token sendita en la `Authorization` header de ĉiu reaga peto. Lasu malplena se via finpunkto ne postulas aŭtentikigon. |

### Atendata JSON-Ŝarĝo {#expected-json-payload}

Via reaga finpunkto devas akcepti JSON-korpon kun almenaŭ la jenaj kampoj:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Pliaj kampoj povas ĉeesti en la ŝarĝo depende de la kunteksto de la konversacio.

### Valoroj de `triage_category` {#triagecategory-values}

La AI-taksada tavolo asignas unu el la jenaj valoroj al `triage_category` antaŭ plusendado de la ŝarĝo:

| Valoro | Signifo |
|---|---|
| `factual_error` | La asistanto provizis malĝustajn faktajn informojn. |
| `unhelpful_answer` | La respondo estis teknike ĝusta sed ne utila. |
| `inappropriate_content` | La respondo enhavis enhavon kiu ne devus esti montrata al uzantoj. |
| `other` | La reago ne kongruis kun konata kategorio. |

### Aŭtentikigo {#authentication}

Se via finpunkto postulas aŭtentikigon, agordu la kampon **Feedback API Key** al via bearer token. La agent sendas:

```
Authorization: Bearer <your-api-key>
```

Se la kampo **Feedback API Key** estas malplena, neniu `Authorization` header estas sendita.

### Malŝalti Kolektadon de Reagoj {#disabling-feedback-collection}

Lasu ambaŭ kampojn **URL de Reaga Finpunkto** kaj **Feedback API Key** malplenaj. La dikfingro-malsupren-butono kaj reaga UI restas videblaj al uzantoj, sed sendoj ne estas plusenditaj al iu ekstera servo.

## Brave Search API Key {#brave-search-api-key}

Ankaŭ en la langeto **Altnivela**, la kampo **Brave Search API Key** ebligas la kapablon [Interreta Serĉo](../configuration/internet-search).

| Kampo | Priskribo |
|---|---|
| **Brave Search API Key** | Via API-ŝlosilo el la programista Dashboard de Brave Search. Bezonata por ebligi interretan serĉon en la AI-asistanto. |

La kampa etikedo inkluzivas alklakeblan ligilon al la aliĝpaĝo de Brave Search API. Lasu malplena por malŝalti interretan serĉon.

Vidu [Interreta Serĉo](../configuration/internet-search) por dokumentaro por finuzantoj pri ĉi tiu funkcio.

## Administrata Superdav-Servo {#managed-superdav-service}

Superdav AI Agent v1.18.0 aldonas administratajn Superdav-servajn finpunktojn kaj aŭtomatan proviziadon de konektoj por subtenataj retejoj. Uzu ĉi tiujn regilojn kiam via retejo devus konektiĝi al la gastigita provizanto anstataŭ al mane agordita serva finpunkto.

| Kampo | Priskribo |
|---|---|
| **Administrata Superdav-Servo** | Ebligas la gastigitan Superdav-servan konekton por subtenataj retejoj. |
| **Provizii Konekton** | Komencas aŭtomatan proviziadon de finpunkto kaj akreditaĵoj. Uzu ĉi tion post konfirmo ke la retejo devus uzi la administratan provizanton. |
| **Serva Finpunkto / Konekta Stato** | Montras la aktualan finpunkton aŭ konektan staton post proviziado. |

Post proviziado, konservu agordojn kaj kontrolu la konektan staton antaŭ ol fidi je administrat-servaj laborfluoj. Se proviziado malsukcesas, reviziu la montritan reprovan gvidon kaj konfirmu ke la retejo havas permeson uzi la gastigitan provizanton.

## Agordo de Google Calendar {#google-calendar-configuration}

Kiam kalendaraj funkcioj de Superdav AI Agent v1.18.0 estas ebligitaj, la agent povas legi agorditajn kalendarojn kaj eventajn detalojn. Kalendaraj iloj estas leg-orientitaj kaj utilas por horar-konsciaj memorigiloj, sekvado de partoprenantoj, kaj kongruigo de kontaktoj.

| Kampo | Priskribo |
|---|---|
| **Akreditaĵoj de Google Calendar** | Stokas la akreditaĵojn aŭ token-konekton bezonatan por legi kalendarajn datumojn. |
| **Elekto de Kalendaro** | Limigas kiujn agorditajn kalendarojn la agent rajtas inspekti. |
| **Stato de Kalendara Konekto** | Konfirmas ĉu la aktualaj akreditaĵoj povas legi kalendarojn kaj eventojn. |

Tenu kalendarajn akreditaĵojn limigitaj al la kalendaroj kiujn la agent bezonas. Rekonektu aŭ rotaciu akreditaĵojn se la stato indikas eksvalidiĝintan token.

## TextBee SMS-Sciigoj {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 aldonas TextBee kiel SMS-provizanton por agorditaj sciigaj laborfluoj. SMS-sciigoj devus esti parigitaj kun homaj aprobaj pordoj por sentemaj aŭ uzant-alfrontaj mesaĝoj.

| Kampo | Priskribo |
|---|---|
| **TextBee API-Ŝlosilo** | Aŭtentikigas petojn al la TextBee SMS-provizanto. |
| **TextBee Aparato / Sendanto** | Elektas la TextBee-sendanton aŭ aparaton uzatan por elirantaj mesaĝoj, kiam postulite de la provizanto. |
| **SMS-Sciigoj Ebligitaj** | Permesas al aprobitaj laborfluoj sendi tekstmesaĝajn sciigojn. Lasu malŝaltita por malhelpi SMS-sendojn. |

Sendu testan mesaĝon nur al numero posedata de administranto, poste konfirmu la konduton de aprobaj pordoj antaŭ ebligi planitajn aŭ partoprenant-alfrontajn memorigilojn.

## Funkciaj Flagoj {#feature-flags}

Ankaŭ enkondukita en v1.9.0, la langeto **Agordoj → Funkciaj Flagoj** provizas ŝaltilojn por laŭvola funkcieco. Ĉiu flago estas aŭ ebligita aŭ malebligita tutrete; nuntempe ne ekzistas po-reteja anstataŭigo.

### Aliri Funkciajn Flagojn {#accessing-feature-flags}

1. En la WordPress-administrilo, iru al **Gratis AI Agent → Agordoj**.
2. Alklaku la langeton **Funkciaj Flagoj**.

### Alirkontrolaj Flagoj {#access-control-flags}

| Flago | Defaŭlto | Priskribo |
|---|---|---|
| **Limigi al Administrantoj** | Malŝaltita | Kiam ebligita, nur uzantoj kun la rolo `administrator` povas malfermi la AI Agent babilejan panelon. Ĉiuj aliaj roloj vidas mesaĝon "Kontaktu vian administranton" anstataŭe. |
| **Limigi al Retaj Administrantoj** | Malŝaltita | Kiam ebligita en multreteja reto, nur Super Admins povas uzi la agenton. Individuaj retejaj administrantoj estas blokitaj. Havas prioritaton super "Limigi al Administrantoj" se ambaŭ estas ebligitaj. |
| **Permesi Aliron por Abonantoj** | Malŝaltita | Kiam ebligita, uzantoj kun la rolo `subscriber` povas uzi la babilejan interfacon sed estas limigitaj al nurlegaj kapabloj (neniu afiŝokreado aŭ agordaj ŝanĝoj). |
| **Malebligi por Ne-Membroj** | Malŝaltita | Integras kun la membreca stato de Ultimate Multisite. Kiam ebligita, babilejo estas kaŝita por retejoj kiuj ne havas aktivan membrecon. |

### Markaj Flagoj {#branding-flags}

| Flago | Defaŭlto | Priskribo |
|---|---|---|
| **Kaŝi la Piedlinion "Powered by Gratis AI Agent"** | Malŝaltita | Forigas la markan atribuan linion montratan ĉe la malsupro de la babileja fenestraĵo. Rekomendita por senmarkaj deplojoj. |
| **Propra Nomo de Agento** | *(malplena)* | Anstataŭigas la defaŭltan etikedon "Gratis AI Agent" en la babileja kaplinio kaj administra menuo per via propra produkta nomo. Lasu malplena por uzi la defaŭlton. |
| **Kaŝi Agento-Elektilon** | Malŝaltita | Kiam ebligita, uzantoj ne povas ŝanĝi inter la kvin enkonstruitaj agentoj. La nuna agento estas fiksita al tio, kio estas agordita kiel la defaŭlto en Agordoj → Ĝenerala. |
| **Uzi Retejan Ikonon kiel Babilejan Avataron** | Malŝaltita | Anstataŭigas la defaŭltan AI-ikonon en la kaplinio de la babileja fenestraĵo per la WordPress reteja ikono (agordita sub Aspekto → Agordi → Reteja Identeco). |

### Aŭtomatigaj Sekurecaj Flagoj {#automation-safety-flags}

Superdav AI Agent v1.18.0 enkondukas pordegojn de homa aprobo kaj memorigajn registrojn por pli sekuraj aŭtomatigaj ruladoj. Ĉi tiuj regiloj povas aperi en la funkciaj flagoj aŭ altnivelaj aŭtomatigaj agordoj, depende de la instalita pakaĵo.

| Flago | Defaŭlto | Priskribo |
|---|---|---|
| **Postuli Homan Aprobon** | Rekomendita ŝaltita | Paŭzigas sentemajn aŭtomatigojn ĝis rajtigita uzanto revizias kaj konfirmas la proponitan agon. |
| **Memoriga Deduligo** | Ŝaltita | Registras senditajn memorigilojn por ke reprovoj aŭ planitaj ruladoj ne sendu duobligitajn sciigojn. |
| **Ebligi Kalendarajn Iloj** | Malŝaltita ĝis agordita | Permesas al la agento legi agorditajn Google-kalendarojn kaj eventojn. |
| **Ebligi SMS-Sciigojn** | Malŝaltita ĝis agordita | Permesas al aprobitaj laborfluoj sendi TextBee SMS-sciigojn post kiam akreditaĵoj estas konservitaj. |

### Aplikado de Ŝanĝoj {#applying-changes}

Alklaku **Konservi Agordojn** post ŝalti aŭ malŝalti iun ajn flagon. Ŝanĝoj ekvalidas tuj — neniu kaŝmemora purigo aŭ plugin reaktivigo estas bezonata.
