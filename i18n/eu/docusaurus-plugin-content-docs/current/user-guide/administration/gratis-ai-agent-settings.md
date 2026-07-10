---
title: Gratis AI Agent Ezarpenak
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent ezarpenak {#gratis-ai-agent-settings}

Gratis AI Agent-eko **Ezarpenak → Aurreratua** pantailak administratzaile-mailako konfigurazioa eskaintzen du backend integrazioetarako. Orrialde honek feedback birbidalketa, bilaketa-hornitzaileen gakoak, kudeatutako Superdav zerbitzuaren konfigurazioa, Google Calendar kontrolak, TextBee SMS ezarpenak eta sare osoko eginbide-banderak dokumentatzen ditu.

## Ezarpenetara sartzea {#accessing-settings}

1. WordPress administrazioan, joan **Gratis AI Agent → Ezarpenak** atalera.
2. Egin klik **Aurreratua** fitxan.

## Feedback endpoint konfigurazioa {#feedback-endpoint-configuration}

Feedback endpoint-ak AI agent-etik POST eskaerak jasotzen ditu erabiltzaile batek feedback bidaltzen duen bakoitzean hatz-behera botoiaren, auto-prompt banderraren edo `/report-issue` komandoaren bidez.

| Eremua | Deskribapena |
|---|---|
| **Feedback Endpoint URL** | Feedback bidalketak JSON gorputza duten HTTP POST eskaera gisa jasotzen dituen URLa. |
| **Feedback API Key** | Feedback eskaera bakoitzaren `Authorization` header-ean bidaltzen den bearer token bat. Utzi hutsik zure endpoint-ak autentifikaziorik behar ez badu. |

### Espero den JSON karga {#expected-json-payload}

Zure feedback endpoint-ak JSON gorputz bat onartu behar du, gutxienez eremu hauekin:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Kargan eremu gehigarriak egon daitezke elkarrizketaren testuinguruaren arabera.

### `triage_category` balioak {#triagecategory-values}

AI triage geruzak balio hauetako bat esleitzen dio `triage_category` eremuari karga birbidali aurretik:

| Balioa | Esanahia |
|---|---|
| `factual_error` | Laguntzaileak informazio faktual okerra eman zuen. |
| `unhelpful_answer` | Erantzuna teknikoki zuzena zen, baina ez zen erabilgarria. |
| `inappropriate_content` | Erantzunak erabiltzaileei erakutsi behar ez zaien edukia zuen. |
| `other` | Feedbacka ez zetorren bat kategoria ezagun batekin. |

### Autentifikazioa {#authentication}

Zure endpoint-ak autentifikazioa behar badu, ezarri **Feedback API Key** eremua zure bearer token-arekin. Agent-ek hau bidaltzen du:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** eremua hutsik badago, ez da `Authorization` header-ik bidaltzen.

### Feedback bilketa desgaitzea {#disabling-feedback-collection}

Utzi **Feedback Endpoint URL** eta **Feedback API Key** eremuak hutsik. Hatz-behera botoia eta feedback UI-a erabiltzaileentzat ikusgai geratzen dira, baina bidalketak ez dira kanpoko zerbitzurik batera birbidaltzen.

## Brave Search API Key {#brave-search-api-key}

**Aurreratua** fitxan ere, **Brave Search API Key** eremuak [Interneteko bilaketa](../configuration/internet-search) gaitasuna aktibatzen du.

| Eremua | Deskribapena |
|---|---|
| **Brave Search API Key** | Brave Search garatzaileen dashboard-eko zure API gakoa. Beharrezkoa da AI assistant-ean interneteko bilaketa gaitzeko. |

Eremuaren etiketak Brave Search API erregistratzeko orrira doan esteka klikagarri bat dauka. Utzi hutsik interneteko bilaketa desgaitzeko.

Ikusi [Interneteko bilaketa](../configuration/internet-search) eginbide honi buruzko azken erabiltzaileentzako dokumentaziorako.

## Kudeatutako Superdav zerbitzua {#managed-superdav-service}

Superdav AI Agent v1.18.0-k kudeatutako Superdav zerbitzu-endpoint-ak eta konexio-hornikuntza automatikoa gehitzen ditu onartutako guneetarako. Erabili kontrol hauek zure guneak eskuz konfiguratutako zerbitzu-endpoint baten ordez ostatatutako hornitzailearekin konektatu behar duenean.

| Eremua | Deskribapena |
|---|---|
| **Kudeatutako Superdav zerbitzua** | Ostatatutako Superdav zerbitzu-konexioa gaitzen du onartutako guneetarako. |
| **Hornitu konexioa** | Endpoint eta kredentzialen hornikuntza automatikoa abiarazten du. Erabili hau guneak kudeatutako hornitzailea erabili behar duela berretsi ondoren. |
| **Zerbitzu-endpointa / Konexioaren egoera** | Hornikuntzaren ondoren uneko endpointa edo konexioaren egoera erakusten du. |

Hornikuntzaren ondoren, gorde ezarpenak eta egiaztatu konexioaren egoera kudeatutako zerbitzuaren lan-fluxuetan oinarritu aurretik. Hornikuntzak huts egiten badu, berrikusi bistaratutako berriro saiatzeko jarraibideak eta berretsi guneak ostatatutako hornitzailea erabiltzeko baimena duela.

## Google Calendar konfigurazioa {#google-calendar-configuration}

Superdav AI Agent v1.18.0 egutegi-eginbideak gaituta daudenean, agent-ek konfiguratutako egutegiak eta gertaeren xehetasunak irakur ditzake. Egutegi-tresnak irakurtzera bideratuta daude, eta erabilgarriak dira ordutegia kontuan hartzen duten oroigarrietarako, parte-hartzaileen jarraipenerako eta kontaktuen parekatzerako.

| Eremua | Deskribapena |
|---|---|
| **Google Calendar kredentzialak** | Egutegi-datuak irakurtzeko beharrezkoak diren kredentzialak edo token konexioa gordetzen ditu. |
| **Egutegi-hautapena** | Agent-ek ikuska ditzakeen konfiguratutako egutegiak mugatzen ditu. |
| **Egutegi-konexioaren egoera** | Uneko kredentzialek egutegiak eta gertaerak irakur ditzaketen baieztatzen du. |

Mantendu egutegi-kredentzialak agent-ek behar dituen egutegietara mugatuta. Birkonektatu edo biratu kredentzialak egoerak iraungitako token bat adierazten badu.

## TextBee SMS jakinarazpenak {#textbee-sms-notifications}

Superdav AI Agent v1.18.0-k TextBee gehitzen du SMS hornitzaile gisa konfiguratutako jakinarazpen-lan-fluxuetarako. SMS jakinarazpenak giza onarpen-ateekin parekatu behar dira mezu sentikorretarako edo erabiltzaileei zuzendutakoetarako.

| Eremua | Deskribapena |
|---|---|
| **TextBee API Key** | TextBee SMS hornitzaileari egindako eskaerak autentifikatzen ditu. |
| **TextBee gailua / bidaltzailea** | Irteerako mezuetarako erabiltzen den TextBee bidaltzailea edo gailua hautatzen du, hornitzaileak eskatzen duenean. |
| **SMS jakinarazpenak gaituta** | Onartutako lan-fluxuei testu-mezuen jakinarazpenak bidaltzeko aukera ematen die. Utzi desgaituta SMS bidalketak eragozteko. |

Bidali proba-mezu bat administratzaile baten jabetzako zenbaki batera soilik, eta ondoren berretsi onarpen-atearen portaera programatutako edo parte-hartzaileei zuzendutako oroigarriak gaitu aurretik.

## Eginbide-banderak {#feature-flags}

v1.9.0-n ere aurkeztuta, **Ezarpenak → Eginbide-banderak** fitxak aukerako funtzionalitaterako etengailuak eskaintzen ditu. Bandera bakoitza sare osoan gaituta edo desgaituta dago; une honetan ez dago gune bakoitzerako gainidazterik.

### Eginbide-banderetara sartzea {#accessing-feature-flags}

1. WordPress administrazioan, joan **Gratis AI Agent → Ezarpenak** atalera.
2. Egin klik **Eginbide-banderak** fitxan.

### Sarbide-kontrolaren banderak {#access-control-flags}

| Marka | Lehenetsia | Deskribapena |
|---|---|---|
| **Administratzaileetara mugatu** | Desaktibatuta | Gaituta dagoenean, `administrator` rola duten erabiltzaileek bakarrik ireki dezakete AI Agent txat-panela. Beste rol guztiek "Jarri harremanetan zure administratzailearekin" mezua ikusiko dute horren ordez. |
| **Network Admins-etara mugatu** | Desaktibatuta | Multisite sare batean gaituta dagoenean, Super Admins-ek bakarrik erabil dezakete agent. Gune indibidualetako administratzaileak blokeatuta daude. Lehentasuna du "Administratzaileetara mugatu" aukeraren gainetik, biak gaituta badaude. |
| **Subscriber sarbidea baimendu** | Desaktibatuta | Gaituta dagoenean, `subscriber` rola duten erabiltzaileek txat-interfazea erabil dezakete, baina irakurtzeko soilik diren gaitasunetara mugatuta daude (ez argitalpenik sortu, ezta ezarpenik aldatu ere). |
| **Kide ez direnentzat desgaitu** | Desaktibatuta | Ultimate Multisite kidetza-egoerarekin integratzen da. Gaituta dagoenean, txata ezkutatuta dago kidetza aktiborik ez duten guneentzat. |

### Branding markak {#branding-flags}

| Marka | Lehenetsia | Deskribapena |
|---|---|---|
| **Ezkutatu "Powered by Gratis AI Agent" oina** | Desaktibatuta | Txat widgetaren behealdean agertzen den branding atribuzio-lerroa kentzen du. White-label hedapenetarako gomendatua. |
| **Agent izen pertsonalizatua** | *(hutsik)* | Txat goiburuko eta administrazio-menuko "Gratis AI Agent" etiketa lehenetsia zure produktu-izenarekin ordezkatzen du. Utzi hutsik lehenetsia erabiltzeko. |
| **Agent hautatzailea ezkutatu** | Desaktibatuta | Gaituta dagoenean, erabiltzaileek ezin dute bost agent integratuen artean aldatu. Uneko agent finkatuta dago Ezarpenak → Orokorra atalean lehenetsi gisa konfiguratuta dagoen horretara. |
| **Erabili gunearen ikonoa txat-avatar gisa** | Desaktibatuta | Txat widgetaren goiburuko AI ikono lehenetsia WordPress gunearen ikonoarekin ordezkatzen du (Itxura → Pertsonalizatu → Gunearen identitatea atalean ezarria). |

### Automatizazio-segurtasuneko markak {#automation-safety-flags}

Superdav AI Agent v1.18.0-k giza onarpen-ateak eta oroigarri-erregistroak sartzen ditu automatizazio-exekuzio seguruagoetarako. Kontrol hauek feature flags-en edo automatizazio aurreratuko ezarpenetan ager daitezke, instalatutako paketearen arabera.

| Marka | Lehenetsia | Deskribapena |
|---|---|---|
| **Giza onarpena eskatu** | Gomendatuta aktibatuta | Automatizazio sentikorrak pausatzen ditu baimendutako erabiltzaile batek proposatutako ekintza berrikusi eta baieztatu arte. |
| **Oroigarrien deduplikazioa** | Aktibatuta | Bidalitako oroigarriak erregistratzen ditu berriro saiakerek edo programatutako exekuzioek jakinarazpen bikoizturik bidal ez dezaten. |
| **Egutegi-tresnak gaitu** | Desaktibatuta konfiguratu arte | Agent-ek konfiguratutako Google egutegiak eta gertaerak irakurtzea baimentzen du. |
| **SMS jakinarazpenak gaitu** | Desaktibatuta konfiguratu arte | Onartutako lan-fluxuek TextBee SMS jakinarazpenak bidaltzea baimentzen du kredentzialak gorde ondoren. |

### Aldaketak aplikatzea {#applying-changes}

Egin klik **Gorde ezarpenak** aukeran edozein marka aldatu ondoren. Aldaketak berehala aplikatzen dira — ez da beharrezkoa cachea hustea edo plugina berraktibatzea.
