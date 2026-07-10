---
title: Gratis AI Agent Astellungen
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Astellungen {#gratis-ai-agent-settings}

Den **Astellungen → Erweidert**-Écran am Gratis AI Agent bitt Konfiguratioun op Administrateursniveau fir Backend-Integratiounen. Dës Säit dokumentéiert d'Weiderleedung vu Feedback, Schlëssele fir Sichubidder, d'Ariichtung vum verwaltete Superdav-Service, Google Calendar-Kontrollen, TextBee SMS-Astellungen an netzwäit Funktiouns-Flags.

## Zougrëff op Astellungen {#accessing-settings}

1. Am WordPress-Admin, gitt op **Gratis AI Agent → Astellungen**.
2. Klickt op den Tab **Erweidert**.

## Feedback-Ennpunkt-Konfiguratioun {#feedback-endpoint-configuration}

De Feedback-Ennpunkt kritt POST-Ufroe vum AI Agent, wann e Benotzer Feedback iwwer de Daumen-erof-Knäppchen, den Auto-Prompt-Banner oder de Kommando `/report-issue` ofgëtt.

| Feld | Beschreiwung |
|---|---|
| **Feedback-Ennpunkt-URL** | D'URL, déi Feedback-Asendungen als HTTP POST-Ufroe mat engem JSON-Kierper kritt. |
| **Feedback API Key** | E bearer token, deen am `Authorization` header vun all Feedback-Ufro geschéckt gëtt. Eidel loossen, wann Ären Ennpunkt keng Authentifikatioun verlaangt. |

### Erwaarte JSON-Notzlaascht {#expected-json-payload}

Äre Feedback-Ennpunkt muss e JSON-Kierper mat op d'mannst de folgende Felder akzeptéieren:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Zousätzlech Felder kënnen an der Notzlaascht enthale sinn, jee no Gespréichskontext.

### `triage_category` Wäerter {#triagecategory-values}

D'AI-Triage-Schicht weist `triage_category` ee vun de folgende Wäerter zou, ier d'Notzlaascht weidergeleet gëtt:

| Wäert | Bedeitung |
|---|---|
| `factual_error` | Den Assistant huet falsch faktuell Informatioune geliwwert. |
| `unhelpful_answer` | D'Äntwert war technesch korrekt, awer net nëtzlech. |
| `inappropriate_content` | D'Äntwert huet Inhalt enthalen, deen de Benotzer net soll gewise ginn. |
| `other` | De Feedback huet keng bekannter Kategorie entsprach. |

### Authentifikatioun {#authentication}

Wann Ären Ennpunkt Authentifikatioun verlaangt, setzt d'Feld **Feedback API Key** op Äre bearer token. Den Agent schéckt:

```
Authorization: Bearer <your-api-key>
```

Wann d'Feld **Feedback API Key** eidel ass, gëtt keen `Authorization` header geschéckt.

### Feedback-Sammlung deaktivéieren {#disabling-feedback-collection}

Loosst béid Felder **Feedback-Ennpunkt-URL** an **Feedback API Key** eidel. De Daumen-erof-Knäppchen an d'Feedback-UI bleiwen fir Benotzer siichtbar, mee Asendunge ginn net un en externen Déngscht weidergeleet.

## Brave Search API Key {#brave-search-api-key}

Och um Tab **Erweidert** aktivéiert d'Feld **Brave Search API Key** d'Fäegkeet [Internet-Sich](../configuration/internet-search).

| Feld | Beschreiwung |
|---|---|
| **Brave Search API Key** | Ären API-Schlëssel aus dem Brave Search Entwéckler-Dashboard. Néideg, fir Internet-Sich am AI Assistant z'aktivéieren. |

D'Feldbezeechnung enthält e klickbare Link op d'Brave Search API Umeldungssäit. Eidel loossen, fir Internet-Sich ze deaktivéieren.

Kuckt [Internet-Sich](../configuration/internet-search) fir Endbenotzer-Dokumentatioun zu dëser Funktioun.

## Verwaltete Superdav-Service {#managed-superdav-service}

Superdav AI Agent v1.18.0 füügt verwaltete Superdav-Service-Ennpunkten an automatesch Verbindungsbereetstellung fir ënnerstëtzt Websäiten derbäi. Benotzt dës Kontrollen, wann Är Websäit mam gehosteten Ubidder amplaz mat engem manuell konfiguréierte Service-Ennpunkt verbonne soll ginn.

| Feld | Beschreiwung |
|---|---|
| **Verwaltete Superdav-Service** | Aktivéiert déi gehostete Superdav-Service-Verbindung fir ënnerstëtzt Websäiten. |
| **Verbindung bereetstellen** | Start automatesch Ennpunkt- a Umeldungsinformatiouns-Bereetstellung. Benotzt dëst, nodeems Dir confirméiert hutt, datt d'Websäit de verwalteten Ubidder benotze soll. |
| **Service-Ennpunkt / Verbindungsstatus** | Weist den aktuellen Ennpunkt oder Verbindungszoustand no der Bereetstellung. |

No der Bereetstellung späichert d'Astellungen a kontrolléiert de Verbindungsstatus, ier Dir Iech op verwaltete-Service-Aarbechtsleef verloosst. Wann d'Bereetstellung feelt, iwwerpréift déi ugewisen Uleedung fir en neie Versuch a confirméiert, datt d'Websäit d'Erlaabnis huet, de gehosteten Ubidder ze benotzen.

## Google Calendar Konfiguratioun {#google-calendar-configuration}

Wann d'Kalennerfunktioune vu Superdav AI Agent v1.18.0 aktivéiert sinn, kann den Agent konfiguréiert Kalenneren an Eventdetailer liesen. Kalenner-Tools si liesorientéiert a sinn nëtzlech fir plangbewosst Erënnerungen, Nofroen bei Participanten a Kontaktzouuerdnung.

| Feld | Beschreiwung |
|---|---|
| **Google Calendar Umeldungsinformatiounen** | Späichert d'Umeldungsinformatiounen oder d'Token-Verbindung, déi néideg ass, fir Kalennerdaten ze liesen. |
| **Kalennerauswiel** | Limitéiert, wéi eng konfiguréiert Kalenneren den Agent däerf nokucken. |
| **Kalenner-Verbindungsstatus** | Confirméiert, ob déi aktuell Umeldungsinformatiounen Kalenneren an Eventer liese kënnen. |

Halt Kalenner-Umeldungsinformatiounen op déi Kalenneren limitéiert, déi den Agent brauch. Verbannt nei oder rotéiert Umeldungsinformatiounen, wann de Status en ofgelafenen Token ugëtt.

## TextBee SMS-Benoriichtegungen {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 füügt TextBee als SMS-Ubidder fir konfiguréiert Benoriichtegungs-Aarbechtsleef derbäi. SMS-Benoriichtegunge solle mat mënschlechen Zoustëmmungs-Paarten fir sensibel oder benotzergeriicht Messagen gekoppelt ginn.

| Feld | Beschreiwung |
|---|---|
| **TextBee API-Schlëssel** | Authentifizéiert Ufroen un den TextBee SMS-Ubidder. |
| **TextBee Apparat / Sender** | Wielt den TextBee-Sender oder Apparat aus, dee fir ausgoend Messagen benotzt gëtt, wann dat vum Ubidder verlaangt gëtt. |
| **SMS-Benoriichtegungen aktivéiert** | Erlaabt guttgeheescht Aarbechtsleef, Textnoriicht-Benoriichtegungen ze schécken. Deaktivéiert loossen, fir SMS-Verschécken ze verhënneren. |

Schéckt eng Testnoriicht nëmmen un eng Nummer, déi engem Administrateur gehéiert, a confirméiert duerno d'Verhale vun der Zoustëmmungs-Paart, ier geplangten oder participantgeriicht Erënnerungen aktivéiert ginn.

## Funktiouns-Flags {#feature-flags}

Och agefouert an v1.9.0, bitt den Tab **Astellungen → Funktiouns-Flags** Umschalter fir optional Funktionalitéit. All Flag ass entweder aktivéiert oder netzwäit deaktivéiert; et gëtt de Moment keng Iwwerschreiwung pro Websäit.

### Zougrëff op Funktiouns-Flags {#accessing-feature-flags}

1. Am WordPress-Admin, gitt op **Gratis AI Agent → Astellungen**.
2. Klickt op den Tab **Funktiouns-Flags**.

### Zougrëffskontroll-Flags {#access-control-flags}

| Flag | Standard | Beschreiwung |
|---|---|---|
| **Op Administrateure limitéieren** | Aus | Wann aktivéiert, kënnen nëmme Benotzer mat der Roll `administrator` de AI Agent-Chat-Panel opmaachen. All aner Rollen gesinn amplaz eng "Kontaktéiert Ären Administrateur"-Noriicht. |
| **Op Network Admins limitéieren** | Aus | Wann op engem Multisite-Netzwierk aktivéiert, kënnen nëmme Super Admins den Agent benotzen. Eenzel Site-Administrateure gi blockéiert. Huet Virrang virun "Op Administrateure limitéieren", wann déi zwou aktivéiert sinn. |
| **Subscriber-Zougang erlaben** | Aus | Wann aktivéiert, kënnen Benotzer mat der Roll `subscriber` d’Chat-Interface benotzen, mee si sinn op lies-nëmmen-Fäegkeete limitéiert (keng Erstellung vu Bäiträg oder Ännerunge vun Astellungen). |
| **Fir Net-Memberen deaktivéieren** | Aus | Integréiert mam Ultimate Multisite-Memberschaftsstatus. Wann aktivéiert, gëtt de Chat fir Siten verstoppt, déi keng aktiv Memberschaft hunn. |

### Branding-Flags {#branding-flags}

| Flag | Standard | Beschreiwung |
|---|---|---|
| **"Powered by Gratis AI Agent"-Footer verstoppen** | Aus | Entfernt d’Branding-Zouweisungszeil, déi ënnen am Chat-Widget ugewise gëtt. Recommandéiert fir White-Label-Deployementer. |
| **Personaliséierten Agent-Numm** | *(eidel)* | Ersetzt de Standard-Label "Gratis AI Agent" am Chat-Header an am Admin-Menü duerch Ären eegene Produktnumm. Eidel loossen, fir de Standard ze benotzen. |
| **Agent-Picker verstoppen** | Aus | Wann aktivéiert, kënnen d’Benotzer net tëschent de fënnef agebauten Agenten wiesselen. Den aktuelle Agent ass op dat festgeluecht, wat als Standard an Settings → General konfiguréiert ass. |
| **Site-Icon als Chat-Avatar benotzen** | Aus | Ersetzt de Standard-AI-Icon am Header vum Chat-Widget duerch d’WordPress-Site-Icon (agesat ënner Appearance → Customize → Site Identity). |

### Automatiséierungs-Sécherheets-Flags {#automation-safety-flags}

Superdav AI Agent v1.18.0 féiert mënschlech Geneemegungs-Paarten an Erënnerungsopzeechnunge fir méi sécher Automatiséierungslaf an. Dës Kontrollen kënnen an de Feature-Flags oder an den erweiderten Automatiséierungsastellungen opdauchen, jee no installéiertem Package.

| Flag | Standard | Beschreiwung |
|---|---|---|
| **Mënschlech Geneemegung erfuerderen** | Recommandéiert un | Pauséiert sensibel Automatiséierungen, bis en autoriséierte Benotzer déi virgeschloen Aktioun iwwerpréift a confirméiert. |
| **Erënnerungs-Deduplicatioun** | Un | Späichert verschéckt Erënnerungen, sou datt Widderhuelungen oder geplangte Laf keng duebel Notifikatioune verschécken. |
| **Kalenner-Tools aktivéieren** | Aus bis konfiguréiert | Erlaabt dem Agent, konfiguréiert Google-Kalenneren an Eventer ze liesen. |
| **SMS-Notifikatiounen aktivéieren** | Aus bis konfiguréiert | Erlaabt geneemegt Workflows, TextBee-SMS-Notifikatiounen ze verschécken, nodeems d’Umeldedonnéeë gespäichert goufen. |

### Ännerungen uwenden {#applying-changes}

Klickt op **Save Settings**, nodeems Dir eng Flag ëmgeschalt hutt. Ännerunge ginn direkt a Kraaft — keng Cache-Eidelmaachung oder Plugin-Reaktivéierung ass erfuerderlech.
