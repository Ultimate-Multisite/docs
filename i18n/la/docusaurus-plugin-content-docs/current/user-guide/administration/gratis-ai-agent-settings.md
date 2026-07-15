---
title: Optiones Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Optiones Gratis AI Agent

Pagina **Optiones → Provectae** in Gratis AI Agent configurationem gradu administratoris praebet pro integrationibus partis posticae. Haec pagina documentatur transmissionem responsionum, claves praebitorum quaestionis, institutionem servitii Superdav administrati, moderamina Google Calendar, optiones SMS TextBee, et vexilla functionum per totum rete.

## Optiones accedere {#accessing-settings}

1. In administratione WordPress, vade ad **Gratis AI Agent → Optiones**.
2. Preme tabulam **Provectae**.

## Configuratio extremi responsionum {#feedback-endpoint-configuration}

Extremum responsionum petitiones POST ab AI agente accipit quoties usor responsionem mittit per bullam pollice deorsum, vexillum auto-interrogativum, aut mandatum `/report-issue`.

| Campus | Descriptio |
|---|---|
| **Extremi Responsionum URL** | URL quae submissiones responsionum accipit ut petitiones HTTP POST cum corpore JSON. |
| **Feedback API Key** | bearer token missum in `Authorization` header cuiusque petitionis responsionum. Relinque vacuum si extremum tuum authenticationem non requirit. |

### Onus JSON Exspectatum {#expected-json-payload}

Extremum responsionum tuum corpus JSON accipere debet saltem cum his campis:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Campi additi in onere adesse possunt secundum contextum colloquii.

### Valores `triage_category` {#triagecategory-values}

Stratum triage AI unum ex sequentibus valoribus `triage_category` attribuit antequam onus transmittat:

| Valor | Sensus |
|---|---|
| `factual_error` | Administrator informationem factualem incorrectam praebuit. |
| `unhelpful_answer` | Responsum technice rectum erat sed utile non erat. |
| `inappropriate_content` | Responsum materiam continebat quae usoribus ostendi non debet. |
| `other` | Responsio categoriae notae non congruit. |

### Authenticatio {#authentication}

Si extremum tuum authenticationem requirit, campum **Feedback API Key** ad bearer token tuum pone. Agens mittit:

```
Authorization: Bearer <your-api-key>
```

Si campus **Feedback API Key** vacuus est, nullum `Authorization` header mittitur.

### Collectio Responsionum Dezactivanda {#disabling-feedback-collection}

Relinque campos **Extremi Responsionum URL** et **Feedback API Key** ambos vacuos. Bulla pollice deorsum et UI responsionum usoribus visibiles manent, sed submissiones ad ullum servitium externum non transmittuntur.

## Brave Search API Key {#brave-search-api-key}

Etiam in tabula **Provectae**, campus **Brave Search API Key** facultatem [Quaestionis Interneticae](../configuration/internet-search) efficit.

| Campus | Descriptio |
|---|---|
| **Brave Search API Key** | Clavis tua API ex tabula moderatoris elaboratoris Brave Search. Necessaria est ad quaestionem interneticam in adiutore AI efficiendam. |

Titulus campi nexum prehendibilem ad paginam inscriptionis API Brave Search continet. Relinque vacuum ut quaestio internetica dezactivetur.

Vide [Quaestionem Interneticam](../configuration/internet-search) pro documentis ad usorem finalem de hac functione.

## Servitium Superdav Administratum {#managed-superdav-service}

Superdav AI Agent v1.18.0 extrema servitii Superdav administrati et provisionem connexionis automaticam pro sitibus sustentatis addit. His moderatoribus utere cum situs tuus ad praebitorem hospitatum connecti debet loco extremi servitii manu configurati.

| Campus | Descriptio |
|---|---|
| **Servitium Superdav Administratum** | Connexionem servitii Superdav hospitati pro sitibus sustentatis efficit. |
| **Connexionem Provisione Instrue** | Provisionem automaticam extremi et credentialium incipit. Hoc utere postquam confirmaveris situm praebitorem administratum uti debere. |
| **Extremum Servitii / Status Connexionis** | Extremum praesens aut statum connexionis post provisionem ostendit. |

Post provisionem, optiones serva et statum connexionis verifica antequam processibus operum servitii administrati innitaris. Si provisio deficit, consilium iterandi ostensum recognosce et confirma situm licentiam habere ut praebitorem hospitatum utatur.

## Configuratio Google Calendar {#google-calendar-configuration}

Cum functiones calendarii Superdav AI Agent v1.18.0 effectae sunt, agens calendaria configurata et singula eventuum legere potest. Instrumenta calendarii ad lectionem ordinantur et utilia sunt ad monita schedulae conscia, consequentiam participum, et congruentiam contactuum.

| Campus | Descriptio |
|---|---|
| **Credentialia Google Calendar** | Credentialia aut connexionem token reponit quae requiritur ad data calendarii legenda. |
| **Selectio Calendarii** | Limitat quae calendaria configurata agens inspicere possit. |
| **Status Connexionis Calendarii** | Confirmat utrum credentialia praesentia calendaria et eventus legere possint. |

