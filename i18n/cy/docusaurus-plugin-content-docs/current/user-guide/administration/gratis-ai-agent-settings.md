---
title: Gosodiadau Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gosodiadau Gratis AI Agent

Mae’r sgrin **Settings → Advanced** yn Gratis AI Agent yn darparu ffurfweddiad lefel gweinyddwr ar gyfer integreiddiadau backend. Mae’r dudalen hon yn dogfennu anfon adborth ymlaen, allweddi darparwyr chwilio, gosod gwasanaeth Superdav a reolir, rheolyddion Google Calendar, gosodiadau SMS TextBee, a baneri nodwedd ar draws y rhwydwaith.

## Cyrchu Gosodiadau {#accessing-settings}

1. Yn weinyddiaeth WordPress, ewch i **Gratis AI Agent → Settings**.
2. Cliciwch y tab **Advanced**.

## Ffurfweddu Endpoint Adborth {#feedback-endpoint-configuration}

Mae’r endpoint adborth yn derbyn ceisiadau POST gan yr AI agent pryd bynnag y bydd defnyddiwr yn cyflwyno adborth drwy’r botwm bawd-i-lawr, y faner awto-anogiad, neu’r gorchymyn `/report-issue`.

| Maes | Disgrifiad |
|---|---|
| **Feedback Endpoint URL** | Yr URL sy’n derbyn cyflwyniadau adborth fel ceisiadau HTTP POST gyda chorff JSON. |
| **Feedback API Key** | bearer token a anfonir yn `Authorization` header pob cais adborth. Gadewch yn wag os nad yw eich endpoint yn gofyn am ddilysu. |

### Llwyth JSON Disgwyliedig {#expected-json-payload}

Rhaid i’ch endpoint adborth dderbyn corff JSON gydag o leiaf y meysydd canlynol:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Gall meysydd ychwanegol fod yn bresennol yn y llwyth yn dibynnu ar gyd-destun y sgwrs.

### Gwerthoedd `triage_category` {#triagecategory-values}

Mae’r haen frysbennu AI yn neilltuo un o’r gwerthoedd canlynol i `triage_category` cyn anfon y llwyth ymlaen:

| Gwerth | Ystyr |
|---|---|
| `factual_error` | Darparodd y cynorthwyydd wybodaeth ffeithiol anghywir. |
| `unhelpful_answer` | Roedd yr ymateb yn dechnegol gywir ond ddim yn ddefnyddiol. |
| `inappropriate_content` | Roedd yr ymateb yn cynnwys cynnwys na ddylid ei ddangos i ddefnyddwyr. |
| `other` | Nid oedd yr adborth yn cyfateb i gategori hysbys. |

### Dilysu {#authentication}

Os yw eich endpoint yn gofyn am ddilysu, gosodwch y maes **Feedback API Key** i’ch bearer token. Mae’r agent yn anfon:

```
Authorization: Bearer <your-api-key>
```

Os yw’r maes **Feedback API Key** yn wag, ni anfonir unrhyw `Authorization` header.

### Analluogi Casglu Adborth {#disabling-feedback-collection}

Gadewch y meysydd **Feedback Endpoint URL** a **Feedback API Key** yn wag. Mae’r botwm bawd-i-lawr a’r UI adborth yn parhau’n weladwy i ddefnyddwyr, ond ni chaiff cyflwyniadau eu hanfon ymlaen i unrhyw wasanaeth allanol.

## Brave Search API Key {#brave-search-api-key}

Hefyd ar y tab **Advanced**, mae’r maes **Brave Search API Key** yn galluogi’r gallu [Chwilio’r Rhyngrwyd](../configuration/internet-search).

| Maes | Disgrifiad |
|---|---|
| **Brave Search API Key** | Eich allwedd API o ddangosfwrdd datblygwyr Brave Search. Yn ofynnol i alluogi chwilio’r rhyngrwyd yn y cynorthwyydd AI. |

Mae label y maes yn cynnwys dolen gliciadwy i dudalen gofrestru Brave Search API. Gadewch yn wag i analluogi chwilio’r rhyngrwyd.

Gweler [Chwilio’r Rhyngrwyd](../configuration/internet-search) am ddogfennaeth defnyddwyr terfynol ar y nodwedd hon.

## Gwasanaeth Superdav a Reolir {#managed-superdav-service}

