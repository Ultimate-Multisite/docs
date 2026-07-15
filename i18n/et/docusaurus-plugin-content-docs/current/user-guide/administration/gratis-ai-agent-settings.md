---
title: Gratis AI Agent seaded
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agenti seaded

Gratis AI Agenti **Seaded → Täpsem** ekraan pakub administraatori tasemel konfiguratsiooni taustasüsteemi integratsioonide jaoks. See leht dokumenteerib tagasiside edastamist, otsinguteenuse pakkuja võtmeid, hallatud Superdav teenuse seadistust, Google Calendar juhtelemente, TextBee SMS-i seadeid ja kogu võrku hõlmavaid funktsioonilippe.

## Seadetele ligipääs {#accessing-settings}

1. Mine WordPressi administraatorivaates jaotisse **Gratis AI Agent → Seaded**.
2. Klõpsa vahekaarti **Täpsem**.

## Tagasiside endpointi konfiguratsioon {#feedback-endpoint-configuration}

Tagasiside endpoint võtab AI agendilt vastu POST-päringuid alati, kui kasutaja saadab tagasisidet pöidla-allapoole nupu, automaatse viibabänneri või käsu `/report-issue` kaudu.

| Väli | Kirjeldus |
|---|---|
| **Tagasiside endpointi URL** | URL, mis võtab tagasiside esitusi vastu HTTP POST-päringutena JSON-kehaga. |
| **Feedback API Key** | bearer token, mis saadetakse iga tagasisidepäringu `Authorization` headeris. Jäta tühjaks, kui sinu endpoint ei nõua autentimist. |

### Eeldatav JSON-sisu {#expected-json-payload}

Sinu tagasiside endpoint peab aktsepteerima JSON-keha, milles on vähemalt järgmised väljad:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Sõltuvalt vestluse kontekstist võib sisus olla lisavälju.

### `triage_category` väärtused {#triagecategory-values}

AI triaažikiht määrab enne sisu edastamist väljale `triage_category` ühe järgmistest väärtustest:

| Väärtus | Tähendus |
|---|---|
| `factual_error` | Assistent esitas faktiliselt ebaõiget teavet. |
| `unhelpful_answer` | Vastus oli tehniliselt õige, kuid mitte kasulik. |
| `inappropriate_content` | Vastus sisaldas sisu, mida ei tohiks kasutajatele näidata. |
| `other` | Tagasiside ei vastanud tuntud kategooriale. |

### Autentimine {#authentication}

Kui sinu endpoint nõuab autentimist, määra väljale **Feedback API Key** oma bearer token. Agent saadab:

```
Authorization: Bearer <your-api-key>
```

Kui väli **Feedback API Key** on tühi, ei saadeta `Authorization` headerit.

### Tagasiside kogumise keelamine {#disabling-feedback-collection}

Jäta nii **Tagasiside endpointi URL** kui ka **Feedback API Key** väljad tühjaks. Pöidla-allapoole nupp ja tagasiside kasutajaliides jäävad kasutajatele nähtavaks, kuid esitatud tagasisidet ei edastata ühelegi välisele teenusele.

## Brave Search API Key {#brave-search-api-key}

Samuti vahekaardil **Täpsem** lubab väli **Brave Search API Key** [internetiotsingu](../configuration/internet-search) võimaluse.

| Väli | Kirjeldus |
|---|---|
| **Brave Search API Key** | Sinu API-võti Brave Searchi arendaja Dashboardilt. Vajalik internetiotsingu lubamiseks AI assistendis. |

Välja silt sisaldab klõpsatavat linki Brave Search API registreerumislehele. Jäta tühjaks, et internetiotsing keelata.

Selle funktsiooni lõppkasutaja dokumentatsiooni jaoks vaata [Internetiotsing](../configuration/internet-search).

## Hallatud Superdav teenus {#managed-superdav-service}

Superdav AI Agent v1.18.0 lisab hallatud Superdav teenuse endpointid ja automaatse ühenduse provisioneerimise toetatud saitidele. Kasuta neid juhtelemente siis, kui sinu sait peaks käsitsi konfigureeritud teenuse endpointi asemel ühenduma hostitud teenusepakkujaga.

| Väli | Kirjeldus |
|---|---|
| **Hallatud Superdav teenus** | Lubab toetatud saitidele hostitud Superdav teenuse ühenduse. |
| **Provisioneeri ühendus** | Käivitab endpointi ja mandaatide automaatse provisioneerimise. Kasuta seda pärast kinnitamist, et sait peaks kasutama hallatud teenusepakkujat. |
| **Teenuse endpoint / ühenduse olek** | Näitab pärast provisioneerimist praegust endpointi või ühenduse olekut. |

Pärast provisioneerimist salvesta seaded ja kontrolli ühenduse olekut, enne kui tugined hallatud teenuse töövoogudele. Kui provisioneerimine ebaõnnestub, vaata kuvatud uuestiproovimise juhiseid ja kinnita, et saidil on õigus hostitud teenusepakkujat kasutada.

## Google Calendar konfiguratsioon {#google-calendar-configuration}

Kui Superdav AI Agent v1.18.0 kalendrifunktsioonid on lubatud, saab agent lugeda konfigureeritud kalendreid ja sündmuste üksikasju. Kalendritööriistad on lugemisele suunatud ning kasulikud ajakavaga arvestavate meeldetuletuste, osalejate järeltegevuse ja kontaktide sobitamise jaoks.

| Väli | Kirjeldus |
|---|---|
| **Google Calendar mandaadid** | Salvestab kalendriandmete lugemiseks vajalikud mandaadid või tokeniühenduse. |
| **Kalendri valik** | Piirab, milliseid konfigureeritud kalendreid agent võib kontrollida. |
| **Kalendri ühenduse olek** | Kinnitab, kas praegused mandaadid saavad lugeda kalendreid ja sündmusi. |

