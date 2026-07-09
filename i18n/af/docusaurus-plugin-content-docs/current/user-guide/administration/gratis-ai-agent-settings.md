---
title: Gratis AI Agent-instellings
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent-instellings {#gratis-ai-agent-settings}

Die **Instellings → Gevorderd**-skerm in Gratis AI Agent bied administrateurvlak-konfigurasie vir backend-integrasies. Hierdie bladsy dokumenteer terugvoer-aanstuur, soekverskaffersleutels, bestuurde Superdav-diensopstelling, Google Calendar-kontroles, TextBee SMS-instellings, en netwerk-wye funksievlae.

## Toegang tot instellings {#accessing-settings}

1. In die WordPress-admin, gaan na **Gratis AI Agent → Instellings**.
2. Klik die **Gevorderd**-oortjie.

## Terugvoer-eindpuntkonfigurasie {#feedback-endpoint-configuration}

Die terugvoer-eindpunt ontvang POST-versoeke van die AI agent wanneer ’n gebruiker terugvoer indien via die duime-af-knoppie, die outo-aanporbanier, of die `/report-issue`-opdrag.

| Veld | Beskrywing |
|---|---|
| **Terugvoer-eindpunt-URL** | Die URL wat terugvoer-indienings as HTTP POST-versoeke met ’n JSON-liggaam ontvang. |
| **Feedback API Key** | ’n bearer token wat in die `Authorization` header van elke terugvoerversoek gestuur word. Laat leeg as jou endpoint nie verifikasie vereis nie. |

### Verwagte JSON-lading {#expected-json-payload}

Jou terugvoer-eindpunt moet ’n JSON-liggaam met ten minste die volgende velde aanvaar:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Bykomende velde kan in die lading teenwoordig wees, afhangende van die gesprekskonteks.

### `triage_category`-waardes {#triagecategory-values}

Die AI-triëringslaag ken een van die volgende waardes aan `triage_category` toe voordat die lading aangestuur word:

| Waarde | Betekenis |
|---|---|
| `factual_error` | Die assistent het verkeerde feitelike inligting verskaf. |
| `unhelpful_answer` | Die antwoord was tegnies korrek, maar nie nuttig nie. |
| `inappropriate_content` | Die antwoord het inhoud bevat wat nie aan gebruikers gewys behoort te word nie. |
| `other` | Die terugvoer het nie by ’n bekende kategorie gepas nie. |

### Verifikasie {#authentication}

As jou endpoint verifikasie vereis, stel die **Feedback API Key**-veld op jou bearer token. Die agent stuur:

```
Authorization: Bearer <your-api-key>
```

As die **Feedback API Key**-veld leeg is, word geen `Authorization` header gestuur nie.

### Deaktiveer terugvoer-insameling {#disabling-feedback-collection}

Laat beide die **Terugvoer-eindpunt-URL**- en **Feedback API Key**-velde leeg. Die duime-af-knoppie en terugvoer-UI bly vir gebruikers sigbaar, maar indienings word nie na enige eksterne diens aangestuur nie.

## Brave Search API Key {#brave-search-api-key}

Ook op die **Gevorderd**-oortjie aktiveer die **Brave Search API Key**-veld die [Internetsoek](../configuration/internet-search)-vermoë.

| Veld | Beskrywing |
|---|---|
| **Brave Search API Key** | Jou API-sleutel vanaf die Brave Search-ontwikkelaar-dashboard. Vereis om internetsoek in die AI-assistent te aktiveer. |

Die veldetiket sluit ’n klikbare skakel na die Brave Search API-aantekenbladsy in. Laat leeg om internetsoek te deaktiveer.

Sien [Internetsoek](../configuration/internet-search) vir eindgebruiker-dokumentasie oor hierdie funksie.

## Bestuurde Superdav-diens {#managed-superdav-service}

Superdav AI Agent v1.18.0 voeg bestuurde Superdav-diens-endpoints en outomatiese verbindingsvoorsiening vir ondersteunde sites by. Gebruik hierdie kontroles wanneer jou site aan die gehuisveste verskaffer moet koppel in plaas van aan ’n handmatig gekonfigureerde diens-endpoint.

| Veld | Beskrywing |
|---|---|
| **Bestuurde Superdav-diens** | Aktiveer die gehuisveste Superdav-diensverbinding vir ondersteunde sites. |
| **Voorsien verbinding** | Begin outomatiese endpoint- en aanmeldbewysvoorsiening. Gebruik dit nadat jy bevestig het die site moet die bestuurde verskaffer gebruik. |
| **Diens-endpoint / verbindingstatus** | Wys die huidige endpoint of verbindingtoestand ná voorsiening. |

Ná voorsiening, stoor instellings en verifieer die verbindingstatus voordat jy op bestuurde-diens-werkvloeie staatmaak. As voorsiening misluk, hersien die vertoonde herprobeer-riglyne en bevestig dat die site toestemming het om die gehuisveste verskaffer te gebruik.

## Google Calendar-konfigurasie {#google-calendar-configuration}

Wanneer Superdav AI Agent v1.18.0-kalenderfunksies geaktiveer is, kan die agent gekonfigureerde kalenders en gebeurtenisbesonderhede lees. Kalenderhulpmiddels is leesgeoriënteerd en is nuttig vir skedule-bewuste herinneringe, opvolg met deelnemers, en kontakpassing.

| Veld | Beskrywing |
|---|---|
| **Google Calendar-aanmeldbewyse** | Stoor die aanmeldbewyse of tokenverbinding wat nodig is om kalenderdata te lees. |
| **Kalenderkeuse** | Beperk watter gekonfigureerde kalenders die agent mag inspekteer. |
| **Kalenderverbindingstatus** | Bevestig of die huidige aanmeldbewyse kalenders en gebeurtenisse kan lees. |

Hou kalenderaanmeldbewyse beperk tot die kalenders wat die agent nodig het. Herkoppel of roteer aanmeldbewyse as die status ’n vervalde token aandui.

## TextBee SMS-kennisgewings {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 voeg TextBee by as ’n SMS-verskaffer vir gekonfigureerde kennisgewingwerkvloeie. SMS-kennisgewings behoort met menslike goedkeuringshekke gepaard te gaan vir sensitiewe of gebruikergerigte boodskappe.

| Veld | Beskrywing |
|---|---|
| **TextBee API-sleutel** | Verifieer versoeke na die TextBee SMS-verskaffer. |
| **TextBee-toestel / sender** | Kies die TextBee-sender of -toestel wat vir uitgaande boodskappe gebruik word, wanneer die verskaffer dit vereis. |
| **SMS-kennisgewings geaktiveer** | Laat goedgekeurde werkvloeie toe om teksboodskapkennisgewings te stuur. Laat gedeaktiveer om SMS-versendings te voorkom. |

Stuur ’n toetsboodskap slegs na ’n nommer wat deur ’n administrateur besit word, en bevestig dan goedkeuringshek-gedrag voordat geskeduleerde of deelnemergerigte herinneringe geaktiveer word.

## Funksievlae {#feature-flags}

Ook bekendgestel in v1.9.0, bied die **Instellings → Funksievlae**-oortjie skakelaars vir opsionele funksionaliteit. Elke vlag is óf geaktiveer óf gedeaktiveer netwerk-wyd; daar is tans geen per-site-oorheersing nie.

### Toegang tot funksievlae {#accessing-feature-flags}

1. In die WordPress-admin, gaan na **Gratis AI Agent → Instellings**.
2. Klik die **Funksievlae**-oortjie.

### Toegangsbeheervlae {#access-control-flags}

| Vlag | Verstek | Beskrywing |
|---|---|---|
| **Beperk tot administrateurs** | Af | Wanneer geaktiveer, kan slegs gebruikers met die `administrator`-rol die AI Agent-kletspaneel oopmaak. Alle ander rolle sien eerder ’n "Kontak jou administrateur"-boodskap. |
| **Beperk tot netwerkadmins** | Af | Wanneer geaktiveer op ’n multisite-netwerk, kan slegs Super Admins die agent gebruik. Individuele site-admins word geblokkeer. Neem voorrang bo "Beperk tot administrateurs" as albei geaktiveer is. |
| **Laat intekenaartoegang toe** | Af | Wanneer geaktiveer, kan gebruikers met die `subscriber`-rol die kletskoppelvlak gebruik, maar hulle word beperk tot leesalleen-vermoëns (geen plasing-skepping of instellingsveranderings nie). |
| **Deaktiveer vir nie-lede** | Af | Integreer met Ultimate Multisite-lidmaatskapstatus. Wanneer geaktiveer, word klets versteek vir sites wat nie ’n aktiewe lidmaatskap het nie. |

### Handelsmerkvlae {#branding-flags}

| Vlag | Verstek | Beskrywing |
|---|---|---|
| **Versteek "Powered by Gratis AI Agent"-voetskrif** | Af | Verwyder die handelsmerk-toeskrywingsreël wat onderaan die kletslegstuk gewys word. Aanbeveel vir wit-etiket-ontplooiings. |
| **Pasgemaakte agentnaam** | *(leeg)* | Vervang die verstek "Gratis AI Agent"-etiket in die kletskop en admin-kieslys met jou eie produknaam. Laat leeg om die verstek te gebruik. |
| **Versteek agentkieser** | Af | Wanneer geaktiveer, kan gebruikers nie tussen die vyf ingeboude agente wissel nie. Die huidige agent is vasgestel op wat ook al as die verstek in Instellings → Algemeen gekonfigureer is. |
| **Gebruik site-ikoon as kletsavatar** | Af | Vervang die verstek-AI-ikoon in die kletslegstukopskrif met die WordPress-site-ikoon (gestel onder Voorkoms → Pasmaak → Site-identiteit). |

### Outomatiseringsveiligheidsvlae {#automation-safety-flags}

Superdav AI Agent v1.18.0 stel menslike goedkeuringshekke en herinneringrekords bekend vir veiliger outomatiseringslopies. Hierdie kontroles kan in die funksievlae of gevorderde outomatiseringsinstellings verskyn, afhangende van die geïnstalleerde pakket.

| Vlag | Verstek | Beskrywing |
|---|---|---|
| **Vereis menslike goedkeuring** | Aanbeveel aan | Pouseer sensitiewe outomatiserings totdat ’n gemagtigde gebruiker die voorgestelde aksie hersien en bevestig. |
| **Herinnering-deduplisering** | Aan | Teken gestuurde herinneringe aan sodat herprobeerslae of geskeduleerde lopies nie duplikaatkennisgewings stuur nie. |
| **Aktiveer kalenderhulpmiddels** | Af totdat gekonfigureer | Laat die agent toe om gekonfigureerde Google-kalenders en gebeurtenisse te lees. |
| **Aktiveer SMS-kennisgewings** | Af totdat gekonfigureer | Laat goedgekeurde werkvloeie toe om TextBee SMS-kennisgewings te stuur nadat aanmeldbewyse gestoor is. |

### Pas veranderinge toe {#applying-changes}

Klik **Stoor instellings** nadat jy enige vlag geskakel het. Veranderinge tree onmiddellik in werking — geen kas-uitspoel of plugin-heraktivering word vereis nie.