Mae Superdav AI Agent v1.18.0 yn ychwanegu endpoints gwasanaeth Superdav a reolir a darpariaeth cysylltiad awtomatig ar gyfer safleoedd a gefnogir. Defnyddiwch y rheolyddion hyn pan ddylai eich safle gysylltu â’r darparwr a letyir yn lle endpoint gwasanaeth wedi’i ffurfweddu â llaw.

| Maes | Disgrifiad |
|---|---|
| **Managed Superdav Service** | Yn galluogi’r cysylltiad gwasanaeth Superdav a letyir ar gyfer safleoedd a gefnogir. |
| **Provision Connection** | Yn dechrau darpariaeth awtomatig endpoint a manylion mewngofnodi. Defnyddiwch hwn ar ôl cadarnhau y dylai’r safle ddefnyddio’r darparwr a reolir. |
| **Service Endpoint / Connection Status** | Yn dangos yr endpoint cyfredol neu gyflwr y cysylltiad ar ôl darpariaeth. |

Ar ôl darpariaeth, cadwch osodiadau a gwiriwch statws y cysylltiad cyn dibynnu ar lifoedd gwaith gwasanaeth a reolir. Os bydd darpariaeth yn methu, adolygwch y canllawiau ailgeisio a ddangosir a chadarnhewch fod gan y safle ganiatâd i ddefnyddio’r darparwr a letyir.

## Ffurfweddu Google Calendar {#google-calendar-configuration}

Pan fydd nodweddion calendr Superdav AI Agent v1.18.0 wedi’u galluogi, gall yr agent ddarllen calendrau wedi’u ffurfweddu a manylion digwyddiadau. Mae offer calendr yn canolbwyntio ar ddarllen ac maent yn ddefnyddiol ar gyfer atgoffwyr sy’n ymwybodol o amserlen, dilyniant gyda mynychwyr, a chyfatebu cysylltiadau.

| Maes | Disgrifiad |
|---|---|
| **Google Calendar Credentials** | Yn storio’r manylion mewngofnodi neu’r cysylltiad token sydd ei angen i ddarllen data calendr. |
| **Calendar Selection** | Yn cyfyngu pa galendrau wedi’u ffurfweddu y gall yr agent eu harchwilio. |
| **Calendar Connection Status** | Yn cadarnhau a all y manylion mewngofnodi cyfredol ddarllen calendrau a digwyddiadau. |

Cadwch fanylion mewngofnodi calendr wedi’u cyfyngu i’r calendrau sydd eu hangen ar yr agent. Ailgysylltwch neu gylchdrowch fanylion mewngofnodi os yw’r statws yn nodi token sydd wedi dod i ben.

## Hysbysiadau SMS TextBee {#textbee-sms-notifications}

Mae Superdav AI Agent v1.18.0 yn ychwanegu TextBee fel darparwr SMS ar gyfer llifoedd gwaith hysbysu wedi’u ffurfweddu. Dylid paru hysbysiadau SMS â gatiau cymeradwyo dynol ar gyfer negeseuon sensitif neu sy’n wynebu defnyddwyr.

| Maes | Disgrifiad |
|---|---|
| **TextBee API Key** | Yn dilysu ceisiadau i ddarparwr SMS TextBee. |
| **TextBee Device / Sender** | Yn dewis anfonwr neu ddyfais TextBee a ddefnyddir ar gyfer negeseuon sy’n mynd allan, pan fo’r darparwr yn gofyn am hynny. |
| **SMS Notifications Enabled** | Yn caniatáu i lifoedd gwaith cymeradwy anfon hysbysiadau neges destun. Gadewch wedi’i analluogi i atal anfon SMS. |

Anfonwch neges brawf yn unig at rif sy’n eiddo i weinyddwr, yna cadarnhewch ymddygiad y giât gymeradwyo cyn galluogi atgoffwyr amserlenedig neu atgoffwyr sy’n wynebu mynychwyr.

## Baneri Nodwedd {#feature-flags}

Hefyd wedi’u cyflwyno yn v1.9.0, mae’r tab **Settings → Feature Flags** yn darparu switshis togl ar gyfer swyddogaethau dewisol. Mae pob baner naill ai wedi’i galluogi neu wedi’i hanalluogi ar draws y rhwydwaith; nid oes gor-reolaeth fesul safle ar hyn o bryd.

### Cyrchu Baneri Nodwedd {#accessing-feature-flags}

1. Yn weinyddiaeth WordPress, ewch i **Gratis AI Agent → Settings**.
2. Cliciwch y tab **Feature Flags**.

### Baneri Rheoli Mynediad {#access-control-flags}