Hoia kalendri mandaadid piiratud nende kalendritega, mida agent vajab. Ühenda uuesti või vaheta mandaadid, kui olek näitab aegunud tokenit.

## TextBee SMS-teavitused {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 lisab TextBee SMS-teenusepakkujana konfigureeritud teavituste töövoogude jaoks. SMS-teavitused tuleks tundlike või kasutajatele suunatud sõnumite puhul siduda inimese kinnituse väravatega.

| Väli | Kirjeldus |
|---|---|
| **TextBee API-võti** | Autendib päringud TextBee SMS-teenusepakkujale. |
| **TextBee seade / saatja** | Valib TextBee saatja või seadme, mida kasutatakse väljaminevate sõnumite jaoks, kui teenusepakkuja seda nõuab. |
| **SMS-teavitused lubatud** | Lubab kinnitatud töövoogudel saata tekstisõnumiteateid. Jäta keelatuks, et vältida SMS-ide saatmist. |

Saada testsõnum ainult administraatorile kuuluvale numbrile, seejärel kinnita kinnituse värava käitumine enne ajastatud või osalejatele suunatud meeldetuletuste lubamist.

## Funktsioonilipud {#feature-flags}

Samuti v1.9.0-s kasutusele võetud vahekaart **Seaded → Funktsioonilipud** pakub valikulise funktsionaalsuse jaoks lüliteid. Iga lipp on kas lubatud või keelatud kogu võrgus; praegu pole saidipõhist ülekirjutust.

### Funktsioonilippudele ligipääs {#accessing-feature-flags}

1. Mine WordPressi administraatorivaates jaotisse **Gratis AI Agent → Seaded**.
2. Klõpsa vahekaarti **Funktsioonilipud**.

### Ligipääsukontrolli lipud {#access-control-flags}

| Lipp | Vaikimisi | Kirjeldus |
|---|---|---|
| **Piira administraatoritega** | Väljas | Kui see on lubatud, saavad AI Agent vestluspaneeli avada ainult kasutajad, kellel on roll `administrator`. Kõik teised rollid näevad selle asemel teadet „Võta ühendust oma administraatoriga“. |
| **Piira võrguadministraatoritega** | Väljas | Kui see on multisite-võrgus lubatud, saavad agenti kasutada ainult Super Adminid. Üksikute saitide administraatorid blokeeritakse. Kui mõlemad on lubatud, on see ülimuslik valiku „Piira administraatoritega“ suhtes. |
| **Luba tellija ligipääs** | Väljas | Kui see on lubatud, saavad rolliga `subscriber` kasutajad vestlusliidest kasutada, kuid neil on ainult lugemisõigused (postituste loomine ja seadete muutmine pole lubatud). |
| **Keela mitteliikmetele** | Väljas | Integreerub Ultimate Multisite liikmestaatusega. Kui see on lubatud, peidetakse vestlus saitidel, millel pole aktiivset liikmesust. |

### Brändingu lipud {#branding-flags}

| Lipp | Vaikimisi | Kirjeldus |
|---|---|---|
| **Peida „Powered by Gratis AI Agent“ jalus** | Väljas | Eemaldab vestlusvidina allosas kuvatava brändingu omistamisrea. Soovitatav oma brändi all juurutuste jaoks. |
| **Kohandatud agendi nimi** | *(tühi)* | Asendab vestluse päises ja haldusmenüüs vaikimisi kuvatava sildi „Gratis AI Agent“ sinu enda tootenimega. Vaikeväärtuse kasutamiseks jäta tühjaks. |
| **Peida agendi valija** | Väljas | Kui see on lubatud, ei saa kasutajad viie sisseehitatud agendi vahel vahetada. Praegune agent fikseeritakse sellele, mis on seadistatud vaikimisi jaotises Seaded → Üldine. |
| **Kasuta saidi ikooni vestluse avatarina** | Väljas | Asendab vestlusvidina päises vaikimisi kuvatava AI ikooni WordPress saidi ikooniga (määratakse jaotises Välimus → Kohanda → Saidi identiteet). |

### Automatiseerimise ohutuslipud {#automation-safety-flags}

Superdav AI Agent v1.18.0 tutvustab inimkinnituse väravaid ja meeldetuletuste kirjeid turvalisemate automatiseerimiskäivituste jaoks. Need juhtelemendid võivad ilmuda funktsioonilippudes või täpsemates automatiseerimisseadetes, olenevalt installitud paketist.

| Lipp | Vaikimisi | Kirjeldus |
|---|---|---|
| **Nõua inimkinnitust** | Soovitatavalt sees | Peatab tundlikud automatiseerimised, kuni volitatud kasutaja vaatab kavandatud toimingu üle ja kinnitab selle. |
| **Meeldetuletuste deduplitseerimine** | Sees | Salvestab saadetud meeldetuletused, et korduskatsed või ajastatud käivitused ei saadaks topeltteavitusi. |
| **Luba kalendritööriistad** | Väljas kuni seadistamiseni | Võimaldab agendil lugeda seadistatud Google’i kalendreid ja sündmusi. |
| **Luba SMS-teavitused** | Väljas kuni seadistamiseni | Võimaldab heakskiidetud töövoogudel saata TextBee SMS-teavitusi pärast mandaatide salvestamist. |

### Muudatuste rakendamine {#applying-changes}

Pärast mis tahes lipu ümberlülitamist klõpsa **Salvesta seaded**. Muudatused jõustuvad kohe — vahemälu tühjendamist ega plugina taasaktiveerimist pole vaja.