Credentialia calendarii ad calendaria quae agenti necessaria sunt limita. Reconnekte aut credentialia rota si status token exspiratum indicat.

## Notificationes SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 TextBee addit ut praebitorem SMS pro processibus notificationum configuratis. Notificationes SMS cum portis approbationis humanae coniungendae sunt pro nuntiis sensibilibus aut ad usores spectantibus.

| Campus | Descriptio |
|---|---|
| **Clavis API TextBee** | Petitiones ad praebitorem SMS TextBee authenticat. |
| **Instrumentum / Missor TextBee** | Missorem aut instrumentum TextBee eligit quod ad nuntios exeuntes adhibetur, cum a praebitore requiritur. |
| **Notificationes SMS Effectae** | Processibus approbatis permittit notificationes nuntiorum textualium mittere. Relinque dezactivatum ut missiones SMS prohibeantur. |

Mitte nuntium probationis tantum ad numerum ab administratore possessum, deinde mores portae approbationis confirma antequam monita schedulata aut ad participes spectantia efficias.

## Vexilla Functionum {#feature-flags}

Etiam in v1.9.0 introducta, tabula **Optiones → Vexilla Functionum** commutatores praebet pro functionibus optionalibus. Unumquodque vexillum aut effectum aut dezactivatum est per totum rete; nulla exceptio per situm hoc tempore est.

### Vexilla Functionum accedere {#accessing-feature-flags}

1. In administratione WordPress, vade ad **Gratis AI Agent → Optiones**.
2. Preme tabulam **Vexilla Functionum**.

### Vexilla Moderationis Accessus {#access-control-flags}

| Signum | Praedefinitum | Descriptio |
|---|---|---|
| **Ad Administratores restringere** | Off | Cum effectum est, soli utentes cum munere `administrator` tabulam colloquii AI Agent aperire possunt. Omnia alia munera nuntium "Contact your administrator" loco vident. |
| **Ad Network Admins restringere** | Off | Cum effectum est in rete multisite, soli Super Admins agente uti possunt. Administratores singulorum sitorum prohibentur. Praevalet super "Restrict to Administrators" si utraque effecta sunt. |
| **Accessum Subscriber permittere** | Off | Cum effectum est, utentes cum munere `subscriber` interfacie colloquii uti possunt, sed ad facultates solum legendi limitantur (nulla creatio postum aut mutationes configurationum). |
| **Pro Non-Sociis disable** | Off | Cum statu sodalitatis Ultimate Multisite integratur. Cum effectum est, colloquium occultatur pro sitis quae sodalitatem activam non habent. |

### Signa Notae {#branding-flags}

| Signum | Praedefinitum | Descriptio |
|---|---|---|
| **Pedem "Powered by Gratis AI Agent" occultare** | Off | Lineam attributionis notae removet quae in imo instrumenti colloquii ostenditur. Commendatur pro institutionibus white-label. |
| **Nomen Agentis Consuetum** | *(vacuum)* | Titulum praedefinitum "Gratis AI Agent" in capite colloquii et menu administratoris nomine producti tui proprio substituit. Vacuum relinque ut praedefinitum utaris. |
| **Electorem Agentis occultare** | Off | Cum effectum est, utentes inter quinque agentes insitos commutare non possunt. Agens praesens fixus est ad id quod ut praedefinitum in Settings → General configuratur. |
| **Icone Siti uti ut Chat Avatar** | Off | Iconem AI praedefinitam in capite instrumenti colloquii cum icone siti WordPress substituit (sub Appearance → Customize → Site Identity posita). |

### Signa Salutis Automationis {#automation-safety-flags}

Superdav AI Agent v1.18.0 portas approbationis humanae et tabulas recordationum introducit ad cursus automationis tutiores. Haec moderamina in signis functionum vel in configurationibus automationis provectis apparere possunt, secundum sarcinam institutam.

| Signum | Praedefinitum | Descriptio |
|---|---|---|
| **Approbationem Humanam requirere** | Commendatur on | Automationes sensibiles suspendit donec utens auctoritate praeditus actionem propositam recognoscat et confirmet. |
| **Deduplicatio Recordationum** | On | Recordationes missas registrat, ut conatus repetiti aut cursus schedulati notificationes duplicatas non mittant. |
| **Instrumenta Calendarii efficere** | Off donec configuratum | Agenti permittit calendaria Google et eventus configuratos legere. |
| **Notificationes SMS efficere** | Off donec configuratum | Fluxibus laboris approbatis permittit notificationes TextBee SMS mittere postquam credentialia servata sunt. |

### Mutationes Applicare {#applying-changes}

Preme **Save Settings** postquam aliquod signum mutaveris. Mutationes statim effectum habent — nulla purgatio cache aut reactivatio plugin requiritur.