| Baner | Diofyn | Disgrifiad |
|---|---|---|
| **Cyfyngu i Administrators** | I ffwrdd | Pan fydd wedi’i alluogi, dim ond defnyddwyr â rôl `administrator` sy’n gallu agor panel sgwrsio yr AI Agent. Bydd pob rôl arall yn gweld neges "Cysylltwch â’ch gweinyddwr" yn lle hynny. |
| **Cyfyngu i Network Admins** | I ffwrdd | Pan fydd wedi’i alluogi ar rwydwaith multisite, dim ond Super Admins sy’n gallu defnyddio’r agent. Mae gweinyddwyr safleoedd unigol yn cael eu blocio. Mae’n cael blaenoriaeth dros "Cyfyngu i Administrators" os yw’r ddau wedi’u galluogi. |
| **Caniatáu Mynediad Subscriber** | I ffwrdd | Pan fydd wedi’i alluogi, gall defnyddwyr â rôl `subscriber` ddefnyddio’r rhyngwyneb sgwrsio ond maent wedi’u cyfyngu i alluoedd darllen yn unig (dim creu cofnodion na newidiadau i osodiadau). |
| **Analluogi ar gyfer y rhai nad ydynt yn Members** | I ffwrdd | Yn integreiddio â statws aelodaeth Ultimate Multisite. Pan fydd wedi’i alluogi, mae sgwrsio wedi’i guddio ar gyfer safleoedd nad oes ganddynt aelodaeth weithredol. |

### Baneri Brandio {#branding-flags}

| Baner | Diofyn | Disgrifiad |
|---|---|---|
| **Cuddio Troedyn "Powered by Gratis AI Agent"** | I ffwrdd | Yn dileu’r llinell briodoli brandio a ddangosir ar waelod y teclyn sgwrsio. Argymhellir ar gyfer lleoliadau label gwyn. |
| **Enw Agent Personol** | *(gwag)* | Yn disodli’r label diofyn "Gratis AI Agent" ym mhennyn y sgwrs a’r ddewislen weinyddol â’ch enw cynnyrch eich hun. Gadewch yn wag i ddefnyddio’r diofyn. |
| **Cuddio Dewisydd Agent** | I ffwrdd | Pan fydd wedi’i alluogi, ni all defnyddwyr newid rhwng y pum agent adeiledig. Mae’r agent presennol wedi’i osod i beth bynnag sydd wedi’i ffurfweddu fel y diofyn yn Gosodiadau → Cyffredinol. |
| **Defnyddio Eicon y Safle fel Afatar Sgwrs** | I ffwrdd | Yn disodli’r eicon AI diofyn ym mhennyn y teclyn sgwrsio ag eicon safle WordPress (wedi’i osod o dan Appearance → Customize → Site Identity). |

### Baneri Diogelwch Awtomeiddio {#automation-safety-flags}

Mae Superdav AI Agent v1.18.0 yn cyflwyno gatiau cymeradwyaeth gan bobl a chofnodion atgoffa ar gyfer rhediadau awtomeiddio mwy diogel. Gall y rheolyddion hyn ymddangos yn y baneri nodwedd neu osodiadau awtomeiddio uwch, yn dibynnu ar y pecyn sydd wedi’i osod.

| Baner | Diofyn | Disgrifiad |
|---|---|---|
| **Angen Cymeradwyaeth gan Berson** | Argymhellir ymlaen | Yn oedi awtomeiddiadau sensitif nes bod defnyddiwr awdurdodedig yn adolygu ac yn cadarnhau’r weithred arfaethedig. |
| **Dileu Dyblygiadau Atgoffa** | Ymlaen | Yn cofnodi atgoffion a anfonwyd fel nad yw ailgeisiadau neu rediadau wedi’u hamserlennu yn anfon hysbysiadau dyblyg. |
| **Galluogi Offer Calendr** | I ffwrdd nes ei ffurfweddu | Yn caniatáu i’r agent ddarllen calendrau a digwyddiadau Google sydd wedi’u ffurfweddu. |
| **Galluogi Hysbysiadau SMS** | I ffwrdd nes ei ffurfweddu | Yn caniatáu i lifoedd gwaith cymeradwy anfon hysbysiadau SMS TextBee ar ôl i fanylion mewngofnodi gael eu cadw. |

### Cymhwyso Newidiadau {#applying-changes}

Cliciwch **Cadw Gosodiadau** ar ôl toglo unrhyw faner. Daw newidiadau i rym ar unwaith — nid oes angen fflysio storfa na hailactifadu plugin.
