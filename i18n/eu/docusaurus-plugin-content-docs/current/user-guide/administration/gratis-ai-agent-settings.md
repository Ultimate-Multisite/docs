---
title: Gratis AI Agent Sailoakizunak
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Heuruenaketa Kontrolak

Gratis AI Agent-en **Settings → Advanced** ekranak, v1.5.0-ean partegitutako backend integrazioak dira administrazio-nivelaren konfigurazioa. Hau da **Feedback Endpoint** lekuak eta horiek espero dartzeko formatu bidez dokumentatuta.

## Heuruenaketa Kontrolatzeko

1. WordPress adminan, **Gratis AI Agent → Settings**-era jarraitu.
2. **Advanced** tabira klikatu.

## Feedback Endpoint Konfigurazioa

Feedback endpoint-ek AI agent-etik POST espritzak hartzen duenean, erabiltzaile bat thumbs-down botoia, auto-prompt banner-a edo `/report-issue` komandua bidez heurtu ematen duenean.

| Lege | Deskribapena |
|---|---|
| **Feedback Endpoint URL** | JSON korpua (body) bidez HTTP POST espritzak hartzen duen URL-a. |
| **Feedback API Key** | Feedback espritzaren lehen erabilera (`Authorization` header-ean) bidaltzen bearer token bat da. Hau ez du behar dela autentifikazioa, lekuan izateko itxura izan. |

### Esperatuta JSON Payload

Feedback endpoint-ek JSON korpua hartu beharko du, horrek lehen erabilera hauek:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Aldueko lekuak, adierazpen kontekstua beharko du ondorioz.

### `triage_category` Arredaketa

AI triage layer-ek payloada aurretik bidaltzeko, `triage_category`-ri hauek bat ematen dio:

| Arre | Meantzen duena |
|---|---|
| `factual_error` | Asistenta informazio faktiko ezdu eta. |
| `unhelpful_answer` | Errekontza teknikoa da, baina ez da laguntzak. |
| `inappropriate_content` | Errekontzaren kontuan erabiltzaileei ez ematen dituen kontua barri. |
| `other` | Feedback-ek kategorian jakin bat ez du. |

### Autentifikazioa

Honek iragatik, irag endpoint-ek autentifikazioa behar bada, **Feedback API Key** lehenen testu-lekuan hau daireatu zure bearer token-a. Agent-ek göndaten du:

```
Authorization: Bearer <zure-api-key>
```

Honek **Feedback API Key** lehen testu-lekuak eragila bada, `Authorization` header ez da göndaten.

### Feedback Kolektibaren Deshabilitazioa

**Feedback Endpoint URL** eta **Feedback API Key** lehen testu-lekuak ez daireatu. Lehenen testu-lekuak erabiltzaileei "thumbs-down" botoia eta feedback UI-a erabilera jarraitzen du, baina emateak arduradun serbizio bat edo beste batzuk aurrera eramaintzen ez du.

## Brave Search API Key

**Advanced** taban ere, **Brave Search API Key** lehen testu-lekuak [Internet Search](../configuration/internet-search) erabilera eskatzen du.

| Lehen Testu-leku | Deskribapena |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-ek jartzen duten API key-a. AI asistentian internet search erabilera eskatzeko beharrezkoa da. |

Lehen testu-lekuaren etiketa Brave Search API jartzeko lapuriko lekuan klik egin dezake. Internet search deshabilitatzeko ez daireatu.

Honek funtazioa erabilera erabiltzaileei buruzko dokumentazioa [Internet Search](../configuration/internet-search) lehen testu-lekuan aurkitu.

## Feature Flags (Funktazionalitatearen Balioak)

v1.9.0-ean iragitzitako, **Settings → Feature Flags** tab-ek opsional funtazionalitateak jarraitzen duen toggle switches ez daireatu. Lehen testu-lekuak network-ek erabiltzaile batzuk erabilera edo ez erabiltzea emate du; aipatzen ez dago site-era aukerarekin superatzeko (override) testu-leku bat.

### Feature Flags Erabilera

1. WordPress adminan, **Gratis AI Agent → Settings**-ra jarraitu.
2. **Feature Flags** tab-ek klik egin.

### Access Control Flags

| Euskal Emate | Default | Deskribapena |
|---|---|---|
| **Administratorei irekitzea** | Off | Horra onartu denean, `administrator` rola duten erabiltzaileei lehen AI Agent chat panel-a iritsi daiteke. Beste rolek "Administratorrekin hartatu" mezu bat ikusten dute. |
| **Aparatua Administuratorei irekitzea** | Off | Multisite networkan onartu denean, Super Admin-ek diartzen dituz agenta erabili. Site administratek ez daiteke erabiltzea. Horrek "Administratorei irekitzea" baino aurrera egiten du, batez ere horiek artean onartu denean. |
| **Subscriber Erabiltzaileak irekitzea** | Off | Onartu denean, `subscriber` rola duten erabiltzaileei chat interfacea erabili daiteke baina lekua leikidun (post bat ez daiteke jartzea edo konfiguerazio-larriak aldatzea). |
| **Ez-miembro berehala deshabilitatzea** | Off | Ultimate Multisite membership statusarekin integratzen da. Onartu denean, aktibo membership ez duten siteetako chatak horretan gizituta dago. |

### Branding Emateak (Branding Flags)

| Emate | Default | Deskribapena |
|---|---|---|
| **"Gratis AI Agent"-aren footer-a gizatzea** | Off | Chat widget-en amaieran ikusten duen branding artearen lantiak aukeratzen da. White-label despliegamentuetan hautatuta dago. |
| **Agentaren namia osoa (Custom Agent Name)** | *(ez ezarritua)* | Chat header eta admin menu-an dagoen "Gratis AI Agent" lehenaren ordez, sizunakren namia hartzen da. Ez ezarritua jakinarazteko defaulta erabiltzeko. |
| **Agent Picker gizatzea** | Off | Onartu denean, erabiltzaileei hiru agent bat artean aldatzea ez daiteke. Aktibo agenta horrek Settings → General-ean konfigueratu duen defaultaren edozein baten kopurua izango da. |
| **Site ikonaren chat avatar gaurtzea** | Off | Chat widget header-en default AI ikona horretan WordPress site ikonak erakiago da (Appearance → Customize → Site Identity-an ezarrituta). |

### Alderpenak aplikatzea

Beste emate bat onartu ondoren **Save Settings** (Konfigurazioak saldatu) klik egin behar duzu. Alderpenak hemen egiten dira — cache edo pluginarekin aktibatu dezakeko ez daitezke.
